import {
    BadgeCheck,
    CheckCircle2,
    ChevronRight,
    IndianRupee,
    MapPin,
    Ruler,
} from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { plots } from "../plots";
import Link from "next/link";

export async function generateStaticParams() {
    return plots.map((plot) => ({
        plotId: plot.slug, // or plot.id if you're using id in the URL
    }));
}
export default async function PlotDetails({
    params,
}: {
    params: Promise<{ plotId: string }>;
}) {
    const { plotId } = await params;

    const plot = plots.find((item) => item.slug === plotId);
    if (!plot) return notFound();
    console.log("plot -- >>>", plot)
    return (
        <main className="bg-slate-50">
            {/* Hero */}
            <section className="relative h-[500px]">
                {/* Breadcrumb */}
                <section className="border-b border-slate-200 bg-white">
                    <div className="mx-auto flex max-w-7xl items-center px-5 py-4 text-sm">
                        <Link href="/"
                            className="font-medium text-slate-500 transition hover:text-blue-600"
                        >
                            Home
                        </Link>

                        <ChevronRight className="mx-2 h-4 w-4 text-slate-400" />

                        <Link
                            href="/plots"
                            className="font-medium text-slate-500 transition hover:text-blue-600"
                        >
                            Plots
                        </Link>

                        <ChevronRight className="mx-2 h-4 w-4 text-slate-400" />

                        <span className="font-semibold text-blue-600">
                            {plot.title}
                        </span>
                    </div>
                </section>
                <Image
                    src={plot.image}
                    fill
                    alt={plot.title}
                    className="object-cover"
                />

                <div className="absolute inset-0 bg-black/45" />
                <div className="absolute inset-0">

                    <div className="mx-auto flex h-full max-w-7xl flex-col justify-between px-5 py-8 lg:px-8 lg:py-12">

                        {/* Breadcrumb */}
                        <div>
                            <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-white/10 px-5 py-2 text-sm text-white">

                                <Link
                                    href="/"
                                    className="transition hover:text-blue-400"
                                >
                                    Home
                                </Link>

                                <ChevronRight size={16} />

                                <Link
                                    href="/plots"
                                    className="transition hover:text-blue-400"
                                >
                                    Plots
                                </Link>

                                <ChevronRight size={16} />

                                <span className="font-semibold text-blue-400">
                                    {plot.title}
                                </span>

                            </div>

                        </div>
                    </div>

                </div>
                <div className="absolute bottom-16 left-1/2 w-full max-w-7xl -translate-x-1/2 px-6">

                    <span className="rounded-full bg-blue-600 px-4 py-2 text-sm text-white">
                        {plot.type}
                    </span>

                    <h1 className="mt-5 text-5xl font-bold text-white">
                        {plot.title}
                    </h1>

                    <div className="mt-3 flex items-center gap-2 text-white">

                        <MapPin size={18} />

                        {plot.location}

                    </div>

                </div>

            </section>

            <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-3">

                {/* Left */}

                <div className="lg:col-span-2">

                    {/* Price */}

                    <div className="rounded-3xl bg-white p-8 shadow">

                        <div className="grid gap-6 md:grid-cols-3">

                            <div>

                                <p className="text-slate-500">
                                    Price
                                </p>

                                <h2 className="mt-2 flex items-center text-3xl font-bold text-blue-600">

                                    <IndianRupee size={28} />

                                    18.50 Lakh

                                </h2>

                            </div>

                            <div>

                                <p className="text-slate-500">
                                    Area
                                </p>

                                <h3 className="mt-2 flex items-center gap-2 text-xl font-semibold">

                                    <Ruler />

                                    {plot.area}

                                </h3>

                            </div>

                            <div>

                                <p className="text-slate-500">
                                    Developer
                                </p>

                                <h3 className="mt-2 text-xl font-semibold">
                                    {plot.developer}
                                </h3>

                            </div>

                        </div>

                    </div>

                    {/* About */}

                    <section className="mt-10 rounded-3xl bg-white p-8 shadow">

                        <h2 className="text-3xl font-bold">
                            About Property
                        </h2>

                        <p className="mt-5 leading-8 text-slate-600">
                            {plot.description}
                        </p>

                    </section>

                    {/* Gallery */}

                    <section className="mt-10">

                        <h2 className="mb-6 text-3xl font-bold">
                            Gallery
                        </h2>

                        <div className="grid grid-cols-2 gap-5">

                            {plot && plot.gallery && plot?.gallery.map((img) => (
                                <div
                                    key={img}
                                    className="relative h-60 overflow-hidden rounded-3xl"
                                >
                                    <Image
                                        src={img}
                                        fill
                                        alt=""
                                        className="object-cover transition hover:scale-110"
                                    />
                                </div>
                            ))}

                        </div>

                    </section>

                    {/* Amenities */}

                    <section className="mt-12 rounded-3xl bg-white p-8 shadow">

                        <h2 className="text-3xl font-bold">
                            Amenities
                        </h2>

                        <div className="mt-8 grid gap-5 md:grid-cols-2">

                            {plot.amenities && plot.amenities.map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-3"
                                >
                                    <CheckCircle2 className="text-blue-600" />

                                    {item}

                                </div>
                            ))}

                        </div>

                    </section>

                </div>

                {/* Right Sidebar */}

                <aside>

                    <div className="sticky top-28 rounded-3xl bg-white p-8 shadow">

                        <h2 className="text-2xl font-bold">
                            Enquiry Now
                        </h2>

                        <input
                            placeholder="Your Name"
                            className="mt-6 w-full rounded-xl border p-4 border-slate-300"
                        />

                        <input
                            placeholder="Phone Number"
                            className="mt-4 w-full rounded-xl border p-4 border-slate-300"
                        />

                        <textarea
                            rows={4}
                            placeholder="Message"
                            className="mt-4 w-full rounded-xl border p-4 border-slate-300"
                        />

                        <button className="mt-5 w-full rounded-xl border-2 border-blue-600 bg-blue-600 py-4 font-semibold text-white transition-all duration-300 ease-in-out hover:border-blue-600 hover:bg-white hover:text-blue-600">
                            Request Callback
                        </button>
                    </div>

                </aside>

            </div>

        </main>
    );
}