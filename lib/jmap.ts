// JMAP helper functions
export async function getJMAPSession() {
  const hostname = process.env.JMAP_HOSTNAME;
  const authUrl = `https://${hostname}/.well-known/jmap`;
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.JMAP_API_TOKEN}`,
  };

  const response = await fetch(authUrl, {
    method: "GET",
    headers,
  });

  if (!response.ok) {
    throw new Error(`JMAP session failed: ${response.statusText}`);
  }

  return response.json();
}

export async function getMailboxIds(apiUrl: string, accountId: string) {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.JMAP_API_TOKEN}`,
  };

  const response = await fetch(apiUrl, {
    method: "POST",
    headers,
    body: JSON.stringify({
      using: ["urn:ietf:params:jmap:core", "urn:ietf:params:jmap:mail"],
      methodCalls: [
        ["Mailbox/query", { accountId, filter: { name: "Drafts" } }, "drafts"],
        ["Mailbox/query", { accountId, filter: { name: "Sent" } }, "sent"],
      ],
    }),
  });

  if (!response.ok) {
    throw new Error(`Mailbox query failed: ${response.statusText}`);
  }

  const data = await response.json();
  return {
    draftId: data["methodResponses"][0][1].ids[0],
    sentId: data["methodResponses"][1][1].ids[0],
  };
}

export async function getIdentityId(apiUrl: string, accountId: string) {
  const username = process.env.JMAP_EMAIL;
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.JMAP_API_TOKEN}`,
  };

  const response = await fetch(apiUrl, {
    method: "POST",
    headers,
    body: JSON.stringify({
      using: [
        "urn:ietf:params:jmap:core",
        "urn:ietf:params:jmap:mail",
        "urn:ietf:params:jmap:submission",
      ],
      methodCalls: [["Identity/get", { accountId, ids: null }, "a"]],
    }),
  });

  if (!response.ok) {
    throw new Error(`Identity query failed: ${response.statusText}`);
  }

  const data = await response.json();
  const identity = data["methodResponses"][0][1].list.find(
    (identity: any) => identity.email === username
  );

  if (!identity) {
    throw new Error(`No identity found for ${username}`);
  }

  return identity.id;
}

export async function sendJMAPEmail(
  apiUrl: string,
  accountId: string,
  draftId: string,
  sentId: string,
  identityId: string,
  emailData: {
    to: string;
    subject: string;
    body: string;
  }
) {
  const username = process.env.JMAP_EMAIL;
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.JMAP_API_TOKEN}`,
  };

  const draftObject = {
    from: [{ email: username }],
    to: [{ email: emailData.to }],
    subject: emailData.subject,
    keywords: { $draft: true },
    mailboxIds: { [draftId]: true },
    bodyValues: { body: { value: emailData.body, charset: "utf-8" } },
    textBody: [{ partId: "body", type: "text/plain" }],
  };

  const response = await fetch(apiUrl, {
    method: "POST",
    headers,
    body: JSON.stringify({
      using: [
        "urn:ietf:params:jmap:core",
        "urn:ietf:params:jmap:mail",
        "urn:ietf:params:jmap:submission",
      ],
      methodCalls: [
        ["Email/set", { accountId, create: { draft: draftObject } }, "a"],
        [
          "EmailSubmission/set",
          {
            accountId,
            onSuccessUpdateEmail: {
              "#sendIt": {
                keywords: { $draft: null }, // Remove draft keyword
                mailboxIds: { [draftId]: null, [sentId]: true }, // Move from Drafts to Sent
              },
            },
            create: { sendIt: { emailId: "#draft", identityId } },
          },
          "b",
        ],
      ],
    }),
  });

  if (!response.ok) {
    throw new Error(`Email sending failed: ${response.statusText}`);
  }

  const result = await response.json();

  // Check if Email/set was successful
  if (
    result.methodResponses[0][0] !== "Email/set" ||
    result.methodResponses[0][1].notCreated
  ) {
    throw new Error(
      `Email creation failed: ${JSON.stringify(result.methodResponses[0][1])}`
    );
  }

  // Check if EmailSubmission/set was successful
  if (
    result.methodResponses[1][0] === "error" ||
    result.methodResponses[1][1].notCreated
  ) {
    throw new Error(
      `Email submission failed: ${JSON.stringify(result.methodResponses[1][1])}`
    );
  }

  return result;
}
