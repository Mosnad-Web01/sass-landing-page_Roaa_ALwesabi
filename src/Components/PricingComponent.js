import React from 'react';
import { FaDollarSign, FaStar } from 'react-icons/fa'; // استيراد الأيقونات

const PricingComponent = () => {
  return (
    <div className="bg-white dark:bg-gray-900 py-10 transition duration-300 text-center mt-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Center Button and Text */}
        <div className="mb-8 flex flex-col items-center"> {/* تعديل هنا */}
          <button className="flex items-center justify-center bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 px-4 py-2 rounded-full shadow">
            <FaDollarSign className="mr-2" /> {/* أيقونة التسعير */}
            Pricing
          </button>
          <h1 className="text-3xl font-bold mt-4 dark:text-white">Find the right plan</h1>
          <p className="text-gray-700 dark:text-gray-300">
            Invest in your company&apos;s future with our comprehensive financial solution. Contact us for pricing details and see how we can help you streamline your finances and reach your business goals.
          </p>
        </div>

        {/* Card Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`bg-white dark:bg-gray-700 p-6 rounded-lg shadow flex flex-col justify-between ${plan.name === 'Pro' ? 'border-2 border-green-500' : ''}`} style={{ minHeight: '400px' }}>
              <div className="text-center">
                {plan.name === 'Pro' && (
                  <button className="flex items-center justify-center bg-black text-green-500 px-4 py-2 rounded-full shadow animate-pulse">
                    <FaStar className="mr-2" /> {/* أيقونة الخطة الشعبية */}
                    Popular
                  </button>
                )}
                <h2 className="text-xl font-semibold mb-4 dark:text-white">{plan.name}</h2>
                <p className="text-gray-700 dark:text-gray-300">{plan.description}</p>
                <p className="text-2xl font-bold mb-4 dark:text-white">${plan.price}/month</p>
                <ul className="text-left mb-4">
                  {plan.features.map(feature => (
                    <li key={feature} className="flex items-center text-gray-600 mb-2 dark:text-gray-300">
                      <FaDollarSign className="mr-2" /> {/* أيقونة التحقق */}
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button className={`mt-auto font-bold py-2 px-4 rounded-full ${
                plan.name === 'Enterprise'
                  ? 'bg-[#A3DC2F] text-white'
                  : plan.name === 'Pro'
                  ? 'bg-black text-white'
                  : 'bg-white text-black shadow-md shadow-gray-500 dark:bg-gray-800 dark:text-white'
              }`}>
                {plan.name === 'Enterprise' ? 'Contact Us' : 'Get started'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const plans = [
  { name: 'Basic', description: 'Get a professional website designed according to your needs.', price: 499, features: ['Fully designed Website', 'Webflow Development', 'Limited Support'] },
  { name: 'Pro', description: 'Get a professional website designed according to your needs.', price: 499, features: ['Fully designed Website', 'Webflow Development', 'Standard integrations', 'Email support'] },
  { name: 'Enterprise', description: 'Get a professional website designed according to your needs.', price: 999, features: ['Fully designed Website', 'Webflow Development', 'Standard integrations', 'Email support', 'Final support'] }
];

export default PricingComponent;
