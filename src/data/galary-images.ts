type Max10<T> =
  | []
  | [T]
  | [T, T]
  | [T, T, T]
  | [T, T, T, T]
  | [T, T, T, T, T]
  | [T, T, T, T, T, T]
  | [T, T, T, T, T, T, T]
  | [T, T, T, T, T, T, T, T]
  | [T, T, T, T, T, T, T, T, T];

/**
 * A gallery of images grouped into sub-arrays.
 *
 * Each inner array represents a group of images and must contain
 * at most 10 items (enforced via the Max10 tuple type).
 *
 * @type {Max10<{ url: string }>[]}
 */
export const galaryImages: Max10<{ url: string }>[] = [
  [
    { url: "sample-image-1.jpeg" },
    { url: "sample-image-2.jpeg" },
    { url: "sample-image-3.jpeg" },
    { url: "sample-image-4.jpeg" },
    { url: "sample-image-5.jpeg" },
    { url: "sample-image-6.jpeg" },
    { url: "sample-image-7.jpeg" },
    { url: "sample-image-8.jpeg" },
    { url: "sample-image-9.jpeg" },
  ],
  [
    { url: "sample-image-10.jpeg" },
    { url: "sample-image-11.jpeg" },
    { url: "sample-image-12.jpeg" },
    { url: "sample-image-13.jpeg" },
    { url: "sample-image-14.jpeg" },
    { url: "sample-image-15.jpeg" },
    { url: "sample-image-16.jpeg" },
    { url: "sample-image-17.jpeg" },
    { url: "sample-image-18.jpeg" },
  ],
  [
    { url: "sample-image-19.jpeg" },
    { url: "sample-image-20.jpeg" },
    { url: "sample-image-21.jpeg" },
  ],
];
