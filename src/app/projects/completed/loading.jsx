"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100">

      <div className="flex flex-col items-center gap-6">

        {/* Animated Spinner */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className="w-14 h-14 border-4 border-orange-600 border-t-transparent rounded-full"
        />

        {/* Loading Text */}
        <motion.p
          initial={{ opacity: 0.3 }}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-slate-400 font-bold uppercase tracking-widest text-sm"
        >
          Loading  Page...
        </motion.p>

      </div>
    </div>
  );
}