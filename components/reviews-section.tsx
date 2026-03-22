"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/language-context"

const reviews = [
  {
    id: 1,
    name: "Ana M.",
    location: "Playa del Carmen",
    rating: 5,
    text: "Servicio rápido y sin sorpresas. Me entregaron el auto en el hotel y todo fue muy fácil. Definitivamente los recomiendo para cualquiera que visite Playa del Carmen.",
    date: "Marzo 2026",
    car: "Nissan Versa",
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    location: "Austin, Texas",
    rating: 5,
    text: "Best car rental experience in Mexico! They picked us up at the airport, the car was spotless. We drove all over the Riviera Maya without any issues. Will definitely use them again!",
    date: "February 2026",
    car: "Toyota RAV4",
  },
  {
    id: 3,
    name: "Carlos R.",
    location: "Ciudad de México",
    rating: 5,
    text: "Excelente servicio, sin cargos ocultos. Me recogieron en el aeropuerto de Cancún y me entregaron un SUV espacioso perfecto para mi familia. El precio fue justo y el proceso muy sencillo.",
    date: "Enero 2026",
    car: "Jeep Wrangler",
  },
  {
    id: 4,
    name: "Jennifer Rodriguez",
    location: "Miami, Florida",
    rating: 5,
    text: "As someone who travels to Playa del Carmen frequently, Car Rental Playa is hands down the best. Professional, reliable, and their cars are always in excellent condition. Great prices too!",
    date: "February 2026",
    car: "Chevrolet Aveo",
  },
  {
    id: 5,
    name: "Marco & Lucía",
    location: "Guadalajara, Jalisco",
    rating: 5,
    text: "Rentamos una moto para recorrer Playa del Carmen y fue la mejor decisión. Muy ágil para moverse y el precio excelente. Atención de 8 a 7pm y siempre respondieron nuestras dudas.",
    date: "Marzo 2026",
    car: "Honda PCX 150",
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
              "Don't just take our word for it. Here's what travelers from across the USA have to say about their experience.",
              "No solo confíes en nuestra palabra. Esto es lo que viajeros de todo Estados Unidos dicen sobre su experiencia."
            )}
          </p>
        </div>

        {/* Reviews Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Review Card */}
            <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
              <Quote className="h-10 w-10 text-primary/20 mb-6" />

              <div className="flex items-center gap-1 mb-6">
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
              </div>

              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-8">
                &ldquo;{reviews[currentIndex].text}&rdquo;
              </p>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-6 border-t border-border">
                <div>
                  <p className="font-semibold text-foreground">{reviews[currentIndex].name}</p>
                  <p className="text-muted-foreground text-sm">{reviews[currentIndex].location}</p>
                </div>
                <div className="md:text-right">
                  <p className="text-sm text-primary font-medium">{reviews[currentIndex].car}</p>
                  <p className="text-sm text-muted-foreground">{reviews[currentIndex].date}</p>
                </div>
              </div>
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
            <span className="text-sm font-medium">{t("Verified Reviews", "Reseñas Verificadas")}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-sm font-medium">{t("4.9 Average Rating", "4.9 Calificación Promedio")}</span>
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
