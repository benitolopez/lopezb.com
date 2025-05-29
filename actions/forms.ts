"use server";

import {
  NewsletterFormState,
  NewsletterFormSchema,
  AskMeAnythingFormState,
  AskMeAnythingFormSchema,
} from "@/lib/forms";
import {
  getJMAPSession,
  getMailboxIds,
  getIdentityId,
  sendJMAPEmail,
} from "@/lib/jmap";

import { redirect } from "next/navigation";

export async function subscribeToNewsletter(
  state: NewsletterFormState,
  formData: FormData
) {
  const validatedFields = NewsletterFormSchema.safeParse({
    email: formData.get("email"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      values: {
        email: String(formData.get("email") || ""),
      },
    };
  }

  const { email } = validatedFields.data;
  const values = { email };

  let response;

  // Ensure the API key exists
  const apiKey = process.env.KIT_API_KEY;
  if (!apiKey) {
    return {
      response: {
        message:
          "API key is missing. Please check your environment configuration.",
      },
      values,
    };
  }

  try {
    // Subscribe the user to the Kit API
    const createSubscriberResponse = await fetch(
      `${process.env.KIT_API_URL}/subscribers`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Kit-Api-Key": apiKey,
        },
        body: JSON.stringify({
          email_address: email,
          state: "inactive",
        }),
      }
    );

    // Kit API returned an error when creating the subscriber
    if (!createSubscriberResponse.ok) {
      const errorData = await createSubscriberResponse.json();

      console.error("Error when creating the subscriber:", errorData?.error);

      return {
        response: {
          message:
            "An unexpected error occurred during the subscription to the newsletter. Please try again",
        },
        values,
      };
    }

    response = await fetch(
      `${process.env.KIT_API_URL}/forms/${process.env.KIT_FORM_ID}/subscribers`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Kit-Api-Key": apiKey,
        },
        body: JSON.stringify({
          email_address: email,
        }),
      }
    );

    // Kit API returned an error when subscribing the user
    if (!response.ok) {
      const errorData = await response.json();

      console.error("Error when subscribing the user:", errorData?.error);

      return {
        response: {
          message:
            "An unexpected error occurred during the subscription to the newsletter. Please try again",
        },
        values,
      };
    }
  } catch (error) {
    // Handle Network Errors (Client-Side Errors)
    console.error(
      "Network or unexpected error:",
      error instanceof Error ? error.message : error
    );

    return {
      response: {
        message:
          "An unexpected error occurred during the subscription to the newsletter. Network or unexpected error.",
      },
      values,
    };
  }

  redirect("/newsletter/verify");
}

export async function submitAMAQuestion(
  state: AskMeAnythingFormState,
  formData: FormData
) {
  const validatedFields = AskMeAnythingFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    url: formData.get("url"),
    experience: formData.get("experience"),
    message: formData.get("message"),
    subscribe: formData.has("subscribe"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      values: {
        name: String(formData.get("name") || ""),
        email: String(formData.get("email") || ""),
        url: String(formData.get("url") || ""),
        experience: String(formData.get("experience") || ""),
        message: String(formData.get("message") || ""),
        subscribe: formData.get("subscribe") === "on",
      },
    };
  }

  const { name, email, url, experience, message, subscribe } =
    validatedFields.data;
  const values = { name, email, url, experience, message, subscribe };

  // Ensure the JMAP related keys exist
  if (
    !process.env.JMAP_API_TOKEN ||
    !process.env.JMAP_EMAIL ||
    !process.env.JMAP_HOSTNAME
  ) {
    return {
      response: {
        message:
          "JMAP key is missing. Please check your environment configuration.",
      },
      values,
    };
  }

  try {
    // Send email using JMAP
    const session = await getJMAPSession();
    const apiUrl = session.apiUrl;
    const accountId = session.primaryAccounts["urn:ietf:params:jmap:mail"];
    const { draftId, sentId } = await getMailboxIds(apiUrl, accountId);
    const identityId = await getIdentityId(apiUrl, accountId);

    // Create email content
    const emailSubject = `New AMA Question from ${name}`;
    const emailBody = `
You have received a new AMA question:

Name: ${name}
Email: ${email}
URL: ${url || "Not provided"}
Experience: ${
      String(experience).charAt(0).toUpperCase() + String(experience).slice(1)
    }
Newsletter Subscription: ${subscribe ? "Yes" : "No"}

Message:
${message}

---
This email was sent from your AMA form.
    `.trim();

    const result = await sendJMAPEmail(
      apiUrl,
      accountId,
      draftId,
      sentId,
      identityId,
      {
        to: process.env.JMAP_EMAIL,
        subject: emailSubject,
        body: emailBody,
      }
    );
  } catch (error) {
    console.error(
      "Error sending AMA question email:",
      error instanceof Error ? error.message : error
    );

    return {
      response: {
        message:
          "An unexpected error occurred while sending your question. Please try again.",
      },
      values,
    };
  }

  redirect("/ama/confirm");
}
