"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 py-10 font-[quicksand]">
      <div className="container mx-auto px-5">
        <div className="flex flex-col md:flex-row justify-between text-sm space-y-8 md:space-y-0">
          <div className="flex flex-row justify-between">
            <Link href="/" className="text-2xl font-bold text-gray-800">
              <img
                src="/logo.png"
                alt="Jordan Kids Academy"
                className="h-16 md:h-[92px]"
              />
            </Link>
            {/* Connect Section */}
            <div className="mx-6">
              <h3 className="font-semibold text-gray-800">Connect with us</h3>
              <ul className="mt-4 space-x-2 flex-row flex">
                <li>
                  <Link href="https://www.facebook.com/jordan.k.nursery/?locale=ar_AR">Facebook</Link>
                </li>
                <li>
                  <Link href="https://www.instagram.com/jordan_kids_academy/?hl=en">Instagram</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Subscription */}
          {/* <div className="w-full md:w-1/3 lg:w-1/4">
            <h3 className="font-semibold text-gray-800">Join our Newsletter</h3>
            <div className="mt-4 flex">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
              />
              <button className="bg-gray-800 text-white px-4 py-2 rounded-r-md hover:bg-gray-700">
                →
              </button>
            </div>
          </div> */}
        </div>

        {/* Copyright */}
        <div className="mt-4 text-center text-xs text-gray-500">
          © 2025 All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
