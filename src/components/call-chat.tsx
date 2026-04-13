import { useEffect, useRef, useState } from "react";
import { LuMessageCircleMore, LuX, LuMail, LuPhone } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { SlLocationPin, SlSocialFacebook } from "react-icons/sl";
import {
  facebookLink,
  instagramLink,
  mailLink,
  ownerNumber,
  saloonLocation,
} from "@/utils/const";
import { cn } from "@/lib/utils/cn";

export function FloatingActionButton() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={ref}
      className="fixed right-6 bottom-6 z-50 flex flex-col items-end gap-3"
    >
      {/* CHILD BUTTONS */}
      <div
        className={`flex flex-col items-end gap-3 transition-all duration-300 ${
          open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        {/* LOCATION */}
        <a
          href={saloonLocation}
          target="_blank"
          className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-red-500 text-white shadow-md hover:bg-red-600"
        >
          <SlLocationPin className="size-6" />
          <span
            className={cn(
              `py-1/2 absolute top-1/2 right-full mr-4 -translate-y-1/2 rounded-sm bg-gray-800 px-2 opacity-0 group-hover:opacity-100`
            )}
          >
            location
          </span>
        </a>

        {/* INSTAGRAM */}
        <a
          href={instagramLink}
          className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white shadow-md hover:opacity-90"
        >
          <FaInstagram className="size-6" />
          <span
            className={cn(
              `py-1/2 absolute top-1/2 right-full mr-4 -translate-y-1/2 rounded-sm bg-gray-800 px-2 opacity-0 group-hover:opacity-100`
            )}
          >
            instagram
          </span>
        </a>

        {/* FACEBOOK */}
        <a
          href={facebookLink}
          className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-md hover:bg-blue-700"
        >
          <SlSocialFacebook className="size-6" />
          <span
            className={cn(
              `py-1/2 absolute top-1/2 right-full mr-4 -translate-y-1/2 rounded-sm bg-gray-800 px-2 opacity-0 group-hover:opacity-100`
            )}
          >
            facebook
          </span>
        </a>

        {/* WHATSAPP */}
        <a
          href={`https://wa.me/91${ownerNumber}`}
          className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-md hover:bg-green-600"
        >
          <FaWhatsapp className="size-6" />
          <span
            className={cn(
              `py-1/2 absolute top-1/2 right-full mr-4 -translate-y-1/2 rounded-sm bg-gray-800 px-2 opacity-0 group-hover:opacity-100`
            )}
          >
            whatsapp
          </span>
        </a>

        {/* CALL */}
        <a
          href={`tel:+91${ownerNumber}`}
          className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-md hover:bg-emerald-600"
        >
          <LuPhone className="size-6" />
          <span
            className={cn(
              `py-1/2 absolute top-1/2 right-full mr-4 -translate-y-1/2 rounded-sm bg-gray-800 px-2 opacity-0 group-hover:opacity-100`
            )}
          >
            phone
          </span>
        </a>

        {/* MESSAGE (Generic / Email) */}
        <a
          href={`mailto:${mailLink}`}
          className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-gray-500 text-white shadow-md hover:bg-gray-600"
        >
          <LuMail className="size-6" />
          <span
            className={cn(
              `py-1/2 absolute top-1/2 right-full mr-4 -translate-y-1/2 rounded-sm bg-gray-800 px-2 opacity-0 group-hover:opacity-100`
            )}
          >
            mail
          </span>
        </a>
      </div>

      {/* MAIN BUTTON */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="bg-primary-600 hover:bg-primary-700 flex h-14 w-14 items-center justify-center rounded-full text-xl text-white shadow-lg transition"
      >
        {open ? (
          <LuX className="size-6" />
        ) : (
          <LuMessageCircleMore className="size-6" />
        )}
      </button>
    </div>
  );
}
