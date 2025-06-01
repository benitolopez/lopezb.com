// Newsletter helper function
export async function handleNewsletterSubscription(email: string) {
  const KitApiKey = process.env.KIT_API_KEY;
  if (!KitApiKey) {
    throw new Error(
      "API key is missing. Please check your environment configuration."
    );
  }

  // Subscribe the user to the Kit API
  const createSubscriberResponse = await fetch(
    `${process.env.KIT_API_URL}/subscribers`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Kit-Api-Key": KitApiKey,
      },
      body: JSON.stringify({
        email_address: email,
        state: "inactive",
      }),
    }
  );

  if (!createSubscriberResponse.ok) {
    const errorData = await createSubscriberResponse.json();
    console.error("Error when creating the subscriber:", errorData?.error);
    throw new Error("Failed to create subscriber");
  }

  const response = await fetch(
    `${process.env.KIT_API_URL}/forms/${process.env.KIT_FORM_ID}/subscribers`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Kit-Api-Key": KitApiKey,
      },
      body: JSON.stringify({
        email_address: email,
      }),
    }
  );

  if (!response.ok) {
    const errorData = await response.json();
    console.error("Error when subscribing the user:", errorData?.error);
    throw new Error("Failed to subscribe user");
  }
}
