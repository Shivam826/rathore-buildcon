"use client";

import {
    ArrowRight,
    Award,
    Building2,
    CheckCircle2,
    HeartHandshake,
    Users,
} from "lucide-react";
import Link from "next/link";

const features = [
    "15+ Years of Experience",
    "350+ Projects Completed",
    "100% Quality & Transparency",
    "On-Time Delivery",
];

const stats = [
    {
        icon: Award,
        value: "15+",
        label: "Years Experience",
    },
    {
        icon: Building2,
        value: "350+",
        label: "Projects Completed",
    },
    {
        icon: HeartHandshake,
        value: "120+",
        label: "Happy Clients",
    },
    {
        icon: Users,
        value: "40+",
        label: "Expert Professionals",
    },
];

export default function AboutSection() {
    return (
        <>
            <section className="relative bg-white py-15">
                <div className="absolute inset-0 lg:left-[35%]">
                    <img
                        src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200"
                        alt="Luxury Bungalow"
                        loading="eager"
                        className="absolute inset-0 h-full w-full object-cover object-center lg:object-right"
                    />

                    {/* White fade like screenshot */}
                    <div className="absolute inset-0 bg-linear-to-r from-white" />
                </div>

                {/* Content */}
                <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-7xl px-5 items-start">
                    <div className="grid items-center gap-16 lg:grid-cols-2">

                        {/* Left */}
                        <div>

                            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
                                About Us
                            </span>

                            <h2 className="mt-3 text-4xl font-extrabold leading-tight text-slate-900 lg:text-6xl">
                                Building a Better
                                <br />
                                Tomorrow
                            </h2>

                            <p className="mt-6 text-lg leading-8 text-slate-600">
                                Rathore Buildcon is a trusted name in plotting,
                                construction and complete bungalow projects.
                                We combine innovation, quality and transparency
                                to deliver spaces that inspire and last a lifetime.
                            </p>

                            {/* Features */}
                            <div className="mt-8 space-y-4">

                                {features.map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-center gap-3"
                                    >
                                        <CheckCircle2 className="h-6 w-6 text-blue-600" />

                                        <span className="text-lg font-medium text-slate-700">
                                            {item}
                                        </span>
                                    </div>
                                ))}

                            </div>

                            <Link
                                href="/about"
                                className="mt-10 inline-flex h-14 items-center rounded-xl bg-blue-600 px-8 font-semibold text-white transition hover:-translate-y-1 hover:bg-blue-700"
                            >
                                Know More About Us

                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>

                        </div>

                        {/* Right */}


                    </div>
                </div>
            </section>
            <div className="mt-24 text-center z-10 mx-auto pb-15 max-w-7xl px-5 items-start">

                <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
                    Our Journey
                </span>

                <h2 className="mt-3 text-4xl font-extrabold text-slate-900">
                    15+ Years of Excellence
                </h2>

                <div className="mx-auto mt-5 flex items-center justify-center gap-2">
                    <span className="h-0.75 w-10 rounded-full bg-blue-600"></span>
                    <span className="h-0.75 w-4 rounded-full bg-blue-300"></span>
                </div>

                <div className="mt-12 rounded-3xl border border-slate-200 bg-white shadow-xl">

                    <div className="grid grid-cols-2 divide-y divide-slate-200 md:grid-cols-4 md:divide-x md:divide-y-0">

                        {stats.map((item) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.label}
                                    className="group p-4 sm:p-5 lg:p-8 transition hover:bg-blue-50"
                                >
                                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 transition group-hover:bg-blue-600">
                                        <Icon className="h-8 w-8 text-blue-600 transition group-hover:text-white" />
                                    </div>

                                    <h3 className="mt-5 text-4xl font-extrabold text-blue-600">
                                        {item.value}
                                    </h3>

                                    <p className="mt-2 font-semibold text-slate-800">
                                        {item.label}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}















