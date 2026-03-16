
"use client";
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaPaintRoller, FaArrowRight } from 'react-icons/fa';

const WhyUs = () => {
    const stats = [
        { label: "Handed Over", value: "02", icon: "/assets/complete.png", color: "from-slate-800 to-slate-950" },
        { label: "Running", value: "03", icon: "/assets/underconstruction.webp", color: "from-orange-600 to-orange-800" },
        { label: "Upcoming", value: "03", icon: "/assets/complete.png", color: "from-blue-900 to-slate-900" },
    ];

    return (
        <section className="py-24 px-6 md:px-12 bg-base-100 overflow-hidden relative">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] h-[300px] bg-orange-600/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    
                    {/* Left Side: Content Area */}
                    <div className="flex-1 space-y-10">
                        <motion.div 
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6 text-center lg:text-left"
                        >
                            <div className="inline-flex items-center gap-2 px-5 py-2 bg-orange-600/10 text-orange-500 rounded-full text-xs font-black tracking-[0.2em] uppercase border border-orange-600/20">
                                <span className="w-2 h-2 bg-orange-600 rounded-full animate-pulse"></span>
                                Why Choose JAS Properties
                            </div>
                            
                            <h2 className="text-4xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter uppercase">
                                More Than Buildings, <br />
                                <span className="text-orange-600 drop-shadow-xl">We Design Lifestyle.</span>
                            </h2>
                            <p className="text-lg text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
                                At JAS Properties, we blend architectural excellence with bespoke interior artistry. We deliver quality that inspires and investments that grow.
                            </p>
                        </motion.div>

                        {/* Service Cards */}
                        <div className="grid sm:grid-cols-2 gap-6">
                            <motion.div 
                                whileHover={{ y: -10 }}
                                className="p-8 bg-base-200 rounded-[2.5rem] border border-white/5 hover:border-orange-600/30 transition-all group"
                            >
                                <div className="w-16 h-16 bg-white/5 text-orange-600 rounded-2xl flex items-center justify-center mb-8 text-3xl border border-white/10 group-hover:bg-orange-600 group-hover:text-white transition-all duration-500 shadow-2xl">
                                    <FaBuilding />
                                </div>
                                <h3 className="text-xl font-black text-white mb-3 uppercase tracking-tight">Real Estate Development</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">Crafting premium residential and commercial spaces with high-value ROI.</p>
                            </motion.div>

                            <motion.div 
                                whileHover={{ y: -10 }}
                                className="p-8 bg-base-200 rounded-[2.5rem] border border-white/5 hover:border-blue-600/30 transition-all group"
                            >
                                <div className="w-16 h-16 bg-white/5 text-blue-500 rounded-2xl flex items-center justify-center mb-8 text-3xl border border-white/10 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                                    <FaPaintRoller />
                                </div>
                                <h3 className="text-xl font-black text-white mb-3 uppercase tracking-tight">Bespoke Interior Art</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">Innovative interior solutions tailored to your unique taste and comfort.</p>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Side: Stats Grid */}
                    <div className="lg:w-[480px] w-full grid grid-cols-1 gap-6">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 0.6 }}
                                className={`relative overflow-hidden group h-44 bg-gradient-to-br ${stat.color} rounded-[2.5rem] p-8 flex items-center gap-8 text-white border border-white/10 shadow-2xl hover:shadow-orange-900/20 transition-all duration-500`}
                            >
                                <div className="relative z-10">
                                    <p className="text-6xl font-black tracking-tighter leading-none">{stat.value}</p>
                                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-400 mt-2">{stat.label}</p>
                                </div>
                                
                                <div className="absolute right-[-10px] bottom-[-10px] opacity-10 group-hover:opacity-30 group-hover:scale-125 transition-all duration-1000 grayscale group-hover:grayscale-0">
                                    <Image 
                                        src={stat.icon} 
                                        alt={stat.label} 
                                        width={180} 
                                        height={180} 
                                        className="object-contain"
                                    />
                                </div>

                                <div className="absolute top-8 right-8">
                                    <motion.div 
                                        whileHover={{ scale: 1.2, rotate: 0 }}
                                        className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all cursor-pointer"
                                    >
                                        <FaArrowRight className="-rotate-45" />
                                    </motion.div>
                                </div>

                                {/* Shine Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyUs;