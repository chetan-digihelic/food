import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/hero-bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-green-400 font-medium tracking-wider uppercase mb-4 text-lg">
              Authentic. Organic. Homemade.
            </h2>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight mb-6">
              Experience the Taste of Pure Tradition from <span className="text-green-400">Samruddhi Gruh Udyog</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl">
              Bringing you the finest selection of organic spices, homemade snacks, and traditional flours. 
              Grown with love, processed with care, and delivered to your doorstep.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#products" 
                className="bg-green-600 hover:bg-green-700 text-white text-center px-8 py-4 rounded-full text-lg font-medium transition-all transform hover:scale-105"
              >
                Explore Products
              </a>
              <a 
                href="#about" 
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white text-center px-8 py-4 rounded-full text-lg font-medium transition-all"
              >
                Our Story
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] fill-white">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.43,147.3,126,221.33,111.41,269.83,101.89,294.59,61.47,321.39,56.44Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
