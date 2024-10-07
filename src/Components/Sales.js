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

export default function ExpenseManagementOverview() {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Simple Analytics',
        data: [12, 19, 3, 5, 2, 3, 9],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        fill: false,
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
    <div className="bg-gray-100 dark:bg-gray-800 py-10 transition duration-300">
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Left Card */}
        <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md flex flex-col items-center">
          <p className="text-gray-700 dark:text-gray-300">Simple analytics</p>
          <div className="relative w-full h-40">
            <Line data={data} options={options} />
          </div>
          <p className="text-green-500 mt-2">14.12%</p>
        </div>

        {/* Center Card */}
        <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md flex flex-col items-center">
          <p className="text-center text-gray-700 dark:text-gray-300">
            Bring harmony to team expenses with budget limits and real-time monitoring. Freedom for your staff. Peace of mind for you.
          </p>
          <div className="relative w-full h-40">
            <Line data={data} options={options} />
          </div>
        </div>

        {/* Right Card */}
        <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md flex flex-col items-center">
          <p className="text-gray-700 dark:text-gray-300">Easy collaboration</p>
          <div className="relative w-24 h-24">
            {}
          </div>
          <p className="text-center text-gray-600 mt-2">
            Seamlessly collaborate with your team members like never before.
          </p>
        </div>
      </div>


      <div className="container mx-auto px-6 mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Bottom Left Card */}
        <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md flex flex-col">
          <p className="text-gray-700 dark:text-gray-300">
            Take the pain out of bookkeeping! Wave goodbye to mountains of paperwork and endless email reminders. There’s now a new way of accounting.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-4">
            <div className="p-6 bg-white dark:bg-gray-700 rounded-lg mb-4 sm:mb-0">
              <p className="text-3xl font-semibold">$3453.00</p>
              {/* Insert icons under the amount */}
              <div className="flex space-x-2 mt-4">
                <Image src="/images/Rectangle 392.svg" alt="Rectangle" width={20} height={20} />
                <Image src="/images/Rectangle 392.svg" alt="Rectangle" width={20} height={20} />
                <Image src="/images/Rectangle 392.svg" alt="Rectangle" width={20} height={20} />
              </div>
            </div>

            {/* Monthly Invoice List with colored icons */}
            <div className="bg-white dark:bg-gray-700 p-4 rounded-md">
              <p className="text-lg font-medium">Monthly Invoice</p>
              <ul className="text-sm text-gray-700 dark:text-gray-300">
                <li>
                  <Image src="/images/icon.svg" alt="Pink icon" width={20} height={20} className="inline-block mr-2" />
                  <span className="text-pink-500">John Client</span> - download PDF
                </li>
                <li>
                  <Image src="/images/icon.svg" alt="Blue icon" width={20} height={20} className="inline-block mr-2" />
                  <span className="text-blue-500">Michele Leos</span> - download PDF
                </li>
                <li>
                  <Image src="/images/icon.svg" alt="Turquoise icon" width={20} height={20} className="inline-block mr-2" />
                  <span className="text-teal-500">John Smith</span> - download PDF
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Right Card */}
        <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md flex flex-col items-center">
          <p className="text-xl font-semibold mb-4">Optimise expense Management as a team</p>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
            Bring harmony to team expenses with budget limits and real-time monitoring. Freedom for your staff. Peace of mind for you.
          </p>
          {/* Explore more button with black color and rounded edges */}
          <button className="bg-black text-white py-2 px-6 rounded-md self-start">Explore more</button>
        </div>
      </div>
    </div>
  );
}
