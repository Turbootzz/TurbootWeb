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
              src="/images/something.png"
              alt="Logo"
              width={32}
              height={32}
              priority
              className="h-8 w-8"
            />
            <Link href="/" className="text-white text-lg font-bold">
              Turboot
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link
              href="/"
              className="text-white hover:text-c_lightpurple px-3 py-2 rounded-md"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-c_lightpurple px-3 py-2 rounded-md"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="text-white hover:text-c_lightpurple px-3 py-2 rounded-md"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-c_lightpurple px-3 py-2 rounded-md"
            >
              Contact
            </Link>
            <Link
              href="/signin"
              className="border-solid border-2 border-c_lightpurple text-white hover:bg-c_lightpurple px-3 py-2 rounded-md"
            >
              Sign in
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-white hover:text-gray-300 focus:outline-none"
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
      {isOpen && (
        <div className="md:hidden text-center">
          <Link
            href="/"
            className="block text-white hover:text-c_lightpurple px-3 py-2 rounded-md"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block text-white hover:text-c_lightpurple px-3 py-2 rounded-md"
          >
            About
          </Link>
          <Link
            href="/services"
            className="block text-white hover:text-c_lightpurple px-3 py-2 rounded-md"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="block text-white hover:text-c_lightpurple px-3 py-2 rounded-md"
          >
            Contact
          </Link>
          <Link
            href="/contact"
            className="block border-solid border-2 border-c_lightpurple text-white hover:bg-c_lightpurple px-3 py-2 rounded-md"
          >
            Sign in
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
