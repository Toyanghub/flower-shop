import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJub25lIiBzdHJva2U9IiNmY2U3ZjMiIHN0cm9rZS13aWR0aD0iMiIvPjwvc3ZnPg==')] opacity-10"></div>

      <div className="container mx-auto px-6 py-24 md:py-32">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="font-display text-5xl md:text-7xl text-gray-800 mb-6">
              Artisanal Floral Poetry
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
              Curated blooms that tell your story with elegance and grace. Each
              arrangement is a masterpiece of nature's finest offerings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="px-8 py-4 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-all duration-300 shadow-lg hover:shadow-xl">
                Shop Collection
              </button>
              <button className="px-8 py-4 border-2 border-primary-500 text-primary-500 rounded-full hover:bg-primary-50 transition-all duration-300">
                Book Consultation
              </button>
            </div>
          </div>

          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1558442074-3c19857bc1dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Beautiful flower arrangement"
              className="rounded-[2rem] shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
