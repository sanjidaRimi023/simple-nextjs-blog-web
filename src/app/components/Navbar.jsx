import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="bg-white shadow dark:bg-gray-800">
        <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
          <Link
            href="/"
            className="text-gray-800 dark:text-gray-200 mx-1.5 sm:mx-6"
          >
          Home
          </Link>

          <Link
            href="/services"
            className="text-gray-800 dark:text-gray-200 mx-1.5 sm:mx-6"
          >
           Service
          </Link>

          <Link
            href="/about"
            className="text-gray-800 dark:text-gray-200 mx-1.5 sm:mx-6"
          >
            About
          </Link>

          <Link
            href="/blog"
            className="text-gray-800 dark:text-gray-200 mx-1.5 sm:mx-6"
          >
            blog
          </Link>
        </div>
      </nav>
    </>
  );
}
