export function SEOSchemas() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "AutoRental",
    "name": "Playa Car Rental",
    "image": "https://www.carrentalplaya.com/og-image.jpg",
    "url": "https://www.carrentalplaya.com",
    "telephone": "+529902031942",
    "email": "info@carrentalplaya.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. 10",
      "addressLocality": "Playa del Carmen",
      "addressRegion": "Quintana Roo",
      "postalCode": "77710",
      "addressCountry": "MX"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 20.6296,
      "longitude": -87.0739
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday", "Tuesday", "Wednesday", "Thursday",
          "Friday", "Saturday", "Sunday"
        ],
        "opens": "08:00",
        "closes": "20:00"
      }
    ],
    "priceRange": "$$",
    "currenciesAccepted": "USD, MXN",
    "paymentAccepted": "Cash, Credit Card, Debit Card",
    "areaServed": [
      {
        "@type": "City",
        "name": "Playa del Carmen"
      },
      {
        "@type": "City",
        "name": "Cancún"
      },
      {
        "@type": "City",
        "name": "Tulum"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Riviera Maya"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/share/1Ax2LRWSQ2/",
      "https://www.instagram.com/carrentalplaya",
      "https://vt.tiktok.com/ZSusGcGb7/"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500",
      "bestRating": "5",
      "worstRating": "1"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Car Rental Fleet",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Sedans",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Car",
                "name": "Chevrolet Aveo Sedan",
                "vehicleTransmission": "Automatic / Manual",
                "seatingCapacity": 5
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Car",
                "name": "Nissan Versa",
                "vehicleTransmission": "Automatic",
                "seatingCapacity": 5
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Car",
                "name": "Volkswagen Jetta",
                "vehicleTransmission": "Automatic",
                "seatingCapacity": 5
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "SUVs & Vans",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Car",
                "name": "Toyota RAV4",
                "vehicleTransmission": "Automatic",
                "seatingCapacity": 5
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Car",
                "name": "Kia Sorento",
                "vehicleTransmission": "Automatic",
                "seatingCapacity": 7
              }
            }
          ]
        }
      ]
    }
  }

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "AutoRental",
    "name": "Playa Car Rental",
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Sarah Mitchell" },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "reviewBody": "Best car rental experience in Mexico! They picked us up at the airport, the car was spotless. We drove all over the Riviera Maya without any issues. Will definitely use them again!",
        "datePublished": "2026-02-15"
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Jennifer Rodriguez" },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "reviewBody": "As someone who travels to Playa del Carmen frequently, Car Rental Playa is hands down the best. Professional, reliable, and their cars are always in excellent condition. Great prices too!",
        "datePublished": "2026-02-20"
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Ana M." },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "reviewBody": "Servicio rápido y sin sorpresas. Me entregaron el auto en el hotel y todo fue muy fácil. Definitivamente los recomiendo para cualquiera que visite Playa del Carmen.",
        "datePublished": "2026-03-10"
      }
    ]
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What documents do I need to rent a car in Playa del Carmen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You'll need a valid driver's license from your home country (US licenses are accepted), a credit card in the driver's name for the deposit, and your passport. International driving permits are not required for US citizens."
        }
      },
      {
        "@type": "Question",
        "name": "Is insurance included in the rental price?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! All our rentals include comprehensive insurance coverage including liability, collision damage waiver (CDW), and theft protection. There are no hidden fees - the price you see includes full coverage."
        }
      },
      {
        "@type": "Question",
        "name": "How does airport pickup work at Cancun Airport?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our team will meet you at Cancun International Airport (CUN) in the arrivals area. We'll have a sign with your name. We provide complimentary pickup and dropoff at the airport for all rentals. Just share your flight details when booking."
        }
      },
      {
        "@type": "Question",
        "name": "Can I drive the rental car to other Mexican states?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! Our vehicles are licensed for travel throughout Mexico. Many customers drive to Merida, Valladolid, and other destinations in the Yucatan Peninsula. We just ask that you let us know your planned route."
        }
      },
      {
        "@type": "Question",
        "name": "What is the cancellation policy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer free cancellation up to 48 hours before your scheduled pickup time. Cancellations made within 48 hours may be subject to a fee equivalent to one day's rental."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer one-way rentals in the Riviera Maya?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer one-way rentals within the Riviera Maya region. You can pick up in Cancun and drop off in Playa del Carmen or Tulum. Additional fees may apply depending on the locations."
        }
      },
      {
        "@type": "Question",
        "name": "What happens if I have a breakdown or accident?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our 24/7 English-speaking support team is always available. In case of a breakdown, we'll send roadside assistance or a replacement vehicle. For accidents, we'll guide you through the process and handle all paperwork."
        }
      },
      {
        "@type": "Question",
        "name": "Is there a minimum rental period?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer rentals starting from just 1 day. However, weekly rentals offer the best value with significant daily discounts. Contact us for special rates on monthly rentals."
        }
      }
    ]
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Playa Car Rental",
    "url": "https://www.carrentalplaya.com",
    "description": "Premium car rental service in Playa del Carmen, Mexico. Serving American tourists with free Cancun airport pickup, full insurance, and 24/7 English support.",
    "inLanguage": ["en-US", "es-MX"]
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.carrentalplaya.com"
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}
