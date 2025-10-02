// src/components/Header.tsx
"use client" ;
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Header = () => {
  const [isDestinationsOpen, setIsDestinationsOpen] = useState(false);

  const destinations = [
    { name: 'Rwanda', href: '/destinations/rwanda' },
    { name: 'Tanzania', href: '/destinations/tanzania' },
    { name: 'Kenya', href: '/destinations/kenya' },
    { name: 'Zanzibar', href: '/destinations/zanzibar' },
  ];

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 p-4 md:p-6 transition-colors duration-300 ${scrolled ? 'bg-black/60 backdrop-blur' : 'bg-transparent'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white">
          <div className="flex items-center space-x-2">
            {/* Replace with your actual SVG logo or Image component */}
            <span className="font-serif text-xl font-bold">SAFARI</span>
            <span className="font-serif text-xl">INTO AFRICA</span>
          </div>
        </Link>
        <nav className="hidden md:flex space-x-8 text-white uppercase tracking-widest text-sm">
          <div className="relative group">
            <button
              className="hover:text-brand-primary transition-colors flex items-center space-x-1"
              onMouseEnter={() => setIsDestinationsOpen(true)}
              onMouseLeave={() => setIsDestinationsOpen(false)}
            >
              <span>Destinations</span>
              <svg 
                className={`w-4 h-4 transition-transform ${isDestinationsOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Dropdown Menu */}
            <div 
              className={`absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 transition-all duration-200 ${
                isDestinationsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}
              onMouseEnter={() => setIsDestinationsOpen(true)}
              onMouseLeave={() => setIsDestinationsOpen(false)}
            >
              {destinations.map((destination) => (
                <Link
                  key={destination.name}
                  href={destination.href}
                  className="block px-4 py-3 text-gray-800 hover:bg-gray-100 hover:text-brand-primary transition-colors first:rounded-t-lg last:rounded-b-lg"
                >
                  {destination.name}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/hotels" className="hover:text-brand-primary transition-colors">Hotels</Link>
          <Link href="/about" className="hover:text-brand-primary transition-colors">About</Link>
          <Link href="/contact" className="hover:text-brand-primary transition-colors">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;