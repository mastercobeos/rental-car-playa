"use client"

import { FileText, CreditCard, ShieldCheck, IdCard } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function RentalInfoSection() {
  const { t } = useLanguage()

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary font-semibold text-xs uppercase tracking-widest">
            {t("Before You Book", "Antes de Reservar")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4 text-balance">
            {t("What You Need to Know", "Lo Que Necesitas Saber")}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Requirements */}
          <div className="p-8 rounded-2xl bg-card border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <IdCard className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground">
                {t("Rental Requirements", "Requisitos de Renta")}
              </h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary text-xs font-bold">1</span>
                </div>
                <div>
                  <p className="font-semibold text-card-foreground text-sm">
                    {t("Valid License or International Permit", "Licencia Vigente o Permiso Internacional")}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {t(
                      "A valid driver's license from your home country or an international driving permit.",
                      "Licencia de conducir vigente de tu país de origen o permiso internacional de conducir."
                    )}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary text-xs font-bold">2</span>
                </div>
                <div>
                  <p className="font-semibold text-card-foreground text-sm">
                    {t("Security Deposit", "Depósito de Garantía")}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {t(
                      "A refundable deposit is required at pickup. Returned when the car is delivered back in good condition.",
                      "Se requiere un depósito reembolsable al recoger. Se devuelve cuando el auto se entrega en buenas condiciones."
                    )}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary text-xs font-bold">3</span>
                </div>
                <div>
                  <p className="font-semibold text-card-foreground text-sm">
                    {t("Passport", "Pasaporte")}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {t(
                      "A valid passport is required for international visitors.",
                      "Se requiere un pasaporte vigente para visitantes internacionales."
                    )}
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Payment Methods */}
          <div className="p-8 rounded-2xl bg-card border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <CreditCard className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground">
                {t("Payment Methods", "Métodos de Pago")}
              </h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-lg">💵</span>
                </div>
                <div>
                  <p className="font-semibold text-card-foreground text-sm">
                    {t("Cash", "Efectivo")}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {t(
                      "US Dollars (USD), Mexican Pesos (MXN), and Euros (EUR) accepted.",
                      "Dólares estadounidenses (USD), Pesos mexicanos (MXN) y Euros (EUR) aceptados."
                    )}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-lg">💳</span>
                </div>
                <div>
                  <p className="font-semibold text-card-foreground text-sm">
                    {t("Debit & Credit Card", "Tarjeta de Débito y Crédito")}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {t(
                      "We accept debit and credit cards for payment. Convenient and secure.",
                      "Aceptamos tarjetas de débito y crédito para el pago. Conveniente y seguro."
                    )}
                  </p>
                </div>
              </div>

              {/* What's Included */}
              <div className="mt-6 pt-5 border-t border-border">
                <p className="font-semibold text-card-foreground text-sm mb-3 flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-primary" />
                  {t("Included With Every Rental", "Incluido en Cada Renta")}
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <svg className="h-4 w-4 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    {t("Insurance with 10% deductible (partial coverage)", "Seguro con 10% de deducible (cobertura parcial)")}
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <svg className="h-4 w-4 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    {t("Third-party liability coverage", "Cobertura de daños a terceros")}
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <svg className="h-4 w-4 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    {t("2 authorized drivers", "2 conductores autorizados")}
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <svg className="h-4 w-4 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    {t("Complimentary baby car seat", "Silla de bebé de cortesía")}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
