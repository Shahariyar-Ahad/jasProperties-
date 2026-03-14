"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCogs, FaHardHat, FaAward, FaUsers, FaBuilding } from 'react-icons/fa';
import Image from 'next/image';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* 1. Navbar */}
      

      <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-base-100">
  {/* Background Decorative Glow */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-600/10 blur-[120px] rounded-full pointer-events-none" />

  <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
    <motion.div 
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
      className="inline-flex items-center gap-2 px-5 py-2 bg-white/5 text-orange-500 rounded-full text-xs font-black uppercase tracking-[0.2em] border border-white/10 mb-8"
    >
      <span className="w-2 h-2 bg-orange-600 rounded-full animate-pulse" />
      Riyadh, Saudi Arabia Based 
    </motion.div>

    <motion.h1 
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
      className="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-8 uppercase"
    >
      Aluminum & Steel <br />
      <span className="text-orange-600">Fabrication Excellence.</span> 
    </motion.h1>

    <motion.p 
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
      className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed mb-10 font-medium"
    >
      TASHKEEL provides durable, customized, and site-ready solutions for construction companies and developers across Saudi Arabia. 
    </motion.p>

    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
      <button className="bg-orange-600 text-white px-10 py-5 rounded-2xl font-black hover:bg-orange-700 transition-all shadow-2xl shadow-orange-900/20 flex items-center gap-3 active:scale-95 uppercase tracking-widest text-sm group">
        Explore Our Services <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
      </button>
    </motion.div>
  </div>
</section>

      {/* 4. Services Section */}
<section id="services" className="py-24 px-4 md:px-6 bg-base-100 text-base-content">
  <div className="max-w-7xl mx-auto">
    <div className="mb-16 text-center md:text-left">
      <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-orange-600 mb-4">Our Expertise</h3>
      <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">
        Site-Ready <span className="text-orange-600">Solutions.</span>
      </h2>
    </div>
    
    {/* Grid: Mobile (2 cols), Desktop (3 cols) */}
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-10">
      {[
        { 
          title: "Aluminum Fabrication", 
          desc: "High-grade aluminum doors, windows, and profiles designed for durability.", 
          icon: <FaCogs />,
          img: "/assets/Aluminum Fabrication.jpg" 
        },
        { 
          title: "Steel Solutions", 
          desc: "Expert structural steel works and frames built for industrial safety.", 
          icon: <FaBuilding />,
          img: "/assets/Steel Solutions.jpg" 
        },
        { 
          title: "Glass Installations", 
          desc: "Professional installation of tempered glass for façades and railings.", 
          icon: <FaHardHat />,
          img: "/assets/Glass Installations.jpg" 
        },
        { 
          title: "Partitions & Profiles", 
          desc: "Custom interior aluminum partitions tailored for commercial spaces.", 
          icon: <FaUsers />,
          img: "/assets/Partitions & Profiles.jpg" 
        },
        { 
          title: "Custom Metal Work", 
          desc: "Bespoke fabrication for unique architectural decorative elements.", 
          icon: <FaAward />,
          img: "/assets/Custom Metal Work.jpg" 
        }
      ].map((service, idx) => (
        <div key={idx} className="bg-base-200 rounded-2xl md:rounded-[2.5rem] border border-white/5 overflow-hidden hover:border-orange-600/30 transition-all group shadow-xl">
          {/* Service Image Slot */}
          <div className="h-32 md:h-56 w-full relative overflow-hidden bg-slate-800">
             <Image 
               src={service.img} 
               alt={service.title} 
               fill 
               className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-70 group-hover:opacity-100"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-base-200 via-transparent to-transparent" />
          </div>

          <div className="p-4 md:p-10">
            {/* Icon: Mobile-এ ছোট করা হয়েছে */}
            <div className="text-2xl md:text-4xl text-orange-600 mb-3 md:mb-6 group-hover:scale-110 transition-transform duration-300 origin-left">
                {service.icon}
            </div>
            
            <h4 className="text-sm md:text-2xl font-black text-white mb-2 md:mb-4 tracking-tight group-hover:text-orange-500 transition-colors">
                {service.title}
            </h4>
            
            <p className="text-[10px] md:text-base text-slate-400 leading-relaxed line-clamp-2 md:line-clamp-none">
                {service.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* 5. Products Section */}
{/* 5. Products Section */}
<section id="products" className="py-24 px-4 md:px-6 bg-base-100 text-base-content">
  <div className="max-w-7xl mx-auto">
    {/* Header Section */}
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-6xl font-black tracking-tighter mb-4 uppercase text-white">
        Quality <span className="text-orange-600">Products.</span>
      </h2>
      <div className="h-1 w-16 md:w-24 bg-orange-600 mx-auto rounded-full mb-6"></div>
      <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-lg px-4">
        Precision-engineered fabrication from our Riyadh factory, delivering excellence in every detail.
      </p>
    </div>

    {/* Grid System: Mobile (2 columns), Tablet (2 columns), Desktop (4 columns) */}
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
      {[
        { name: "Aluminium Doors", info: "Heat-resistant profiles.", img: "/assets/Aluminium Doors & Windows.jpg" },
        { name: "Curtain Walls", info: "Modern glass façade systems.", img: "/assets/Curtain Walls.jpg" },
        { name: "Steel Railings", info: "Safety-certified structures.", img: "/assets/Steel Railings & Handrails.jpg" },
        { name: "Structural Frames", info: "Heavy-duty steel frames.", img: "/assets/Structural Steel Frames.jpg" },
        { name: "Glass Staircases", info: "Architectural glass solutions.", img: "/assets/Glass Staircases.jpg" },
        { name: "Steel Gates", info: "Customized security fencing.", img: "/assets/Steel Gates & Fencing.jpg" },
        { name: "Sliding Doors", info: "Smooth-glide systems.", img: "/assets/Sliding Doors.jpg" },
        { name: "Wooden Interior", info: "Premium wood-finish doors.", img: "/assets/Wooden Interior Doors.jpg" }
      ].map((product, idx) => (
        <div key={idx} className="bg-base-200 border border-white/5 rounded-2xl md:rounded-[2rem] overflow-hidden group hover:border-orange-600/50 transition-all duration-500 shadow-xl">
          
          {/* Product Image Slot: Mobile-এ হাইট কিছুটা কমানো হয়েছে (h-32) */}
          <div className="h-32 md:h-56 w-full relative bg-slate-800 overflow-hidden">
             <Image 
               src={product.img} 
               alt={product.name} 
               fill 
               className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-base-200 via-transparent to-transparent opacity-60"></div>
          </div>

          {/* Content: Mobile-এ প্যাডিং কমানো হয়েছে (p-4) */}
          <div className="p-4 md:p-8">
            <h4 className="font-bold text-xs md:text-lg tracking-tight text-white group-hover:text-orange-500 transition-colors mb-1 md:mb-3 line-clamp-1">
              {product.name}
            </h4>
            <p className="text-[10px] md:text-sm text-slate-400 leading-tight md:leading-relaxed line-clamp-2">
              {product.info}
            </p>
            
            {/* View Details Label: মোবাইলে হাইড করা আছে, বড় স্ক্রিনে দেখাবে */}
            <div className="mt-4 hidden md:flex items-center gap-2 text-orange-600 font-bold text-xs uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
               Details <span>→</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* 6. Contact Section */}
    <section id="contact" className="py-24 px-6 bg-base-100">
  <div className="max-w-4xl mx-auto bg-base-200 p-8 md:p-16 rounded-[3rem] shadow-2xl border border-white/5 text-center relative overflow-hidden">
    
    {/* Decorative Glow */}
    <div className="absolute -top-24 -right-24 w-48 h-48 bg-orange-600/10 blur-[80px] rounded-full" />

    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter uppercase">
      Ready to Start <br className="hidden md:block" /> Your Project?
    </h2>
    <p className="text-slate-400 mb-10 max-w-lg mx-auto leading-relaxed text-lg">
      Contact <span className="font-bold text-orange-500">TASHKEEL</span> today for high-quality aluminum and steel fabrication in Saudi Arabia.
    </p>

    {/* Contact Links Grid: Mobile-এ ২ কলাম, বড় স্ক্রিনে ৪ কলাম */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
      
      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/966560996263" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center gap-2 bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20 py-6 rounded-3xl font-bold hover:bg-[#25D366] hover:text-white transition-all duration-300"
      >
        <span className="text-3xl">💬</span> 
        <span className="text-xs uppercase tracking-widest">WhatsApp</span>
      </a>

      {/* Phone Call Button */}
      <a 
        href="tel:+966560996263" 
        className="flex flex-col items-center justify-center gap-2 bg-white/5 text-white border border-white/10 py-6 rounded-3xl font-bold hover:bg-white hover:text-black transition-all duration-300"
      >
        <span className="text-3xl">📞</span>
        <span className="text-xs uppercase tracking-widest">Call Now</span>
      </a>

      {/* Email Button */}
      <a 
        href="mailto:info.tashkeelksa@gmail.com" 
        className="flex flex-col items-center justify-center gap-2 bg-orange-600/10 text-orange-500 border border-orange-600/20 py-6 rounded-3xl font-bold hover:bg-orange-600 hover:text-white transition-all duration-300 shadow-lg shadow-orange-900/10"
      >
        <span className="text-3xl">✉️</span>
        <span className="text-xs uppercase tracking-widest">Email</span>
      </a>

      {/* Website Button */}
      <a 
        href="https://www.tashkeelksa.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center gap-2 bg-blue-600/10 text-blue-400 border border-blue-600/20 py-6 rounded-3xl font-bold hover:bg-blue-600 hover:text-white transition-all duration-300"
      >
        <span className="text-3xl">🌐</span>
        <span className="text-xs uppercase tracking-widest">Visit</span>
      </a>
    </div>

    {/* Location Info */}
    <div className="pt-8 border-t border-white/5 text-slate-500 flex items-center justify-center gap-2 text-sm font-bold tracking-widest uppercase">
      <span className="text-orange-600">📍</span> Riyadh, Saudi Arabia
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-100 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.4em] text-slate-400">
          © {new Date().getFullYear()} TASHKEEL ALUMINUM & STEEL FABRICATION. Riyadh, KSA. 
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;