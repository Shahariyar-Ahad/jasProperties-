import Image from 'next/image';
import React from 'react';

const ProjectBanner = () => {
    return (
        <div className="relative w-full h-[50vh] md:h-[80vh] rounded-4xl overflow-hidden">

            {/* Background Image */}
            <Image 
                src="/assets/inner.jpg"
                alt="Project Banner"
                fill
                priority
                className="object-cover"
            />

            {/* Dark Premium Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/40"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 md:px-12 text-white">

                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                    Building Trust Through <span className="text-amber-400">Proven Excellence</span>
                </h1>

                <p className="text-sm md:text-lg max-w-2xl text-gray-200 mb-6">
                    Delivering high-quality, innovative solutions that stand the test of time. 
                    Your vision, our expertise — together we create lasting value.
                </p>

              

            </div>

        </div>
    );
};

export default ProjectBanner;