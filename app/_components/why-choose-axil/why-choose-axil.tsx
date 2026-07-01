export const WhyChooseAxilSection = () => {
  return (
    <section className="py-24 bg-surface" id="por-que-elegir-axil">
      <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-gutter">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg md:text-headline-xl text-on-surface font-bold">
            ¿Por qué elegir Axil?
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-surface-container-low flex flex-col gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[32px]">shield_with_heart</span>
            </div>
            <h3 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-on-surface">
              Digitaliza el 80% de la gestión del alquiler
            </h3>
            <ul className="space-y-3 my-2">
              <li className="flex items-start gap-2 text-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-secondary text-[20px]">
                  check_circle
                </span>
                Minimiza riesgos financieros y legales
              </li>
              <li className="flex items-start gap-2 text-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-secondary text-[20px]">
                  check_circle
                </span>
                Garantiza transparencia entre inquilinos y propietarios
              </li>
              <li className="flex items-start gap-2 text-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-secondary text-[20px]">
                  check_circle
                </span>
                Gestiona tu inmueble con seguridad y eficiencia
              </li>
            </ul>
            <div className="mt-auto pt-6">
              <a
                className="bg-primary text-on-primary px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity block text-center shadow-sm"
                href="#contacto"
              >
                Regístrate en Axil ahora
              </a>
            </div>
          </div>

          <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-surface-container-low flex flex-col gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[32px]">monitor</span>
            </div>
            <h3 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-on-surface">
              Explora la Demo de Axil
            </h3>
            <p className="text-body-sm text-on-surface-variant">
              Descubre cómo funciona nuestra plataforma y cómo puede transformar la gestión de
              alquileres. Si quieres explorar los demos en detalle, contáctanos con gusto.
            </p>
            <div className="mt-auto pt-6">
              <a
                className="bg-surface text-primary border-2 border-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary/5 transition-colors block text-center"
                href="#producto"
              >
                Ir a probar la demo
              </a>
            </div>
          </div>

          <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-surface-container-low flex flex-col gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[32px]">chat</span>
            </div>
            <h3 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-on-surface">
              Envía tu mensaje
            </h3>
            <p className="text-body-sm text-on-surface-variant italic">
              &quot;Si el tema de los alquileres en República Dominicana que abordamos en esta
              página coinciden con el lugar correcto. Tenemos soluciones reales, enviamos tus
              comentarios o preguntas, estamos atentos para responderte personalmente.&quot;
            </p>
            <div className="mt-auto pt-6">
              <a
                className="bg-primary text-on-primary px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity block text-center shadow-sm"
                href="#contacto"
              >
                Enviar mensaje
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
