"use client"

import { useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/language-context"

const vehicles = [
  // SEDANES
  {
    id: 1,
    name: "Chevrolet Aveo Sedan",
    category: "sedan",
    transmission: "Automático / Manual",
    passengers: 5,
    doors: 4,
    ac: true,
    description: {
      en: "Compact sedan, perfect for city driving and short trips around Playa del Carmen. Easy to park and very reliable.",
      es: "Sedán compacto, perfecto para manejar en la ciudad y viajes cortos por Playa del Carmen. Fácil de estacionar y muy confiable.",
    },
    images: ["/fleet/aveo-sedan-new.png"],
    price: 45,
  },
  {
    id: 2,
    name: "Kia K3",
    category: "sedan",
    transmission: "Automático",
    passengers: 5,
    doors: 4,
    ac: true,
    description: {
      en: "Modern sedan with sleek design and smooth automatic transmission. Comfortable interior with excellent air conditioning for the tropical heat.",
      es: "Sedán moderno con diseño elegante y transmisión automática suave. Interior cómodo con excelente aire acondicionado para el calor tropical.",
    },
    images: ["/fleet/kia-k3-new.webp"],
    price: 55,
  },
  {
    id: 4,
    name: "Kia Rio",
    category: "sedan",
    transmission: "Automático / Manual",
    passengers: 5,
    doors: 4,
    ac: true,
    description: {
      en: "Reliable and versatile sedan available in automatic or manual. Comfortable for exploring the Riviera Maya coastline.",
      es: "Sedán confiable y versátil disponible en automático o manual. Cómodo para explorar la costa de la Riviera Maya.",
    },
    images: ["/fleet/kia-rio-clean3.jpg"],
    price: 50,
  },
  {
    id: 5,
    name: "Nissan Versa",
    category: "sedan",
    transmission: "Automático",
    passengers: 5,
    doors: 4,
    ac: true,
    description: {
      en: "Spacious sedan with one of the largest trunks in its class. Ideal for families with luggage arriving from the airport.",
      es: "Sedán espacioso con una de las cajuelas más grandes de su clase. Ideal para familias con equipaje que llegan del aeropuerto.",
    },
    images: ["/fleet/nissan-versa-new.png"],
    price: 50,
  },
  {
    id: 6,
    name: "Nissan Sentra",
    category: "sedan",
    transmission: "Automático",
    passengers: 5,
    doors: 4,
    ac: true,
    description: {
      en: "Premium mid-size sedan with refined ride quality. Comfortable for long drives to Tulum, Merida, or Chichen Itza.",
      es: "Sedán premium de tamaño medio con manejo refinado. Cómodo para viajes largos a Tulum, Mérida o Chichén Itzá.",
    },
    images: ["/fleet/nissan-sentra-clean.jpg"],
    price: 55,
  },
  {
    id: 7,
    name: "Volkswagen Virtus",
    category: "sedan",
    transmission: "Automático",
    passengers: 5,
    doors: 4,
    ac: true,
    description: {
      en: "German-engineered sedan with solid build quality and smooth handling. Enjoy a comfortable, European-style driving experience.",
      es: "Sedán de ingeniería alemana con excelente calidad de construcción y manejo suave. Disfruta una experiencia de conducción estilo europeo.",
    },
    images: ["/fleet/volkswagen-virtus-clean.jpg"],
    price: 55,
  },
  // COMPACTOS
  {
    id: 8,
    name: "Chevrolet Aveo Hatchback",
    category: "compacto",
    transmission: "Automático",
    passengers: 5,
    doors: 4,
    ac: true,
    description: {
      en: "Agile hatchback perfect for navigating Playa del Carmen streets. Compact size with surprising interior space and easy parking.",
      es: "Hatchback ágil perfecto para las calles de Playa del Carmen. Tamaño compacto con sorprendente espacio interior y fácil estacionamiento.",
    },
    images: ["/fleet/chevrolet-aveo-hatchback-new2.jpg"],
    price: 40,
  },
  {
    id: 9,
    name: "Kia Forte",
    category: "sedan",
    transmission: "Automático",
    passengers: 5,
    doors: 4,
    ac: true,
    description: {
      en: "Sporty sedan with modern features and responsive handling. A fun drive with plenty of cargo space for beach gear.",
      es: "Sedán deportivo con características modernas y manejo responsivo. Divertido de manejar con amplio espacio para equipo de playa.",
    },
    images: ["/fleet/kia-forte-clean.jpg"],
    price: 55,
  },
  // SUVs & VANS
  {
    id: 10,
    name: "Kia Sorento",
    category: "suv",
    transmission: "Automático",
    passengers: 7,
    doors: 4,
    ac: true,
    description: {
      en: "Full-size 7-seat SUV with powerful performance. Perfect for large families or groups exploring cenotes, ruins, and beaches.",
      es: "SUV de 7 asientos con rendimiento potente. Perfecto para familias grandes o grupos explorando cenotes, ruinas y playas.",
    },
    images: ["/fleet/kia-sorento-clean.jpg"],
    price: 85,
  },
  {
    id: 11,
    name: "Suzuki Ertiga",
    category: "suv",
    transmission: "Automático",
    passengers: 7,
    doors: 4,
    ac: true,
    description: {
      en: "Versatile 7-seat MPV combining comfort and space. Great for family road trips through the Yucatan Peninsula.",
      es: "MPV versátil de 7 asientos que combina comodidad y espacio. Ideal para viajes familiares por la Península de Yucatán.",
    },
    images: ["/fleet/suzuki-ertiga-clean.jpg"],
    price: 65,
  },
  {
    id: 12,
    name: "Toyota Avanza",
    category: "suv",
    transmission: "Automático",
    passengers: 7,
    doors: 4,
    ac: true,
    description: {
      en: "Toyota reliability in a spacious 7-seat package. Room for the whole family plus luggage — ideal for airport pickups.",
      es: "Confiabilidad Toyota en un paquete espacioso de 7 asientos. Espacio para toda la familia y equipaje — ideal para recogidas en aeropuerto.",
    },
    images: ["/fleet/avanza-clean3.jpg"],
    price: 65,
  },
  {
    id: 13,
    name: "Toyota Raize",
    category: "suv",
    transmission: "Automático",
    passengers: 5,
    doors: 4,
    ac: true,
    description: {
      en: "Compact SUV with elevated driving position and modern tech. Great visibility and easy handling for exploring the Riviera Maya.",
      es: "SUV compacto con posición de manejo elevada y tecnología moderna. Gran visibilidad y fácil manejo para explorar la Riviera Maya.",
    },
    images: ["/fleet/toyota-raize-clean3.jpg"],
    price: 70,
  },
  {
    id: 14,
    name: "Mitsubishi Xpander Cross",
    category: "suv",
    transmission: "Automático",
    passengers: 7,
    doors: 4,
    ac: true,
    description: {
      en: "Rugged crossover with 7 seats and high ground clearance. Ready for any road — from highways to beach towns.",
      es: "Crossover robusto con 7 asientos y altura al suelo elevada. Listo para cualquier camino — de carreteras a pueblos de playa.",
    },
    images: ["/fleet/mitsubishi-xpander-clean.jpg"],
    price: 75,
  },
  {
    id: 15,
    name: "Toyota RAV4",
    category: "suv",
    transmission: "Automático",
    passengers: 5,
    doors: 4,
    ac: true,
    description: {
      en: "Popular mid-size SUV known worldwide for reliability. Powerful, comfortable, and perfect for adventurous day trips.",
      es: "SUV mediano popular y reconocido mundialmente por su confiabilidad. Potente, cómodo y perfecto para aventuras de día.",
    },
    images: ["/fleet/toyota-rav4-clean.jpg"],
    price: 85,
  },
  {
    id: 16,
    name: "BYD Song Plus",
    category: "suv",
    transmission: "Automático",
    passengers: 5,
    doors: 4,
    ac: true,
    description: {
      en: "Modern hybrid SUV with cutting-edge technology and smooth electric driving. Eco-friendly luxury for your vacation.",
      es: "SUV híbrido moderno con tecnología de punta y manejo eléctrico suave. Lujo ecológico para tus vacaciones.",
    },
    images: ["/fleet/byd-song-plus-new.png"],
    price: 90,
  },
  // MOTOS
  {
    id: 17,
    name: "Honda Scoopy 110",
    category: "scooter",
    transmission: "Automático",
    passengers: 2,
    doors: 0,
    ac: false,
    helmets: 2,
    insuranceIncluded: true,
    description: {
      en: "Easy-to-ride automatic scooter — perfect for getting around Playa del Carmen. 2 helmets and insurance included.",
      es: "Scooter automático fácil de manejar — perfecto para moverte por Playa del Carmen. 2 cascos y seguro incluidos.",
    },
    images: ["/fleet/scoopy-1.png"],
    price: 25,
  },
  {
    id: 18,
    name: "Italika Vitalia 150",
    category: "scooter",
    transmission: "Automático",
    passengers: 2,
    doors: 0,
    ac: false,
    helmets: 2,
    insuranceIncluded: true,
    description: {
      en: "150cc motorcycle perfect for exploring Playa del Carmen and surrounding areas. Comfortable ride with 2 helmets and insurance included.",
      es: "Motocicleta de 150cc perfecta para explorar Playa del Carmen y alrededores. Manejo cómodo con 2 cascos y seguro incluidos.",
    },
    images: ["/fleet/italika-black.jpg"],
    price: 20,
  },
  // TRANSFER
  {
    id: 19,
    name: "Sprinter / Van 12 Pasajeros",
    category: "transfer",
    transmission: "Manual",
    passengers: 12,
    doors: 4,
    ac: true,
    description: {
      en: "Spacious 12-passenger van perfect for group transfers from Cancun Airport to your hotel. Ideal for large families or groups.",
      es: "Van espaciosa de 12 pasajeros perfecta para transfer grupal del Aeropuerto de Cancún a tu hotel. Ideal para familias grandes o grupos.",
    },
    images: ["/fleet/sprinter-white-clean.jpg"],
    price: 150,
  },
]

export function FleetSection() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedVehicle, setSelectedVehicle] = useState<typeof vehicles[0] | null>(null)
  const [galleryIndex, setGalleryIndex] = useState(0)
  const { t } = useLanguage()

  const categories = [
    { id: "all", label: t("All", "Todos") },
    { id: "sedan", label: t("Sedans", "Sedanes") },
    { id: "compacto", label: t("Compact", "Compactos") },
    { id: "suv", label: t("SUVs & Vans", "SUVs & Vans") },
    { id: "scooter", label: "Scooters" },
    { id: "transfer", label: "Transfer" },
  ]

  const filteredVehicles = activeCategory === "all"
    ? vehicles
    : vehicles.filter(v => v.category === activeCategory)

  const openGallery = (vehicle: typeof vehicles[0]) => {
    setSelectedVehicle(vehicle)
    setGalleryIndex(0)
  }

  const closeGallery = () => {
    setSelectedVehicle(null)
    setGalleryIndex(0)
  }

  const nextImage = () => {
    if (selectedVehicle) {
      setGalleryIndex((prev) => (prev + 1) % selectedVehicle.images.length)
    }
  }

  const prevImage = () => {
    if (selectedVehicle) {
      setGalleryIndex((prev) => (prev - 1 + selectedVehicle.images.length) % selectedVehicle.images.length)
    }
  }

  return (
    <section id="fleet" className="py-12 sm:py-16 lg:py-20 bg-secondary/20" aria-label="Our car rental fleet - sedans, SUVs, and motorcycles">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary font-semibold text-xs uppercase tracking-widest">
            {t("Car Rental & Private Transfers", "Renta de Autos y Transfer Privados")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            {t("Our Fleet", "Nuestra Flota")}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t(
              "Manual and automatic cars, spacious SUVs, scooters, and private airport transfers.",
              "Autos manual y automático, SUVs espaciosos, scooters y transfer privado al aeropuerto."
            )}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex overflow-x-auto sm:flex-wrap sm:justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 pb-2 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-medium transition-all text-xs sm:text-sm whitespace-nowrap flex-shrink-0",
                activeCategory === category.id
                  ? "bg-primary text-white shadow-lg shadow-primary/25"
                  : "bg-white border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Vehicle Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              onClick={() => openGallery(vehicle)}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3] bg-white">
                <img
                  src={vehicle.images[0]}
                  alt={`${vehicle.name} for rent in Playa del Carmen - ${vehicle.transmission} ${vehicle.passengers} passengers`}
                  className="absolute inset-0 w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={600}
                  height={400}
                />
                {/* Category badge */}
                <div className="absolute top-3 left-3 bg-primary/90 text-white text-xs font-semibold px-3 py-1 rounded-full capitalize">
                  {vehicle.category === "compacto" ? t("Compact", "Compacto") : vehicle.category === "suv" ? "SUV" : vehicle.category === "scooter" ? "Scooter" : vehicle.category === "transfer" ? "Transfer" : t("Sedan", "Sedán")}
                </div>
                {/* Photo count badge */}
                {vehicle.images.length > 1 && (
                  <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-full">
                    +{vehicle.images.length - 1} {t("photos", "fotos")}
                  </div>
                )}
                {/* Overlay bar with name and key specs */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent pt-16 pb-3 px-4">
                  <h3 className="text-white font-bold text-lg">{vehicle.name}</h3>
                  <p className="text-white/80 text-xs">
                    {vehicle.transmission.includes("Manual") ? t("Automatic / Manual", "Automático / Manual") : t("Automatic", "Automático")}
                    {" · "}
                    {vehicle.passengers} {t("passengers", "pasajeros")}
                  </p>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-foreground mb-2">{vehicle.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {t(vehicle.description.en, vehicle.description.es)}
                </p>
                <div className="border-t border-border pt-3 mb-4">
                  <div className="grid grid-cols-2 gap-2.5 text-sm text-muted-foreground">
                    {/* 1. Category */}
                    <div className="flex items-center gap-1.5">
                      <svg className="w-4 h-4 text-primary/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M7 7h10v10H7z" /><path strokeLinecap="round" strokeLinejoin="round" d="M3 3h4v4H3zM17 3h4v4h-4zM3 17h4v4H3zM17 17h4v4h-4z" /></svg>
                      <span>{vehicle.category === "compacto" ? t("Compact", "Compacto") : vehicle.category === "suv" ? "SUV" : vehicle.category === "scooter" ? "Scooter" : vehicle.category === "transfer" ? "Transfer" : t("Sedan", "Sedán")}</span>
                    </div>
                    {/* 2. Seats */}
                    <div className="flex items-center gap-1.5">
                      <svg className="w-4 h-4 text-primary/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                      <span>{vehicle.passengers} {t("Seats", "Plazas")}</span>
                    </div>
                    {/* 3. Doors */}
                    {vehicle.doors > 0 && (
                      <div className="flex items-center gap-1.5">
                        <svg className="w-4 h-4 text-primary/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 3v18" /></svg>
                        <span>{vehicle.doors} {t("Doors", "Puertas")}</span>
                      </div>
                    )}
                    {/* 4. Transmission */}
                    <div className="flex items-center gap-1.5">
                      <svg className="w-4 h-4 text-primary/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      <span>{vehicle.transmission.includes("Manual") ? t("Auto / Manual", "Auto / Manual") : t("Automatic", "Automático")}</span>
                    </div>
                    {/* 5. A/C or Helmets */}
                    {vehicle.ac && (
                      <div className="flex items-center gap-1.5">
                        <svg className="w-4 h-4 text-primary/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" /></svg>
                        <span>{t("A/C", "A/C")}</span>
                      </div>
                    )}
                    {(vehicle as any).helmets && (
                      <div className="flex items-center gap-1.5">
                        <svg className="w-4 h-4 text-primary/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                        <span>{t("2 Helmets", "2 Cascos")}</span>
                      </div>
                    )}
                    {(vehicle as any).insuranceIncluded && (
                      <div className="flex items-center gap-1.5">
                        <svg className="w-4 h-4 text-primary/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        <span>{t("Insurance", "Seguro")}</span>
                      </div>
                    )}
                  </div>
                </div>
                {/* Included benefits */}
                {vehicle.category !== "scooter" && (
                  <div className="border-t border-border pt-3 mb-4">
                    <div className="grid grid-cols-1 gap-1.5 text-sm">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        <span className="text-muted-foreground">{t("Insurance with 10% deductible", "Seguro con 10% de deducible")}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        <span className="text-muted-foreground">{t("Third-party damage coverage", "Cobertura de daños a terceros")}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        <span className="text-muted-foreground">{t("2 authorized drivers", "2 conductores autorizados")}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        <span className="text-muted-foreground">{t("Complimentary baby seat", "Silla de bebé de cortesía")}</span>
                      </div>
                    </div>
                  </div>
                )}

                <div className="bg-primary/10 rounded-xl py-3 px-4 text-center">
                  <span className="text-sm text-muted-foreground">{t("Starting at", "Desde")}</span>
                  <div className="text-2xl font-bold text-primary">${(vehicle as any).price} USD <span className="text-sm font-normal text-muted-foreground">/ {t("day", "día")}</span></div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Gallery Modal */}
      {selectedVehicle && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4" onClick={closeGallery}>
          <div className="relative max-w-3xl w-full max-h-[95vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            {/* Close button */}
            <button
              onClick={closeGallery}
              className="absolute top-0 right-0 sm:-top-12 sm:right-0 z-10 text-white/70 hover:text-white transition-colors bg-black/50 sm:bg-transparent rounded-full p-2"
            >
              <X className="h-6 w-6 sm:h-8 sm:w-8" />
            </button>

            {/* Vehicle name */}
            <h3 className="text-white text-xl sm:text-2xl font-bold mb-3 sm:mb-4 pr-10 sm:pr-0">{selectedVehicle.name}</h3>

            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden bg-black">
              <img
                src={selectedVehicle.images[galleryIndex]}
                alt={`${selectedVehicle.name} - rental car photo ${galleryIndex + 1} of ${selectedVehicle.images.length}`}
                className="w-full max-h-[70vh] object-contain mx-auto"
                loading="eager"
              />

              {/* Nav arrows */}
              {selectedVehicle.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white flex items-center justify-center transition-colors"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white flex items-center justify-center transition-colors"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </>
              )}

              {/* Counter */}
              <div className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full">
                {galleryIndex + 1} / {selectedVehicle.images.length}
              </div>
            </div>

            {/* Thumbnails */}
            {selectedVehicle.images.length > 1 && (
              <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                {selectedVehicle.images.map((img, index) => (
                  <button
                    key={img}
                    onClick={() => setGalleryIndex(index)}
                    className={cn(
                      "relative flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all",
                      galleryIndex === index ? "border-white" : "border-transparent opacity-50 hover:opacity-80"
                    )}
                  >
                    <img src={img} alt={`${selectedVehicle.name} - thumbnail ${index + 1}`} className="absolute inset-[-8%] w-[116%] h-[116%] object-cover" loading="lazy" />
                  </button>
                ))}
              </div>
            )}

            {/* Info + CTA */}
            <div className="flex items-center justify-between mt-4">
              <div className="text-white/70 text-sm">
                {selectedVehicle.transmission} • {selectedVehicle.passengers} {t("passengers", "pasajeros")}
              </div>
              <Button
                className="bg-[#25D366] hover:bg-[#1da851] text-white gap-2 rounded-full px-6"
                asChild
              >
                <a
                  href={`https://wa.me/529902031942?text=${encodeURIComponent(t(`Hi, I'm interested in renting the ${selectedVehicle.name}`, `Hola, me interesa rentar el ${selectedVehicle.name}`))}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  {t("Reserve via WhatsApp", "Reservar por WhatsApp")}
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
