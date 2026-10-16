"use client";

import { ArrowRight, PhoneCall } from "lucide-react";
import { useState } from "react";
import GetConsultationModal from "../components/GetConsulationModal";

export default function ServiceCTA() {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <div className="mt-10 flex flex-wrap gap-4">

                <button
                    onClick={() => setOpenModal(true)}
                    className="inline-flex h-14 cursor-pointer items-center rounded-xl bg-blue-600 px-8 font-semibold text-white transition hover:bg-transparent hover:text-blue-600 hover:border-blue-600 border"
                >
                    Get Free Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                </button>

                <a
                    href="tel:+919876543210"
                    className="inline-flex h-14 cursor-pointer items-center rounded-xl border border-blue-600 px-8 font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white"
                >
                    <PhoneCall className="mr-2 h-5 w-5" />
                    Call Now
                </a>

            </div>
            {
                openModal && (

                    <GetConsultationModal
                        isOpen={openModal}
                        onClose={() => setOpenModal(false)}
                    />
                )}
        </>
    );
}