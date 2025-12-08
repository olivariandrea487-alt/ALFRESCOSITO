import { useEffect, useRef, useState } from 'react';
import { ShoppingBag, ArrowLeft, Package, Award, Heart } from 'lucide-react';
import panettoneImg from '../assets/001-uai-258x262.png';
import cioccoloneImg from '../assets/cioccolone-e1676326983381-uai-258x262.png';

export default function ProductsPage() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
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
    <div className="min-h-screen bg-[#f6e4d4] pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <a
            href="#/"
            className="inline-flex items-center gap-2 text-[#248acc] hover:text-[#2f3031] transition-colors duration-300 font-semibold text-lg"
          >
            <ArrowLeft size={20} />
            Torna alla Home
          </a>
        </div>

        <div ref={sectionRef} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-[#2f3031] mb-6 tracking-tight">
              Catalogo 2025
            </h1>
            <div className="w-24 h-1.5 bg-[#2f3031] mx-auto rounded-full mb-8"></div>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
              I nostri dolci artigianali, realizzati con ingredienti selezionati e tanto amore
            </p>
          </div>

          <div className="grid gap-12 mb-16">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="bg-gradient-to-br from-[#FFF5E6] to-[#FFE8CC] p-8 md:p-12 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#F0A51F] opacity-10 rounded-full blur-3xl"></div>
                    <img
                      src={panettoneImg}
                      alt="Panettone"
                      className="relative w-80 lg:w-96 h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 bg-[#F0A51F] text-white px-4 py-2 rounded-full text-sm font-bold mb-6 w-fit">
                    <Award size={16} />
                    Prodotto Artigianale
                  </div>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[#2f3031] mb-4 tracking-tight">
                    Panettone
                  </h2>
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 font-medium">
                    Il nostro panettone classico è un dolce lievitato dalla tradizione italiana, arricchito con canditi e uvetta sultanina. Ogni panettone è realizzato interamente a mano seguendo una ricetta tradizionale che richiede tempi di lievitazione naturale di oltre 24 ore.
                  </p>
                  <div className="bg-[#f6e4d4] rounded-2xl p-6 mb-6">
                    <h3 className="font-bold text-[#F0A51F] text-lg mb-3 flex items-center gap-2">
                      <Package size={20} />
                      Ingredienti
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Farina di frumento, zucchero, uova fresche, canditi (arancia e cedro), uvetta sultanina, lievito naturale, burro, latte scremato in polvere, sale e aromi naturali di vaniglia
                    </p>
                  </div>
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Peso netto</p>
                      <p className="text-2xl font-bold text-[#2f3031]">500g</p>
                    </div>
                    <div className="flex items-center gap-2 bg-[#248acc] bg-opacity-10 px-4 py-2 rounded-full">
                      <Heart size={18} className="text-[#248acc]" />
                      <span className="text-[#248acc] font-semibold">Fatto a mano</span>
                    </div>
                  </div>
                  <button className="w-full inline-flex items-center justify-center gap-2 bg-[#248acc] text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-[#2f3031] transition-all duration-500 shadow-lg hover:shadow-xl hover:scale-105">
                    <ShoppingBag size={20} />
                    Richiedi Informazioni
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="order-2 md:order-1 p-8 md:p-12 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 bg-[#883A93] text-white px-4 py-2 rounded-full text-sm font-bold mb-6 w-fit">
                    <Award size={16} />
                    Prodotto Artigianale
                  </div>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[#2f3031] mb-4 tracking-tight">
                    Cioccolone
                  </h2>
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 font-medium">
                    Una deliziosa variante del panettone classico, il nostro cioccolone è un dolce lievitato arricchito con generose gocce di cioccolato fondente. La lavorazione artigianale e la lunga lievitazione naturale garantiscono una sofficità e un gusto inconfondibili.
                  </p>
                  <div className="bg-[#f6e4d4] rounded-2xl p-6 mb-6">
                    <h3 className="font-bold text-[#883A93] text-lg mb-3 flex items-center gap-2">
                      <Package size={20} />
                      Ingredienti
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Farina di frumento, zucchero, uova fresche, gocce di cioccolato fondente (13,2%), lievito naturale, burro, latte scremato in polvere, sale e aromi naturali di vaniglia
                    </p>
                  </div>
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Peso netto</p>
                      <p className="text-2xl font-bold text-[#2f3031]">500g</p>
                    </div>
                    <div className="flex items-center gap-2 bg-[#883A93] bg-opacity-10 px-4 py-2 rounded-full">
                      <Heart size={18} className="text-[#883A93]" />
                      <span className="text-[#883A93] font-semibold">Fatto a mano</span>
                    </div>
                  </div>
                  <button className="w-full inline-flex items-center justify-center gap-2 bg-[#248acc] text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-[#2f3031] transition-all duration-500 shadow-lg hover:shadow-xl hover:scale-105">
                    <ShoppingBag size={20} />
                    Richiedi Informazioni
                  </button>
                </div>
                <div className="order-1 md:order-2 bg-gradient-to-br from-[#F5E6FF] to-[#E6D5F0] p-8 md:p-12 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#883A93] opacity-10 rounded-full blur-3xl"></div>
                    <img
                      src={cioccoloneImg}
                      alt="Cioccolone"
                      className="relative w-80 lg:w-96 h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center">
            <h3 className="text-3xl md:text-4xl font-display font-bold text-[#2f3031] mb-6">
              Qualità Artigianale dal 2025
            </h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
              Ogni nostro prodotto nasce dalla passione per la tradizione dolciaria italiana e dall'impegno sociale.
              Utilizziamo solo ingredienti di prima qualità e seguiamo metodi di produzione artigianali per garantire
              il massimo della bontà in ogni morso.
            </p>
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#248acc] rounded-full flex items-center justify-center mx-auto mb-3">
                  <Package size={32} className="text-white" />
                </div>
                <p className="font-semibold text-[#2f3031]">Ingredienti<br/>Selezionati</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#248acc] rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award size={32} className="text-white" />
                </div>
                <p className="font-semibold text-[#2f3031]">Lavorazione<br/>Artigianale</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#248acc] rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart size={32} className="text-white" />
                </div>
                <p className="font-semibold text-[#2f3031]">Fatto con<br/>Passione</p>
              </div>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-[#248acc] text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-[#2f3031] transition-all duration-500 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Contattaci per Informazioni
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
