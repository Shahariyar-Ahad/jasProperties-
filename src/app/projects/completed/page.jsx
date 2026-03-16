import Banner from '@/components/home/Banner';
import Projects from '@/components/home/Projects';
import React from 'react';
import ProjectBanner from './ProjectBanner';

// Production Level SEO Metadata for Project Page
export const metadata = {
  title: "Premium Real Estate Projects in Uttara, Dhaka",
  description: "Explore our collection of luxury residential and commercial projects. Featuring ongoing and completed high-end apartments in Uttara Sector 15, Diabari with modern amenities.",
  keywords: [
    "JAS Properties Projects", 
    "Luxury Apartments Uttara", 
    "Ongoing Projects Uttara Dhaka", 
    "Real Estate Projects Dhaka", 
    "JAS Hakim Palace", 
    "Labiba Palace", 
    "Kazi Palace",
    "Apartment for sale Uttara"
  ],
  openGraph: {
    title: "Luxury Real Estate Projects | JAS Properties",
    description: "Discover our masterpieces—luxury living spaces crafted with architectural excellence in the heart of Dhaka.",
    url: "https://jas-properties.vercel.app/projects",
    images: [
      {
        url: "https://i.ibb.co/DfBnbnPp/complete-Project.png", // Project Preview Image
        width: 1200,
        height: 630,
        alt: "JAS Properties Masterpieces Portfolio",
      },
    ],
  },
};

const ProjectPage = () => {
    return (
        <div>
           <ProjectBanner /> 
           <div className="text-center mb-10 space-y-4 mt-16">
                <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">
                    Explore our <span className="text-orange-600">Projects</span>
                </h2>
                <div className="h-1.5 w-24 bg-orange-600 mx-auto rounded-full mt-4"></div>
                <p className="text-slate-400 max-w-2xl mx-auto mt-6 text-lg font-medium leading-relaxed">
                    Explore our portfolio of successfully delivered residential and commercial 
                    projects that define <span className="text-slate-200">luxury living</span> and architectural excellence.
                </p>
            </div>
            <Projects />
        </div>
    );
};

export default ProjectPage;