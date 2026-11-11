import React, { useState } from "react";
import { RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";
import { ROLES } from "@/content/site";
import { useSplitFlap } from "@/hooks/useSplitFlap";

const ROW_STAGGER_MS = 260;
const FIRST_ROW_DELAY_MS = 500;
const TILE_FONT_RATIO = 0.62;

const TILE_COUNT = Math.max(...ROLES.map((role) => role.title.length));

const formatRowNumber = (index: number) => String(index + 1).padStart(2, "0");

interface SplitFlapRowProps {
  text: string;
  startDelayMs: number;
  runKey: number;
}

const SplitFlapRow = ({ text, startDelayMs, runKey }: SplitFlapRowProps) => {
  const display = useSplitFlap(text.toUpperCase().padEnd(TILE_COUNT), startDelayMs, runKey);

  return (
    <div aria-hidden="true" style={{ containerType: "inline-size" }}>
      <div
        className="grid gap-[2px]"
        style={{
          gridTemplateColumns: `repeat(${TILE_COUNT}, minmax(0, 1fr))`,
          fontSize: `calc(100cqw / ${TILE_COUNT} * ${TILE_FONT_RATIO})`,
        }}
      >
        {Array.from(display).map((character, index) => (
          <span
            key={index}
            className="flap-tile flex aspect-[3/4] items-center justify-center rounded-[2px] bg-ink-raised font-mono font-bold leading-none text-marker"
          >
            {character === " " ? "\u00a0" : character}
          </span>
        ))}
      </div>
    </div>
  );
};

interface DepartureBoardProps {
  className?: string;
}

const DepartureBoard = ({ className }: DepartureBoardProps) => {
  const [runKey, setRunKey] = useState(0);

  return (
    <section
      aria-labelledby="board-title"
      className={cn("bg-ink p-4 text-paper shadow-print-signal sm:p-5", className)}
    >
      <div className="flex items-center justify-between gap-4">
        <h2 id="board-title" className="font-mono text-kicker font-bold uppercase text-marker">
          Departures <span className="text-ink-muted">· Roles</span>
        </h2>
        <button
          type="button"
          onClick={() => setRunKey((key) => key + 1)}
          className="inline-flex min-h-11 items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted transition-colors hover:text-paper"
        >
          <RotateCcw aria-hidden="true" className="h-3.5 w-3.5" />
          Refresh board
        </button>
      </div>

      <ol className="mt-2 space-y-3 border-t border-paper/15 pt-4">
        {ROLES.map((role, index) => (
          <li key={role.title}>
            <span className="sr-only">
              {role.title}. Status: {role.boardStatus}.
            </span>
            <div
              aria-hidden="true"
              className="mb-1.5 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.14em] text-ink-muted"
            >
              <span>{formatRowNumber(index)}</span>
              <span className="inline-flex items-center gap-1.5 text-marker">
                <span
                  className={cn(
                    "h-1.5 w-1.5 rounded-full bg-signal",
                    index === ROLES.length - 1 && "animate-blink motion-reduce:animate-none",
                  )}
                />
                {role.boardStatus}
              </span>
            </div>
            <SplitFlapRow
              text={role.title}
              startDelayMs={FIRST_ROW_DELAY_MS + index * ROW_STAGGER_MS}
              runKey={runKey}
            />
          </li>
        ))}
      </ol>

      <p className="mt-4 border-t border-paper/15 pt-3 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-muted">
        All five running concurrently. No delays expected.
      </p>
    </section>
  );
};

export default DepartureBoard;
