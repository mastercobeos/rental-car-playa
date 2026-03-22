"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/language-context"

export function FAQSection() {
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
    <section id="faq" className="py-20 bg-secondary/20" aria-label="Frequently asked questions about car rental in Playa del Carmen">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Header */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">{t("FAQ", "Preguntas Frecuentes")}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4 text-balance">
              {t("Frequently Asked Questions", "Preguntas Frecuentes")}
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              {t(
                "Everything you need to know about renting a car in Playa del Carmen. Can't find the answer you're looking for? Reach out to our team.",
                "Todo lo que necesitas saber sobre rentar un auto en Playa del Carmen. ¿No encuentras la respuesta que buscas? Comunícate con nuestro equipo."
              )}
            </p>

            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-2 text-foreground">{t("Still have questions?", "¿Aún tienes preguntas?")}</h3>
              <p className="text-muted-foreground text-sm mb-4">
                {t(
                  "Our friendly team is here to help you plan the perfect trip.",
                  "Nuestro amable equipo está aquí para ayudarte a planear el viaje perfecto."
                )}
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="tel:+529902031942"
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +52 990 203 1942
                </a>
                <a
                  href="mailto:info@carrentalplaya.com"
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@carrentalplaya.com
                </a>
                <a
                  href="https://wa.me/529902031942"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-accent hover:underline"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  {t("WhatsApp Us", "Escríbenos por WhatsApp")}
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - FAQ Accordion */}
          <div className="space-y-4">
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
