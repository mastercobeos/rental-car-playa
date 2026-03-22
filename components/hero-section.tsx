"use client"

import { useState, useEffect } from "react"
import { Calendar, MapPin, Clock, ChevronDown, Shield, Headphones, BadgeCheck, ArrowRight, Star, Car } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

const heroImages = [
  {
    src: "/WhatsApp Image 2026-03-21 at 15.44.45.jpeg",
    alt: "SUV rental for Riviera Maya road trip - Playa del Carmen car rental",
  },
  {
    src: "/WhatsApp Image 2026-03-21 at 15.46.05.jpeg",
    alt: "Sedan car available for rent in Playa del Carmen Mexico",
  },
  {
    src: "/WhatsApp Image 2026-03-21 at 15.46.52.jpeg",
    alt: "Toyota RAV4 rental car for Cancun airport pickup service",
  },
  {
    src: "/WhatsApp Image 2026-03-21 at 15.50.06.jpeg",
    alt: "Premium car rental fleet in Playa del Carmen with full insurance included",
  },
]

export function HeroSection() {
  const [pickupLocation, setPickupLocation] = useState("")
  const [pickupDate, setPickupDate] = useState("")
  const [returnDate, setReturnDate] = useState("")
  const [pickupTime, setPickupTime] = useState("8:00 AM")
  const [currentImage, setCurrentImage] = useState(0)
  const { t, language } = useLanguage()

  const locationLabels: Record<string, string> = {
    "cancun-airport": "Cancun International Airport (CUN)",
    "playa-centro": language === "en" ? "Playa del Carmen - Downtown" : "Playa del Carmen - Centro",
    "tulum": "Tulum",
    "hotel-delivery": language === "en" ? "Hotel Delivery" : "Entrega en Hotel",
  }

  const handleReserve = () => {
    const locationName = locationLabels[pickupLocation] || (language === "en" ? "Not selected" : "No seleccionado")
    const pickup = pickupDate || (language === "en" ? "Not selected" : "No seleccionada")
    const returnD = returnDate || (language === "en" ? "Not selected" : "No seleccionada")

    const message = language === "en"
      ? `Hello! I'd like to reserve a car 🚗\n\n📍 *Pickup Location:* ${locationName}\n📅 *Pickup Date:* ${pickup}\n📅 *Return Date:* ${returnD}\n🕐 *Pickup Time:* ${pickupTime}\n\nCould you confirm availability? Thank you!`
      : `¡Hola! Me gustaría reservar un auto 🚗\n\n📍 *Lugar de Recogida:* ${locationName}\n📅 *Fecha de Recogida:* ${pickup}\n📅 *Fecha de Devolución:* ${returnD}\n🕐 *Hora de Recogida:* ${pickupTime}\n\n¿Podrían confirmar disponibilidad? ¡Gracias!`

    const phone = "529902031942"
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev: number) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="booking" className="pt-20 md:pt-24 pb-2 bg-gradient-to-br from-background via-background to-primary/5 flex flex-col justify-center relative overflow-hidden min-h-[calc(100vh-2rem)]">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

      <div className="container mx-auto px-4 flex-1 flex flex-col justify-center relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
          {/* Left - Text Content */}
          <div className="py-4">
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 bg-primary/10 border border-primary/25 rounded-full px-5 py-2 mb-4 shadow-sm">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-xs font-bold tracking-wider uppercase text-primary">
                {t("Playa del Carmen, Mexico", "Playa del Carmen, México")}
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-[1.05] mb-3 tracking-tight text-foreground">
              {t("Your adventure", "Tu aventura")}{" "}
              <br className="hidden md:block" />
              {t("starts ", "empieza ")}{" "}
              <span className="relative inline-block">
                <span className="text-gradient-tropical">{t("on wheels", "sobre ruedas")}</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                  <path d="M1 5.5C47 2 153 2 199 5.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-primary/30" />
                </svg>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base md:text-lg text-muted-foreground mb-4 max-w-lg leading-relaxed">
              {t(
                "Rent your car in minutes. We deliver to your hotel or at Cancun Airport. No hidden fees, full insurance included.",
                "Renta tu auto en minutos. Entregamos en tu hotel o en el Aeropuerto de Cancún. Sin cargos ocultos, seguro incluido."
              )}
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-2.5 mb-4">
              <div className="flex items-center gap-2 bg-white border border-primary/20 rounded-full px-4 py-2 shadow-sm">
                <Shield className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm text-foreground font-medium">{t("Full Insurance", "Seguro Total")}</span>
              </div>
              <div className="flex items-center gap-2 bg-white border border-primary/20 rounded-full px-4 py-2 shadow-sm">
                <Car className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm text-foreground font-medium">{t("Free Delivery", "Entrega Gratis")}</span>
              </div>
              <div className="flex items-center gap-2 bg-white border border-primary/20 rounded-full px-4 py-2 shadow-sm">
                <BadgeCheck className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm text-foreground font-medium">{t("Transparent Pricing", "Precios Claros")}</span>
              </div>
            </div>

            {/* Stats row */}
            <div className="flex items-center gap-0 bg-white/80 backdrop-blur-sm rounded-2xl border border-border/50 shadow-sm p-3 mb-4">
              <div className="flex-1 text-center">
                <p className="text-2xl font-extrabold text-primary">500+</p>
                <p className="text-xs text-muted-foreground font-medium">{t("Happy Clients", "Clientes Felices")}</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="flex-1 text-center">
                <div className="flex items-center justify-center gap-1">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <span className="text-2xl font-extrabold text-primary">4.9</span>
                </div>
                <p className="text-xs text-muted-foreground font-medium">{t("Rating", "Calificación")}</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="flex-1 text-center">
                <p className="text-2xl font-extrabold text-primary">24/7</p>
                <p className="text-xs text-muted-foreground font-medium">{t("Support", "Soporte")}</p>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-muted-foreground font-medium">{t("Follow us", "Síguenos")}</span>
              <a
                href="https://www.facebook.com/share/1Ax2LRWSQ2/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-border bg-white flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 shadow-sm"
                aria-label="Facebook"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/carrentalplaya?utm_source=qr&igsh=eXloczZ3cXF4NTlq"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-border bg-white flex items-center justify-center text-muted-foreground hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600 hover:text-white hover:border-transparent transition-all duration-200 shadow-sm"
                aria-label="Instagram"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://vt.tiktok.com/ZSusGcGb7/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-border bg-white flex items-center justify-center text-muted-foreground hover:bg-black hover:text-white hover:border-black transition-all duration-200 shadow-sm"
                aria-label="TikTok"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.75a8.18 8.18 0 004.76 1.52V6.84a4.84 4.84 0 01-1-.15z"/>
                </svg>
              </a>
              <a
                href="https://wa.me/529902031942"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-border bg-white flex items-center justify-center text-muted-foreground hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all duration-200 shadow-sm"
                aria-label="WhatsApp"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right - Photo Slider */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-auto lg:min-h-[350px] lg:h-[45vh] lg:max-h-[500px] ring-2 ring-primary/30 ring-offset-4 ring-offset-background">
            {heroImages.map((image, index) => (
              <img
                key={image.src}
                src={image.src}
                alt={image.alt}
                width={800}
                height={600}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                  index === currentImage ? "opacity-100" : "opacity-0"
                }`}
                {...(index === 0 ? { fetchPriority: "high" } : { loading: "lazy" })}
              />
            ))}
            {/* Slider indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
              {heroImages.map((_image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    index === currentImage ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/80"
                  }`}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Booking Form - Floating card style */}
      <div className="container mx-auto px-4 relative z-10 pb-3">
        <div className="bg-white rounded-2xl shadow-xl border border-primary/30 border-t-[3px] border-t-primary p-3 md:p-4 mt-3">
          <div className="flex items-center gap-2 mb-3">
            <Car className="w-4 h-4 text-primary" />
            <h3 className="text-xs font-bold text-foreground uppercase tracking-wider">
              {t("Quick Reservation", "Reserva Rápida")}
            </h3>
          </div>
          <form onSubmit={(e) => { e.preventDefault(); handleReserve(); }} className="flex flex-col md:flex-row items-end gap-3">
            <div className="flex-1 w-full">
              <label className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 truncate">
                {t("Pickup Location", "Lugar Recogida")}
              </label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-primary/60" />
                <select
                  value={pickupLocation}
                  onChange={(e) => setPickupLocation(e.target.value)}
                  className="w-full pl-11 pr-10 py-2.5 rounded-xl text-sm border border-border bg-muted/30 text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary appearance-none cursor-pointer transition-all"
                >
                  <option value="">{t("Select location", "Selecciona ubicación")}</option>
                  <option value="cancun-airport">Cancun International Airport (CUN)</option>
                  <option value="playa-centro">{t("Playa del Carmen - Downtown", "Playa del Carmen - Centro")}</option>
                  <option value="tulum">Tulum</option>
                  <option value="hotel-delivery">{t("Hotel Delivery", "Entrega en Hotel")}</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              </div>
            </div>

            <div className="flex-1 w-full">
              <label className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 truncate">
                {t("Pickup Date", "Fecha Recogida")}
              </label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-primary/60" />
                <input
                  type="date"
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                  className="w-full pl-11 pr-4 py-2.5 rounded-xl text-sm border border-border bg-muted/30 text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>
            </div>

            <div className="flex-1 w-full">
              <label className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 truncate">
                {t("Return", "Devolución")}
              </label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-primary/60" />
                <input
                  type="date"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  className="w-full pl-11 pr-4 py-2.5 rounded-xl text-sm border border-border bg-muted/30 text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>
            </div>

            <div className="flex-1 w-full">
              <label className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 truncate">
                {t("Pickup Time", "Hora Recogida")}
              </label>
              <div className="relative">
                <Clock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-primary/60" />
                <select
                  value={pickupTime}
                  onChange={(e) => setPickupTime(e.target.value)}
                  className="w-full pl-11 pr-10 py-2.5 rounded-xl text-sm border border-border bg-muted/30 text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary appearance-none cursor-pointer transition-all"
                >
                  <option>8:00 AM</option>
                  <option>9:00 AM</option>
                  <option>10:00 AM</option>
                  <option>11:00 AM</option>
                  <option>12:00 PM</option>
                  <option>1:00 PM</option>
                  <option>2:00 PM</option>
                  <option>3:00 PM</option>
                  <option>4:00 PM</option>
                  <option>5:00 PM</option>
                  <option>6:00 PM</option>
                  <option>7:00 PM</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full md:w-auto px-8 py-5 text-sm font-bold bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl gap-2 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
            >
              {t("Reserve Now", "Reserva Ya")}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
