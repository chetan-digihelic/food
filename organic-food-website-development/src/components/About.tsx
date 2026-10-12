import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Users, ShieldCheck, Zap } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-green-600" />,
      title: "Purity Guaranteed",
      desc: "Every product is 100% natural, organic, and free from any synthetic chemicals or additives."
    },
    {
      icon: <Users className="w-6 h-6 text-green-600" />,
      title: "Locally Sourced",
      desc: "We work directly with local farmers to ensure the highest quality ingredients for our products."
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-600" />,
      title: "Traditional Methods",
      desc: "We follow age-old processing techniques that preserve the natural nutrients and authentic taste."
    },
    {
      icon: <Zap className="w-6 h-6 text-green-600" />,
      title: "Freshly Made",
      desc: "Our products are made in small batches to ensure you always get the freshest supply."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=800" 
                alt="Our Tradition" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-green-100 rounded-3xl -z-10 hidden md:block" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-yellow-100 rounded-full -z-10 hidden md:block" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">Our Story & Commitment</h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Samruddhi Gruh Udyog started with a simple vision: to bring the authentic taste of rural India back to modern kitchens while promoting a healthy, organic lifestyle. We believe that what we eat defines who we are, and that's why we never compromise on quality.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex flex-col gap-3">
                  <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{feature.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
