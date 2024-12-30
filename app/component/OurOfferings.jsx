import Image from 'next/image';

const OurOfferings = () => {
  return (
    <section
      className="our-offerings bg-no-repeat bg-cover relative h-[600px] md:h-[715px] flex flex-col "
      style={{ backgroundImage: `url('/images/bg-offer.png')` }}
    >
      <div className="header mb-5 flex w-[100%] md:w-[90%] mx-auto mt-10">
        <span className=" writing-mode-vertical-rl h-[30px] text-orientation-mixed -rotate-90 text-[#a3b8cc] text-sm md:text-md border-b-2 border-white mt-10 leading-[1.5]">
          Our Offerings
        </span>
        <h1 className="text-white text-3xl md:text-5xl font-light leading-[55px] p-0 m-0">
          Code That<br /> Knows You
        </h1>
      </div>
      <div className="container px-5 md:px-0 md:mx-auto flex flex-col mt-8">
        <p className="subtitle text-white opacity-80 text-lg">
          Intelligent Code, Seamless Integration
        </p>
        <div className="offering flex mt-10 flex-col lg:flex-row items-center justify-between md:w-[70%] w-[100%] gap-8 mx-auto">
          <div className="offer_desc text-white opacity-80 leading-7 lg:text-left">
            Experience the synergy of bespoke software solutions and seamless integration.
            Intelligent code crafted to adapt to unique needs, ensuring efficiency and
            innovation at every turn.
          </div>
          <div className="w-full lg:w-auto">
            <Image
              src="/images/frames.png"
              width={1000}
              height={800}
              alt="Images"
              className="md:w-[1000px] w-[400px] md:h-[450px] object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default OurOfferings;