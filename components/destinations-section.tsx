"use client"

import { MapPin, Clock, ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function DestinationsSection() {
  const { t } = useLanguage()

  const destinations = [
    {
      name: t("Tulum Ruins", "Ruinas de Tulum"),
      distance: "65 km",
      time: "1 hour",
      image: "https://images.unsplash.com/photo-1518638150340-f706e86654de?w=600&h=800&fit=crop",
      description: t(
        "Ancient Mayan clifftop ruins overlooking the Caribbean Sea.",
        "Antiguas ruinas mayas en lo alto de un acantilado con vista al Mar Caribe."
      ),
    },
    {
      name: t("Chichen Itza", "Chichén Itzá"),
      distance: "180 km",
      time: "2.5 hours",
      image: "https://images.unsplash.com/photo-1518638150340-f706e86654de?w=600&h=800&fit=crop",
      description: t(
        "One of the New Seven Wonders of the World.",
        "Una de las Nuevas Siete Maravillas del Mundo."
      ),
    },
    {
      name: "Cenote Ik Kil",
      distance: "190 km",
      time: "2.5 hours",
      image: "https://images.unsplash.com/photo-1552061275-75f90131c6be?w=600&h=800&fit=crop",
      description: t(
        "Stunning underground swimming hole with hanging vines.",
        "Impresionante pozo de natación subterráneo con enredaderas colgantes."
      ),
    },
    {
      name: t("Cozumel Island", "Isla Cozumel"),
      distance: "20 km + ferry",
      time: "45 min",
      image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=600&h=800&fit=crop",
      description: t(
        "World-class diving and snorkeling destination.",
        "Destino de buceo y snorkel de clase mundial."
      ),
    },
  ]

  return (
    <section id="destinations" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            {t("Explore", "Explorar")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4 text-balance">
            {t(
              "Must-Visit Destinations Near Playa del Carmen",
              "Destinos Imperdibles Cerca de Playa del Carmen"
            )}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t(
              "With your own rental car, discover the incredible beauty and history of the Yucatan Peninsula.",
              "Con tu propio auto rentado, descubre la increíble belleza e historia de la Península de Yucatán."
            )}
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer"
            >
              <img
                src={destination.image}
                alt={destination.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-background mb-2">{destination.name}</h3>
                <p className="text-background/80 text-sm mb-4 line-clamp-2">{destination.description}</p>

                <div className="flex items-center gap-4 text-sm text-background/70">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{destination.distance}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{destination.time}</span>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2 text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>{t("Plan Your Trip", "Planea Tu Viaje")}</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center p-10 rounded-3xl bg-card border border-border">
          <h3 className="text-2xl font-bold text-card-foreground mb-4">
            {t(
              "Need Help Planning Your Itinerary?",
              "¿Necesitas Ayuda Planeando Tu Itinerario?"
            )}
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            {t(
              "Our local team can help you plan the perfect road trip through the Riviera Maya. Get insider tips on the best routes, hidden cenotes, and local restaurants.",
              "Nuestro equipo local puede ayudarte a planear el viaje perfecto por la Riviera Maya. Obtén consejos sobre las mejores rutas, cenotes escondidos y restaurantes locales."
            )}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            {t("Contact Our Team", "Contacta a Nuestro Equipo")}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
