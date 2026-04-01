import { services } from "@/data/services-offered";
import { cn } from "@/lib/utils/cn";
import { contactFormSchema } from "@/utils/schema/form-schema";
import { contactRouteSearchSchema } from "@/utils/schema/search-params-schema";
import { useForm } from "@tanstack/react-form";
import { LuMail, LuMapPin, LuPhone } from "react-icons/lu";
import { FaInstagram, FaFacebook } from "react-icons/fa6";
import { useSearchParams } from "react-router";

export default function Contact() {
  const search = useSearchParams();
  const parsedData = contactRouteSearchSchema.parse(
    Object.fromEntries(search[0])
  );

  const { Field, handleSubmit } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      service: parsedData.service ?? "",
      message: "",
    },

    onSubmit: ({ value }) => {
      const { fullName, service, phone, message } = value;
      const url = new URL("https://wa.me/919875421774");
      const text = `
Hi, Kiran Family Salon and Spa!
This is *${fullName}*,
I would like to have an appointment for *${service}*
You can contact me on *${phone}*.
___
Extra info:
${message}
`;
      url.searchParams.append("text", text);
      const a = document.createElement("a");
      a.setAttribute("target", "_blank");
      a.setAttribute("href", url.toString());
      a.click();
    },

    validators: {
      onSubmit: contactFormSchema,
    },
  });

  return (
    <div className="min-h-screen py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2">
        {/* LEFT SIDE */}
        <div>
          <h1 className="text-3xl font-semibold text-gray-900 md:text-5xl">
            Get In Touch
          </h1>

          <p className="mt-4 max-w-md text-gray-600">
            We'd love to hear from you. Book your appointment or ask any
            questions — we're here to help you relax and rejuvenate.
          </p>

          <div className="mt-8 space-y-4 text-gray-700">
            <p className={cn(`flex items-center gap-1`)}>
              <span className="font-medium">
                <LuMapPin className={cn(`size-6`)} />
              </span>
              <a
                href="https://www.google.com/maps?ll=22.53171,88.308723&z=9&t=m&hl=en-US&gl=US&mapclient=embed&q=22%C2%B032%2706.5%22N+88%C2%B020%2745.9%22E+22.535145,+88.346088@22.535145,88.346088"
                className="text-primary-500 hover:underline"
                target="_blank"
              >
                84, Ashutosh Mukherjee Rd, Bhowanipore, Kolkata, India, 700025
              </a>
            </p>

            <p className={cn(`flex items-center gap-1`)}>
              <span className="font-medium">
                <LuPhone className={cn(`size-6`)} />
              </span>
              <a
                href="tel:+919875421774"
                className="text-primary-500 hover:underline"
              >
                +91 98754 21774
              </a>
            </p>

            <p className={cn(`flex items-center gap-1`)}>
              <span className="font-medium">
                <LuMail className={cn(`size-6`)} />
              </span>
              <a
                href="mailto:kiranfamilysalonandspa94@gmail.com"
                className="text-primary-500 hover:underline"
              >
                {" "}
                kiranfamilysalonandspa94@gmail.com
              </a>
            </p>

            <p className={cn(`flex items-center gap-1`)}>
              <span className="font-medium">
                <FaFacebook className={cn(`size-6`)} />
              </span>
              <a
                href="https://www.facebook.com/kiranfamilyandsalonspa"
                className="text-primary-500 hover:underline"
              >
                {" "}
                Kiran Family Salon And Spa
              </a>
            </p>

            <p className={cn(`flex items-center gap-1`)}>
              <span className="font-medium">
                <FaInstagram className={cn(`size-6`)} />
              </span>
              <a
                href="https://www.instagram.com/kiranfamilysalonandspa?utm_source=qr&igsh=MTdzOHkzYzQxbGZscA=="
                className="text-primary-500 hover:underline"
              >
                {" "}
                Kiran Family Salon and Spa
              </a>
            </p>
          </div>

          {/* MAP */}
          <div className="mt-8 h-80 overflow-hidden rounded-2xl">
            <iframe
              src="https://maps.google.com/maps?q=22.535145,88.346088&z=13&output=embed"
              className="h-full w-full border-0"
              loading="lazy"
            />
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div
          className="rounded-3xl bg-white p-6 shadow-md md:p-10"
          id="contact-form"
        >
          <h2 className="text-2xl font-semibold text-gray-900">
            Book Appointment
          </h2>

          <form
            className="mt-6 space-y-4"
            onSubmit={async (e) => {
              e.preventDefault();
              await handleSubmit();
            }}
          >
            <Field name="fullName">
              {(field) => {
                const {
                  state: {
                    meta: { errors, isTouched },
                  },
                } = field;
                return (
                  <div className={cn(`relative`)}>
                    <label className="text-sm text-gray-600">
                      <span>Full Name</span>
                      <span className={cn(`text-red-500`)}>*</span>
                    </label>
                    <input
                      type="text"
                      onChange={(e) => field.handleChange(e.target.value)}
                      className="focus:ring-primary-500 mt-1 w-full rounded-md border border-gray-300 px-4 py-3 focus:ring-2 focus:outline-none"
                      placeholder="Enter your full name"
                    />
                    {errors.length > 0 && isTouched && (
                      <span
                        className={cn(
                          `absolute top-full left-0 text-xs text-red-500`
                        )}
                      >
                        {errors[0]?.message}
                      </span>
                    )}
                  </div>
                );
              }}
            </Field>

            <Field name="email">
              {(field) => {
                const {
                  state: {
                    meta: { errors, isTouched },
                  },
                } = field;
                return (
                  <div className={cn(`relative`)}>
                    <label className="text-sm text-gray-600">
                      <span>Eamil</span>
                      <span className={cn(`text-red-500`)}>*</span>
                    </label>
                    <input
                      type="email"
                      onChange={(e) => field.handleChange(e.target.value)}
                      className="focus:ring-primary-500 mt-1 w-full rounded-md border border-gray-300 px-4 py-3 focus:ring-2 focus:outline-none"
                      placeholder="Enter your email"
                    />
                    {errors.length > 0 && isTouched && (
                      <span
                        className={cn(
                          `absolute top-full left-0 text-xs text-red-500`
                        )}
                      >
                        {errors[0]?.message}
                      </span>
                    )}
                  </div>
                );
              }}
            </Field>

            <Field name="phone">
              {(field) => {
                const {
                  state: {
                    meta: { errors, isTouched },
                  },
                } = field;
                return (
                  <div className={cn(`relative`)}>
                    <label className="text-sm text-gray-600">
                      <span>Phone</span>
                      <span className={cn(`text-red-500`)}>*</span>
                    </label>
                    <input
                      type="text"
                      inputMode="numeric"
                      onChange={(e) => field.handleChange(e.target.value)}
                      className="focus:ring-primary-500 mt-1 w-full rounded-md border border-gray-300 px-4 py-3 focus:ring-2 focus:outline-none"
                      placeholder="Enter your phone"
                    />
                    {errors.length > 0 && isTouched && (
                      <span
                        className={cn(
                          `absolute top-full left-0 text-xs text-red-500`
                        )}
                      >
                        {errors[0]?.message}
                      </span>
                    )}
                  </div>
                );
              }}
            </Field>

            <Field name="service">
              {(field) => {
                const {
                  state: {
                    meta: { errors, isTouched },
                  },
                } = field;
                return (
                  <div className={cn(`relative`)}>
                    <label className="text-sm text-gray-600">
                      <span>Service</span>
                      <span className={cn(`text-red-500`)}>*</span>
                    </label>
                    <select
                      onChange={(e) => field.handleChange(e.target.value)}
                      className="focus:ring-primary-500 mt-1 w-full rounded-md border border-gray-300 px-4 py-3 focus:ring-2 focus:outline-none"
                      defaultValue={parsedData.service ?? ""}
                    >
                      <option disabled value={""} className={cn(`opacity-50`)}>
                        Select a service
                      </option>
                      {services.map(({ title, gender }) => {
                        return (
                          <option
                            key={`${title}-${gender}`}
                            value={title}
                            className={cn(`opacity-50`)}
                          >
                            {title}
                          </option>
                        );
                      })}
                    </select>
                    {errors.length > 0 && isTouched && (
                      <span
                        className={cn(
                          `absolute top-full left-0 text-xs text-red-500`
                        )}
                      >
                        {errors[0]?.message}
                      </span>
                    )}
                  </div>
                );
              }}
            </Field>

            <Field name="message">
              {(field) => {
                const {
                  state: {
                    meta: { errors, isTouched },
                  },
                } = field;
                return (
                  <div className={cn(`relative`)}>
                    <label className="text-sm text-gray-600">
                      <span>Message</span>
                    </label>
                    <textarea
                      rows={4}
                      onChange={(e) => field.handleChange(e.target.value)}
                      className="focus:ring-primary-500 mt-1 w-full rounded-md border border-gray-300 px-4 py-3 focus:ring-2 focus:outline-none"
                      placeholder="Write your message"
                    />
                    {errors.length > 0 && isTouched && (
                      <span
                        className={cn(
                          `absolute top-full left-0 text-xs text-red-500`
                        )}
                      >
                        {errors[0]?.message}
                      </span>
                    )}
                  </div>
                );
              }}
            </Field>

            <div className={cn(`flex w-full`)}>
              <button
                type="submit"
                className="bg-primary-500 hover:bg-primary-600 mt-4 ml-auto w-full max-w-max rounded-none px-10 py-3 text-lg font-bold text-white transition"
              >
                Book Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
