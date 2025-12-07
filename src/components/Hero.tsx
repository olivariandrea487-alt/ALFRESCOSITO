import { useEffect, useState } from 'react';
import logoAlfresco from '../assets/logo-alfresco.svg';
import logoPasta from '../assets/pastalogo.svg';
import logoImbandita from '../assets/imbanditalogo.svg';
import character1 from '../assets/screenshot_2025-12-07_200841-removebg-preview.png';
import character2 from '../assets/screenshot_2025-12-07_200819-removebg-preview.png';
import character3 from '../assets/screenshot_2025-12-07_200751-removebg-preview.png';
import character4 from '../assets/screenshot_2025-12-07_200740-removebg-preview.png';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#f6e4d4]"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyZjMwMzEiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0YzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMmMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6bTEyLTEyYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMCAxMmMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>

      <div className="absolute top-[8%] left-[5%] md:left-[10%] animate-float">
        <img
          src={character1}
          alt="Character"
          className="w-32 md:w-52 lg:w-64 h-auto opacity-90 hover:scale-110 transition-transform duration-700 ease-out"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          }}
        />
      </div>

      <div className="absolute bottom-[15%] left-[2%] md:left-[12%] animate-float-delayed">
        <img
          src={character2}
          alt="Character"
          className="w-32 md:w-52 lg:w-64 h-auto opacity-90 hover:scale-110 transition-transform duration-700 ease-out"
          style={{
            transform: `translate(${-mousePosition.x * 0.5}px, ${-mousePosition.y * 0.5}px)`,
          }}
        />
      </div>

      <div className="absolute top-[15%] right-[5%] md:right-[10%] animate-float-slow">
        <img
          src={character3}
          alt="Character"
          className="w-32 md:w-52 lg:w-64 h-auto opacity-90 hover:scale-110 transition-transform duration-700 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 0.7}px, ${mousePosition.y * 0.7}px)`,
          }}
        />
      </div>

      <div className="absolute bottom-[12%] right-[2%] md:right-[12%] animate-float">
        <img
          src={character4}
          alt="Character"
          className="w-32 md:w-52 lg:w-64 h-auto opacity-90 hover:scale-110 transition-transform duration-700 ease-out"
          style={{
            transform: `translate(${-mousePosition.x * 0.8}px, ${-mousePosition.y * 0.8}px)`,
          }}
        />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8 animate-fade-in-up flex items-center justify-center gap-8 md:gap-12">
          <img
            src={logoPasta}
            alt="Pasta d'uomo"
            className="h-16 md:h-20 w-auto drop-shadow-2xl hover:scale-105 transition-transform duration-700 ease-out"
          />
          <img
            src={logoImbandita}
            alt="Imbandita"
            className="h-16 md:h-20 w-auto drop-shadow-2xl hover:scale-105 transition-transform duration-700 ease-out"
          />
        </div>
        <p className="text-lg md:text-xl text-gray-700 mb-8 animate-fade-in-up animation-delay-400 max-w-2xl mx-auto leading-relaxed font-medium">
          Ingredienti di prima qualità per la tavola del riscatto
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
          <a
            href="#brands"
            className="group bg-[#248acc] text-white px-8 py-3 rounded-full text-base font-bold hover:bg-[#2f3031] transition-all duration-500 shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-0.5"
          >
            <span className="inline-flex items-center gap-2">
              Scopri i Nostri Progetti
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </a>
          <a
            href="#about"
            className="bg-[#2f3031] text-white px-8 py-3 rounded-full text-base font-bold hover:bg-[#248acc] transition-all duration-500 shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-0.5"
          >
            Chi Siamo
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-8 h-8 text-[#2f3031]"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
