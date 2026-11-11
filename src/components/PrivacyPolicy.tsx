import React from "react";
import { LINKS, PERSON } from "@/content/site";
import Container from "./common/Container";
import Kicker from "./common/Kicker";
import SiteHeader from "./layout/SiteHeader";
import SiteFooter from "./layout/SiteFooter";

/** Update this whenever the policy text changes; it must not be generated at render time. */
const POLICY_LAST_UPDATED = "11 November 2026";

interface PolicySectionProps {
  title: string;
  children: React.ReactNode;
}

const PolicySection = ({ title, children }: PolicySectionProps) => (
  <section className="grid gap-4 border-t border-ink/20 py-10 md:grid-cols-12 md:gap-8">
    <h2 className="font-display text-2xl font-medium tracking-tight md:col-span-4">{title}</h2>
    <div className="space-y-4 leading-relaxed text-ink-soft md:col-span-8 [&_strong]:text-ink [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
      {children}
    </div>
  </section>
);

const ExternalLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="font-semibold text-ink underline underline-offset-4">
    {children}
    <span className="sr-only"> (opens in a new tab)</span>
  </a>
);

const PrivacyPolicy = () => (
  <div className="min-h-screen">
    <SiteHeader />
    <main id="main">
      <Container className="max-w-5xl py-16 md:py-24">
        <Kicker className="text-ink-soft">Small print, in plain English</Kicker>
        <h1 className="mt-5 font-display text-display-md font-normal tracking-tight">Privacy policy</h1>
        <p className="mt-4 font-mono text-sm text-ink-soft">Last updated: {POLICY_LAST_UPDATED}</p>

        <div className="mt-12">
          <PolicySection title="Introduction">
            <p>
              This policy explains how {PERSON.name} (“I”, “me”) collects, uses and shares information about you when
              you visit this website, sign up for Cole’s Notes, or contact me through the form.
            </p>
            <p>I respect your privacy and only collect what I need to reply to you or send you the newsletter.</p>
          </PolicySection>

          <PolicySection title="What I collect">
            <ul>
              <li>
                <strong>Contact details:</strong> your name and email address when you use the contact form, or your
                email address when you sign up for Cole’s Notes.
              </li>
              <li>
                <strong>Message content:</strong> anything you write in the contact form’s message field.
              </li>
              <li>
                <strong>Usage information:</strong> basic technical information about how you access the site.
              </li>
            </ul>
          </PolicySection>

          <PolicySection title="How I use it">
            <ul>
              <li>To reply to your enquiry</li>
              <li>To send you Cole’s Notes, if you signed up</li>
              <li>To improve this website</li>
              <li>To meet legal obligations</li>
            </ul>
          </PolicySection>

          <PolicySection title="Third-party services">
            <p>
              <strong>Formspree</strong> processes form submissions on this site. When you send a form, Formspree
              receives and stores your submission. Read{" "}
              <ExternalLink href="https://formspree.io/legal/privacy-policy">Formspree’s privacy policy</ExternalLink>.
            </p>
          </PolicySection>

          <PolicySection title="Storage and security">
            <p>
              I take reasonable steps to protect your information from loss, misuse and unauthorised access. No method
              of sending or storing data online is completely secure, though.
            </p>
            <p>Contact form submissions and Cole’s Notes sign-ups are stored in Formspree’s secure database.</p>
          </PolicySection>

          <PolicySection title="Your rights">
            <p>Under UK GDPR you have the right to:</p>
            <ul>
              <li>access the personal information I hold about you</li>
              <li>ask me to correct anything inaccurate</li>
              <li>ask me to delete your information</li>
              <li>unsubscribe from Cole’s Notes at any time</li>
            </ul>
            <p>
              To use any of these rights, email{" "}
              <a href={LINKS.email} className="font-semibold text-ink underline underline-offset-4">
                {LINKS.emailLabel}
              </a>
              .
            </p>
          </PolicySection>

          <PolicySection title="Cookies">
            <p>
              This site stores your cookie choice in your browser. Formspree may set cookies when it processes a form
              submission.
            </p>
            <p>
              You can set your browser to refuse some or all cookies. If you do, parts of the site, such as the forms,
              may not work properly.
            </p>
          </PolicySection>

          <PolicySection title="Changes to this policy">
            <p>
              I may update this policy from time to time. When I do, I’ll post the new version here and change the
              “last updated” date above.
            </p>
          </PolicySection>
        </div>
      </Container>
    </main>
    <SiteFooter />
  </div>
);

export default PrivacyPolicy;
