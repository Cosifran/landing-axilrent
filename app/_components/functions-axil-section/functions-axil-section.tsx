export const FunctionsAxilSection = () => {
  return (
    <section className="py-24 bg-surface-container-low" id="funciones-axil">
      <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-gutter">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg md:text-headline-xl text-on-surface font-bold">
            Conozca un poco más de las funciones de Axil que solucionarán estos problemas
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-surface-container-lowest p-8 rounded-lg shadow-sm border border-surface-container-low flex flex-col gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[32px]">credit_score</span>
            </div>
            <h3 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-on-surface">
              Buró de Crédito a la Renta (BCR)
            </h3>
            <p className="text-body-sm text-on-surface-variant">
              Asigna a cada inquilino una calificación basada en historial de pagos y experiencias
              anteriores. Permite a propietarios y administradores evaluar con precisión su
              comportamiento crediticio antes de aceptar un contrato.
            </p>
            <ul className="space-y-3 my-2">
              <li className="flex items-start gap-2 text-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-secondary text-[20px]">
                  check_circle
                </span>
                Evaluar riesgo con datos objetivos
              </li>
              <li className="flex items-start gap-2 text-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-secondary text-[20px]">
                  check_circle
                </span>
                Prevenir pérdidas por mal historial
              </li>
              <li className="flex items-start gap-2 text-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-secondary text-[20px]">
                  check_circle
                </span>
                Tomar decisiones más seguras
              </li>
            </ul>
            <div className="mt-auto pt-4 border-t border-surface-container-high">
              <p className="italic text-sm text-primary font-medium">
                &quot;Un sistema transparente que protege del riesgo a la propiedad.&quot;
              </p>
            </div>
          </div>

          <div className="bg-surface-container-lowest p-8 rounded-lg shadow-sm border border-surface-container-low flex flex-col gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[32px]">home_health</span>
            </div>
            <h3 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-on-surface">
              Buró de Daño a la Propiedad (BDP)
            </h3>
            <p className="text-body-sm text-on-surface-variant">
              Asigna a cada inmueble un historial de cuidado registrado, basado en inspecciones,
              antecedentes y reportes de propietarios y administradores.
            </p>
            <ul className="space-y-3 my-2">
              <li className="flex items-start gap-2 text-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-secondary text-[20px]">
                  check_circle
                </span>
                Reporte de daño a la propiedad documentado
              </li>
              <li className="flex items-start gap-2 text-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-secondary text-[20px]">
                  check_circle
                </span>
                Alertas tempranas de comportamiento de riesgo
              </li>
              <li className="flex items-start gap-2 text-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-secondary text-[20px]">
                  check_circle
                </span>
                Registro en el Buró de alquileres (puntualidad y retraso)
              </li>
            </ul>
            <div className="mt-auto pt-4 border-t border-surface-container-high">
              <p className="italic text-sm text-primary font-medium">
                &quot;Mantén el valor de tu propiedad con reportes históricos confiables.&quot;
              </p>
            </div>
          </div>

          <div className="bg-surface-container-lowest p-8 rounded-lg shadow-sm border border-surface-container-low flex flex-col gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[32px]">payments</span>
            </div>
            <h3 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-on-surface">
              Sistema de Cobro
            </h3>
            <p className="text-body-sm text-on-surface-variant">
              Sistema automático de cobros de Axil que se activa con cada contrato de alquiler,
              ofreciendo a propietarios y administradores el control total de pagos y moras.
            </p>
            <ul className="space-y-3 my-2">
              <li className="flex items-start gap-2 text-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-secondary text-[20px]">
                  check_circle
                </span>
                Optimiza la gestión de rentas
              </li>
              <li className="flex items-start gap-2 text-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-secondary text-[20px]">
                  check_circle
                </span>
                Fortalece el historial crediticio del inquilino
              </li>
              <li className="flex items-start gap-2 text-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-secondary text-[20px]">
                  check_circle
                </span>
                Genera confianza para futuros contratos
              </li>
            </ul>
            <div className="mt-auto pt-4 border-t border-surface-container-high">
              <p className="italic text-sm text-primary font-medium">
                &quot;Automatización total para una renta sin preocupaciones.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
