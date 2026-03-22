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
  const [vehicleType, setVehicleType] = useState("")
  const [pickupDate, setPickupDate] = useState("")
  const [returnDate, setReturnDate] = useState("")
  const [pickupTime, setPickupTime] = useState("8:00 AM")
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneCode, setPhoneCode] = useState("+1")
  const [phone, setPhone] = useState("")
  const [currentImage, setCurrentImage] = useState(0)
  const { t, language } = useLanguage()

  const locationLabels: Record<string, string> = {
    "playa-del-carmen": "Playa del Carmen",
    "playacar": "Playacar",
    "cancun-airport": language === "en" ? "Cancun Airport (CUN)" : "Aeropuerto de Cancún (CUN)",
    "tulum": "Tulum",
  }

  const vehicleLabels: Record<string, string> = {}

  const handleReserve = () => {
    const locationName = locationLabels[pickupLocation] || (language === "en" ? "Not selected" : "No seleccionado")
    const vehicleName = vehicleType || (language === "en" ? "Any" : "Cualquiera")
    const pickup = pickupDate || (language === "en" ? "Not selected" : "No seleccionada")
    const returnD = returnDate || (language === "en" ? "Not selected" : "No seleccionada")
    const name = fullName || (language === "en" ? "Not provided" : "No proporcionado")
    const contactPhone = phone ? `${phoneCode} ${phone}` : (language === "en" ? "Not provided" : "No proporcionado")
    const contactEmail = email || (language === "en" ? "Not provided" : "No proporcionado")

    const message = language === "en"
      ? `Hello! I'd like to reserve a car 🚗\n\n👤 *Name:* ${name}\n📧 *Email:* ${contactEmail}\n📱 *Phone:* ${contactPhone}\n\n📍 *Pickup Location:* ${locationName}\n🚘 *Vehicle Type:* ${vehicleName}\n📅 *Pickup Date:* ${pickup}\n📅 *Return Date:* ${returnD}\n🕐 *Pickup Time:* ${pickupTime}\n\nCould you confirm availability? Thank you!`
      : `¡Hola! Me gustaría reservar un auto 🚗\n\n👤 *Nombre:* ${name}\n📧 *Correo:* ${contactEmail}\n📱 *Teléfono:* ${contactPhone}\n\n📍 *Lugar de Recogida:* ${locationName}\n🚘 *Tipo de Vehículo:* ${vehicleName}\n📅 *Fecha de Recogida:* ${pickup}\n📅 *Fecha de Devolución:* ${returnD}\n🕐 *Hora de Recogida:* ${pickupTime}\n\n¿Podrían confirmar disponibilidad? ¡Gracias!`

    const whatsappNumber = "529902031942"
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev: number) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="booking" className="pt-24 md:pt-28 pb-4 bg-gradient-to-br from-background via-background to-primary/5 flex flex-col justify-center gap-6 relative overflow-hidden h-screen">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-8 items-center">
          {/* Left - Text Content */}
          <div className="py-2">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/25 rounded-full px-4 py-1.5 mb-2 shadow-sm">
              <MapPin className="w-3.5 h-3.5 text-primary" />
              <span className="text-[10px] font-bold tracking-wider uppercase text-primary">
                {t("Playa del Carmen, Mexico", "Playa del Carmen, México")}
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl md:text-4xl xl:text-5xl font-extrabold leading-[1.05] mb-2 tracking-tight text-foreground">
              {t("Your adventure", "Tu aventura")}{" "}
              <br className="hidden md:block" />
              {t("starts ", "empieza ")}{" "}
              <span className="relative inline-block">
                <span className="text-gradient-tropical">{t("on wheels", "sobre ruedas")}</span>
                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none">
                  <path d="M1 5.5C47 2 153 2 199 5.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-primary/30" />
                </svg>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm md:text-base text-muted-foreground mb-3 max-w-lg leading-relaxed">
              {t(
                "Rent your car in minutes. We deliver to your hotel or at Cancun Airport. Insurance included, 2 drivers, baby seat included.",
                "Renta tu auto en minutos. Entregamos en tu hotel o Aeropuerto de Cancún. Seguro, 2 conductores, silla de bebé incluidos."
              )}
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-2 mb-3">
              <div className="flex items-center gap-1.5 bg-white border border-primary/20 rounded-full px-3 py-1.5 shadow-sm">
                <Shield className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                <span className="text-xs text-foreground font-medium">{t("Insurance Included", "Seguro Incluido")}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white border border-primary/20 rounded-full px-3 py-1.5 shadow-sm">
                <Car className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                <span className="text-xs text-foreground font-medium">{t("2 Drivers Included", "2 Conductores")}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white border border-primary/20 rounded-full px-3 py-1.5 shadow-sm">
                <BadgeCheck className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                <span className="text-xs text-foreground font-medium">{t("Cash & Card", "Efectivo y Tarjeta")}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white border border-green-500/20 rounded-full px-3 py-1.5 shadow-sm">
                <svg className="w-3.5 h-3.5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                <span className="text-xs text-foreground font-medium">{t("Reserve now, pay on arrival. No upfront charges.", "Reserva ahora y paga al entregar. Sin cobros anticipados.")}</span>
              </div>
            </div>

            {/* Language support */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] text-muted-foreground font-medium">{t("We speak your language", "Atendemos en tu idioma")}:</span>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>{"🇪🇸"} Español</span>
                <span>{"🇺🇸"} English</span>
                <span>{"🇫🇷"} Français</span>
              </div>
            </div>

            {/* Stats row */}
            <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-xl border border-border/50 shadow-sm p-2">
              <div className="flex-1 text-center">
                <p className="text-xl font-extrabold text-primary">500+</p>
                <p className="text-[10px] text-muted-foreground font-medium">{t("Happy Clients", "Clientes Felices")}</p>
              </div>
              <div className="w-px h-8 bg-border" />
              <div className="flex-1 text-center">
                <div className="flex items-center justify-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-xl font-extrabold text-primary">4.9</span>
                </div>
                <p className="text-[10px] text-muted-foreground font-medium">{t("Rating", "Calificación")}</p>
              </div>
              <div className="w-px h-8 bg-border" />
              <div className="flex-1 text-center">
                <p className="text-xl font-extrabold text-primary">24/7</p>
                <p className="text-[10px] text-muted-foreground font-medium">{t("Support", "Soporte")}</p>
              </div>
            </div>

            {/* Social media */}
            <div className="flex items-center gap-3 mt-3">
              <span className="text-xs text-muted-foreground font-medium">{t("Follow us", "Síguenos")}</span>
              <a href="https://www.facebook.com/share/1Ax2LRWSQ2/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-all" aria-label="Facebook">
                <svg className="h-4 w-4 text-muted-foreground" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://www.instagram.com/carrentalplaya?utm_source=qr&igsh=eXloczZ3cXF4NTlq" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-all" aria-label="Instagram">
                <svg className="h-4 w-4 text-muted-foreground" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://vt.tiktok.com/ZSusGcGb7/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-all" aria-label="TikTok">
                <svg className="h-4 w-4 text-muted-foreground" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.75a8.18 8.18 0 004.76 1.52V6.84a4.84 4.84 0 01-1-.15z"/></svg>
              </a>
              <a href="https://wa.me/529902031942" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-all" aria-label="WhatsApp">
                <svg className="h-4 w-4 text-muted-foreground" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
            </div>
          </div>

          {/* Right - Photo Slider */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4] max-h-[420px] mx-auto lg:mx-0 w-full max-w-[380px] lg:max-w-none bg-gradient-to-b from-sky-100/50 to-green-50/50">
            {heroImages.map((image, index) => (
              <img
                key={image.src}
                src={image.src}
                alt={image.alt}
                width={600}
                height={800}
                className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out ${
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
      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl border border-primary/30 border-t-[3px] border-t-primary p-3">
          <div className="flex items-center gap-2 mb-2">
            <Car className="w-4 h-4 text-primary" />
            <h3 className="text-xs font-bold text-foreground uppercase tracking-wider">
              {t("Quick Reservation", "Reserva Rápida")}
            </h3>
          </div>
          <form onSubmit={(e) => { e.preventDefault(); handleReserve(); }} className="space-y-2">
            {/* Row 1: Contact info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              <div>
                <label className="block text-[10px] font-medium text-muted-foreground uppercase tracking-wider mb-1 truncate">
                  {t("Full Name", "Nombre")}
                </label>
                <div className="relative">
                  <svg className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-primary/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder={t("Your name", "Tu nombre")}
                    className="w-full pl-11 pr-4 py-2 rounded-xl text-sm border border-border bg-muted/30 text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-medium text-muted-foreground uppercase tracking-wider mb-1 truncate">
                  {t("Email", "Correo")}
                </label>
                <div className="relative">
                  <svg className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-primary/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@example.com"
                    className="w-full pl-11 pr-4 py-2 rounded-xl text-sm border border-border bg-muted/30 text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-medium text-muted-foreground uppercase tracking-wider mb-1 truncate">
                  {t("Phone", "Teléfono")}
                </label>
                <div className="flex gap-2">
                  <div className="relative w-24 flex-shrink-0">
                    <select
                      value={phoneCode}
                      onChange={(e) => setPhoneCode(e.target.value)}
                      className="w-full pl-3 pr-7 py-2 rounded-xl text-sm border border-border bg-muted/30 text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary appearance-none cursor-pointer transition-all"
                    >
                      <option value="+1">+1 US</option>
                      <option value="+52">+52 MX</option>
                      <option value="+44">+44 UK</option>
                      <option value="+33">+33 FR</option>
                      <option value="+49">+49 DE</option>
                      <option value="+34">+34 ES</option>
                      <option value="+39">+39 IT</option>
                      <option value="+55">+55 BR</option>
                      <option value="+57">+57 CO</option>
                      <option value="+54">+54 AR</option>
                    </select>
                    <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-3 w-3 text-muted-foreground pointer-events-none" />
                  </div>
                  <div className="relative flex-1">
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={t("Phone number", "Número")}
                      className="w-full pl-4 pr-4 py-2 rounded-xl text-sm border border-border bg-muted/30 text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2: Reservation details */}
            <div className="flex flex-col md:flex-row items-end gap-2">
              <div className="flex-1 w-full">
                <label className="block text-[10px] font-medium text-muted-foreground uppercase tracking-wider mb-1 truncate">
                  {t("Pickup Location", "Lugar Recogida")}
                </label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-primary/60" />
                  <select
                    value={pickupLocation}
                    onChange={(e) => setPickupLocation(e.target.value)}
                    className="w-full pl-11 pr-10 py-2 rounded-xl text-sm border border-border bg-muted/30 text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary appearance-none cursor-pointer transition-all"
                  >
                    <option value="">{t("Select location", "Selecciona ubicación")}</option>
                    <option value="playa-del-carmen">Playa del Carmen</option>
                    <option value="playacar">Playacar</option>
                    <option value="cancun-airport">{t("Cancun Airport (CUN)", "Aeropuerto de Cancún (CUN)")}</option>
                    <option value="tulum">Tulum</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                </div>
              </div>

              <div className="flex-1 w-full">
                <label className="block text-[10px] font-medium text-muted-foreground uppercase tracking-wider mb-1 truncate">
                  {t("Vehicle Type", "Tipo Vehículo")}
                </label>
                <div className="relative">
                  <Car className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-primary/60" />
                  <select
                    value={vehicleType}
                    onChange={(e) => setVehicleType(e.target.value)}
                    className="w-full pl-11 pr-10 py-2 rounded-xl text-sm border border-border bg-muted/30 text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary appearance-none cursor-pointer transition-all"
                  >
                    <option value="">{t("Any type", "Cualquier tipo")}</option>
                    <optgroup label={t("Sedans", "Sedanes")}>
                      <option value="Chevrolet Aveo Sedan">Chevrolet Aveo Sedan</option>
                      <option value="Kia K3">Kia K3</option>
                      <option value="Kia Rio">Kia Rio</option>
                      <option value="Nissan Versa">Nissan Versa</option>
                      <option value="Nissan Sentra">Nissan Sentra</option>
                      <option value="Volkswagen Virtus">Volkswagen Virtus</option>
                      <option value="Kia Forte">Kia Forte</option>
                    </optgroup>
                    <optgroup label={t("Compact", "Compactos")}>
                      <option value="Chevrolet Aveo Hatchback">Chevrolet Aveo Hatchback</option>
                    </optgroup>
                    <optgroup label="SUVs & Vans">
                      <option value="Kia Sorento">Kia Sorento (7 seats)</option>
                      <option value="Suzuki Ertiga">Suzuki Ertiga (7 seats)</option>
                      <option value="Toyota Avanza">Toyota Avanza (7 seats)</option>
                      <option value="Toyota Raize">Toyota Raize</option>
                      <option value="Mitsubishi Xpander Cross">Mitsubishi Xpander Cross (7 seats)</option>
                      <option value="Toyota RAV4">Toyota RAV4</option>
                      <option value="BYD Song Plus">BYD Song Plus</option>
                    </optgroup>
                    <optgroup label="Scooters">
                      <option value="Honda Scoopy 110">Honda Scoopy 110</option>
                      <option value="Italika Vitalia 150">Italika Vitalia 150</option>
                    </optgroup>
                    <optgroup label="Transfer">
                      <option value="Sprinter / Van 12 Pasajeros">Sprinter / Van 12 Pasajeros</option>
                    </optgroup>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                </div>
              </div>

              <div className="flex-1 w-full">
                <label className="block text-[10px] font-medium text-muted-foreground uppercase tracking-wider mb-1 truncate">
                  {t("Pickup Date", "Fecha Recogida")}
                </label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-primary/60" />
                  <input
                    type="date"
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                    className="w-full pl-11 pr-4 py-2 rounded-xl text-sm border border-border bg-muted/30 text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
              </div>

              <div className="flex-1 w-full">
                <label className="block text-[10px] font-medium text-muted-foreground uppercase tracking-wider mb-1 truncate">
                  {t("Return", "Devolución")}
                </label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-primary/60" />
                  <input
                    type="date"
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                    className="w-full pl-11 pr-4 py-2 rounded-xl text-sm border border-border bg-muted/30 text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
              </div>

              <div className="flex-1 w-full">
                <label className="block text-[10px] font-medium text-muted-foreground uppercase tracking-wider mb-1 truncate">
                  {t("Pickup Time", "Hora Recogida")}
                </label>
                <div className="relative">
                  <Clock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-primary/60" />
                  <select
                    value={pickupTime}
                    onChange={(e) => setPickupTime(e.target.value)}
                    className="w-full pl-11 pr-10 py-2 rounded-xl text-sm border border-border bg-muted/30 text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary appearance-none cursor-pointer transition-all"
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
                className="w-full md:w-auto px-6 py-4 text-sm font-bold bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl gap-2 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
              >
                {t("Reserve Now", "Reserva Ya")}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
