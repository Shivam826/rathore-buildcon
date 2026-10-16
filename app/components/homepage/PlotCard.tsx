"use client";

import { motion } from "framer-motion";
import {
    ArrowRight,
    MapPin,
    MoveDiagonal,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Plot = {
    id: number;
    slug?: string;
    title: string;
    image: string;
    tag?: string;
    type?: string;
    location: string;
    area: string;
    price: string;
    gallery?: string[];
    description?: string;
    amenities?: string[];
    developer?: string;
};

interface PlotCardProps {
    plot: Plot;
}

const tagColors: Record<string, string> = {
    Residential: "bg-blue-600",
    Commercial: "bg-orange-500",
    Investment: "bg-green-500",
};

export default function PlotCard({ plot }: PlotCardProps) {
    return (
        <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="group overflow-hidden rounded-2xl border border-blue-500 bg-white shadow-[0_20px_50px_rgba(37,99,235,0.15)] transition-all duration-300 hover:shadow-2xl"
        >
            {/* Image */}
            <div className="relative h-52 overflow-hidden">
                <Image
                    src={plot.image}
                    alt={plot.title}
                    fill
                    unoptimized
                    className="object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />

                {/* Tag */}
                <span
                    className={`absolute left-4 top-4 rounded-md px-3 py-1 text-xs font-semibold text-white ${tagColors[(plot.tag ?? plot.type) as keyof typeof tagColors] ||
                        "bg-blue-600"
                        }`}
                >
                    {plot.tag ?? plot.type}
                </span>
            </div>

            {/* Content */}
            <div className="p-5">
                <h3 className="text-lg font-bold text-slate-900 transition group-hover:text-blue-600">
                    {plot.title}
                </h3>

                {/* Location */}
                <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">
                    <MapPin size={16} className="text-blue-600" />
                    <span>{plot.location}</span>
                </div>

                {/* Divider */}
                <div className="my-5 h-px bg-slate-200" />

                {/* Area & Price */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-500">
                        <MoveDiagonal size={16} />
                        <span className="text-sm">{plot.area}</span>
                    </div>

                    <div className="text-right">
                        <h4 className="text-xl font-bold text-blue-700">
                            {plot.price}
                        </h4>

                        <span className="text-xs text-slate-400">
                            Onwards
                        </span>
                    </div>
                </div>

                {/* Button */}
                <Link
                    href={`/plots/${plot.slug}`}
                    className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-600 transition-all hover:gap-3"
                >
                    View Details
                    <ArrowRight size={18} />
                </Link>
            </div>
        </motion.div>
    );
}