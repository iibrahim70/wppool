import { useEffect, useState } from "react";
import logo from "@/assets/logo/logo.png";
import { IoShareSocial, IoMenu, IoClose } from "react-icons/io5";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  // Define your navigation items as an array of objects
  const navItems = [
    { label: "The WPPOOL Index", link: "/" },
    { label: "All Companies", link: "/" },
    { label: "Potential Futures", link: "/" },
    { label: "State of USA", link: "/" },
    { label: "Stories & Ideas", link: "/" },
    { label: "About WPPOOL", link: "/" },
    { label: "WPPOOL Portfolio", link: "/" },
  ];

  // stop scrolling when nav is open on small devices
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  return (
    <nav className="py-5 bg-primary text-white">
      <div className="section-wrapper flex items-center justify-between gap-5">
        <div className="flex items-center gap-2.5">
          <img src={logo} alt="Brand Logo" />
          <p className="text-2xl">
            <span className="font-bold">Wp</span>pool
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2.5">
            <Button
              variant="outline"
              size="sm"
              className="rounded-full size-9 p-0"
            >
              <IoShareSocial />
            </Button>

            <Button variant="outline" size="sm" className="rounded-full">
              Download the 2024 Report
            </Button>
          </div>

          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden"
          >
            <IoMenu className="size-6" />
          </button>
        </div>
      </div>

      {/* mobile navigation overlay */}
      <div
        onClick={() => setIsMenuOpen((prev) => !prev)}
        className={cn(
          "bg-black/50 fixed top-0 right-0 w-full h-full backdrop-blur-md z-50 md:hidden",
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      ></div>

      {/* mobile navigation content */}
      <div
        className={cn(
          "bg-white text-black absolute top-0 left-0 w-1/2 min-h-dvh max-h-dvh z-50 md:hidden px-3 py-10 rounded transition-transform ease-in-out duration-300",
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* closing button */}
        <div
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="flex items-center justify-between gap-5 mb-5"
        >
          <div className="flex items-center gap-2.5">
            <Button variant="secondary" size="icon" className="rounded-full">
              <IoShareSocial />
            </Button>

            <Button size="sm" className="rounded-full">
              Download the 2024 Report
            </Button>
          </div>

          <button>
            <IoClose className="size-6" />
          </button>
        </div>

        {/* navigation items */}
        <div className="flex flex-col gap-1">
          {navItems.map((item, index) => (
            <a
              key={index}
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="px-4 py-2 rounded hover:bg-gray-300 dark:hover:bg-deep-black duration-300 transition-all cursor-pointer"
            >
              {item?.label}
            </a>
          ))}

          <button className="text-primary font-semibold text-left px-4 py-2">
            Visit WPPOOL
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
