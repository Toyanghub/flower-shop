import React, { useState } from "react";
import { MenuIcon, ShoppingBagIcon, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      setIsMenuOpen(false);
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "Shop", id: "products" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-display text-primary-600">
            Bloom & Petal
          </h1>

          <nav className="hidden md:flex space-x-12">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-600 hover:text-primary-500 transition-colors duration-300 text-sm uppercase tracking-wider cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-6">
            <button className="p-2 text-gray-600 hover:text-primary-500 transition-colors duration-300">
              <ShoppingBagIcon size={20} />
            </button>
            <button
              className="p-2 text-gray-600 hover:text-primary-500 transition-colors duration-300 md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <MenuIcon size={20} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100">
          <div className="container mx-auto px-6 py-6 flex flex-col space-y-6">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-600 hover:text-primary-500 transition-colors duration-300 text-sm uppercase tracking-wider text-left"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
