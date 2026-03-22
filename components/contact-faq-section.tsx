"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Clock, ChevronDown, Navigation } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/language-context"

export function ContactFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const { t } = useLanguage()

  const faqs = [
    {
      question: t("What documents do I need to rent a car?", "¿Qué documentos necesito para rentar un auto?"),
      answer: t(
        "You'll need a valid driver's license from your home country (US licenses are accepted), a credit card in the driver's name for the deposit, and your passport. International driving permits are not required for US citizens.",
        "Necesitarás una licencia de conducir válida de tu país (las licencias de EE.UU. son aceptadas), una tarjeta de crédito a nombre del conductor para el depósito y tu pasaporte. No se requiere permiso internacional de conducir para ciudadanos estadounidenses."
      ),
    },
    {
      question: t("Is insurance included in the rental price?", "¿El seguro está incluido en el precio de renta?"),
      answer: t(
        "Yes! All our rentals include comprehensive insurance coverage including liability, collision damage waiver (CDW), and theft protection. There are no hidden fees - the price you see includes full coverage.",
        "¡Sí! Todas nuestras rentas incluyen cobertura de seguro integral incluyendo responsabilidad civil, exención de daños por colisión (CDW) y protección contra robo. No hay cargos ocultos - el precio que ves incluye cobertura total."
      ),
    },
    {
      question: t("How does airport pickup work?", "¿Cómo funciona la recogida en el aeropuerto?"),
      answer: t(
        "Our team will meet you at Cancun International Airport (CUN) in the arrivals area. We'll have a sign with your name. We provide complimentary pickup and dropoff at the airport for all rentals. Just share your flight details when booking.",
        "Nuestro equipo te recibirá en el Aeropuerto Internacional de Cancún (CUN) en el área de llegadas. Tendremos un letrero con tu nombre. Ofrecemos recogida y entrega gratuita en el aeropuerto para todas las rentas. Solo comparte los detalles de tu vuelo al reservar."
      ),
    },
    {
      question: t("Can I drive the rental car to other Mexican states?", "¿Puedo llevar el auto rentado a otros estados de México?"),
      answer: t(
        "Absolutely! Our vehicles are licensed for travel throughout Mexico. Many customers drive to Merida, Valladolid, and other destinations in the Yucatan Peninsula. We just ask that you let us know your planned route.",
        "¡Por supuesto! Nuestros vehículos están autorizados para viajar por todo México. Muchos clientes manejan a Mérida, Valladolid y otros destinos en la Península de Yucatán. Solo te pedimos que nos informes tu ruta planeada."
      ),
    },
    {
      question: t("What is your cancellation policy?", "¿Cuál es su política de cancelación?"),
      answer: t(
        "We offer free cancellation up to 48 hours before your scheduled pickup time. Cancellations made within 48 hours may be subject to a fee equivalent to one day's rental. No-shows will be charged the full amount.",
        "Ofrecemos cancelación gratuita hasta 48 horas antes de tu hora de recogida programada. Las cancelaciones dentro de las 48 horas pueden estar sujetas a un cargo equivalente a un día de renta. Las ausencias se cobrarán el monto total."
      ),
    },
    {
      question: t("Do you offer one-way rentals?", "¿Ofrecen rentas de un solo sentido?"),
      answer: t(
        "Yes, we offer one-way rentals within the Riviera Maya region. You can pick up in Cancun and drop off in Playa del Carmen or Tulum. Additional fees may apply depending on the locations.",
        "Sí, ofrecemos rentas de un solo sentido dentro de la región de la Riviera Maya. Puedes recoger en Cancún y devolver en Playa del Carmen o Tulum. Pueden aplicar cargos adicionales dependiendo de las ubicaciones."
      ),
    },
    {
      question: t("What happens if I have a breakdown or accident?", "¿Qué pasa si tengo una avería o accidente?"),
      answer: t(
        "Our 24/7 English-speaking support team is always available. In case of a breakdown, we'll send roadside assistance or a replacement vehicle. For accidents, we'll guide you through the process and handle all paperwork.",
        "Nuestro equipo de soporte 24/7 en inglés y español está siempre disponible. En caso de avería, enviaremos asistencia en carretera o un vehículo de reemplazo. Para accidentes, te guiaremos en el proceso y manejaremos todo el papeleo."
      ),
    },
    {
      question: t("Is there a minimum rental period?", "¿Hay un período mínimo de renta?"),
      answer: t(
        "We offer rentals starting from just 1 day. However, weekly rentals offer the best value with significant daily discounts. Contact us for special rates on monthly rentals.",
        "Ofrecemos rentas desde solo 1 día. Sin embargo, las rentas semanales ofrecen el mejor valor con descuentos diarios significativos. Contáctanos para tarifas especiales en rentas mensuales."
      ),
    },
  ]

  return (
    <section id="contact" className="py-20 bg-background" aria-label="Contact and FAQ">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-xs uppercase tracking-widest">
            {t("Contact & FAQ", "Contacto y FAQ")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4 text-balance">
            {t("Ready to Start Your Adventure?", "¿Listo Para Comenzar Tu Aventura?")}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t(
              "Get in touch or find answers to common questions below.",
              "Ponte en contacto o encuentra respuestas a preguntas frecuentes."
            )}
          </p>
        </div>

        {/* Contact info + Map row */}
        <div className="grid lg:grid-cols-3 gap-6 mb-20">
          {/* Contact cards */}
          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-card border border-border flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground text-sm">{t("Phone / WhatsApp", "Teléfono / WhatsApp")}</h3>
                <a href="tel:+529902031942" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  +52 990 203 1942
                </a>
                <p className="text-xs text-muted-foreground mt-1">{t("English & Spanish", "Inglés y Español")}</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-card border border-border flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground text-sm">{t("Email", "Correo")}</h3>
                <a href="mailto:info@carrentalplaya.com" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  info@carrentalplaya.com
                </a>
                <p className="text-xs text-muted-foreground mt-1">{t("We respond within 2 hours", "Respondemos en menos de 2 horas")}</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-card border border-border flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground text-sm">{t("Location", "Ubicación")}</h3>
                <p className="text-muted-foreground text-sm">Av. 10, Playa del Carmen</p>
                <p className="text-xs text-muted-foreground">Quintana Roo, México</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-card border border-border flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground text-sm">{t("Hours", "Horario")}</h3>
                <p className="text-muted-foreground text-sm">{t("Monday - Sunday", "Lunes - Domingo")}</p>
                <p className="text-xs text-muted-foreground">8:00 AM - 8:00 PM</p>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <Button className="w-full gap-2 bg-[#25D366] hover:bg-[#1da851] text-white rounded-xl py-6 text-base font-semibold" asChild>
              <a href="https://wa.me/529902031942" target="_blank" rel="noopener noreferrer">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                {t("Chat on WhatsApp", "Escríbenos por WhatsApp")}
              </a>
            </Button>

            <a
              href="https://maps.google.com/?q=Av+10+Playa+del+Carmen"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 p-4 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-semibold"
            >
              <Navigation className="h-5 w-5" />
              {t("Open in Maps", "Abrir en Maps")}
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

        {/* FAQ Section */}
        <div id="faq">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold text-xs uppercase tracking-widest">
              {t("FAQ", "Preguntas Frecuentes")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4 text-balance">
              {t("Frequently Asked Questions", "Preguntas Frecuentes")}
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-card rounded-xl border border-border overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/30 transition-colors"
                >
                  <span className="font-semibold text-card-foreground pr-4">{faq.question}</span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform duration-200",
                      openIndex === index && "rotate-180"
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-200",
                    openIndex === index ? "max-h-96" : "max-h-0"
                  )}
                >
                  <p className="px-6 pb-6 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
