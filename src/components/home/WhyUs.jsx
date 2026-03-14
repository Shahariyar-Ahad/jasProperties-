
"use client";
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaPaintRoller, FaArrowRight } from 'react-icons/fa';

const WhyUs = () => {
    const stats = [
        { label: "Handed Over", value: "02", icon: "/assets/complete.png", color: "from-[#2D3748] to-[#1A202C]" },
        { label: "Running", value: "03", icon: "/assets/underconstruction.webp", color: "from-[#DD6B20] to-[#C05621]" },
        { label: "Upcoming", value: "03", icon: "/assets/complete.png", color: "from-emerald-600 to-emerald-800" },
    ];

    return (
        <section className="py-24 px-6 md:px-12 bg-[#F8FAFC] overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    
                    {/* Left Side: Content Area */}
                    <div className="flex-1 space-y-10">
                        <motion.div 
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="space-y-6"
                        >
                            <div className="inline-flex items-center gap-2 px-5 py-2 bg-[#C05621]/10 text-[#C05621] rounded-full text-xs font-bold tracking-widest uppercase border border-[#C05621]/20">
                                <span className="w-2 h-2 bg-[#C05621] rounded-full animate-ping"></span>
                                Why Choose JAS Properties
                            </div>
                            
                            <h2 className="text-5xl md:text-6xl font-extrabold text-[#1A202C] leading-[1.1]">
                                More Than Just Buildings, <br />
                                <span className="text-[#C05621]">We Design Lifestyle.</span>
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                                At JAS Properties, we blend architectural excellence with bespoke interior artistry. Whether it's a prime real estate investment or transforming your space into a masterpiece, we deliver quality that inspires.
                            </p>
                        </motion.div>

                        {/* Service Cards */}
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="p-8 bg-white rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all group">
                                <div className="w-14 h-14 bg-[#C05621] text-white rounded-2xl flex items-center justify-center mb-6 text-2xl shadow-lg shadow-orange-200">
                                    <FaBuilding />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Real Estate Development</h3>
                                <p className="text-slate-500 text-sm mb-4">Crafting premium residential and commercial spaces with high ROI.</p>
                            </div>

                            <div className="p-8 bg-white rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all group">
                                <div className="w-14 h-14 bg-emerald-600 text-white rounded-2xl flex items-center justify-center mb-6 text-2xl shadow-lg shadow-emerald-200">
                                    <FaPaintRoller />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Bespoke Interior Design</h3>
                                <p className="text-slate-500 text-sm mb-4">Innovative interior solutions tailored to your unique taste and comfort.</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Stats Grid */}
                    <div className="lg:w-[450px] w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                className={`relative overflow-hidden group h-48 bg-gradient-to-br ${stat.color} rounded-[2.5rem] p-8 flex items-center gap-6 text-white shadow-xl hover:-translate-y-2 transition-all duration-500`}
                            >
                                <div className="relative z-10">
                                    <p className="text-5xl font-light tracking-tighter">{stat.value}</p>
                                    <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-80 mt-1">{stat.label}</p>
                                </div>
                                
                                <div className="absolute right-[-20px] bottom-[-20px] opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-700">
                                    <Image 
                                        src={stat.icon} 
                                        alt={stat.label} 
                                        width={150} 
                                        height={150} 
                                        className={stat.label === "Running" ? "" : "brightness-0 invert"}
                                    />
                                </div>

                                <div className="absolute top-8 right-8">
                                    <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                                        <FaArrowRight className="-rotate-45" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyUs;