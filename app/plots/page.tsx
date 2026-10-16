"use client";

import { ArrowRight, MapPin, Ruler } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { plots } from "./plots";

const categories = [
    "All",
    "Residential",
    "Commercial",
    "Investment",
];

export default function PlotsPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const handleCategory = (category: string) => {
        setActiveCategory(category);
    };
    const filteredPlots =
        activeCategory === "All"
            ? plots
            : plots.filter((plot) => plot.type === activeCategory);
    console.log(filteredPlots, "filteredPlots")
    return (
        <section className="bg-[#f8fbff] py-15">
            <div className="mx-auto max-w-7xl px-5">

                {/* Breadcrumb */}

                <div className="mb-8 text-sm text-slate-500">
                    Home <span className="mx-2">›</span>
                    <span className="font-medium text-slate-700">Plots</span>
                </div>

                {/* Heading */}

                <div className="text-center">
                    <h2 className="text-4xl font-bold text-slate-900">
                        Premium Plots in Prime Locations
                    </h2>

                    <p className="mt-4 text-slate-500">
                        Find the perfect plot for your dream home or investment.
                    </p>
                </div>

                {/* Categories */}

                <div className="mt-10 flex flex-wrap justify-center gap-4">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => handleCategory(category)}
                            className={`cursor-pointer rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300
                                
                                ${activeCategory === category
                                    ? "bg-blue-600 text-white shadow-lg border-blue-600 border"
                                    : "border border-slate-200 bg-white text-slate-700 hover:border-blue-600 hover:text-blue-600"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Cards */}

                <div className="mt-14 grid gap-8 md:grid-cols-3">

                    {filteredPlots.length > 0 ? (
                        filteredPlots.map((plot) => (
                            <div
                                key={plot.id}
                                className="group overflow-hidden rounded-3xl border border-slate-300 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                            >

                                {/* Image */}

                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={plot.image}
                                        alt={plot.title}
                                        fill
                                        className="object-cover transition duration-500 group-hover:scale-110"
                                    />
                                </div>

                                {/* Content */}

                                <div className="p-7">

                                    <h3 className="text-xl font-bold text-slate-900">
                                        {plot.title}
                                    </h3>

                                    <div className="mt-2 flex items-center gap-2 text-slate-500">
                                        <MapPin size={16} />
                                        {plot.location}
                                    </div>

                                    <div className="mt-7 flex items-center justify-between">

                                        <div className="flex items-center gap-2 text-slate-500">
                                            <Ruler size={18} className="text-blue-600" />
                                            <span>{plot.area}</span>
                                        </div>

                                        <div className="text-right">
                                            <div className="text-2xl font-bold text-blue-600">
                                                {plot.price}
                                            </div>

                                            <div className="text-xs text-slate-400">
                                                Onwards
                                            </div>
                                        </div>
                                    </div>
                                    <Link
                                        href={`/plots/${plot.slug}`}
                                        className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:gap-3"
                                    >
                                        View Details
                                        <ArrowRight size={18} />
                                    </Link>
                                </div>

                            </div>
                        ))
                    ) : (
                        <div className=" col-span-full py-15 text-center flex items-center justify-center flex-col">

                            <h3 className="text-2xl font-bold">
                                No plots Found
                            </h3>

                            <p className="mt-3 text-slate-500">
                                Please select another category.
                            </p>

                        </div>
                    )}

                </div>
            </div>
        </section>
    );
}