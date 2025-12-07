import { Menu, X } from 'lucide-react';
import logoAlfresco from '../assets/logo-alfresco.svg';
import logoFondazione from '../assets/logo-fondazione-san-zeno-1.webp';

interface NavbarProps {
  scrolled: boolean;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export default function Navbar({ scrolled, mobileMenuOpen, setMobileMenuOpen }: NavbarProps) {
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white shadow-lg py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between w-full">
          <a href="#" className="flex items-center group">
            <img
              src={logoAlfresco}
              alt="Al Fresco"
              className={`transition-all duration-500 ${
                scrolled ? 'h-12 lg:h-14' : 'h-16 lg:h-[4.5rem]'
              } group-hover:scale-105`}
            />
          </a>

          <div className="hidden md:flex items-center gap-10 lg:gap-11">
            <a
              href="#home"
              className="text-base lg:text-lg font-semibold transition-all duration-300 text-gray-800 hover:text-[#248acc]"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-base lg:text-lg font-semibold transition-all duration-300 text-gray-800 hover:text-[#248acc]"
            >
              Chi Siamo
            </a>
            <a
              href="#products"
              className="text-base lg:text-lg font-semibold transition-all duration-300 text-gray-800 hover:text-[#248acc]"
            >
              Prodotti
            </a>
            <a
              href="https://www.fondazionesanzeno.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:opacity-80 flex items-center"
            >
              <img
                src={logoFondazione}
                alt="Fondazione San Zeno"
                className={`transition-all duration-500 ${
                  scrolled ? 'h-8 lg:h-9' : 'h-9 lg:h-10'
                } w-auto`}
              />
            </a>
            <a
              href="#contact"
              className="bg-[#248acc] text-white px-6 py-2.5 lg:px-7 lg:py-3 rounded-full text-base lg:text-lg font-bold hover:bg-[#2f3031] transition-all duration-300 hover:shadow-lg"
            >
              Contatti
            </a>
          </div>

          <button
            className="md:hidden transition-colors text-gray-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl">
          <div className="flex flex-col space-y-4 p-6">
            <a
              href="#home"
              className="text-gray-800 hover:text-[#248acc] font-semibold py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-800 hover:text-[#248acc] font-semibold py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Chi Siamo
            </a>
            <a
              href="#products"
              className="text-gray-800 hover:text-[#248acc] font-semibold py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Prodotti
            </a>
            <a
              href="#contact"
              className="bg-[#248acc] text-white px-6 py-3 rounded-full font-bold hover:bg-[#2f3031] transition-all text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contatti
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
