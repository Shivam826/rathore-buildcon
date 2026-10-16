import {
    ArrowRight,
    Mail,
} from "lucide-react";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";

const teamMembers = [
    {
        name: "Ashok Rathore",
        role: "Founder & Managing Director",
        image: "/images/team/team-1.jpg",
    },
    {
        name: "Team Member",
        role: "Director",
        image: "/images/team/team-2.jpg",
    },
    {
        name: "Team Member",
        role: "Project Head",
        image: "/images/team/team-3.jpg",
    },
    {
        name: "Team Member",
        role: "Construction Manager",
        image: "/images/team/team-4.jpg",
    },
];

export default function TeamSection() {
    return (
        <section className="relative overflow-hidden bg-[#f8fbff] py-15">


            {/* Background Decoration */}

            <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-100/60 blur-3xl" />

            <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-blue-50 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-5">

                {/* Heading */}

                <div className="mx-auto mb-14 max-w-3xl text-center">

                    <span className="text-sm font-bold uppercase tracking-[3px] text-blue-600">
                        Our Team
                    </span>

                    <h2 className="mt-3 text-4xl font-extrabold text-slate-900 md:text-5xl">
                        Meet Our{" "}
                        <span className="text-blue-600">
                            Team
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
                        Behind every successful project is a dedicated team.
                        Our experienced professionals work together to deliver
                        quality, trust and excellence at every stage.
                    </p>

                    {/* Divider */}

                    <div className="mx-auto mt-6 flex justify-center gap-2">
                        <span className="h-1 w-12 rounded-full bg-blue-600" />
                        <span className="h-1 w-5 rounded-full bg-blue-300" />
                    </div>

                </div>

                {/* Team Grid */}

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

                    {teamMembers.map((member) => (
                        <div
                            key={member.name + member.role}
                            className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl"
                        >

                            {/* Image */}

                            <div className="relative h-[350px] overflow-hidden">

                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover transition duration-700 group-hover:scale-105"
                                />

                                {/* Overlay */}

                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent opacity-80" />

                                {/* Social Buttons */}

                                <div className="absolute right-5 top-5 flex translate-x-5 flex-col gap-2 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">

                                    <a
                                        href="#"
                                        aria-label={`${member.name} LinkedIn`}
                                        className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-blue-600 shadow-lg transition hover:bg-blue-600 hover:text-white"
                                    >
                                        <FaLinkedin className="h-4 w-4" />
                                    </a>

                                    <a
                                        href="#"
                                        aria-label={`Email ${member.name}`}
                                        className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-blue-600 shadow-lg transition hover:bg-blue-600 hover:text-white"
                                    >
                                        <Mail className="h-4 w-4" />
                                    </a>

                                </div>

                                {/* Name on Image */}

                                <div className="absolute bottom-5 left-5 right-5 translate-y-3 transition duration-500 group-hover:translate-y-0">

                                    <p className="text-sm font-medium text-blue-300">
                                        {member.role}
                                    </p>

                                    <h3 className="mt-1 text-2xl font-bold text-white">
                                        {member.name}
                                    </h3>

                                </div>

                            </div>

                            {/* Bottom Content */}

                            <div className="flex items-center justify-between p-5">

                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                                        Rathore Buildcon
                                    </p>

                                    <p className="mt-1 text-sm font-medium text-slate-700">
                                        Building Dreams, Delivering Trust
                                    </p>
                                </div>

                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition duration-300 group-hover:bg-blue-600 group-hover:text-white">
                                    <ArrowRight className="h-5 w-5" />
                                </div>

                            </div>

                        </div>
                    ))}

                </div>

                {/* Bottom CTA */}

                <div className="mt-14 text-center">

                    <p className="text-slate-600">
                        Want to know more about the people behind Rathore Buildcon?
                    </p>

                    <a
                        href="/about"
                        className="mt-5 inline-flex h-12 items-center rounded-xl border-2 border-blue-600 bg-blue-600 px-7 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-blue-600"
                    >
                        Meet Our Team
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </a>

                </div>

            </div>
        </section>
    );
}