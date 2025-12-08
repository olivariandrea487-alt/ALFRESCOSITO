import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import BrandSection from './components/BrandSection';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import SourceProtection from './components/SourceProtection';
import ProductsPage from './pages/ProductsPage';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#/products') {
        setCurrentPage('products');
      } else {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (currentPage === 'products') {
    return (
      <div className="min-h-screen bg-white">
        <SourceProtection />
        <Navbar scrolled={scrolled} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
        <ProductsPage />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <SourceProtection />
      <Navbar scrolled={scrolled} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      <main>
        <Hero />
        <About />
        <BrandSection />
        <Products />
        <Contact />
        <Newsletter />
      </main>

      <Footer />
    </div>
  );
}

export default App;
