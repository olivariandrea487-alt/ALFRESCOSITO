import { useEffect, useRef, useState } from 'react';
import character1 from '../assets/screenshot_2025-12-07_200841-removebg-preview.png';
import character2 from '../assets/screenshot_2025-12-07_200819-removebg-preview.png';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-[#f6e4d4] relative overflow-hidden">
      <div className="absolute top-20 right-10 opacity-20 animate-float-slow">
        <img src={character1} alt="" className="w-48 h-auto" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-20 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-[#2f3031] mb-4 tracking-tight">
            Chi Siamo
          </h2>
          <div className="w-20 h-1 bg-[#2f3031] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 delay-200 transform ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-[#2f3031] mb-5 tracking-tight">
                La Nostra Missione
              </h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4 font-medium">
                <strong>Cooperativa Sociale Panta Rei</strong>
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4 font-medium">
                "Alfresco - Il fuori dentro" è un progetto della Cooperativa Panta Rei che mette al primo posto la dignità della persona.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed font-medium">
                Detenuti e detenute del Carcere di Verona prendono parte a due laboratori di produzione gastronomica "Pasta d'Uomo" e "Imbandita", pronti a riscattarsi grazie ai prodotti che fanno arrivare sulle nostre tavole.
              </p>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-400 transform ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            <div className="grid grid-cols-2 gap-5">
              <div className="bg-[#2f3031] p-6 md:p-8 rounded-2xl text-white shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 hover:-translate-y-1">
                <div className="text-4xl md:text-5xl font-display font-extrabold mb-2">100%</div>
                <div className="text-sm md:text-base font-semibold opacity-90">Qualità Italiana</div>
              </div>
              <div className="bg-[#4a5568] p-6 md:p-8 rounded-2xl text-white shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 hover:-translate-y-1">
                <div className="text-4xl md:text-5xl font-display font-extrabold mb-2">2</div>
                <div className="text-sm md:text-base font-semibold opacity-90">Brand Eccellenti</div>
              </div>
              <div className="bg-[#5a6c7d] p-6 md:p-8 rounded-2xl text-white shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 hover:-translate-y-1">
                <div className="text-4xl md:text-5xl font-display font-extrabold mb-2">20+</div>
                <div className="text-sm md:text-base font-semibold opacity-90">Anni di Esperienza</div>
              </div>
              <div className="bg-[#718096] p-6 md:p-8 rounded-2xl text-white shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 hover:-translate-y-1">
                <div className="text-4xl md:text-5xl font-display font-extrabold mb-2">∞</div>
                <div className="text-sm md:text-base font-semibold opacity-90">Passione</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-20 left-10 opacity-20 animate-float">
        <img src={character2} alt="" className="w-40 h-auto" />
      </div>
    </section>
  );
}
