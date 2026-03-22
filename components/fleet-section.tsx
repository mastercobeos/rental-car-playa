"use client"

import { useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/language-context"

const vehicles = [
  // SEDANES — landscape catalog images (528x352): use "top" to show title text
  // Almost-square images (512x462): use "center"
  // Cropped strips (440x140/221): use "center"
  // Portrait WhatsApp photos (1024x1536): use "center 40%" to show car
  {
    id: 1,
    name: "Chevrolet Aveo Sedan",
    category: "sedan",
    transmission: "Automático / Manual",
    passengers: 5,
    imgPos: "center 40%",
    images: [
      "/WhatsApp Image 2026-03-21 at 16.04.55.jpeg",
      "/WhatsApp Image 2026-03-21 at 16.17.33.jpeg",
    ],
  },
  {
    id: 2,
    name: "Kia K3",
    category: "sedan",
    transmission: "Automático",
    passengers: 5,
    imgPos: "center 40%",
    images: [
      "/WhatsApp Image 2026-03-21 at 16.08.12 (1).jpeg",
      "/WhatsApp Image 2026-03-21 at 16.17.32.jpeg",
    ],
  },
  {
    id: 3,
    name: "Kia Forte Sedan",
    category: "sedan",
    transmission: "Automático",
    passengers: 5,
    imgPos: "top",
    images: ["/sedan_automatico.jpg"],
  },
  {
    id: 4,
    name: "Kia Rio",
    category: "sedan",
    transmission: "Automático / Manual",
    passengers: 5,
    imgPos: "center",
    images: ["/WhatsApp Image 2026-03-21 at 16.08.14 (2).jpeg"],
  },
  {
    id: 5,
    name: "Nissan Versa",
    category: "sedan",
    transmission: "Automático",
    passengers: 5,
    imgPos: "top",
    images: ["/nissan_versa.jpg"],
  },
  {
    id: 6,
    name: "Nissan Sentra",
    category: "sedan",
    transmission: "Automático",
    passengers: 5,
    imgPos: "center 60%",
    showLabel: true,
    images: ["/WhatsApp Image 2026-03-21 at 16.08.12 (2).jpeg"],
  },
  {
    id: 7,
    name: "Volkswagen Jetta",
    category: "sedan",
    transmission: "Automático",
    passengers: 5,
    imgPos: "center 40%",
    images: ["/WhatsApp Image 2026-03-21 at 18.43.17.jpeg"],
  },
  // COMPACTOS
  {
    id: 8,
    name: "Chevrolet Aveo Hatchback",
    category: "compacto",
    transmission: "Automático",
    passengers: 5,
    imgPos: "center 40%",
    images: ["/WhatsApp Image 2026-03-21 at 16.08.14 (1).jpeg"],
  },
  {
    id: 9,
    name: "Kia Forte Hatchback",
    category: "compacto",
    transmission: "Automático",
    passengers: 5,
    imgPos: "center 40%",
    images: ["/WhatsApp Image 2026-03-21 at 16.08.14.jpeg"],
  },
  // SUVs & VANS
  {
    id: 10,
    name: "Kia Sorento",
    category: "suv",
    transmission: "Automático",
    passengers: 7,
    imgPos: "center 40%",
    images: ["/WhatsApp Image 2026-03-21 at 16.08.12 (3).jpeg"],
  },
  {
    id: 11,
    name: "Suzuki Ertiga",
    category: "suv",
    transmission: "Automático",
    passengers: 7,
    imgPos: "center",
    images: ["/WhatsApp Image 2026-03-21 at 16.08.12.jpeg"],
  },
  {
    id: 12,
    name: "Toyota Avanza",
    category: "suv",
    transmission: "Automático",
    passengers: 7,
    imgPos: "center 40%",
    images: ["/WhatsApp Image 2026-03-21 at 16.08.12 (4).jpeg"],
  },
  {
    id: 13,
    name: "Toyota Raize",
    category: "suv",
    transmission: "Automático",
    passengers: 5,
    imgPos: "top",
    images: ["/toyota_raize.jpg"],
  },
  {
    id: 14,
    name: "Mitsubishi Xpander Cross",
    category: "suv",
    transmission: "Automático",
    passengers: 7,
    imgPos: "center 40%",
    images: ["/WhatsApp Image 2026-03-21 at 15.44.45.jpeg"],
  },
  {
    id: 15,
    name: "Toyota RAV4",
    category: "suv",
    transmission: "Automático",
    passengers: 5,
    imgPos: "center 40%",
    images: ["/WhatsApp Image 2026-03-21 at 15.46.52.jpeg"],
  },
  {
    id: 16,
    name: "BYD Song Plus",
    category: "suv",
    transmission: "Automático",
    passengers: 5,
    imgPos: "center 40%",
    images: ["/WhatsApp Image 2026-03-21 at 15.50.06.jpeg"],
  },
  // MOTOS
  {
    id: 17,
    name: "Honda Scoopy 110",
    category: "moto",
    transmission: "Automático",
    passengers: 2,
    imgPos: "center 40%",
    images: ["/WhatsApp Image 2026-03-21 at 16.04.26.jpeg"],
  },
  {
    id: 18,
    name: "Moto Negra 110",
    category: "moto",
    transmission: "Automático",
    passengers: 2,
    imgPos: "center 60%",
    images: ["/WhatsApp Image 2026-03-21 at 16.04.26 (1).jpeg"],
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
    { id: "moto", label: t("Motorcycles", "Motos") },
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
    <section id="fleet" className="py-20 bg-secondary/20" aria-label="Our car rental fleet - sedans, SUVs, and motorcycles">
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
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-6 py-2.5 rounded-full font-medium transition-all text-sm",
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
              <div className="relative overflow-hidden aspect-[3/2]">
                <img
                  src={vehicle.images[0]}
                  alt={`${vehicle.name} for rent in Playa del Carmen - ${vehicle.transmission} ${vehicle.passengers} passengers`}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  style={{ objectPosition: vehicle.imgPos }}
                  loading="lazy"
                  width={600}
                  height={400}
                />
                {/* Text overlay for images without built-in text */}
                {(vehicle as any).showLabel && (
                  <div className="absolute inset-0 flex flex-col justify-start items-start p-5 pt-4">
                    <div className="bg-black/30 backdrop-blur-[2px] rounded-xl px-4 py-2">
                      <h4 className="text-white font-bold text-xl drop-shadow-lg">{vehicle.name}</h4>
                      <p className="text-white/90 text-xs drop-shadow-md">
                        {vehicle.transmission} · {vehicle.passengers} {t("passengers", "pasajeros")}
                      </p>
                    </div>
                  </div>
                )}
                {/* Photo count badge */}
                {vehicle.images.length > 1 && (
                  <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-full">
                    +{vehicle.images.length - 1} {t("photos", "fotos")}
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-foreground mb-2">{vehicle.name}</h3>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span>{vehicle.transmission}</span>
                  <span>•</span>
                  <span>{vehicle.passengers} {t("passengers", "pasajeros")}</span>
                </div>
                <Button
                  size="sm"
                  className="w-full bg-[#25D366] hover:bg-[#1da851] text-white gap-2 rounded-xl"
                  asChild
                  onClick={(e) => e.stopPropagation()}
                >
                  <a
                    href={`https://wa.me/529902031942?text=${encodeURIComponent(t(`Hi, I'm interested in renting the ${vehicle.name}`, `Hola, me interesa rentar el ${vehicle.name}`))}`}
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
          ))}
        </div>

      </div>

      {/* Gallery Modal */}
      {selectedVehicle && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4" onClick={closeGallery}>
          <div className="relative max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            {/* Close button */}
            <button
              onClick={closeGallery}
              className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors"
            >
              <X className="h-8 w-8" />
            </button>

            {/* Vehicle name */}
            <h3 className="text-white text-2xl font-bold mb-4">{selectedVehicle.name}</h3>

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
