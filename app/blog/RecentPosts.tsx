// "use client";

// import { blogs } from "@/app/blog/BlogData";
// import Image from "next/image";
// import Link from "next/link";

// type Props = {
//     currentSlug: string;
// };

// export default function RecentPosts({ currentSlug }: Props) {
//     const recentPosts = blogs
//         .filter((blog) => blog.slug !== currentSlug)
//         .slice(0, 5);

//     return (
//         <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">

//             <h3 className="mb-6 text-2xl font-bold text-slate-900">
//                 Recent Posts
//             </h3>

//             <div className="space-y-5">

//                 {recentPosts.map((post) => (
//                     <Link
//                         key={post.slug}
//                         href={`/blog/${post.slug}`}
//                         className="group flex gap-4"
//                     >
//                         {/* Image */}
//                         <div className="relative h-20 w-24 overflow-hidden rounded-xl flex-shrink-0">
//                             <Image
//                                 src={post.image}
//                                 alt={post.title}
//                                 fill
//                                 unoptimized
//                                 className="object-cover transition duration-500 group-hover:scale-110"
//                             />
//                         </div>

//                         {/* Content */}
//                         <div className="flex-1">

//                             <h4 className="line-clamp-2 text-[15px] font-semibold leading-6 text-slate-800 transition group-hover:text-blue-600">
//                                 {post.title}
//                             </h4>

//                             <p className="mt-2 text-sm text-slate-500">
//                                 {post.date}
//                             </p>

//                         </div>
//                     </Link>
//                 ))}

//             </div>
//         </div>
//     );
// }
"use client";

import { getBlogs, Blog } from "@/app/blog/BlogData";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Props = {
    currentSlug: string;
};

export default function RecentPosts({
    currentSlug,
}: Props) {
    const [recentPosts, setRecentPosts] = useState<Blog[]>([]);

    useEffect(() => {
        async function loadBlogs() {
            const allBlogs = await getBlogs();

            const filteredBlogs = allBlogs
                .filter(
                    (blog) =>
                        blog.slug !== currentSlug
                )
                .slice(0, 5);

            setRecentPosts(filteredBlogs);
        }

        loadBlogs();
    }, [currentSlug]);

    return (
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
            <h3 className="mb-6 text-2xl font-bold text-slate-900">
                Recent Posts
            </h3>

            <div className="space-y-5">
                {recentPosts.map((post) => (
                    <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="group flex gap-4"
                    >
                        <div className="relative h-20 w-24 flex-shrink-0 overflow-hidden rounded-xl">
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                unoptimized
                                className="object-cover transition duration-500 group-hover:scale-110"
                            />
                        </div>

                        <div className="flex-1">
                            <h4 className="line-clamp-2 text-[15px] font-semibold leading-6 text-slate-800 transition group-hover:text-blue-600">
                                {post.title}
                            </h4>

                            <p className="mt-2 text-sm text-slate-500">
                                {post.date}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}