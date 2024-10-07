import Image from 'next/image';

export default function Testimonials() {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-10 transition duration-300">
      <div className="container mx-auto text-center">
        {/* العنوان */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-800">What are people saying</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Thank you for your trust in Crypt Land! We are grateful for your feedback and are committed to providing the best 
            [products/services offered]. Read what our clients have to say about their experience with us.
          </p>
        </div>

        {/* البطاقات */}
        <div className="flex flex-wrap justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          {/* بطاقة 1 */}
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg max-w-sm mx-auto sm:mx-0">
            <p className="text-gray-700 dark:text-gray-300">
              I really like the system at this management, I love recommending this software to you guys.
            </p>
            <div className="flex items-center mt-4">
              <Image src="/images/Component 28.svg" alt="Client 1" width={40} height={40} className="rounded-full" />
              <div className="ml-4">
                <div className="flex">
                  <Image src="/images/Component 29.svg" alt="5 stars" width={80} height={16} />
                </div>
              </div>
            </div>
          </div>

          {/* بطاقة 2 */}
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg max-w-sm mx-auto sm:mx-0">
            <p className="text-gray-700 dark:text-gray-300">
              We align our success with the success of our customers which is why our offering transcends our software.
            </p>
            <div className="flex items-center mt-4">
              <Image src="/images/Component 28 (1).svg" alt="Client 2" width={40} height={40} className="rounded-full" />
              <div className="ml-4">
                <div className="flex">
                  <Image src="/images/Component 29.svg" alt="5 stars" width={80} height={16} />
                </div>
              </div>
            </div>
            <Image src="/images/inverted comma.svg" alt="Inverted Comma" width={20} height={20} className="mt-4" />
          </div>

          {/* بطاقة 3 */}
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg max-w-sm mx-auto sm:mx-0">
            <p className="text-gray-700 dark:text-gray-300">
              I really like the system at this management, I love recommending this software to you guys.
            </p>
            <div className="flex items-center mt-4">
              <Image src="/images/Component 28 (1).svg" alt="Client 3" width={40} height={40} className="rounded-full" />
              <div className="ml-4">
                <div className="flex">
                  <Image src="/images/Component 29.svg" alt="5 stars" width={80} height={16} />
                </div>
              </div>
            </div>
            <Image src="/images/inverted comma.svg" alt="Inverted Comma" width={20} height={20} className="mt-4" />
          </div>
        </div>

        {/* أزرار التنقل */}
        <div className="mt-8 flex justify-center space-x-4">
          <button className="bg-white p-2 rounded-full">
            <Image src="/images/arrow-left.svg" alt="Left Arrow" width={20} height={20} />
          </button>
          <button className="bg-[#A3DC2F] p-2 rounded-full">
            <Image src="/images/arrow-right.svg" alt="Right Arrow" width={20} height={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
