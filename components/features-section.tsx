"use client"

import { Shield, Clock, DollarSign, Car, MapPin, Plane, Users, Baby } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function FeaturesSection() {
  const { t } = useLanguage()

  const features = [
    {
      icon: Shield,
      title: t("Insurance Included", "Seguro Incluido"),
      description: t(
        "Full insurance included with 10% deductible. Third-party liability coverage on every rental.",
        "Seguro incluido con 10% de deducible. Cobertura de daños a terceros en cada renta."
      ),
    },
    {
      icon: Users,
      title: t("2 Drivers Included", "2 Conductores Incluidos"),
      description: t(
        "Add a second driver at no extra charge. Perfect for couples and families on road trips.",
        "Agrega un segundo conductor sin cobro adicional. Perfecto para parejas y familias en viajes."
      ),
    },
    {
      icon: Baby,
      title: t("Free Baby Seat", "Silla de Bebé Gratis"),
      description: t(
        "Complimentary baby car seat with every rental. Travel safely with your little ones.",
        "Silla de bebé de cortesía con cada renta. Viaja seguro con tus pequeños."
      ),
    },
    {
      icon: DollarSign,
      title: t("Cash & Card Payments", "Pago Efectivo y Tarjeta"),
      description: t(
        "Pay with cash (USD, MXN, EUR) or debit/credit card. Flexible payment options for your convenience.",
        "Paga con efectivo (USD, MXN, EUR) o tarjeta de débito/crédito. Opciones de pago flexibles."
      ),
    },
    {
      icon: Plane,
      title: t("Cancun Airport Delivery", "Entrega en Aeropuerto"),
      description: t(
        "Pickup and delivery at Cancun International Airport (CUN) for $50 USD. We meet you at arrivals.",
        "Recogida y entrega en el Aeropuerto Internacional de Cancún (CUN) por $50 USD. Te recibimos en llegadas."
      ),
    },
    {
      icon: Clock,
      title: t("Service 8 AM to 8 PM", "Atención 8 AM a 8 PM"),
      description: t(
        "Available every day from 8 AM to 8 PM. Hotel delivery in Playa del Carmen included at no extra cost.",
        "Disponibles todos los días de 8 AM a 8 PM. Entrega en hotel en Playa del Carmen sin costo adicional."
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
