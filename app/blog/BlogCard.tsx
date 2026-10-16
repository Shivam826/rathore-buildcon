// "use client";

// import { ArrowRight } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";

// type Props = {
//     blog: {
//         slug: string;
//         title: string;
//         image: string;
//         date: string;
//         author: string;
//     };
// };

// export default function BlogCard({ blog }: Props) {
//     return (
//         <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

//             <div className="relative h-60 overflow-hidden">
//                 <Image
//                     src={blog.image}
//                     alt={blog.title}
//                     fill
//                     unoptimized
//                     className="object-cover transition duration-500 group-hover:scale-110"
//                 />
//             </div>

//             <div className="p-6">

//                 <h3 className="line-clamp-2 min-h-16 text-xl font-bold text-slate-900">
//                     {blog.title}
//                 </h3>

//                 <div className="mt-4 flex gap-4 text-sm text-slate-500">
//                     <span>{blog.date}</span>
//                     <span>•</span>
//                     <span>{blog.author}</span>
//                 </div>

//                 <Link
//                     href={`/blog/${blog.slug}`}
//                     className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-700"
//                 >
//                     Read More
//                     <ArrowRight size={18} />
//                 </Link>

//             </div>

//         </div>
//     );
// }
"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
    blog: {
        slug: string;
        title: string;
        image: string;
        date: string;
        author: string;
    };
};

export default function BlogCard({
    blog,
}: Props) {
    return (
        <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

            <div className="relative h-60 overflow-hidden">
                <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    unoptimized
                    className="object-cover transition duration-500 group-hover:scale-110"
                />
            </div>

            <div className="p-6">

                <h3 className="line-clamp-2 min-h-16 text-xl font-bold text-slate-900">
                    {blog.title}
                </h3>

                <div className="mt-4 flex gap-4 text-sm text-slate-500">
                    <span>{blog.date}</span>

                    <span>•</span>

                    <span>{blog.author}</span>
                </div>

                <Link
                    href={`/blog/${blog.slug}`}
                    className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-700"
                >
                    Read More

                    <ArrowRight size={18} />
                </Link>

            </div>
        </div>
    );
}