import React from 'react';
import { MapPinIcon, PhoneIcon, ClockIcon, MailIcon } from 'lucide-react';
const ContactSection = () => {
  return <section id="contact" className="w-full bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-4">
            Visit Our Shop
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We'd love to help you find the perfect flowers for any occasion
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-rose-50 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-serif text-gray-800 mb-6">
              Get In Touch
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPinIcon className="text-rose-600 mr-4 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Address</h4>
                  <p className="text-gray-600">
                    123 Blossom Street, Flowertown, FT 12345
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <PhoneIcon className="text-rose-600 mr-4 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Phone</h4>
                  <p className="text-gray-600">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start">
                <MailIcon className="text-rose-600 mr-4 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Email</h4>
                  <p className="text-gray-600">hello@bloomandpetal.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <ClockIcon className="text-rose-600 mr-4 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Hours</h4>
                  <p className="text-gray-600">Monday - Friday: 9am - 7pm</p>
                  <p className="text-gray-600">Saturday: 10am - 6pm</p>
                  <p className="text-gray-600">Sunday: 11am - 4pm</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-serif text-gray-800 mb-6">
              Send a Message
            </h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500" placeholder="Your email" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea id="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500" placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" className="w-full px-6 py-3 bg-rose-600 text-white rounded-md hover:bg-rose-700 transition-colors duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;