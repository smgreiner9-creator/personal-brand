import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — By Forge",
  description: "How By Forge Studios LLC collects, uses, and protects your information.",
};

export default function PrivacyPolicy() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="font-serif text-3xl font-bold text-text md:text-4xl">Privacy Policy</h1>
      <p className="mt-2 text-sm text-muted">Effective: April 7, 2026</p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-body">
        <div>
          <h2 className="font-serif text-lg font-semibold text-text">Who We Are</h2>
          <p className="mt-2">
            By Forge Studios LLC (&quot;By Forge,&quot; &quot;we,&quot; &quot;us&quot;) is an AI consulting studio based in North Carolina. This policy explains how we collect, use, and protect information when you visit byforge.dev or use our services.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-lg font-semibold text-text">Information We Collect</h2>
          <p className="mt-2">We collect minimal information, limited to what you voluntarily provide:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li><strong>Email address</strong> — when you subscribe to our newsletter or submit the AI readiness scorecard.</li>
            <li><strong>Booking information</strong> — when you schedule a call through Calendly, which has its own privacy policy.</li>
            <li><strong>Usage data</strong> — basic analytics collected by Vercel (our hosting provider), including page views and approximate location. No cookies are used for tracking.</li>
          </ul>
        </div>

        <div>
          <h2 className="font-serif text-lg font-semibold text-text">How We Use Your Information</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>To send you our newsletter (The Forge Log) if you subscribe.</li>
            <li>To send personalized AI readiness reports if you request one.</li>
            <li>To respond to inquiries and schedule consultations.</li>
            <li>To improve our website and services.</li>
          </ul>
          <p className="mt-2">We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>
        </div>

        <div>
          <h2 className="font-serif text-lg font-semibold text-text">Third-Party Services</h2>
          <p className="mt-2">We use the following services that may process your data under their own privacy policies:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li><strong>Vercel</strong> — website hosting and analytics.</li>
            <li><strong>Resend</strong> — email delivery for our newsletter.</li>
            <li><strong>Calendly</strong> — appointment scheduling.</li>
          </ul>
        </div>

        <div>
          <h2 className="font-serif text-lg font-semibold text-text">Email Communications</h2>
          <p className="mt-2">
            If you subscribe to our newsletter, you can unsubscribe at any time using the link in every email. We comply with the CAN-SPAM Act: we will not send misleading information, we identify messages as advertisements when applicable, and we honor unsubscribe requests promptly.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-lg font-semibold text-text">Data Security</h2>
          <p className="mt-2">
            We take reasonable measures to protect your information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-lg font-semibold text-text">Your Rights</h2>
          <p className="mt-2">
            You may request access to, correction of, or deletion of your personal information at any time by contacting us at Team@byforge.dev.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-lg font-semibold text-text">Changes to This Policy</h2>
          <p className="mt-2">
            We may update this policy from time to time. Changes will be posted on this page with an updated effective date.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-lg font-semibold text-text">Contact</h2>
          <p className="mt-2">
            Questions about this policy? Reach us at{" "}
            <a href="mailto:Team@byforge.dev" className="text-accent hover:underline">Team@byforge.dev</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
