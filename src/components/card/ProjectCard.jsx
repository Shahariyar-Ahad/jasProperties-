"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiLocationMarker } from "react-icons/hi";
import { AiOutlineExpand } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { FaBuilding } from "react-icons/fa";
import ProjectModal from "./ProjectModal"; // Modal ইমপোর্ট করুন

const ProjectCard = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    id,
    project_name,
    location,
    images,
    project_condition,
    flat_size,
    site_area,
  } = project || {};

  const conditionColor = {
    complete: "bg-emerald-500",
    sold_out: "bg-red-500",
    upcoming: "bg-amber-500",
  };

  return (
    <>
      <div className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col h-full">
        {/* Image Section */}
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={images?.[0] || "/placeholder.jpg"}
            alt={project_name || "Project Image"}
            fill
            sizes="(max-width:768px) 100vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Condition Badge */}
          {project_condition && (
            <div className="absolute top-4 right-4">
              <span className={`text-xs font-semibold px-3 py-1 rounded-full text-white capitalize shadow ${conditionColor[project_condition]}`}>
                {project_condition.replace("_", " ")}
              </span>
            </div>
          )}

          {/* Site Area Badge */}
          {site_area && (
            <div className="absolute top-4 left-4">
              <div className="flex items-center gap-1.5 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm">
                <AiOutlineExpand className="text-[#C05621] text-sm" />
                <span className="text-xs font-bold text-slate-800">{site_area}</span>
              </div>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex-grow space-y-4">
            <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#C05621] transition-colors duration-300">
              {project_name}
            </h3>
            <div className="flex items-start gap-2 text-slate-500">
              <HiLocationMarker className="text-[#C05621] mt-1 shrink-0" />
              <p className="text-sm leading-snug">{location}</p>
            </div>
            {flat_size && (
              <div className="flex items-center gap-2 text-slate-500">
                <FaBuilding className="text-[#C05621]" />
                <span className="text-sm">Flat Size: {flat_size}</span>
              </div>
            )}
          </div>

          {/* Footer with Button Action */}
          <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
            <button
              onClick={() => setIsModalOpen(true)} // Modal ওপেন হবে
              className="text-sm font-semibold text-slate-500 hover:text-[#C05621] transition cursor-pointer"
            >
              View Details
            </button>

            <button
              onClick={() => setIsModalOpen(true)}
              className="w-10 h-10 rounded-full bg-slate-50 text-slate-900 flex items-center justify-center group-hover:bg-[#C05621] group-hover:text-white transition-all duration-300 shadow-sm"
            >
              <BsArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/* Modal Component */}
      <ProjectModal 
        project={project} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default ProjectCard;