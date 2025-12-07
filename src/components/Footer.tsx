import { Mail, MapPin, Phone } from 'lucide-react';
import logoPasta from '../assets/pastalogo.svg';
import logoImbandita from '../assets/imbanditalogo.svg';
import character1 from '../assets/screenshot_2025-12-07_200841-removebg-preview.png';
import character2 from '../assets/screenshot_2025-12-07_200819-removebg-preview.png';
import character3 from '../assets/screenshot_2025-12-07_200751-removebg-preview.png';
import character4 from '../assets/screenshot_2025-12-07_200740-removebg-preview.png';

export default function Footer() {
  return (
    <footer className="bg-[#2f3031] text-white relative overflow-hidden">
      <div className="absolute top-10 left-10 opacity-10 animate-float">
        <img src={character1} alt="" className="w-32 h-auto" />
      </div>
      <div className="absolute top-20 right-20 opacity-10 animate-float-delayed">
        <img src={character2} alt="" className="w-28 h-auto" />
      </div>
      <div className="absolute bottom-20 left-1/4 opacity-10 animate-float-slow">
        <img src={character3} alt="" className="w-36 h-auto" />
      </div>
      <div className="absolute bottom-10 right-1/4 opacity-10 animate-float">
        <img src={character4} alt="" className="w-32 h-auto" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-6">
            <div className="flex flex-col gap-3">
              <img src={logoPasta} alt="Pasta d'uomo" className="h-10 lg:h-11 invert brightness-0 invert" />
              <img src={logoImbandita} alt="Imbandita" className="h-8 lg:h-9 invert brightness-0 invert" />
            </div>
            <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
              Ingredienti di prima qualità per la tavola del riscatto.
              L'eccellenza italiana in ogni prodotto.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/progettoalfresco"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#248acc] transition-all duration-300 hover:scale-110"
              >
                <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl lg:text-2xl font-bold mb-6 text-[#248acc]">
              Link Rapidi
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-300 text-base lg:text-lg hover:text-[#248acc] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 text-base lg:text-lg hover:text-[#248acc] transition-colors">
                  Chi Siamo
                </a>
              </li>
              <li>
                <a href="#brands" className="text-gray-300 text-base lg:text-lg hover:text-[#248acc] transition-colors">
                  I Nostri Progetti
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-300 text-base lg:text-lg hover:text-[#248acc] transition-colors">
                  Prodotti
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 text-base lg:text-lg hover:text-[#248acc] transition-colors">
                  Contatti
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl lg:text-2xl font-bold mb-6 text-[#248acc]">
              Contatti
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-300">
                <MapPin className="flex-shrink-0 mt-1 text-[#248acc]" size={20} />
                <div className="text-base lg:text-lg">
                  <p className="font-semibold text-white">Cooperativa Sociale Panta Rei</p>
                  <p>Via Pietro Vassanelli, 25</p>
                  <p>37012 Bussolengo VR</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <Phone className="flex-shrink-0 mt-1 text-[#248acc]" size={20} />
                <a href="tel:+390456717635" className="text-base lg:text-lg hover:text-[#248acc] transition-colors">
                  +39 045 6717635
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <Mail className="flex-shrink-0 mt-1 text-[#248acc]" size={20} />
                <div className="text-base lg:text-lg">
                  <a href="mailto:info@progettoalfresco.it" className="hover:text-[#248acc] transition-colors block">
                    info@progettoalfresco.it
                  </a>
                  <a href="mailto:info@cooperativapantarei.it" className="hover:text-[#248acc] transition-colors block text-sm lg:text-base">
                    info@cooperativapantarei.it
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm lg:text-base">
                © 2025 Progetto Alfresco - Cooperativa Sociale Panta Rei
              </p>
              <p className="text-gray-500 text-xs lg:text-sm mt-1">
                Tutti i diritti riservati
              </p>
            </div>
            <div className="flex gap-6 text-sm lg:text-base">
              <a href="#" className="text-gray-400 hover:text-[#248acc] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#248acc] transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
