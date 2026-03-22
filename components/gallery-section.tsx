"use client"

import { useLanguage } from "@/lib/language-context"

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
    alt: "Playa del Carmen beach",
    label: "Playa del Carmen",
  },
  {
    src: "https://images.unsplash.com/photo-1552074284-5e88ef1aef18?w=600&h=400&fit=crop",
    alt: "Coastal road Riviera Maya",
    label: "Riviera Maya",
  },
  {
    src: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=600&h=400&fit=crop",
    alt: "Cenote crystal waters",
    label: "Cenotes",
  },
  {
    src: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=600&h=400&fit=crop",
    alt: "Caribbean turquoise sea",
    label: "Mar Caribe",
  },
  {
    src: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&h=400&fit=crop",
    alt: "Adventure road trip",
    label: "Aventura",
  },
  {
    src: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=600&h=400&fit=crop",
    alt: "Tulum ruins by the sea",
    label: "Tulum",
  },
]

export function GallerySection() {
  const { t } = useLanguage()

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-primary font-semibold text-xs uppercase tracking-widest">
            {t("Gallery", "Galería")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4 text-balance">
            {t("Explore the Riviera Maya", "Explora la Riviera Maya")}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t(
              "Beaches, cenotes, and endless roads await you. Rent your car and discover paradise.",
              "Playas, cenotes y caminos infinitos te esperan. Renta tu auto y descubre el paraíso."
            )}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full object-cover group-hover:scale-105 transition-transform duration-700 ${
                  index === 0 ? "h-64 md:h-full" : "h-48 md:h-64"
                }`}
                loading="lazy"
                width={index === 0 ? 800 : 600}
                height={index === 0 ? 600 : 400}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="text-white font-semibold text-sm md:text-base tracking-wide">
                  {image.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
