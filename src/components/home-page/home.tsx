import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { galaryImages } from "@/data/galary-images";
import { offers } from "@/data/offer";
import { reviews } from "@/data/review";
import { servicesPreview } from "@/data/services-offered";
import { whyChooseUs } from "@/data/why-choose-us";
import { cn } from "@/lib/utils/cn";
import AutoPlay from "embla-carousel-autoplay";
import { useState, type ComponentProps } from "react";
import { Link } from "react-router";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";

export function HeroSection({
  className,
  ...props
}: ComponentProps<"section">) {
  return (
    <section
      id="home"
      className={cn(
        "from-primary-50 to-primary-100 relative isolate flex min-h-screen items-center justify-center bg-linear-to-br via-white",
        className
      )}
      {...props}
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* WRAPPER */}
        <div className="flex justify-center lg:justify-start">
          <div className="max-w-2xl text-center lg:text-left">
            {/* Headline */}
            <h1 className="text-3xl leading-tight font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Relax. Refresh. Rejuvenate.
            </h1>

            {/* Subtext */}
            <p className="mt-4 text-base font-bold text-white sm:mt-6 sm:text-lg md:text-xl">
              Experience ultimate tranquility with our premium spa treatments
              designed to restore your body, mind, and soul.
            </p>

            {/* CTA Buttons */}
            <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:mt-8 sm:flex-row lg:items-start lg:justify-start">
              <button className="rounded-0 bg-primary-600 hover:bg-primary-700 w-full px-6 py-3 text-sm font-medium text-white shadow-md transition duration-200 sm:w-auto sm:text-base">
                <Link to={"/contact#contact-form"}>Book Appointment</Link>
              </button>

              <button className="rounded-0 hover:text-primary-500 hover:bg-primary-100 w-full border border-white px-6 py-3 text-sm font-medium text-white transition duration-200 sm:w-auto sm:text-base">
                <Link to={"/services"}>Explore Services</Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      <HeroCarousel />
    </section>
  );
}

export function HeroCarousel({
  className,
  ...props
}: ComponentProps<typeof Carousel>) {
  return (
    <Carousel
      plugins={[AutoPlay({ delay: 5000 })]}
      opts={{
        align: "start",
        loop: true,
      }}
      className={cn(`absolute top-0 left-0 -z-1 h-full w-full`, className)}
      {...props}
    >
      <CarouselContent className="h-svh min-h-full">
        {Array.from({ length: 6 }).map((_, index) => (
          <CarouselItem key={index} className="h-full">
            <div className="relative max-lg:h-full lg:aspect-video">
              <img
                className="absolute top-0 left-0 h-full w-full object-cover"
                src={`/sample-image-${index + 1}.jpeg`}
                alt={`sample-image-${index + 1}`}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div
        data-slot={`carousel-opaciator`}
        className="absolute inset-0 bg-linear-to-b from-black/30 to-black/70 lg:bg-linear-to-r lg:from-black/20 lg:to-black/40 lg:to-70%"
      />
    </Carousel>
  );
}

export function WhyChooseUs({
  className,
  ...props
}: ComponentProps<"section">) {
  return (
    <section
      className={cn(
        `bg-primary-500 rounded-br-2xl rounded-bl-2xl py-16 text-center text-white`,
        className
      )}
      {...props}
    >
      <h2 className="text-3xl font-semibold">Why Choose Us</h2>
      <div className="mx-auto mt-10 grid max-w-6xl gap-6 px-4 sm:grid-cols-2 md:grid-cols-4">
        {whyChooseUs.map((item) => (
          <div
            key={item.title}
            className="border-primary-300 rounded-2xl border p-6 shadow transition hover:shadow-lg"
          >
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="mt-2 text-base text-white/80">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function OffersSection({
  className,
  ...props
}: ComponentProps<"section">) {
  return (
    <section className={cn(`pb-16`, className)} {...props}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-primary-500 text-3xl font-semibold md:text-4xl">
            Special Offers
          </h2>
          <p className="mt-3 text-gray-600">
            Exclusive packages designed to give you the best spa experience.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 pb-6">
          {offers.map(({ image }, i) => (
            <Dialog key={image}>
              <DialogTrigger asChild>
                <Button
                  variant={"none"}
                  className={cn(`relative h-auto w-full max-w-100`)}
                >
                  <img
                    src={image}
                    alt={`offer-${i + 1}`}
                    className="max-h-100 w-full object-contain transition duration-300"
                  />
                </Button>
              </DialogTrigger>
              <DialogContent
                showCloseButton={false}
                className={cn(`max-w-[calc(100%-1rem)] p-2 sm:max-w-xl sm:p-4`)}
              >
                <DialogTitle className={cn(`hidden`)}></DialogTitle>
                <div className={cn(`overflow-clip rounded-md sm:rounded-xl`)}>
                  <img
                    src={image}
                    alt={`offer-${i + 1}`}
                    className="h-auto w-full object-contain transition duration-300"
                  />
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServicesPreview({
  className,
  ...props
}: ComponentProps<"section">) {
  return (
    <section className={cn(`py-16 text-center`, className)} {...props}>
      <h2 className="text-primary-500 text-3xl font-semibold">Our Services</h2>
      <div className="mx-auto mt-10 grid max-w-6xl gap-6 px-4 sm:grid-cols-2 md:grid-cols-4">
        {servicesPreview.map((s) => (
          <div
            key={s.title}
            className="border-primary-500 rounded-2xl border bg-white p-6 shadow transition hover:shadow-lg"
          >
            <h3 className="text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-gray-500">{s.desc}</p>
          </div>
        ))}
      </div>

      <a
        href="/services"
        className="text-primary-600 mt-8 inline-block font-medium"
      >
        View All Services →
      </a>
    </section>
  );
}

export function Steps({ className, ...props }: ComponentProps<"section">) {
  const steps = [
    "Choose your preferred treatment",
    "Book your appointment easily",
    "Relax and enjoy your session",
  ];

  return (
    <section
      className={cn(
        `bg-primary-500 relative isolate rounded-br-2xl rounded-bl-2xl py-16 text-center text-white`,
        className
      )}
      {...props}
    >
      <h2 className="text-3xl font-semibold">Transform in 3 Simple Steps</h2>
      <div className="mx-auto mt-10 grid max-w-6xl place-items-center gap-6 px-4 md:grid-cols-3">
        {steps.map((step, i) => (
          <div
            key={i}
            className="w-full rounded-2xl bg-white p-6 shadow md:max-w-60"
          >
            <div className="text-primary-600 font-bold">Step {i + 1}</div>
            <p className="mt-2 text-gray-600">{step}</p>
          </div>
        ))}
      </div>
      <div className="bg-primary-500 absolute inset-0 -z-1 h-32.5 w-full origin-top-left -skew-y-2"></div>
    </section>
  );
}

// Layout configuration (DO NOT TOUCH unless changing design)
const galleryLayout = [
  // 1st element
  cn(
    "col-span-2 row-span-4",
    "sm:col-span-2 sm:row-span-4",
    "md:col-span-3 md:row-span-4",
    "lg:col-span-4 lg:row-span-3"
  ),
  // 2nd element
  cn(
    "col-start-3 row-span-5",
    "sm:col-span-2 sm:col-start-3 sm:row-span-5",
    "md:col-span-3 md:col-start-4 md:row-span-5",
    "lg:col-span-4 lg:col-start-5 lg:row-span-4"
  ),
  // 3rd element
  cn(
    "row-span-5 row-start-5",
    "sm:row-span-4 sm:row-start-5",
    "md:col-span-2 md:col-start-7 md:row-span-4",
    "lg:col-span-4 lg:col-start-9 lg:row-span-3"
  ),
  // 4th element
  cn(
    "col-span-2 col-start-2 row-span-4 row-start-6",
    "sm:col-span-2 sm:col-start-2 sm:row-span-6 sm:row-start-6",
    "md:col-span-3 md:row-span-4 md:row-start-5",
    "lg:col-span-4 lg:row-span-4 lg:row-start-4"
  ),
  // 5th element
  cn(
    "col-span-2 row-span-4 row-start-10",
    "sm:col-span-2 sm:col-start-2 sm:row-span-6 sm:row-start-12",
    "md:col-span-2 md:col-start-4 md:row-span-3 md:row-start-6",
    "lg:col-span-4 lg:col-start-5 lg:row-span-4 lg:row-start-5"
  ),
  // 6th element
  cn(
    "col-start-3 row-span-6 row-start-10 sm:col-start-4 sm:row-span-7 sm:row-start-11 md:col-span-2 md:col-start-7 md:row-span-3 md:row-start-5 lg:col-span-4 lg:col-start-9 lg:row-span-5 lg:row-start-4"
  ),
  // 7th element
  cn(
    "col-span-2 row-span-5 row-start-14",
    "sm:col-span-1 sm:col-start-1 sm:row-span-5 sm:row-start-9",
    "md:col-span-2 md:col-start-1 md:row-span-4 md:row-start-9",
    "lg:col-span-3 lg:row-span-5 lg:row-start-8"
  ),
  // 8th element
  cn(
    "col-start-3 row-span-3 row-start-16",
    "sm:col-start-4 sm:row-span-5 sm:row-start-6",
    "md:col-span-3 md:col-start-3 md:row-span-4 md:row-start-9",
    "lg:col-span-4 lg:col-start-4 lg:row-span-4 lg:row-start-9"
  ),
  // 9th element
  cn(
    "col-span-3 row-span-6 row-start-19",
    "sm:col-span-1 sm:col-start-1 sm:row-span-4 sm:row-start-14",
    "md:col-span-3 md:col-start-6 md:row-span-5 md:row-start-8",
    "lg:col-span-5 lg:col-start-8 lg:row-span-4 lg:row-start-9"
  ),
];
export function GalleryPreview({
  className,
  ...props
}: ComponentProps<"section">) {
  const [images] = useState(galaryImages[0]);

  // 👉 Ensure we only use required number of images
  const displayImages = images.slice(0, galleryLayout.length);

  return (
    <section className={cn(`bg-white py-16 text-center`, className)} {...props}>
      <h2 className="text-primary-500 text-3xl font-semibold">Gallery</h2>

      <div
        className={cn(
          "mx-auto mt-10 grid h-200 max-w-6xl px-4 *:rounded-xl *:bg-gray-200",
          "grid-cols-3 grid-rows-20 gap-2",
          "sm:grid-cols-4 sm:grid-rows-17",
          "md:grid-cols-8 md:grid-rows-12",
          "lg:grid-cols-12 lg:grid-rows-12 lg:gap-4"
        )}
      >
        {galleryLayout.map((layoutClass, index) => {
          const image = displayImages[index];
          if (!image) return null;

          return (
            <div
              key={index}
              className={cn("relative overflow-clip", layoutClass)}
            >
              <img
                className="absolute top-0 left-0 h-full w-full object-cover transition-all hover:scale-105"
                src={image.url}
                alt={`gallery-${index}`}
              />
            </div>
          );
        })}
      </div>

      <Link
        to="/gallery"
        className="text-primary-600 mt-8 inline-block font-medium"
      >
        View Full Gallery →
      </Link>
    </section>
  );
}

export function Testimonials({
  className,
  ...props
}: ComponentProps<"section">) {
  return (
    <section className={cn(`py-20`, className)} {...props}>
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-2">
        {/* LEFT TEXT */}
        <h2 className="text-3xl font-semibold text-gray-900 md:text-4xl">
          <span>WHAT OUR SATISFIED</span>
          <br />
          <span>CLIENTS SAY ABOUT US</span>
        </h2>

        {/* RIGHT CAROUSEL */}

        <div className="relative w-full min-w-0">
          <div className="overflow-x-hidden">
            <Carousel className="relative w-full">
              <CarouselContent className="flex">
                {reviews.map((review, index) => (
                  <CarouselItem
                    key={index}
                    className="shrink-0 grow-0 basis-full"
                  >
                    <div className="px-1 py-2">
                      <div className="relative box-border w-full rounded-3xl p-6 shadow-sm md:p-10">
                        {/* TEXT */}
                        <p className="text-sm leading-relaxed wrap-break-word text-gray-700 md:text-base">
                          {review.text}
                        </p>

                        {/* USER */}
                        <div className="mt-8 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            {/* AVATAR */}
                            <div className="h-10 w-10 overflow-hidden rounded-full bg-gray-300">
                              {review.avatarImage && (
                                <img
                                  src={review.avatarImage}
                                  alt={review.name}
                                  className="h-full w-full object-cover"
                                />
                              )}
                            </div>

                            {/* INFO */}
                            <div>
                              <div className="text-sm font-medium text-gray-900">
                                {review.name}
                              </div>
                              <div className="text-xs text-gray-500">
                                {review.location}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* ARROWS */}
              {/* <div className={cn(`absolute right-12 bottom-4 flex`)}>
                <CarouselPrevious />
                <CarouselNext />
              </div> */}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CTA({ className, ...props }: ComponentProps<"section">) {
  return (
    <section
      className={cn(
        `bg-primary-500 relative mb-24 max-w-svw overflow-x-clip rounded-2xl py-16 text-center text-white`,
        className
      )}
      {...props}
    >
      <h2 className="text-3xl font-semibold">Book Your Escape Today</h2>
      <p className="mt-4 text-sm opacity-90">
        Your relaxation is just one click away
      </p>
      <a
        href="/contact"
        className="text-primary-600 mt-6 inline-block rounded-none bg-white px-6 py-3 font-medium"
      >
        Book Now
      </a>
    </section>
  );
}
