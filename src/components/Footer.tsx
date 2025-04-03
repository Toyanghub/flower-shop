import React from 'react';
import { InstagramIcon, FacebookIcon, TwitterIcon } from 'lucide-react';
const Footer = () => {
  return <footer className="w-full bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-serif mb-4">Bloom & Petal</h3>
            <p className="text-gray-400 mb-4">
              Bringing nature's beauty to life with handcrafted floral
              arrangements for every occasion.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors duration-300">
                <InstagramIcon size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors duration-300">
                <FacebookIcon size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors duration-300">
                <TwitterIcon size={20} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-4">Shop</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors duration-300">
                  Fresh Bouquets
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors duration-300">
                  Wedding Flowers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors duration-300">
                  Potted Plants
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors duration-300">
                  Luxury Arrangements
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-rose-400 transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors duration-300">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors duration-300">
                  Careers
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-rose-400 transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors duration-300">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors duration-300">
                  Delivery Information
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors duration-300">
                  Returns Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors duration-300">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} Bloom & Petal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;