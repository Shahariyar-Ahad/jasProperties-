"use client"
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-[#0F1115] text-white px-6 text-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-xl"
      >
        <div className="text-6xl mb-6">⚠️</div>
        <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">
          Something went wrong!
        </h2>
        <p className="text-slate-400 mb-10 text-lg leading-relaxed">
          An unexpected error occurred. Our team has been notified. 
          Please try refreshing the page.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <motion.button
            onClick={() => reset()}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black px-10 py-4 rounded-2xl font-bold uppercase tracking-widest transition-all shadow-xl"
          >
            Try Again
          </motion.button>

          <motion.button
            onClick={() => window.location.href = '/'}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent border border-white/20 hover:bg-white/5 text-white px-10 py-4 rounded-2xl font-bold uppercase tracking-widest transition-all"
          >
            Go Home
          </motion.button>
        </div>
      </motion.div>

      {/* Background Glow */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-orange-900/10 to-transparent pointer-events-none" />
    </div>
  );
}