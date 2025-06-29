import { url } from "inspector";
import { z } from "zod";

export const NewsletterFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email." }).trim(),
});

export type NewsletterFormState =
  | {
      errors?: {
        email?: string[];
      };
      values?: {
        email?: string;
      };
      response?: {
        message?: string;
      };
    }
  | undefined;
