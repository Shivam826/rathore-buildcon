import { NextResponse } from "next/server";

const API_URL ="http://localhost:5000/api/projects"
    // "https://rathorebuildconcrm.site.je/RATHORE-BUILDCON-CRM/api/projects.php";

export async function GET() {
    try {
        const response = await fetch(API_URL, {
            method: "GET",
            headers: {
                Accept: "application/json",
            },
            cache: "no-store",
        });

        if (!response.ok) {
            return NextResponse.json(
                {
                    success: false,
                    message: `PHP API returned ${response.status}`,
                },
                { status: response.status }
            );
        }

        const data = await response.json();

        return NextResponse.json(data);

    } catch (error) {
        console.error("Projects API error:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Failed to fetch projects",
            },
            { status: 500 }
        );
    }
}


