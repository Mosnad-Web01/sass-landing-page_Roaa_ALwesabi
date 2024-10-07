
"use client";
import Image from 'next/image';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function SalesOverview() {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sales Overview',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="p-6 rounded-lg shadow-md bg-white text-gray-900 dark:bg-gray-800 dark:text-white">
      {/* Top Section: Profit, Revenue, Product Sold */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md flex flex-col items-center">
          <p className="text-gray-600 dark:text-gray-300">Total Profit</p>
          <p className="text-3xl font-semibold">$350,240</p>
          <p className="text-green-500 flex items-center">
            +18.23 <span className="ml-2">📈</span>
          </p>
        </div>

        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md flex flex-col items-center">
          <p className="text-gray-600 dark:text-gray-300">Total Revenue</p>
          <p className="text-3xl font-semibold">$400,690</p>
          <p className="text-red-500 flex items-center">
            +28.35 <span className="ml-2">📉</span>
          </p>
        </div>

        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md flex flex-col items-center">
          <p className="text-gray-600 dark:text-gray-300">Product Sold</p>
          <p className="text-3xl font-semibold">$200,000</p>
          <p className="text-blue-500 flex items-center">
            +28.35 <span className="ml-2">📊</span>
          </p>
        </div>
      </div>

      {/* Bottom Section: Balance, Chart, Long Rectangle */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {/* Balance Section */}
        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md">
          <p className="text-gray-600 dark:text-gray-300">Total Balance</p>
          <p className="text-2xl font-semibold">$350</p>
          <button className="mt-4 py-2 px-4 rounded bg-black text-white dark:bg-gray-600">
            Transfer
          </button>
          <div className="mt-4">
            <p className="text-gray-600 dark:text-gray-300">Total Income</p>
            <p className="text-lg">$320</p>
          </div>
          <div className="mt-4">
            <p className="text-gray-600 dark:text-gray-300">Total Expense</p>
            <p className="text-lg">$220</p>
          </div>
        </div>

        {/* Chart Section */}
        <div className="col-span-1 sm:col-span-2 md:col-span-2 bg-gray-100 dark:bg-gray-700 p-4 rounded-md">
          <Line data={data} options={options} />
        </div>

        {/* Long Rectangle Section */}
        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md flex flex-col items-center justify-between">
          <p className="text-gray-600 dark:text-gray-300 mb-2">Employee</p>
          <div className="w-full flex flex-col gap-2">
            <Image
              src="/images/Rectangle 322.svg"
              alt="Employee Type"
              width={200}
              height={20}
            />
            <Image
              src="/images/Rectangle 321 (1).svg"
              alt="Employee Type"
              width={200}
              height={20}
            />
          </div>
        </div>
      </div>
    </div>
  );
}