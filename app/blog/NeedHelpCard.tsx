"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function NeedHelpCard() {
    return (
        <div className="sticky top-28 overflow-hidden rounded-3xl bg-linear-to-br from-[#155dfc] to-[#0a45d8] p-8 text-white shadow-2xl">

            {/* Background */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border border-white"></div>
                <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full border border-white"></div>
            </div>

            <div className="relative">
                <span className="text-sm uppercase tracking-[3px] text-blue-200">
                    Need Help?
                </span>
                <h3 className="mt-3 text-3xl font-bold leading-tight">
                    Let's Build Your Dream Project
                </h3>
                <p className="mt-4 text-blue-100 leading-7">
                    Get free consultation from Rathore Buildcon experts.
                    We help you choose the perfect solution for your
                    residential and commercial project.
                </p>

                <Link
                    href="/contact"
                    className="mt-8 inline-flex h-14 items-center justify-center rounded-xl bg-white px-8 font-semibold text-[#155dfc] transition hover:-translate-y-1 hover:bg-slate-100"
                >
                    Contact Us

                    <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
            </div>
        </div>
    );
}