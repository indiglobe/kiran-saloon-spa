import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router";
import { cn } from "@/lib/utils/cn";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-svw bg-white shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="size-14 text-xl font-semibold text-gray-800">
            <img src="/logo.jpg" alt="logo" className="" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden space-x-4 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "inline-block rounded-full px-4 py-1.5 text-gray-600 transition duration-200 hover:text-black",
                  {
                    "bg-primary-500 hover:text-primary-100 text-white":
                      `/${pathname.split("/")[1]}` === item.href,
                  }
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="bg-white shadow-md md:hidden">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block px-4 py-3 text-gray-600 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
