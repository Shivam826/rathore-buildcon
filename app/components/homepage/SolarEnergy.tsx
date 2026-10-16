import {
    ArrowRight,
    CheckCircle2,
    Leaf,
    ShieldCheck,
    Sun,
    Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function SolarEnergy() {
    const benefits = [
        {
            icon: Sun,
            title: "Clean Energy",
            description: "Generate clean and renewable energy for your property.",
        },
        {
            icon: Zap,
            title: "Lower Energy Bills",
            description: "Reduce your electricity expenses with solar power.",
        },
        {
            icon: ShieldCheck,
            title: "Reliable Solutions",
            description: "High-quality solar systems designed for long-term performance.",
        },
        {
            icon: Leaf,
            title: "Sustainable Future",
            description: "Take a step towards a greener and more sustainable future.",
        },
    ];

    const services = [
        "Residential Solar Solutions",
        "Commercial Solar Solutions",
        "Industrial Solar Solutions",
        "Rooftop Solar Installation",
        "Solar Maintenance",
        "Net Metering Support",
    ];

    return (
        <section className="relative overflow-hidden bg-[#f8fbff] py-15">

            {/* Background Decoration */}

            <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-yellow-200/30 blur-3xl" />

            <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-5">

                {/* Section Heading */}

                <div className="mx-auto mb-14 max-w-3xl text-center">

                    <span className="inline-flex items-center gap-2 rounded-full border border-yellow-200 bg-yellow-50 px-4 py-2 text-sm font-bold uppercase tracking-[2px] text-yellow-700">
                        <Sun className="h-4 w-4" />
                        Rathore Solar Energy
                    </span>

                    {/* <h2 className="mt-5 text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl lg:text-6xl"> */}
                    <h2 className="mt-5 text-3xl font-bold text-slate-900 md:text-4xl">

                        Power Your Future with{" "}
                        <span className="text-blue-600">
                            Solar Energy
                        </span>
                    </h2>

                    {/* <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
                        Smart, sustainable and reliable solar solutions designed
                        to reduce energy costs and help you move towards a
                        cleaner and greener future.
                    </p> */}

                    <div className="mx-auto mt-6 flex justify-center gap-2">
                        <span className="h-1 w-12 rounded-full bg-blue-600" />
                        <span className="h-1 w-5 rounded-full bg-yellow-400" />
                    </div>

                </div>

                {/* Main Content */}

                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

                    {/* Image */}

                    <div className="relative">

                        <div className="relative h-105 overflow-hidden rounded-4xl shadow-2xl md:h-130">

                            <Image
                                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1400"
                                alt="Rathore Solar Energy"
                                fill
                                unoptimized
                                className="object-cover transition duration-700 hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

                            {/* Image Text */}

                            <div className="absolute bottom-7 left-7 right-7">

                                <div className="flex items-center gap-3">

                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400 text-white shadow-lg">
                                        <Sun className="h-6 w-6" />
                                    </div>

                                    <div>
                                        <p className="text-sm font-medium text-yellow-300">
                                            Clean Energy
                                        </p>

                                        <h3 className="text-xl font-bold text-white">
                                            Solar Power Solutions
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Card */}

                        <div className="absolute -bottom-7 right-5 rounded-2xl border border-slate-100 bg-white p-5 shadow-xl sm:right-8">

                            <div className="flex items-center gap-4">

                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-50">
                                    <Sun className="h-6 w-6 text-yellow-500" />
                                </div>

                                <div>
                                    <p className="text-2xl font-extrabold text-slate-900">
                                        100%
                                    </p>

                                    <p className="text-sm text-slate-500">
                                        Renewable Energy
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>

                    {/* Content */}

                    <div>

                        <span className="font-bold uppercase tracking-[3px] text-blue-600">
                            Our Brother Brand
                        </span>

                        <h3 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 md:text-4xl">
                            Smart Solar Solutions for a{" "}
                            <span className="text-yellow-500">
                                Brighter Tomorrow
                            </span>
                        </h3>

                        <p className="mt-6 leading-8 text-slate-600">
                            Rathore Solar Energy provides dependable solar
                            solutions for homes, businesses and industrial
                            properties. From system planning and installation
                            to maintenance and net-metering support, we help
                            you make the most of renewable energy.
                        </p>

                        {/* Services */}

                        <div className="mt-8 grid gap-4 sm:grid-cols-2">

                            {services.map((service) => (
                                <div
                                    key={service}
                                    className="flex items-center gap-3"
                                >
                                    <CheckCircle2 className="h-5 w-5 shrink-0 text-blue-600" />

                                    <span className="text-sm font-semibold text-slate-700">
                                        {service}
                                    </span>
                                </div>
                            ))}

                        </div>

                        {/* Buttons */}

                        <div className="mt-10 flex flex-col gap-4 sm:flex-row">

                            <Link
                                href="https://rathoresolarenergy.com/"
                                target="_blank"
                                className="inline-flex h-14 items-center justify-center rounded-xl bg-blue-600 px-7 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-blue-600 border-2 border-blue-600"
                            >
                                Explore Rathore Solar Energy
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>

                        </div>

                    </div>

                </div>

                {/* Benefits */}

                <div className="mt-24 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

                    {benefits.map((benefit) => {

                        const Icon = benefit.icon;

                        return (
                            <div
                                key={benefit.title}
                                className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
                            >

                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 transition-all duration-300 group-hover:bg-blue-600">
                                    <Icon className="h-7 w-7 text-blue-600 transition-all duration-300 group-hover:text-white" />
                                </div>

                                <h4 className="mt-6 text-xl font-bold text-slate-900">
                                    {benefit.title}
                                </h4>

                                <p className="mt-3 text-sm leading-7 text-slate-600">
                                    {benefit.description}
                                </p>

                            </div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}