import { services } from "@/data/services-offered";
import { packages } from "@/data/special-packages";
import { searchParamGenerator } from "@/lib/utils/search-param-generator";
import type { ContactRouteSearchSchema } from "@/utils/schema/search-params-schema";
import { Link } from "react-router";

export default function Services() {
  return (
    <div className="min-h-screen py-20">
      <div className="mx-auto max-w-7xl px-4">
        {/* HEADER */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-semibold text-gray-900 md:text-5xl">
            Our Services
          </h1>
          <p className="mt-4 text-gray-600">
            Indulge in luxurious treatments designed to relax, refresh, and
            rejuvenate your body and mind.
          </p>
        </div>

        {/* SERVICES */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {services.map((service, i) => (
            <div
              key={i}
              className="flex flex-col justify-between rounded-3xl bg-white p-6 shadow-sm md:p-8"
            >
              {/* TOP */}
              <div>
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </h2>

                  {/* GENDER BADGE */}
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      service.gender === "male"
                        ? "bg-green-100 text-green-700"
                        : service.gender === "female"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-red-100 text-red-700"
                    }`}
                  >
                    {service.gender === "male"
                      ? "Male"
                      : service.gender === "female"
                        ? "Female"
                        : "Unisex"}
                  </span>
                </div>

                <p className="mt-3 text-sm text-gray-600">{service.desc}</p>

                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  {service.items.map((item, idx) => (
                    <li key={idx}>• {item}</li>
                  ))}
                </ul>

                {/* DURATION + PRICE */}
                <div className="mt-4 flex items-center justify-between text-sm">
                  <span className="text-2xl font-semibold text-gray-900">
                    ₹{service.price}
                  </span>

                  <span className="text-gray-500">
                    Duration: {service.duration}
                  </span>
                </div>
              </div>

              {/* CTA */}
              <button className="bg-primary-500 hover:bg-primary-600 mt-6 w-fit rounded-none px-5 py-2 text-sm text-white transition">
                <Link
                  to={`/contact?${searchParamGenerator({
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    service: service.title as any,
                  } satisfies ContactRouteSearchSchema)}#contact-form`}
                >
                  Book Now
                </Link>
              </button>
            </div>
          ))}
        </div>

        {/* PACKAGES */}
        <div className="mt-20">
          <h2 className="text-center text-2xl font-semibold text-gray-900 md:text-3xl">
            Special Packages
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {packages.map((pkg) => (
              <div
                key={pkg.title}
                className="rounded-2xl bg-white p-6 text-center shadow-sm"
              >
                <h3 className="font-semibold text-gray-900">{pkg.title}</h3>
                <p className="mt-3 text-sm text-gray-600">{pkg.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-primary-600 mt-20 rounded-3xl py-12 text-center text-white">
          <h2 className="text-2xl font-semibold md:text-3xl">
            Choose Your Perfect Treatment
          </h2>
          <p className="mt-4 text-sm opacity-90">
            Your relaxation journey starts here.
          </p>
          <button className="text-primary-600 mt-6 rounded-none bg-white px-6 py-3 font-medium">
            <Link tabIndex={-1} to={"/contact"}>
              Book Appointment
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
