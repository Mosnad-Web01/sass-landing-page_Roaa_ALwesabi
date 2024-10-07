import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa'; // إضافة الأيقونات للتحكم بالقائمة

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); // التحكم في إظهار القائمة بالشاشات الصغيرة

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className="relative bg-no-repeat bg-center dark:bg-gray-800 py-10 transition duration-300"
      style={{
        backgroundImage: "url('/images/Ellipse 210.svg')",
      }}
    >
      <div className="container mx-auto px-6 flex justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
        {/* زر القائمة المنسدلة للشاشات الصغيرة */}
        <button
          className="md:hidden text-gray-900 dark:text-white"
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* القائمة التي سيتم إظهارها على الشاشات الصغيرة وإخفاؤها في الشاشات الكبيرة */}
        <div
          className={`${
            menuOpen ? 'block' : 'hidden'
          } md:flex md:space-x-6 flex-col md:flex-row items-center space-y-4 md:space-y-0`}
        >
          <Link href="/product" className="text-gray-600 hover:text-gray-800">
            Product
          </Link>
          <Link href="/integration" className="text-gray-600 hover:text-gray-800">
            Integration
          </Link>
          <Link href="/demo" className="text-gray-600 hover:text-gray-800">
            Demo
          </Link>
          <Link href="/pricing" className="text-gray-600 hover:text-gray-800">
            Pricing
          </Link>

          {/* زر تسجيل الدخول */}
          <Link
            href="/login"
            className="bg-white text-green-700 px-4 py-2 rounded-full border border-green-400 hover:bg-green-300 hover:text-white"
          >
            Login
          </Link>
        </div>
      </div>

      {/* القائمة المنسدلة للشاشات الصغيرة مع خلفية واضحة في الوضع الليلي والنهاري */}
      {menuOpen && (
        <div
          className={`fixed top-0 right-0 w-64 h-full bg-white dark:bg-gray-900 p-8 z-50 md:hidden transition-transform transform ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col space-y-4">
            <Link href="/product" className="text-gray-900 dark:text-white">
              Product
            </Link>
            <Link href="/integration" className="text-gray-900 dark:text-white">
              Integration
            </Link>
            <Link href="/demo" className="text-gray-900 dark:text-white">
              Demo
            </Link>
            <Link href="/pricing" className="text-gray-900 dark:text-white">
              Pricing
            </Link>

            {/* زر تسجيل الدخول */}
            <Link
              href="/login"
              className="bg-green-500 text-white px-4 py-2 rounded-full"
            >
              Login
            </Link>
          </div>
        </div>
      )}

      {/* تغطية الشاشة عند فتح القائمة المنسدلة */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleMenu}
        ></div>
      )}
    </nav>
  );
}
