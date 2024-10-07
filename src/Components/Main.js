"use client";

import React from 'react';

const Main = () => {
  return (
    <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition duration-300 text-center px-4">
      <div className="flex justify-center items-center space-x-2 mb-4">
        <button className="bg-[#A3DC2F] text-white px-3 py-1 rounded-full text-sm">
          New
        </button>
        <span className="text-green-700 dark:text-green-300 text-sm">
          Introducing AI Automation
        </span>
      </div>
      <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
        The Finance Solutions For Your Business
      </h1>
      <p className="text-gray-600 mb-6 dark:text-gray-400">
        Empower your finance team. The one-stop platform for all financial management of small and medium-sized business.
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
        <input type="email" placeholder="Enter your email address" className="border rounded-full py-2 px-4 w-80" />
        <button className="bg-gray-900 dark:bg-gray-700 text-white py-2 px-6 rounded-full">
          Book a Demo
        </button>
      </div>
      <div className="mt-6">
        <p className="text-gray-500 dark:text-gray-400">1200+ reviews (4.9 of 5)</p>
      </div>
    </main>
  );
};

export default Main;
