// export interface Project {
//     id: number;
//     slug: string;
//     title: string;
//     category: string;
//     image: string;
//     location: string;
//     shortDescription: string;
//     overview: string;
//     price: string;
//     status: string;
//     area: string;
//     bedrooms: number;
//     bathrooms: number;
//     parking: number;
//     features: string[];
//     amenities: string[];
//     gallery: string[];
// }
// export interface Project {
//     id: number;
//     slug: string;
//     title: string;
//     category: string;

//     image: string;

//     location: string;
//     address: string;
//     googleMap: string;

//     shortDescription: string;
//     overview: string;

//     price: string;
//     plotRate: string;
//     plotSizes: string;
//     dimension: string;

//     status: string;
//     createdAt: string;

//     bedrooms: number;
//     bathrooms: number;
//     parking: number;

//     features: string[];
//     amenities: string[];
//     gallery: string[];
// }



export interface Project {
    id: number;
    slug: string;
    title: string;
    category: string;

    image: string;

    location: string;
    address: string;
    googleMap: string;

    shortDescription: string;
    overview: string;

    price: string;
    plotRate: string;
    plotSizes: string;
    dimension: string;

    status: string;
    createdAt: string;

    bedrooms: number;
    bathrooms: number;
    parking: number;

    features: string[];
    amenities: string[];
    gallery: string[];
}

const API_URL =
    "http://localhost:5000/api/projects";


// ==========================================
// Convert API Data → Frontend Project
// ==========================================

function formatProject(item: any): Project {
    const title = item.project_name || "";

    const slug =
        `${title
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-+|-+$/g, "")}-${item.id}`;

    return {
        id: Number(item.id),

        slug,

        title,

        category: item.project_type || "",

        image: item.image || "",

        location: item.location || "",

        address: item.address || "",

        googleMap: item.google_map || "",

        shortDescription:
            item.description || "",

        overview:
            item.description || "",

        price:
            item.price || "",

        plotRate:
            item.plot_rate || "",

        plotSizes:
            item.plot_sizes || "",

        dimension:
            item.dimension || "",

        status:
            item.status || "",

        createdAt:
            item.created_at || "",

        // These fields are not currently
        // available in your API
        bedrooms: 0,

        bathrooms: 0,

        parking: 0,

        features: [],

        amenities: [],

        gallery:
            Array.isArray(item.gallery)
                ? item.gallery
                : [],
    };
}


// ==========================================
// GET ALL PROJECTS
// ==========================================

export async function getProjects(): Promise<Project[]> {
    try {
        const response = await fetch(API_URL, {
            method: "GET",
            headers: {
                Accept: "application/json",
            },
            cache: "no-store",
        });

        if (!response.ok) {
            throw new Error(
                `Projects API Error: ${response.status}`
            );
        }

        const result = await response.json();

        const apiProjects = Array.isArray(result.projects)
            ? result.projects
            : [];

        return apiProjects.map(formatProject);

    } catch (error) {
        console.error("Failed to fetch projects:", error);
        return [];
    }
}


// ==========================================
// GET SINGLE PROJECT
// ==========================================

export async function getProject(
    slug: string
): Promise<Project | undefined> {
    const projects = await getProjects();

    return projects.find(
        (project) =>
            project.slug === slug
    );
}

// export const projects: Project[] = [
//     {
//         id: 1,
//         slug: "luxury-villa-indore",
//         title: "Luxury Villa",
//         category: "Residential",
//         image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200",
//         location: "Vijay Nagar, Indore",
//         shortDescription:
//             "Premium luxury villa with spacious interiors and modern amenities.",
//         overview:
//             "Experience luxurious living with beautifully designed villas offering premium construction, spacious rooms, landscaped gardens, and world-class amenities. Every detail is crafted to provide comfort, elegance, and long-lasting quality.",
//         price: "₹85 Lakhs",
//         status: "Ready to Move",
//         area: "2500 Sq. Ft.",
//         bedrooms: 4,
//         bathrooms: 4,
//         parking: 2,
//         features: [
//             "Premium Construction",
//             "Modern Elevation",
//             "Earthquake Resistant Structure",
//             "Smart Home Ready",
//             "Modular Kitchen",
//             "Landscape Garden",
//         ],
//         amenities: [
//             "Club House",
//             "Swimming Pool",
//             "Gymnasium",
//             "Children Play Area",
//             "Jogging Track",
//             "24x7 Security",
//             "Power Backup",
//             "Visitor Parking",
//         ],
//         gallery: [
//             "https://images.unsplash.com/photo-1600585154340-be6161a56a0f?w=1200",
//             "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200",
//             "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200",
//             "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200",
//         ],
//     },

//     {
//         id: 2,
//         slug: "premium-bungalow",
//         title: "Premium Bungalow",
//         category: "Bungalow",
//         image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200",
//         location: "Scheme No. 140, Indore",
//         shortDescription:
//             "Elegant bungalow designed with luxury and comfort.",
//         overview:
//             "A premium bungalow project featuring contemporary architecture, spacious bedrooms, luxury interiors, landscaped surroundings, and premium-quality materials for modern family living.",
//         price: "₹1.25 Cr",
//         status: "Under Construction",
//         area: "3200 Sq. Ft.",
//         bedrooms: 5,
//         bathrooms: 5,
//         parking: 3,
//         features: [
//             "Luxury Interiors",
//             "Designer Elevation",
//             "Premium Flooring",
//             "False Ceiling",
//             "Smart Lighting",
//             "Private Garden",
//         ],
//         amenities: [
//             "Private Parking",
//             "Garden Area",
//             "Power Backup",
//             "CCTV Security",
//             "Modular Kitchen",
//             "Water Storage",
//             "Terrace Garden",
//             "Kids Play Area",
//         ],
//         gallery: [
//             "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200",
//             "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200",
//             "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200",
//             "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=1200",
//         ],
//     },

//     {
//         id: 3,
//         slug: "green-valley-plots",
//         title: "Green Valley Plots",
//         category: "Plots",
//         image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200",
//         location: "Super Corridor, Indore",
//         shortDescription:
//             "Residential plots in a rapidly developing location.",
//         overview:
//             "Own premium residential plots in a fast-growing area with wide roads, green surroundings, modern infrastructure, and excellent connectivity to schools, hospitals, and commercial hubs.",
//         price: "₹2,500 / Sq. Ft.",
//         status: "Booking Open",
//         area: "1200 - 2400 Sq. Ft.",
//         bedrooms: 0,
//         bathrooms: 0,
//         parking: 1,
//         features: [
//             "Wide Roads",
//             "Gated Township",
//             "Street Lighting",
//             "Water Connection",
//             "Drainage System",
//             "Green Parks",
//         ],
//         amenities: [
//             "24x7 Security",
//             "Garden",
//             "Walking Track",
//             "Children Park",
//             "Temple",
//             "Community Hall",
//             "Shopping Area",
//             "Visitor Parking",
//         ],
//         gallery: [
//             "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200",
//             "https://images.unsplash.com/photo-1448630360428-65456885c650?w=1200",
//             "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=1200",
//             "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=1200",
//         ],
//     },
// ];