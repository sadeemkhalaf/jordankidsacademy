'use client';

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 py-10">
      <div className="container mx-auto px-5">
        <div className="flex flex-col md:flex-row justify-between text-sm space-y-8 md:space-y-0">
          {/* Account Section */}
          <div>
            <h3 className="font-semibold text-gray-800">Account</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/login">Log In</Link></li>
              <li><Link href="/signup">Sign Up</Link></li>
              <li><Link href="/gift-card">Redeem a Gift Card</Link></li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="font-semibold text-gray-800">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/factories">Factories</Link></li>
              <li><Link href="/international">International</Link></li>
            </ul>
          </div>

          {/* Get Help Section */}
          <div>
            <h3 className="font-semibold text-gray-800">Get Help</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/help-center">Help Center</Link></li>
              <li><Link href="/return-policy">Return Policy</Link></li>
              <li><Link href="/shipping-info">Shipping Info</Link></li>
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="font-semibold text-gray-800">Connect</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/facebook">Facebook</Link></li>
              <li><Link href="/instagram">Instagram</Link></li>
              <li><Link href="/stores">Our Stores</Link></li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="w-full md:w-1/3 lg:w-1/4">
            <h3 className="font-semibold text-gray-800">Newsletter</h3>
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
          </div>
        </div>

        {/* Footer Links */}
        <div className="mt-10 text-center text-xs text-gray-500 space-y-2 md:space-y-0 md:space-x-4">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-of-service">Terms of Service</Link>
          <Link href="/do-not-sell">Do Not Sell or Share My Personal Information</Link>
          <Link href="/supply-chain">CS Supply Chain Transparency</Link>
          <Link href="/vendor-code">Vendor Code of Conduct</Link>
          <Link href="/sitemap-pages">Sitemap Pages</Link>
          <Link href="/sitemap-products">Sitemap Products</Link>
        </div>

        {/* Copyright */}
        <div className="mt-4 text-center text-xs text-gray-500">
          © 2024 All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;