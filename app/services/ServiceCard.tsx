"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Props = {
    title: string;
    slug: string;
    image: string;
    description: string;
};

export default function ServiceCard({
    title,
    slug,
    image,
    description,
}: Props) {
    return (
        <Link
            href={`/services/${slug}`}
            className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
        >
            <div className="relative h-60 overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    unoptimized
                    className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />
            </div>

            <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900">
                    {title}
                </h3>

                <p className="mt-3 text-slate-600 leading-7">
                    {description}
                </p>

                <span className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-600 group-hover:gap-4 transition-all">
                    Explore Service
                    <ArrowRight size={18} />
                </span>
            </div>
        </Link>
    );
}