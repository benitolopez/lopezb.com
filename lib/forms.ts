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

export const AskMeAnythingFormSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name is required." })
    .max(500, { message: "Name must be less than 500 characters." })
    .trim(),
  email: z.string().email({ message: "Please enter a valid email." }).trim(),
  url: z
    .string()
    .url({ message: "Please enter a valid URL." })
    .optional()
    .or(z.literal("")),
  experience: z
    .string()
    .min(1, { message: "Experience is required." })
    .max(500, { message: "Experience must be less than 500 characters." })
    .trim(),
  message: z
    .string()
    .min(1, { message: "Message is required." })
    .max(5000, { message: "Message must be less than 5000 characters." })
    .trim(),
  subscribe: z.boolean().optional(),
});

export type AskMeAnythingFormState =
  | {
      errors?: {
        name?: string[];
        email?: string[];
        url?: string[];
        experience?: string[];
        message?: string[];
        subscribe?: string[];
      };
      values?: {
        name?: string;
        email?: string;
        url?: string;
        experience?: string;
        message?: string;
        subscribe?: boolean;
      };
      response?: {
        message?: string;
      };
    }
  | undefined;
