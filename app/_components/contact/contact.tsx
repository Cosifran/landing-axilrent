export const ContactSection = () => {
  return (
    <section className="py-24 bg-surface-container-low" id="contacto">
      <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-gutter">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg md:text-headline-xl text-on-surface font-bold">
            Contáctanos
          </h2>
          <p className="text-on-surface-variant mt-4">
            Estamos aquí para ayudarte a transformar tu gestión inmobiliaria.
          </p>
        </div>
        <div className="max-w-2xl mx-auto bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-surface-container-high">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-on-surface">Nombre</label>
              <input
                className="w-full p-3 rounded-lg border border-outline-variant bg-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                placeholder="Tu nombre"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-on-surface">Apellido</label>
              <input
                className="w-full p-3 rounded-lg border border-outline-variant bg-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                placeholder="Tu apellido"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-on-surface">Email</label>
              <input
                className="w-full p-3 rounded-lg border border-outline-variant bg-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                placeholder="correo@ejemplo.com"
                type="email"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-on-surface">Teléfono</label>
              <input
                className="w-full p-3 rounded-lg border border-outline-variant bg-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                placeholder="(809) 000-0000"
                type="tel"
              />
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-sm font-semibold text-on-surface">Tipo de usuario</label>
              <select className="w-full p-3 rounded-lg border border-outline-variant bg-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all">
                <option>Propietario</option>
                <option>Administrador</option>
                <option>Inquilino</option>
                <option>Otro</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-sm font-semibold text-on-surface">Mensaje</label>
              <textarea
                className="w-full p-3 rounded-lg border border-outline-variant bg-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                placeholder="¿En qué podemos ayudarte?"
                rows={4}
              ></textarea>
            </div>
            <div className="md:col-span-2">
              <button
                className="w-full bg-primary text-on-primary py-4 rounded-lg font-bold hover:opacity-90 transition-opacity shadow-md"
                type="submit"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
