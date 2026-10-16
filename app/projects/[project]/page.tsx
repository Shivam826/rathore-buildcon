// import {
//     ArrowRight,
//     BadgeCheck,
//     Bath,
//     BedDouble,
//     Car,
//     CheckCircle2,
//     ChevronRight,
//     IndianRupee,
//     MapPin,
//     Phone,
//     Ruler
// } from "lucide-react";
// import Image from "next/image";
// import { notFound } from "next/navigation";

// import Link from "next/link";
// import { projects } from "../ProjectData";

// export function generateStaticParams() {
//     return projects.map((project) => ({
//         project: project.slug,
//     }));
// }

// export default async function ProjectDetailPage({
//     params,
// }: {
//     params: Promise<{ project: string }>;
// }) {
//     const { project } = await params;

//     const data = projects.find((item) => item.slug === project);

//     if (!data) {
//         notFound();
//     }

//     return (
//         <section className="bg-[#f8fbff] py-15">
//             <div className="mx-auto max-w-7xl px-5">
//                 {/* ===================== Hero Section ===================== */}

//                 <section className="relative overflow-hidden pb-5">

//                     {/* Background Image */}
//                     <div className="relative h-105 md:h-137.5 lg:h-150px">

//                         <Image
//                             src={data.image}
//                             alt={data.title}
//                             fill
//                             priority
//                             unoptimized
//                             className="object-cover"
//                         />

//                         {/* Overlay */}
//                         <div className="absolute inset-0 bg-linear-to-r from-slate-950/90 via-slate-900/60 to-slate-900/20" />

//                         {/* Content */}
//                         <div className="absolute inset-0">

//                             <div className="mx-auto flex h-full max-w-7xl flex-col justify-between px-5 py-8 lg:px-8 lg:py-12">

//                                 {/* Breadcrumb */}
//                                 <div>

//                                     <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm text-white backdrop-blur-md">

//                                         <Link
//                                             href="/"
//                                             className="transition hover:text-blue-400"
//                                         >
//                                             Home
//                                         </Link>

//                                         <ChevronRight size={16} />

//                                         <Link
//                                             href="/projects"
//                                             className="transition hover:text-blue-400"
//                                         >
//                                             Projects
//                                         </Link>

//                                         <ChevronRight size={16} />

//                                         <span className="font-semibold text-blue-400">
//                                             {data.title}
//                                         </span>

//                                     </div>

//                                 </div>

//                                 {/* Hero Content */}
//                                 <div className="max-w-3xl">

//                                     <span className="inline-flex rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-lg">
//                                         {data.category}
//                                     </span>

//                                     <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
//                                         {data.title}
//                                     </h1>

//                                     <p className="mt-5 max-w-2xl text-base leading-8 text-slate-200 md:text-lg">
//                                         {data.shortDescription}
//                                     </p>

//                                     <div className="mt-8 flex flex-wrap items-center gap-6 text-white">

//                                         <div className="flex items-center gap-2">
//                                             <MapPin className="h-5 w-5 text-blue-400" />
//                                             <span>{data.location}</span>
//                                         </div>

//                                         <div className="flex items-center gap-2">
//                                             <Ruler className="h-5 w-5 text-blue-400" />
//                                             <span>{data.area}</span>
//                                         </div>

//                                         <div className="flex items-center gap-2">
//                                             <BadgeCheck className="h-5 w-5 text-blue-400" />
//                                             <span>{data.status}</span>
//                                         </div>

//                                     </div>

//                                     {/* Buttons */}
//                                     <div className="mt-10 flex flex-wrap gap-4">



//                                         <button
//                                             className="inline-flex h-14 items-center justify-center rounded-full bg-blue-600 px-4 lg:px-8 text-sm lg:text-base font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl"
//                                         >
//                                             Book Site Visit
//                                             <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5" />
//                                         </button>

//                                         <a href="tel:+919876543210" className="inline-flex h-14 items-center justify-center rounded-full border-2 border-slate-300 bg-white px-4 lg:px-8 text-sm lg:text-base font-semibold text-slate-700 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-600 hover:text-blue-600 hover:shadow-lg">
//                                             <Phone className="mr-2 h-4 w-4 lg:h-5 lg:w-5 fill-current" />
//                                             Call Now
//                                         </a>

//                                     </div>

//                                 </div>

//                             </div>

//                         </div>

//                     </div>

//                 </section>


//                 {/* ===================== Project Info Cards ===================== */}

//                 <section className="-mt-10 relative z-20">
//                     <div className="mx-auto max-w-7xl px-5">

//                         <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

//                             {/* Price */}
//                             <div className="group rounded-3xl border border-white/30 bg-white/90 p-5 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-2xl">

//                                 <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 transition duration-300 group-hover:bg-blue-600">
//                                     <IndianRupee className="h-5 w-5 text-blue-600 transition group-hover:text-white" />
//                                 </div>

//                                 <h3 className="mt-4 text-2xl font-extrabold text-slate-900">
//                                     {data.price}
//                                 </h3>

//                                 <p className="mt-2 text-slate-500">
//                                     Starting Price
//                                 </p>

//                             </div>

//                             {/* Status */}
//                             <div className="group rounded-3xl border border-white/30 bg-white/90 p-5 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-2xl">

//                                 <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 transition duration-300 group-hover:bg-green-600">
//                                     <BadgeCheck className="h-6 w-6 text-green-600 transition group-hover:text-white" />
//                                 </div>

//                                 <h3 className="mt-4 text-2xl font-extrabold text-slate-900">
//                                     {data.status}
//                                 </h3>

//                                 <p className="mt-2 text-slate-500">
//                                     Project Status
//                                 </p>

//                             </div>

//                             {/* Area */}
//                             <div className="group rounded-3xl border border-white/30 bg-white/90 p-5 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-orange-500 hover:shadow-2xl">

//                                 <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 transition duration-300 group-hover:bg-orange-500">
//                                     <Ruler className="h-6 w-6 text-orange-500 transition group-hover:text-white" />
//                                 </div>

//                                 <h3 className="mt-4 text-2xl font-extrabold text-slate-900">
//                                     {data.area}
//                                 </h3>

//                                 <p className="mt-2 text-slate-500">
//                                     Built-up Area
//                                 </p>

//                             </div>

//                             {/* Location */}
//                             <div className="group rounded-3xl border border-white/30 bg-white/90 p-5 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-red-500 hover:shadow-2xl">

//                                 <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 transition duration-300 group-hover:bg-red-500">
//                                     <MapPin className="h-6 w-6 text-red-500 transition group-hover:text-white" />
//                                 </div>

//                                 <h3 className="mt-4 text-xl font-bold leading-8 text-slate-900">
//                                     {data.location}
//                                 </h3>

//                                 <p className="mt-2 text-slate-500">
//                                     Prime Location
//                                 </p>

//                             </div>

//                         </div>

//                     </div>
//                 </section>

//                 {/* ===================== Project Overview ===================== */}

//                 <section className="py-15">
//                     <div className="mx-auto max-w-7xl px-5">
//                         <div className="mb-12 text-center">
//                             <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
//                                 Project Overview
//                             </p>

//                             <h2 className="mt-5 text-3xl font-extrabold text-slate-900 md:text-5xl">
//                                 Building Dreams with Quality & Trust
//                             </h2>

//                             <div className="mx-auto mt-5 flex items-center justify-center gap-2">
//                                 <span className="h-0.75 w-10 rounded-full bg-blue-600"></span>
//                                 <span className="h-0.75 w-4 rounded-full bg-blue-300"></span>
//                             </div>
//                         </div>
//                         <div className="grid items-center gap-12 lg:grid-cols-2">

//                             {/* Left Image */}
//                             <div className="relative overflow-hidden rounded-3xl">

//                                 <Image
//                                     src={data.image}
//                                     alt={data.title}
//                                     width={700}
//                                     height={600}
//                                     unoptimized
//                                     className="h-full w-full object-cover transition duration-500 hover:scale-105"
//                                 />

//                                 <div className="absolute bottom-6 left-6 rounded-2xl bg-blue-600 px-6 py-4 text-white shadow-xl">
//                                     <h3 className="text-xl md:text-3xl font-bold">{data.area}</h3>
//                                     <p className="text-sm text-blue-100">
//                                         Total Project Area
//                                     </p>
//                                 </div>

//                             </div>

//                             {/* Right Content */}
//                             <div>


//                                 <p className=" text-lg leading-7 text-slate-600">
//                                     {data.overview}
//                                 </p>

//                                 <p className="mt-5 leading-6 text-slate-600">
//                                     Rathore Buildcon delivers premium residential and commercial
//                                     developments with a strong commitment to quality,
//                                     transparency, and timely project completion. Every project
//                                     is thoughtfully planned using modern architecture, durable
//                                     materials, and smart layouts to ensure long-term value.
//                                 </p>

//                                 <div className="mt-5 grid gap-5 sm:grid-cols-2">

//                                     <div className="flex items-start gap-4">

//                                         <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
//                                             <CheckCircle2 className="h-6 w-6 text-blue-600" />
//                                         </div>

//                                         <div>
//                                             <h4 className="font-bold text-slate-900">
//                                                 Premium Construction
//                                             </h4>

//                                             <p className="mt-1 text-sm text-slate-500">
//                                                 High-quality materials with modern engineering.
//                                             </p>
//                                         </div>

//                                     </div>

//                                     <div className="flex items-start gap-4">

//                                         <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
//                                             <CheckCircle2 className="h-6 w-6 text-blue-600" />
//                                         </div>

//                                         <div>
//                                             <h4 className="font-bold text-slate-900">
//                                                 Prime Location
//                                             </h4>

//                                             <p className="mt-1 text-sm text-slate-500">
//                                                 Excellent connectivity to schools, hospitals and markets.
//                                             </p>
//                                         </div>

//                                     </div>

//                                     <div className="flex items-start gap-4">

//                                         <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
//                                             <CheckCircle2 className="h-6 w-6 text-blue-600" />
//                                         </div>

//                                         <div>
//                                             <h4 className="font-bold text-slate-900">
//                                                 Modern Amenities
//                                             </h4>

//                                             <p className="mt-1 text-sm text-slate-500">
//                                                 Lifestyle-focused facilities for every family.
//                                             </p>
//                                         </div>

//                                     </div>

//                                     <div className="flex items-start gap-4">

//                                         <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
//                                             <CheckCircle2 className="h-6 w-6 text-blue-600" />
//                                         </div>

//                                         <div>
//                                             <h4 className="font-bold text-slate-900">
//                                                 Trusted Developer
//                                             </h4>

//                                             <p className="mt-1 text-sm text-slate-500">
//                                                 Delivering quality projects with complete transparency.
//                                             </p>
//                                         </div>

//                                     </div>

//                                 </div>

//                             </div>

//                         </div>

//                     </div>
//                 </section>
//                 {/* ===================== Property Details ===================== */}

//                 <section className="pb-15 bg-[#f8fbff]">
//                     <div className="mx-auto max-w-7xl px-5">
//                         <div className="mb-12 text-center">
//                             <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
//                                 Property Details
//                             </p>

//                             <h2 className="mt-5 text-3xl font-extrabold text-slate-900 md:text-5xl">
//                                 Project Specifications
//                             </h2>

//                             <div className="mx-auto mt-5 flex items-center justify-center gap-2">
//                                 <span className="h-0.75 w-10 rounded-full bg-blue-600"></span>
//                                 <span className="h-0.75 w-4 rounded-full bg-blue-300"></span>
//                             </div>
//                         </div>

//                         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

//                             {[
//                                 {
//                                     icon: BedDouble,
//                                     title: "Bedrooms",
//                                     value: data.bedrooms,
//                                 },
//                                 {
//                                     icon: Bath,
//                                     title: "Bathrooms",
//                                     value: data.bathrooms,
//                                 },
//                                 {
//                                     icon: Car,
//                                     title: "Parking",
//                                     value: data.parking,
//                                 },
//                                 {
//                                     icon: Ruler,
//                                     title: "Area",
//                                     value: data.area,
//                                 },
//                             ].map((item) => {
//                                 const Icon = item.icon;

//                                 return (
//                                     <div
//                                         key={item.title}
//                                         className="group rounded-3xl border border-slate-200 bg-white p-5 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-xl"
//                                     >
//                                         <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 transition-all duration-300 group-hover:bg-blue-600">

//                                             <Icon className="h-7 w-7 text-blue-600 transition group-hover:text-white" />

//                                         </div>

//                                         <h3 className="mt-6 text-2xl md:text-3xl font-extrabold text-slate-900">
//                                             {item.value}
//                                         </h3>

//                                         <p className="mt-2 text-base font-medium text-slate-500">
//                                             {item.title}
//                                         </p>

//                                     </div>
//                                 );
//                             })}

//                         </div>

//                         {/* Extra Details */}

//                         <div className="mt-14 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">

//                             <div className="grid md:grid-cols-2">

//                                 <div className="border-b border-slate-200 p-6 md:border-b-0 md:border-r">
//                                     <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
//                                         Project Status
//                                     </p>

//                                     <h3 className="mt-2 text-2xl font-bold text-blue-600">
//                                         {data.status}
//                                     </h3>
//                                 </div>

//                                 <div className="p-6">
//                                     <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
//                                         Starting Price
//                                     </p>

//                                     <h3 className="mt-2 text-2xl font-bold text-blue-600">
//                                         {data.price}
//                                     </h3>
//                                 </div>

//                             </div>

//                         </div>

//                     </div>
//                 </section>
//                 {/* ===================== Project Features ===================== */}

//                 <section className="pb-15">
//                     <div className="mx-auto max-w-7xl px-5">

//                         <div className="mb-12 text-center">
//                             <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
//                                 Project Features
//                             </p>

//                             <h2 className="mt-5 text-3xl font-extrabold text-slate-900 md:text-5xl">
//                                 Premium Features You'll Love
//                             </h2>

//                             <div className="mx-auto mt-5 flex items-center justify-center gap-2">
//                                 <span className="h-0.75 w-10 rounded-full bg-blue-600"></span>
//                                 <span className="h-0.75 w-4 rounded-full bg-blue-300"></span>
//                             </div>


//                         </div>

//                         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

//                             {data.features.map((feature) => (

//                                 <div
//                                     key={feature}
//                                     className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-md transition-all duration-500 hover:-translate-y-2 hover:border-[#155dfc]/40 hover:shadow-2xl"
//                                 >
//                                     {/* Bottom Right Blue Glow */}
//                                     <div className="pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-[#155dfc] opacity-0 blur-[90px] transition-all duration-700 ease-out group-hover:opacity-20 group-hover:scale-110" />

//                                     {/* Soft Gradient Overlay */}
//                                     <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-transparent via-transparent to-[#155dfc]/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

//                                     <div className="relative z-10 flex items-start gap-5">
//                                         <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 transition-all duration-500 group-hover:bg-[#155dfc] group-hover:shadow-lg group-hover:shadow-[#155dfc]/40">
//                                             <CheckCircle2 className="h-7 w-7 text-[#155dfc] transition-colors duration-500 group-hover:text-white" />
//                                         </div>

//                                         <div>
//                                             <h3 className="text-lg font-bold text-slate-900 transition-colors duration-300 group-hover:text-[#155dfc]">
//                                                 {feature}
//                                             </h3>

//                                             <p className="mt-2 text-sm leading-7 text-slate-500">
//                                                 Built with superior quality standards to ensure
//                                                 long-term durability, comfort, and modern living.
//                                             </p>
//                                         </div>
//                                     </div>
//                                 </div>

//                             ))}

//                         </div>

//                         {/* Bottom CTA */}

//                         <div className="mt-16 rounded-4xl bg-linear-to-r from-blue-600 to-blue-700 p-6 text-center text-white shadow-xl">

//                             <h3 className="text-3xl font-bold">
//                                 Looking for Your Dream Property?
//                             </h3>

//                             <p className="mx-auto mt-4 max-w-3xl text-blue-100">
//                                 Explore premium residential and commercial projects developed
//                                 with quality construction, thoughtful planning, and modern
//                                 amenities tailored to your lifestyle.
//                             </p>
//                             <Link
//                                 href="/contact"
//                                 className="mt-5 inline-flex items-center justify-center rounded-xl border-2 hover:border-white hover:bg-transparent px-4 py-4 font-semibold hover:text-white transition-all duration-300 bg-white text-blue-600 md:px-8"
//                             >
//                                 Get Free Consultation
//                             </Link>

//                         </div>

//                     </div>
//                 </section>

//                 {/* ===================== Amenities ===================== */}

//                 <section className="bg-[#f8fbff] pb-15">
//                     <div className="mx-auto max-w-7xl px-5">

//                         <div className="mb-12 text-center">
//                             <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
//                                 World-Class Amenities
//                             </p>

//                             <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
//                                 Everything You Need for Comfortable Living
//                             </h2>

//                             <div className="mx-auto mt-5 flex items-center justify-center gap-2">
//                                 <span className="h-0.75 w-10 rounded-full bg-blue-600"></span>
//                                 <span className="h-0.75 w-4 rounded-full bg-blue-300"></span>
//                             </div>
//                         </div>
//                         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

//                             {data.amenities.map((item) => (

//                                 <div
//                                     key={item}
//                                     className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-xl"
//                                 >

//                                     <div className="flex items-start gap-4">

//                                         <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-green-50 transition-all duration-300 group-hover:bg-green-600">

//                                             <CheckCircle2 className="h-7 w-7 text-green-600 transition group-hover:text-white" />

//                                         </div>

//                                         <div>

//                                             <h3 className="text-lg font-bold text-slate-900 group-hover:text-green-600">
//                                                 {item}
//                                             </h3>

//                                             <p className="mt-2 text-sm leading-7 text-slate-500">
//                                                 Designed to enhance your everyday lifestyle
//                                                 with modern comfort, convenience, and safety.
//                                             </p>

//                                         </div>

//                                     </div>

//                                 </div>

//                             ))}

//                         </div>

//                         {/* Bottom Info */}

//                         <div className="mt-16 rounded-4xl bg-white p-10 shadow-xl">

//                             <div className="grid gap-10 md:grid-cols-3">

//                                 <div className="text-center">

//                                     <h3 className="text-4xl font-extrabold text-blue-600">
//                                         24×7
//                                     </h3>

//                                     <p className="mt-2 text-slate-600">
//                                         Security & CCTV Surveillance
//                                     </p>

//                                 </div>

//                                 <div className="text-center">

//                                     <h3 className="text-4xl font-extrabold text-blue-600">
//                                         100%
//                                     </h3>

//                                     <p className="mt-2 text-slate-600">
//                                         Power Backup & Water Supply
//                                     </p>

//                                 </div>

//                                 <div className="text-center">

//                                     <h3 className="text-4xl font-extrabold text-blue-600">
//                                         Premium
//                                     </h3>

//                                     <p className="mt-2 text-slate-600">
//                                         Lifestyle & Community Facilities
//                                     </p>

//                                 </div>

//                             </div>

//                         </div>

//                     </div>
//                 </section>
//                 {/* ===================== Project Gallery ===================== */}

//                 <section className="pb-15">
//                     <div className="mx-auto max-w-7xl px-5">

//                         <div className="mb-12 text-center">
//                             <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
//                                 Project Gallery
//                             </p>

//                             <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
//                                 Explore Our Gallery
//                             </h2>

//                             <div className="mx-auto mt-5 flex items-center justify-center gap-2">
//                                 <span className="h-0.75 w-10 rounded-full bg-blue-600"></span>
//                                 <span className="h-0.75 w-4 rounded-full bg-blue-300"></span>
//                             </div>
//                         </div>

//                         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

//                             {data.gallery.map((image, index) => (

//                                 <div
//                                     key={index}
//                                     className="group relative h-72 overflow-hidden rounded-3xl shadow-lg"
//                                 >

//                                     <Image
//                                         src={image}
//                                         alt={`${data.title} ${index + 1}`}
//                                         fill
//                                         unoptimized
//                                         className="object-cover transition duration-700 group-hover:scale-110"
//                                     />

//                                     <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

//                                     <div className="absolute bottom-6 left-6 right-6 translate-y-6 text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">

//                                         <h3 className="text-xl font-bold">
//                                             {data.title}
//                                         </h3>

//                                         <p className="mt-1 text-sm text-slate-200">
//                                             Premium Construction & Modern Design
//                                         </p>

//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </section>
//                 {/* ===================== Related Projects ===================== */}

//                 <section className="bg-[#f8fbff] pb-1">
//                     <div className="mx-auto max-w-7xl px-5">
//                         <div className="mb-12 text-center">
//                             <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
//                                 Related Project
//                             </p>

//                             <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
//                                 Explore More Projects
//                             </h2>

//                             <div className="mx-auto mt-5 flex items-center justify-center gap-2">
//                                 <span className="h-0.75 w-10 rounded-full bg-blue-600"></span>
//                                 <span className="h-0.75 w-4 rounded-full bg-blue-300"></span>
//                             </div>
//                         </div>
//                         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//                             {projects
//                                 .filter((item) => item.slug !== data.slug)
//                                 .slice(0, 3)
//                                 .map((item) => (

//                                     <div
//                                         key={item.slug}
//                                         className="group overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
//                                     >
//                                         <div className="relative h-72 overflow-hidden">
//                                             <Image
//                                                 src={item.image}
//                                                 alt={item.title}
//                                                 fill
//                                                 unoptimized
//                                                 className="object-cover transition duration-700 group-hover:scale-110"
//                                             />
//                                             <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
//                                             <span className="absolute left-5 top-5 rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold text-white">
//                                                 {item.category}
//                                             </span>
//                                         </div>
//                                         <div className="p-7">
//                                             <div className="mb-3 flex items-center gap-2 text-sm text-slate-500">
//                                                 <MapPin className="h-4 w-4 text-blue-600" />
//                                                 {item.location}
//                                             </div>

//                                             <h3 className="text-2xl font-bold text-slate-900 transition group-hover:text-blue-600">
//                                                 {item.title}
//                                             </h3>

//                                             <p className="mt-4 line-clamp-3 leading-7 text-slate-600">
//                                                 {item.shortDescription}
//                                             </p>
//                                             <div className="mt-6 flex items-center justify-between">

//                                                 <span className="text-xl font-bold text-blue-600">
//                                                     {item.price}
//                                                 </span>

//                                                 <Link
//                                                     href={`/projects/${item.slug}`}
//                                                     className="inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:gap-3"
//                                                 >
//                                                     View Details
//                                                     <ArrowRight className="h-5 w-5" />
//                                                 </Link>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 ))}
//                         </div>
//                         <div className="mt-14 text-center">
//                             <Link
//                                 href="/projects"
//                                 className="inline-flex h-14 items-center justify-center rounded-xl bg-blue-600 px-4 lg:px-8 text-sm lg:text-base font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl"
//                             >
//                                 View All Projects
//                                 <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5" />
//                             </Link>
//                         </div>

//                     </div>
//                 </section>
//             </div>
//         </section>
//     );
// }

import {
    ArrowRight,
    BadgeCheck,
    Bath,
    BedDouble,
    Car,
    CheckCircle2,
    ChevronRight,
    IndianRupee,
    MapPin,
    Phone,
    Ruler
} from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

import Link from "next/link";

import { getProject, getProjects } from "../ProjectData";

export async function generateStaticParams() {
    const projects = await getProjects();

    return projects.map((project) => ({
        project: project.slug,
    }));
}

export default async function ProjectDetailPage({
    params,
}: {
    params: Promise<{ project: string }>;
}) {
    const { project } = await params;

    const data = await getProject(project);

    if (!data) {
        notFound();
    }

    // Needed for the "Related Projects" section below, which used to
    // read from the static `projects` array.
    const allProjects = await getProjects();
    console.log("allProjects ---->>", allProjects)

    // Add near the top of the file (outside the component), or in a utils file
    function calculateArea(dimension?: string): string {
        if (!dimension) return "N/A";

        // Handles "40/45", "40x45", "40 x 45" etc.
        const parts = dimension.split(/[/x×]/i).map((p) => parseFloat(p.trim()));

        if (parts.length !== 2 || parts.some((n) => isNaN(n))) {
            return dimension; // fallback to raw value if it doesn't match the pattern
        }

        const total = parts[0] * parts[1];

        return `${total} sq ft`;
    }


    // Helper to extract the "q" query param from a Google Maps link
    function getMapQuery(googleMapUrl?: string): string | null {
        if (!googleMapUrl) return null;

        try {
            const url = new URL(googleMapUrl);
            return url.searchParams.get("q");
        } catch {
            return null;
        }
    }
    return (
        <section className="bg-[#f8fbff] py-15">
            <div className="mx-auto max-w-7xl px-5">
                {/* ===================== Hero Section ===================== */}

                <section className="relative overflow-hidden pb-5">

                    {/* Background Image */}
                    <div className="relative h-105 md:h-137.5 lg:h-150px">

                        <Image
                            src={data.image}
                            alt={data.title}
                            fill
                            priority
                            unoptimized
                            className="object-cover"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-linear-to-r from-slate-950/90 via-slate-900/60 to-slate-900/20" />

                        {/* Content */}
                        <div className="absolute inset-0">

                            <div className="mx-auto flex h-full max-w-7xl flex-col justify-between px-5 py-8 lg:px-8 lg:py-12">

                                {/* Breadcrumb */}
                                <div>

                                    <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm text-white backdrop-blur-md">

                                        <Link
                                            href="/"
                                            className="transition hover:text-blue-400"
                                        >
                                            Home
                                        </Link>

                                        <ChevronRight size={16} />

                                        <Link
                                            href="/projects"
                                            className="transition hover:text-blue-400"
                                        >
                                            Projects
                                        </Link>

                                        <ChevronRight size={16} />

                                        <span className="font-semibold text-blue-400">
                                            {data.title}
                                        </span>

                                    </div>

                                </div>

                                {/* Hero Content */}
                                <div className="max-w-3xl">

                                    <span className="inline-flex rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-lg">
                                        {data.category}
                                    </span>

                                    <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
                                        {data.title}
                                    </h1>

                                    <p className="mt-5 max-w-2xl text-base leading-8 text-slate-200 md:text-lg">
                                        {data.shortDescription}
                                    </p>

                                    <div className="mt-8 flex flex-wrap items-center gap-6 text-white">

                                        <div className="flex items-center gap-2">
                                            <MapPin className="h-5 w-5 text-blue-400" />
                                            <span>{data.location}</span>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <Ruler className="h-5 w-5 text-blue-400" />
                                            <span>{calculateArea(data.dimension)}</span>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <BadgeCheck className="h-5 w-5 text-blue-400" />
                                            <span>{data.status}</span>
                                        </div>

                                    </div>

                                    {/* Buttons */}
                                    <div className="mt-10 flex flex-wrap gap-4">



                                        <button
                                            className="inline-flex h-14 items-center justify-center rounded-full bg-blue-600 px-4 lg:px-8 text-sm lg:text-base font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl"
                                        >
                                            Book Site Visit
                                            <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5" />
                                        </button>

                                        <a href="tel:+919876543210" className="inline-flex h-14 items-center justify-center rounded-full border-2 border-slate-300 bg-white px-4 lg:px-8 text-sm lg:text-base font-semibold text-slate-700 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-600 hover:text-blue-600 hover:shadow-lg">
                                            <Phone className="mr-2 h-4 w-4 lg:h-5 lg:w-5 fill-current" />
                                            Call Now
                                        </a>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>


                {/* ===================== Project Info Cards ===================== */}

                <section className="-mt-10 relative z-20">
                    <div className="mx-auto max-w-7xl px-5">

                        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

                            {/* Price */}
                            <div className="group rounded-3xl border border-white/30 bg-white/90 p-5 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-2xl">

                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 transition duration-300 group-hover:bg-blue-600">
                                    <IndianRupee className="h-5 w-5 text-blue-600 transition group-hover:text-white" />
                                </div>

                                <h3 className="mt-4 text-2xl font-extrabold text-slate-900">
                                    {data.price}
                                </h3>

                                <p className="mt-2 text-slate-500">
                                    Starting Price
                                </p>

                            </div>

                            {/* Status */}
                            <div className="group rounded-3xl border border-white/30 bg-white/90 p-5 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-2xl">

                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 transition duration-300 group-hover:bg-green-600">
                                    <BadgeCheck className="h-6 w-6 text-green-600 transition group-hover:text-white" />
                                </div>

                                <h3 className="mt-4 text-2xl font-extrabold text-slate-900">
                                    {data.status}
                                </h3>

                                <p className="mt-2 text-slate-500">
                                    Project Status
                                </p>

                            </div>

                            {/* Area */}
                            <div className="group rounded-3xl border border-white/30 bg-white/90 p-5 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-orange-500 hover:shadow-2xl">

                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 transition duration-300 group-hover:bg-orange-500">
                                    <Ruler className="h-6 w-6 text-orange-500 transition group-hover:text-white" />
                                </div>

                                <h3 className="mt-4 text-2xl font-extrabold text-slate-900">
                                    {calculateArea(data.dimension)}
                                </h3>

                                <p className="mt-2 text-slate-500">
                                    Built-up Area
                                </p>

                            </div>

                            {/* Location */}
                            {/* <div className="group rounded-3xl border border-white/30 bg-white/90 p-5 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-red-500 hover:shadow-2xl">

                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 transition duration-300 group-hover:bg-red-500">
                                    <MapPin className="h-6 w-6 text-red-500 transition group-hover:text-white" />
                                </div>

                                <h3 className="mt-4 text-xl font-bold leading-8 text-slate-900">
                                    {data.location}
                                </h3>

                                <p className="mt-2 text-slate-500">
                                    Prime Location
                                </p>

                            </div> */}

                            {/* Location */}
                            <div className="group rounded-3xl border border-white/30 bg-white/90 p-5 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-red-500 hover:shadow-2xl">

                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 transition duration-300 group-hover:bg-red-500">
                                    <MapPin className="h-6 w-6 text-red-500 transition group-hover:text-white" />
                                </div>

                                <h3 className="mt-4 text-xl font-bold leading-8 text-slate-900">
                                    {data.location}
                                </h3>

                                <p className="mt-2 text-slate-500">
                                    Prime Location
                                </p>

                                {/* {data.googleMap && (

                                    href = { data.googleMap }
            target="_blank"
                                rel="noopener noreferrer"
                                className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 transition hover:gap-2"
        >
                                View on Google Maps
                                <ArrowRight className="h-4 w-4" />
                            </a>
    )} */}

                            </div>
                        </div>

                    </div>
                </section>

                {/* ===================== Location & Map ===================== */}

                <section className="py-15">
                    <div className="mx-auto max-w-7xl px-5">

                        <div className="mb-12 text-center">
                            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                                Location
                            </p>

                            <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
                                Find Us on the Map
                            </h2>

                            <div className="mx-auto mt-5 flex items-center justify-center gap-2">
                                <span className="h-0.75 w-10 rounded-full bg-blue-600"></span>
                                <span className="h-0.75 w-4 rounded-full bg-blue-300"></span>
                            </div>
                        </div>

                        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">

                            <div className="grid lg:grid-cols-3">

                                {/* Map */}
                                <div className="lg:col-span-2">
                                    {getMapQuery(data.googleMap) && (
                                        <iframe
                                            src={`https://www.google.com/maps?q=${encodeURIComponent(getMapQuery(data.googleMap)!)}&output=embed`}
                                            width="100%"
                                            height="420"
                                            style={{ border: 0 }}
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            title={`Map location of ${data.title}`}
                                            className="h-full min-h-75 w-full"
                                        />
                                    )}
                                </div>

                                {/* Details */}
                                <div className="flex flex-col justify-center p-8">

                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50">
                                        <MapPin className="h-7 w-7 text-blue-600" />
                                    </div>

                                    <h3 className="mt-6 text-2xl font-bold text-slate-900">
                                        {data.title}
                                    </h3>

                                    <p className="mt-3 leading-7 text-slate-600">
                                        {data.location}
                                    </p>

                                    {data.googleMap && (
                                        <a
                                            href={data.googleMap}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-6 inline-flex h-12 w-fit items-center justify-center gap-2 rounded-full bg-blue-600 px-6 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl"
                                        >
                                            Get Directions
                                            <ArrowRight className="h-4 w-4" />
                                        </a>
                                    )}

                                </div>

                            </div>

                        </div>

                    </div>
                </section>

                {/* ===================== Project Overview ===================== */}

                <section className="py-15">
                    <div className="mx-auto max-w-7xl px-5">
                        <div className="mb-12 text-center">
                            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                                Project Overview
                            </p>

                            <h2 className="mt-5 text-3xl font-extrabold text-slate-900 md:text-5xl">
                                Building Dreams with Quality & Trust
                            </h2>

                            <div className="mx-auto mt-5 flex items-center justify-center gap-2">
                                <span className="h-0.75 w-10 rounded-full bg-blue-600"></span>
                                <span className="h-0.75 w-4 rounded-full bg-blue-300"></span>
                            </div>
                        </div>
                        <div className="grid items-center gap-12 lg:grid-cols-2">

                            {/* Left Image */}
                            <div className="relative overflow-hidden rounded-3xl">

                                <Image
                                    src={data.image}
                                    alt={data.title}
                                    width={700}
                                    height={600}
                                    unoptimized
                                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                                />

                                <div className="absolute bottom-6 left-6 rounded-2xl bg-blue-600 px-6 py-4 text-white shadow-xl">
                                    <h3 className="text-xl md:text-3xl font-bold">{calculateArea(data.dimension)}</h3>
                                    <p className="text-sm text-blue-100">
                                        Total Project Area
                                    </p>
                                </div>

                            </div>

                            {/* Right Content */}
                            <div>


                                <p className=" text-lg leading-7 text-slate-600">
                                    {data.overview}
                                </p>

                                <p className="mt-5 leading-6 text-slate-600">
                                    Rathore Buildcon delivers premium residential and commercial
                                    developments with a strong commitment to quality,
                                    transparency, and timely project completion. Every project
                                    is thoughtfully planned using modern architecture, durable
                                    materials, and smart layouts to ensure long-term value.
                                </p>

                                <div className="mt-5 grid gap-5 sm:grid-cols-2">

                                    <div className="flex items-start gap-4">

                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                                            <CheckCircle2 className="h-6 w-6 text-blue-600" />
                                        </div>

                                        <div>
                                            <h4 className="font-bold text-slate-900">
                                                Premium Construction
                                            </h4>

                                            <p className="mt-1 text-sm text-slate-500">
                                                High-quality materials with modern engineering.
                                            </p>
                                        </div>

                                    </div>

                                    <div className="flex items-start gap-4">

                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                                            <CheckCircle2 className="h-6 w-6 text-blue-600" />
                                        </div>

                                        <div>
                                            <h4 className="font-bold text-slate-900">
                                                Prime Location
                                            </h4>

                                            <p className="mt-1 text-sm text-slate-500">
                                                Excellent connectivity to schools, hospitals and markets.
                                            </p>
                                        </div>

                                    </div>

                                    <div className="flex items-start gap-4">

                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                                            <CheckCircle2 className="h-6 w-6 text-blue-600" />
                                        </div>

                                        <div>
                                            <h4 className="font-bold text-slate-900">
                                                Modern Amenities
                                            </h4>

                                            <p className="mt-1 text-sm text-slate-500">
                                                Lifestyle-focused facilities for every family.
                                            </p>
                                        </div>

                                    </div>

                                    <div className="flex items-start gap-4">

                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                                            <CheckCircle2 className="h-6 w-6 text-blue-600" />
                                        </div>

                                        <div>
                                            <h4 className="font-bold text-slate-900">
                                                Trusted Developer
                                            </h4>

                                            <p className="mt-1 text-sm text-slate-500">
                                                Delivering quality projects with complete transparency.
                                            </p>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>
                </section>
                {/* ===================== Property Details ===================== */}

                <section className="pb-15 bg-[#f8fbff]">
                    <div className="mx-auto max-w-7xl px-5">
                        <div className="mb-12 text-center">
                            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                                Property Details
                            </p>

                            <h2 className="mt-5 text-3xl font-extrabold text-slate-900 md:text-5xl">
                                Project Specifications
                            </h2>

                            <div className="mx-auto mt-5 flex items-center justify-center gap-2">
                                <span className="h-0.75 w-10 rounded-full bg-blue-600"></span>
                                <span className="h-0.75 w-4 rounded-full bg-blue-300"></span>
                            </div>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

                            {[
                                {
                                    icon: BedDouble,
                                    title: "Bedrooms",
                                    value: data.bedrooms,
                                },
                                {
                                    icon: Bath,
                                    title: "Bathrooms",
                                    value: data.bathrooms,
                                },
                                {
                                    icon: Car,
                                    title: "Parking",
                                    value: data.parking,
                                },
                                {
                                    icon: Ruler,
                                    title: "Area",
                                    value: calculateArea(data.dimension),
                                },
                            ].map((item) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={item.title}
                                        className="group rounded-3xl border border-slate-200 bg-white p-5 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-xl"
                                    >
                                        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 transition-all duration-300 group-hover:bg-blue-600">

                                            <Icon className="h-7 w-7 text-blue-600 transition group-hover:text-white" />

                                        </div>

                                        <h3 className="mt-6 text-2xl md:text-3xl font-extrabold text-slate-900">
                                            {item.value}
                                        </h3>

                                        <p className="mt-2 text-base font-medium text-slate-500">
                                            {item.title}
                                        </p>

                                    </div>
                                );
                            })}

                        </div>

                        {/* Extra Details */}

                        <div className="mt-14 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">

                            <div className="grid md:grid-cols-2">

                                <div className="border-b border-slate-200 p-6 md:border-b-0 md:border-r">
                                    <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                                        Project Status
                                    </p>

                                    <h3 className="mt-2 text-2xl font-bold text-blue-600">
                                        {data.status}
                                    </h3>
                                </div>

                                <div className="p-6">
                                    <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                                        Starting Price
                                    </p>

                                    <h3 className="mt-2 text-2xl font-bold text-blue-600">
                                        {data.price}
                                    </h3>
                                </div>

                            </div>

                        </div>

                    </div>
                </section>
                {/* ===================== Project Features ===================== */}

                <section className="pb-15">
                    <div className="mx-auto max-w-7xl px-5">

                        <div className="mb-12 text-center">
                            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                                Project Features
                            </p>

                            <h2 className="mt-5 text-3xl font-extrabold text-slate-900 md:text-5xl">
                                Premium Features You'll Love
                            </h2>

                            <div className="mx-auto mt-5 flex items-center justify-center gap-2">
                                <span className="h-0.75 w-10 rounded-full bg-blue-600"></span>
                                <span className="h-0.75 w-4 rounded-full bg-blue-300"></span>
                            </div>


                        </div>

                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

                            {data.features.map((feature) => (

                                <div
                                    key={feature}
                                    className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-md transition-all duration-500 hover:-translate-y-2 hover:border-[#155dfc]/40 hover:shadow-2xl"
                                >
                                    {/* Bottom Right Blue Glow */}
                                    <div className="pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-[#155dfc] opacity-0 blur-[90px] transition-all duration-700 ease-out group-hover:opacity-20 group-hover:scale-110" />

                                    {/* Soft Gradient Overlay */}
                                    <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-transparent via-transparent to-[#155dfc]/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                                    <div className="relative z-10 flex items-start gap-5">
                                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 transition-all duration-500 group-hover:bg-[#155dfc] group-hover:shadow-lg group-hover:shadow-[#155dfc]/40">
                                            <CheckCircle2 className="h-7 w-7 text-[#155dfc] transition-colors duration-500 group-hover:text-white" />
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-bold text-slate-900 transition-colors duration-300 group-hover:text-[#155dfc]">
                                                {feature}
                                            </h3>

                                            <p className="mt-2 text-sm leading-7 text-slate-500">
                                                Built with superior quality standards to ensure
                                                long-term durability, comfort, and modern living.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            ))}

                        </div>

                        {/* Bottom CTA */}

                        <div className="mt-16 rounded-4xl bg-linear-to-r from-blue-600 to-blue-700 p-6 text-center text-white shadow-xl">

                            <h3 className="text-3xl font-bold">
                                Looking for Your Dream Property?
                            </h3>

                            <p className="mx-auto mt-4 max-w-3xl text-blue-100">
                                Explore premium residential and commercial projects developed
                                with quality construction, thoughtful planning, and modern
                                amenities tailored to your lifestyle.
                            </p>
                            <Link
                                href="/contact"
                                className="mt-5 inline-flex items-center justify-center rounded-xl border-2 hover:border-white hover:bg-transparent px-4 py-4 font-semibold hover:text-white transition-all duration-300 bg-white text-blue-600 md:px-8"
                            >
                                Get Free Consultation
                            </Link>

                        </div>

                    </div>
                </section>

                {/* ===================== Amenities ===================== */}

                <section className="bg-[#f8fbff] pb-15">
                    <div className="mx-auto max-w-7xl px-5">

                        <div className="mb-12 text-center">
                            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                                World-Class Amenities
                            </p>

                            <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
                                Everything You Need for Comfortable Living
                            </h2>

                            <div className="mx-auto mt-5 flex items-center justify-center gap-2">
                                <span className="h-0.75 w-10 rounded-full bg-blue-600"></span>
                                <span className="h-0.75 w-4 rounded-full bg-blue-300"></span>
                            </div>
                        </div>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                            {data.amenities.map((item) => (

                                <div
                                    key={item}
                                    className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-xl"
                                >

                                    <div className="flex items-start gap-4">

                                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-green-50 transition-all duration-300 group-hover:bg-green-600">

                                            <CheckCircle2 className="h-7 w-7 text-green-600 transition group-hover:text-white" />

                                        </div>

                                        <div>

                                            <h3 className="text-lg font-bold text-slate-900 group-hover:text-green-600">
                                                {item}
                                            </h3>

                                            <p className="mt-2 text-sm leading-7 text-slate-500">
                                                Designed to enhance your everyday lifestyle
                                                with modern comfort, convenience, and safety.
                                            </p>

                                        </div>

                                    </div>

                                </div>

                            ))}

                        </div>

                        {/* Bottom Info */}

                        <div className="mt-16 rounded-4xl bg-white p-10 shadow-xl">

                            <div className="grid gap-10 md:grid-cols-3">

                                <div className="text-center">

                                    <h3 className="text-4xl font-extrabold text-blue-600">
                                        24×7
                                    </h3>

                                    <p className="mt-2 text-slate-600">
                                        Security & CCTV Surveillance
                                    </p>

                                </div>

                                <div className="text-center">

                                    <h3 className="text-4xl font-extrabold text-blue-600">
                                        100%
                                    </h3>

                                    <p className="mt-2 text-slate-600">
                                        Power Backup & Water Supply
                                    </p>

                                </div>

                                <div className="text-center">

                                    <h3 className="text-4xl font-extrabold text-blue-600">
                                        Premium
                                    </h3>

                                    <p className="mt-2 text-slate-600">
                                        Lifestyle & Community Facilities
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>
                </section>
                {/* ===================== Project Gallery ===================== */}

                <section className="pb-15">
                    <div className="mx-auto max-w-7xl px-5">

                        <div className="mb-12 text-center">
                            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                                Project Gallery
                            </p>

                            <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
                                Explore Our Gallery
                            </h2>

                            <div className="mx-auto mt-5 flex items-center justify-center gap-2">
                                <span className="h-0.75 w-10 rounded-full bg-blue-600"></span>
                                <span className="h-0.75 w-4 rounded-full bg-blue-300"></span>
                            </div>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

                            {data.gallery.map((image, index) => (

                                <div
                                    key={index}
                                    className="group relative h-72 overflow-hidden rounded-3xl shadow-lg"
                                >

                                    <Image
                                        src={image}
                                        alt={`${data.title} ${index + 1}`}
                                        fill
                                        unoptimized
                                        className="object-cover transition duration-700 group-hover:scale-110"
                                    />

                                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                                    <div className="absolute bottom-6 left-6 right-6 translate-y-6 text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">

                                        <h3 className="text-xl font-bold">
                                            {data.title}
                                        </h3>

                                        <p className="mt-1 text-sm text-slate-200">
                                            Premium Construction & Modern Design
                                        </p>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                {/* ===================== Related Projects ===================== */}

                <section className="bg-[#f8fbff] pb-1">
                    <div className="mx-auto max-w-7xl px-5">
                        <div className="mb-12 text-center">
                            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                                Related Project
                            </p>

                            <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
                                Explore More Projects
                            </h2>

                            <div className="mx-auto mt-5 flex items-center justify-center gap-2">
                                <span className="h-0.75 w-10 rounded-full bg-blue-600"></span>
                                <span className="h-0.75 w-4 rounded-full bg-blue-300"></span>
                            </div>
                        </div>
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {allProjects
                                .filter((item) => item.slug !== data.slug)
                                .slice(0, 3)
                                .map((item) => (

                                    <div
                                        key={item.slug}
                                        className="group overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                                    >
                                        <div className="relative h-72 overflow-hidden">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                unoptimized
                                                className="object-cover transition duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
                                            <span className="absolute left-5 top-5 rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold text-white">
                                                {item.category}
                                            </span>
                                        </div>
                                        <div className="p-7">
                                            <div className="mb-3 flex items-center gap-2 text-sm text-slate-500">
                                                <MapPin className="h-4 w-4 text-blue-600" />
                                                {item.location}
                                            </div>

                                            <h3 className="text-2xl font-bold text-slate-900 transition group-hover:text-blue-600">
                                                {item.title}
                                            </h3>

                                            <p className="mt-4 line-clamp-3 leading-7 text-slate-600">
                                                {item.shortDescription}
                                            </p>
                                            <div className="mt-6 flex items-center justify-between">

                                                <span className="text-xl font-bold text-blue-600">
                                                    {item.price}
                                                </span>

                                                <Link
                                                    href={`/projects/${item.slug}`}
                                                    className="inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:gap-3"
                                                >
                                                    View Details
                                                    <ArrowRight className="h-5 w-5" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                        <div className="mt-14 text-center">
                            <Link
                                href="/projects"
                                className="inline-flex h-14 items-center justify-center rounded-xl bg-blue-600 px-4 lg:px-8 text-sm lg:text-base font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl"
                            >
                                View All Projects
                                <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5" />
                            </Link>
                        </div>

                    </div>
                </section>
            </div >
        </section >
    );
}
