import {
    ArrowRight,
    BadgeCheck,
    CalendarDays,
    CheckCircle2,
    ChevronRight,
    FileCheck2,
    FileText,
    Gavel,
    Landmark,
    Scale,
    ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const overviewCards = [
    {
        icon: FileText,
        title: "Acceptance",
        description: "Understand the terms before using our services.",
    },
    {
        icon: Landmark,
        title: "Services",
        description: "Construction, plotting & project management.",
    },
    {
        icon: ShieldCheck,
        title: "Privacy",
        description: "Your personal information remains protected.",
    },
    {
        icon: Scale,
        title: "Legal Rights",
        description: "Transparent agreements and fair practices.",
    },
];
const timeline = [
    {
        step: "01",
        title: "Accept Terms",
        desc: "Review and accept our Terms & Conditions before using our services.",
    },
    {
        step: "02",
        title: "Consultation",
        desc: "Discuss your project requirements with our experienced team.",
    },
    {
        step: "03",
        title: "Agreement",
        desc: "Quotation approval and agreement signing before execution.",
    },
    {
        step: "04",
        title: "Project Execution",
        desc: "Construction begins with complete transparency and quality assurance.",
    },
];

const customerResponsibilities = [
    "Provide accurate personal information",
    "Complete payments on time",
    "Provide required legal documents",
    "Approve drawings & quotations",
    "Cooperate during project execution",
    "Follow all agreed project terms",
];

const companyResponsibilities = [
    "Maintain premium construction quality",
    "Provide transparent quotations",
    "Deliver projects professionally",
    "Maintain complete project safety",
    "Use quality materials",
    "Offer dedicated customer support",
];

const legalCards = [
    {
        icon: ShieldCheck,
        title: "Privacy Protection",
        text: "Your personal information is collected, stored and processed securely according to our Privacy Policy.",
    },
    {
        icon: Landmark,
        title: "Intellectual Property",
        text: "All designs, logos, website content and branding belong exclusively to Rathore Buildcon.",
    },
    {
        icon: Gavel,
        title: "Legal Compliance",
        text: "All agreements are governed under applicable Indian laws and regulations.",
    },
    {
        icon: FileCheck2,
        title: "Project Agreement",
        text: "Every construction project follows an approved quotation and signed agreement.",
    },
];

export default function TermsPage() {
    return (
        <>
            <section className="relative overflow-hidden">

                {/* Background */}

                <div className="relative h-150">

                    <Image
                        src="/images/terms-banner.jpg"
                        alt="Terms & Conditions"
                        fill
                        priority
                        className="object-cover"
                        unoptimized
                    />

                    <div className="absolute inset-0 bg-linear-to-r from-slate-950/90 via-slate-900/70 to-blue-900/50" />

                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,.35),transparent_45%)]" />

                    <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-5">

                        <div className="max-w-3xl">

                            {/* Breadcrumb */}

                            <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm font-medium text-white/80">

                                <Link
                                    href="/"
                                    className="transition hover:text-blue-400"
                                >
                                    Home
                                </Link>

                                <ChevronRight size={16} />

                                <span className="text-blue-400">
                                    Terms & Conditions
                                </span>

                            </nav>

                            {/* Badge */}

                            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-md">

                                <CalendarDays className="h-4 w-4 text-blue-400" />

                                <span className="text-sm font-medium text-white">
                                    Last Updated • July 2026
                                </span>

                            </div>

                            <h1 className="text-5xl font-extrabold leading-tight text-white md:text-7xl">
                                Terms &
                                <span className="text-blue-400">
                                    {" "}Conditions
                                </span>
                            </h1>

                            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-200">
                                Please read these Terms & Conditions carefully before
                                using Rathore Buildcon's services. These terms define
                                your rights, responsibilities and our commitment to
                                delivering transparent and professional construction
                                services.
                            </p>

                            <div className="mt-10 flex flex-wrap gap-5">

                                <Link
                                    href="/contact"
                                    className="inline-flex h-14 items-center rounded-xl bg-blue-600 px-8 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700"
                                >
                                    Contact Us

                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>

                                <Link
                                    href="/privacy-policy"
                                    className="inline-flex h-14 items-center rounded-xl border border-white/20 bg-white/10 px-8 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-blue-500 hover:bg-blue-600"
                                >
                                    Privacy Policy
                                </Link>

                            </div>

                        </div>

                    </div>

                </div>

                {/* Floating Overview Cards */}

                <div className="relative z-20 mx-auto -mt-28 max-w-7xl px-5">

                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

                        {overviewCards.map((item) => {

                            const Icon = item.icon;

                            return (

                                <div
                                    key={item.title}
                                    className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-xl transition-all duration-300 hover:-translate-y-3 hover:border-blue-600 hover:shadow-2xl"
                                >

                                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 transition-all duration-300 group-hover:bg-blue-600">

                                        <Icon className="h-8 w-8 text-blue-600 transition-all duration-300 group-hover:rotate-6 group-hover:text-white" />

                                    </div>

                                    <h3 className="mt-6 text-2xl font-bold text-slate-900">

                                        {item.title}

                                    </h3>

                                    <p className="mt-4 leading-7 text-slate-600">

                                        {item.description}

                                    </p>

                                    <div className="mt-6 flex items-center font-semibold text-blue-600">

                                        Learn More

                                        <ArrowRight className="ml-2 h-5 w-5 transition group-hover:translate-x-2" />

                                    </div>

                                </div>

                            );

                        })}

                    </div>

                </div>

            </section>
            <section className="bg-slate-50 py-24">
                <div className="mx-auto max-w-7xl px-5">

                    {/* Heading */}

                    <div className="mx-auto mb-16 max-w-3xl text-center">

                        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
                            Terms Process
                        </span>

                        <h2 className="mt-5 text-4xl font-extrabold text-slate-900 md:text-5xl">
                            How Our Terms Work
                        </h2>

                        <p className="mt-5 text-lg leading-8 text-slate-600">
                            We believe in complete transparency. Every project follows
                            a structured legal process to ensure trust, clarity and
                            customer satisfaction.
                        </p>

                    </div>

                    {/* Timeline */}

                    <div className="grid gap-8 lg:grid-cols-4">

                        {timeline.map((item) => (

                            <div
                                key={item.step}
                                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:border-blue-600 hover:shadow-2xl"
                            >

                                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-blue-50 transition-all duration-300 group-hover:scale-150 group-hover:bg-blue-100" />

                                <div className="relative z-10">

                                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-2xl font-bold text-white shadow-lg">

                                        {item.step}

                                    </div>

                                    <h3 className="mt-6 text-2xl font-bold text-slate-900">
                                        {item.title}
                                    </h3>

                                    <p className="mt-4 leading-7 text-slate-600">
                                        {item.desc}
                                    </p>

                                </div>

                            </div>

                        ))}

                    </div>

                    {/* Responsibilities */}

                    <div className="mt-24 grid gap-10 lg:grid-cols-2">

                        {/* Customer */}

                        <div className="rounded-4xl bg-white p-10 shadow-xl">

                            <div className="flex items-center gap-4">

                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50">

                                    <BadgeCheck className="h-8 w-8 text-red-500" />

                                </div>

                                <div>

                                    <h3 className="text-3xl font-bold">
                                        Your Responsibilities
                                    </h3>

                                    <p className="text-slate-500">
                                        Customer obligations during the project.
                                    </p>

                                </div>

                            </div>

                            <div className="mt-8 space-y-5">

                                {customerResponsibilities.map((item) => (

                                    <div
                                        key={item}
                                        className="flex items-start gap-4 rounded-xl bg-slate-50 p-4 transition hover:bg-blue-50"
                                    >

                                        <CheckCircle2 className="mt-1 h-6 w-6 text-blue-600" />

                                        <span className="leading-7 text-slate-700">
                                            {item}
                                        </span>

                                    </div>

                                ))}

                            </div>

                        </div>

                        {/* Company */}

                        <div className="rounded-4xl bg-blue-600 p-10 text-white shadow-xl">

                            <div className="flex items-center gap-4">

                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20">

                                    <ShieldCheck className="h-8 w-8" />

                                </div>

                                <div>

                                    <h3 className="text-3xl font-bold">
                                        Our Commitment
                                    </h3>

                                    <p className="text-blue-100">
                                        What Rathore Buildcon promises to deliver.
                                    </p>

                                </div>

                            </div>

                            <div className="mt-8 space-y-5">

                                {companyResponsibilities.map((item) => (

                                    <div
                                        key={item}
                                        className="flex items-start gap-4 rounded-xl bg-white/10 p-4 transition hover:bg-white/20"
                                    >

                                        <CheckCircle2 className="mt-1 h-6 w-6" />

                                        <span className="leading-7">
                                            {item}
                                        </span>

                                    </div>

                                ))}

                            </div>

                        </div>

                    </div>

                    {/* Legal Cards */}

                    <div className="mt-24">

                        <div className="mb-14 text-center">

                            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
                                Legal Information
                            </span>

                            <h2 className="mt-5 text-4xl font-bold">
                                Important Legal Sections
                            </h2>

                        </div>

                        <div className="grid gap-8 md:grid-cols-2">

                            {legalCards.map((card) => {

                                const Icon = card.icon;

                                return (

                                    <div
                                        key={card.title}
                                        className="group rounded-[30px] border border-slate-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:border-blue-600 hover:shadow-2xl"
                                    >

                                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 transition group-hover:bg-blue-600">

                                            <Icon className="h-8 w-8 text-blue-600 transition group-hover:text-white group-hover:rotate-6" />

                                        </div>

                                        <h3 className="mt-6 text-2xl font-bold">
                                            {card.title}
                                        </h3>

                                        <p className="mt-5 leading-8 text-slate-600">
                                            {card.text}
                                        </p>

                                    </div>

                                );

                            })}

                        </div>

                    </div>

                </div>
            </section>
        </>
    );
}