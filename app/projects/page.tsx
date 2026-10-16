// "use client";

// import { ChevronRight } from "lucide-react";
// import Link from "next/link";
// import { useMemo, useState } from "react";

// import ProjectCard from "./ProjectCard";
// import { projects } from "./ProjectData";

// const categories = [
//     "All",
//     "Residential",
//     "Commercial",
//     "Bungalow",
//     "Renovation",
// ];

// const ITEMS_PER_PAGE = 9;

// export default function ProjectsPage() {
//     const [activeCategory, setActiveCategory] = useState("All");
//     const [currentPage, setCurrentPage] = useState(1);

//     const filteredProjects = useMemo(() => {
//         if (activeCategory === "All") return projects;

//         return projects.filter(
//             (project) => project.category === activeCategory
//         );
//     }, [activeCategory]);

//     const totalPages = Math.ceil(
//         filteredProjects.length / ITEMS_PER_PAGE
//     );

//     const paginatedProjects = filteredProjects.slice(
//         (currentPage - 1) * ITEMS_PER_PAGE,
//         currentPage * ITEMS_PER_PAGE
//     );

//     const handleCategory = (category: string) => {
//         setActiveCategory(category);
//         setCurrentPage(1);
//     };

//     return (
//         <section className="bg-[#f8fbff] py-15">
//             <div className="mx-auto max-w-7xl px-5">

//                 {/* Breadcrumb */}

//                 <div className="mb-8 flex items-center gap-2 text-sm text-slate-500">

//                     <Link
//                         href="/"
//                         className="transition hover:text-blue-600"
//                     >
//                         Home
//                     </Link>

//                     <ChevronRight size={16} />

//                     <span className="font-medium text-slate-700">
//                         Projects
//                     </span>

//                 </div>

//                 {/* Heading */}
//                 <div className="mb-14 text-center">
//                     <span className="text-sm font-bold uppercase tracking-[3px] text-blue-600">
//                         Our Projects
//                     </span>

//                     <h2 className="mt-3 text-4xl font-bold text-slate-900">
//                         Our Recent Projects
//                     </h2>

//                     <p className="mx-auto mt-5 max-w-2xl text-slate-600">
//                         Explore our successfully completed residential,
//                         commercial and bungalow projects crafted with
//                         quality and excellence.
//                     </p>
//                     <div className="mx-auto mt-5 flex justify-center gap-2">
//                         <span className="h-1 w-10 rounded-full bg-blue-600"></span>
//                         <span className="h-1 w-4 rounded-full bg-blue-300"></span>
//                     </div>
//                 </div>

//                 {/* Categories */}

//                 <div className="mt-12 flex flex-wrap items-center justify-center gap-3">

//                     {categories.map((category) => (
//                         <button
//                             key={category}
//                             onClick={() => handleCategory(category)}
//                             className={`cursor-pointer rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300

//                                 ${activeCategory === category
//                                     ? "bg-blue-600 text-white shadow-lg border-blue-600 border"
//                                     : "border border-slate-200 bg-white text-slate-700 hover:border-blue-600 hover:text-blue-600"
//                                 }`}
//                         >
//                             {category}
//                         </button>
//                     ))}

//                 </div>

//                 {/* Grid */}

//                 <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

//                     {paginatedProjects.map((project) => (
//                         <ProjectCard
//                             key={project.slug}
//                             project={project}
//                         />
//                     ))}

//                 </div>

//                 {/* Empty */}

//                 {paginatedProjects.length === 0 && (
//                     <div className="py-24 text-center">

//                         <h3 className="text-2xl font-bold">
//                             No Projects Found
//                         </h3>

//                         <p className="mt-3 text-slate-500">
//                             Please select another category.
//                         </p>

//                     </div>
//                 )}

//                 {/* Pagination */}

//                 {totalPages > 1 && (

//                     <div className="mt-16 flex items-center justify-center gap-3">

//                         {Array.from(
//                             { length: totalPages },
//                             (_, index) => index + 1
//                         ).map((page) => (

//                             <button
//                                 key={page}
//                                 onClick={() => setCurrentPage(page)}
//                                 className={`flex h-11 w-11 items-center justify-center rounded-xl text-sm font-semibold transition

//                                 ${currentPage === page
//                                         ? "bg-blue-600 text-white"
//                                         : "border border-slate-200 bg-white text-slate-700 hover:border-blue-600 hover:text-blue-600"
//                                     }`}
//                             >
//                                 {page}
//                             </button>

//                         ))}

//                     </div>

//                 )}

//             </div>
//         </section>
//     );
// }
"use client";
// "use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import ProjectCard from "./ProjectCard";
import { getProjects, Project } from "./ProjectData";


const ITEMS_PER_PAGE = 9;

export default function ProjectsPage() {
    const [projects, setProjects] = useState<Project[]>(
        []
    );

    const [loading, setLoading] = useState(true);

    const [activeCategory, setActiveCategory] =
        useState("All");

    const [currentPage, setCurrentPage] =
        useState(1);


    // ========================================
    // Fetch Projects API
    // ========================================

    useEffect(() => {
        const loadProjects = async () => {
            try {
                const data = await getProjects();

                setProjects(data);
            } catch (error) {
                console.error(
                    "Projects loading error:",
                    error
                );
            } finally {
                setLoading(false);
            }
        };

        loadProjects();
    }, []);

console.log("data ----->>>", projects)
    // ========================================
    // Categories from API
    // ========================================

    const categories = useMemo(() => {
        const uniqueCategories = Array.from(
            new Set(
                projects
                    .map(
                        (project) =>
                            project.category
                    )
                    .filter(Boolean)
            )
        );

        return [
            "All",
            ...uniqueCategories,
        ];
    }, [projects]);


    // ========================================
    // Filter
    // ========================================

    const filteredProjects = useMemo(() => {
        if (activeCategory === "All") {
            return projects;
        }

        return projects.filter(
            (project) =>
                project.category ===
                activeCategory
        );
    }, [
        projects,
        activeCategory,
    ]);


    // ========================================
    // Pagination
    // ========================================

    const totalPages = Math.ceil(
        filteredProjects.length /
        ITEMS_PER_PAGE
    );

    const paginatedProjects =
        filteredProjects.slice(
            (currentPage - 1) *
            ITEMS_PER_PAGE,

            currentPage *
            ITEMS_PER_PAGE
        );


    // ========================================
    // Category Handler
    // ========================================

    const handleCategory = (
        category: string
    ) => {
        setActiveCategory(category);

        setCurrentPage(1);
    };


    return (
        <section className="bg-[#f8fbff] py-15">

            <div className="mx-auto max-w-7xl px-5">

                {/* Breadcrumb */}

                <div className="mb-8 flex items-center gap-2 text-sm text-slate-500">

                    <Link
                        href="/"
                        className="transition hover:text-blue-600"
                    >
                        Home
                    </Link>

                    <ChevronRight size={16} />

                    <span className="font-medium text-slate-700">
                        Projects
                    </span>

                </div>


                {/* Heading */}

                <div className="mb-14 text-center">

                    <span className="text-sm font-bold uppercase tracking-[3px] text-blue-600">
                        Our Projects
                    </span>

                    <h2 className="mt-3 text-4xl font-bold text-slate-900">
                        Our Recent Projects
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-slate-600">
                        Explore our successfully
                        completed residential,
                        commercial and bungalow
                        projects crafted with
                        quality and excellence.
                    </p>

                    <div className="mx-auto mt-5 flex justify-center gap-2">

                        <span className="h-1 w-10 rounded-full bg-blue-600" />

                        <span className="h-1 w-4 rounded-full bg-blue-300" />

                    </div>

                </div>


                {/* Categories */}

                {!loading && projects.length > 0 && (

                    <div className="mt-12 flex flex-wrap items-center justify-center gap-3">

                        {categories.map(
                            (category) => (

                                <button
                                    key={category}
                                    onClick={() =>
                                        handleCategory(
                                            category
                                        )
                                    }
                                    className={`cursor-pointer rounded-xl border px-6 py-3 text-sm font-semibold transition-all duration-300 ${activeCategory ===
                                            category
                                            ? "border-blue-600 bg-blue-600 text-white shadow-lg"
                                            : "border-slate-200 bg-white text-slate-700 hover:border-blue-600 hover:text-blue-600"
                                        }`}
                                >
                                    {category}
                                </button>

                            )
                        )}

                    </div>

                )}


                {/* Loading */}

                {loading && (

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

                        {Array.from({
                            length: 6,
                        }).map((_, index) => (

                            <div
                                key={index}
                                className="h-100 animate-pulse rounded-3xl bg-slate-200"
                            />

                        ))}

                    </div>

                )}


                {/* Grid */}

                {!loading && (

                    <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

                        {paginatedProjects.map(
                            (project) => (

                                <ProjectCard
                                    key={
                                        project.id
                                    }
                                    project={
                                        project
                                    }
                                />

                            )
                        )}

                    </div>

                )}


                {/* Empty */}

                {!loading &&
                    paginatedProjects.length ===
                    0 && (

                        <div className="py-24 text-center">

                            <h3 className="text-2xl font-bold text-slate-900">
                                No Projects Found
                            </h3>

                            <p className="mt-3 text-slate-500">
                                Please select
                                another category.
                            </p>

                        </div>

                    )}


                {/* Pagination */}

                {!loading &&
                    totalPages > 1 && (

                        <div className="mt-16 flex items-center justify-center gap-3">

                            {Array.from(
                                {
                                    length: totalPages,
                                },
                                (_, index) =>
                                    index + 1
                            ).map(
                                (page) => (

                                    <button
                                        key={page}
                                        onClick={() =>
                                            setCurrentPage(
                                                page
                                            )
                                        }
                                        className={`flex h-11 w-11 items-center justify-center rounded-xl text-sm font-semibold transition ${currentPage ===
                                                page
                                                ? "bg-blue-600 text-white"
                                                : "border border-slate-200 bg-white text-slate-700 hover:border-blue-600 hover:text-blue-600"
                                            }`}
                                    >
                                         {page}
                                    </button>

                                )
                            )}

                        </div>

                    )}

            </div>

        </section>
    );
}