"use client";

import {
    MapPin,
    Phone,
    Mail,
    Globe,
    Clock,
    Send,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";
const socialIcons = [
    {
        icon: FaFacebookF,
        href: "#",
        hover: "hover:bg-blue-600 hover:border-blue-600",
    },
    {
        icon: FaLinkedinIn,
        href: "#",
        hover: "hover:bg-sky-600 hover:border-sky-600",
    },
    {
        icon: FaInstagram,
        href: "#",
        hover:
            "hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 hover:border-pink-500",
    },
    {
        icon: FaTwitter,
        href: "#",
        hover: "hover:bg-black hover:border-white",
    },
    {
        icon: FaYoutube,
        href: "#",
        hover: "hover:bg-red-600 hover:border-red-600",
    },
];
export default function ContactSection() {
    return (
        <section className="bg-[#f8fbff] py-15">
            <div className="mx-auto max-w-7xl px-5">

                {/* Heading */}
                <div className="mb-14 text-center">
                    <span className="text-sm font-bold uppercase tracking-[2px] text-blue-600">
                        Contact Us
                    </span>

                    <h2 className="mt-2 text-4xl font-bold text-slate-900">
                        Contact Us
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-slate-600">
                        We are here to help you. Get in touch with us for any
                        queries or a free consultation.
                    </p>

                    <div className="mx-auto mt-5 flex justify-center gap-2">
                        <span className="h-1 w-10 rounded-full bg-blue-600"></span>
                        <span className="h-1 w-4 rounded-full bg-blue-300"></span>
                    </div>
                </div>

                {/* Contact Box */}
                <div className="grid gap-10 lg:grid-cols-3">

                    {/* Left */}
                    <div className="space-y-8">

                        <div>
                            <h3 className="mb-6 text-2xl font-bold">
                                Get In Touch
                            </h3>

                            <div className="space-y-5">

                                <div className="flex gap-4 items-center">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100">
                                        <MapPin className="h-5 w-5 text-blue-600" />
                                    </div>

                                    <p className="text-slate-600">
                                        Navneet Priya Plaza, 104, opp. <br />Dussehra maidan, Usha Nagar,<br /> Indore, Madhya Pradesh 452009
                                    </p>
                                </div>

                                <div className="flex gap-4 items-center">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100">
                                        <Phone className="h-5 w-5 text-blue-600" />
                                    </div>

                                    <p className="text-slate-600">
                                        +91 98765 43210
                                    </p>
                                </div>

                                <div className="flex gap-4 items-center">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100">
                                        <Mail className="h-5 w-5 text-blue-600" />
                                    </div>

                                    <p className="text-slate-600">
                                        info@rathorebuildcon.com
                                    </p>
                                </div>

                                <div className="flex gap-4 items-center">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100">
                                        <Globe className="h-5 w-5 text-blue-600" />
                                    </div>

                                    <p className="text-slate-600">
                                        www.rathorebuildcon.com
                                    </p>
                                </div>

                                <div className="flex gap-4 items-center">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100">
                                        <Clock className="h-5 w-5 text-blue-600" />
                                    </div>

                                    <p className="text-slate-600">
                                        Mon - Sat
                                        <br />
                                        9:00 AM - 7:00 PM
                                    </p>
                                </div>

                            </div>
                        </div>

                        {/* Social */}

                        <div>
                            <h4 className="mb-4 font-semibold">
                                Follow Us
                            </h4>

                            <div className="flex gap-3">
                                {socialIcons.map((item, index) => {
                                    const Icon = item.icon;

                                    return (
                                        <a
                                            key={index}
                                            href={item.href}
                                            className={`flex h-11 w-11 items-center justify-center rounded-full border border-blue-600 bg-white text-blue-600 hover:text-white transition-all duration-300 hover:-translate-y-1 ${item.hover}`}
                                        >
                                            <Icon size={18} />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>

                    </div>

                    {/* Form */}

                    <div className="lg:col-span-2">

                        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">

                            <form className="space-y-5">

                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="h-14 w-full rounded-xl border border-slate-200 px-5 outline-none transition focus:border-blue-600"
                                />

                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    className="h-14 w-full rounded-xl border border-slate-200 px-5 outline-none transition focus:border-blue-600"
                                />

                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="h-14 w-full rounded-xl border border-slate-200 px-5 outline-none transition focus:border-blue-600"
                                />

                                <textarea
                                    rows={5}
                                    placeholder="Your Message"
                                    className="w-full rounded-xl border border-slate-200 p-5 outline-none transition focus:border-blue-600"
                                />
                                <div>
                                    <button
                                        type="submit"
                                        className="group inline-flex w-full cursor-pointer h-14 items-center justify-center rounded-xl bg-blue-600 px-4 lg:px-8 text-sm lg:text-base font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-transparent hover:text-blue-600 hover:border-blue-600 border-2 hover:shadow-xl"
                                    >
                                        Send Message
                                        <Send className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                                    </button>
                                     
                                </div>
                            </form>

                        </div>

                    </div>

                </div>

                {/* Map */}

                <div className="mt-16 overflow-hidden rounded-3xl shadow-xl">

                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.8617737175837!2d75.83415477956423!3d22.696189026298182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fdb51c8a723d%3A0x3c2df50590b2108b!2sRathore%20Buildcon!5e0!3m2!1sen!2sin!4v1783595128110!5m2!1sen!2sin"
                        className="h-70 w-full md:h-105 "
                        loading="lazy"
                        referrerPolicy="strict-origin-when-cross-origin"
                    />
                </div>

            </div>
        </section>
    );
}