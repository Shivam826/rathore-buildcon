import ServiceCard from "./ServiceCard";
import { services } from "./ServiceData";

export default function ServicesPage() {
    return (
        <section className="bg-[#f8fbff] py-15">
            <div className="mx-auto max-w-7xl px-5">

                <div className="mb-14 text-center">
                    <span className="text-sm font-bold uppercase tracking-[3px] text-blue-600">
                        Our Services
                    </span>

                    <h2 className="mt-3 text-4xl font-bold text-slate-900">
                        What We Offer
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-slate-600">
                        We provide complete real estate and construction solutions
                        with quality, transparency and timely delivery.
                    </p>
                    <div className="mx-auto mt-5 flex justify-center gap-2">
                        <span className="h-1 w-10 rounded-full bg-blue-600"></span>
                        <span className="h-1 w-4 rounded-full bg-blue-300"></span>
                    </div>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => (
                        <ServiceCard
                            key={service.slug}
                            {...service}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}