import { useEffect, useRef, useState } from 'react';
import { ChevronRight } from 'lucide-react';
import logoPasta from '../assets/pastalogo.svg';
import logoImbandita from '../assets/imbanditalogo.svg';
import character1 from '../assets/screenshot_2025-12-07_200841-removebg-preview.png';
import character3 from '../assets/screenshot_2025-12-07_200751-removebg-preview.png';
import character4 from '../assets/screenshot_2025-12-07_200740-removebg-preview.png';

export default function BrandSection() {
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
    <section id="brands" ref={sectionRef} className="py-24 bg-[#f6e4d4] relative overflow-hidden">
      <div className="absolute top-16 left-12 opacity-15 animate-float">
        <img src={character1} alt="" className="w-52 md:w-56 h-auto" />
      </div>
      <div className="absolute bottom-16 right-12 opacity-15 animate-float-delayed">
        <img src={character3} alt="" className="w-48 md:w-52 h-auto" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-20 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2f3031] mb-4 tracking-tight">
            I Nostri Progetti
          </h2>
          <div className="w-20 h-1 lg:w-24 lg:h-1.5 bg-[#2f3031] mx-auto rounded-full mb-6"></div>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Due laboratori di produzione gastronomica che portano il meglio della tradizione italiana sulle vostre tavole
          </p>
        </div>

        <div className="space-y-16">
          <div
            className={`transition-all duration-1000 delay-200 transform ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
          >
            <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 border-2 border-gray-100">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="p-12 md:p-16 flex items-center justify-center">
                  <img
                    src={logoPasta}
                    alt="Pasta d'uomo"
                    className="w-full max-w-md h-auto group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="p-8 md:p-12 lg:p-14">
                  <div className="inline-block px-4 py-1 lg:px-5 lg:py-1.5 bg-gray-100 rounded-full mb-4">
                    <span className="text-sm lg:text-base font-semibold text-gray-700">PASTA ARTIGIANALE</span>
                  </div>
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2f3031] mb-4 tracking-tight">
                    Pasta d'uomo
                  </h3>
                  <p className="text-base md:text-lg lg:text-xl text-gray-700 font-semibold mb-6">
                    Il Buono di Dentro
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-8 text-base md:text-lg lg:text-xl">
                    Nel forno PASTA D'UOMO nascono dolci, biscotti e fragranti speranze.
                    In questo laboratorio viene dato spazio solo alla voglia di mettere le mani in pasta.
                    Un luogo messo a disposizione dei detenuti che desiderano mettersi alla prova per
                    creare qualcosa di personale che faccia del bene a sé stessi ed anche agli altri.
                    Gusta le delizie di Pasta d'Uomo, tutte ricche di emozioni e dignità qb.
                  </p>
                  <button className="inline-flex items-center gap-2 bg-[#2f3031] text-white px-8 py-4 lg:px-9 lg:py-4.5 rounded-full text-base lg:text-lg font-semibold hover:bg-[#3d3f40] transition-all duration-300 hover:gap-4 shadow-lg hover:shadow-xl">
                    Scopri di più
                    <ChevronRight size={20} className="lg:w-6 lg:h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-400 transform ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 border-2 border-gray-100">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="p-8 md:p-12 lg:p-14 order-2 md:order-1">
                  <div className="inline-block px-4 py-1 lg:px-5 lg:py-1.5 bg-gray-100 rounded-full mb-4">
                    <span className="text-sm lg:text-base font-semibold text-gray-700">INCLUSIONE SOCIALE</span>
                  </div>
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2f3031] mb-4 tracking-tight">
                    Imbandita
                  </h3>
                  <p className="text-base md:text-lg lg:text-xl text-gray-700 font-semibold mb-6">
                    La Tavola del Riscatto
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-8 text-base md:text-lg lg:text-xl">
                    Nel laboratorio di IMBANDITA si preparano ogni giorno prodotti pieni di voglia di futuro.
                    Entra nel nostro laboratorio con un semplice boccone. Assapora il desiderio di riscatto.
                    È l'ingrediente segreto che le donne di Imbandita aggiungono ad ogni ricetta.
                    Qui nascono ogni giorno prodotti carichi di emozione e voglia di nuove opportunità.
                    Prova le specialità di Imbandita, tutte prodotte contro lo spreco di diritti.
                  </p>
                  <button className="inline-flex items-center gap-2 bg-[#2f3031] text-white px-8 py-4 lg:px-9 lg:py-4.5 rounded-full text-base lg:text-lg font-semibold hover:bg-[#3d3f40] transition-all duration-300 hover:gap-4 shadow-lg hover:shadow-xl">
                    Scopri di più
                    <ChevronRight size={20} className="lg:w-6 lg:h-6" />
                  </button>
                </div>
                <div className="p-12 md:p-16 flex items-center justify-center order-1 md:order-2">
                  <img
                    src={logoImbandita}
                    alt="Imbandita"
                    className="w-full max-w-md h-auto group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="absolute top-1/3 left-1/4 opacity-15 animate-float-slow">
        <img src={character4} alt="" className="w-44 md:w-48 h-auto" />
      </div>
    </section>
  );
}
