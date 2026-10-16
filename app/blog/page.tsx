// "use client";

// import { ChevronLeft, ChevronRight } from "lucide-react";
// import Link from "next/link";
// import { useState } from "react";
// import BlogCard from "./BlogCard";
// import { blogs } from "./BlogData";

// const BLOGS_PER_PAGE = 6;

// export default function BlogPage() {
//     const [currentPage, setCurrentPage] = useState(1);

//     const totalPages = Math.ceil(blogs.length / BLOGS_PER_PAGE);

//     const startIndex = (currentPage - 1) * BLOGS_PER_PAGE;
//     const currentBlogs = blogs.slice(
//         startIndex,
//         startIndex + BLOGS_PER_PAGE
//     );

//     return (
//         <section className="bg-[#f8fbff] py-15">
//             <div className="mx-auto max-w-7xl px-5">

//                 {/* Breadcrumb */}

//                 <div className="mb-10 text-sm text-slate-500">
//                     <Link href="/">Home</Link>
//                     <span className="mx-2">›</span>
//                     <span className="font-semibold text-slate-800">
//                         Blog
//                     </span>
//                 </div>

//                 {/* Heading */}

//                 <div className="mb-14 text-center">
//                     <span className="text-sm font-bold uppercase tracking-[3px] text-blue-600">
//                         Latest Articles
//                     </span>

//                     <h2 className="mt-3 text-4xl font-bold text-slate-900">
//                         Our Blog & Insights
//                     </h2>

//                     <p className="mx-auto mt-5 max-w-2xl text-slate-600">
//                         Stay updated with the latest trends, tips and insights
//                         in construction, real estate and interior design.
//                     </p>

//                     <div className="mx-auto mt-5 flex justify-center gap-2">
//                         <span className="h-1 w-10 rounded-full bg-blue-600"></span>
//                         <span className="h-1 w-4 rounded-full bg-blue-300"></span>
//                     </div>
//                 </div>

//                 {/* Blog Grid */}

//                 <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//                     {currentBlogs.map((blog) => (
//                         <BlogCard key={blog.slug} blog={blog} />
//                     ))}
//                 </div>

//                 {/* Pagination */}

//                 {totalPages > 1 && (
//                     <div className="mt-16 flex flex-wrap items-center justify-center gap-3">

//                         {/* Previous */}

//                         <button
//                             onClick={() => setCurrentPage((prev) => prev - 1)}
//                             disabled={currentPage === 1}
//                             className={`flex h-11 items-center gap-2 rounded-xl px-5 font-semibold transition ${currentPage === 1
//                                     ? "cursor-not-allowed border border-slate-200 bg-slate-100 text-slate-400"
//                                     : "cursor-pointer border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
//                                 }`}
//                         >
//                             <ChevronLeft size={18} />
//                             Prev
//                         </button>

//                         {/* Page Numbers */}

//                         {Array.from({ length: totalPages }).map((_, index) => {
//                             const page = index + 1;

//                             return (
//                                 <button
//                                     key={page}
//                                     onClick={() => setCurrentPage(page)}
//                                     className={`cursor-pointer flex h-11 w-11 items-center justify-center rounded-xl font-semibold transition ${currentPage === page
//                                             ? "bg-blue-600 text-white"
//                                             : "border border-slate-300 text-slate-700 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
//                                         }`}
//                                 >
//                                     {page}
//                                 </button>
//                             );
//                         })}

//                         {/* Next */}

//                         <button
//                             onClick={() => setCurrentPage((prev) => prev + 1)}
//                             disabled={currentPage === totalPages}
//                             className={`flex h-11 items-center gap-2 rounded-xl px-5 font-semibold transition ${currentPage === totalPages
//                                     ? "cursor-not-allowed border border-slate-200 bg-slate-100 text-slate-400"
//                                     : "cursor-pointer border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
//                                 }`}
//                         >
//                             Next
//                             <ChevronRight size={18} />
//                         </button>

//                     </div>
//                 )}
//             </div>
//         </section>
//     );
// }

"use client";

import {
    ChevronLeft,
    ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import BlogCard from "./BlogCard";
import { getBlogs, Blog } from "./BlogData";

const BLOGS_PER_PAGE = 6;

export default function BlogPage() {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // =========================
    // Fetch Blogs
    // =========================

    useEffect(() => {
        const loadBlogs = async () => {
            try {
                setLoading(true);
                setError("");

                const data = await getBlogs();

                setBlogs(data);
            } catch (error) {
                console.error(
                    "Failed to load blogs:",
                    error
                );

                setError(
                    "Unable to load blogs. Please try again."
                );
            } finally {
                setLoading(false);
            }
        };

        loadBlogs();
    }, []);

    // =========================
    // Pagination
    // =========================

    const totalPages = Math.ceil(
        blogs.length / BLOGS_PER_PAGE
    );

    const startIndex =
        (currentPage - 1) * BLOGS_PER_PAGE;

    const currentBlogs = blogs.slice(
        startIndex,
        startIndex + BLOGS_PER_PAGE
    );

    // =========================
    // Change Page
    // =========================

    const handlePageChange = (page: number) => {
        setCurrentPage(page);

        // Scroll back to blog section
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <section className="bg-[#f8fbff] py-15">

            <div className="mx-auto max-w-7xl px-5">

                {/* =========================
                    Breadcrumb
                ========================= */}

                <div className="mb-10 text-sm text-slate-500">

                    <Link
                        href="/"
                        className="transition hover:text-blue-600"
                    >
                        Home
                    </Link>

                    <span className="mx-2">
                        ›
                    </span>

                    <span className="font-semibold text-slate-800">
                        Blog
                    </span>

                </div>

                {/* =========================
                    Heading
                ========================= */}

                <div className="mb-14 text-center">

                    <span className="text-sm font-bold uppercase tracking-[3px] text-blue-600">
                        Latest Articles
                    </span>

                    <h2 className="mt-3 text-4xl font-bold text-slate-900">
                        Our Blog & Insights
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-slate-600">
                        Stay updated with the latest trends,
                        tips and insights in construction,
                        real estate and interior design.
                    </p>

                    <div className="mx-auto mt-5 flex justify-center gap-2">

                        <span className="h-1 w-10 rounded-full bg-blue-600" />

                        <span className="h-1 w-4 rounded-full bg-blue-300" />

                    </div>

                </div>

                {/* =========================
                    Loading
                ========================= */}

                {loading && (
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

                        {Array.from({ length: 6 }).map(
                            (_, index) => (
                                <div
                                    key={index}
                                    className="animate-pulse overflow-hidden rounded-2xl border border-slate-200 bg-white"
                                >
                                    <div className="h-60 bg-slate-200" />

                                    <div className="space-y-4 p-6">

                                        <div className="h-6 w-3/4 rounded bg-slate-200" />

                                        <div className="h-4 w-1/2 rounded bg-slate-200" />

                                        <div className="h-4 w-1/3 rounded bg-slate-200" />

                                    </div>
                                </div>
                            )
                        )}

                    </div>
                )}

                {/* =========================
                    Error
                ========================= */}

                {!loading && error && (
                    <div className="rounded-2xl border border-red-200 bg-red-50 px-6 py-10 text-center">

                        <p className="font-semibold text-red-600">
                            {error}
                        </p>

                        <button
                            onClick={() => window.location.reload()}
                            className="mt-5 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
                        >
                            Try Again
                        </button>

                    </div>
                )}

                {/* =========================
                    Empty State
                ========================= */}

                {!loading &&
                    !error &&
                    blogs.length === 0 && (
                        <div className="rounded-2xl border border-slate-200 bg-white px-6 py-16 text-center">

                            <h3 className="text-2xl font-bold text-slate-900">
                                No Blogs Found
                            </h3>

                            <p className="mt-3 text-slate-500">
                                There are currently no blog
                                articles available.
                            </p>

                        </div>
                    )}

                {/* =========================
                    Blog Grid
                ========================= */}

                {!loading &&
                    !error &&
                    currentBlogs.length > 0 && (
                        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

                            {currentBlogs.map((blog) => (
                                <BlogCard
                                    key={blog.slug}
                                    blog={blog}
                                />
                            ))}

                        </div>
                    )}

                {/* =========================
                    Pagination
                ========================= */}

                {!loading &&
                    !error &&
                    totalPages > 1 && (
                        <div className="mt-16 flex flex-wrap items-center justify-center gap-3">

                            {/* Previous */}

                            <button
                                onClick={() =>
                                    handlePageChange(
                                        currentPage - 1
                                    )
                                }
                                disabled={currentPage === 1}
                                className={`flex h - 11 items - center gap - 2 rounded - xl px - 5 font - semibold transition ${currentPage === 1
                                        ? "cursor-not-allowed border border-slate-200 bg-slate-100 text-slate-400"
                                        : "cursor-pointer border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                                    } `}
                            >
                                <ChevronLeft size={18} />

                                Prev
                            </button>

                            {/* Page Numbers */}

                            {Array.from({
                                length: totalPages,
                            }).map((_, index) => {
                                const page = index + 1;

                                return (
                                    <button
                                        key={page}
                                        onClick={() =>
                                            handlePageChange(
                                                page
                                            )
                                        }
                                        className={`flex h - 11 w - 11 cursor - pointer items - center justify - center rounded - xl font - semibold transition ${currentPage === page
                                                ? "bg-blue-600 text-white"
                                                : "border border-slate-300 text-slate-700 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
                                            } `}
                                    >
                                        {page}
                                    </button>
                                );
                            })}

                            {/* Next */}

                            <button
                                onClick={() =>
                                    handlePageChange(
                                        currentPage + 1
                                    )
                                }
                                disabled={
                                    currentPage ===
                                    totalPages
                                }
                                className={`flex h - 11 items - center gap - 2 rounded - xl px - 5 font - semibold transition ${currentPage ===
                                        totalPages
                                        ? "cursor-not-allowed border border-slate-200 bg-slate-100 text-slate-400"
                                        : "cursor-pointer border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                                    } `}
                            >
                                Next

                                <ChevronRight size={18} />
                            </button>

                        </div>
                    )}

            </div>

        </section>
    );
}
