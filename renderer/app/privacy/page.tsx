import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-black">
      <div className="container mx-auto max-w-4xl px-6 py-8">
        <div className="mb-8">
          <Link href="/register">
            <Button
              variant="ghost"
              className="mb-4 text-blue-400 hover:bg-blue-900/20 hover:text-blue-300">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to WireFrame
            </Button>
          </Link>
          <h1 className="mb-2 text-4xl font-bold text-white">Privacy Policy</h1>
          <p className="text-slate-300">Last updated: January 1, 2024</p>
        </div>

        <div className="space-y-8 rounded-lg bg-slate-800/50 p-8 text-slate-200 backdrop-blur-sm">
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-white">
              1. Information We Collect
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="mb-2 text-lg font-medium text-blue-300">
                  Personal Information
                </h3>
                <p className="leading-relaxed">
                  When you create an account, we collect information such as
                  your name, email address, and password. We may also collect
                  additional information you provide in your profile.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-medium text-blue-300">
                  Usage Information
                </h3>
                <p className="leading-relaxed">
                  We collect information about how you use our Service,
                  including your interactions with features, projects you
                  create, and time spent on the platform.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-medium text-blue-300">
                  Device Information
                </h3>
                <p className="leading-relaxed">
                  We collect information about the device you use to access our
                  Service, including IP address, browser type, operating system,
                  and device identifiers.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-white">
              2. How We Use Your Information
            </h2>
            <p className="mb-4 leading-relaxed">
              We use the information we collect to:
            </p>
            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>Provide, maintain, and improve our Service</li>
              <li>Process transactions and send related information</li>
              <li>Send technical notices, updates, and support messages</li>
              <li>
                Respond to your comments, questions, and customer service
                requests
              </li>
              <li>Communicate with you about products, services, and events</li>
              <li>Monitor and analyze trends, usage, and activities</li>
              <li>Detect, investigate, and prevent fraudulent transactions</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-white">
              3. Information Sharing
            </h2>
            <p className="mb-4 leading-relaxed">
              We do not sell, trade, or otherwise transfer your personal
              information to third parties except in the following
              circumstances:
            </p>
            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>With your consent</li>
              <li>To comply with legal obligations</li>
              <li>To protect and defend our rights and property</li>
              <li>
                With service providers who assist us in operating our Service
              </li>
              <li>
                In connection with a merger, acquisition, or sale of assets
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-white">
              4. Data Security
            </h2>
            <p className="leading-relaxed">
              We implement appropriate technical and organizational security
              measures to protect your personal information against unauthorized
              access, alteration, disclosure, or destruction. However, no method
              of transmission over the internet or electronic storage is 100%
              secure.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-white">
              5. Data Retention
            </h2>
            <p className="leading-relaxed">
              We retain your personal information for as long as necessary to
              provide you with our Service and as described in this Privacy
              Policy. We may also retain and use your information to comply with
              legal obligations, resolve disputes, and enforce our agreements.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-white">
              6. Your Rights
            </h2>
            <p className="mb-4 leading-relaxed">
              Depending on your location, you may have the following rights
              regarding your personal information:
            </p>
            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>Access to your personal information</li>
              <li>Correction of inaccurate information</li>
              <li>Deletion of your personal information</li>
              <li>Restriction of processing</li>
              <li>Data portability</li>
              <li>Objection to processing</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-white">
              7. Cookies and Tracking
            </h2>
            <p className="leading-relaxed">
              We use cookies and similar tracking technologies to collect and
              track information about your use of our Service. You can control
              cookies through your browser settings, but disabling cookies may
              affect the functionality of our Service.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-white">
              8. Third-Party Services
            </h2>
            <p className="leading-relaxed">
              Our Service may contain links to third-party websites or services.
              We are not responsible for the privacy practices of these third
              parties. We encourage you to read their privacy policies before
              providing any information.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-white">
              9. Children's Privacy
            </h2>
            <p className="leading-relaxed">
              Our Service is not intended for children under 13 years of age. We
              do not knowingly collect personal information from children under
              13. If you become aware that a child has provided us with personal
              information, please contact us.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-white">
              10. Changes to This Policy
            </h2>
            <p className="leading-relaxed">
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new Privacy Policy on
              this page and updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-white">
              11. Contact Us
            </h2>
            <p className="leading-relaxed">
              If you have any questions about this Privacy Policy, please
              contact us at{' '}
              <a
                href="mailto:privacy@wireframe.com"
                className="text-blue-400 underline hover:text-blue-300">
                privacy@wireframe.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
