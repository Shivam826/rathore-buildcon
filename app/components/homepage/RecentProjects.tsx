
"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projects = [
    {
        id: 1,
        title: "Modern Villa",
        image:
            "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200",
    },
    {
        id: 2,
        title: "Luxury Bungalow",
        image:
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200",
    },
    {
        id: 3,
        title: "Duplex House",
        image:
            "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=1200",
    },
    {
        id: 4,
        title: "Apartment Building",
        image:
            "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=1200",
    },
    {
        id: 5,
        title: "Farm House",
        image:
            "https://images.unsplash.com/photo-1448630360428-65456885c650?w=1200",
    },
    {
        id: 6,
        title: "Commercial Building",
        image:
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200",
    },
];

export default function RecentProjects() {
    return (
        <section className="bg-[#f8fbff] py-15">
            <div className="mx-auto max-w-7xl px-5">
                {/* Heading */}
                <div className="mb-10 md:mb-16 text-center">
                    <span className="text-sm font-bold uppercase tracking-[2px] text-blue-600">
                        Our Projects
                    </span>

                    <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
                        Our Recent Projects
                    </h2>
                    <div className="mx-auto mt-5 flex items-center justify-center gap-2">
                        <span className="h-0.75 w-10 rounded-full bg-blue-600"></span>
                        <span className="h-0.75 w-4 rounded-full bg-blue-300"></span>
                    </div>
                </div>
                {/* Projects */}

                {/* <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
                    {projects.map((project) => (
                        <div
                            key={project.title}
                            className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                        >
                            <div className="relative h-44 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="flex h-24 items-center justify-center px-4">
                                <h3
                                    className="text-center text-lg font-bold leading-7 text-slate-900 line-clamp-2 min-h-[56px] flex items-center justify-center">
                                    {project.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div> */}
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={24}
                    navigation

                    pagination={{ clickable: false }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    loop
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        640: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                        1280: {
                            slidesPerView: 4,
                        },
                    }}
                    className="pb-12 projects-slider"
                >
                    {projects.map((project) => (
                        <SwiperSlide key={project.id}>
                            <div className="group overflow-hidden rounded-3xl border border-slate-200 mb-3 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">

                                {/* Image */}
                                <div className="relative h-52 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex h-24 items-center justify-center px-4">
                                    <h3 className="line-clamp-2 text-center text-lg font-bold text-slate-900">
                                        {project.title}
                                    </h3>
                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                {/* <div className="swiper-button-prev">
                    <ChevronLeft size={22} strokeWidth={2.5} />
                </div>

                <div className="swiper-button-next">
                    <ChevronRight size={22} strokeWidth={2.5} />
                </div> */}
                <div className="flex justify-center items-center pt-5">
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-white px-5 py-3 font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white"
                    >
                        View All Projects

                        <ArrowRight size={18} />
                    </Link>
                </div>
            </div>
        </section>
    );
}

