import { z } from "zod";

export const orgTypes = ["Clinic", "Research lab", "Sports team", "Investor", "Other"] as const;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name."),
  email: z.string().trim().email("Enter a valid email address."),
  phone: z.string().trim().max(40, "Phone number is too long.").optional().or(z.literal("")),
  orgType: z.enum(orgTypes, { error: "Choose an organization type." }),
  message: z
    .string()
    .trim()
    .min(10, "Write at least 10 characters.")
    .max(4000, "Message is too long."),
  intent: z.string().max(40).optional(),
  website: z.string().max(0).optional(), // honeypot
});

export type ContactState = {
  status: "idle" | "success" | "error";
  errors?: Partial<Record<keyof z.infer<typeof contactSchema>, string>>;
};
