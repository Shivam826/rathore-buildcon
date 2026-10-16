"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Home, Search } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50 to-white px-5">

            {/* Background Circles */}
            <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl" />
            <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />

            {/* Grid Pattern */}
            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage:
                        "radial-gradient(#155dfc 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                }}
            />

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 max-w-3xl text-center"
            >
                {/* 404 */}
                <motion.h1
                    animate={{
                        y: [0, -10, 0],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                    }}
                    className="text-[110px] font-black leading-none text-blue-600 md:text-[180px]"
                >
                    404
                </motion.h1>

                <h2 className="-mt-2 text-3xl font-bold text-slate-900 md:text-5xl">
                    Oops! Page Not Found
                </h2>

                <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-600">
                    The page you're looking for doesn't exist or has been moved.
                    Let's get you back to finding your dream property.
                </p>

                {/* Buttons */}
                <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

                    <Link
                        href="/"
                        className="group inline-flex h-14 items-center justify-center rounded-xl bg-blue-600 px-8 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700"
                    >
                        <Home className="mr-2 h-5 w-5 transition group-hover:scale-110" />
                        Back to Home
                    </Link>

                    <Link
                        href="/projects"
                        className="group inline-flex h-14 items-center justify-center rounded-xl border-2 border-blue-600 bg-white px-8 font-semibold text-blue-600 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:text-white"
                    >
                        <Search className="mr-2 h-5 w-5 transition group-hover:scale-110" />
                        View Projects
                    </Link>

                </div>

            </motion.div>
        </section>
    );
}