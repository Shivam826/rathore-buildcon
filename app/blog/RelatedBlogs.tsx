"use client";

import { getBlogs, Blog } from "@/app/blog/BlogData";
import { ArrowRight, CalendarDays } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Props = {
    currentSlug: string;
};

export default function RelatedBlogs({
    currentSlug,
}: Props) {
    const [relatedBlogs, setRelatedBlogs] = useState<Blog[]>(
        []
    );

    useEffect(() => {
        async function loadRelatedBlogs() {
            const allBlogs = await getBlogs();

            const filteredBlogs = allBlogs
                .filter(
                    (blog) =>
                        blog.slug !== currentSlug
                )
                .slice(0, 3);

            setRelatedBlogs(filteredBlogs);
        }

        loadRelatedBlogs();
    }, [currentSlug]);

    return (
        <section className="mt-20 border-t border-slate-200 pt-16">
            {/* Heading */}
            <div className="mb-10 text-center">
                <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                    More Articles
                </p>

                <h2 className="mt-5 text-3xl font-extrabold text-slate-900 md:text-5xl">
                    Related Blogs
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-slate-600">
                    Explore more construction, plotting and real estate
                    insights from Rathore Buildcon.
                </p>

                <div className="mx-auto mt-5 flex items-center justify-center gap-2">
                    <span className="h-[3px] w-10 rounded-full bg-blue-600" />
                    <span className="h-[3px] w-4 rounded-full bg-blue-300" />
                </div>
            </div>

            {/* Cards */}
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                {relatedBlogs.map((blog) => (
                    <div
                        key={blog.slug}
                        className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                    >
                        {/* Image */}
                        <Link href={`/blog/${blog.slug}`}>
                            <div className="relative h-60 overflow-hidden">
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    fill
                                    unoptimized
                                    className="object-cover transition duration-500 group-hover:scale-110"
                                />
                            </div>
                        </Link>

                        {/* Content */}
                        <div className="p-6">
                            {/* Date */}
                            <div className="mb-4 flex items-center gap-2 text-sm text-slate-500">
                                <CalendarDays size={16} />
                                <span>{blog.date}</span>
                            </div>

                            {/* Title */}
                            <Link
                                href={`/blog/${blog.slug}`}
                            >
                                <h3 className="line-clamp-2 text-xl font-bold leading-8 text-slate-900 transition group-hover:text-blue-600">
                                    {blog.title}
                                </h3>
                            </Link>

                            {/* Description */}
                            <p className="mt-4 line-clamp-3 text-slate-600">
                                {blog.description ||
                                    "Discover expert tips, construction insights and real estate updates from Rathore Buildcon."}
                            </p>

                            {/* Read More */}
                            <Link
                                href={`/blog/${blog.slug}`}
                                className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-600 transition-all hover:gap-3"
                            >
                                Read More

                                <ArrowRight
                                    size={18}
                                    className="transition"
                                />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}