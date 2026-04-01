import { useEffect, useRef, useState } from "react";
import { LuMessageCircleMore, LuX, LuMail, LuPhone } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { SlLocationPin, SlSocialFacebook } from "react-icons/sl";

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
          href="https://www.google.com/maps?ll=22.53171,88.308723&z=9&t=m&hl=en-US&gl=US&mapclient=embed&q=22%C2%B032%2706.5%22N+88%C2%B020%2745.9%22E+22.535145,+88.346088@22.535145,88.346088"
          target="_blank"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-red-500 text-white shadow-md hover:bg-red-600"
        >
          <SlLocationPin className="size-6" />
        </a>

        {/* INSTAGRAM */}
        <a
          href="https://www.instagram.com/kiranfamilysalonandspa?utm_source=qr&igsh=MTdzOHkzYzQxbGZscA=="
          className="flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white shadow-md hover:opacity-90"
        >
          <FaInstagram className="size-6" />
        </a>

        {/* FACEBOOK */}
        <a
          href="https://www.facebook.com/kiranfamilyandsalonspa"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-md hover:bg-blue-700"
        >
          <SlSocialFacebook className="size-6" />
        </a>

        {/* WHATSAPP */}
        <a
          href="https://wa.me/91XXXXXXXXXX"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-md hover:bg-green-600"
        >
          <FaWhatsapp className="size-6" />
        </a>

        {/* CALL */}
        <a
          href="tel:+919875421774"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-md hover:bg-emerald-600"
        >
          <LuPhone className="size-6" />
        </a>

        {/* MESSAGE (Generic / Email) */}
        <a
          href="mailto:kiranfamilysalonandspa94@gmail.com"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-500 text-white shadow-md hover:bg-gray-600"
        >
          <LuMail className="size-6" />
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
