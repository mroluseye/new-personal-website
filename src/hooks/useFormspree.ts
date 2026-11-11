import { useCallback, useState } from "react";
import { FORMSPREE_ENDPOINT } from "@/content/site";

export type SubmissionStatus = "idle" | "submitting" | "success" | "error";

/**
 * Posts a payload to Formspree and tracks the request state.
 *
 * @returns `status` for rendering feedback, and `submit(payload)` which resolves
 *   to `true` on success. Network and HTTP failures resolve to `false` and set
 *   status to "error"; this function never throws.
 */
export function useFormspree() {
  const [status, setStatus] = useState<SubmissionStatus>("idle");

  const submit = useCallback(async (payload: Record<string, string>) => {
    setStatus("submitting");
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      setStatus(response.ok ? "success" : "error");
      return response.ok;
    } catch {
      setStatus("error");
      return false;
    }
  }, []);

  const reset = useCallback(() => setStatus("idle"), []);

  return { status, submit, reset };
}
