import { galaryImages } from "@/data/galary-images";
import { cn } from "@/lib/utils/cn";
import type { ComponentProps } from "react";
import { Link } from "react-router";

export function Footer({ className, ...props }: ComponentProps<"footer">) {
  return (
    <footer
      className={cn(
        `bg-primary-500 flex w-full flex-col gap-10 py-10 text-white`,
        className
      )}
      {...props}
    >
      <div
        className={cn(
          `mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:px-8 xl:grid-cols-4`
        )}
      >
        <div>
          <div className={cn(`size-16`)}>
            <img src="/logo.jpg" alt="" />
          </div>
          <h2 className={cn(`mb-4 text-xl font-semibold`)}>
            Kiran Family Saloon and Spa
          </h2>
          <p>
            Kiran Family Saloon and Spa offers expert grooming, beauty, and
            relaxation services for all ages,
          </p>
        </div>

        <div>
          <h2 className={cn(`mb-4 text-xl font-semibold`)}>Working hours</h2>
          <ul>
            <li>Monday: 11am - 9pm</li>
            <li>Tuesday: 11am- 9pm</li>
            <li>Wensday: 11am - 9pm</li>
            <li>Thursday: 11am - 9pm</li>
            <li>Friday: 11am - 9pm</li>
            <li>Sat-Sun: Week off</li>
          </ul>
        </div>

        <div>
          <h2 className={cn(`mb-4 text-xl font-semibold`)}>Useful Pages</h2>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/services"}>Services</Link>
            </li>
            <li>
              <Link to={"/gallery"}>Galary</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className={cn(`mb-4 text-xl font-semibold`)}>Galary</h2>
          <div className={cn(`grid max-w-max grid-cols-4 gap-4`)}>
            {galaryImages[0].slice(0, 8).map(({ url }) => (
              <div className={cn(`size-14 overflow-clip`)}>
                <img src={url} alt="image" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div
          className={cn(
            `mx-auto flex max-w-7xl flex-col items-center justify-center gap-y-4 px-4 sm:px-6 md:flex-row md:justify-between lg:px-8`
          )}
        >
          <div className={cn(`max-md:text-center`)}>
            &copy; 2026 Kiran Family Sallon and Spa all right reserve.
          </div>
          <div className={cn(`max-md:text-center`)}>
            Developed by{" "}
            <a href="https://indiglobe.in" className={cn(`underline`)}>
              Indiglobe
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
