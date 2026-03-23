"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export function ContactSection() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <section id="contact" className="py-24 bg-secondary/30 relative overflow-hidden" aria-label="Contact Car Rental Playa">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-medium text-primary uppercase tracking-widest">
            {t("Contact Us", "Contáctanos")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4 text-balance">
            {t("Ready to Start Your Adventure?", "¿Listo Para Comenzar Tu Aventura?")}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {t(
              "Get in touch with our team. We're here to help you find the perfect car for your trip.",
              "Ponte en contacto con nuestro equipo. Estamos aquí para ayudarte a encontrar el auto perfecto para tu viaje."
            )}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">
              {t("Get in Touch", "Ponte en Contacto")}
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-foreground font-semibold mb-1">{t("Phone", "Teléfono")}</h4>
                  <a href="tel:+529902031942" className="text-muted-foreground hover:text-primary transition-colors">
                    +52 990 203 1942
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">
                    {t("English & Spanish support", "Soporte en inglés y español")}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-foreground font-semibold mb-1">{t("Email", "Correo Electrónico")}</h4>
                  <a href="mailto:info@carrentalplaya.com" className="text-muted-foreground hover:text-primary transition-colors">
                    info@carrentalplaya.com
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">
                    {t("We respond within 2 hours", "Respondemos en menos de 2 horas")}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-foreground font-semibold mb-1">{t("Location", "Ubicación")}</h4>
                  <p className="text-muted-foreground">Av. 10, Playa del Carmen</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {t("In the heart of Playa del Carmen, near the airport and the most beautiful beaches", "En el corazón de Playa del Carmen, cerca del aeropuerto y las playas más bonitas")}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-foreground font-semibold mb-1">{t("Hours", "Horario")}</h4>
                  <p className="text-muted-foreground">
                    {t("Monday - Sunday: 8:00 AM - 7:00 PM", "Lunes - Domingo: 8:00 AM - 7:00 PM")}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-10">
              <h4 className="text-foreground font-semibold mb-4">{t("Follow Us", "Síguenos")}</h4>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/share/1Ax2LRWSQ2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-200"
                  aria-label="Facebook"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/carrentalplaya?utm_source=qr&igsh=eXloczZ3cXF4NTlq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-200"
                  aria-label="Instagram"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://wa.me/529902031942"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-200"
                  aria-label="WhatsApp"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
                <a
                  href="https://vt.tiktok.com/ZSusGcGb7/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-200"
                  aria-label="TikTok"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.75a8.18 8.18 0 004.76 1.52V6.84a4.84 4.84 0 01-1-.15z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              {t("Send Us a Message", "Envíanos un Mensaje")}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                  {t("Full Name", "Nombre Completo")}
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={t("Write your name", "Escribe tu nombre")}
                  className="w-full px-4 py-3 rounded-xl bg-muted/30 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all duration-200"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                    {t("Email Address", "Correo Electrónico")}
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="correo@ejemplo.com"
                    className="w-full px-4 py-3 rounded-xl bg-muted/30 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all duration-200"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                    {t("Phone Number", "Número de Teléfono")}
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+52 990 203 1942"
                    className="w-full px-4 py-3 rounded-xl bg-muted/30 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all duration-200"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                  {t("Message", "Mensaje")}
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t("Tell us about your trip plans...", "Cuéntanos sobre tus planes de viaje...")}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-muted/30 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all duration-200 resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full py-6 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl gap-2 transition-colors duration-200"
              >
                <Send className="h-5 w-5" />
                {t("Send Now", "Enviar Ahora")}
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                {t(
                  "We typically respond within 2 hours during business hours.",
                  "Generalmente respondemos en menos de 2 horas en horario laboral."
                )}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
