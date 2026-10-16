"use client";

import {
    Globe,
    Mail,
    MapPin,
    Phone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="relative overflow-hidden bg-linear-to-r from-[#07142b] via-[#0d1f44] to-[#07142b] text-white">
            {/* Background Decoration */}

            {/* Large Circle */}
            <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-blue-500/5 blur-3xl" />

            {/* Top Right Circle */}
            <div className="absolute -right-24 top-0 h-80 w-80 rounded-full bg-cyan-400/5 blur-3xl" />

            {/* Bottom Left Circle */}
            <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-indigo-500/5 blur-3xl" />

            {/* Bottom Right Circle */}
            <div className="absolute -bottom-20 right-20 h-60 w-60 rounded-full bg-blue-600/5 blur-3xl" />

            {/* Small Dots Pattern */}
            <div className="absolute right-10 top-10 opacity-10">
                <div className="grid grid-cols-6 gap-3">
                    {Array.from({ length: 48 }).map((_, i) => (
                        <div
                            key={i}
                            className="h-1.5 w-1.5 rounded-full bg-white"
                        />
                    ))}
                </div>
            </div>

            {/* Triangle / Pyramid */}
            <div
                className="absolute left-20 bottom-10 h-0 w-0 opacity-10"
                style={{
                    borderLeft: "40px solid transparent",
                    borderRight: "40px solid transparent",
                    borderBottom: "70px solid #3B82F6",
                }}
            />

            {/* Second Triangle */}
            <div
                className="absolute right-40 bottom-24 h-0 w-0 opacity-10"
                style={{
                    borderLeft: "25px solid transparent",
                    borderRight: "25px solid transparent",
                    borderBottom: "45px solid #60A5FA",
                }}
            />
            <div className="relative z-10 mx-auto max-w-7xl px-6 pb-10 pt-12">

                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

                    {/* Logo */}
                    {/* Logo */}
                    <div>
                        <Image
                            src="/logo-white-footer-1.png"
                            alt="Rathore Buildcon"
                            width={300}
                            height={100}
                            loading="eager"
                            className=""
                        />

                        <p className="mt-3 mb-3 text-sm leading-6 text-slate-300">
                            Building Dreams, Delivering Trust with premium plotting,
                            construction and bungalow solutions.
                        </p>

                        {/* Social Icons */}
                        <div className="flex items-center gap-3">

                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-600 hover:text-white"
                            >
                                <FaFacebookF size={16} />
                            </a>

                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-pink-500 hover:bg-linear-to-r hover:from-pink-500 hover:to-orange-500 hover:text-white"
                            >
                                <FaInstagram size={16} />
                            </a>

                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-sky-500 hover:bg-sky-600 hover:text-white"
                            >
                                <FaLinkedinIn size={16} />
                            </a>

                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-black hover:text-white"
                            >
                                <FaXTwitter size={16} />
                            </a>

                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-red-500 hover:bg-red-600 hover:text-white"
                            >
                                <FaYoutube size={16} />
                            </a>

                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-5 text-lg font-bold">
                            Quick Links
                        </h3>

                        <ul className="space-y-3 text-sm text-slate-300">
                            {[
                                {
                                    id: "1",
                                    name: "Home",
                                    url: "/"
                                }, {
                                    id: "2",
                                    name: "About Us",
                                    url: "/about"
                                },
                                {
                                    id: "3",
                                    name: "Projects",
                                    url: "/projects"
                                },
                                {
                                    id: "4",
                                    name: "Plots",
                                    url: "/plots"
                                },
                                {
                                    id: "5",
                                    name: "Contact Us",
                                    url: "/contact"
                                },
                            ].map((item) => (
                                <li key={item?.id}>
                                    <Link
                                        href={item?.url} className="transition hover:text-blue-400"
                                    >
                                        {item?.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="mb-5 text-lg font-bold">
                            Our Services
                        </h3>

                        <ul className="space-y-3 text-sm text-slate-300">
                            {[
                                "Plotting Solutions",
                                "Construction Services",
                                "Complete Bungalows",
                                "Interior Design",
                                "Renovation",
                            ].map((item) => (
                                <li key={item}>
                                    <Link
                                        href="/"
                                        className="transition hover:text-blue-400"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="mb-5 text-lg font-bold">
                            Contact Us
                        </h3>

                        <div className="space-y-4 text-sm text-slate-300">

                            <div className="flex gap-3">
                                <MapPin className="mt-1 h-5 w-5 text-blue-500" /> 
                                <p>
                                    Navneet Priya Plaza, 104, opp. <br />Dussehra maidan, Usha Nagar,<br /> Indore, Madhya Pradesh 452009
                                </p>
                            </div>

                            <a
                                href="tel:+919876543210"
                                className="flex items-center gap-3 hover:text-blue-400"
                            >
                                <Phone className="h-5 w-5 text-blue-500" />
                                +91 98765 43210
                            </a>

                            <a
                                href="mailto:info@rathorebuildcon.com"
                                className="flex items-center gap-3 hover:text-blue-400"
                            >
                                <Mail className="h-5 w-5 text-blue-500" />
                                info@rathorebuildcon.com
                            </a>

                            <a
                                href="/"
                                className="flex items-center gap-3 hover:text-blue-400"
                            >
                                <Globe className="h-5 w-5 text-blue-500" />
                                www.rathorebuildcon.com
                            </a>

                        </div>
                    </div>

                </div>

                {/* Bottom */}

                <div className="mt-5 border-t border-white/10 pt-6">

                    <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-400 md:flex-row">

                        <p>
                            © {new Date().getFullYear()} Rathore Buildcon.
                            All Rights Reserved.
                        </p>

                        <div className="flex gap-6">

                            <Link href="/privacy-policy" className="hover:text-white">
                                Privacy Policy
                            </Link>

                            <Link href="/terms-and-conditions" className="hover:text-white">
                                Terms & Conditions
                            </Link>

                        </div>

                    </div>

                </div>

            </div>
        </footer>
    );
}