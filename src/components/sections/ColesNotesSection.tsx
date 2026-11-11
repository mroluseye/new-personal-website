import React from "react";
import { NOTES_TOPICS } from "@/content/site";
import Container from "@/components/common/Container";
import Kicker from "@/components/common/Kicker";
import Reveal from "@/components/common/Reveal";
import NotesCover from "@/components/notes/NotesCover";
import NotesSignupForm from "@/components/notes/NotesSignupForm";

const ColesNotesSection = () => (
  <section id="notes" aria-labelledby="notes-title" className="relative bg-marker text-ink [&_*:focus-visible]:outline-ink">
    <div aria-hidden="true" className="hazard-stripes h-3" />
    <Container className="grid items-center gap-16 py-24 md:grid-cols-12 md:gap-8 md:py-32">
      <Reveal className="md:col-span-5 md:pr-6">
        <NotesCover />
      </Reveal>

      <Reveal delay={0.1} className="md:col-span-7 lg:col-span-6 lg:col-start-7">
        <Kicker>§ 05 · Newsletter · First issue coming soon</Kicker>
        <h2 id="notes-title" className="mt-5 font-display text-display-md font-semibold tracking-tight">
          Cole’s Notes.
        </h2>
        <p className="mt-6 max-w-measure text-lg leading-relaxed md:text-xl">
          The study guide for modern delivery. Short, plain-English notes on agile, agentic AI and context
          engineering, from someone doing the work rather than selling the course.
        </p>

        <div className="mt-8 border-y-2 border-ink py-5">
          <Kicker>On the desk for early issues</Kicker>
          <ul className="mt-3 space-y-2">
            {NOTES_TOPICS.map((topic) => (
              <li key={topic} className="flex items-start gap-3 font-medium">
                <span aria-hidden="true" className="mt-1.5 h-3 w-3 shrink-0 border-2 border-ink" />
                {topic}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <NotesSignupForm />
        </div>
      </Reveal>
    </Container>
    <div aria-hidden="true" className="hazard-stripes h-3" />
  </section>
);

export default ColesNotesSection;
