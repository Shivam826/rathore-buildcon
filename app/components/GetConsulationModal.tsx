// "use client";

// import { useFormik } from "formik";
// import { X } from "lucide-react";
// import { useEffect } from "react";
// import toast from "react-hot-toast";

// type Props = {
//     isOpen: boolean;
//     onClose: () => void;
// };

// export default function GetConsultationModal({
//     isOpen,
//     onClose,
// }: Props) {
//     useEffect(() => {
//         const handleEscape = (event: KeyboardEvent) => {
//             if (event.key === "Escape") {
//                 onClose();
//             }
//         };

//         document.addEventListener("keydown", handleEscape);

//         return () => {
//             document.removeEventListener(
//                 "keydown",
//                 handleEscape
//             );
//         };
//     }, [onClose]);

//     if (!isOpen) return null;


//     // const formik = useFormik({
//     //     initialValues: {
//     //         fullName: "",
//     //         phone: "",
//     //         email: "",
//     //         service: "",
//     //         message: "",
//     //     },

//     //     validate: (values) => {
//     //         const errors: {
//     //             fullName?: string;
//     //             phone?: string;
//     //             email?: string;
//     //             service?: string;
//     //             message?: string;
//     //         } = {};

//     //         // Full Name
//     //         if (!values.fullName.trim()) {
//     //             errors.fullName = "Full name is required";
//     //         } else if (values.fullName.trim().length < 3) {
//     //             errors.fullName = "Minimum 3 characters";
//     //         }

//     //         // Phone
//     //         if (!values.phone.trim()) {
//     //             errors.phone = "Phone number is required";
//     //         } else if (!/^[6-9]\d{9}$/.test(values.phone)) {
//     //             errors.phone = "Enter a valid 10-digit mobile number";
//     //         }

//     //         // Email
//     //         if (!values.email.trim()) {
//     //             errors.email = "Email is required";
//     //         } else if (
//     //             !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//     //         ) {
//     //             errors.email = "Enter a valid email address";
//     //         }

//     //         // Service
//     //         if (!values.service) {
//     //             errors.service = "Please select a service";
//     //         }

//     //         // Message
//     //         if (!values.message.trim()) {
//     //             errors.message = "Message is required";
//     //         } else if (values.message.trim().length < 10) {
//     //             errors.message = "Message should be at least 10 characters";
//     //         }

//     //         return errors;
//     //     },

//     //     onSubmit: async (values, { resetForm, setSubmitting }) => {
//     //         try {
//     //             // Simulate API call
//     //             await new Promise((resolve) => setTimeout(resolve, 2000));

//     //             console.log(values);

//     //             toast.success("Request submitted successfully!");

//     //             resetForm();
//     //             onClose();
//     //         } catch (error) {
//     //             console.error(error);
//     //             toast.error("Something went wrong!");
//     //         } finally {
//     //             setSubmitting(false);
//     //         }
//     //     },
//     // });
//     const formik = useFormik({
//         initialValues: {
//             fullName: "",
//             phone: "",
//             email: "",
//             service: "",
//             message: "",
//         },

//         validate: (values) => {
//             const errors: {
//                 fullName?: string;
//                 phone?: string;
//                 email?: string;
//                 service?: string;
//                 message?: string;
//             } = {};

//             // Full Name
//             if (!values.fullName.trim()) {
//                 errors.fullName =
//                     "Full name is required";
//             } else if (
//                 values.fullName.trim().length < 3
//             ) {
//                 errors.fullName =
//                     "Minimum 3 characters";
//             }

//             // Phone
//             if (!values.phone.trim()) {
//                 errors.phone =
//                     "Phone number is required";
//             } else if (
//                 !/^[6-9]\d{9}$/.test(
//                     values.phone
//                 )
//             ) {
//                 errors.phone =
//                     "Enter a valid 10-digit mobile number";
//             }

//             // Email
//             if (!values.email.trim()) {
//                 errors.email =
//                     "Email is required";
//             } else if (
//                 !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
//                     values.email
//                 )
//             ) {
//                 errors.email =
//                     "Enter a valid email address";
//             }

//             // Service
//             if (!values.service) {
//                 errors.service =
//                     "Please select a service";
//             }

//             // Message
//             if (!values.message.trim()) {
//                 errors.message =
//                     "Message is required";
//             } else if (
//                 values.message.trim().length < 10
//             ) {
//                 errors.message =
//                     "Message should be at least 10 characters";
//             }

//             return errors;
//         },
//         onSubmit: async (
//             values,
//             { resetForm, setSubmitting }
//         ) => {
//             try {
//                 console.log("Submitting enquiry:", values);

//                 const formData = new URLSearchParams();

//                 formData.append(
//                     "fullName",
//                     values.fullName.trim()
//                 );

//                 formData.append(
//                     "phone",
//                     values.phone.trim()
//                 );

//                 formData.append(
//                     "email",
//                     values.email.trim()
//                 );

//                 formData.append(
//                     "service",
//                     values.service
//                 );

//                 formData.append(
//                     "message",
//                     values.message.trim()
//                 );

//                 formData.append(
//                     "source",
//                     "website"
//                 );

//                 const response = await fetch(
//                     "https://rathorebuildconcrm.site.je/RATHORE-BUILDCON-CRM/api/website_enquiry.php",
//                     {
//                         method: "POST",

//                         headers: {
//                             "Content-Type":
//                                 "application/x-www-form-urlencoded;charset=UTF-8",
//                         },

//                         body: formData.toString(),
//                     }
//                 );

//                 console.log(
//                     "Response status:",
//                     response.status
//                 );

//                 const responseText =
//                     await response.text();

//                 console.log(
//                     "Response:",
//                     responseText
//                 );

//                 if (!response.ok) {
//                     throw new Error(
//                         `API request failed with status ${response.status}`
//                     );
//                 }

//                 let result;

//                 try {
//                     result = JSON.parse(responseText);
//                 } catch {
//                     console.error(
//                         "Invalid JSON response:",
//                         responseText
//                     );

//                     throw new Error(
//                         "Server returned an invalid response."
//                     );
//                 }

//                 if (!result.success) {
//                     throw new Error(
//                         result.message ||
//                         "Failed to submit enquiry"
//                     );
//                 }

//                 toast.success(
//                     "Request submitted successfully!"
//                 );

//                 resetForm();
//                 onClose();

//             } catch (error) {
//                 console.error(
//                     "Enquiry submission error:",
//                     error
//                 );

//                 toast.error(
//                     error instanceof Error
//                         ? error.message
//                         : "Something went wrong!"
//                 );

//             } finally {
//                 setSubmitting(false);
//             }
//         },
//     });
//     return (
//         <div
//             className="fixed inset-0 z-999 overflow-y-auto bg-black/60 p-4 backdrop-blur-sm"
//             onClick={onClose}
//         >
//             <div className="flex min-h-full items-center justify-center py-6">

//                 <div
//                     className="relative w-full max-w-2xl rounded-3xl bg-white shadow-2xl max-h-[90vh] overflow-y-auto"
//                     onClick={(e) => e.stopPropagation()}
//                 >

//                     {/* Close */}

//                     {/* Sticky Header */}

//                     <div className="sticky top-0 z-20 flex items-start justify-between rounded-t-3xl bg-linear-to-r from-blue-600 to-blue-700 px-8 py-6 text-white">

//                         <div>
//                             <h2 className="text-2xl font-bold md:text-3xl">
//                                 Get Free Consultation
//                             </h2>

//                             <p className="mt-2 text-sm text-blue-100 md:text-base">
//                                 Fill in your details and our experts will contact you shortly.
//                             </p>
//                         </div>

//                         <button
//                             onClick={onClose}
//                             className="ml-4 flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-white/15 backdrop-blur transition-all duration-300 hover:bg-red-500 hover:text-white"
//                         >
//                             <X size={20} />
//                         </button>

//                     </div>

//                     {/* Form */}

//                     <form className="space-y-5 p-8" onSubmit={formik.handleSubmit}>

//                         <div className="grid gap-5 md:grid-cols-2">

//                             <div>
//                                 <label className="mb-2 block font-medium">
//                                     Full Name
//                                 </label>

//                                 <input
//                                     type="text"
//                                     name="fullName"
//                                     value={formik.values.fullName}
//                                     onChange={formik.handleChange}
//                                     onBlur={formik.handleBlur}
//                                     placeholder="Enter your name"
//                                     className={`w-full rounded-xl border px-4 py-3 outline-none transition ${formik.touched.fullName && formik.errors.fullName
//                                         ? "border-red-500"
//                                         : "border-slate-300 focus:border-blue-600"
//                                         }`}
//                                 />

//                                 {formik.touched.fullName && formik.errors.fullName && (
//                                     <p className="mt-1 text-sm text-red-500">
//                                         {formik.errors.fullName}
//                                     </p>
//                                 )}
//                             </div>

//                             <div>
//                                 <label className="mb-2 block font-medium">
//                                     Phone Number
//                                 </label>

//                                 <input
//                                     type="tel"
//                                     name="phone"
//                                     placeholder="+91 XXXXX XXXXX"
//                                     value={formik.values.phone}
//                                     onChange={formik.handleChange}
//                                     onBlur={formik.handleBlur}
//                                     className={`w-full rounded-xl border px-4 py-3 outline-none transition ${formik.touched.phone && formik.errors.phone
//                                         ? "border-red-500"
//                                         : "border-slate-300 focus:border-blue-600"
//                                         }`}
//                                 />

//                                 {formik.touched.phone && formik.errors.phone && (
//                                     <p className="mt-1 text-sm text-red-500">
//                                         {formik.errors.phone}
//                                     </p>
//                                 )}
//                             </div>

//                         </div>

//                         <div className="grid gap-5 md:grid-cols-2">

//                             <div>
//                                 <label className="mb-2 block font-medium">
//                                     Email Address
//                                 </label>

//                                 <input
//                                     type="email"
//                                     name="email"
//                                     placeholder="example@email.com"
//                                     value={formik.values.email}
//                                     onChange={formik.handleChange}
//                                     onBlur={formik.handleBlur}
//                                     className={`w-full rounded-xl border px-4 py-3 outline-none transition ${formik.touched.email && formik.errors.email
//                                         ? "border-red-500"
//                                         : "border-slate-300 focus:border-blue-600"
//                                         }`}
//                                 />

//                                 {formik.touched.email && formik.errors.email && (
//                                     <p className="mt-1 text-sm text-red-500">
//                                         {formik.errors.email}
//                                     </p>
//                                 )}
//                             </div>

//                             <div>
//                                 <label className="mb-2 block font-medium">
//                                     Service
//                                 </label>

//                                 <select
//                                     name="service"
//                                     value={formik.values.service}
//                                     onChange={formik.handleChange}
//                                     onBlur={formik.handleBlur}
//                                     className={`w-full rounded-xl border px-4 py-3 outline-none transition ${formik.touched.service && formik.errors.service
//                                         ? "border-red-500"
//                                         : "border-slate-300 focus:border-blue-600"
//                                         }`}
//                                 >
//                                     <option value="">Select Service</option>
//                                     <option value="Buying Plots & Home">
//                                         Buying Plots & Home
//                                     </option>
//                                     <option value="Sell Plots & Home">
//                                         Sell Plots & Home
//                                     </option>
//                                     <option value="Construction Services">
//                                         Construction Services
//                                     </option>
//                                 </select>

//                                 {formik.touched.service && formik.errors.service && (
//                                     <p className="mt-1 text-sm text-red-500">
//                                         {formik.errors.service}
//                                     </p>
//                                 )}
//                             </div>

//                         </div>

//                         <div>
//                             <label className="mb-2 block font-medium">
//                                 Message
//                             </label>

//                             <textarea
//                                 rows={5}
//                                 name="message"
//                                 placeholder="Tell us about your project..."
//                                 value={formik.values.message}
//                                 onChange={formik.handleChange}
//                                 onBlur={formik.handleBlur}
//                                 className={`w-full rounded-xl border px-4 py-3 outline-none transition ${formik.touched.message && formik.errors.message
//                                     ? "border-red-500"
//                                     : "border-slate-300 focus:border-blue-600"
//                                     }`}
//                             />

//                             {formik.touched.message && formik.errors.message && (
//                                 <p className="mt-1 text-sm text-red-500">
//                                     {formik.errors.message}
//                                 </p>
//                             )}
//                         </div>

//                         <div className="flex flex-col gap-4 pt-2 sm:flex-row">

//                             <button
//                                 type="submit"
//                                 disabled={formik.isSubmitting}
//                                 className={`cursor-pointer rounded-xl border-2 border-blue-600 px-8 py-4 font-semibold transition-all duration-300 ${formik.isSubmitting
//                                     ? "cursor-not-allowed bg-blue-400 text-white"
//                                     : "bg-blue-600 text-white hover:bg-white hover:text-blue-600"
//                                     }`}
//                             >
//                                 {formik.isSubmitting ? (
//                                     <span className="flex items-center gap-2">
//                                         <svg
//                                             className="h-5 w-5 animate-spin"
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             fill="none"
//                                             viewBox="0 0 24 24"
//                                         >
//                                             <circle
//                                                 className="opacity-25"
//                                                 cx="12"
//                                                 cy="12"
//                                                 r="10"
//                                                 stroke="currentColor"
//                                                 strokeWidth="4"
//                                             />
//                                             <path
//                                                 className="opacity-75"
//                                                 fill="currentColor"
//                                                 d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
//                                             />
//                                         </svg>

//                                         Submitting...
//                                     </span>
//                                 ) : (
//                                     "Submit Request"
//                                 )}
//                             </button>

//                             <button
//                                 type="button"
//                                 onClick={onClose}
//                                 className="cursor-pointer rounded-xl border-2 border-slate-300 bg-white px-8 py-4 font-semibold text-slate-700 transition-all duration-300 hover:border-gray-500 hover:bg-gray-600 hover:text-white"
//                             >
//                                 Cancel
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// } 



"use client";

import { useFormik } from "formik";
import { X } from "lucide-react";
import { useEffect } from "react";
import toast from "react-hot-toast";

type Props = {
    isOpen: boolean;
    onClose: () => void;
};

export default function GetConsultationModal({
    isOpen,
    onClose,
}: Props) {
    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener(
                "keydown",
                handleEscape
            );
        }

        return () => {
            document.removeEventListener(
                "keydown",
                handleEscape
            );
        };
    }, [isOpen, onClose]);

    const formik = useFormik({
        initialValues: {
            fullName: "",
            phone: "",
            email: "",
            service: "",
            message: "",
        },

        validate: (values) => {
            const errors: {
                fullName?: string;
                phone?: string;
                email?: string;
                service?: string;
                message?: string;
            } = {};

            // Full Name
            if (!values.fullName.trim()) {
                errors.fullName =
                    "Full name is required";
            } else if (
                values.fullName.trim().length < 3
            ) {
                errors.fullName =
                    "Minimum 3 characters";
            }

            // Phone
            if (!values.phone.trim()) {
                errors.phone =
                    "Phone number is required";
            } else if (
                !/^[6-9]\d{9}$/.test(
                    values.phone.trim()
                )
            ) {
                errors.phone =
                    "Enter a valid 10-digit mobile number";
            }

            // Email
            if (!values.email.trim()) {
                errors.email =
                    "Email is required";
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                    values.email.trim()
                )
            ) {
                errors.email =
                    "Enter a valid email address";
            }

            // Service
            if (!values.service) {
                errors.service =
                    "Please select a service";
            }

            // Message
            if (!values.message.trim()) {
                errors.message =
                    "Message is required";
            } else if (
                values.message.trim().length < 10
            ) {
                errors.message =
                    "Message should be at least 10 characters";
            }

            return errors;
        },

        onSubmit: async (
            values,
            { resetForm, setSubmitting }
        ) => {
            try {
                console.log("Submitting enquiry:", values);

                setSubmitting(true);

                const iframeName = "enquiry-submit-frame";

                let iframe = document.getElementById(
                    iframeName
                ) as HTMLIFrameElement | null;

                if (!iframe) {
                    iframe = document.createElement("iframe");

                    iframe.name = iframeName;
                    iframe.id = iframeName;

                    iframe.style.display = "none";

                    document.body.appendChild(iframe);
                }

                const form = document.createElement("form");

                form.method = "POST";

                form.action =
                    "https://rathorebuildconcrm.site.je/RATHORE-BUILDCON-CRM/api/enquiry_form.php";

                form.target = iframeName;

                form.style.display = "none";

                /*
                 * Payload sent to PHP
                 */
                const fields = {
                    fullName: values.fullName.trim(),
                    phone: values.phone.trim(),
                    email: values.email.trim(),
                    service: values.service,
                    message: values.message.trim(),
                    source: "website",
                };

                console.log("API Payload:", fields);

                Object.entries(fields).forEach(
                    ([name, value]) => {
                        const input =
                            document.createElement("input");

                        input.type = "hidden";
                        input.name = name;
                        input.value = value;

                        form.appendChild(input);
                    }
                );

                document.body.appendChild(form);

                /*
                 * Submit to PHP
                 */
                form.submit();

                /*
                 * Remove temporary form
                 */
                document.body.removeChild(form);

                /*
                 * IMPORTANT:
                 * Keep toast visible for 5 seconds.
                 */
                toast.success(
                    "Your request has been submitted. We will contact you shortly.",
                    {
                        duration: 5000,
                    }
                );

                /*
                 * Reset form immediately
                 */
                resetForm();

                /*
                 * Close modal AFTER 5 seconds
                 */
                setTimeout(() => {
                    onClose();
                }, 5000);

            } catch (error) {
                console.error(
                    "Enquiry submission error:",
                    error
                );

                toast.error(
                    "Unable to submit enquiry. Please try again.",
                    {
                        duration: 5000,
                    }
                );
            } finally {
                setSubmitting(false);
            }
        },
    });

    if (!isOpen) {
        return null;
    }

    return (
        <div
            className="fixed inset-0 z-999 overflow-y-auto bg-black/60 p-4 backdrop-blur-sm"
            onClick={onClose}
        >
            <div className="flex min-h-full items-center justify-center py-6">
                <div
                    className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white shadow-2xl"
                    onClick={(event) =>
                        event.stopPropagation()
                    }
                >
                    {/* Header */}
                    <div className="sticky top-0 z-20 flex items-start justify-between rounded-t-3xl bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-6 text-white sm:px-8">
                        <div className="pr-4">
                            <h2 className="text-2xl font-bold md:text-3xl">
                                Get Free Consultation
                            </h2>

                            <p className="mt-2 text-sm text-blue-100 md:text-base">
                                Fill in your details and
                                our experts will contact
                                you shortly.
                            </p>
                        </div>

                        <button
                            type="button"
                            onClick={onClose}
                            className="ml-4 flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-white/15 backdrop-blur transition-all duration-300 hover:bg-red-500 hover:text-white"
                            aria-label="Close"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Form */}
                    <form
                        className="space-y-5 p-6 sm:p-8"
                        onSubmit={
                            formik.handleSubmit
                        }
                    >
                        {/* Name + Phone */}
                        <div className="grid gap-5 md:grid-cols-2">
                            {/* Full Name */}
                            <div>
                                <label className="mb-2 block font-medium text-slate-800">
                                    Full Name
                                </label>

                                <input
                                    type="text"
                                    name="fullName"
                                    value={
                                        formik.values
                                            .fullName
                                    }
                                    onChange={
                                        formik.handleChange
                                    }
                                    onBlur={
                                        formik.handleBlur
                                    }
                                    placeholder="Enter your name"
                                    className={`w-full rounded-xl border px-4 py-3 outline-none transition ${formik.touched
                                        .fullName &&
                                        formik.errors
                                            .fullName
                                        ? "border-red-500"
                                        : "border-slate-300 focus:border-blue-600"
                                        }`}
                                />

                                {formik.touched
                                    .fullName &&
                                    formik.errors
                                        .fullName && (
                                        <p className="mt-1 text-sm text-red-500">
                                            {
                                                formik
                                                    .errors
                                                    .fullName
                                            }
                                        </p>
                                    )}
                            </div>

                            {/* Phone */}
                            <div>
                                <label className="mb-2 block font-medium text-slate-800">
                                    Phone Number
                                </label>

                                <input
                                    type="tel"
                                    name="phone"
                                    maxLength={10}
                                    inputMode="numeric"
                                    placeholder="Enter 10-digit mobile number"
                                    value={
                                        formik.values
                                            .phone
                                    }
                                    onChange={(event) => {
                                        const value =
                                            event.target.value.replace(
                                                /\D/g,
                                                ""
                                            );

                                        formik.setFieldValue(
                                            "phone",
                                            value
                                        );
                                    }}
                                    onBlur={
                                        formik.handleBlur
                                    }
                                    className={`w-full rounded-xl border px-4 py-3 outline-none transition ${formik.touched
                                        .phone &&
                                        formik.errors
                                            .phone
                                        ? "border-red-500"
                                        : "border-slate-300 focus:border-blue-600"
                                        }`}
                                />

                                {formik.touched
                                    .phone &&
                                    formik.errors
                                        .phone && (
                                        <p className="mt-1 text-sm text-red-500">
                                            {
                                                formik
                                                    .errors
                                                    .phone
                                            }
                                        </p>
                                    )}
                            </div>
                        </div>

                        {/* Email + Service */}
                        <div className="grid gap-5 md:grid-cols-2">
                            {/* Email */}
                            <div>
                                <label className="mb-2 block font-medium text-slate-800">
                                    Email Address
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="example@email.com"
                                    value={
                                        formik.values
                                            .email
                                    }
                                    onChange={
                                        formik.handleChange
                                    }
                                    onBlur={
                                        formik.handleBlur
                                    }
                                    className={`w-full rounded-xl border px-4 py-3 outline-none transition ${formik.touched
                                        .email &&
                                        formik.errors
                                            .email
                                        ? "border-red-500"
                                        : "border-slate-300 focus:border-blue-600"
                                        }`}
                                />

                                {formik.touched
                                    .email &&
                                    formik.errors
                                        .email && (
                                        <p className="mt-1 text-sm text-red-500">
                                            {
                                                formik
                                                    .errors
                                                    .email
                                            }
                                        </p>
                                    )}
                            </div>

                            {/* Service */}
                            <div>
                                <label className="mb-2 block font-medium text-slate-800">
                                    Service
                                </label>

                                <select
                                    name="service"
                                    value={
                                        formik.values
                                            .service
                                    }
                                    onChange={
                                        formik.handleChange
                                    }
                                    onBlur={
                                        formik.handleBlur
                                    }
                                    className={`w-full rounded-xl border px-4 py-3 outline-none transition ${formik.touched
                                        .service &&
                                        formik.errors
                                            .service
                                        ? "border-red-500"
                                        : "border-slate-300 focus:border-blue-600"
                                        }`}
                                >
                                    <option value="">
                                        Select Service
                                    </option>

                                    <option value="Buying Plots & Home">
                                        Buying Plots &
                                        Home
                                    </option>

                                    <option value="Sell Plots & Home">
                                        Sell Plots &
                                        Home
                                    </option>

                                    <option value="Construction Services">
                                        Construction
                                        Services
                                    </option>
                                </select>

                                {formik.touched
                                    .service &&
                                    formik.errors
                                        .service && (
                                        <p className="mt-1 text-sm text-red-500">
                                            {
                                                formik
                                                    .errors
                                                    .service
                                            }
                                        </p>
                                    )}
                            </div>
                        </div>

                        {/* Message */}
                        <div>
                            <label className="mb-2 block font-medium text-slate-800">
                                Message
                            </label>

                            <textarea
                                rows={5}
                                name="message"
                                placeholder="Tell us about your project..."
                                value={
                                    formik.values
                                        .message
                                }
                                onChange={
                                    formik.handleChange
                                }
                                onBlur={
                                    formik.handleBlur
                                }
                                className={`w-full resize-none rounded-xl border px-4 py-3 outline-none transition ${formik.touched
                                    .message &&
                                    formik.errors
                                        .message
                                    ? "border-red-500"
                                    : "border-slate-300 focus:border-blue-600"
                                    }`}
                            />

                            {formik.touched
                                .message &&
                                formik.errors
                                    .message && (
                                    <p className="mt-1 text-sm text-red-500">
                                        {
                                            formik
                                                .errors
                                                .message
                                        }
                                    </p>
                                )}
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col gap-4 pt-2 sm:flex-row">
                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={
                                    formik.isSubmitting
                                }
                                className={`cursor-pointer rounded-xl border-2 border-blue-600 px-8 py-4 font-semibold transition-all duration-300 ${formik.isSubmitting
                                    ? "cursor-not-allowed bg-blue-400 text-white"
                                    : "bg-blue-600 text-white hover:bg-white hover:text-blue-600"
                                    }`}
                            >
                                {formik.isSubmitting ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <svg
                                            className="h-5 w-5 animate-spin"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            />

                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                                            />
                                        </svg>

                                        Submitting...
                                    </span>
                                ) : (
                                    "Submit Request"
                                )}
                            </button>

                            {/* Cancel */}
                            <button
                                type="button"
                                onClick={onClose}
                                className="cursor-pointer rounded-xl border-2 border-slate-300 bg-white px-8 py-4 font-semibold text-slate-700 transition-all duration-300 hover:border-gray-500 hover:bg-gray-600 hover:text-white"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}