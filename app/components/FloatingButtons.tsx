"use client";

import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingButtons() {
    return (
        <div className="fixed bottom-6 right-6 z-9999 flex flex-col gap-3">
            {/* WhatsApp */}
            <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="group flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full border-2 md:border-4 border-white bg-[#25D366] shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-green-500/40"
            >
                <FaWhatsapp className="text-2xl md:text-3xl text-white transition-transform duration-300 group-hover:rotate-12" />
            </a>

            {/* Call */}
            <a
                href="tel:+919876543210"
                aria-label="Call"
                className="group flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full border-2 md:border-4 border-white bg-[#2563EB] shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-blue-500/40"
            >
                <Phone
                    className="text-white text-2xl md:text-4xl transition-transform duration-300 group-hover:-rotate-12"
                />
            </a>
        </div>
    );
}