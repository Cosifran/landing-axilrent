//Import own components
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const FaqSection = () => {
  return (
    <section className="py-24 bg-surface-container-lowest" id="faq">
      <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-gutter">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg md:text-headline-xl text-on-surface font-bold">
            Preguntas Frecuentes
          </h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          <Accordion
            defaultValue={['shipping']}
            className="border border-surface-container-high rounded-lg overflow-hidden"
          >
            <AccordionItem
              value="shipping"
              className="w-full p-6 py-4 text-left bg-surface hover:bg-surface-container-low transition-colors group"
            >
              <AccordionTrigger className="font-semibold text-on-surface">
                ¿Qué es Axil?
              </AccordionTrigger>
              <AccordionContent>
                We offer standard (5-7 days), express (2-3 days), and overnight shipping. Free
                shipping on international orders.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="border border-surface-container-high rounded-lg overflow-hidden">
            <button className="w-full flex justify-between items-center p-6 text-left bg-surface hover:bg-surface-container-low transition-colors group">
              <span className="font-semibold text-on-surface">
                ¿Para quién está dirigido el servicio?
              </span>
              <span className="material-symbols-outlined text-primary transition-transform group-active:rotate-45">
                add
              </span>
            </button>
          </div>

          <div className="border border-surface-container-high rounded-lg overflow-hidden">
            <button className="w-full flex justify-between items-center p-6 text-left bg-surface hover:bg-surface-container-low transition-colors group">
              <span className="font-semibold text-on-surface">
                ¿Qué se busca resolver con Axil?
              </span>
              <span className="material-symbols-outlined text-primary transition-transform group-active:rotate-45">
                add
              </span>
            </button>
          </div>

          <div className="border border-surface-container-high rounded-lg overflow-hidden">
            <button className="w-full flex justify-between items-center p-6 text-left bg-surface hover:bg-surface-container-low transition-colors group">
              <span className="font-semibold text-on-surface">
                ¿Axil se encarga de cobrar si un inquilino se va debiendo dinero de la renta?
              </span>
              <span className="material-symbols-outlined text-primary transition-transform group-active:rotate-45">
                add
              </span>
            </button>
          </div>

          <div className="border border-surface-container-high rounded-lg overflow-hidden">
            <button className="w-full flex justify-between items-center p-6 text-left bg-surface hover:bg-surface-container-low transition-colors group">
              <span className="font-semibold text-on-surface">
                ¿Axil cobra comisión por cobrar?
              </span>
              <span className="material-symbols-outlined text-primary transition-transform group-active:rotate-45">
                add
              </span>
            </button>
          </div>

          <div className="border border-surface-container-high rounded-lg overflow-hidden">
            <button className="w-full flex justify-between items-center p-6 text-left bg-surface hover:bg-surface-container-low transition-colors group">
              <span className="font-semibold text-on-surface">
                ¿Se paga por reportar cliente mala paga?
              </span>
              <span className="material-symbols-outlined text-primary transition-transform group-active:rotate-45">
                add
              </span>
            </button>
          </div>

          <div className="border border-surface-container-high rounded-lg overflow-hidden">
            <button className="w-full flex justify-between items-center p-6 text-left bg-surface hover:bg-surface-container-low transition-colors group">
              <span className="font-semibold text-on-surface">
                ¿Se debe pagar para publicar en el marketplace?
              </span>
              <span className="material-symbols-outlined text-primary transition-transform group-active:rotate-45">
                add
              </span>
            </button>
          </div>

          <div className="border border-surface-container-high rounded-lg overflow-hidden">
            <button className="w-full flex justify-between items-center p-6 text-left bg-surface hover:bg-surface-container-low transition-colors group">
              <span className="font-semibold text-on-surface">
                ¿Cuál es la finalidad del Buró de Daño a la Propiedad?
              </span>
              <span className="material-symbols-outlined text-primary transition-transform group-active:rotate-45">
                add
              </span>
            </button>
          </div>

          <div className="border border-surface-container-high rounded-lg overflow-hidden">
            <button className="w-full flex justify-between items-center p-6 text-left bg-surface hover:bg-surface-container-low transition-colors group">
              <span className="font-semibold text-on-surface">
                ¿Axil funciona como una comunidad?
              </span>
              <span className="material-symbols-outlined text-primary transition-transform group-active:rotate-45">
                add
              </span>
            </button>
          </div>

          <div className="border border-surface-container-high rounded-lg overflow-hidden">
            <button className="w-full flex justify-between items-center p-6 text-left bg-surface hover:bg-surface-container-low transition-colors group">
              <span className="font-semibold text-on-surface">
                ¿Por qué elegir Axil en lugar de soluciones tradicionales?
              </span>
              <span className="material-symbols-outlined text-primary transition-transform group-active:rotate-45">
                add
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
