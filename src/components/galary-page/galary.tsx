import { galaryImages } from "@/data/galary-images";
import { cn } from "@/lib/utils/cn";
import { useState } from "react";

// Layout configuration
const galleryLayout = [
  cn(
    "col-span-2 row-span-4",
    "sm:col-span-2 sm:row-span-4",
    "md:col-span-3 md:row-span-4",
    "lg:col-span-4 lg:row-span-3"
  ),
  cn(
    "col-start-3 row-span-5",
    "sm:col-span-2 sm:col-start-3 sm:row-span-5",
    "md:col-span-3 md:col-start-4 md:row-span-5",
    "lg:col-span-4 lg:col-start-5 lg:row-span-4"
  ),
  cn(
    "row-span-5 row-start-5",
    "sm:row-span-4 sm:row-start-5",
    "md:col-span-2 md:col-start-7 md:row-span-4",
    "lg:col-span-4 lg:col-start-9 lg:row-span-3"
  ),
  cn(
    "col-span-2 col-start-2 row-span-4 row-start-6",
    "sm:col-span-2 sm:col-start-2 sm:row-span-6 sm:row-start-6",
    "md:col-span-3 md:row-span-4 md:row-start-5",
    "lg:col-span-4 lg:row-span-4 lg:row-start-4"
  ),
  cn(
    "col-span-2 row-span-4 row-start-10",
    "sm:col-span-2 sm:col-start-2 sm:row-span-6 sm:row-start-12",
    "md:col-span-2 md:col-start-4 md:row-span-3 md:row-start-6",
    "lg:col-span-4 lg:col-start-5 lg:row-span-4 lg:row-start-5"
  ),
  cn(
    "col-start-3 row-span-6 row-start-10",
    "sm:col-start-4 sm:row-span-7 sm:row-start-11",
    "md:col-span-2 md:col-start-7 md:row-span-3 md:row-start-5",
    "lg:col-span-4 lg:col-start-9 lg:row-span-5 lg:row-start-4"
  ),
  cn(
    "col-span-2 row-span-5 row-start-14",
    "sm:col-span-1 sm:col-start-1 sm:row-span-5 sm:row-start-9",
    "md:col-span-2 md:col-start-1 md:row-span-4 md:row-start-9",
    "lg:col-span-3 lg:row-span-5 lg:row-start-8"
  ),
  cn(
    "col-start-3 row-span-3 row-start-16",
    "sm:col-start-4 sm:row-span-5 sm:row-start-6",
    "md:col-span-3 md:col-start-3 md:row-span-4 md:row-start-9",
    "lg:col-span-4 lg:col-start-4 lg:row-span-4 lg:row-start-9"
  ),
  cn(
    "col-span-3 row-span-6 row-start-19",
    "sm:col-span-1 sm:col-start-1 sm:row-span-4 sm:row-start-14",
    "md:col-span-3 md:col-start-6 md:row-span-5 md:row-start-8",
    "lg:col-span-5 lg:col-start-8 lg:row-span-4 lg:row-start-9"
  ),
];

export function Gallery() {
  const [images] = useState(galaryImages);

  return (
    <section className="bg-white py-16 text-center">
      <h2 className="text-primary-500 text-3xl font-semibold">Gallery</h2>

      <div>
        {images.map((imageList, imageListIndex) => {
          return (
            <div
              key={imageListIndex}
              className={cn(
                "mx-auto mt-4 grid h-200 max-w-6xl px-4 *:rounded-xl *:bg-gray-200",
                "grid-cols-3 grid-rows-20 gap-2",
                "sm:grid-cols-4 sm:grid-rows-17",
                "md:grid-cols-8 md:grid-rows-12",
                "lg:grid-cols-12 lg:grid-rows-12 lg:gap-4"
              )}
            >
              {imageList.map((image, imageIndex) => {
                const layoutClass = galleryLayout[imageIndex];

                return (
                  <div
                    key={imageIndex}
                    className={cn(
                      "relative overflow-clip bg-red-500",
                      layoutClass
                    )}
                  >
                    <img
                      className="absolute top-0 left-0 h-full w-full object-cover transition-all hover:scale-105"
                      src={image.url}
                      alt={`gallery-${imageIndex}`}
                    />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </section>
  );
}
