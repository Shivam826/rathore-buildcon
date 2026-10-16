"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import GetConsultationModal from "../GetConsulationModal";

const features = [
    "Custom Architectural Design",
    "Landscaping & Gardening",
    "Premium Quality Construction",
    "Electrical & Plumbing",
    "Modern Interior & Exterior",
    "Turnkey Handover",
];

export default function BungalowSection() {
    const [openModal, setOpenModal] = useState(false)
    return (
        <>
            <section className="bg-[#f8fbff] py-15">
                <div className="mx-auto max-w-7xl px-5">
                    <div className="grid items-center gap-8 lg:grid-cols-2">
                        {/* Image */}

                        <motion.div
                            initial={{ opacity: 0, x: -80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative overflow-hidden rounded-3xl shadow-xl"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400"
                                alt="Luxury Bungalow"
                                width={900}
                                height={650}
                                unoptimized
                                className="h-65 w-full object-cover transition duration-700 hover:scale-105 sm:h-95 lg:h-107.5"
                            />

                            <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent" />
                        </motion.div>

                        {/* Content */}

                        <motion.div
                            initial={{ opacity: 0, x: 80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-sm font-bold uppercase tracking-[2px] text-blue-600">
                                Complete Bungalow Solutions
                            </span>

                            <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
                                From Design to Handover,
                                <br />We&nbsp;
                                <span className="text-blue-600">
                                    Build Your
                                </span>&nbsp;Dream Home
                            </h2>

                            <p className="mt-4 max-w-xl text-lg leading-6 text-slate-600">
                                We provide end-to-end bungalow construction services with
                                modern design, premium quality materials, expert craftsmanship,
                                and guaranteed on-time delivery.
                            </p>

                            {/* Features */}

                            <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2">
                                {features.map((item, index) => (
                                    <motion.div
                                        key={item}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            delay: index * 0.1,
                                            duration: 0.5,
                                        }}
                                        className="flex items-center gap-3"
                                    >
                                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-100">
                                            <CheckCircle2
                                                size={16}
                                                className="text-blue-600"
                                            />
                                        </div>

                                        <span className="text-[15px] font-medium text-slate-700">
                                            {item}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Button */}

                            <motion.button
                                whileHover={{
                                    scale: 1.04,
                                }}
                                onClick={() => {
                                    setOpenModal(true)
                                }}
                                className="cursor-pointer mt-4 inline-flex items-center justify-center rounded-full border-2 border-slate-300 bg-white px-4 py-4 lg:px-8 text-sm lg:text-base font-semibold text-slate-700 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-600 hover:text-blue-600 hover:shadow-lg"
                            >Get Free Consultation<ArrowRight size={18} className="ml-2 h-4 w-4 lg:h-5 lg:w-5 fill-current" />
                            </motion.button>
                        </motion.div>
                    </div>
                </div>
            </section>
            {openModal && (
                <GetConsultationModal isOpen={openModal} onClose={() => { setOpenModal(false) }} />
            )}
        </>
    );
}