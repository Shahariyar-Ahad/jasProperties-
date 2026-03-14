"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import Swal from "sweetalert2"

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    // Web3Forms Access Key
    formData.append("access_key", "c0558b3c-99c5-4a6c-9403-8d07632626e2");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setLoading(false);
      Swal.fire({
        title: "Success!",
        text: "Your message has been sent successfully.",
        icon: "success",
        confirmButtonColor: "#C05621",
        background: "#16191E",
        color: "#ffffff"
      });
      e.target.reset();
    } else {
      setLoading(false);
      Swal.fire({
        title: "Error!",
        text: "Something went wrong. Please try again.",
        icon: "error",
        background: "#16191E",
        color: "#ffffff"
      });
    }
  };

  return (
    <div className="w-full bg-base-100 text-base-content min-h-screen">
      {/* ================= HERO SECTION ================= */}
      <div className="relative w-full h-[50vh] overflow-hidden">
        <Image
          src="/assets/contact1.jpg"
          alt="Contact Banner"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-base-100 flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="px-6"
          >
            <h1 className="text-white text-4xl md:text-6xl font-black tracking-tighter uppercase">
              Get In Touch
            </h1>
            <p className="text-slate-400 mt-4 text-lg max-w-xl mx-auto uppercase tracking-widest font-semibold">
              We are here to help you find your perfect home.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ================= CONTACT SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16">
        
        {/* ===== CONTACT FORM ===== */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-base-200 p-8 md:p-12 rounded-[2.5rem] border border-white/5 shadow-2xl"
        >
          <h2 className="text-3xl font-black mb-2 tracking-tight">Landowners Inquiry</h2>
          <p className="text-slate-400 mb-10 text-sm">Interested in offering your land for real estate? Send us a message.</p>
          <form onSubmit={handleSubmit} className="space-y-5">
            <input type="hidden" name="to_name" value="JAS Properties" />
            <input type="hidden" name="subject" value="New Website Inquiry" />

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-4 bg-base-100 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-600 transition-all text-white placeholder:text-slate-600"
            />

            {/* Email Field যোগ করা হয়েছে */}
            <input
              type="email"
              name="email"
              placeholder="Your Email Address"
              required
              className="w-full p-4 bg-base-100 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-600 transition-all text-white placeholder:text-slate-600"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              required
              className="w-full p-4 bg-base-100 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-600 transition-all text-white placeholder:text-slate-600"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message..."
              required
              className="w-full p-4 bg-base-100 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-600 transition-all text-white placeholder:text-slate-600"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-5 rounded-2xl transition duration-300 disabled:opacity-50 shadow-lg uppercase tracking-widest text-sm"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>

        {/* ===== CONTACT INFO & MAP ===== */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-8"
        >
          {/* Info Card */}
          <div className="bg-gradient-to-br from-[#1A1D23] to-base-200 text-white p-10 rounded-[2.5rem] border border-white/5 shadow-xl">
            <h3 className="text-2xl font-black mb-8 tracking-tight">Contact Information</h3>
            
            <div className="space-y-6">
                <div className="flex gap-4 items-start">
                    <span className="text-orange-500 text-xl">📍</span>
                    <p className="text-slate-300">
                        House #14, Road #02, Sector #15, <br />
                        Uttara Diabari, Dhaka 1230
                    </p>
                </div>
                
                <div className="flex gap-4 items-center">
                    <span className="text-orange-500 text-xl">📞</span>
                    <a href="tel:01601230769" className="text-xl font-bold hover:text-orange-500 transition-colors">
                        01601-230769
                    </a>
                </div>
                
                <div className="flex gap-4 items-center">
                    <span className="text-orange-500 text-xl">✉️</span>
                    <a href="mailto:jasproperties7@gmail.com" className="text-slate-300 hover:text-orange-500 transition-colors">
                        jasproperties7@gmail.com
                    </a>
                </div>
            </div>
          </div>

          {/* Map Section (অরিজিনাল কালার) */}
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/5 bg-base-200 h-full min-h-[350px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.4410118838383!2d90.3547271!3d23.8739506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c3cd97539955%3A0x6334f5939225890!2sDiabari%2C%20Uttara%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1710345678901!5m2!1sen!2sbd" 
              width="100%"
              height="100%"
              style={{ border: 0 }} // ফিল্টার সরিয়ে দেওয়া হয়েছে
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default Contact;