import Banner from '@/components/home/Banner';
import Projects from '@/components/home/Projects';
import React from 'react';
import ProjectBanner from './ProjectBanner';

const ProjectPage = () => {
    return (
        <div>
           <ProjectBanner></ProjectBanner> 
           <div className="text-center mb-10 space-y-4 mt-16">
                <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">
    Explore  our <span className="text-orange-600"> Projects </span>
</h2>
<div className="h-1.5 w-24 bg-orange-600 mx-auto rounded-full mt-4"></div>
<p className="text-slate-400 max-w-2xl mx-auto mt-6 text-lg font-medium leading-relaxed">
    Explore our portfolio of successfully delivered residential and commercial 
    projects that define <span className="text-slate-200">luxury living</span> and architectural excellence.
</p>
            </div>
            <Projects></Projects>
        </div>
    );
};

export default ProjectPage;