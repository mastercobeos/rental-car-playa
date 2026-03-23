import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/lib/language-context'
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
})

const siteUrl = 'https://www.carrentalplaya.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Car Rental Playa del Carmen | Rent a Car Riviera Maya - Free Airport Pickup',
    template: '%s | Car Rental Playa',
  },
  description: 'Rent a car in Playa del Carmen, Mexico. Free Cancun airport pickup, insurance included, no hidden fees. SUVs, sedans & scooters. Trusted by 500+ American tourists. Book via WhatsApp now!',
  keywords: [
    'car rental playa del carmen',
    'rent a car cancun airport',
    'riviera maya car rental',
    'playa del carmen car hire',
    'cheap car rental cancun mexico',
    'car rental quintana roo',
    'cancun airport car rental',
    'tulum car rental',
    'rent car mexico american tourist',
    'playa del carmen SUV rental',
    'riviera maya road trip car',
    'car insurance included mexico rental',
    'free airport pickup cancun car rental',
    'best car rental playa del carmen',
    'automatic car rental mexico',
  ],
  authors: [{ name: 'Car Rental Playa' }],
  creator: 'Car Rental Playa',
  publisher: 'Car Rental Playa',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      'en-US': siteUrl,
      'es-MX': siteUrl,
    },
  },
  openGraph: {
    title: 'Car Rental Playa del Carmen | Free Cancun Airport Pickup',
    description: 'Rent a car in Playa del Carmen. Free Cancun airport pickup, full insurance, no hidden fees. SUVs, sedans & scooters. Trusted by 500+ tourists.',
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'es_MX',
    siteName: 'Car Rental Playa',
    url: siteUrl,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Car Rental Playa - Premium car rentals in Playa del Carmen, Mexico with free Cancun airport pickup',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Car Rental Playa del Carmen | Free Airport Pickup & Insurance Included',
    description: 'Rent a car in Playa del Carmen. Free Cancun airport pickup, insurance included. Trusted by 500+ American tourists.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  verification: {
    // Add your Google Search Console verification code here:
    // google: 'your-google-verification-code',
  },
  category: 'travel',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="canonical" href={siteUrl} />
        <link rel="alternate" hrefLang="en" href={siteUrl} />
        <link rel="alternate" hrefLang="es" href={siteUrl} />
        <link rel="alternate" hrefLang="x-default" href={siteUrl} />
        <meta name="geo.region" content="MX-ROO" />
        <meta name="geo.placename" content="Playa del Carmen" />
        <meta name="geo.position" content="20.6296;-87.0739" />
        <meta name="ICBM" content="20.6296, -87.0739" />
      </head>
      <body className="font-sans antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
