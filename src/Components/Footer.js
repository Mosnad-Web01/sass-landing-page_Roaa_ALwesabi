import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/images/logo.svg';
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from 'react-icons/fa'; // استيراد الأيقونات

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-10 transition duration-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row flex-wrap justify-between items-center space-y-6 md:space-y-0">
          <div className="flex items-center flex-1 md:flex-none text-center md:text-left">
            <Link href="/">
              <Image
                src={logo}
                alt="FinBiz Logo"
                width={50}
                height={50}
                className="mr-2"
              />
            </Link>
            <div>
              <p className="text-gray-600 dark:text-white text-xl font-semibold">
                FinBiz
              </p>
              <p className="text-gray-600 dark:text-white mt-2">
                Data analysis software is a type of software tool used<br className="hidden md:block"/> for data
                analysis and reporting.
              </p>
              
              {/* أيقونات الشبكات الاجتماعية تحت النص */}
              <div className="flex justify-center md:justify-start space-x-2 mt-4">
                <Link href="#" className="bg-gray-200 dark:bg-gray-700 rounded-full p-2 text-gray-500 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300">
                  <FaTwitter />
                </Link>
                <Link href="#" className="bg-gray-200 dark:bg-gray-700 rounded-full p-2 text-gray-500 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300">
                  <FaFacebookF />
                </Link>
                <Link href="#" className="bg-gray-200 dark:bg-gray-700 rounded-full p-2 text-gray-500 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300">
                  <FaInstagram />
                </Link>
                <Link href="#" className="bg-gray-200 dark:bg-gray-700 rounded-full p-2 text-gray-500 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300">
                  <FaGithub />
                </Link>
              </div>
            </div>
          </div>

          <div className="md:ml-10 flex-1 md:flex-none mt-4 md:mt-0">
            <h5 className="text-lg font-bold mb-4 dark:text-white">Company</h5>
            <ul>
              <li>
                <Link href="#" className="text-gray-600 dark:text-white hover:text-gray-800 dark:hover:text-gray-300 mb-2 block">
                  Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 dark:text-white hover:text-gray-800 dark:hover:text-gray-300 mb-2 block">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 dark:text-white hover:text-gray-800 dark:hover:text-gray-300 block">
                  About us
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:ml-10 flex-1 md:flex-none mt-4 md:mt-0">
            <h5 className="text-lg font-bold mb-4 dark:text-white">Help</h5>
            <ul>
              <li>
                <Link href="#" className="text-gray-600 dark:text-white hover:text-gray-800 dark:hover:text-gray-300 mb-2 block">
                  Customer Support
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 dark:text-white hover:text-gray-800 dark:hover:text-gray-300 mb-2 block">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 dark:text-white hover:text-gray-800 dark:hover:text-gray-300 block">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:ml-10 flex-1 md:flex-none mt-4 md:mt-0">
            <h5 className="text-lg font-bold mb-4 dark:text-white">Subscribe to Newsletter</h5>
            <form className="flex">
              <input
                type="email"
                className="w-full px-3 py-2 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Enter email address"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-[#A3DC2F] text-white rounded-r-lg hover:bg-[#8BC22F] focus:outline-none focus:ring-1 focus:ring-[#A3DC2F]"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* خط فاصل */}
        <hr className="my-6 border-gray-300 dark:border-gray-600" />

        <div className="text-center mt-6">
          <p className="text-gray-500 dark:text-white">
            © Copyright 2024, All Rights Reserved by FinBiz
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
