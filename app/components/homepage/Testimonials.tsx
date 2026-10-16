"use client";

import { Quote, Star } from "lucide-react";

const testimonials = [
    {
        id: 1,
        name: "Arjun Sharma",
        city: "Jaipur",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        review:
            "Rathore Buildcon provided excellent service and delivered our dream home with outstanding quality and on time.",
    },
    {
        id: 2,
        name: "Neha Soni",
        city: "Jaipur",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        review:
            "Very professional team! They understood our requirements perfectly and completed our bungalow beyond expectations.",
    },
    {
        id: 3,
        name: "Rahul Verma",
        city: "Jaipur",
        image: "https://randomuser.me/api/portraits/men/75.jpg",
        review:
            "Best construction company in Jaipur. Transparent process, premium materials and excellent customer support.",
    },
];

export default function Testimonials() {
    return (
        <section className="bg-[#f8fbff] py-15">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Heading */}
                <div className="mb-14 text-center">
                    <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                        Testimonials
                    </p>

                    <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
                        What Our Clients Say
                    </h2>

                    <div className="mx-auto mt-5 flex items-center justify-center gap-2">
                        <span className="h-0.75 w-10 rounded-full bg-blue-600"></span>
                        <span className="h-0.75 w-4 rounded-full bg-blue-300"></span>
                    </div>
                </div>

                {/* Cards */}
                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                    {testimonials.map((item) => (
                        <div
                            key={item.id}
                            className="group relative overflow-hidden rounded-3xl border bg-white p-8 transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] border-blue-500 shadow-[0_20px_50px_rgba(37,99,235,0.15)]"
                        >
                            {/* Background Hover Effect */}
                            <div className="absolute inset-0 bg-linear-to-br from-blue-50 via-transparent to-blue-100 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                            <div className="relative z-10">

                                {/* Quote */}
                                <div className="mb-5 inline-flex rounded-full bg-blue-50 p-3 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 group-hover:bg-blue-600">
                                    <Quote
                                        className="h-6 w-6 text-blue-600 transition-colors duration-500 group-hover:text-white"
                                        strokeWidth={2.5}
                                    />
                                </div>

                                {/* Review */}
                                <p className="leading-7 text-slate-600 transition-colors duration-300 group-hover:text-slate-700">
                                    {item.review}
                                </p>

                                {/* Stars */}
                                <div className="mt-5 flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="h-4 w-4 fill-yellow-400 text-yellow-400 transition-transform duration-300 group-hover:scale-110"
                                            style={{
                                                transitionDelay: `${i * 70}ms`,
                                            }}
                                        />
                                    ))}
                                </div>

                                {/* User */}
                                <div className="mt-7 flex items-center gap-4">

                                    <div className="overflow-hidden rounded-full ring-2 ring-blue-100 transition-all duration-500 group-hover:ring-blue-500">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="h-14 w-14 rounded-full object-cover transition duration-500 group-hover:scale-110"
                                        />
                                    </div>

                                    <div>
                                        <h4 className="font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
                                            {item.name}
                                        </h4>

                                        <p className="text-sm text-slate-500">
                                            {item.city}
                                        </p>
                                    </div>

                                </div>

                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}