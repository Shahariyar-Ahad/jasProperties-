"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { IoMdClose, IoMdCall, IoMdMail, IoMdCopy } from 'react-icons/io';
import { HiLocationMarker } from 'react-icons/hi';
import { FaCheckCircle, FaBuilding, FaLayerGroup, FaDoorOpen, FaCompass, FaCar, FaRulerCombined } from 'react-icons/fa';
import Swal from 'sweetalert2';

// Swiper components and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProjectModal = ({ project, isOpen, onClose }) => {
    const [showOptions, setShowOptions] = useState(false);
    const phoneNumber = "01601230769";

    if (!isOpen || !project) return null;

    const copyNumber = () => {
        navigator.clipboard.writeText(phoneNumber);
        Swal.fire({
            title: 'Copied!',
            text: 'Phone number copied to clipboard',
            icon: 'success',
            timer: 1500,
            showConfirmButton: false,
            toast: true,
            position: 'top-end'
        });
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 md:p-4 bg-black/80 backdrop-blur-sm">
            <div className="bg-white w-full max-w-5xl max-h-[95vh] rounded-2xl md:rounded-3xl overflow-y-auto relative shadow-2xl">
                
                {/* Close Button */}
                <button 
                    onClick={() => {
                        onClose();
                        setShowOptions(false);
                    }}
                    className="absolute top-4 right-4 z-50 bg-white/90 p-2 rounded-full hover:bg-red-500 hover:text-white transition-all shadow-lg border border-slate-200"
                >
                    <IoMdClose size={24} />
                </button>

                <div className="flex flex-col lg:flex-row">
                    
                    {/* Image Section - Swiper Slider */}
                    <div className="lg:w-3/5 w-full bg-slate-900 relative group flex items-center justify-center min-h-[350px] md:min-h-[500px]">
                        {project.images && project.images.length > 0 ? (
                            <Swiper
                                modules={[Navigation, Pagination]}
                                navigation={true}
                                pagination={{ clickable: true }}
                                className="w-full h-[350px] md:h-[500px] lg:h-full"
                            >
                                {project.images.map((img, index) => (
                                    <SwiperSlide key={index} className="flex items-center justify-center">
                                        <div className="relative w-full h-full p-2">
                                            <Image 
                                                src={img} 
                                                alt={`${project.project_name} - ${index}`} 
                                                fill 
                                                priority
                                                // object-contain নিশ্চিত করবে যে ছবি কাটবে না
                                                className="object-contain" 
                                                sizes="(max-width: 768px) 100vw, 60vw"
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        ) : (
                            <div className="h-[300px] flex items-center justify-center bg-slate-200 uppercase font-bold text-slate-400">
                                No Images Available
                            </div>
                        )}
                    </div>

                    {/* Details Section */}
                    <div className="lg:w-2/5 p-6 md:p-8 overflow-y-auto bg-white">
                        <div className="mb-2">
                            <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                                project.status === 'Sold Out' ? 'bg-red-100 text-red-600' : 'bg-emerald-100 text-emerald-600'
                            }`}>
                                {project.status}
                            </span>
                        </div>
                        
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 leading-tight">
                            {project.project_name}
                        </h2>
                        
                        <div className="flex items-start gap-2 text-slate-500 mb-6 border-b pb-4">
                            <HiLocationMarker className="text-[#C05621] mt-1 shrink-0" size={18} />
                            <p className="text-sm leading-relaxed">{project.location}</p>
                        </div>

                        {/* Info Grid - Shows all JSON Details */}
                        <div className="grid grid-cols-2 gap-3 mb-6">
                            {[
                                { label: 'Property Type', val: project.property_type, icon: <FaBuilding /> },
                                { label: 'Flat Size', val: project.flat_size, icon: <FaRulerCombined /> },
                                { label: 'Unit Per Floor', val: `${project.unit_per_floor} Unit`, icon: <FaDoorOpen /> },
                                { label: 'Total Flats', val: `${project.total_flats} Nos`, icon: <FaLayerGroup /> },
                                { label: 'Facing View', val: project.view, icon: <FaCompass /> },
                                { label: 'Parking', val: project.parking, icon: <FaCar /> },
                                { label: 'Site Area', val: project.site_area, icon: <FaRulerCombined /> },
                                { label: 'Handover', val: project.handover_date, icon: <FaCheckCircle /> },
                            ].map((item, i) => (
                                item.val && (
                                    <div key={i} className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                                        <p className="text-[10px] text-slate-400 uppercase font-bold mb-1">{item.label}</p>
                                        <div className="flex items-center gap-2 text-slate-800">
                                            <span className="text-[#C05621] text-xs">{item.icon}</span>
                                            <p className="font-bold text-[11px] md:text-xs leading-tight">{item.val}</p>
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>

                        {/* Facilities */}
                        {project.utility_facilities && (
                            <div className="mb-8">
                                <h4 className="font-bold mb-3 text-sm text-slate-800">Utility & Facilities:</h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.utility_facilities.map((utility, idx) => (
                                        <span key={idx} className="bg-emerald-50 text-emerald-700 text-[10px] px-3 py-1.5 rounded-lg flex items-center gap-1.5 font-bold border border-emerald-100">
                                            <FaCheckCircle className="shrink-0" /> {utility}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Action Buttons */}
                        <div className="sticky bottom-0 bg-white pt-2 border-t mt-4">
                            {!showOptions ? (
                                <button 
                                    onClick={() => setShowOptions(true)}
                                    className="w-full bg-[#C05621] text-white py-4 rounded-xl font-bold hover:bg-[#A04611] transition-all shadow-lg active:scale-[0.98]"
                                >
                                    Contact for Inquiry
                                </button>
                            ) : (
                                <div className="space-y-3 animate-in fade-in slide-in-from-bottom-2 duration-300">
                                    <div className="flex gap-2">
                                        <a 
                                            href={`tel:${phoneNumber}`} 
                                            className="flex-1 bg-slate-900 text-white py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all text-sm"
                                        >
                                            <IoMdCall size={18} /> {phoneNumber}
                                        </a>
                                        <button 
                                            onClick={copyNumber}
                                            className="bg-slate-100 text-slate-700 px-4 rounded-xl hover:bg-slate-200 transition-all border border-slate-200"
                                        >
                                            <IoMdCopy size={20} />
                                        </button>
                                    </div>
                                    <a 
                                        href={`mailto:jasproperties7@gmail.com?subject=Inquiry for ${project.project_name}`}
                                        className="w-full border-2 border-[#C05621] text-[#C05621] py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-orange-50 transition-all text-sm"
                                    >
                                        <IoMdMail size={18} /> Send Email
                                    </a>
                                    <button 
                                        onClick={() => setShowOptions(false)}
                                        className="w-full text-slate-400 text-[10px] font-bold py-2 hover:text-slate-600 uppercase tracking-widest"
                                    >
                                        Go Back
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;