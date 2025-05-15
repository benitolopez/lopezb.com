"use server";

import { NewsletterFormState, NewsletterFormSchema } from "@/lib/forms";
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

  redirect("/newsletter/confirm");
}
