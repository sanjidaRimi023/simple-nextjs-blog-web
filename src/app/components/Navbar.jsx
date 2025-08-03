import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="bg-white shadow dark:bg-gray-800 items-center flex justify-between mx-auto px-10 py-5">
        <div className="text-3xl font-bold text-emerald-500">Next Blog</div>
        <div className=" text-gray-600 capitalize dark:text-gray-300">
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
         <Link
            href="/user"
            className="text-gray-800 dark:text-gray-200 mx-1.5 sm:mx-6"
          >
          Dashboard
          </Link>
        </div>
        <div className="flex gap-3">
          <Link href="login">
            <button
              type="button"
              className="border-2 border-teal-400 rounded-xl px-6 py-2 hover:bg-teal-500 font-semibold"
            >
              login
            </button>
          </Link>
          <Link href="register">
          <button
            type="button"
            className="border-2 border-teal-400 rounded-xl px-4 py-2 bg-teal-500 font-semibold hover:bg-white"
          >
            Register
          </button>
          </Link>
        </div>
      </nav>
    </>
  );
}
