import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Image
              src="/images/star-big.png"
              alt="Logo"
              width={64}
              height={64}
              priority
              className="h-8 w-8 image-rendering-pixelated"
            />
            <Link href="/" className="dark:text-c_white text-lg font-semibold">
              Turboot
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link
              href="/"
              className="dark:text-c_white hover:text-c_lightpurple px-3 py-2 rounded-md"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="dark:text-c_white hover:text-c_lightpurple px-3 py-2 rounded-md"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="dark:text-c_white hover:text-c_lightpurple px-3 py-2 rounded-md"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="dark:text-c_white hover:text-c_lightpurple px-3 py-2 rounded-md"
            >
              Contact
            </Link>
            <Link
              href="/signin"
              className="border-solid border-2 border-c_lightpurple text-c_white hover:bg-c_lightpurple px-3 py-2 rounded-md"
            >
              Sign in
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="dark:text-c_white hover:text-gray-300 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`md:hidden text-center transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <Link
          href="/"
          className="block dark:text-c_white hover:text-c_lightpurple px-3 py-2 rounded-md"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="block dark:text-c_white hover:text-c_lightpurple px-3 py-2 rounded-md"
        >
          About
        </Link>
        <Link
          href="/services"
          className="block dark:text-c_white hover:text-c_lightpurple px-3 py-2 rounded-md"
        >
          Projects
        </Link>
        <Link
          href="/contact"
          className="block dark:text-c_white hover:text-c_lightpurple px-3 py-2 rounded-md"
        >
          Contact
        </Link>
        <Link
          href="/contact"
          className="block border-solid border-2 dark:text-c_white border-c_lightpurple hover:bg-c_lightpurple px-3 py-2 rounded-md"
        >
          Sign in
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
