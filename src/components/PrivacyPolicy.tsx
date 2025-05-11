import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#f5f2ef] text-gray-900">
      {/* Navigation */}
      <nav className="bg-white shadow-sm py-4 fixed top-0 left-0 right-0 z-10">
        <div className="container mx-auto flex justify-between items-center px-4">
          <a href="/" className="text-lg font-medium">
            Olu
          </a>
        </div>
      </nav>

      {/* Privacy Policy Content */}
      <motion.div
        className="container mx-auto py-24 px-4 md:px-8 max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-lg mb-6">
          Last Updated: {new Date().toLocaleDateString()}
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="mb-4">
            This Privacy Policy explains how Olu Cole ("we," "us," or "our")
            collects, uses, and shares information about you when you visit our
            website, sign up for OluNotes, or contact us through our form.
          </p>
          <p className="mb-4">
            We respect your privacy and are committed to protecting your
            personal data. Please read this Privacy Policy carefully to
            understand our practices regarding your personal data.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Information We Collect
          </h2>
          <p className="mb-4">
            We may collect the following types of information:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong>Contact Information:</strong> When you fill out our
              contact form or sign up for OluNotes, we collect your name and
              email address.
            </li>
            <li>
              <strong>Message Content:</strong> Any information you provide in
              the message field of our contact form.
            </li>
            <li>
              <strong>Usage Information:</strong> Information about how you
              access and use our website.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            How We Use Your Information
          </h2>
          <p className="mb-4">We use the information we collect to:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              Respond to your inquiries and provide the information you request
            </li>
            <li>Send you OluNotes newsletters if you've signed up for them</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
          <p className="mb-4">We use the following third-party services:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong>Formspree:</strong> We use Formspree to process form
              submissions. When you submit a form on our website, your
              information is processed by Formspree. Their privacy policy can be
              found at{" "}
              <a
                href="https://formspree.io/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://formspree.io/legal/privacy-policy
              </a>
              .
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Data Storage and Security
          </h2>
          <p className="mb-4">
            We take reasonable measures to help protect your personal
            information from loss, theft, misuse, unauthorized access,
            disclosure, alteration, and destruction. However, no method of
            transmission over the Internet or electronic storage is 100% secure.
          </p>
          <p className="mb-4">
            Your contact form submissions are stored in Formspree's secure
            database. Email addresses collected for OluNotes are also stored
            securely.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
          <p className="mb-4">
            Depending on your location, you may have certain rights regarding
            your personal information, including:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              The right to access the personal information we hold about you
            </li>
            <li>
              The right to request correction of inaccurate personal information
            </li>
            <li>The right to request deletion of your personal information</li>
            <li>
              The right to withdraw consent for email marketing (unsubscribe)
            </li>
          </ul>
          <p className="mb-4">
            To exercise these rights, please contact us at hello@olucole.com.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
          <p className="mb-4">
            Our website may use cookies and similar tracking technologies to
            enhance your browsing experience. Formspree may also use cookies to
            process form submissions.
          </p>
          <p className="mb-4">
            You can set your browser to refuse all or some browser cookies, or
            to alert you when websites set or access cookies. If you disable or
            refuse cookies, please note that some parts of this website may
            become inaccessible or not function properly.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Changes to This Privacy Policy
          </h2>
          <p className="mb-4">
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page
            and updating the "Last Updated" date.
          </p>
          <p className="mb-4">
            You are advised to review this Privacy Policy periodically for any
            changes.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this Privacy Policy, please contact
            us at hello@olucole.com.
          </p>
        </section>
      </motion.div>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-nude text-center text-sm text-peach">
        <p>
          © {new Date().getFullYear()} • Designed & Built with ♥ by Olu Cole
        </p>
        <div className="mt-2">
          <a href="/" className="mx-2 hover:underline">
            Home
          </a>
          <a href="/privacy" className="mx-2 hover:underline">
            Privacy Policy
          </a>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
