"use client";

import { motion } from "framer-motion";

const process = [
    {
        number: "1",
        title: "Consultation",
        description: "Understanding your requirements",
    },
    {
        number: "2",
        title: "Planning & Design",
        description: "Planning and architectural design",
    },
    {
        number: "3",
        title: "Approval",
        description: "Getting all necessary approvals",
    },
    {
        number: "4",
        title: "Construction",
        description: "High quality construction",
    },
    {
        number: "5",
        title: "Handover",
        description: "On-time project handover",
    },
];

export default function ConstructionProcess() {
    return (
        <section className="bg-[#f8fbff] py-15">
            <div className="mx-auto max-w-7xl px-5">

                {/* Heading */}

                <div className="mb-10 md:mb-16 text-center">
                    <span className="text-sm font-bold uppercase tracking-[2px] text-blue-600">
                        Our Process
                    </span>

                    <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
                        Our Construction Process
                    </h2>
                    <div className="mx-auto mt-5 flex items-center justify-center gap-2">
                        <span className="h-0.75 w-10 rounded-full bg-blue-600"></span>
                        <span className="h-0.75 w-4 rounded-full bg-blue-300"></span>
                    </div>
                </div>

                {/* Desktop */}

                <div className="hidden lg:flex items-start justify-between">
                    {process.map((item, index) => (
                        <motion.div
                            key={item.number}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: .5,
                                delay: index * .15,
                            }}
                            className="relative flex flex-1 flex-col items-center text-center"
                        >
                            {/* Line */}

                            {index !== process.length - 1 && (
                                <div className="absolute left-1/2 top-7 w-full translate-x-8 border-t-2 border-dashed border-blue-200"></div>
                            )}

                            {/* Circle */}

                            <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white shadow-lg">
                                {item.number}
                            </div>

                            <h3 className="mt-5 text-lg font-bold text-slate-900">
                                {item.title}
                            </h3>

                            <p className="mt-2 max-w-42.5 text-sm leading-6 text-slate-500">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile */}

                <div className="space-y-8 lg:hidden">
                    {process.map((item, index) => (
                        <motion.div
                            key={item.number}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: index * .1,
                            }}
                            className="flex items-start gap-5"
                        >
                            <div className="relative flex flex-col items-center">

                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white shadow-lg">
                                    {item.number}
                                </div>

                                {index !== process.length - 1 && (
                                    <div className="mt-2 h-16 border-l-2 border-dashed border-blue-300"></div>
                                )}
                            </div>

                            <div className="pt-2">
                                <h3 className="text-lg font-bold text-slate-900">
                                    {item.title}
                                </h3>

                                <p className="mt-1 text-slate-500">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}