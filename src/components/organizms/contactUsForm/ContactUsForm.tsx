"use client";

import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to Firestore or API
    console.log("Form Submitted:", formData);
  };

  return (
    <section className="w-full px-4 md:px-16 py-12">
      <div className="max-w-5xl mx-auto border rounded-xl p-8 shadow-md bg-white">
        {/* Heading */}
        <h2 className="text-3xl md:text-3xl font-bold text-gray-900 mb-2">
          we love to hear from you,
        </h2>
        <p className="italic text-orange-500 text-3xl font-[Courgette] mb-8">
          Get in touch
        </p>
        <p className="mb-6">
          At Jordan Kids Academy, we make early education a joyful and enriching
          experience. Come be a part of our community, where children
          Play, Learn, and Grow together!
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name + Email */}
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
            <div className="flex flex-col w-full">
              <label className="text-sm font-semibold mb-1">Your name</label>
              <input
                name="name"
                type="text"
                placeholder="Enter your Name"
                className="p-3 bg-gray-100 rounded-md outline-none focus:ring-2 focus:ring-orange-400"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="text-sm font-semibold mb-1">Your email</label>
              <input
                name="email"
                type="email"
                placeholder="Enter your Email"
                className="p-3 bg-gray-100 rounded-md outline-none focus:ring-2 focus:ring-orange-400"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-1">Message</label>
            <textarea
              name="message"
              placeholder="Enter your message here"
              className="p-3 bg-gray-100 rounded-md min-h-[150px] outline-none focus:ring-2 focus:ring-orange-400"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full transition flex items-center space-x-2"
          >
            <span>Send Message</span>
            <span className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
