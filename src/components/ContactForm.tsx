import React from "react";
import { useForm, type FieldError } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AlertCircle, CheckCircle2, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { LINKS } from "@/content/site";
import { useFormspree } from "@/hooks/useFormspree";

const MESSAGE_MIN_LENGTH = 10;
const MESSAGE_MAX_LENGTH = 4000;

const contactSchema = z.object({
  name: z.string().trim().min(1, "Tell me your name so I know who I’m replying to."),
  email: z
    .string()
    .trim()
    .min(1, "Enter your email address so I can reply.")
    .email("That email address doesn’t look right. Check for typos, like a missing @."),
  message: z
    .string()
    .trim()
    .min(MESSAGE_MIN_LENGTH, "Give me a little more to go on: a sentence or two is perfect.")
    .max(MESSAGE_MAX_LENGTH, "That’s a long one. Please trim it under 4,000 characters, or email me directly."),
  _gotcha: z.string().optional(),
});

type ContactValues = z.infer<typeof contactSchema>;

const FIELD_CLASSES =
  "w-full border border-paper/30 bg-ink-raised px-4 text-base text-paper placeholder:text-ink-muted/70 transition-colors hover:border-paper/60 focus-visible:border-marker focus-visible:outline-marker aria-[invalid=true]:border-signal-soft";

interface FieldErrorMessageProps {
  id: string;
  error?: FieldError;
}

const FieldErrorMessage = ({ id, error }: FieldErrorMessageProps) => {
  if (!error) return null;
  return (
    <p id={id} className="mt-2 flex items-center gap-2 text-sm font-medium text-signal-soft">
      <AlertCircle aria-hidden="true" className="h-4 w-4 shrink-0" />
      {error.message}
    </p>
  );
};

interface ContactFormProps {
  className?: string;
}

const ContactForm = ({ className }: ContactFormProps) => {
  const { status, submit } = useFormspree();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "", _gotcha: "" },
  });

  const handleSend = async (values: ContactValues) => {
    const isSent = await submit({
      name: values.name,
      email: values.email,
      message: values.message,
      _subject: `New message from ${values.name} via olucole.com`,
      _gotcha: values._gotcha ?? "",
    });
    if (isSent) reset();
  };

  if (status === "success") {
    return (
      <p role="status" className={cn("flex items-start gap-3 border border-marker p-6 text-lg", className)}>
        <CheckCircle2 aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-marker" />
        Message received. I’ll get back to you soon, usually within a couple of working days.
      </p>
    );
  }

  const isSubmitting = status === "submitting";

  return (
    <form onSubmit={handleSubmit(handleSend)} noValidate className={cn("space-y-6", className)}>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="mb-2 block text-sm font-semibold">
            Your name
          </label>
          <input
            id="contact-name"
            type="text"
            autoComplete="name"
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            className={cn(FIELD_CLASSES, "h-12")}
            {...register("name")}
          />
          <FieldErrorMessage id="contact-name-error" error={errors.name} />
        </div>
        <div>
          <label htmlFor="contact-email" className="mb-2 block text-sm font-semibold">
            Your email
          </label>
          <input
            id="contact-email"
            type="email"
            autoComplete="email"
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            className={cn(FIELD_CLASSES, "h-12")}
            {...register("email")}
          />
          <FieldErrorMessage id="contact-email-error" error={errors.email} />
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-2 block text-sm font-semibold">
          What’s on your mind?
        </label>
        <textarea
          id="contact-message"
          rows={5}
          aria-invalid={errors.message ? "true" : "false"}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          placeholder="A project, an idea to bounce around, or a delivery headache."
          className={cn(FIELD_CLASSES, "min-h-[9rem] resize-y py-3")}
          {...register("message")}
        />
        <FieldErrorMessage id="contact-message-error" error={errors.message} />
      </div>

      <input type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" {...register("_gotcha")} />

      {status === "error" && (
        <p role="alert" className="flex items-start gap-2 border-l-4 border-signal-soft pl-3 text-sm font-medium text-signal-soft">
          <AlertCircle aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
          Your message didn’t send. Your words are still here, so try again in a moment, or email {LINKS.emailLabel}.
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex h-12 items-center gap-2 bg-marker px-7 font-semibold text-ink transition-colors hover:bg-paper disabled:cursor-wait disabled:opacity-70"
      >
        {isSubmitting ? "Sending…" : "Send message"}
        {!isSubmitting && <Send aria-hidden="true" className="h-4 w-4" />}
      </button>
    </form>
  );
};

export default ContactForm;
