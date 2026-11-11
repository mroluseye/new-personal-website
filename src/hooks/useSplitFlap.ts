import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

const FLAP_CHARSET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const FRAME_MS = 45;
const BASE_SETTLE_FRAMES = 6;
const SETTLE_FRAMES_PER_CHARACTER = 1.3;
const SETTLE_JITTER_FRAMES = 5;

const randomFlapCharacter = () => FLAP_CHARSET[Math.floor(Math.random() * FLAP_CHARSET.length)];

/**
 * Animates text like a split-flap departures board: each character cycles
 * through random glyphs before settling, left to right.
 *
 * @param target - the final text to settle on.
 * @param startDelayMs - wait before this row starts flipping.
 * @param runKey - change this value to replay the animation.
 * @returns the string to render for the current frame.
 */
export function useSplitFlap(target: string, startDelayMs: number, runKey: number): string {
  const prefersReducedMotion = useReducedMotion();
  const [display, setDisplay] = useState(() => (prefersReducedMotion ? target : " ".repeat(target.length)));

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplay(target);
      return;
    }

    const settleFrames = Array.from(
      target,
      (_, index) =>
        BASE_SETTLE_FRAMES + index * SETTLE_FRAMES_PER_CHARACTER + Math.random() * SETTLE_JITTER_FRAMES,
    );
    const lastSettleFrame = Math.max(...settleFrames);
    let frame = 0;
    let intervalId: number | undefined;

    const timeoutId = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        frame += 1;
        const next = Array.from(target, (character, index) =>
          character === " " || frame >= settleFrames[index] ? character : randomFlapCharacter(),
        ).join("");
        setDisplay(next);
        if (frame >= lastSettleFrame) window.clearInterval(intervalId);
      }, FRAME_MS);
    }, startDelayMs);

    return () => {
      window.clearTimeout(timeoutId);
      window.clearInterval(intervalId);
    };
  }, [target, startDelayMs, runKey, prefersReducedMotion]);

  return display;
}
