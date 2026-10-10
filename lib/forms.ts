import { z } from "zod";

/**
 * Every enquiry form on the site is one component driven by this config, and one
 * Server Action. Adding a form means adding an entry here.
 */
export type FieldDef = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "textarea" | "select";
  options?: readonly string[];
  required?: boolean;
  autoComplete?: string;
  /** full width in the two-column layout */
  wide?: boolean;
};

export type FormDef = {
  subject: string;
  /** accessible name of the arrow submit */
  submit: string;
  fields: readonly FieldDef[];
  /** shown in place of the form once it is sent */
  done: string;
};

export const forms = {
  /** The short form on the home page. */
  "home-evaluation": {
    submit: "Request a lab evaluation",
    subject: "Lab evaluation request (home)",
    done: "Thank you. We will come back to you about a lab evaluation. [TBD: response time]",
    fields: [
      { name: "name", label: "Full name", required: true, autoComplete: "name" },
      { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
      { name: "institution", label: "Institution", required: true, wide: true },
      {
        name: "role",
        label: "Role",
        type: "select",
        options: [
          "Principal investigator",
          "Lab director",
          "Core facility",
          "Performance staff",
          "Grants office",
          "Investor",
          "Other",
        ],
        wide: true,
      },
      {
        name: "use",
        label: "What you would use it for",
        type: "textarea",
        required: true,
        wide: true,
      },
    ],
  },
  "lab-evaluation": {
    submit: "Request a lab evaluation",
    subject: "Lab evaluation request",
    done: "Thank you. We will come back to you about a lab evaluation. [TBD: response time]",
    fields: [
      { name: "institution", label: "Institution", required: true, wide: true },
      {
        name: "name",
        label: "Principal investigator / lab director",
        required: true,
        autoComplete: "name",
      },
      { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
      { name: "study", label: "What you study", required: true, wide: true },
      { name: "setup", label: "Capture and analysis setup", wide: true },
      { name: "timeline", label: "Timeline" },
      {
        name: "funding",
        label: "Funding route",
        type: "select",
        options: ["Have budget", "Applying for a grant", "Exploring"],
      },
    ],
  },
  quotation: {
    submit: "Request a quotation",
    subject: "Quotation request",
    done: "Thank you. We will send a formal quotation. [TBD: response time]",
    fields: [
      { name: "institution", label: "Institution", required: true },
      { name: "name", label: "Principal investigator", required: true, autoComplete: "name" },
      { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
      {
        name: "mechanism",
        label: "Funding mechanism",
        type: "select",
        options: ["NIH S10", "NSF MRI", "Institutional capital", "Other"],
      },
      { name: "deadline", label: "Submission deadline", wide: true },
      { name: "notes", label: "Notes", type: "textarea", wide: true },
    ],
  },
  "performance-evaluation": {
    submit: "Arrange an evaluation",
    subject: "On-site evaluation request",
    done: "Thank you. We will come back to you about an on-site evaluation. [TBD: response time]",
    fields: [
      { name: "organisation", label: "Organisation", required: true },
      { name: "role", label: "Role", required: true },
      { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
      { name: "location", label: "Location" },
      {
        name: "measure",
        label: "What you would measure",
        type: "textarea",
        required: true,
        wide: true,
      },
    ],
  },
  deck: {
    submit: "Request the deck",
    subject: "Deck request",
    done: "Thank you. We review every request and share the deck directly. [TBD: response time]",
    fields: [
      { name: "name", label: "Name", required: true, autoComplete: "name" },
      { name: "fund", label: "Fund / organisation", required: true },
      { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
      { name: "checkSize", label: "Typical check size" },
      { name: "portfolio", label: "Portfolio link", wide: true },
    ],
  },
  general: {
    submit: "Send",
    subject: "General enquiry",
    done: "Thank you. We have received your message. [TBD: response time]",
    fields: [
      { name: "name", label: "Full name", required: true, autoComplete: "name" },
      { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
      { name: "organisation", label: "Organisation", wide: true },
      { name: "message", label: "Message", type: "textarea", required: true, wide: true },
    ],
  },
} satisfies Record<string, FormDef>;

export type FormKind = keyof typeof forms;
export const isFormKind = (v: unknown): v is FormKind =>
  typeof v === "string" && Object.hasOwn(forms, v);

/** A schema per form, derived from its fields so the two cannot drift apart. */
export function schemaFor(kind: FormKind) {
  const shape: Record<string, z.ZodTypeAny> = {
    kind: z.literal(kind),
    website: z.string().max(0).optional(), // honeypot
  };
  for (const f of forms[kind].fields) {
    let rule: z.ZodTypeAny;
    if (f.type === "email") {
      rule = f.required
        ? z.string().trim().email("Enter a valid email address.")
        : z.string().trim().email("Enter a valid email address.").optional().or(z.literal(""));
    } else if (f.required) {
      rule = z.string().trim().min(2, `${f.label} is required.`).max(4000);
    } else {
      rule = z.string().trim().max(4000).optional().or(z.literal(""));
    }
    shape[f.name] = rule;
  }
  return z.object(shape);
}

export type FormState = {
  status: "idle" | "success" | "error";
  errors?: Record<string, string>;
};
