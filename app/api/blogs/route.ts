import { NextResponse } from "next/server";

export const API_URL = "http://localhost:5000/api/blogs";

export async function GET() {
    try {
        console.log("BLOGS API URL:", API_URL);

        const response = await fetch(API_URL, {
            method: "GET",
            headers: {
                Accept: "application/json",
            },
            cache: "no-store",
        });

        const text = await response.text();

        console.log("BLOGS NODE STATUS:", response.status);
        console.log("BLOGS NODE RESPONSE:", text);

        if (!response.ok) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Node Blogs API failed",
                    status: response.status,
                    response: text,
                },
                {
                    status: response.status,
                }
            );
        }

        let data;

        try {
            data = JSON.parse(text);
        } catch {
            return NextResponse.json(
                {
                    success: false,
                    message: "Node Blogs API returned invalid JSON",
                    response: text,
                },
                {
                    status: 502,
                }
            );
        }

        return NextResponse.json(data);
    } catch (error) {
        console.error("NEXT BLOGS API ERROR:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Failed to connect to Node Blogs API",
                error:
                    error instanceof Error
                        ? error.message
                        : "Unknown error",
            },
            {
                status: 500,
            }
        );
    }
}