"use client"
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-[#0F1115] text-white px-6">
      {/* 404 Text Animation */}
      <motion.h1 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-[120px] md:text-[200px] font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-orange-600 to-base-100 opacity-20 absolute"
      >
        404
      </motion.h1>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">
          Oops! Page Not Found
        </h2>
        <p className="text-slate-400 max-w-md mx-auto mb-10 text-lg">
          The page you are looking for might have been removed or is temporarily unavailable.
        </p>

        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-4 rounded-2xl font-bold uppercase tracking-widest transition-all shadow-lg shadow-orange-900/20"
          >
            Back to Home
          </motion.button>
        </Link>
      </motion.div>

      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-orange-600/10 blur-[100px] pointer-events-none" />
    </div>
  );
}