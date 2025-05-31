import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function TermsOfService() {
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
          <h1 className="mb-2 text-4xl font-bold text-white">
            Terms of Service
          </h1>
          <p className="text-slate-300">Last updated: January 1, 2024</p>
        </div>

        <div className="space-y-8 rounded-lg bg-slate-800/50 p-8 text-slate-200 backdrop-blur-sm">
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-white">
              1. Acceptance of Terms
            </h2>
            <p className="leading-relaxed">
              By accessing and using WireFrame ("the Service"), you accept and
              agree to be bound by the terms and provision of this agreement. If
              you do not agree to abide by the above, please do not use this
              service.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-white">
              2. Description of Service
            </h2>
            <p className="mb-4 leading-relaxed">
              WireFrame provides users with access to powerful tools, seamless
              workflows, and a community of innovators ready to transform ideas
              into reality. Our platform includes:
            </p>
            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>Access to premium features and tools</li>
              <li>Project management and collaboration capabilities</li>
              <li>Global community access and networking</li>
              <li>Educational resources and tutorials</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-white">
              3. User Accounts
            </h2>
            <p className="mb-4 leading-relaxed">
              To access certain features of the Service, you must register for
              an account. When you register, you agree to:
            </p>
            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and update your information to keep it accurate</li>
              <li>Maintain the security of your password and account</li>
              <li>
                Accept responsibility for all activities under your account
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-white">
              4. Acceptable Use
            </h2>
            <p className="mb-4 leading-relaxed">
              You agree not to use the Service to:
            </p>
            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon the rights of others</li>
              <li>Distribute spam, malware, or other harmful content</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with or disrupt the Service</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-white">
              5. Intellectual Property
            </h2>
            <p className="leading-relaxed">
              The Service and its original content, features, and functionality
              are and will remain the exclusive property of WireFrame and its
              licensors. The Service is protected by copyright, trademark, and
              other laws.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-white">
              6. Privacy Policy
            </h2>
            <p className="leading-relaxed">
              Your privacy is important to us. Please review our Privacy Policy,
              which also governs your use of the Service, to understand our
              practices. By using our Service, you agree to the collection and
              use of information in accordance with our{' '}
              <Link
                href="/privacy"
                className="text-blue-400 underline hover:text-blue-300">
                Privacy Policy
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-white">
              7. Termination
            </h2>
            <p className="leading-relaxed">
              We may terminate or suspend your account and bar access to the
              Service immediately, without prior notice or liability, under our
              sole discretion, for any reason whatsoever, including without
              limitation if you breach the Terms.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-white">
              8. Limitation of Liability
            </h2>
            <p className="leading-relaxed">
              In no event shall WireFrame, nor its directors, employees,
              partners, agents, suppliers, or affiliates, be liable for any
              indirect, incidental, special, consequential, or punitive damages,
              including without limitation, loss of profits, data, use,
              goodwill, or other intangible losses.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-white">
              9. Changes to Terms
            </h2>
            <p className="leading-relaxed">
              We reserve the right, at our sole discretion, to modify or replace
              these Terms at any time. If a revision is material, we will
              provide at least 30 days notice prior to any new terms taking
              effect.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-white">
              10. Contact Information
            </h2>
            <p className="leading-relaxed">
              If you have any questions about these Terms of Service, please
              contact us at{' '}
              <a
                href="mailto:legal@wireframe.com"
                className="text-blue-400 underline hover:text-blue-300">
                legal@wireframe.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
