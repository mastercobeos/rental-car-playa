"use client"

import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer */}
        <div className="py-10 sm:py-16 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <img
                src="/logo. png.png"
                alt="Playa Car Rental - Car rental service in Playa del Carmen Mexico"
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-white/70 mb-6 text-sm leading-relaxed">
              {t(
                "Car rental and private transfers in the Riviera Maya. Reliable vehicles, transparent pricing, and personalized service.",
                "Renta de autos y transfer privados en la Riviera Maya. Vehículos confiables, precios transparentes y servicio personalizado."
              )}
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/share/1Ax2LRWSQ2/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-all"
                aria-label="Facebook"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/carrentalplaya?utm_source=qr&igsh=eXloczZ3cXF4NTlq"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-all"
                aria-label="Instagram"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://vt.tiktok.com/ZSusGcGb7/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-all"
                aria-label="TikTok"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.75a8.18 8.18 0 004.76 1.52V6.84a4.84 4.84 0 01-1-.15z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-5">{t("Quick Links", "Enlaces Rápidos")}</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#fleet" className="text-white/70 hover:text-white text-sm transition-colors">
                  {t("Our Fleet", "Nuestra Flota")}
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-white/70 hover:text-white text-sm transition-colors">
                  {t("Why Choose Us", "Por Qué Elegirnos")}
                </Link>
              </li>
              <li>
                <Link href="#reviews" className="text-white/70 hover:text-white text-sm transition-colors">
                  {t("Customer Reviews", "Reseñas de Clientes")}
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-white/70 hover:text-white text-sm transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-white/70 hover:text-white text-sm transition-colors">
                  {t("Contact Us", "Contáctanos")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-5">{t("Our Services", "Nuestros Servicios")}</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#fleet" className="text-white/70 hover:text-white text-sm transition-colors">
                  {t("Manual & Automatic Cars", "Autos Manual y Automático")}
                </Link>
              </li>
              <li>
                <Link href="#fleet" className="text-white/70 hover:text-white text-sm transition-colors">
                  {t("Spacious SUVs", "SUVs Espaciosos")}
                </Link>
              </li>
              <li>
                <Link href="#fleet" className="text-white/70 hover:text-white text-sm transition-colors">
                  {t("Motorcycle Rental", "Renta de Motos")}
                </Link>
              </li>
              <li>
                <Link href="#fleet" className="text-white/70 hover:text-white text-sm transition-colors">
                  {t("Airport Pickup", "Recogida en Aeropuerto")}
                </Link>
              </li>
              <li>
                <Link href="#fleet" className="text-white/70 hover:text-white text-sm transition-colors">
                  {t("Hotel Delivery", "Entrega en Hotel")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-5">{t("Contact Info", "Información de Contacto")}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-white/80 flex-shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">
                  Av. 10, Playa del Carmen, Quintana Roo, México
                </span>
              </li>
              <li>
                <a href="tel:+529902031942" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
                  <Phone className="h-5 w-5 text-white/80 flex-shrink-0" />
                  <span className="text-sm">+52 990 203 1942</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@carrentalplaya.com" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
                  <Mail className="h-5 w-5 text-white/80 flex-shrink-0" />
                  <span className="text-sm">info@carrentalplaya.com</span>
                </a>
              </li>
            </ul>

            <div className="mt-6 p-4 bg-white/10 border border-white/15 rounded-xl">
              <p className="text-sm text-white/80">
                <span className="text-white font-semibold">{t("24/7 Support", "Soporte 24/7")}</span><br />
                {t(
                  "Emergency roadside assistance available around the clock.",
                  "Asistencia en carretera de emergencia disponible las 24 horas."
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/15">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm">
              {t(
                "© Playa Car Rental. All rights reserved.",
                "© Playa Car Rental. Todos los derechos reservados."
              )}
            </p>
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <Link href="/privacy-policy" className="text-white/60 hover:text-white transition-colors">
                {t("Privacy Policy", "Política de Privacidad")}
              </Link>
              <Link href="/terms-of-service" className="text-white/60 hover:text-white transition-colors">
                {t("Terms of Service", "Términos de Servicio")}
              </Link>
              <Link href="/terms-of-service" className="text-white/60 hover:text-white transition-colors">
                {t("Rental Agreement", "Contrato de Renta")}
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/share/1Ax2LRWSQ2/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-all"
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
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-all"
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
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-all"
                aria-label="TikTok"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.75a8.18 8.18 0 004.76 1.52V6.84a4.84 4.84 0 01-1-.15z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
