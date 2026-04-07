import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — By Forge",
  description: "Terms governing use of byforge.dev and By Forge Studios LLC services.",
};

export default function TermsOfService() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="font-serif text-3xl font-bold text-text md:text-4xl">Terms of Service</h1>
      <p className="mt-2 text-sm text-muted">Effective: April 7, 2026</p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-body">
        <div>
          <h2 className="font-serif text-lg font-semibold text-text">Agreement</h2>
          <p className="mt-2">
            By accessing byforge.dev or engaging By Forge Studios LLC (&quot;By Forge,&quot; &quot;we,&quot; &quot;us&quot;) for services, you agree to these terms. If you do not agree, please do not use our website or services.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-lg font-semibold text-text">Services</h2>
          <p className="mt-2">
            By Forge provides AI consulting services including strategy sessions, build sprints, fractional AI leadership, and document humanization. Specific deliverables, timelines, and pricing for paid engagements are defined in individual client agreements, which take precedence over these general terms.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-lg font-semibold text-text">Not Professional Advice</h2>
          <p className="mt-2">
            Our services and website content are for informational and consulting purposes. Nothing on this site or delivered through our services constitutes legal, financial, tax, or investment advice. Consult qualified professionals for those needs.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-lg font-semibold text-text">No Guaranteed Results</h2>
          <p className="mt-2">
            AI consulting involves emerging technologies. While we bring deep expertise and a track record of delivery, we cannot guarantee specific business outcomes, revenue increases, or cost savings. Results depend on many factors beyond our control including your team, data, and market conditions.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-lg font-semibold text-text">Intellectual Property</h2>
          <p className="mt-2">
            Content on byforge.dev (text, design, code, graphics) is owned by By Forge Studios LLC and protected by copyright. You may not reproduce or distribute it without permission.
          </p>
          <p className="mt-2">
            For paid client work, intellectual property ownership is governed by your individual client agreement. In the absence of a separate agreement, work product created for you during a paid engagement is yours upon full payment.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-lg font-semibold text-text">Limitation of Liability</h2>
          <p className="mt-2">
            To the fullest extent permitted by law, By Forge Studios LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our website or services. Our total liability for any claim shall not exceed the amount you paid us for the specific service giving rise to the claim.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-lg font-semibold text-text">Governing Law</h2>
          <p className="mt-2">
            These terms are governed by the laws of the State of North Carolina. Any disputes shall be resolved in the courts of North Carolina.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-lg font-semibold text-text">Changes to These Terms</h2>
          <p className="mt-2">
            We may update these terms from time to time. Continued use of our website or services after changes are posted constitutes acceptance of the updated terms.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-lg font-semibold text-text">Contact</h2>
          <p className="mt-2">
            Questions about these terms? Reach us at{" "}
            <a href="mailto:Team@byforge.dev" className="text-accent hover:underline">Team@byforge.dev</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
