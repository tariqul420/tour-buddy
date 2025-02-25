import Image from 'next/image';
import { FaLocationPin, FaPen } from 'react-icons/fa6';
import { LiaBirthdayCakeSolid } from 'react-icons/lia';

const page = () => {
  return (
    <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 bg-white shadow-md rounded-lg py-6 pr-6 my-8">
      {/* Left Side - Profile Card */}
      <div className="">
        <div className="flex flex-col items-center text-center">
          <div className="relative">
            <Image className="rounded-full object-cover" src={`/tariqul.jpg`} alt="profile" width={120} height={120} />
            <div className='w-8 h-8 flex items-center justify-center rounded-full bg-[#7BBCB0] text-white border border-white absolute bottom-2 right-2 cursor-pointer'><FaPen /></div>
          </div>
          <h3 className="text-lg font-semibold">Tariqul Islam</h3>
          <div className="text-gray-600 flex gap-2">
            <p className="flex gap-1 items-center">
              <FaLocationPin /> Bangladesh
            </p>
            <p className="flex gap-1 items-center">
              <LiaBirthdayCakeSolid /> 30 December
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="mt-6 flex flex-col gap-3">
          {['Profile Information', 'Booking History', 'Forgot Password'].map((item) => {
            const isProfile = item === 'Profile Information';

            return (
              <a key={item} href={'#'} className={`block text-center py-2 transition ${isProfile ? 'bg-[#7BBCB0] text-white hover:bg-[#69A598]' : 'bg-gray-50 text-black hover:bg-gray-100'}`}>
                {item}
              </a>
            );
          })}
        </div>
      </div>

      {/* Right Side - Personal Info & Security */}
      <div className="md:col-span-2">
        {/* Personal Info Section */}
        <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
        <div className="flex flex-col gap-4">
          <label className="font-medium">Full Name <span className="text-red-500">*</span></label>
          <input type="text" placeholder="Enter Full Name" required className="border-none p-3 w-full bg-gray-100" />

          <label className="font-medium">Date of Birth <span className="text-red-500">*</span></label>
          <input type="date" required className="border-none p-3 w-full bg-gray-100" />

          <label className="font-medium">Phone Number <span className="text-red-500">*</span></label>
          <input type="tel" placeholder="01743****58" required className="border-none p-3 w-full bg-gray-100" />

          <label className="font-medium">Location <span className="text-red-500">*</span></label>
          <input type="text" placeholder="Bangladesh" required className="border-none p-3 w-full bg-gray-100" />

          <label className="font-medium">Language <span className="text-red-500">*</span></label>
          <input type="text" placeholder="English, Bengali" required className="border-none p-3 w-full bg-gray-100" />

          <label className="font-medium">Experience <span className="text-red-500">*</span></label>
          <input type="text" placeholder="2+ years in Web Development" required className="border-none p-3 w-full bg-gray-100" />
        </div>
        <button className="mt-4 bg-[#7BBCB0] text-white py-2 px-4 rounded-md hover:bg-[#69A598]">Save</button>

        {/* Security Section */}
        <h3 className="text-xl font-semibold mt-6 mb-4">Security</h3>
        <div className="flex flex-col gap-4">
          <label className="font-medium">Email <span className="text-red-500">*</span></label>
          <input type="email" placeholder="tariqul.developer@gmail.com" required className="border-none p-3 w-full bg-gray-100" />

          <label className="font-medium">Password <span className="text-red-500">*</span></label>
          <input type="password" placeholder="********" required className="border-none p-3 w-full bg-gray-100" />

          <label className="font-medium">Confirm Password <span className="text-red-500">*</span></label>
          <input type="password" placeholder="********" required className="border-none p-3 w-full bg-gray-100" />
        </div>
        <button className="mt-4 bg-[#7BBCB0] text-white py-2 px-4 rounded-md hover:bg-[#69A598]">Save</button>
      </div>
    </section>
  );
};

export default page;
