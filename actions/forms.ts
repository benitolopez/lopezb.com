"use server";

import { NewsletterFormState, NewsletterFormSchema } from "@/lib/forms";
import {
  getJMAPSession,
  getMailboxIds,
  getIdentityId,
  sendJMAPEmail,
} from "@/lib/jmap";
import { handleNewsletterSubscription } from "@/lib/newsletter";

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

  try {
    await handleNewsletterSubscription(email);
  } catch (error) {
    console.error(
      "Newsletter subscription error:",
      error instanceof Error ? error.message : error
    );

    return {
      response: {
        message:
          "An unexpected error occurred during the subscription to the newsletter. Please try again",
      },
      values,
    };
  }

  redirect("/newsletter/verify");
}
