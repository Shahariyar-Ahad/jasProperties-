"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const Banner = () => {
  const slides = [
    {
      image: "/assets/banner1.jpg",
      title: "Welcome to JAS Properties",
      subtitle: "Experience premium living in the heart of the city"
    },
    {
      image: "/assets/banner2.jpg",
      title: "Unlocking Your Dream Home",
      subtitle: "Exclusive properties tailored to your lifestyle and comfort"
    },
    {
      image: "/assets/banner4.jpg",
      title: "Where Luxury Meets Comfort",
      subtitle: "Experience a perfect blend of modern minimalism and timeless elegance, designed to be your ultimate sanctuary"
    }
  ]

  const [index, setIndex] = useState(0)

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [index])

  return (
    <section className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden bg-neutral-900 rounded-4xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Image - object-cover ensures no black margins */}
          <Image
            src={slides[index].image}
            alt={slides[index].title}
            fill
            className="object-cover transition-transform duration-[5000ms] scale-100"
            priority
          />

          {/* Premium Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent flex flex-col justify-center px-6 md:px-24">
            <div className="max-w-3xl">
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-4xl md:text-7xl font-extrabold text-white leading-tight mb-4"
              >
                {slides[index].title}
              </motion.h1>

              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-lg md:text-2xl text-gray-200 font-light mb-8 max-w-xl"
              >
                {slides[index].subtitle}
              </motion.p>

              
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Modern Navigation Arrows */}
      <div className="absolute bottom-10 right-10 flex gap-4 z-20">
        <button
          onClick={prevSlide}
          className="p-3 border border-white/30 text-white rounded-full hover:bg-white hover:text-black transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <button
          onClick={nextSlide}
          className="p-3 border border-white/30 text-white rounded-full hover:bg-white hover:text-black transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </button>
      </div>

      {/* Progress Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <div 
            key={i} 
            className={`h-1 transition-all duration-500 rounded-full ${index === i ? "w-8 bg-white" : "w-2 bg-white/40"}`}
          />
        ))}
      </div>
    </section>
  )
}

export default Banner