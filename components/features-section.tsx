"use client"

import { Shield, Clock, DollarSign, Car, MapPin, Plane } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function FeaturesSection() {
  const { t } = useLanguage()

  const features = [
    {
      icon: DollarSign,
      title: t("No Hidden Fees", "Sin Cargos"),
      description: t(
        "We don't charge hidden fees. The price you see is the price you pay. Transparent and honest.",
        "No cobramos tarifas ocultas. El precio que ves es el precio que pagas. Transparente y honesto."
      ),
    },
    {
      icon: Clock,
      title: t("Service 8 AM to 7 PM", "Atención 8 AM a 7 PM"),
      description: t(
        "Direct delivery to your hotel. We bring the car to you so you can start your adventure right away.",
        "Entrega directa en tu hotel. Te llevamos el auto para que comiences tu aventura de inmediato."
      ),
    },
    {
      icon: Shield,
      title: t("Variety & Insurance", "Variedad"),
      description: t(
        "Insurance included with every rental. Choose from cars, SUVs, and motorcycles.",
        "Seguro incluido en cada renta. Elige entre autos, SUVs y motos."
      ),
    },
    {
      icon: MapPin,
      title: t("Playa del Carmen", "Playa del Carmen"),
      description: t(
        "Located in the heart of Playa del Carmen, near the airport and the most beautiful beaches.",
        "Ubicados en el corazón de Playa del Carmen, cerca del aeropuerto y las playas más bonitas."
      ),
    },
    {
      icon: Plane,
      title: t("Cancun Airport", "Aeropuerto de Cancún"),
      description: t(
        "Free pickup and drop-off at Cancun International Airport. We meet you at arrivals.",
        "Recogida y entrega gratuita en el Aeropuerto Internacional de Cancún. Te recibimos en llegadas."
      ),
    },
    {
      icon: Car,
      title: t("Quality Fleet", "Flota de Calidad"),
      description: t(
        "Well-maintained, recent model vehicles. Manual and automatic cars, SUVs, and motorcycles.",
        "Vehículos bien mantenidos, modelos recientes. Autos manuales y automáticos, SUVs y motos."
      ),
    },
  ]

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-xs uppercase tracking-widest">
            {t("Why Choose Us", "Por Qué Elegirnos")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4 text-balance">
            {t(
              "Rent Without Complications",
              "Renta Sin Complicaciones"
            )}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t(
              "Enjoy Playa del Carmen with reliable cars, transparent pricing, and personalized service.",
              "Disfruta Playa del Carmen con autos confiables, precios transparentes y servicio personalizado."
            )}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Banner */}
        <div className="mt-20 py-12 px-8 rounded-2xl bg-card border border-primary/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10" />
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground text-sm">{t("Happy Customers", "Clientes Satisfechos")}</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <p className="text-muted-foreground text-sm">{t("Vehicles in Fleet", "Vehículos en Flota")}</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">4.9</div>
              <p className="text-muted-foreground text-sm">{t("Average Rating", "Calificación Promedio")}</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">8+</div>
              <p className="text-muted-foreground text-sm">{t("Years Experience", "Años de Experiencia")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
