"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const lastScrollY = useRef(0)
  const { language, toggleLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY < 100) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY.current) {
        setIsVisible(false)
        setIsMenuOpen(false)
      } else {
        setIsVisible(true)
      }
      lastScrollY.current = currentScrollY
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: t("Fleet", "Flota"), href: "#fleet" },
    { label: t("Why Us", "Por Qué Nosotros"), href: "#features" },
    { label: t("Reviews", "Reseñas"), href: "#reviews" },
    { label: t("FAQ", "Preguntas"), href: "#faq" },
    { label: t("Contact", "Contacto"), href: "#contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/logo. png.png"
              alt="Playa Car Rental - Rent a car in Playa del Carmen"
              className="h-12 md:h-16 lg:h-24 w-auto"
            />
          </Link>

          {/* Desktop Nav - centered */}
          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white/70 hover:text-white text-sm font-medium transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side: Language + Phone + CTA — tighter gap */}
          <div className="hidden lg:flex items-center gap-1.5">
            {/* Language switcher */}
            <div className="flex items-center rounded-full p-0.5 border border-white/20 bg-white/10">
              <button
                onClick={() => language === "es" && toggleLanguage()}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${
                  language === "en"
                    ? "bg-primary text-white shadow-sm"
                    : "text-white/40 hover:text-white/70"
                }`}
              >
                🇺🇸 EN
              </button>
              <button
                onClick={() => language === "en" && toggleLanguage()}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${
                  language === "es"
                    ? "bg-primary text-white shadow-sm"
                    : "text-white/40 hover:text-white/70"
                }`}
              >
                🇲🇽 ES
              </button>
            </div>

            <a href="tel:+529902031942" className="flex items-center gap-1.5 text-white/60 hover:text-white transition-colors px-2">
              <Phone className="h-4 w-4" />
              <span className="text-sm font-medium hidden xl:inline">+52 990 203 1942</span>
            </a>

            <Button asChild size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6">
              <a href="https://wa.me/529902031942" target="_blank" rel="noopener noreferrer">{t("Book Now", "Reservar")}</a>
            </Button>
          </div>

          {/* Mobile: Language + Menu */}
          <div className="lg:hidden flex items-center gap-2">
            <div className="flex items-center rounded-full p-0.5 border border-white/20 bg-white/10">
              <button
                onClick={() => language === "es" && toggleLanguage()}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold transition-all ${
                  language === "en"
                    ? "bg-primary text-white"
                    : "text-white/40"
                }`}
              >
                🇺🇸 EN
              </button>
              <button
                onClick={() => language === "en" && toggleLanguage()}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold transition-all ${
                  language === "es"
                    ? "bg-primary text-white"
                    : "text-white/40"
                }`}
              >
                🇲🇽 ES
              </button>
            </div>
            <button
              className="p-2 text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white/70 hover:text-white hover:bg-white/10 font-medium transition-colors py-3 px-4 rounded-xl"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4 mt-2 border-t border-white/10">
                <a href="tel:+529902031942" className="flex items-center gap-2 text-white/60 px-4 py-2">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">+52 990 203 1942</span>
                </a>
                <Button asChild className="w-full bg-primary hover:bg-primary/90 rounded-xl">
                  <a href="https://wa.me/529902031942" target="_blank" rel="noopener noreferrer">{t("Book Now", "Reservar")}</a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
