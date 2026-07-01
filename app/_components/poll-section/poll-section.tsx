export const PollSection = () => {
  return (
    <section className="py-24 bg-surface-container-lowest" id="problema">
      <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-gutter">
        <div className="grid md:grid-cols-2 gap-stack-lg items-center">
          <div className="order-2 md:order-1 relative">
            <div className="absolute -inset-4 bg-error/5 rounded-3xl -z-10"></div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="w-full h-[400px] object-cover rounded-2xl shadow-md border border-surface-container-highest"
              alt="Tensa conversación entre un administrador de propiedad y un inquilino en un apartamento moderno de República Dominicana, ilustrando los retos de la gestión manual de alquileres."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJAU4xpCaxbgpTx0u-6OwJxu_Ic8l6fLHghXlWvqzgkrVJQ9AioAGrYc7tPnSHDZIY4_HB3DsSOSiN_Nzc1gZSJzVgQf6JO8zliJYPPgn-SKA9t2o4ztCkS8QQ3E2XZgKFMZbiqLPmi8xZlpRsQKS0_Gug9fQjnYiCZfJqXPzTQKfOwPyV3z3wNuslAlq8LxlYMnBmh5w2_0mNysmPD4cgqpGvmZqA4MY5lKDGfj56VdiTpncxtfIaXO2rwYD_K5qqbJGUjYWaoOlA"
            />

            <div className="absolute -bottom-6 -right-6 md:right-auto md:-left-6 bg-surface-container-lowest p-4 rounded-xl shadow-lg border border-surface-container-high w-64 glass-panel">
              <div className="flex items-center gap-3 mb-2">
                <span className="material-symbols-outlined text-error text-[28px]">
                  trending_down
                </span>
                <span className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-on-surface">
                  75%
                </span>
              </div>
              <p className="text-sm text-on-surface-variant leading-tight">
                De propietarios reportan pérdidas por mala gestión o morosidad.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2 flex flex-col items-start space-y-stack-sm">
            <span className="text-error font-semibold tracking-wider text-sm uppercase">
              El Problema Actual
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface md:text-[40px] md:leading-[48px] font-bold">
              Por Qué el 75% de Propietarios y Administradores Están Perdiendo Dinero con Sus
              Alquileres
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-4">
              La gestión manual, la falta de historiales crediticios específicos para alquiler y los
              daños no reportados están erosionando la rentabilidad de las propiedades en República
              Dominicana. Un sistema obsoleto que beneficia a los malos inquilinos y castiga a los
              buenos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-4 w-full">
              <a
                className="bg-surface text-primary border-2 border-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary/5 transition-colors text-center w-full sm:w-auto"
                href="#"
              >
                Ver resumen de encuesta
              </a>
              <a
                className="bg-on-surface text-surface-container-lowest px-6 py-3 rounded-lg font-semibold hover:bg-on-surface-variant transition-colors text-center  gap-2 w-full sm:w-auto shadow-md"
                href="#contacto"
              >
                ¿Permitirá que sigan creciendo?
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
