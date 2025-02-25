import Image from 'next/image';

// Hardcoding the image paths (for now, as dynamic importing is tricky on the client-side).
const iconImages = [
  '/icons/visa.png',
  '/icons/master_card.jpg',
  '/icons/american_express.png',
  '/icons/UnionPay.png',
  '/icons/dbbl_nexus.png',
  '/icons/q_cash.jpeg',
  '/icons/bkash.jpeg',
  '/icons/nagad.png',
  '/icons/rocket.png',
  '/icons/upay.png',
  '/icons/sure_cash.jpeg',
  '/icons/islami_bank.jpeg',
  '/icons/my_cash.png',
  '/icons/fast_cash.jpeg',
  '/icons/city_touch.png',
  '/icons/brac_bank.png',
  '/icons/bank_asia.png',
  '/icons/ab_pay.png',
  '/icons/mtb_pay.png',
  '/icons/southeast_bank.png',
  '/icons/fsib_bank.png',
  '/icons/modhumoti_bank.jpeg',
  '/icons/ok_wallet.png',
  '/icons/d_money.png',
  '/icons/southeast_bank.png',
  '/icons/i_pay.png',
];

const paymentMethod = ['Bkash', 'Nagad', 'UPAY', 'VISA', 'Master Card', 'Others'];

const page = () => {
  return (
    <section className="w-10/12 mx-auto my-8">
      <h2 className="text-2xl font-medium">Payment</h2>

      {/* payment method section */}
      <section className="grid grid-cols-12 mt-6 items-center justify-between gap-20">
        <div className="col-span-8">
          <h2 className="text-3xl font-medium">Choose Payment Method</h2>

          <div className="flex flex-col gap-4 mt-4">
            <label className="font-medium">
              Name: <span className="text-red-500">*</span>
            </label>
            <input type="text" placeholder="Tariqul Islam" required className="border-none p-3 w-full bg-gray-100" />

            <label className="font-medium">
              Transaction Id: <span className="text-red-500">*</span>
            </label>
            <input type="text" placeholder="********" required className="border-none p-3 w-full bg-gray-100" />

            <label className="font-medium">
              Phone Number: <span className="text-red-500">*</span>
            </label>
            <input type="tel" placeholder="01743****58" required className="border-none p-3 w-full bg-gray-100" />

            <label className="font-medium">
              Pin Code: <span className="text-red-500">*</span>
            </label>
            <input type="number" placeholder="******" required className="border-none p-3 w-full bg-gray-100" />
          </div>
        </div>
        <div className="col-span-4">
          <Image src={'/payment-method.avif'} alt="payment method" width={300} height={300} className="rounded-3xl  border border-black" />
        </div>
      </section>

      {/* select method section */}
      <section className="space-y-4 mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">Select Payment Method</h2>
        <div className="flex justify-between flex-wrap gap-4">
          {paymentMethod?.map((payment, index) => (
            <button
              key={index}
              className="flex items-center space-x-2 bg-[#37B1E2] text-white rounded-full px-6 py-3 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#2a91b8] focus:outline-none"
            >
              <span className="w-4 h-4 rounded-full bg-white"></span>
              <span className="font-medium">{payment}</span>
            </button>
          ))}
        </div>

        <button className="bg-[#13253F] text-white rounded-full px-8 py-4 block mx-auto mt-4 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#0a1e33] focus:outline-none">
          Confirm Payment
        </button>
      </section>

      {/* payment icons section */}
      <section className="flex flex-wrap w-11/12 mx-auto gap-4 mt-4">
        {iconImages.map((icon, index) => (
          <div key={index} className="w-24 h-24">
            <Image src={icon} alt={`payment icon ${index + 1}`} width={100} height={100} className="rounded-lg border object-cover shadow-md w-full h-full" />
          </div>
        ))}
      </section>
    </section>
  );
};

export default page;
