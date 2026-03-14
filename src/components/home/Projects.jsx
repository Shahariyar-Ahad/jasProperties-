"use client"; // Next.js app router-e state use korle eta proyojon
import React, { useState, useEffect } from 'react';
import projects from '@/app/data/project.json';
import ProjectCard from '../card/ProjectCard';
import ProjectCardSkeleton from '../card/ProjectCardSkeleton';

const Projects = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Real project-e ekhane API call hobe. 
        // Akhon amra ekti fake delay dicchi loading effect check korar jonno.
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500); // 1.5 second loading hobay

        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="py-20 container mx-auto px-6">
                                   {/* Grid Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {loading ? (
                    // Loading thakle 6 ti skeleton dekhabe
                    Array.from({ length: 6 }).map((_, index) => (
                        <ProjectCardSkeleton key={index} />
                    ))
                ) : (
                    // Data load hoye gele real cards dekhabe
                    projects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))
                )}
            </div>
            
            {/* No Data State (Optional) */}
            {!loading && projects.length === 0 && (
                <div className="text-center py-20 text-slate-400">
                    No projects found at the moment.
                </div>
            )}
        </section>
    );
};

export default Projects;