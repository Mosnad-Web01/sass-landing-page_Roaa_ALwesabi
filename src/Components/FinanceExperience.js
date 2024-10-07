import Image from 'next/image';
import React from 'react';

export default function FinanceExperience() {
    return (
        <div className="flex justify-center items-center bg-white dark:bg-gray-900 py-10 transition duration-300 text-center mt-12 px-4">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col justify-center p-4">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4 dark:text-white">
                        Let&apos;s Upgrade Your Finance Experience with FinBiz
                    </h1>

                        <div className="flex flex-col md:flex-row justify-center space-x-0 md:space-x-4 mt-4">
                            <button className="bg-black text-white font-bold py-2 px-4 rounded-full shadow-md shadow-gray-500 mb-2 md:mb-0">
                                Request Demo
                            </button>
                            <button className="bg-[#A3DC2F] text-white font-bold py-2 px-4 rounded-full shadow-md shadow-gray-500">
                                Watch Video
                            </button>
                        </div>
                    </div>
                    <div className="p-4 flex justify-center">
                        <Image src="/images/Rectangle 388.svg" alt="Finance Dashboard" width={600} height={400} className="w-full h-auto" />
                    </div>
                </div>
            </div>
        </div>
    );
}
