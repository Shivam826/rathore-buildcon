import {
    ArrowRight,
    CheckCircle2,
    ChevronRight
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { services } from "../ServiceData";
import ServiceCTA from "../serviceCTA";

export function generateStaticParams() {
    return services.map((service) => ({
        service: service.slug,
    }));
}

export default async function ServiceDetailPage({
    params,
}: {
    params: Promise<{ service: string }>;
}) {
    const { service } = await params;

    const data = services.find((item) => item.slug === service);

    if (!data) {
        notFound();
    }

    const features = [
        "Experienced Team",
        "Premium Quality Materials",
        "Transparent Pricing",
        "Timely Project Delivery",
        "Modern Design & Planning",
        "Customer Satisfaction",
    ];

    const process = [
        {
            step: "01",
            title: "Consultation",
            desc: "Understanding your requirements and project goals.",
        },
        {
            step: "02",
            title: "Planning",
            desc: "Preparing layouts, estimates and timelines.",
        },
        {
            step: "03",
            title: "Execution",
            desc: "Professional execution with quality materials.",
        },
        {
            step: "04",
            title: "Handover",
            desc: "Final inspection and project delivery.",
        },
    ];

    return (
        <>
            {/* Hero */}
            <section className="relative h-[450px] overflow-hidden">
                <Image
                    src={data.image}
                    alt={data.title}
                    fill
                    priority
                    unoptimized
                    className="object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60" />

                <div className="relative z-10 flex h-full items-center justify-center px-5 text-center">
                    <div>

                        {/* Breadcrumb */}
                        <nav className="mb-5 flex items-center justify-center gap-2 text-sm font-medium text-white/80">
                            <Link
                                href="/"
                                className="transition hover:text-white"
                            >
                                Home
                            </Link>

                            <ChevronRight className="h-4 w-4 text-slate-400" />

                            <Link
                                href="/services"
                                className="transition hover:text-white"
                            >
                                Services
                            </Link>

                            <ChevronRight className="h-4 w-4 text-slate-400" />

                            <span className="font-semibold text-blue-400">
                                {data.title}
                            </span>
                        </nav>

                        {/* Title */}
                        <h1 className="text-4xl font-extrabold text-white md:text-6xl">
                            {data.title}
                        </h1>

                        {/* Description */}
                        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-200">
                            {data.description}
                        </p>
                    </div>
                </div>
            </section>
            {/* About */}
            <section className="bg-white py-20">
                <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2">

                    <div>
                        <span className="font-semibold uppercase tracking-widest text-blue-600">
                            About Service
                        </span>

                        <h2 className="mt-3 text-4xl font-bold text-slate-900">
                            {data.title}
                        </h2>

                        <p className="mt-6 leading-8 text-slate-600">
                            {data.description} Rathore Buildcon delivers reliable,
                            innovative and high-quality solutions with complete
                            transparency and professional execution. We focus on
                            customer satisfaction while maintaining superior
                            construction standards.
                        </p>

                        <div className="mt-8 space-y-4">
                            {features.map((item) => (
                                <div key={item} className="flex items-center gap-3">
                                    <CheckCircle2 className="h-6 w-6 text-blue-600" />
                                    <span className="font-medium text-slate-700">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <ServiceCTA />
                    </div>

                    <div className="overflow-hidden rounded-3xl shadow-xl">
                        <Image
                            src={data.image}
                            alt={data.title}
                            width={700}
                            height={600}
                            unoptimized
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="bg-[#f8fbff] py-15">
                <div className="mx-auto max-w-7xl px-5">

                    <div className="mb-14 text-center">
                        <span className="font-semibold uppercase tracking-widest text-blue-600">
                            Our Process
                        </span>

                        <h2 className="mt-3 text-4xl font-bold text-slate-900">
                            How We Work
                        </h2>
                        <div className="mx-auto mt-5 flex items-center justify-center gap-2">
                            <span className="h-0.75 w-10 rounded-full bg-blue-600"></span>
                            <span className="h-0.75 w-4 rounded-full bg-blue-300"></span>
                        </div> 
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {process.map((item) => (
                            <div
                                key={item.step}
                                className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2"
                            >
                                <div className="text-5xl font-black text-blue-600">
                                    {item.step}
                                </div>

                                <h3 className="mt-5 text-2xl font-bold">
                                    {item.title}
                                </h3>

                                <p className="mt-3 leading-7 text-slate-600">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-blue-600 py-10">
                <div className="mx-auto max-w-5xl px-5 text-center">

                    <h2 className="text-4xl font-bold text-white">
                        Ready to Start Your Project?
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-blue-100">
                        Contact Rathore Buildcon today and let our experts help
                        you turn your vision into reality.
                    </p>

                    <Link
                        href="/contact"
                        className="mt-10 inline-flex h-14 items-center rounded-xl bg-white px-8 font-semibold text-blue-600 transition hover:bg-transparent hover:text-white hover:border-white border"
                    >
                        Contact Us
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </div>
            </section>
        </>
    );
}