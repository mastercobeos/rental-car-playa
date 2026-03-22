"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/language-context"

const reviews = [
  {
    id: 1,
    name: "Denia Morales",
    rating: 5,
    text: "Muy buen servicio, atención profesional y vehículos en excelentes condiciones. Todo fue claro desde el inicio. Totalmente recomendado.",
    date: "Diciembre 2025",
    initial: "D",
    color: "bg-purple-500",
  },
  {
    id: 2,
    name: "R",
    rating: 5,
    text: "Alex was very honest and very reliable he drove the car to our resort and picked it up after too with no complications or hidden fees. I strongly recommend this company for everyone, will definitely be renting from them every time I come to Mexico! A++",
    date: "December 2025",
    initial: "R",
    color: "bg-blue-600",
    badge: "Local Guide",
  },
  {
    id: 3,
    name: "Guadalupe Carrera",
    rating: 5,
    text: "En mi experiencia se los recomiendo 100%. Precios accesibles y nos trataron muy bien, su camioneta super cómoda y confiable. Pudimos ir a diferentes lugares sin necesidad de estar transbordador.",
    date: "Agosto 2025",
    initial: "G",
    color: "bg-pink-500",
  },
  {
    id: 4,
    name: "Jairo Villegas",
    rating: 5,
    text: "The service was perfect from the beginning to the end. Alex was very responsive all the time. Price was very affordable compared with other car rentals.",
    date: "January 2026",
    initial: "J",
    color: "bg-blue-800",
  },
  {
    id: 5,
    name: "Aura RIVIERA",
    rating: 5,
    text: "Nos encanto servicio directo a nuestro hotel nos llevaron el vehículo la atención de primera. Auto exelente con clima y Bluetooth en buen estado y precio de renta.",
    date: "Septiembre 2025",
    initial: "A",
    color: "bg-red-500",
    badge: "Local Guide",
  },
  {
    id: 6,
    name: "Heriberto Mancha",
    rating: 5,
    text: "100% trust worthy. Been renting from them for almost 7 years without any issue, recently I hired for airport pick ups and it was great also!",
    date: "July 2025",
    initial: "H",
    color: "bg-amber-600",
  },
  {
    id: 7,
    name: "Sylvie Tremblay",
    rating: 5,
    text: "Alquilamos un coche en esta empresa. El coche estaba nuevo, limpio y recibimos un servicio increíble. Los recomiendo muchísimo. Un agradecimiento especial a Alex, quien fue de gran ayuda.",
    date: "Diciembre 2025",
    initial: "S",
    color: "bg-teal-500",
  },
  {
    id: 8,
    name: "Raquel Gallart Chico",
    rating: 5,
    text: "Increíble el trato, Alejandro muy profesional nos explicó todo al detalle. Sin duda volvería a confiar en vosotros. Totalmente recomendable.",
    date: "Agosto 2025",
    initial: "R",
    color: "bg-green-600",
  },
  {
    id: 9,
    name: "Ismael Carmona",
    rating: 5,
    text: "Me llevaron el auto hasta mi hotel; todo rápido y sin complicaciones.",
    date: "Agosto 2025",
    initial: "I",
    color: "bg-indigo-500",
    badge: "Local Guide",
  },
  {
    id: 10,
    name: "Fernando Sanchez",
    rating: 5,
    text: "Excelente atención, tienen disponibilidad de autos y están en buenas condiciones.",
    date: "Enero 2026",
    initial: "F",
    color: "bg-orange-500",
  },
  {
    id: 11,
    name: "Brenda Arguello Mendez",
    rating: 5,
    text: "Excelente servicio, y muy recomendable Alex muy responsable buen chico buen trabajo.",
    date: "Diciembre 2025",
    initial: "B",
    color: "bg-rose-500",
  },
]

export function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { t } = useLanguage()

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="reviews" className="py-12 sm:py-16 lg:py-24 bg-secondary/20" aria-label="Customer reviews and testimonials">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary font-semibold text-xs uppercase tracking-widest">
            {t("Testimonials", "Testimonios")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-5 text-balance">
            {t("What Our Customers Say", "Lo Que Dicen Nuestros Clientes")}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {t(
              "Real reviews from our customers on Google. 5.0 stars with 21 verified reviews.",
              "Reseñas reales de nuestros clientes en Google. 5.0 estrellas con 21 reseñas verificadas."
            )}
          </p>
        </div>

        {/* Reviews Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Review Card */}
            <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className={cn("w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm", (reviews[currentIndex] as any).color)}>
                    {(reviews[currentIndex] as any).initial}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{reviews[currentIndex].name}</p>
                    {(reviews[currentIndex] as any).badge && (
                      <p className="text-xs text-muted-foreground">{(reviews[currentIndex] as any).badge}</p>
                    )}
                  </div>
                </div>
                <svg className="h-6 w-6" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>

              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "h-5 w-5",
                      i < reviews[currentIndex].rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-muted"
                    )}
                  />
                ))}
                <span className="text-xs text-muted-foreground ml-2">{reviews[currentIndex].date}</span>
              </div>

              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
                &ldquo;{reviews[currentIndex].text}&rdquo;
              </p>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center gap-4 mt-10">
              <button
                onClick={prevReview}
                className="w-11 h-11 rounded-full border border-border text-muted-foreground hover:border-primary hover:bg-primary/10 hover:text-foreground transition-all duration-200 flex items-center justify-center"
                aria-label="Previous review"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-2">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={cn(
                      "h-2 rounded-full transition-all duration-300",
                      currentIndex === index
                        ? "bg-primary w-8"
                        : "bg-border w-2 hover:bg-muted-foreground/50"
                    )}
                    aria-label={`Go to review ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextReview}
                className="w-11 h-11 rounded-full border border-border text-muted-foreground hover:border-primary hover:bg-primary/10 hover:text-foreground transition-all duration-200 flex items-center justify-center"
                aria-label="Next review"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-20 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            <span className="text-sm font-medium">{t("Google Reviews", "Reseñas de Google")}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-sm font-medium">{t("5.0 Rating (21 reviews)", "5.0 Calificación (21 reseñas)")}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
            </svg>
            <span className="text-sm font-medium">{t("500+ Happy Customers", "500+ Clientes Satisfechos")}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
