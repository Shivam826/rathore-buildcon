"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Map,
  Building2,
  Home,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "Plotting Solutions",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=900&q=80",
    icon: <Map size={28} />,
    slug: "plotting-solutions",
    color: "bg-blue-600",
    button: "Explore Plots",
    points: [
      "Residential Plots",
      "Commercial Plots",
      "Investment Plots",
      "Plot Development",
    ],
  },
  {
    title: "Construction Services",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=900&q=80",
    icon: <Building2 size={28} />,
    slug: "construction-services",
    color: "bg-orange-500",
    button: "Explore Construction",
    points: [
      "Residential Construction",
      "Commercial Construction",
      "Industrial Construction",
      "Renovation & Remodeling",
    ],
  },
  {
    title: "Complete Bungalow",
    image:
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
    icon: <Home size={28} />,
    slug: "complete-home",
    color: "bg-blue-600",
    button: "Explore Bungalows",
    points: [
      "Architectural Design",
      "Interior Design",
      "Turnkey Construction",
      "Landscaping & Finishing",
    ],
  },
];

export default function Services() {
  return (
    <section className="bg-[#f8fbff] py-15">
      <div className="mx-auto max-w-7xl px-5">

        {/* Heading */}

        <div className="mb-14 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Our Services
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
            Our Core Services
          </h2>

          <div className="mx-auto mt-5 flex items-center justify-center gap-2">
            <span className="h-0.75 w-10 rounded-full bg-blue-600"></span>
            <span className="h-0.75 w-4 rounded-full bg-blue-300"></span>
          </div>
        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >
              {/* Image */}

              <div className="relative h-56 overflow-hidden rounded-t-3xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                  unoptimized
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
              </div>

              {/* Icon */}

              <div
                className={`absolute -mt-8 ml-6 flex h-16 w-16 items-center justify-center rounded-full border-4 border-white text-white shadow-xl ${service.color}`}
              >
                {service.icon}
              </div>

              {/* Content */}

              <div className="px-6 pb-8 pt-12">

                <h3 className="mb-5 text-2xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <ul className="space-y-3">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-3 text-slate-600"
                    >
                      <CheckCircle2
                        size={18}
                        className="text-blue-600"
                      />
                      {point}
                    </li>
                  ))}
                </ul>

                <Link href={`/services/${service.slug}`}
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:gap-3"
                >
                  {service.button}
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}