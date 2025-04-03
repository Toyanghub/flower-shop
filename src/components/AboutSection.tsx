import React, { memo } from 'react';
const AboutSection = () => {
  return <section id="about" className="w-full bg-rose-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src="https://images.unsplash.com/photo-1534278931827-8a259344abe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Florist arranging flowers" className="rounded-lg shadow-lg w-full h-auto" />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-6">
              Our Story
            </h2>
            <p className="text-gray-600 mb-6">
              Founded in 2010, Bloom & Petal began with a simple passion for
              bringing nature's beauty into everyday life. Our founder, Emma
              Rose, turned her childhood fascination with flowers into a
              thriving business dedicated to creating memorable floral
              experiences.
            </p>
            <p className="text-gray-600 mb-6">
              Today, our team of skilled florists combines artistry and
              expertise to craft arrangements that tell your story. We source
              the freshest blooms from local and international growers who share
              our commitment to sustainability and quality.
            </p>
            <p className="text-gray-600">
              Every arrangement that leaves our shop is created with care,
              creativity, and attention to detail. We believe flowers have the
              power to transform spaces and touch hearts.
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;