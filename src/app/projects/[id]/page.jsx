import Image from "next/image";
import { notFound } from "next/navigation";
import { HiLocationMarker } from "react-icons/hi";
import { FaBuilding } from "react-icons/fa";
import projects from "@/app/data/project.json";

export default function ProjectDetails({ params }) {

  const { id } = params;

  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      {/* Image */}
      <div className="relative w-full h-[450px] rounded-3xl overflow-hidden mb-10">
        <Image
          src={project.image}
          alt={project.projectName}
          fill
          className="object-cover"
        />
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold text-slate-900 mb-4">
        {project.projectName}
      </h1>

      {/* Location */}
      <div className="flex items-center gap-2 text-slate-500 mb-6">
        <HiLocationMarker className="text-[#C05621]" />
        <p>{project.location}</p>
      </div>

      {/* Project Info */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">

        <div className="p-6 border rounded-xl">
          <p className="text-sm text-gray-500">Project Type</p>
          <p className="font-semibold">{project.propertyType}</p>
        </div>

        <div className="p-6 border rounded-xl">
          <p className="text-sm text-gray-500">Area</p>
          <p className="font-semibold">{project.areaSqFt} sq ft</p>
        </div>

        <div className="p-6 border rounded-xl">
          <p className="text-sm text-gray-500">Condition</p>
          <p className="font-semibold capitalize">
            {project.projectCondition}
          </p>
        </div>

      </div>

      {/* Description */}
      <div className="max-w-3xl">
        <h2 className="text-2xl font-semibold mb-4">
          Project Overview
        </h2>

        <p className="text-slate-600 leading-relaxed">
          {project.projectName} is a modern {project.propertyType} located in{" "}
          {project.location}. This project offers spacious apartments with
          modern architecture, security facilities, and convenient access
          to major areas of Dhaka.
        </p>
      </div>

    </section>
  );
}