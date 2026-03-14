"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { IoMdClose, IoMdCall, IoMdMail, IoMdCopy } from 'react-icons/io';
import { HiLocationMarker } from 'react-icons/hi';
import { FaCheckCircle, FaBuilding, FaLayerGroup, FaDoorOpen, FaCompass } from 'react-icons/fa';
import Swal from 'sweetalert2';

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [showOptions, setShowOptions] = useState(false);
  const phoneNumber = "01601230769";

  if (!isOpen) return null;

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
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white w-full max-w-4xl max-h-[90vh] rounded-3xl overflow-y-auto relative shadow-2xl">
        
        {/* Close Button */}
        <button 
          onClick={() => {
            onClose();
            setShowOptions(false);
          }}
          className="absolute top-4 right-4 z-10 bg-white/80 p-2 rounded-full hover:bg-red-500 hover:text-white transition-all shadow-md"
        >
          <IoMdClose size={24} />
        </button>

        <div className="flex flex-col md:flex-row">
          {/* Image Section */}
          <div className="md:w-1/2 h-64 md:min-h-[500px] relative">
            <Image 
              src={project.images?.[0] || "/placeholder.jpg"} 
              alt={project.project_name} 
              fill 
              className="object-cover"
            />
          </div>

          {/* Details Section */}
          <div className="md:w-1/2 p-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">{project.project_name}</h2>
            <div className="flex items-start gap-2 text-slate-500 mb-6 border-b pb-4">
              <HiLocationMarker className="text-[#C05621] mt-1 shrink-0" />
              <p className="text-sm">{project.location}</p>
            </div>

            {/* Main Info Grid */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Property Type</p>
                <div className="flex items-center gap-2 text-slate-800">
                    <FaBuilding className="text-[#C05621] text-xs" />
                    <p className="font-bold text-xs">{project.property_type}</p>
                </div>
              </div>

              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Flat Size</p>
                <p className="font-bold text-xs text-slate-800">{project.flat_size}</p>
              </div>

              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Unit Per Floor</p>
                <div className="flex items-center gap-2 text-slate-800">
                    <FaDoorOpen className="text-[#C05621] text-xs" />
                    <p className="font-bold text-xs">{project.unit_per_floor} Unit</p>
                </div>
              </div>

              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Total Flats</p>
                <div className="flex items-center gap-2 text-slate-800">
                    <FaLayerGroup className="text-[#C05621] text-xs" />
                    <p className="font-bold text-xs">{project.total_flats} Nos</p>
                </div>
              </div>

              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Facing View</p>
                <div className="flex items-center gap-2 text-slate-800">
                    <FaCompass className="text-[#C05621] text-xs" />
                    <p className="font-bold text-xs">{project.view}</p>
                </div>
              </div>

              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Handover</p>
                <p className="font-bold text-xs text-slate-800">{project.handover_date}</p>
              </div>
            </div>

            <h4 className="font-bold mb-3 text-sm text-slate-800">Utility & Facilities:</h4>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.utility_facilities?.map((utility, idx) => (
                <span key={idx} className="bg-emerald-50 text-emerald-700 text-[10px] px-3 py-1 rounded-full flex items-center gap-1 font-bold">
                  <FaCheckCircle className="text-[10px]" /> {utility}
                </span>
              ))}
            </div>

            {/* --- INQUIRY SECTION --- */}
            {!showOptions ? (
              <button 
                onClick={() => setShowOptions(true)}
                className="w-full bg-[#C05621] text-white py-4 rounded-2xl font-bold hover:bg-[#A04611] transition-all shadow-lg active:scale-95"
              >
                Contact for Inquiry
              </button>
            ) : (
              <div className="space-y-3 animate-in fade-in slide-in-from-bottom-4 duration-300">
                <div className="flex gap-2">
                  <a 
                    href={`tel:${phoneNumber}`} 
                    className="flex-1 bg-slate-900 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all text-sm"
                  >
                    <IoMdCall size={18} /> 01601-230769
                  </a>
                  <button 
                    onClick={copyNumber}
                    className="bg-slate-100 text-slate-700 px-4 rounded-xl hover:bg-slate-200 transition-all border border-slate-200"
                  >
                    <IoMdCopy size={18} />
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
  );
};

export default ProjectModal;