import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import About from './components/About';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <ProductList />
        <About />
        
        {/* Call to Action Section */}
        <section className="py-20 bg-green-600">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
              Ready to Taste the Organic Difference?
            </h2>
            <p className="text-xl mb-10 text-green-50 opacity-90">
              Order our homemade products today and bring health and flavor to your family's table.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href="https://wa.me/?text=Hi, I want to inquire about your products" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-green-700 px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all shadow-xl"
              >
                Order via WhatsApp
              </a>
              <a 
                href="#contact" 
                className="bg-green-700 text-white border border-green-500 px-8 py-4 rounded-full text-lg font-bold hover:bg-green-800 transition-all"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
