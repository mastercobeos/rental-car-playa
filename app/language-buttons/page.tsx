"use client"

import { useState } from "react"
import { Globe, Languages, ChevronDown, ArrowLeftRight } from "lucide-react"

type Lang = "en" | "es"

function useToggle(): [Lang, () => void] {
  const [lang, setLang] = useState<Lang>("en")
  return [lang, () => setLang((p) => (p === "en" ? "es" : "en"))]
}

/* ─── DISEÑO 1: Pill Toggle (Deslizante) ─── */
function Design1() {
  const [lang, toggle] = useToggle()
  return (
    <button
      onClick={toggle}
      className="relative flex items-center w-[100px] h-10 bg-muted rounded-full p-1 transition-all"
    >
      <span
        className={`absolute w-[46px] h-8 bg-primary rounded-full transition-all duration-300 shadow-md ${
          lang === "es" ? "left-[50px]" : "left-1"
        }`}
      />
      <span
        className={`relative z-10 flex-1 text-center text-sm font-bold transition-colors duration-300 ${
          lang === "en" ? "text-primary-foreground" : "text-muted-foreground"
        }`}
      >
        EN
      </span>
      <span
        className={`relative z-10 flex-1 text-center text-sm font-bold transition-colors duration-300 ${
          lang === "es" ? "text-primary-foreground" : "text-muted-foreground"
        }`}
      >
        ES
      </span>
    </button>
  )
}

/* ─── DISEÑO 2: Bandera Circular con Flip ─── */
function Design2() {
  const [lang, toggle] = useToggle()
  return (
    <button
      onClick={toggle}
      className="group relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary/30 hover:border-primary transition-all duration-300 hover:scale-110 shadow-lg"
      title={lang === "en" ? "Cambiar a Español" : "Switch to English"}
    >
      <div
        className={`absolute inset-0 transition-all duration-500 ${
          lang === "es" ? "rotate-y-180 opacity-0" : "rotate-y-0 opacity-100"
        }`}
      >
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-700 via-white to-red-600 text-xs font-black">
          <span className="bg-white/90 rounded px-1 text-blue-800">EN</span>
        </div>
      </div>
      <div
        className={`absolute inset-0 transition-all duration-500 ${
          lang === "es" ? "rotate-y-0 opacity-100" : "-rotate-y-180 opacity-0"
        }`}
      >
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-red-600 via-yellow-400 to-red-600 text-xs font-black">
          <span className="bg-yellow-400/90 rounded px-1 text-red-800">ES</span>
        </div>
      </div>
    </button>
  )
}

/* ─── DISEÑO 3: Botón Flotante con Globo Giratorio ─── */
function Design3() {
  const [lang, toggle] = useToggle()
  return (
    <button
      onClick={toggle}
      className="group flex items-center gap-2 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-5 py-2.5 rounded-full shadow-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5"
    >
      <Globe className="h-5 w-5 group-hover:animate-spin transition-all" style={{ animationDuration: "2s" }} />
      <span className="font-bold text-sm tracking-wide">{lang === "en" ? "Español" : "English"}</span>
      <ArrowLeftRight className="h-3.5 w-3.5 opacity-60" />
    </button>
  )
}

/* ─── DISEÑO 4: Tarjeta Minimalista con Subrayado ─── */
function Design4() {
  const [lang, toggle] = useToggle()
  return (
    <button
      onClick={toggle}
      className="relative group flex items-center gap-3 px-5 py-2 text-foreground"
    >
      <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
        {lang === "en" ? "EN" : "ES"}
      </span>
      <div className="w-px h-4 bg-border" />
      <span className="text-sm font-semibold group-hover:text-primary transition-colors">
        {lang === "en" ? "Español" : "English"}
      </span>
      <span className="absolute bottom-0 left-5 right-5 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </button>
  )
}

/* ─── DISEÑO 5: Dropdown Estilo Premium ─── */
function Design5() {
  const [lang, setLang] = useState<Lang>("en")
  const [open, setOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 bg-background border-2 border-border hover:border-primary px-4 py-2.5 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md"
      >
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
          <Globe className="h-3.5 w-3.5 text-white" />
        </div>
        <span className="font-semibold text-sm">{lang === "en" ? "English" : "Español"}</span>
        <ChevronDown
          className={`h-4 w-4 text-muted-foreground transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="absolute top-full mt-2 w-full bg-background border border-border rounded-xl shadow-xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          <button
            onClick={() => { setLang("en"); setOpen(false) }}
            className={`w-full px-4 py-3 text-left text-sm font-medium flex items-center gap-3 hover:bg-muted transition-colors ${
              lang === "en" ? "text-primary bg-primary/5" : "text-foreground"
            }`}
          >
            <span className="text-lg">🇺🇸</span> English
            {lang === "en" && <span className="ml-auto text-primary text-xs">✓</span>}
          </button>
          <button
            onClick={() => { setLang("es"); setOpen(false) }}
            className={`w-full px-4 py-3 text-left text-sm font-medium flex items-center gap-3 hover:bg-muted transition-colors ${
              lang === "es" ? "text-primary bg-primary/5" : "text-foreground"
            }`}
          >
            <span className="text-lg">🇲🇽</span> Español
            {lang === "es" && <span className="ml-auto text-primary text-xs">✓</span>}
          </button>
        </div>
      )}
    </div>
  )
}

/* ─── DISEÑO 6: Interruptor Neón/Glow ─── */
function Design6() {
  const [lang, toggle] = useToggle()
  return (
    <button
      onClick={toggle}
      className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm tracking-wide transition-all duration-500 border-2 ${
        lang === "en"
          ? "bg-blue-500/10 border-blue-400 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]"
          : "bg-orange-500/10 border-orange-400 text-orange-400 shadow-[0_0_15px_rgba(251,146,60,0.3)] hover:shadow-[0_0_25px_rgba(251,146,60,0.5)]"
      }`}
    >
      <Languages className="h-5 w-5" />
      <span>{lang === "en" ? "EN" : "ES"}</span>
      <span className="text-xs opacity-60">→</span>
      <span className="opacity-60">{lang === "en" ? "ES" : "EN"}</span>
    </button>
  )
}

/* ─── DISEÑO 7: Cubo 3D Rotativo ─── */
function Design7() {
  const [lang, toggle] = useToggle()
  return (
    <button
      onClick={toggle}
      className="group perspective-[600px] w-16 h-10"
      title={lang === "en" ? "Cambiar a Español" : "Switch to English"}
    >
      <div
        className={`relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] ${
          lang === "es" ? "[transform:rotateX(180deg)]" : ""
        }`}
      >
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-teal-500 to-teal-600 text-white font-bold text-sm rounded-lg shadow-md [backface-visibility:hidden]">
          EN
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-sm rounded-lg shadow-md [backface-visibility:hidden] [transform:rotateX(180deg)]">
          ES
        </div>
      </div>
    </button>
  )
}

/* ─── DISEÑO 8: Segmentado Moderno ─── */
function Design8() {
  const [lang, setLang] = useState<Lang>("en")
  return (
    <div className="flex items-center bg-muted/50 rounded-xl p-1 border border-border shadow-inner">
      <button
        onClick={() => setLang("en")}
        className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
          lang === "en"
            ? "bg-background text-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        <span className="text-base">🇺🇸</span>
        EN
      </button>
      <button
        onClick={() => setLang("es")}
        className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
          lang === "es"
            ? "bg-background text-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        <span className="text-base">🇲🇽</span>
        ES
      </button>
    </div>
  )
}

/* ─── DISEÑO 9: Botón Magnético / Glassmorphism ─── */
function Design9() {
  const [lang, toggle] = useToggle()
  return (
    <button
      onClick={toggle}
      className="relative group flex items-center gap-2.5 px-5 py-2.5 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg hover:bg-white/20 transition-all duration-300"
      style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))" }}
    >
      <div className="relative">
        <Globe className="h-5 w-5 text-primary" />
        <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-pulse" />
      </div>
      <div className="flex flex-col items-start leading-none">
        <span className="text-[10px] text-muted-foreground uppercase tracking-widest">Idioma</span>
        <span className="text-sm font-bold text-foreground">{lang === "en" ? "English" : "Español"}</span>
      </div>
      <ArrowLeftRight className="h-3 w-3 text-muted-foreground group-hover:text-primary transition-colors" />
    </button>
  )
}

/* ─── DISEÑO 10: Texto Animado Tropical ─── */
function Design10() {
  const [lang, toggle] = useToggle()
  return (
    <button
      onClick={toggle}
      className="group relative overflow-hidden px-6 py-3 rounded-full bg-gradient-to-r from-teal-500 via-emerald-500 to-cyan-500 text-white font-bold text-sm shadow-lg hover:shadow-xl hover:shadow-teal-500/25 transition-all duration-500 hover:scale-105"
    >
      <span className="absolute inset-0 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <span className="relative flex items-center gap-2">
        <Globe className="h-4 w-4" />
        <span className="relative">
          <span
            className={`inline-block transition-all duration-500 ${
              lang === "en" ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
            }`}
          >
            ENGLISH
          </span>
          <span
            className={`absolute left-0 top-0 transition-all duration-500 ${
              lang === "es" ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
            }`}
          >
            ESPAÑOL
          </span>
        </span>
        <span className="text-white/60 text-xs">↻</span>
      </span>
    </button>
  )
}

/* ─── PÁGINA DE SHOWCASE ─── */
export default function LanguageButtonsPage() {
  const designs = [
    { name: "Pill Toggle (Deslizante)", desc: "Toggle con pastilla deslizante suave", component: <Design1 /> },
    { name: "Bandera Circular con Flip", desc: "Círculo con banderas y efecto flip", component: <Design2 /> },
    { name: "Globo Giratorio Flotante", desc: "Botón con globo que gira al hover", component: <Design3 /> },
    { name: "Minimalista con Subrayado", desc: "Elegante y limpio con línea animada", component: <Design4 /> },
    { name: "Dropdown Premium", desc: "Desplegable con banderas y selección", component: <Design5 /> },
    { name: "Neón / Glow", desc: "Efecto de brillo neón que cambia de color", component: <Design6 /> },
    { name: "Cubo 3D Rotativo", desc: "Efecto de rotación 3D tipo cubo", component: <Design7 /> },
    { name: "Segmentado Moderno", desc: "Selector segmentado estilo iOS/macOS", component: <Design8 /> },
    { name: "Glassmorphism Magnético", desc: "Cristal difuminado con indicador activo", component: <Design9 /> },
    { name: "Tropical Animado", desc: "Gradiente tropical con texto animado", component: <Design10 /> },
  ]

  return (
    <div className="min-h-screen bg-background py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-3 text-foreground">
          Language Switcher Designs
        </h1>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          10 diseños de botón de cambio de idioma para el navegador
        </p>

        <div className="grid gap-6">
          {designs.map((d, i) => (
            <div
              key={i}
              className="flex items-center justify-between p-6 bg-card rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <span className="bg-primary/10 text-primary text-xs font-bold px-2.5 py-1 rounded-full">
                    #{i + 1}
                  </span>
                  <h2 className="font-bold text-foreground text-lg">{d.name}</h2>
                </div>
                <p className="text-muted-foreground text-sm ml-11">{d.desc}</p>
              </div>
              <div className="flex items-center justify-center min-w-[200px]">
                {d.component}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-muted/50 rounded-2xl border border-border">
          <h3 className="font-bold text-foreground mb-2">¿Cómo usar?</h3>
          <p className="text-muted-foreground text-sm">
            Haz clic en cualquier botón para ver la animación de cambio de idioma.
            Cada diseño funciona de forma independiente. Elige tu favorito y lo integro
            en el header del sitio.
          </p>
        </div>
      </div>
    </div>
  )
}
