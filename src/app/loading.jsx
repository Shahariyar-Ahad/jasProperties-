"use client"
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0F1115]">
      <div className="relative flex flex-col items-center">
        
        {/* Outer Pulsing Circle */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-32 h-32 bg-orange-600/10 rounded-full blur-2xl"
        />

        {/* Animated Logo/Symbol Placeholder */}
        <div className="relative w-24 h-24 flex items-center justify-center">
          {/* Spinning Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="w-full h-full border-4 border-t-orange-600 border-r-transparent border-b-white/5 border-l-transparent rounded-full shadow-[0_0_15px_rgba(192,86,33,0.3)]"
          />
          
          {/* Static Center Text (JAS) */}
          <div className="absolute font-black text-white tracking-tighter text-xl">
            JAS
          </div>
        </div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-8 flex flex-col items-center gap-2"
        >
          <span className="text-white font-bold tracking-[0.3em] uppercase text-sm animate-pulse">
            Loading
          </span>
          <div className="flex gap-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -5, 0],
                  backgroundColor: ["#C05621", "#ffffff", "#C05621"]
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
                className="w-1.5 h-1.5 rounded-full"
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Decorative Blur in Background */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-900/5 rounded-full blur-[120px]" />
      </div>
    </div>
  );
}