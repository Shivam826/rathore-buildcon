"use client";

import { motion } from "framer-motion";
import {
    Award,
    Building2,
    Headphones,
    ShieldCheck,
} from "lucide-react";

const stats = [
    {
        icon: Award,
        value: "15+",
        title: "Years Experience",
        description: "Delivering excellence since 2009",
    },
    {
        icon: Building2,
        value: "350+",
        title: "Projects Completed",
        description: "Residential, commercial & bungalow projects",
    },
    {
        icon: ShieldCheck,
        value: "100%",
        title: "Quality Materials",
        description: "We use only premium quality materials",
    },
    {
        icon: Headphones,
        value: "24×7",
        title: "Customer Support",
        description: "We are always here to help you",
    },
];

export default function Stats() {
    return (
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="grid grid-cols-1 divide-y divide-slate-200 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
                {stats.map((item, index) => {
                    const Icon = item.icon;

                    return (
                        <motion.div
                            key={index}
                            whileHover={{
                                y: -6,
                                transition: { duration: 0.25 },
                            }}
                            className="flex items-center gap-5 p-6 transition-all duration-300"
                        >
                            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                                <Icon size={34} strokeWidth={1.8} />
                            </div>

                            <div>
                                <h3 className="text-3xl font-bold text-blue-700">
                                    {item.value}
                                </h3>

                                <h4 className="mt-1 text-base font-semibold text-slate-900">
                                    {item.title}
                                </h4>

                                <p className="mt-1 text-sm leading-6 text-slate-500">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}