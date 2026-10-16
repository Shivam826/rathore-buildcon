import { Building2, CheckCircle2, ChevronRight, Database, FileText, Lock, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PrivacyPolicyPage() {
    return (
        <>
            <section className="relative h-125 overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
                    alt="Privacy Policy"
                    fill
                    priority
                    unoptimized
                    className="object-cover"
                />

                <div className="absolute inset-0 bg-black/65" />

                <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-5">

                    <div className="mb-6 flex items-center gap-2 text-sm text-white/80">
                        <Link href="/" className="hover:text-blue-400">
                            Home
                        </Link>

                        <ChevronRight size={16} />

                        <span className="font-semibold text-blue-400">
                            Privacy Policy
                        </span>
                    </div>

                    <span className="mb-5 w-fit rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold text-white backdrop-blur-md">
                        Last Updated: July 2026
                    </span>

                    <h1 className="max-w-4xl text-5xl font-extrabold leading-tight text-white md:text-7xl">
                        Privacy Policy
                    </h1>

                    <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
                        We value your trust and are committed to protecting your
                        personal information while delivering world-class
                        construction and real estate services.
                    </p>

                </div>
            </section><section className="bg-slate-50 py-20">
                <div className="mx-auto max-w-7xl px-5">

                    <div className="grid gap-10 lg:grid-cols-[320px_1fr]">

                        {/* Sidebar */}

                        <div className="h-fit rounded-3xl bg-white p-7 shadow-lg lg:sticky lg:top-28">

                            <h3 className="mb-6 text-xl font-bold">
                                Quick Navigation
                            </h3>

                            <div className="space-y-3">

                                <a href="#collect" className="block rounded-xl px-4 py-3 transition hover:bg-blue-50 hover:text-blue-600">
                                    Information We Collect
                                </a>

                                <a href="#usage" className="block rounded-xl px-4 py-3 transition hover:bg-blue-50 hover:text-blue-600">
                                    How We Use Information
                                </a>

                                <a href="#security" className="block rounded-xl px-4 py-3 transition hover:bg-blue-50 hover:text-blue-600">
                                    Security
                                </a>

                                <a href="#cookies" className="block rounded-xl px-4 py-3 transition hover:bg-blue-50 hover:text-blue-600">
                                    Cookies
                                </a>

                                <a href="#thirdparty" className="block rounded-xl px-4 py-3 transition hover:bg-blue-50 hover:text-blue-600">
                                    Third Party Services
                                </a>

                                <a href="#contact" className="block rounded-xl px-4 py-3 transition hover:bg-blue-50 hover:text-blue-600">
                                    Contact
                                </a>

                            </div>

                        </div>

                        {/* Content */}

                        <div className="space-y-8">
                            <div
                                id="collect"
                                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-xl"
                            >
                                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 transition group-hover:bg-blue-600">
                                    <Database className="h-8 w-8 text-blue-600 group-hover:text-white" />
                                </div>

                                <h2 className="text-3xl font-bold">
                                    Information We Collect
                                </h2>

                                <p className="mt-4 leading-8 text-slate-600">
                                    We collect personal information when you submit
                                    inquiry forms, request consultations, or contact
                                    us through our website.
                                </p>

                                <div className="mt-6 grid gap-4 sm:grid-cols-2">

                                    {[
                                        "Full Name",
                                        "Phone Number",
                                        "Email Address",
                                        "Project Requirement",
                                    ].map((item) => (
                                        <div
                                            key={item}
                                            className="flex items-center gap-3 rounded-xl bg-slate-50 p-4"
                                        >
                                            <CheckCircle2 className="text-blue-600" />

                                            {item}
                                        </div>
                                    ))}

                                </div>
                            </div>
                            <div className="grid gap-6 md:grid-cols-4">

                                <div className="rounded-3xl bg-white p-7 text-center shadow-lg">
                                    <ShieldCheck className="mx-auto mb-4 h-12 w-12 text-blue-600" />
                                    <h3 className="font-bold">100% Secure</h3>
                                </div>

                                <div className="rounded-3xl bg-white p-7 text-center shadow-lg">
                                    <Lock className="mx-auto mb-4 h-12 w-12 text-blue-600" />
                                    <h3 className="font-bold">Protected Data</h3>
                                </div>

                                <div className="rounded-3xl bg-white p-7 text-center shadow-lg">
                                    <FileText className="mx-auto mb-4 h-12 w-12 text-blue-600" />
                                    <h3 className="font-bold">Transparent Policy</h3>
                                </div>

                                <div className="rounded-3xl bg-white p-7 text-center shadow-lg">
                                    <Building2 className="mx-auto mb-4 h-12 w-12 text-blue-600" />
                                    <h3 className="font-bold">Trusted Company</h3>
                                </div>

                            </div><div className="rounded-3xl bg-white p-8 shadow-lg">

                                <h2 className="mb-8 text-3xl font-bold">
                                    Frequently Asked Questions
                                </h2>

                                <div className="space-y-4">

                                    {[
                                        "Do you share customer information?",
                                        "Can I request deletion of my data?",
                                        "How do you protect my information?",
                                        "Who can I contact regarding privacy?",
                                    ].map((item) => (
                                        <details
                                            key={item}
                                            className="rounded-2xl border border-slate-200 p-5"
                                        >
                                            <summary className="cursor-pointer font-semibold">
                                                {item}
                                            </summary>

                                            <p className="mt-4 text-slate-600">
                                                We protect all customer information and only use it
                                                for communication regarding our services.
                                            </p>

                                        </details>
                                    ))}

                                </div>

                            </div>
                            <div className="overflow-hidden rounded-4xl bg-linear-to-r from-blue-600 to-blue-700 p-10 text-center text-white">

                                <h2 className="text-4xl font-bold">
                                    Need More Information?
                                </h2>

                                <p className="mx-auto mt-4 max-w-2xl text-blue-100">
                                    Have questions regarding our Privacy Policy or Terms?
                                    Contact our team today.
                                </p>

                                <div className="mt-8 flex flex-wrap justify-center gap-4">

                                    <Link
                                        href="/contact"
                                        className="rounded-xl bg-white px-8 py-4 font-semibold text-blue-600 transition hover:bg-slate-100"
                                    >
                                        Contact Us
                                    </Link>

                                    <Link
                                        href="/"
                                        className="rounded-xl border border-white/20 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-blue-600"
                                    >
                                        Back To Home
                                    </Link>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}