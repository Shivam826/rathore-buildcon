"use client";

import { ArrowRight, PhoneCall } from "lucide-react";
import { useState } from "react";
import GetConsultationModal from "../GetConsulationModal";

export default function CTASection() {
    const [openModal, setOpenModal] = useState(false)
    return (
        <>
            <section className="bg-[#f8fbff] pb-15">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                    <div className="relative overflow-hidden rounded-2xl bg-linear-to-r from-[#1E4ED8] via-[#2158F5] to-[#1D4ED8] px-6 py-8 shadow-xl">

                        {/* Background Pattern */}
                        <div className="absolute right-0 top-0 h-full w-[35%] opacity-10">
                            <div
                                className="h-full w-full"
                                style={{
                                    backgroundImage:
                                        "radial-gradient(circle at 20px 20px, white 2px, transparent 2px)",
                                    backgroundSize: "32px 32px",
                                }}
                            />
                        </div>

                        <div className="relative z-10 flex flex-col items-center justify-between gap-6 lg:flex-row">

                            {/* Left Content */}
                            <div className="text-center lg:text-left">
                                <h2 className="text-3xl font-extrabold text-white">
                                    Ready to Build Your Dream Project?
                                </h2>

                                <p className="mt-2 text-blue-100">
                                    Get a free consultation and estimate for your project today.
                                </p>
                            </div>

                            {/* Right Buttons */}
                            <div className="flex flex-col gap-4 sm:flex-row">

                                <button
                                    onClick={() => { setOpenModal(true) }}
                                    className="group inline-flex h-14 items-center justify-center rounded-xl border-2 border-white bg-white px-8 font-semibold text-[#1E4ED8] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-transparent hover:text-white hover:border-white"
                                >
                                    Get Free Quote

                                    <ArrowRight className="ml-2 h-5 w-5 transition-all duration-300 group-hover:text-white group-hover:translate-x-1" />
                                </button>

                                <a
                                    href="tel:+919876543210"
                                    className="group inline-flex h-14 items-center justify-center rounded-xl border-2 border-white bg-transparent px-8 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#1E4ED8]"
                                >
                                    <PhoneCall className="mr-2 h-5 w-5 transition-all duration-300 group-hover:text-[#1E4ED8] group-hover:rotate-12" />

                                    +91 98765 43210
                                </a>

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