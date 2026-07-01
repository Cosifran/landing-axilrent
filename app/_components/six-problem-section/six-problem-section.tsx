export const SixProblemSection = () => {
  return (
    <section className="py-24 bg-surface" id="problemas-criticos">
      <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-gutter">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg md:text-headline-xl text-on-surface font-bold">
            Seis Problemas Críticos que Tiene el Mercado de Alquileres de Propiedades
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-surface-container-lowest p-6 rounded-lg shadow-sm border border-surface-container-low flex flex-col gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">payments</span>
            </div>
            <h3 className="font-bold text-lg text-on-surface">Inquilinos que huyen con deudas</h3>
            <p className="italic text-on-surface-variant text-sm">
              &quot;Después de irse, recuperar meses de renta impagada es casi imposible&quot;
            </p>
            <div className="mt-2">
              <span className="font-label-caps text-primary text-xs uppercase font-bold block mb-2">
                Solución Axil:
              </span>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-secondary text-[18px]">
                    check_circle
                  </span>
                  Sistema de cobro automático con múltiples métodos de pago.
                </li>
                <li className="flex items-start gap-2 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-secondary text-[18px]">
                    check_circle
                  </span>
                  Alertas tempranas de morosidad.
                </li>
                <li className="flex items-start gap-2 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-secondary text-[18px]">
                    check_circle
                  </span>
                  Reporte y análisis recomendado por la plataforma.
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-surface-container-lowest p-6 rounded-lg shadow-sm border border-surface-container-low flex flex-col gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">credit_score</span>
            </div>
            <h3 className="font-bold text-lg text-on-surface">
              Verificar crédito es caro y complejo
            </h3>
            <p className="italic text-on-surface-variant text-sm">
              &quot;Gastas tiempo y dinero en buró de crédito... y aun así arriesgas&quot;
            </p>
            <div className="mt-2">
              <span className="font-label-caps text-primary text-xs uppercase font-bold block mb-2">
                Solución Axil:
              </span>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-secondary text-[18px]">
                    check_circle
                  </span>
                  Reporte de Buró de crédito a la renta (BCR) con costo adicional.
                </li>
                <li className="flex items-start gap-2 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-secondary text-[18px]">
                    check_circle
                  </span>
                  Análisis de microdatos que afectan el historial del inquilino.
                </li>
                <li className="flex items-start gap-2 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-secondary text-[18px]">
                    check_circle
                  </span>
                  Puntuación de riesgo personalizada en el BCR.
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-surface-container-lowest p-6 rounded-lg shadow-sm border border-surface-container-low flex flex-col gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">account_balance_wallet</span>
            </div>
            <h3 className="font-bold text-lg text-on-surface">
              Depósitos consumidos o daños sin cubrir
            </h3>
            <p className="italic text-on-surface-variant text-sm">
              &quot;Inquilinos que usan los depósitos como &apos;últimos meses gratis&apos; o dejan
              propiedades destruidas&quot;
            </p>
            <div className="mt-2">
              <span className="font-label-caps text-primary text-xs uppercase font-bold block mb-2">
                Solución Axil:
              </span>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-secondary text-[18px]">
                    check_circle
                  </span>
                  Reporte de Buró de Daño a la Propiedad (BDP).
                </li>
                <li className="flex items-start gap-2 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-secondary text-[18px]">
                    check_circle
                  </span>
                  Software digital de inventario y checklist con fotos/firma.
                </li>
                <li className="flex items-start gap-2 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-secondary text-[18px]">
                    check_circle
                  </span>
                  Calificación del BDP.
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-surface-container-lowest p-6 rounded-lg shadow-sm border border-surface-container-low flex flex-col gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">home_repair_service</span>
            </div>
            <h3 className="font-bold text-lg text-on-surface">
              Inquilinos que destruyen tu propiedad
            </h3>
            <p className="italic text-on-surface-variant text-sm">
              &quot;No hay forma de predecir quién entregará el inmueble en ruinas&quot;
            </p>
            <div className="mt-2">
              <span className="font-label-caps text-primary text-xs uppercase font-bold block mb-2">
                Solución Axil:
              </span>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-secondary text-[18px]">
                    check_circle
                  </span>
                  Sistema de reputación de inquilinos (calificaciones).
                </li>
                <li className="flex items-start gap-2 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-secondary text-[18px]">
                    check_circle
                  </span>
                  Alertas de comportamiento de daño.
                </li>
                <li className="flex items-start gap-2 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-secondary text-[18px]">
                    check_circle
                  </span>
                  Contratos inteligentes con cláusulas de inspección.
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-surface-container-lowest p-6 rounded-lg shadow-sm border border-surface-container-low flex flex-col gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">credit_card</span>
            </div>
            <h3 className="font-bold text-lg text-on-surface">
              Pagos tardíos por métodos obsoletos
            </h3>
            <p className="italic text-on-surface-variant text-sm">
              &quot;¿Solo aceptas efectivo o transferencia? Estás perdiendo rentabilidad&quot;
            </p>
            <div className="mt-2">
              <span className="font-label-caps text-primary text-xs uppercase font-bold block mb-2">
                Solución Axil:
              </span>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-secondary text-[18px]">
                    check_circle
                  </span>
                  Cobro por tarjeta de crédito o débito.
                </li>
                <li className="flex items-start gap-2 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-secondary text-[18px]">
                    check_circle
                  </span>
                  Pagos recurrentes con recordatorios automáticos.
                </li>
                <li className="flex items-start gap-2 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-secondary text-[18px]">
                    check_circle
                  </span>
                  Recibo digital o cobro automático para evitar atrasos.
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-surface-container-lowest p-6 rounded-lg shadow-sm border border-surface-container-low flex flex-col gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">gavel</span>
            </div>
            <h3 className="font-bold text-lg text-on-surface">Gestión débil de morosidad</h3>
            <p className="italic text-on-surface-variant text-sm">
              &quot;La falta de penalizaciones enseña a los inquilinos que no hay
              consecuencias&quot;
            </p>
            <div className="mt-2">
              <span className="font-label-caps text-primary text-xs uppercase font-bold block mb-2">
                Solución Axil:
              </span>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-secondary text-[18px]">
                    check_circle
                  </span>
                  Penalizaciones automáticas por mora configuradas.
                </li>
                <li className="flex items-start gap-2 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-secondary text-[18px]">
                    check_circle
                  </span>
                  Notificaciones legales prediseñadas.
                </li>
                <li className="flex items-start gap-2 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-secondary text-[18px]">
                    check_circle
                  </span>
                  Sistema de escalamiento progresivo vía IA.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
