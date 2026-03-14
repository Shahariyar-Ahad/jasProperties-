import Banner from "@/components/home/Banner";
import Projects from "@/components/home/Projects";
import WhyUs from "@/components/home/WhyUs";
import Image from "next/image";

export default function Home() {
  return (
    <div  className="space-y-20">
    <section><Banner></Banner></section>
    <section><WhyUs></WhyUs></section> 
    <div className="text-center mb-16 space-y-4">
                <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">
    Our <span className="text-orange-600">Masterpieces</span>
</h2>
<div className="h-1.5 w-24 bg-orange-600 mx-auto rounded-full mt-4"></div>
<p className="text-slate-400 max-w-2xl mx-auto mt-6 text-lg font-medium leading-relaxed">
    Explore our portfolio of successfully delivered residential and commercial 
    projects that define <span className="text-slate-200">luxury living</span> and architectural excellence.
</p>
            </div>
    <section><Projects></Projects></section>
    </div>
  );
}
