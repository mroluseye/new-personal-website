import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AlertCircle, ArrowRight, CheckCircle2 } from "lucide-react";
import { LINKS } from "@/content/site";
import { useFormspree } from "@/hooks/useFormspree";

const notesSignupSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Enter your email address so I know where to send issue one.")
    .email("That email address doesn’t look right. Check for typos, like a missing @."),
  _gotcha: z.string().optional(),
});

type NotesSignupValues = z.infer<typeof notesSignupSchema>;

const NotesSignupForm = () => {
  const { status, submit } = useFormspree();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NotesSignupValues>({
    resolver: zodResolver(notesSignupSchema),
    defaultValues: { email: "", _gotcha: "" },
  });

  const handleSignup = async (values: NotesSignupValues) => {
    const isSent = await submit({
      email: values.email,
      subscription: "Cole's Notes",
      _subject: "New Cole's Notes subscriber",
      _gotcha: values._gotcha ?? "",
    });
    if (isSent) reset();
  };

  if (status === "success") {
    return (
      <p role="status" className="flex items-start gap-3 border-2 border-ink bg-paper p-5 font-medium">
        <CheckCircle2 aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0" />
        You’re on the list. Watch your inbox for issue one of Cole’s Notes.
      </p>
    );
  }

  const isSubmitting = status === "submitting";
  const emailErrorId = "notes-email-error";

  return (
    <form onSubmit={handleSubmit(handleSignup)} noValidate className="max-w-xl">
      <label htmlFor="notes-email" className="block font-semibold">
        Email address
      </label>
      <div className="mt-2 flex flex-col gap-3 sm:flex-row">
        <input
          id="notes-email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          aria-invalid={errors.email ? "true" : "false"}
          aria-describedby={errors.email ? emailErrorId : undefined}
          className="h-12 flex-1 border-2 border-ink bg-paper px-4 text-base placeholder:text-ink-soft/70 focus-visible:outline-offset-2"
          {...register("email")}
        />
        <input type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" {...register("_gotcha")} />
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex h-12 items-center justify-center gap-2 bg-ink px-6 font-semibold text-marker transition-colors hover:bg-ink-raised disabled:cursor-wait disabled:opacity-70"
        >
          {isSubmitting ? "Signing you up…" : "Get the first issue"}
          {!isSubmitting && <ArrowRight aria-hidden="true" className="h-4 w-4" />}
        </button>
      </div>

      {errors.email && (
        <p id={emailErrorId} className="mt-2 flex items-center gap-2 text-sm font-semibold text-ink">
          <AlertCircle aria-hidden="true" className="h-4 w-4 shrink-0" />
          {errors.email.message}
        </p>
      )}

      {status === "error" && (
        <p role="alert" className="mt-3 flex items-start gap-2 border-l-4 border-ink pl-3 text-sm font-semibold">
          <AlertCircle aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
          That didn’t go through. Check your connection and try again, or email {LINKS.emailLabel}.
        </p>
      )}

      <p className="mt-4 text-sm leading-relaxed text-ink/80">
        By signing up you agree to receive Cole’s Notes by email. Unsubscribe any time. Read the{" "}
        <a href={LINKS.privacy} className="font-semibold underline underline-offset-4">
          privacy policy
        </a>
        .
      </p>
    </form>
  );
};

export default NotesSignupForm;
