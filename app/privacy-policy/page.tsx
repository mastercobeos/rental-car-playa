import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Car Rental Playa. Learn how we collect, use, and protect your personal information when you rent a car in Playa del Carmen, Mexico.',
  alternates: {
    canonical: 'https://www.carrentalplaya.com/privacy-policy',
  },
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20 max-w-3xl">
        <Link href="/" className="text-primary hover:underline text-sm mb-8 inline-block">
          &larr; Back to Home
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>

        <div className="prose prose-neutral max-w-none space-y-6 text-muted-foreground">
          <p className="text-sm">Last updated: March 21, 2026</p>

          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">1. Information We Collect</h2>
            <p>When you rent a car from Car Rental Playa or use our website, we may collect the following personal information:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Full name, email address, and phone number</li>
              <li>Driver&apos;s license information and passport details</li>
              <li>Credit card information for deposits and payments</li>
              <li>Flight details for airport pickup arrangements</li>
              <li>Hotel or accommodation details for vehicle delivery</li>
              <li>Website usage data through cookies and analytics</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">2. How We Use Your Information</h2>
            <p>We use your personal information to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Process and manage your car rental reservations</li>
              <li>Coordinate airport pickup and vehicle delivery</li>
              <li>Communicate with you regarding your rental</li>
              <li>Process payments and security deposits</li>
              <li>Provide 24/7 roadside assistance and support</li>
              <li>Improve our services and website experience</li>
              <li>Comply with Mexican and international legal requirements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">3. Information Sharing</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share your data only with:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Insurance providers (to process claims if necessary)</li>
              <li>Payment processors (to handle transactions securely)</li>
              <li>Legal authorities (when required by Mexican law)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">4. Data Security</h2>
            <p>We implement appropriate security measures to protect your personal information. Credit card data is processed through secure, PCI-compliant payment processors. We do not store full credit card numbers on our systems.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">5. Cookies & Analytics</h2>
            <p>Our website uses cookies and Vercel Analytics to understand how visitors interact with our site. This helps us improve the user experience. You can disable cookies in your browser settings at any time.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">6. Your Rights</h2>
            <p>Under Mexican data protection laws (LFPDPPP) and applicable international regulations, you have the right to access, rectify, cancel, or oppose the processing of your personal data (ARCO rights). To exercise these rights, contact us at info@carrentalplaya.com.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">7. Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us:</p>
            <ul className="list-none space-y-2 mt-3">
              <li>Email: info@carrentalplaya.com</li>
              <li>Phone: +52 990 203 1942</li>
              <li>Address: Av. 10, Playa del Carmen, Quintana Roo, México</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  )
}
