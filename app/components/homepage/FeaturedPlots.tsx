"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import PlotCard from "./PlotCard";
import { plots } from "./PlotData";
import Stats from "./Stats";

export default function FeaturedPlots() {
    return (
        <section className="bg-[#f8fbff] py-15">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Heading */}
                <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">

                    <div>
                        <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
                            Featured Plots
                        </span>

                        <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
                            Premium Plots in Prime Locations
                        </h2>
                    </div>

                    <div className="flex items-center justify-center">
                        <Link
                            href="/plots"
                            className="inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-white px-5 py-3 font-semibold text-blue-600 transition-all duration-300 hover:bg-blue-600 hover:text-white"
                        >
                            View All Plots
                            <ArrowRight size={18} />
                        </Link>
                    </div>

                </div>

                {/* Plot Cards */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {plots
                        .slice(0, 4)
                        .map((plot) => (
                            <PlotCard
                                key={plot.id}
                                plot={plot}
                            />
                        ))}
                </div>

                {/* Bottom Stats */}
                <div className="mt-12">
                    <Stats />
                </div>

            </div>
        </section>
    );
}