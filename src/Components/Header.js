"use client";

import React, { useState, useEffect } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa"; // استيراد الأيقونات من react-icons

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // حالة للتحكم في القائمة الجانبية

  useEffect(() => {
    // التحقق من وضع الوضع الليلي المحفوظ في localStorage
    if (localStorage.getItem("darkMode") === "true") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    // تغيير حالة الوضع الليلي
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  };

  const toggleMenu = () => {
    // تغيير حالة القائمة الجانبية
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`py-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition duration-300`}>
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-2xl font-bold text-green-600">FinBiz</div>

        {/* زر القائمة المنسدلة للشاشات الصغيرة */}
        <button
          className="md:hidden text-gray-900 dark:text-white"
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* القائمة الجانبية المنسدلة للشاشات الصغيرة */}
        <nav
          className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900  z-50 transform ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out md:static md:transform-none md:flex md:items-center`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 p-8 md:p-0">
            <li>
              <a href="#" className="hover:text-gray-900 dark:hover:text-white">
                Product
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900 dark:hover:text-white">
                Pages
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900 dark:hover:text-white">
                Integrations
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900 dark:hover:text-white">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900 dark:hover:text-white">
                Pricing
              </a>
            </li>
          </ul>
        </nav>

        {/* عرض أيقونة الوضع الليلي وزر "Get Started" في جميع الأحجام */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-gray-200 transition duration-300"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          <button className="bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-gray-200 px-4 py-2 rounded-full">
            Get started
          </button>
        </div>
      </div>

      {/* تغطية الشاشة عند فتح القائمة الجانبية */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}
    </header>
  );
};

export default Header;
