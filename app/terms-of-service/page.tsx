import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service & Rental Agreement',
  description: 'Terms of Service and Rental Agreement for Playa Car Rental. Understand your rental conditions, insurance coverage, cancellation policy, and driver requirements for renting a car in Playa del Carmen.',
  alternates: {
    canonical: 'https://www.carrentalplaya.com/terms-of-service',
  },
}

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20 max-w-3xl">
        <Link href="/" className="text-primary hover:underline text-sm mb-8 inline-block">
          &larr; Back to Home
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Terms of Service & Rental Agreement</h1>

        <div className="prose prose-neutral max-w-none space-y-6 text-muted-foreground">
          <p className="text-sm">Last updated: March 21, 2026</p>

          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">1. Rental Requirements</h2>
            <p>To rent a vehicle from Playa Car Rental, you must meet the following requirements:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Be at least 21 years of age (25 for premium vehicles)</li>
              <li>Hold a valid driver&apos;s license from your home country (US and Canadian licenses are accepted without an International Driving Permit)</li>
              <li>Present a valid passport or government-issued ID</li>
              <li>Provide a credit card in the primary driver&apos;s name for the security deposit</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">2. Insurance Coverage</h2>
            <p>All rentals include comprehensive insurance coverage at no additional cost:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><strong>Liability Insurance:</strong> Covers third-party bodily injury and property damage</li>
              <li><strong>Collision Damage Waiver (CDW):</strong> Covers damage to the rental vehicle</li>
              <li><strong>Theft Protection:</strong> Covers vehicle theft or attempted theft</li>
              <li><strong>Roadside Assistance:</strong> 24/7 emergency roadside support included</li>
            </ul>
            <p className="mt-3">The price you see is the price you pay. There are no hidden insurance charges or surprise fees at the counter.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">3. Reservation & Payment</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Reservations can be made via WhatsApp, phone, email, or our website contact form</li>
              <li>We accept Visa, MasterCard, American Express, and cash (USD and MXN)</li>
              <li>A security deposit is required at pickup and will be refunded upon return of the vehicle in its original condition</li>
              <li>Prices are quoted in USD for international customers</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">4. Cancellation Policy</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Free cancellation:</strong> Up to 48 hours before scheduled pickup time</li>
              <li><strong>Late cancellation:</strong> Within 48 hours — a fee equivalent to one day&apos;s rental may apply</li>
              <li><strong>No-show:</strong> Full rental amount will be charged</li>
              <li>Refunds are processed within 5-10 business days to the original payment method</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">5. Vehicle Use</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Vehicles may be driven throughout Mexico</li>
              <li>Only authorized drivers listed on the rental agreement may operate the vehicle</li>
              <li>The vehicle must not be used for racing, off-roading (unless in a designated vehicle), or any illegal activity</li>
              <li>Smoking is not permitted in any rental vehicle</li>
              <li>Pets are allowed with prior approval — a cleaning fee may apply</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">6. Fuel Policy</h2>
            <p>Vehicles are provided with a full tank of fuel and must be returned with a full tank. If the vehicle is returned with less fuel, a refueling charge will be applied at current local fuel rates plus a service fee.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">7. Pickup & Return</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Airport Pickup:</strong> Complimentary pickup at Cancun International Airport (CUN). Our team will meet you at the arrivals area with a name sign</li>
              <li><strong>Hotel Delivery:</strong> Free delivery to hotels in Playa del Carmen, Tulum, and the Riviera Maya</li>
              <li><strong>Business Hours:</strong> Monday to Sunday, 8:00 AM to 8:00 PM</li>
              <li><strong>Late Return:</strong> Returns more than 1 hour past the agreed time may incur an additional day&apos;s charge</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">8. Driving in Mexico — Tips for US Tourists</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Drive on the right side of the road (same as the US)</li>
              <li>Speed limits are posted in kilometers per hour (km/h)</li>
              <li>Toll roads (autopistas) accept cash and some credit cards</li>
              <li>Keep your rental agreement, driver&apos;s license, and passport accessible at all times</li>
              <li>Military checkpoints are routine and nothing to worry about — simply follow instructions</li>
              <li>Avoid driving at night on unfamiliar rural roads</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">9. Liability</h2>
            <p>Playa Car Rental is not liable for personal belongings left in the vehicle, traffic violations incurred by the renter, or delays caused by circumstances beyond our control (weather, road closures, etc.).</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">10. Contact</h2>
            <p>For questions about these terms or your rental, contact us:</p>
            <ul className="list-none space-y-2 mt-3">
              <li>Email: info@carrentalplaya.com</li>
              <li>Phone/WhatsApp: +52 990 203 1942</li>
              <li>Address: Av. 10, Playa del Carmen, Quintana Roo, México</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  )
}
