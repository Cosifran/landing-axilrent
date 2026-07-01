export const Hero = () => {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden min-h-[921px] flex items-center">
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary-fixed-dim/20 via-background to-background"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNlN2U5ZWQiLz48L3N2Zz4=')] opacity-50 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
      </div>
      <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-gutter relative z-10 grid md:grid-cols-2 gap-stack-lg items-center">
        <div className="flex flex-col items-start space-y-stack-md">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-fixed-dim/20 text-on-secondary-fixed-variant border border-secondary-fixed/30 font-label-caps">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
            </span>
            Plataforma Activa en RD
          </div>
          <h1 className="font-headline-xl text-headline-xl text-on-surface">
            Proyecto <span className="text-primary">Axil rent</span>
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant text-lg max-w-xl">
            Digitalizamos el proceso de alquiler para inquilinos, propietarios y administradores en
            República Dominicana. Transparencia, seguridad y control financiero en una sola
            plataforma.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
            <a
              className="bg-primary text-on-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary-container transition-colors shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group"
              href="#contacto"
            >
              Comenzar Ahora
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </a>
            <a
              className="bg-surface-container text-on-surface border border-outline-variant px-8 py-4 rounded-lg font-semibold hover:bg-surface-container-high transition-colors flex items-center justify-center gap-2"
              href="#producto"
            >
              Ver Plataforma
            </a>
          </div>
        </div>
        <div className="relative w-full h-[500px] hidden md:block">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-surface to-tertiary-fixed/30 rounded-full blur-3xl -z-10"></div>
          <div className="glass-panel w-full h-full rounded-2xl ambient-shadow p-6 relative overflow-hidden flex flex-col gap-4 border border-surface-container-highest">
            <div className="flex justify-between items-center pb-4 border-b border-surface-container-highest">
              <div className="h-6 w-32 bg-surface-container-highest rounded animate-pulse"></div>
              <div className="flex gap-2">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    notifications
                  </span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-surface-container-lowest p-4 rounded-xl border border-surface-container-low">
                <div className="text-sm text-on-surface-variant mb-1">Ingresos Mensuales</div>
                <div className="text-2xl font-semibold text-on-surface">RD$ 125,000</div>
                <div className="text-xs text-secondary mt-2 flex items-center">
                  <span className="material-symbols-outlined text-[14px]">trending_up</span> +12%
                  este mes
                </div>
              </div>
              <div className="bg-surface-container-lowest p-4 rounded-xl border border-surface-container-low">
                <div className="text-sm text-on-surface-variant mb-1">Tasa de Ocupación</div>
                <div className="text-2xl font-semibold text-on-surface">94%</div>
                <div className="text-xs text-secondary mt-2 flex items-center">
                  <span className="material-symbols-outlined text-[14px]">check_circle</span>{' '}
                  Saludable
                </div>
              </div>
            </div>
            <div className="mt-4 flex-1 bg-surface-container-lowest rounded-xl border border-surface-container-low p-4">
              <div className="h-4 w-24 bg-surface-container-highest rounded mb-4"></div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-2 hover:bg-surface-container-low rounded-lg transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-bold">
                      A
                    </div>
                    <div>
                      <div className="text-sm font-medium">Apt 4B - Torre Bella</div>
                      <div className="text-xs text-on-surface-variant">Pago Recibido</div>
                    </div>
                  </div>
                  <div className="text-sm font-semibold text-secondary">RD$ 35,000</div>
                </div>
                <div className="flex items-center justify-between p-2 hover:bg-surface-container-low rounded-lg transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-error-container text-on-error-container flex items-center justify-center font-bold">
                      C
                    </div>
                    <div>
                      <div className="text-sm font-medium">Casa Los Ríos</div>
                      <div className="text-xs text-on-surface-variant">Pendiente</div>
                    </div>
                  </div>
                  <div className="text-sm font-semibold text-error">RD$ 45,000</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
