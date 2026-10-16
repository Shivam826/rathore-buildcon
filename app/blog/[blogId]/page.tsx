// import { CalendarDays, ChevronRight, FolderOpen, User } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { notFound } from "next/navigation";

// import { blogs } from "../BlogData";
// import NeedHelpCard from "../NeedHelpCard";
// import RecentPosts from "../RecentPosts";
// import RelatedBlogs from "../RelatedBlogs";

// export function generateStaticParams() {
//     return blogs.map((blog) => ({
//         blogId: blog.slug,
//     }));
// }

// export default async function BlogDetailPage({
//     params,
// }: {
//     params: Promise<{ blogId: string }>;
// }) {
//     const { blogId } = await params;

//     const blog = blogs.find((item) => item.slug === blogId);

//     if (!blog) {
//         notFound();
//     }



//     return (
//         <>
//             {/* Hero */}
//             <section className="relative h-105 overflow-hidden">
//                 <Image
//                     src={blog.image}
//                     alt={blog.title}
//                     fill
//                     priority
//                     unoptimized
//                     className="object-cover"
//                 />

//                 <div className="absolute inset-0 bg-black/60" />

//                 <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-5">

//                     {/* Breadcrumb */}
//                     <nav className="mb-6 flex items-center gap-2 text-sm text-white/80">
//                         <Link href="/" className="hover:text-blue-400">
//                             Home
//                         </Link>

//                         <ChevronRight size={16} />

//                         <Link href="/blog" className="hover:text-blue-400">
//                             Blog
//                         </Link>

//                         <ChevronRight size={16} />

//                         <span className="font-semibold text-blue-400">
//                             {blog.title}
//                         </span>
//                     </nav>

//                     <h1 className="max-w-4xl text-4xl font-extrabold leading-tight text-white md:text-6xl">
//                         {blog.title}
//                     </h1>

//                     <div className="mt-6 flex flex-wrap gap-6 text-white/90">

//                         <div className="flex items-center gap-2">
//                             <CalendarDays size={18} />
//                             {blog.date}
//                         </div>

//                         <div className="flex items-center gap-2">
//                             <User size={18} />
//                             {blog.author}
//                         </div>

//                         <div className="flex items-center gap-2">
//                             <FolderOpen size={18} />
//                             {blog.category}
//                         </div>

//                     </div>

//                 </div>
//             </section>

//             {/* Content */}
//             <section className="py-20">
//                 <div className="mx-auto max-w-7xl px-5">

//                     <div className="grid gap-12 lg:grid-cols-3">

//                         {/* Left */}
//                         <div className="lg:col-span-2">

//                             <div className="overflow-hidden rounded-3xl shadow-xl">
//                                 <Image
//                                     src={blog.image}
//                                     alt={blog.title}
//                                     width={1200}
//                                     height={700}
//                                     unoptimized
//                                     className="w-full"
//                                 />
//                             </div>

//                             <div className="prose prose-lg mt-10 max-w-none prose-slate">

//                                 <h2>Introduction</h2>

//                                 <p>
//                                     {blog.description}
//                                 </p>

//                                 <p>
//                                     Rathore Buildcon specializes in plotting,
//                                     construction, complete bungalows, interior
//                                     design and project management. We focus on
//                                     delivering quality, transparency and timely
//                                     execution for every project.
//                                 </p>

//                                 <h2>Why Choose Rathore Buildcon?</h2>

//                                 <ul>
//                                     <li>15+ Years of Industry Experience</li>
//                                     <li>Premium Construction Quality</li>
//                                     <li>Experienced Engineers & Architects</li>
//                                     <li>Transparent Pricing</li>
//                                     <li>On-Time Project Delivery</li>
//                                 </ul>

//                                 <h2>Our Process</h2>

//                                 <p>
//                                     Every successful project starts with proper
//                                     planning. Our team understands your
//                                     requirements, prepares detailed plans,
//                                     selects quality materials and ensures
//                                     smooth execution from beginning to end.
//                                 </p>

//                                 <blockquote>
//                                     "Building Dreams, Delivering Trust."
//                                 </blockquote>

//                                 <h2>Conclusion</h2>

//                                 <p>
//                                     Whether you're looking for residential
//                                     plots, construction services or a complete
//                                     bungalow solution, Rathore Buildcon is your
//                                     trusted partner for building your dream
//                                     property.
//                                 </p>

//                             </div>

//                             {/* Related */}
//                             <RelatedBlogs currentSlug={blog.slug} />

//                         </div>

//                         {/* Sidebar */}
//                         <div className="space-y-8">

//                             <RecentPosts currentSlug={blog.slug} />

//                             <NeedHelpCard />

//                         </div>

//                     </div>

//                 </div>
//             </section>
//         </>
//     );
// // }
// import {
//     CalendarDays,
//     ChevronRight,
//     FolderOpen,
//     User,
// } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { notFound } from "next/navigation";

// import { getBlogs } from "../BlogData";
// import NeedHelpCard from "../NeedHelpCard";
// import RecentPosts from "../RecentPosts";
// import RelatedBlogs from "../RelatedBlogs";

// export const dynamic = "force-dynamic";

// export default async function BlogDetailPage({
//     params,
// }: {
//     params: Promise<{ blogId: string }>;
// }) {
//     const { blogId } = await params;

//     // Fetch blogs from Node.js API
//     const blogs = await getBlogs();

//     // Find blog using API slug
//     const blog = blogs.find(
//         (item) => item.slug === blogId
//     );

//     // If blog doesn't exist
//     if (!blog) {
//         notFound();
//     }

//     return (
//         <>
//             {/* =========================
//                 Hero
//             ========================= */}
//             <section className="relative h-105 overflow-hidden">

//                 <Image
//                     src={blog.image}
//                     alt={blog.title}
//                     fill
//                     priority
//                     unoptimized
//                     className="object-cover"
//                 />

//                 <div className="absolute inset-0 bg-black/60" />

//                 <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-5">

//                     {/* Breadcrumb */}
//                     <nav className="mb-6 flex items-center gap-2 text-sm text-white/80">

//                         <Link
//                             href="/"
//                             className="hover:text-blue-400"
//                         >
//                             Home
//                         </Link>

//                         <ChevronRight size={16} />

//                         <Link
//                             href="/blog"
//                             className="hover:text-blue-400"
//                         >
//                             Blog
//                         </Link>

//                         <ChevronRight size={16} />

//                         <span className="line-clamp-1 font-semibold text-blue-400">
//                             {blog.title}
//                         </span>

//                     </nav>

//                     {/* Title */}
//                     <h1 className="max-w-4xl text-4xl font-extrabold leading-tight text-white md:text-6xl">
//                         {blog.title}
//                     </h1>

//                     {/* Meta */}
//                     <div className="mt-6 flex flex-wrap gap-6 text-white/90">

//                         {/* Date */}
//                         <div className="flex items-center gap-2">
//                             <CalendarDays size={18} />
//                             <span>{blog.date}</span>
//                         </div>

//                         {/* Author */}
//                         <div className="flex items-center gap-2">
//                             <User size={18} />
//                             <span>{blog.author}</span>
//                         </div>

//                         {/* Category */}
//                         <div className="flex items-center gap-2">
//                             <FolderOpen size={18} />
//                             <span>{blog.category}</span>
//                         </div>

//                     </div>

//                 </div>
//             </section>

//             {/* =========================
//                 Content
//             ========================= */}
//             <section className="py-20">

//                 <div className="mx-auto max-w-7xl px-5">

//                     <div className="grid gap-12 lg:grid-cols-3">

//                         {/* =========================
//                             Main Content
//                         ========================= */}
//                         <div className="lg:col-span-2">

//                             {/* Featured Image */}
//                             <div className="overflow-hidden rounded-3xl shadow-xl">

//                                 <Image
//                                     src={blog.image}
//                                     alt={blog.title}
//                                     width={1200}
//                                     height={700}
//                                     unoptimized
//                                     className="h-auto w-full object-cover"
//                                 />

//                             </div>

//                             {/* Blog Content */}
//                             <div className="prose prose-lg mt-10 max-w-none prose-slate">

//                                 <h2>
//                                     Introduction
//                                 </h2>

//                                 <p>
//                                     {blog.description}
//                                 </p>

//                                 <p>
//                                     Rathore Buildcon specializes in
//                                     plotting, construction, complete
//                                     bungalows, interior design and
//                                     project management. We focus on
//                                     delivering quality, transparency
//                                     and timely execution for every
//                                     project.
//                                 </p>

//                                 <h2>
//                                     Why Choose Rathore Buildcon?
//                                 </h2>

//                                 <ul>
//                                     <li>
//                                         15+ Years of Industry Experience
//                                     </li>

//                                     <li>
//                                         Premium Construction Quality
//                                     </li>

//                                     <li>
//                                         Experienced Engineers & Architects
//                                     </li>

//                                     <li>
//                                         Transparent Pricing
//                                     </li>

//                                     <li>
//                                         On-Time Project Delivery
//                                     </li>
//                                 </ul>

//                                 <h2>
//                                     Our Process
//                                 </h2>

//                                 <p>
//                                     Every successful project starts
//                                     with proper planning. Our team
//                                     understands your requirements,
//                                     prepares detailed plans, selects
//                                     quality materials and ensures
//                                     smooth execution from beginning
//                                     to end.
//                                 </p>

//                                 <blockquote>
//                                     "Building Dreams, Delivering Trust."
//                                 </blockquote>

//                                 <h2>
//                                     Conclusion
//                                 </h2>

//                                 <p>
//                                     Whether you're looking for
//                                     residential plots, construction
//                                     services or a complete bungalow
//                                     solution, Rathore Buildcon is
//                                     your trusted partner for building
//                                     your dream property.
//                                 </p>

//                             </div>

//                             {/* Related Blogs */}
//                             <RelatedBlogs
//                                 currentSlug={blog.slug}
//                             />

//                         </div>

//                         {/* =========================
//                             Sidebar
//                         ========================= */}
//                         <div className="space-y-8">

//                             <RecentPosts
//                                 currentSlug={blog.slug}
//                             />

//                             <NeedHelpCard />

//                         </div>

//                     </div>

//                 </div>

//             </section>
//         </>
//     );
// }

import {
    CalendarDays,
    ChevronRight,
    FolderOpen,
    User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getBlogs } from "../BlogData";
import NeedHelpCard from "../NeedHelpCard";
import RecentPosts from "../RecentPosts";
import RelatedBlogs from "../RelatedBlogs";

// =========================================================
// GENERATE STATIC BLOG PAGES
// Required because next.config has:
// output: "export"
// =========================================================

export async function generateStaticParams() {
    const blogs = await getBlogs();

    return blogs.map((blog) => ({
        blogId: blog.slug,
    }));
}

// =========================================================
// BLOG DETAIL PAGE
// =========================================================

export default async function BlogDetailPage({
    params,
}: {
    params: Promise<{
        blogId: string;
    }>;
}) {
    const { blogId } = await params;

    // Fetch blogs
    const blogs = await getBlogs();

    // Find current blog
    const blog = blogs.find(
        (item) => item.slug === blogId
    );

    // Blog not found
    if (!blog) {
        notFound();
    }

    return (
        <>
            {/* =====================================================
                HERO
            ===================================================== */}

            <section className="relative h-[420px] overflow-hidden">
                <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    priority
                    unoptimized
                    className="object-cover"
                />

                <div className="absolute inset-0 bg-black/60" />

                <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-5">
                    {/* Breadcrumb */}

                    <nav className="mb-6 flex items-center gap-2 text-sm text-white/80">
                        <Link
                            href="/"
                            className="transition hover:text-blue-400"
                        >
                            Home
                        </Link>

                        <ChevronRight size={16} />

                        <Link
                            href="/blog"
                            className="transition hover:text-blue-400"
                        >
                            Blog
                        </Link>

                        <ChevronRight size={16} />

                        <span className="line-clamp-1 font-semibold text-blue-400">
                            {blog.title}
                        </span>
                    </nav>

                    {/* Title */}

                    <h1 className="max-w-4xl text-4xl font-extrabold leading-tight text-white md:text-6xl">
                        {blog.title}
                    </h1>

                    {/* Meta */}

                    <div className="mt-6 flex flex-wrap gap-6 text-white/90">
                        {/* Date */}

                        <div className="flex items-center gap-2">
                            <CalendarDays size={18} />

                            <span>
                                {blog.date}
                            </span>
                        </div>

                        {/* Author */}

                        <div className="flex items-center gap-2">
                            <User size={18} />

                            <span>
                                {blog.author}
                            </span>
                        </div>

                        {/* Category */}

                        <div className="flex items-center gap-2">
                            <FolderOpen size={18} />

                            <span>
                                {blog.category}
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* =====================================================
                CONTENT
            ===================================================== */}

            <section className="py-20">
                <div className="mx-auto max-w-7xl px-5">
                    <div className="grid gap-12 lg:grid-cols-3">
                        {/* =================================================
                            MAIN CONTENT
                        ================================================= */}

                        <div className="lg:col-span-2">
                            {/* Featured Image */}

                            <div className="overflow-hidden rounded-3xl shadow-xl">
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    width={1200}
                                    height={700}
                                    unoptimized
                                    className="h-auto w-full object-cover"
                                />
                            </div>

                            {/* Blog Content */}

                            <div className="prose prose-lg mt-10 max-w-none prose-slate">
                                <h2>
                                    Introduction
                                </h2>

                                <p>
                                    {blog.description}
                                </p>

                                <p>
                                    Rathore Buildcon
                                    specializes in plotting,
                                    construction, complete
                                    bungalows, interior design
                                    and project management. We
                                    focus on delivering quality,
                                    transparency and timely
                                    execution for every project.
                                </p>

                                <h2>
                                    Why Choose Rathore Buildcon?
                                </h2>

                                <ul>
                                    <li>
                                        15+ Years of Industry
                                        Experience
                                    </li>

                                    <li>
                                        Premium Construction
                                        Quality
                                    </li>

                                    <li>
                                        Experienced Engineers &
                                        Architects
                                    </li>

                                    <li>
                                        Transparent Pricing
                                    </li>

                                    <li>
                                        On-Time Project Delivery
                                    </li>
                                </ul>

                                <h2>
                                    Our Process
                                </h2>

                                <p>
                                    Every successful project
                                    starts with proper planning.
                                    Our team understands your
                                    requirements, prepares
                                    detailed plans, selects
                                    quality materials and ensures
                                    smooth execution from
                                    beginning to end.
                                </p>

                                <blockquote>
                                    "Building Dreams, Delivering
                                    Trust."
                                </blockquote>

                                <h2>
                                    Conclusion
                                </h2>

                                <p>
                                    Whether you're looking for
                                    residential plots,
                                    construction services or a
                                    complete bungalow solution,
                                    Rathore Buildcon is your
                                    trusted partner for building
                                    your dream property.
                                </p>
                            </div>

                            {/* Related Blogs */}

                            <RelatedBlogs
                                currentSlug={blog.slug}
                            />
                        </div>

                        {/* =================================================
                            SIDEBAR
                        ================================================= */}

                        <div className="space-y-8">
                            <RecentPosts
                                currentSlug={blog.slug}
                            />

                            <NeedHelpCard />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}