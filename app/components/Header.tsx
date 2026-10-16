// "use client";

// import {
//     ChevronDown,
//     Menu,
//     X
// } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useState } from "react";

// const menu = [
//     { name: "Home", href: "/" },
//     { name: "About Us", href: "/about" },
//     {
//         name: "Services",
//         href: "#",
//         dropdown: [
//             { name: "Plotting", href: "/services/plotting" },
//             { name: "Construction", href: "/services/construction" },
//             { name: "Complete Bungalow", href: "/services/bungalow" },
//         ],
//     },
//     { name: "Projects", href: "/projects" },
//     { name: "Plots", href: "/plots" },
//     { name: "Blog", href: "/blog" },
//     { name: "Contact", href: "/contact" },
// ];

// export default function Header() { 
//     const [mobileOpen, setMobileOpen] = useState(false);
//     const [sticky, setSticky] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => {
//             setSticky(window.scrollY > 40);
//         };

//         window.addEventListener("scroll", handleScroll);

//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     return (
//         <>
//             {/* Navbar */}
//             <header
//                 className={`fixed top-0 md:top-10 left-0 w-full z-50 transition-all duration-500 ${sticky
//                     ? "bg-white shadow-xl"
//                     : "bg-white/90 backdrop-blur-lg"
//                     }`}
//             >
//                 <div className="max-w-7xl mx-auto px-6">
//                     <div className=" flex items-center justify-between">
//                         {/* Logo */}
//                         <Link href="/" className="flex items-center gap-3">

//                             <Image
//                                 src="/logo.jpg"
//                                 width={300}
//                                 height={40}
//                                 alt="logo"
//                                 style={{
//                                     height:"100px"
//                                 }}
//                             />

//                             <div>

//                                 {/* <h2 className="font-bold text-2xl text-slate-900">
//                                     RATHORE
//                                 </h2>

//                                 <p className="text-xs tracking-[4px] uppercase text-slate-500">
//                                     BUILDCON
//                                 </p> */}

//                             </div>

//                         </Link>

//                         {/* Desktop Menu */}

//                         <nav className="hidden lg:flex items-center gap-10">

//                             {menu.map((item) => (

//                                 <div
//                                     key={item.name}
//                                     className="relative group"
//                                 >
//                                     <Link
//                                         href={item.href}
//                                         className="flex items-center gap-1 font-medium text-slate-700 hover:text-blue-600 transition"
//                                     >
//                                         {item.name}

//                                         {item.dropdown && (
//                                             <ChevronDown size={16} />
//                                         )}
//                                     </Link>

//                                     {item.dropdown && (

//                                         <div className="absolute top-full left-0 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 w-60 bg-white rounded-xl shadow-2xl border mt-5">

//                                             {item.dropdown.map((sub) => (

//                                                 <Link
//                                                     key={sub.name}
//                                                     href={sub.href}
//                                                     className="block px-5 py-4 hover:bg-blue-50 hover:text-blue-600"
//                                                 >
//                                                     {sub.name}
//                                                 </Link>

//                                             ))}

//                                         </div>

//                                     )}
//                                 </div>

//                             ))}

//                         </nav>

//                         {/* CTA */}

//                         <div className="hidden lg:flex items-center gap-4">

//                             <a
//                                 href="tel:+919876543210"
//                                 className="font-semibold text-slate-700 hover:text-blue-600"
//                             >
//                                 Call Now
//                             </a>

//                             <Link
//                                 href="/contact"
//                                 className="rounded-full bg-blue-600 text-white px-6 py-3 hover:bg-blue-700 transition font-semibold"
//                             >
//                                 Get Free Quote →
//                             </Link>

//                         </div>

//                         {/* Mobile */}

//                         <button
//                             className="lg:hidden"
//                             onClick={() => setMobileOpen(!mobileOpen)}
//                         >
//                             {mobileOpen ? (
//                                 <X size={30} />
//                             ) : (
//                                 <Menu size={30} />
//                             )}
//                         </button>

//                     </div>

//                 </div>

//                 {/* Mobile Menu */}

//                 {mobileOpen && (

//                     <div className="lg:hidden bg-white border-t">

//                         {menu.map((item) => (

//                             <Link
//                                 key={item.name}
//                                 href={item.href}
//                                 className="block px-6 py-4 border-b hover:bg-slate-50"
//                                 onClick={() => setMobileOpen(false)}
//                             >
//                                 {item.name}
//                             </Link>

//                         ))}

//                         <div className="p-6">

//                             <Link
//                                 href="/contact"
//                                 className="block text-center rounded-full bg-blue-600 text-white py-3 font-semibold"
//                             >
//                                 Get Free Quote
//                             </Link>

//                         </div>

//                     </div>

//                 )}

//             </header>
//         </>
//     );
// }
"use client";

import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import GetConsultationModal from "./GetConsulationModal";
const navLinks = [
    { title: "Home", href: "/" },
    { title: "About Us", href: "/about" },
    {
        title: "Services",
        href: "/services",
    },
    { title: "Projects", href: "/projects" },
    { title: "Plots", href: "/plots" },
    { title: "Blog", href: "/blog" },
    { title: "Contact Us", href: "/contact" },
];

export default function Header() {
    const [mobileMenu, setMobileMenu] = useState(false);
    const pathname = usePathname();
    const [openModal, setOpenModal] = useState(false)
    return (
        <>
            <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md shadow-sm">
                <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
                    {/* Logo */}
                    <Link href="/" className="">
                        <img
                            src="/logo-blue-1.png"
                            alt="Rathore Buildcon"
                            style={{ width: "230px", height: "auto" }}
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <nav className="hidden items-center gap-8 lg:flex">
                        {navLinks.map((item) => {
                            const isActive =
                                item.href === "/"
                                    ? pathname === "/"
                                    : pathname.startsWith(item.href);
                            return (
                                <div key={item.title} className="group relative">
                                    <Link
                                        href={item.href}
                                        className={`cursor-pointer flex items-center gap-1 text-[15px] font-semibold transition ${isActive
                                            ? "text-blue-600"
                                            : "text-slate-700 hover:text-blue-600"
                                            }`}
                                    >
                                        {item.title}
                                    </Link>

                                    {/* Active Underline */}
                                    <span
                                        className={`absolute -bottom-7 left-0 h-0.75 rounded-full bg-blue-600 transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                                            }`}
                                    />
                                </div>
                            );
                        })}
                    </nav>

                    {/* CTA */}
                    <div className="hidden lg:block">
                        <button
                            onClick={() => { setOpenModal(true) }}
                            className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                        >
                            Get Free Quote
                            <ArrowRight size={18} />
                        </button>
                    </div>

                    {/* Mobile Button */}
                    <button
                        onClick={() => setMobileMenu(!mobileMenu)}
                        className="rounded-lg p-2 lg:hidden"
                        
                    >
                        {mobileMenu ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`overflow-hidden bg-white transition-all duration-300 lg:hidden ${mobileMenu ? "max-h-screen border-t" : "max-h-0"
                        }`}
                >
                    <div className="space-y-1 px-6 py-5">
                        {navLinks.map((item) => {
                            const isActive =
                                item.href === "/"
                                    ? pathname === "/"
                                    : pathname.startsWith(item.href);
                            return (
                                <Link
                                    key={item.title}
                                    href={item.href}
                                    onClick={() => setMobileMenu(false)}
                                    className={`block rounded-lg px-3 py-3 font-medium transition
                    ${isActive
                                            ? "bg-blue-600 text-white"
                                            : "text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                                        }`}
                                >
                                    {item.title}
                                </Link>
                            );
                        })}

                        <Link
                            href="/contact"
                            onClick={() => setMobileMenu(false)}
                            className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
                        >
                            Get Free Quote
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </header>
            {
                openModal && (
                    <GetConsultationModal isOpen={openModal} onClose={() => { setOpenModal(false) }} />
                )
            }
        </>
    );
}