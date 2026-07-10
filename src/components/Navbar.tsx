import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="sticky top-0 z-50 w-full flex justify-center pointer-events-none p-0 transition-all duration-300">
      <nav className={`pointer-events-auto transition-all duration-500 ease-in-out border ${
        isScrolled 
          ? "w-[94%] max-w-5xl mt-3 rounded-full border-border-light-gray/80 bg-primary-gray/80 backdrop-blur-md shadow-md py-3 px-6" 
          : "w-full max-w-full rounded-none border-transparent border-b-border-light-gray bg-primary-gray/70 backdrop-blur-md py-4 px-6"
      }`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between md:grid md:grid-cols-3">
          {/* Logo (Signature SVG) */}
          <div className="flex justify-start">
            <a href="#" className="flex items-center text-text-primary-navy hover:opacity-85 transition-opacity h-7.5 md:h-8.5 max-w-[145px] md:max-w-[185px] shrink-0">
              <img src="/abdul-samad.svg" className="h-full w-auto" alt="Abdul Samad Signature" />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex justify-center items-center gap-5 lg:gap-8 font-sans text-sm font-semibold text-text-secondary-gray whitespace-nowrap">
            <a href="#about" className="hover:text-accent-green transition-colors whitespace-nowrap">About</a>
            <a href="#portfolio" className="hover:text-accent-green transition-colors whitespace-nowrap">Portfolio</a>
            <a href="#tech-stack" className="hover:text-accent-green transition-colors whitespace-nowrap">Tech Stack</a>
            <a href="#mindset" className="hover:text-accent-green transition-colors whitespace-nowrap">Mindset</a>
            <a href="#tweets" className="hover:text-accent-green transition-colors whitespace-nowrap">Tweets</a>
            <a href="#blogs" className="hover:text-accent-green transition-colors whitespace-nowrap">Blogs</a>
          </div>

        {/* Right CTA & Mobile Toggle */}
        <div className="flex justify-end items-center">
          <div className="hidden md:block">
            <a 
              href="#contact"
              className="rounded-full border border-text-primary-navy px-6 py-2.5 text-sm font-bold text-text-primary-navy transition-all hover:bg-text-primary-navy hover:text-card-white hover:shadow-sm"
            >
              Let's talk
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-text-primary-navy hover:text-accent-green transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className={`absolute top-full left-0 w-full border-b border-border-light-gray bg-card-white px-6 py-8 shadow-lg md:hidden animate-in fade-in slide-in-from-top-5 duration-200 ${
          isScrolled ? "rounded-3xl mt-2 border border-border-light-gray" : ""
        }`}>
          <div className="flex flex-col gap-5 font-sans text-base font-semibold text-text-primary-navy">
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-accent-green transition-colors"
            >
              About
            </a>
            <a 
              href="#portfolio" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-accent-green transition-colors"
            >
              Portfolio
            </a>
            <a 
              href="#tech-stack" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-accent-green transition-colors"
            >
              Tech Stack
            </a>
            <a 
              href="#mindset" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-accent-green transition-colors"
            >
              Mindset
            </a>
            <a 
              href="#tweets" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-accent-green transition-colors"
            >
              Tweets
            </a>
            <a 
              href="#blogs" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-accent-green transition-colors"
            >
              Blogs
            </a>
            <hr className="border-border-light-gray" />
            <a 
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full rounded-full bg-text-primary-navy py-3 text-center text-sm font-semibold text-card-white hover:bg-accent-green transition-colors"
            >
              Let's talk
            </a>
          </div>
        </div>
      )}
      </nav>
    </div>
  );
}
