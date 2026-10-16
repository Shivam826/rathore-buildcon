// const express = require("express");
// const cors = require("cors");
// const crypto = require("crypto");

// const app = express();

// const PORT = 5000;

// // =========================================================
// // EXISTING PHP API
// // =========================================================

// const PHP_API_BASE =
//     "https://rathorebuildconcrm.site.je/RATHORE-BUILDCON-CRM/api";



// const BLOGS_API =
//     "https://rathorebuildconcrm.site.je/RATHORE-BUILDCON-CRM/api/blogs.php";
// const PROJECTS_API =
//     `${PHP_API_BASE}/projects.php`;

// // If your single-project PHP file has a different name,
// // change this accordingly.
// const PROJECT_API =
//     `${PHP_API_BASE}/project.php`;

// // =========================================================
// // MIDDLEWARE
// // =========================================================

// app.use(
//     cors({
//         origin: [
//             "http://localhost:3000",
//             "http://127.0.0.1:3000",
//             "https://rathorebuildcon.com",
//             "https://www.rathorebuildcon.com"
//         ],
//         methods: ["GET", "POST", "OPTIONS"],
//         allowedHeaders: [
//             "Content-Type",
//             "Authorization",
//             "Accept"
//         ]
//     })
// );

// app.use(express.json());


// // =========================================================
// // JS "ANTI-BOT" CHALLENGE SOLVER
// // =========================================================
// //
// // Some free hosts (this looks like an iFastNet / InfinityFree-
// // style network) serve a small HTML page instead of your real
// // response on the first hit. It contains an inline script that:
// //   1. AES-decrypts a hardcoded ciphertext with a hardcoded
// //      key + IV (using the "slowAES" library, mode 2 = CBC)
// //   2. Sets the hex result as a `__test` cookie
// //   3. Redirects to the same URL with `?i=1` appended
// //
// // A real browser executes that JS automatically. Our server
// // can't run JS, so we replicate the AES step natively and
// // attach the resulting cookie ourselves.

// function isChallengePage(html) {
//     return typeof html === "string" && html.includes("slowAES.decrypt");
// }

// function solveJsChallenge(html) {
//     // Pull the three toNumbers("...") hex blobs in order: key, iv, ciphertext
//     const hexBlobs = [...html.matchAll(/toNumbers\("([0-9a-fA-F]+)"\)/g)]
//         .map((m) => m[1]);

//     if (hexBlobs.length < 3) {
//         throw new Error("Could not locate challenge parameters in HTML");
//     }

//     const [keyHex, ivHex, cipherHex] = hexBlobs;

//     const key = Buffer.from(keyHex, "hex");
//     const iv = Buffer.from(ivHex, "hex");
//     const cipherText = Buffer.from(cipherHex, "hex");

//     // The page's own JS never strips padding before hex-encoding the
//     // result, so we disable auto-padding to match that exactly.
//     const decipher = crypto.createDecipheriv("aes-128-cbc", key, iv);
//     decipher.setAutoPadding(false);
//     const decrypted = Buffer.concat([decipher.update(cipherText), decipher.final()]);

//     const cookieValue = decrypted.toString("hex");

//     // Pull the redirect target the page sends the browser to
//     const redirectMatch = html.match(/location\.href\s*=\s*"([^"]+)"/);
//     const redirectUrl = redirectMatch ? redirectMatch[1] : null;

//     return { cookie: `__test=${cookieValue}`, redirectUrl };
// }

// // Fetches a URL, transparently solving the JS challenge if the host
// // throws one up, and returns the final response's parsed body/text.
// async function fetchThroughChallenge(url, options = {}) {
//     const firstResponse = await fetch(url, {
//         ...options,
//         redirect: "follow",
//     });

//     const firstText = await firstResponse.text();

//     if (!isChallengePage(firstText)) {
//         return { response: firstResponse, text: firstText };
//     }

//     console.log("Anti-bot challenge detected, solving...");

//     const { cookie, redirectUrl } = solveJsChallenge(firstText);
//     const nextUrl = redirectUrl || url;

//     const secondResponse = await fetch(nextUrl, {
//         ...options,
//         redirect: "follow",
//         headers: {
//             ...(options.headers || {}),
//             Cookie: cookie,
//         },
//     });

//     const secondText = await secondResponse.text();

//     // In case the host issues the challenge twice in a row (rare, but
//     // some setups do it once per "session"), try once more.
//     if (isChallengePage(secondText)) {
//         console.log("Challenge served twice, solving again...");
//         const solved2 = solveJsChallenge(secondText);
//         const thirdResponse = await fetch(solved2.redirectUrl || nextUrl, {
//             ...options,
//             redirect: "follow",
//             headers: {
//                 ...(options.headers || {}),
//                 Cookie: solved2.cookie,
//             },
//         });
//         const thirdText = await thirdResponse.text();
//         return { response: thirdResponse, text: thirdText };
//     }

//     return { response: secondResponse, text: secondText };
// }


// // =========================================================
// // TEST ROUTE
// // =========================================================

// app.get("/", (req, res) => {
//     res.json({
//         success: true,
//         message: "Rathore Buildcon Node.js API is running"
//     });
// });


// // =========================================================
// // GET ALL PROJECTS
// // =========================================================

// app.get("/api/projects", async (req, res) => {
//     console.log("\n==============================");
//     console.log("GET /api/projects");
//     console.log("PHP URL:", PROJECTS_API);

//     try {
//         const { response, text } = await fetchThroughChallenge(PROJECTS_API, {
//             method: "GET",
//             headers: {
//                 Accept: "application/json",
//                 "User-Agent": "RathoreBuildcon-Node-API/1.0",
//             },
//         });

//         console.log("PHP STATUS:", response.status);
//         console.log("PHP FINAL URL:", response.url);
//         console.log("PHP RESPONSE LENGTH:", text.length);
//         console.log("PHP RESPONSE:");
//         console.log(text.substring(0, 3000));

//         let data;

//         try {
//             data = JSON.parse(text);
//         } catch (error) {
//             console.error("JSON PARSE ERROR:", error.message);

//             return res.status(502).json({
//                 success: false,
//                 message: "PHP API did not return valid JSON",
//                 phpStatus: response.status,
//                 contentType: response.headers.get("content-type"),
//                 finalUrl: response.url,
//                 response: text.substring(0, 3000),
//             });
//         }

//         return res.json(data);

//     } catch (error) {
//         console.error("FETCH ERROR:", error);

//         return res.status(502).json({
//             success: false,
//             message: "Node could not connect to PHP API",
//             error: error.message,
//             cause: error.cause?.message || null,
//         });
//     }
// });


// // =========================================================
// // GET SINGLE PROJECT
// // =========================================================

// app.get("/api/projects/:id", async (req, res) => {

//     const { id } = req.params;

//     console.log("=================================");
//     console.log(`GET /api/projects/${id}`);
//     console.log("Frontend Origin:", req.headers.origin);
//     console.log("Project ID:", id);
//     console.log("=================================");

//     try {

//         const url = `${PROJECT_API}?id=${encodeURIComponent(id)}`;

//         console.log("Calling PHP API:", url);

//         const { response, text } = await fetchThroughChallenge(url, {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json, text/html"
//             }
//         });

//         console.log("PHP API Status:", response.status);

//         if (!response.ok) {
//             console.error("PHP Project API Error:", text);

//             return res.status(response.status).json({
//                 success: false,
//                 message: "PHP Project API returned an error",
//                 status: response.status
//             });
//         }

//         const contentType = response.headers.get("content-type") || "";

//         // Try JSON first regardless of header, since the challenge
//         // page is also served as text/html
//         try {
//             const data = JSON.parse(text);
//             return res.json(data);
//         } catch (_) {
//             // Not JSON — fall through to returning raw HTML
//         }

//         return res.send(text);

//     } catch (error) {

//         console.error("Node.js Single Project Error:", error);

//         return res.status(500).json({
//             success: false,
//             message: "Unable to connect to PHP project API",
//             error: error.message
//         });
//     }
// });


// // =========================================================
// // HEALTH CHECK
// // =========================================================

// app.get("/api/health", (req, res) => {

//     res.json({
//         success: true,
//         server: "Node.js",
//         status: "running",
//         phpApi: PROJECTS_API
//     });

// });
// // =========================================================
// // HEALTH CHECK
// // =========================================================

// app.get("/api/health", (req, res) => {
//     res.json({
//         success: true,
//         server: "Node.js",
//         status: "running",
//         phpApi: PROJECTS_API,
//     });
// });


// // =========================================================
// // GET BLOGS
// // =========================================================

// app.get("/api/blogs", async (req, res) => {
//     try {
//         const { response, text } = await fetchThroughChallenge(
//             BLOGS_API,
//             {
//                 method: "GET",
//                 headers: {
//                     Accept: "application/json",
//                     "User-Agent": "RathoreBuildcon-Node-API/1.0",
//                 },
//             }
//         );

//         console.log("Blogs PHP status:", response.status);
//         console.log("Blogs PHP response:", text);

//         if (!response.ok) {
//             return res.status(502).json({
//                 success: false,
//                 message: "PHP Blogs API returned an error",
//                 phpStatus: response.status,
//                 response: text.substring(0, 3000),
//             });
//         }

//         let data;

//         try {
//             data = JSON.parse(text);
//         } catch (error) {
//             return res.status(502).json({
//                 success: false,
//                 message: "PHP Blogs API did not return valid JSON",
//                 contentType: response.headers.get("content-type"),
//                 finalUrl: response.url,
//                 response: text.substring(0, 3000),
//             });
//         }

//         return res.json(data);
//     } catch (error) {
//         console.error("Blogs API error:", error);

//         return res.status(502).json({
//             success: false,
//             message: "Unable to connect to PHP Blogs API",
//             error:
//                 error instanceof Error
//                     ? error.message
//                     : "Unknown error",
//         });
//     }
// });

// // =========================================================
// // 404 - MUST BE LAST
// // =========================================================

// app.use((req, res) => {
//     res.status(404).json({
//         success: false,
//         message: "API route not found",
//     });
// });


// // =========================================================
// // START SERVER
// // =========================================================

// app.listen(PORT, () => {
//     console.log("");
//     console.log("=================================");
//     console.log("🚀 Rathore Buildcon Node.js API");
//     console.log("=================================");
//     console.log(
//         `Server running: http://localhost:${PORT}`
//     );
//     console.log(
//         `Projects API: http://localhost:${PORT}/api/projects`
//     );
//     console.log(
//         `Blogs API: http://localhost:${PORT}/api/blogs`
//     );
//     console.log(
//         `Health: http://localhost:${PORT}/api/health`
//     );
//     console.log("=================================");
//     console.log("");
// });


// // =========================================================
// // 404
// // =========================================================

// app.use((req, res) => {

//     res.status(404).json({
//         success: false,
//         message: "API route not found"
//     });

// });

// // =========================================================
// // START SERVER
// // =========================================================

// app.listen(PORT, () => {

//     console.log("");
//     console.log("=================================");
//     console.log("🚀 Rathore Buildcon Node.js API");
//     console.log("=================================");
//     console.log(
//         `Server running: http://localhost:${PORT}`
//     );
//     console.log(
//         `Projects API: http://localhost:${PORT}/api/projects`
//     );
//     console.log(
//         `Health: http://localhost:${PORT}/api/health`
//     );
//     console.log("=================================");
//     console.log("");

// });

const express = require("express");
const cors = require("cors");
const crypto = require("crypto");

const app = express();
const PORT = 5000;

// =========================================================
// PHP API
// =========================================================

const PHP_API_BASE =
    "https://rathorebuildconcrm.site.je/RATHORE-BUILDCON-CRM/api";

const BLOGS_API =
    "https://rathorebuildconcrm.site.je/RATHORE-BUILDCON-CRM/api/blogs.php";

const WEBSITE_ENQUIRY_API =
    "https://rathorebuildconcrm.site.je/RATHORE-BUILDCON-CRM/api/website_enquiry.php";

const PROJECTS_API =
    `${PHP_API_BASE}/projects.php`;

const PROJECT_API =
    `${PHP_API_BASE}/project.php`;

// =========================================================
// MIDDLEWARE
// =========================================================

app.use(
    cors({
        origin: [
            "http://localhost:3000",
            "http://127.0.0.1:3000",
            "https://rathorebuildcon.com",
            "https://www.rathorebuildcon.com",
        ],
        methods: ["GET", "POST", "OPTIONS"],
        allowedHeaders: [
            "Content-Type",
            "Authorization",
            "Accept",
        ],
    })
);

app.use(express.json());

// =========================================================
// ANTI-BOT CHALLENGE
// =========================================================

function isChallengePage(html) {
    return (
        typeof html === "string" &&
        html.includes("slowAES.decrypt")
    );
}

function solveJsChallenge(html) {
    const hexBlobs = [
        ...html.matchAll(
            /toNumbers\("([0-9a-fA-F]+)"\)/g
        ),
    ].map((m) => m[1]);

    if (hexBlobs.length < 3) {
        throw new Error(
            "Could not locate challenge parameters in HTML"
        );
    }

    const [keyHex, ivHex, cipherHex] = hexBlobs;

    const key = Buffer.from(keyHex, "hex");
    const iv = Buffer.from(ivHex, "hex");
    const cipherText = Buffer.from(cipherHex, "hex");

    const decipher = crypto.createDecipheriv(
        "aes-128-cbc",
        key,
        iv
    );

    decipher.setAutoPadding(false);

    const decrypted = Buffer.concat([
        decipher.update(cipherText),
        decipher.final(),
    ]);

    const cookieValue = decrypted.toString("hex");

    const redirectMatch = html.match(
        /location\.href\s*=\s*"([^"]+)"/
    );

    const redirectUrl = redirectMatch
        ? redirectMatch[1]
        : null;

    return {
        cookie: `__test=${cookieValue}`,
        redirectUrl,
    };
}

async function fetchThroughChallenge(
    url,
    options = {}
) {
    const firstResponse = await fetch(url, {
        ...options,
        redirect: "follow",
    });

    const firstText = await firstResponse.text();

    // No challenge
    if (!isChallengePage(firstText)) {
        return {
            response: firstResponse,
            text: firstText,
        };
    }

    console.log(
        "⚠️ Anti-bot challenge detected. Solving..."
    );

    const {
        cookie,
        redirectUrl,
    } = solveJsChallenge(firstText);

    const nextUrl = redirectUrl || url;

    const secondResponse = await fetch(nextUrl, {
        ...options,
        redirect: "follow",
        headers: {
            ...(options.headers || {}),
            Cookie: cookie,
        },
    });

    const secondText = await secondResponse.text();

    // Challenge appeared again
    if (isChallengePage(secondText)) {
        console.log(
            "⚠️ Challenge served twice. Solving again..."
        );

        const solvedAgain =
            solveJsChallenge(secondText);

        const thirdResponse = await fetch(
            solvedAgain.redirectUrl || nextUrl,
            {
                ...options,
                redirect: "follow",
                headers: {
                    ...(options.headers || {}),
                    Cookie: solvedAgain.cookie,
                },
            }
        );

        const thirdText =
            await thirdResponse.text();

        return {
            response: thirdResponse,
            text: thirdText,
        };
    }

    return {
        response: secondResponse,
        text: secondText,
    };
}

// =========================================================
// TEST
// =========================================================

app.get("/", (req, res) => {
    res.json({
        success: true,
        message:
            "Rathore Buildcon Node.js API is running",
    });
});

// =========================================================
// GET ALL PROJECTS
// =========================================================

app.get("/api/projects", async (req, res) => {
    console.log("\n==============================");
    console.log("GET /api/projects");
    console.log("PHP URL:", PROJECTS_API);

    try {
        const {
            response,
            text,
        } = await fetchThroughChallenge(
            PROJECTS_API,
            {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "User-Agent":
                        "RathoreBuildcon-Node-API/1.0",
                },
            }
        );

        console.log(
            "PHP STATUS:",
            response.status
        );

        console.log(
            "PHP FINAL URL:",
            response.url
        );

        console.log(
            "PHP RESPONSE LENGTH:",
            text.length
        );

        if (!response.ok) {
            return res.status(502).json({
                success: false,
                message:
                    "PHP Projects API returned an error",
                phpStatus: response.status,
                response: text.substring(0, 3000),
            });
        }

        let data;

        try {
            data = JSON.parse(text);
        } catch (error) {
            console.error(
                "JSON PARSE ERROR:",
                error.message
            );

            return res.status(502).json({
                success: false,
                message:
                    "PHP API did not return valid JSON",
                phpStatus: response.status,
                contentType:
                    response.headers.get(
                        "content-type"
                    ),
                finalUrl: response.url,
                response: text.substring(0, 3000),
            });
        }

        return res.json(data);
    } catch (error) {
        console.error(
            "PROJECT FETCH ERROR:",
            error
        );

        return res.status(502).json({
            success: false,
            message:
                "Node could not connect to PHP Projects API",
            error: error.message,
            cause:
                error.cause?.message || null,
        });
    }
});

// =========================================================
// GET SINGLE PROJECT
// =========================================================

app.get("/api/projects/:id", async (req, res) => {
    const { id } = req.params;

    console.log(
        "\n================================="
    );
    console.log(
        `GET /api/projects/${id}`
    );
    console.log(
        "Project ID:",
        id
    );
    console.log(
        "================================="
    );

    try {
        const url =
            `${PROJECT_API}?id=${encodeURIComponent(id)}`;

        console.log(
            "Calling PHP API:",
            url
        );

        const {
            response,
            text,
        } = await fetchThroughChallenge(
            url,
            {
                method: "GET",
                headers: {
                    Accept:
                        "application/json, text/html",
                    "User-Agent":
                        "RathoreBuildcon-Node-API/1.0",
                },
            }
        );

        console.log(
            "PHP API Status:",
            response.status
        );

        if (!response.ok) {
            return res.status(
                response.status
            ).json({
                success: false,
                message:
                    "PHP Project API returned an error",
                status: response.status,
                response: text.substring(
                    0,
                    3000
                ),
            });
        }

        try {
            const data = JSON.parse(text);

            return res.json(data);
        } catch {
            return res.send(text);
        }
    } catch (error) {
        console.error(
            "Node.js Single Project Error:",
            error
        );

        return res.status(500).json({
            success: false,
            message:
                "Unable to connect to PHP project API",
            error: error.message,
        });
    }
});

// =========================================================
// GET BLOGS
// =========================================================

app.get("/api/blogs", async (req, res) => {
    console.log("\n==============================");
    console.log("GET /api/blogs");
    console.log("PHP BLOG URL:", BLOGS_API);
    console.log("==============================");

    try {
        const {
            response,
            text,
        } = await fetchThroughChallenge(
            BLOGS_API,
            {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "User-Agent":
                        "RathoreBuildcon-Node-API/1.0",
                },
            }
        );

        console.log(
            "BLOG PHP STATUS:",
            response.status
        );

        console.log(
            "BLOG PHP FINAL URL:",
            response.url
        );

        console.log(
            "BLOG RESPONSE LENGTH:",
            text.length
        );

        console.log(
            "BLOG RESPONSE:",
            text.substring(0, 3000)
        );

        if (!response.ok) {
            return res.status(502).json({
                success: false,
                message:
                    "PHP Blogs API returned an error",
                phpStatus: response.status,
                response: text.substring(
                    0,
                    3000
                ),
            });
        }

        let data;

        try {
            data = JSON.parse(text);
        } catch (error) {
            console.error(
                "BLOG JSON PARSE ERROR:",
                error.message
            );

            return res.status(502).json({
                success: false,
                message:
                    "PHP Blogs API did not return valid JSON",
                contentType:
                    response.headers.get(
                        "content-type"
                    ),
                finalUrl: response.url,
                response: text.substring(
                    0,
                    3000
                ),
            });
        }

        return res.json(data);
    } catch (error) {
        console.error(
            "BLOGS API ERROR:",
            error
        );

        return res.status(502).json({
            success: false,
            message:
                "Unable to connect to PHP Blogs API",
            error:
                error instanceof Error
                    ? error.message
                    : "Unknown error",
            cause:
                error.cause?.message || null,
        });
    }
});


// =========================================================
// WEBSITE ENQUIRY
// =========================================================


app.post("/api/website_enquiry", async (req, res) => {
    console.log("\n==============================");
    console.log("POST /api/website_enquiry");
    console.log("Request Body:", req.body);

    try {
        const formData = new URLSearchParams();

        // Form data
        formData.append(
            "fullName",
            String(req.body.fullName || "")
        );

        formData.append(
            "phone",
            String(req.body.phone || "")
        );

        formData.append(
            "email",
            String(req.body.email || "")
        );

        formData.append(
            "service",
            String(req.body.service || "")
        );

        formData.append(
            "message",
            String(req.body.message || "")
        );

        // Static source - always website
        formData.append("source", "website");

        const response = await fetch(WEBSITE_ENQUIRY_API, {
            method: "POST",

            headers: {
                "Content-Type":
                    "application/x-www-form-urlencoded",

                Accept: "application/json",

                "User-Agent": "Mozilla/5.0",
            },

            body: formData.toString(),

            redirect: "follow",
        });

        const contentType =
            response.headers.get("content-type") || "";

        const text = await response.text();

        console.log(
            "PHP Enquiry API Status:",
            response.status
        );

        console.log(
            "PHP Final URL:",
            response.url
        );

        console.log(
            "PHP Content-Type:",
            contentType
        );

        console.log(
            "PHP Response:",
            text.substring(0, 5000)
        );

        // Detect hosting security challenge
        const isSecurityChallenge =
            text.includes("aes.js") ||
            text.includes("__test") ||
            text.includes("Javascript support") ||
            text.includes("This site requires Javascript");

        if (isSecurityChallenge) {
            console.error(
                "PHP API is blocked by a hosting JavaScript security challenge."
            );

            return res.status(502).json({
                success: false,

                message:
                    "PHP API is blocked by a hosting security challenge.",

                phpStatus: response.status,

                phpContentType: contentType,

                phpUrl: response.url,
            });
        }

        // Check HTML response
        if (
            contentType.includes("text/html") ||
            text.trim().startsWith("<")
        ) {
            return res.status(502).json({
                success: false,

                message:
                    "PHP API returned HTML instead of JSON",

                phpStatus: response.status,

                phpContentType: contentType,

                phpUrl: response.url,

                phpResponse: text.substring(0, 3000),
            });
        }

        let data;

        try {
            data = JSON.parse(text);
        } catch (error) {
            console.error(
                "PHP Enquiry JSON Parse Error:",
                error
            );

            return res.status(502).json({
                success: false,

                message:
                    "PHP enquiry API did not return valid JSON",

                phpStatus: response.status,

                phpContentType: contentType,

                phpResponse: text.substring(0, 3000),
            });
        }

        if (!response.ok) {
            return res.status(response.status).json({
                success: false,

                message:
                    "PHP enquiry API returned an error",

                phpResponse: data,
            });
        }

        console.log(
            "Parsed PHP Response:",
            data
        );

        return res.status(200).json(data);

    } catch (error) {
        console.error(
            "Node.js Website Enquiry Error:",
            error
        );

        return res.status(502).json({
            success: false,
            message:
                "Unable to connect to PHP website enquiry API",
            error:
                error instanceof Error
                    ? error.message
                    : "Unknown error",
        });
    }
});

// =========================================================
// HEALTH CHECK
// =========================================================

app.get("/api/health", (req, res) => {
    res.json({
        success: true,
        server: "Node.js",
        status: "running",
        phpApi: PHP_API_BASE,
    });
});

// =========================================
// ================
// 404 - MUST BE LAST
// =========================================================

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "API route not found",
    });
});

// =========================================================
// START SERVER - ONLY ONCE
// =========================================================

app.listen(PORT, () => {
    console.log("");
    console.log(
        "================================="
    );
    console.log(
        "🚀 Rathore Buildcon Node.js API"
    );
    console.log(
        "================================="
    );
    console.log(
        `Server running: http://localhost:${PORT}`
    );
    console.log(
        `Projects API: http://localhost:${PORT}/api/projects`
    );
    console.log(
        `Blogs API: http://localhost:${PORT}/api/blogs`
    );
    console.log(
        `Health: http://localhost:${PORT}/api/health`
    );
    console.log(
        "================================="
    );
    console.log("");
});

























