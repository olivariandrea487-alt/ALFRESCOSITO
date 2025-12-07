import { useEffect, useRef, useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import panettoneImg from '../assets/001-uai-258x262.png';
import cioccoloneImg from '../assets/cioccolone-e1676326983381-uai-258x262.png';

export default function Products() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="products" ref={sectionRef} className="py-24 bg-[#f6e4d4] relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-20 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-[#2f3031] mb-4 tracking-tight">
            I Nostri Prodotti
          </h2>
          <div className="w-20 h-1 lg:w-24 lg:h-1.5 bg-[#2f3031] mx-auto rounded-full mb-6"></div>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 max-w-2xl mx-auto leading-relaxed font-medium">
            Dolci artigianali realizzati con passione e ingredienti di prima qualità
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          <div
            className={`transition-all duration-1000 delay-200 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="group text-center">
              <div className="mb-8 flex items-center justify-center">
                <img
                  src={panettoneImg}
                  alt="Panettone"
                  className="w-72 lg:w-80 h-auto group-hover:scale-105 transition-transform duration-700 ease-out drop-shadow-2xl"
                />
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-[#2f3031] mb-3 tracking-tight">
                  Panettone
                </h3>
                <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed mb-4 font-medium">
                  Dolce lievitato classico con canditi e uvetta, interamente realizzato manualmente
                </p>
                <div className="mb-6">
                  <p className="text-base lg:text-lg text-gray-600 mb-2 font-medium">
                    <span className="font-bold text-[#F0A51F]">Ingredienti:</span> farina di frumento, zucchero, uova fresche, canditi, uvetta, lievito naturale, latte scremato in polvere, sale e aromi naturali
                  </p>
                  <p className="text-base lg:text-lg font-bold text-[#2f3031]">
                    Peso: 500g
                  </p>
                </div>
                <button className="inline-flex items-center justify-center gap-2 bg-[#248acc] text-white px-7 py-2.5 lg:px-8 lg:py-3 rounded-full text-base lg:text-lg font-bold hover:bg-[#2f3031] transition-all duration-500 shadow-md hover:shadow-lg hover:scale-105">
                  <ShoppingBag size={18} className="lg:w-5 lg:h-5" />
                  Richiedi Informazioni
                </button>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-400 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="group text-center">
              <div className="mb-8 flex items-center justify-center">
                <img
                  src={cioccoloneImg}
                  alt="Cioccolone"
                  className="w-72 lg:w-80 h-auto group-hover:scale-105 transition-transform duration-700 ease-out drop-shadow-2xl"
                />
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-[#2f3031] mb-3 tracking-tight">
                  Cioccolone
                </h3>
                <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed mb-4 font-medium">
                  Dolce lievitato con gocce di cioccolato, completamente fatto a mano con passione
                </p>
                <div className="mb-6">
                  <p className="text-base lg:text-lg text-gray-600 mb-2 font-medium">
                    <span className="font-bold text-[#883A93]">Ingredienti:</span> farina di frumento, zucchero, uova fresche, gocce di cioccolato al 13,2%, lievito naturale, latte scremato in polvere, sale e aromi naturali
                  </p>
                  <p className="text-base lg:text-lg font-bold text-[#2f3031]">
                    Peso: 500g
                  </p>
                </div>
                <button className="inline-flex items-center justify-center gap-2 bg-[#248acc] text-white px-7 py-2.5 lg:px-8 lg:py-3 rounded-full text-base lg:text-lg font-bold hover:bg-[#2f3031] transition-all duration-500 shadow-md hover:shadow-lg hover:scale-105">
                  <ShoppingBag size={18} className="lg:w-5 lg:h-5" />
                  Richiedi Informazioni
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
