"use client";
import React from "react";
import Image from "next/image";
import { FaArrowRight, FaHome, FaBriefcase, FaGem, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion"; // এনিমেশনের জন্য এটি ব্যবহার করা ভালো
import Link from "next/link";

const Interior = () => {
  const designs = [
    {
      title: "Luxury Living Room",
      image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1000&auto=format&fit=crop",
      details: "Modern aesthetic with premium lighting and comfort-focused furniture.",
      why: "Perfect for family gatherings and making a great first impression on guests.",
      cost: "Starts from 1500 BDT/sqft",
    },
    {
      title: "Executive Office Design",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop",
      details: "Minimalist and ergonomic workspace to boost productivity and focus.",
      why: "Creates a professional environment that reflects your company identity.",
      cost: "Starts from 1200 BDT/sqft",
    },
    {
      title: "Arabian Majlis Design",
      image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=1000&auto=format&fit=crop",
      details: "Rich textures, warm colors, and traditional seating arrangements.",
      why: "Best for those who love cultural heritage and grand social spaces.",
      cost: "Starts from 2000 BDT/sqft",
    },
    {
      title: "European Classic Design",
      image: "https://images.unsplash.com/photo-1767050321604-a2654be8fad0?q=80&w=735&auto=format&fit=crop",
      details: "Elegant Victorian patterns with sophisticated marble and woodwork.",
      why: "Offers a timeless, royal look that never goes out of fashion.",
      cost: "Starts from 2500 BDT/sqft",
    },
    {
      title: "Modern Rooftop Garden",
      image: "https://images.pexels.com/photos/28505076/pexels-photo-28505076.jpeg",
      details: "Sustainable green spaces with cozy lounge and ambient lighting.",
      why: "A peaceful escape from city life right above your head.",
      cost: "Starts from 800 BDT/sqft",
    },
    {
      title: "Premium Bathroom Design",
      image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=1000&auto=format&fit=crop",
      details: "Spa-like ambiance with high-end fixtures and smart automation.",
      why: "Ensures maximum relaxation and hygiene in a luxurious way.",
      cost: "Starts from 1800 BDT/sqft",
    },
    {
      title: "Traditional Desi Interior",
      image: "https://images.unsplash.com/photo-1759065662057-0c008c001d8d?q=80&w=736&auto=format&fit=crop",
      details: "Use of local jute, teak wood, and terracotta accents.",
      why: "Gives a warm, homely feel with 100% authentic Bengali heritage.",
      cost: "Starts from 1000 BDT/sqft",
    },
    {
      title: "Grand Hall Room",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000&auto=format&fit=crop",
      details: "Large-scale ceiling work with acoustic wall paneling.",
      why: "Designed for spacious luxury and better sound management.",
      cost: "Starts from 1400 BDT/sqft",
    },
    {
      title: "Minimalist Studio Design",
      image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1000&auto=format&fit=crop",
      details: "Neutral colors and multi-functional space-saving furniture.",
      why: "Best for smaller apartments to make them look spacious and clean.",
      cost: "Starts from 900 BDT/sqft",
    },
  ];

  return (
    <div className="bg-base-100 min-h-screen text-base-content">
      {/* Hero Section */}
      <section className="relative py-32 px-6 bg-[#111827] overflow-hidden border-b border-white/5">
  
  {/* Background Decorative Mesh Glow - এটি কালারকে আরও ফুটিয়ে তুলবে */}
  <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-600/10 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/5 blur-[120px] rounded-full"></div>
  </div>

  {/* Texture Overlay */}
  <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

  <div className="max-w-7xl mx-auto text-center relative z-10">
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="inline-block px-4 py-1.5 mb-6 rounded-full bg-orange-600/10 border border-orange-600/20 text-orange-500 text-xs font-black uppercase tracking-[0.3em]"
    >
      Premium Interior Design
    </motion.div>

    <h1 className="text-4xl md:text-8xl font-black text-white mb-6 uppercase tracking-tighter leading-none">
      Crafting Your <span className="text-orange-600 drop-shadow-[0_0_15px_rgba(234,88,12,0.3)]">Dream Spaces</span>
    </h1>

    <p className="text-slate-300 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-medium">
      Elevate your lifestyle with our premium interior solutions. From traditional heritage to modern minimalism, we design with passion.
    </p>
    
    <div className="mt-10 flex flex-col items-center gap-4">
       <div className="h-1.5 w-24 bg-orange-600 rounded-full shadow-[0_0_15px_rgba(234,88,12,0.5)]"></div>
    </div>
  </div>
</section>

      {/* Cards Section */}
      <section className="max-w-7xl mx-auto py-24 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {designs.map((item, index) => (
            <div 
              key={index} 
              className="group bg-base-200 rounded-[2.5rem] overflow-hidden shadow-2xl hover:shadow-orange-900/10 transition-all duration-500 border border-white/5 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-80 w-full overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                {/* Cost Badge */}
                <div className="absolute top-6 right-6 bg-orange-600 text-white px-5 py-2 rounded-2xl text-xs font-black uppercase tracking-widest shadow-xl">
                  {item.cost}
                </div>
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-base-200 via-transparent to-transparent opacity-60"></div>
              </div>

              {/* Content Area */}
              <div className="p-10 flex-grow">
                <h3 className="text-2xl font-black text-white mb-4 group-hover:text-orange-500 transition-colors tracking-tight uppercase">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  {item.details}
                </p>
                
                {/* Why Section Card */}
                <div className="bg-base-100/50 border border-white/5 p-5 rounded-2xl">
                  <p className="text-[10px] font-black uppercase text-orange-600 mb-2 tracking-[0.2em]">Why this design?</p>
                  <p className="text-sm text-slate-300 font-medium italic leading-snug">"{item.why}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="bg-base-200 border-t border-white/5 py-24 px-6 text-center relative overflow-hidden">
        {/* Glow Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-orange-600/5 blur-[100px] rounded-full"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-8 text-white uppercase tracking-tighter">
            Need a <span className="text-orange-600">Custom Design</span> Solution?
          </h2>
          <p className="text-slate-400 mb-12 text-lg">Our experts are ready to transform your vision into reality.</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {/* Contact Page Link */}
            <Link href="/contact" className="w-full sm:w-auto">
              <button className="w-full bg-orange-600 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-orange-700 transition-all shadow-xl shadow-orange-900/20 active:scale-95 flex items-center justify-center gap-3">
                Book a Measurement <FaArrowRight />
              </button>
            </Link>

            {/* Email Button */}
            <a href="mailto:jasproperties7@gmail.com" className="w-full sm:w-auto">
              <button className="w-full border-2 border-white/10 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2 active:scale-95">
                <FaEnvelope /> <span>Send Email</span>
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Interior;