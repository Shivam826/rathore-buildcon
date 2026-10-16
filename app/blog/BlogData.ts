
// export interface Blog {
//     slug: string;
//     title: string;
//     image: string;
//     date: string;
//     author: string;
//     category: string;
//     description: string;
// }
// export const blogs = [
//     {
//         slug: "buying-the-right-plot",
//         title: "10 Tips for Buying the Right Plot",
//         image:
//             "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200",
//         date: "May 10, 2025",
//         author: "Admin",
//         category: "Plots",
//         description:
//             "Learn how to choose the perfect plot by considering location, legal documents, infrastructure and future growth."
//     },
//     {
//         slug: "custom-bungalow-benefits",
//         title: "Benefits of Building a Custom Bungalow",
//         image:
//             "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200",
//         date: "May 05, 2025",
//         author: "Admin",
//         category: "Construction",
//         description:
//             "Learn how to choose the perfect plot by considering location, legal documents, infrastructure and future growth."
//     },
//     {
//         slug: "construction-process",
//         title: "Construction Process: Step by Step Guide",
//         image:
//             "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200",
//         date: "April 26, 2025",
//         author: "Admin",
//         category: "Construction",
//         description:
//             "Learn how to choose the perfect plot by considering location, legal documents, infrastructure and future growth."
//     },
//     {
//         slug: "interior-design-trends",
//         title: "Interior Design Trends in 2025",
//         image:
//             "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200",
//         date: "April 20, 2025",
//         author: "Admin",
//         category: "Interior",
//         description:
//             "Learn how to choose the perfect plot by considering location, legal documents, infrastructure and future growth."
//     },
//     {
//         slug: "plan-your-dream-home",
//         title: "How to Plan Your Dream Home",
//         image:
//             "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200",
//         date: "April 15, 2025",
//         author: "Admin",
//         category: "Construction",
//         description:
//             "Learn how to choose the perfect plot by considering location, legal documents, infrastructure and future growth."
//     },
//     {
//         slug: "experienced-builders", 
//         title: "Why Choose Experienced Builders?",
//         image:
//             "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200",
//         date: "April 10, 2025",
//         author: "Admin",
//         category: "Construction",
//         description:
//             "Learn how to choose the perfect plot by considering location, legal documents, infrastructure and future growth."
//     },
// ];

import { API_URL } from "../api/blogs/route";

// export interface Blog {
//     slug: string;
//     title: string;
//     image: string;
//     date: string;
//     author: string;
//     category: string;
//     description: string;
// }

// const API_URL = "http://localhost:5000/api/blogs";

// function formatBlog(item: any): Blog {
//     const title = item.title || item.blog_title || "";

//     const slug =
//         item.slug ||
//         `${title
//             .toLowerCase()
//             .trim()
//             .replace(/[^a-z0-9]+/g, "-")
//             .replace(/^-+|-+$/g, "")}-${item.id || ""}`;

//     return {
//         slug,
//         title,
//         image: item.image || item.blog_image || "",
//         date: item.date || item.created_at || "",
//         author: item.author || "",
//         category: item.category || "",
//         description:
//             item.description ||
//             item.content ||
//             item.excerpt ||
//             "",
//     };
// }

// export async function getBlogs(): Promise<Blog[]> {
//     try {
//         console.log("Fetching Blogs API:", API_URL);

//         const response = await fetch(API_URL, {
//             method: "GET",
//             headers: {
//                 Accept: "application/json",
//             },
//             cache: "no-store",
//         });

//         console.log("Blogs API Status:", response.status);

//         if (!response.ok) {
//             throw new Error(
//                 `Blogs API Error: ${response.status}`
//             );
//         }

//         const result = await response.json();

//         console.log("Blogs API Response:", result);

//         const apiBlogs = Array.isArray(result.blogs)
//             ? result.blogs
//             : [];

//         return apiBlogs.map(formatBlog);
//     } catch (error) {
//         console.error("Failed to fetch blogs:", error);
//         return [];
//     }
// }

// export async function getBlog(
//     slug: string
// ): Promise<Blog | undefined> {
//     const blogs = await getBlogs();

//     return blogs.find(
//         (blog) => blog.slug === slug
//     );
// }

export interface Blog {
    slug: string;
    title: string;
    image: string;
    date: string;
    author: string;
    category: string;
    description: string;
}

function formatBlog(item: any): Blog {
    const title =
        item.title ||
        item.blog_title ||
        "";

    const slug =
        item.slug ||
        `${title
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-+|-+$/g, "")}${item.id ? `-${item.id}` : ""
        }`;

    return {
        slug,
        title,
        image:
            item.image ||
            item.blog_image ||
            item.featured_image ||
            "",
        date:
            item.date ||
            item.created_at ||
            "",
        author:
            item.author ||
            "",
        category:
            item.category ||
            "",
        description:
            item.description ||
            item.content ||
            item.excerpt ||
            "",
    };
}

export async function getBlogs(): Promise<Blog[]> {
    try {
        console.log(
            "Fetching Blogs API:",
            API_URL
        );

        const response = await fetch(API_URL, {
            method: "GET",
            headers: {
                Accept: "application/json",
            },
            cache: "no-store",
        });

        console.log(
            "Blogs API Status:",
            response.status
        );

        if (!response.ok) {
            const errorText =
                await response.text();

            console.error(
                "Blogs API Error:",
                errorText
            );

            throw new Error(
                `Blogs API Error: ${response.status}`
            );
        }

        const result =
            await response.json();

        console.log(
            "Blogs API Response:",
            result
        );

        const apiBlogs =
            Array.isArray(result)
                ? result
                : Array.isArray(result.blogs)
                    ? result.blogs
                    : [];

        return apiBlogs.map(formatBlog);
    } catch (error) {
        console.error(
            "Failed to fetch blogs:",
            error
        );

        return [];
    }
}
// export interface Blog {
//     slug: string;
//     title: string;
//     image: string;
//     date: string;
//     author: string;
//     category: string;
//     description: string;
// }

// const API_URL =
//     typeof window !== "undefined"

//     && "http://localhost:5000/api/blogs";
// console.log("API_URL ---", API_URL)
// function formatBlog(item: any): Blog {
//     const title =
//         item.title ||
//         item.blog_title ||
//         "";

//     const slug =
//         item.slug ||
//         `${title
//             .toLowerCase()
//             .trim()
//             .replace(/[^a-z0-9]+/g, "-")
//             .replace(/^-+|-+$/g, "")}${item.id ? `-${item.id}` : ""}`;

//     return {
//         slug,
//         title,
//         image:
//             item.image ||
//             item.blog_image ||
//             item.featured_image ||
//             "",

//         date:
//             item.date ||
//             item.created_at ||
//             "",

//         author:
//             item.author ||
//             "",

//         category:
//             item.category ||
//             "",

//         description:
//             item.description ||
//             item.content ||
//             item.excerpt ||
//             "",
//     };
// }

// export async function getBlogs(): Promise<Blog[]> {
//     try {
//         console.log(
//             "Fetching Blogs API:",
//             API_URL
//         );

//         const response = await fetch(API_URL, {
//             method: "GET",
//             headers: {
//                 Accept: "application/json",
//             },
//             cache: "no-store",
//         });

//         console.log(
//             "Blogs API Status:",
//             response.status
//         );

//         if (!response.ok) {
//             const errorText =
//                 await response.text();

//             console.error(
//                 "Blogs API Error:",
//                 errorText
//             );

//             throw new Error(
//                 `Blogs API Error: ${response.status}`
//             );
//         }

//         const result =
//             await response.json();

//         console.log(
//             "Blogs API Response:",
//             result
//         );

//         // Support both:
//         // { blogs: [...] }
//         // and [...]
//         const apiBlogs = Array.isArray(result)
//             ? result
//             : Array.isArray(result.blogs)
//                 ? result.blogs
//                 : [];

//         return apiBlogs.map(formatBlog);
//     } catch (error) {
//         console.error(
//             "Failed to fetch blogs:",
//             error
//         );

//         return [];
//     }
// }

// export async function getBlog(
//     slug: string
// ): Promise<Blog | undefined> {
//     const blogs = await getBlogs();

//     return blogs.find(
//         (blog) => blog.slug === slug
//     );
// }