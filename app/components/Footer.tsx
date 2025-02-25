import Image from 'next/image';
import { FaFacebook, FaGithub } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-[#13253F] text-white p-8 w-full">
      <div className="flex flex-wrap justify-between gap-8">
        {/* First Column: Name, Country, Currency */}
        <div className="w-full sm:w-[25%]">
          <h3 className="text-lg font-semibold mb-3">Tour Buddy</h3>
          <div className="flex flex-col gap-3">
            <select className="p-2 bg-gray-900 text-white rounded-md">
              <option>Country</option>
              <option>Bangladesh</option>
              <option>USA</option>
              <option>UK</option>
            </select>
            <select className="p-2 bg-gray-900 text-white rounded-md">
              <option>Currency</option>
              <option>TK</option>
              <option>Dollar</option>
            </select>
          </div>
        </div>

        {/* Second Column: Payment */}
        <div className="w-full sm:w-[20%]">
          <h3 className="text-lg font-semibold mb-3">Payment</h3>
          <ul className="space-y-2">
            <li className="hover:text-blue-400 cursor-pointer">Home</li>
            <li className="hover:text-blue-400 cursor-pointer">Profile</li>
            <li className="hover:text-blue-400 cursor-pointer">Transactions</li>
            <li className="hover:text-blue-400 cursor-pointer">Settings</li>
          </ul>
        </div>

        {/* Third Column: Help */}
        <div className="w-full sm:w-[20%]">
          <h3 className="text-lg font-semibold mb-3">Help</h3>
          <ul className="space-y-2">
            <li className="hover:text-blue-400 cursor-pointer">FAQs</li>
            <li className="hover:text-blue-400 cursor-pointer">Support</li>
            <li className="hover:text-blue-400 cursor-pointer">Contact Us</li>
            <li className="hover:text-blue-400 cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* Fourth Column: Payment Methods */}
        <div className="w-full sm:w-[25%]">
          <h3 className="text-lg font-semibold mb-3">Payment Methods</h3>
          <div className="">
            <Image src="/icons/payment-group.png" alt="Bkash" width={200} height={150} />
          </div>
        </div>
      </div>

      <div className="mt-12 flex items-center justify-between">
        <div>
          <p>Copyright {new Date().getFullYear()} Tour Buddy. All Rights Reserved</p>
        </div>
        <div className="flex items-center gap-3">
          <a href="https://github.com/tariqul420/tour-buddy.git">
            <FaGithub size={25} />
          </a>
          <a href="https://www.facebook.com/tariqul.islam.fb">
            <FaFacebook size={25} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
