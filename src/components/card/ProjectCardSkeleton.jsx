import React from 'react';

const ProjectCardSkeleton = () => {
    return (
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 flex flex-col h-[450px] animate-pulse">
            
            {/* Image Placeholder */}
            <div className="relative h-64 w-full bg-slate-200">
                {/* Badge Skeleton (Area Sq.Ft) */}
                <div className="absolute top-4 left-4">
                    <div className="h-8 w-28 bg-slate-300 rounded-full"></div>
                </div>
            </div>

            {/* Content Placeholder */}
            <div className="p-6 flex flex-col flex-grow space-y-5">
                <div className="flex-grow space-y-4">
                    {/* Project Name Skeleton */}
                    <div className="h-7 bg-slate-300 rounded-lg w-3/4"></div>
                    
                    {/* Location Skeleton */}
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <div className="h-4 w-4 bg-slate-200 rounded-full"></div>
                            <div className="h-4 bg-slate-200 rounded-md w-full"></div>
                        </div>
                        {/* Second line for longer addresses */}
                        <div className="h-4 bg-slate-100 rounded-md w-1/2 ml-6"></div>
                    </div>
                </div>

                {/* Footer Skeleton */}
                <div className="mt-auto pt-5 border-t border-slate-50 flex items-center justify-between">
                    {/* "View Details" text skeleton */}
                    <div className="h-4 bg-slate-200 rounded-md w-24"></div>
                    
                    {/* Circle Arrow Button skeleton */}
                    <div className="h-10 w-10 bg-slate-300 rounded-full"></div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCardSkeleton;