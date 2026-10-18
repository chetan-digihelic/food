import React from 'react';
import { Leaf, Mail, Phone, MapPin, MessageCircle, Share2, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Leaf className="h-8 w-8 text-green-500" />
              <span className="text-xl font-bold font-serif text-white">
                Samruddhi Gruh Udyog
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Premium quality organic spices, flours, and snacks. Authentically made with love for your healthy lifestyle.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green-500 transition-colors"><MessageCircle size={20} /></a>
              <a href="#" className="hover:text-green-500 transition-colors"><Share2 size={20} /></a>
              <a href="#" className="hover:text-green-500 transition-colors"><Globe size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-green-500 transition-colors">Home</a></li>
              <li><a href="#products" className="hover:text-green-500 transition-colors">All Products</a></li>
              <li><a href="#about" className="hover:text-green-500 transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-green-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-green-500 shrink-0 mt-1" size={18} />
                <span>Plot No.12, Near Jijabai School, Wani Galli, 
                      At Post: Neri, Tal: Pachora, Dist: Jalgaon-424104,
                      Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-green-500 shrink-0" size={18} />
                <span>+91 75880 08588 /
                          75880 08590
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-green-500 shrink-0" size={18} />
                <span>info@samruddhigruhudyog.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Stay Updated</h3>
            <p className="text-sm text-gray-400 mb-4">Subscribe to our newsletter for new product launches and health tips.</p>
            <form className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-gray-800 border-none rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
              />
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded-lg transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Samruddhi Gruh Udyog. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
