"use client"

import { MapPin, Clock, Navigation } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function LocationSection() {
  const { t } = useLanguage()

  return (
    <section id="location" className="py-20 bg-background" aria-label="Our location in Playa del Carmen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary font-semibold text-xs uppercase tracking-widest">
            {t("Find Us", "Encuéntranos")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4 text-balance">
            {t("Our Location", "Nuestra Ubicación")}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t(
              "We're in the heart of Playa del Carmen, near the airport and the most beautiful beaches.",
              "Estamos en el corazón de Playa del Carmen, cerca del aeropuerto y las playas más bonitas."
            )}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Info Cards */}
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-bold text-foreground">{t("Address", "Dirección")}</h3>
              </div>
              <p className="text-muted-foreground">Av. 10, Playa del Carmen</p>
              <p className="text-muted-foreground text-sm">Quintana Roo, México</p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-bold text-foreground">{t("Hours", "Horario")}</h3>
              </div>
              <p className="text-muted-foreground">8:00 AM - 8:00 PM</p>
              <p className="text-muted-foreground text-sm">{t("Monday to Sunday", "Lunes a Domingo")}</p>
            </div>

            <a
              href="https://maps.google.com/?q=Av+10+Playa+del+Carmen"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-6 rounded-2xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <Navigation className="h-5 w-5" />
              <span className="font-semibold">{t("Open in Maps", "Abrir en Maps")}</span>
            </a>
          </div>

          {/* Map */}
          <div className="lg:col-span-2 rounded-2xl overflow-hidden border border-border min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3734.889!2d-87.0739!3d20.6296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4e433f55c7ef3b%3A0x4c37a8e4b6e5a9c8!2sAv%2010%2C%20Playa%20del%20Carmen%2C%20Q.R.!5e0!3m2!1ses!2smx!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={t("Our location on Google Maps", "Nuestra ubicación en Google Maps")}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
