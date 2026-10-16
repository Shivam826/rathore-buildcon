// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { ArrowRight, MapPin } from "lucide-react";
// import { Project } from "./ProjectData";

// interface ProjectCardProps {
//   project: Project;
// }

// export default function ProjectCard({
//   project,
// }: ProjectCardProps) {
//   return (
//     <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_50px_rgba(37,99,235,0.15)] transition-all duration-300 hover:shadow-2xl">

//       {/* Image */}
//       <Link href={`/projects/${project.slug}`}>
//         <div className="relative h-64 overflow-hidden">
//           <Image
//             src={project.image}
//             alt={project.title}
//             fill
//             unoptimized
//             className="object-cover transition duration-500 group-hover:scale-110"
//           />

//           {/* Overlay */}
//           <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

//           {/* View Button */}
//           <div className="absolute bottom-5 left-1/2 -translate-x-1/2 translate-y-10 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
//             <span className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-blue-600 shadow-lg">
//               View Project
//               <ArrowRight size={16} />
//             </span>
//           </div>
//         </div>
//       </Link>

//       {/* Content */}
//       <div className="p-6">

//         {/* Category */}
//         <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
//           {project.category}
//         </span>

//         {/* Title */}
//         <Link href={`/projects/${project.slug}`}>
//           <h3 className="mt-4 text-2xl font-bold text-slate-900 transition group-hover:text-blue-600">
//             {project.title}
//           </h3>
//         </Link>

//         {/* Location */}
//         <div className="mt-3 flex items-center gap-2 text-slate-500">
//           <MapPin size={16} className="text-blue-600" />
//           <span>{project.location}</span>
//         </div>

//         {/* Description */}
//         <p className="mt-4 line-clamp-3 leading-7 text-slate-600">
//           {project.shortDescription}
//         </p>

//         {/* Button */}
//         <Link
//           href={`/projects/${project.slug}`}
//           className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-600 transition-all duration-300 hover:gap-3"
//         >
//           View Details
//           <ArrowRight size={18} />
//         </Link>

//       </div>
//     </div>
//   );
// }
import {
  ArrowRight,
  MapPin,
  Ruler,
} from "lucide-react";

import Image from "next/image";
import Link from "next/link";

import { Project } from "./ProjectData";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <div className="group overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      {/* Image */}

      <div className="relative h-72 overflow-hidden">

        <img
          src={project.image}
          alt={project.title}
          // fill
          // unoptimized
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

        {/* Category */}

        <span className="absolute left-5 top-5 rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold text-white">
          {project.category}
        </span>

        {/* Status */}

        <span className="absolute right-5 top-5 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-green-600 shadow">
          {project.status}
        </span>

      </div>

      {/* Content */}

      <div className="p-7">

        {/* Location */}

        <div className="mb-3 flex items-center gap-2 text-sm text-slate-500">

          <MapPin className="h-4 w-4 text-blue-600" />

          <span>
            {project.location}
          </span>

        </div>

        {/* Title */}

        <h3 className="text-2xl font-bold text-slate-900 transition group-hover:text-blue-600">
          {project.title}
        </h3>

        {/* Description */}

        <p className="mt-4 line-clamp-3 leading-7 text-slate-600">
          {project.shortDescription}
        </p>

        {/* Area */}

        <div className="mt-5 flex items-center gap-2 text-sm text-slate-500">

          <Ruler className="h-4 w-4 text-blue-600" />

          <span>
            {project.plotSizes}
          </span>

          {project.dimension && (
            <>
              <span>
                •
              </span>

              <span>
                {project.dimension}
              </span>
            </>
          )}

        </div>

        {/* Bottom */}

        <div className="mt-6 flex items-center justify-between gap-3">

          <span className="text-xl font-bold text-blue-600">
            {project.price}
          </span>

          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 font-semibold text-blue-600 transition-all hover:gap-3"
          >
            View Details

            <ArrowRight className="h-5 w-5" />
          </Link>

        </div>

      </div>

    </div>
  );
}