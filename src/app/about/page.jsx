"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const About = () => {
  return (
    <div className="w-full bg-base-100 text-base-content min-h-screen">

      {/* ================= HERO SECTION ================= */}
      <div className="relative w-full h-[60vh] md:h-[75vh] overflow-hidden">
        <Image
          src="/assets/about.jpg"   
          alt="JAS Properties Banner"
          fill
          priority
          className="object-cover opacity-70"
        />

        {/* Overlay with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-base-100 via-black/40 to-transparent flex items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-white text-4xl md:text-7xl font-black tracking-tighter uppercase">
              Building Communities
            </h1>
            <p className="text-slate-300 mt-6 text-lg md:text-xl max-w-2xl mx-auto font-medium tracking-wide">
              Premium living spaces in Uttara, Dhaka designed for comfort, 
              convenience, and community.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ================= ABOUT SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tight">
            About <span className="text-orange-600">JAS Properties</span> Ltd
          </h2>

          <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
            Our dedicated management team is committed to providing exceptional tenant
            services and ensuring your home remains a sanctuary. Whether you are
            looking for a studio or a family-sized layout, our properties are located
            near major transit hubs and local dining. We don’t just rent apartments —
            we build communities.
          </p>
        </motion.div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="bg-base-200 py-24 px-6 border-y border-white/5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

          <motion.div
            whileHover={{ y: -5 }}
            className="p-12 rounded-[2.5rem] shadow-2xl bg-[#1A1D23] border border-white/5 transition-all duration-300 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                 <h2 className="text-8xl font-black">01</h2>
            </div>
            <h3 className="text-3xl font-black mb-6 text-white tracking-tight">Our Mission</h3>
            <p className="text-slate-400 text-lg leading-relaxed">
              To provide premium quality residential spaces with modern amenities,
              strategic locations, and professional management services.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="p-12 rounded-[2.5rem] shadow-2xl bg-gradient-to-br from-orange-600 to-orange-800 text-white transition-all duration-300"
          >
            <h3 className="text-3xl font-black mb-6 tracking-tight">Our Vision</h3>
            <p className="text-orange-50 text-lg leading-relaxed">
              To become one of Dhaka’s most trusted and innovative real estate
              developers, known for building sustainable and community-driven
              properties.
            </p>
          </motion.div>

        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-24 px-6 bg-base-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-16 tracking-tight">
            Why Choose Us?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                title: "Prime Location",
                icon: "📍",
                desc: "Located in Uttara Diabari near major transit hubs like the Metro Rail."
              },
              {
                title: "Premium Management",
                icon: "🛡️",
                desc: "Professional support ensuring a safe and hassle-free living experience."
              },
              {
                title: "Community Focused",
                icon: "🤝",
                desc: "We focus on creating safe, connected, and vibrant residential communities."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-base-200 p-10 rounded-[2rem] border border-white/5 hover:border-orange-600/30 transition-all duration-500 group shadow-lg"
              >
                <div className="text-4xl mb-6">{item.icon}</div>
                <h4 className="text-2xl font-bold mb-4 group-hover:text-orange-500 transition-colors">
                  {item.title}
                </h4>
                <p className="text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= CALL TO ACTION SECTION ================= */}
      <section className="bg-gradient-to-r from-base-200 to-[#121418] text-white py-24 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tight">
            Ready to Find Your <span className="text-orange-600">Perfect Home?</span>
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12 text-slate-400 font-medium">
             <div className="flex items-center gap-2">📍 Uttara Diabari, Dhaka</div>
             <div className="hidden md:block w-1 h-1 bg-slate-600 rounded-full"></div>
             <div className="flex items-center gap-2">📞 01601-230769</div>
          </div>

          <button className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest transition-all duration-300 shadow-xl shadow-orange-900/20 active:scale-95">
            Schedule a Viewing
          </button>
        </div>
      </section>

    </div>
  )
}

export default About