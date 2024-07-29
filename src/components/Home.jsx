import ToolCards from "./ToolCards";

const Home = () => {
  return (
    <div className="bg-[#f5f5fa] lg:mt-[4%] sm:mt-[8%] md:mt-[6%] z-0 mt-[13%] px-[2%] py-[30px]">
      <div className="text-center ">
        <h1 className="md:text-[42px] sm:text-[24px] font-bold text-[#33333B] mb-1">
          Every tool you need to work with PDFs in one place
        </h1>
        <p className="lg:text-[22px] md:text-[20px] sm:text-[16px] text-[#47474f] mb-7 lg:mx-[13%] sm:mx-[6%] px-4">
          Every tool you need to use PDFs, at your fingertips. All are 100% FREE
          and easy to use! Merge, split, compress, convert, rotate, unlock and
          watermark PDFs with just a few clicks.
        </p>
      </div>

      <ToolCards />
    </div>
  );
};

export default Home;
