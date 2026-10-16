"use client";
import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, Building2, ChevronRight, Clock3, Play, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import GetConsultationModal from "../GetConsulationModal";

const fadeUp = {
    hidden: {
        opacity: 0,
        y: 50,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
        },
    },
};

const stagger = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
}; 
export default function Hero() {
    const [openModal, setOpenModal] = useState(false);
    return (
        <>
            <section className="relative min-h-[70vh] overflow-hidden bg-white py-15 px-5">
                {/* Right Background Image */}
                <div className="absolute inset-0 lg:left-[35%]">
                    <img
                        src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg"
                        alt="Luxury Bungalow"
                        className="absolute inset-0 h-full w-full object-cover object-center lg:object-right"
                    />

                    {/* White fade like screenshot */}
                    <div className="absolute inset-0 bg-linear-to-r from-white via-white/95 lg:via-white/70 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-7xl items-start">
                    <div className="grid w-full grid-cols-1 items-start gap-12 lg:grid-cols-2">
                        {/* Left Content */}
                        <motion.div
                            className="max-w-xl lg:max-w-2xl"
                            variants={stagger}
                            initial="hidden"
                            animate="visible">
                            <motion.span
                                variants={fadeUp} className="inline-flex rounded-full bg-orange-100 px-4 py-2 text-xs font-semibold text-orange-600 sm:text-sm">
                                🏆 15+ YEARS OF EXCELLENCE
                            </motion.span>

                            <h1 className="mt-6 text-4xl font-black leading-tight text-slate-900 sm:text-5xl lg:text-6xl xl:text-[55px]">
                                Building Dreams,
                                <br />
                                Creating{" "}
                                <span className="text-blue-600">
                                    Landmarks
                                </span>
                            </h1>
                            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold uppercase tracking-wider text-[#1E40AF] sm:text-sm">
                                {[
                                    "Plots",
                                    "Construction",
                                    "Complete Bungalows",
                                ].map((item, index) => (
                                    <div key={item} className="flex items-center">
                                        <div className="flex items-center gap-1">
                                            <ChevronRight className="h-4 w-4 fill-current text-blue-600" />
                                            <span>{item}</span>
                                        </div>

                                        {index !== 2 && (
                                            <span className="mx-4 text-slate-400">•</span>
                                        )}
                                    </div>
                                ))}
                            </div>
                            <p className="mt-6 max-w-lg text-base leading-7 text-slate-600 sm:text-lg">
                                Premium plotting, construction and complete bungalow
                                solutions with unmatched quality, transparency and trust.
                            </p>

                            {/* Buttons */}
                            <div className="mt-8 flex gap-4">
                                <button
                                    onClick={() => { setOpenModal(true); }}
                                    className="cursor-pointer inline-flex h-14 items-center justify-center rounded-full bg-blue-600 px-4 lg:px-8 text-sm lg:text-base font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl"
                                >
                                    Get Free Quote
                                    <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5" />
                                </button>

                                <Link href="/projects" className="cursor-pointer inline-flex h-14 items-center justify-center rounded-full border-2 border-slate-300 bg-white px-4 lg:px-8 text-sm lg:text-base font-semibold text-slate-700 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-600 hover:text-blue-600 hover:shadow-lg">
                                    <Play className="mr-2 h-4 w-4 lg:h-5 lg:w-5 fill-current" />
                                    View Projects
                                </Link>
                            </div>
                            <div className="mt-10 grid grid-cols-2 gap-4 xl:hidden">
                                {[
                                    ["15+", "Years"],
                                    ["350+", "Projects"],
                                    ["RERA", "Approved"],
                                    ["On-Time", "Delivery"],
                                ].map(([number, title]) => (
                                    <div
                                        key={title}
                                        className="rounded-2xl border border-slate-200 bg-white p-4 shadow"
                                    >
                                        <h3 className="text-2xl font-bold text-blue-600">{number}</h3>
                                        <p className="text-sm text-slate-500">{title}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Empty Right Side */}
                        <div />
                    </div>

                </div>

                {/* Floating Card */}
                {/* Floating Stats Card */}
                <div className="absolute right-6  lg:right-25 top-1/2 z-20 hidden -translate-y-1/2 lg:block">
                    <div className="relative">
                        <div className="w-72 rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.15)]">

                            <div className="space-y-6">

                                {[
                                    {
                                        icon: (
                                            <Building2 className="h-6 w-6 text-blue-600" />
                                        ),
                                        number: "15+",
                                        title: "Years Experience",
                                    },
                                    {
                                        icon: (
                                            <ShieldCheck className="h-6 w-6 text-orange-500" />
                                        ),
                                        number: "350+",
                                        title: "Projects Completed",
                                    },
                                    {
                                        icon: (
                                            <BadgeCheck className="h-6 w-6 text-orange-500" />
                                        ),
                                        number: "RERA",
                                        title: "Approved Projects",
                                    },
                                    {
                                        icon: (
                                            <Clock3 className="h-6 w-6 text-blue-600" />
                                        ),
                                        number: "On-Time",
                                        title: "Project Delivery",
                                    },
                                ].map((item) => (
                                    <div
                                        key={item.title}
                                        className="flex items-center gap-4 border-b border-slate-200 pb-5 last:border-none last:pb-0"
                                    >
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f8fbff]">
                                            {item.icon}
                                        </div>

                                        <div>
                                            <h3 className="text-2xl font-bold text-slate-900">
                                                {item.number}
                                            </h3>

                                            <p className="text-sm text-slate-500">
                                                {item.title}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>

            </section>
            {
                openModal && (
                    <GetConsultationModal isOpen={openModal} onClose={() => { setOpenModal(false) }} />
                )
            }
        </>
    );
}