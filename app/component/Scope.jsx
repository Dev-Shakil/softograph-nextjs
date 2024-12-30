import Image from 'next/image'
import React from 'react'

const Scope = () => {
  return (
    <section
          className=" bg-[#0A101C]"
        >
          <div className="header mb-5 flex w-[100%]  md:w-[90%] mx-auto pt-10">
            <span className=" writing-mode-vertical-rl h-[30px] text-orientation-mixed -rotate-90 text-[#a3b8cc] text-sm md:text-md border-b-2 border-white mt-10 leading-[1.5]">
              360 Scope
            </span>
            <h1 className="text-white text-3xl md:text-5xl font-light leading-[55px] p-0 m-0">
            Designed For You To Get<br /> More Simple
            </h1>
          </div>
          <div className="container px-5 md:px-0 md:mx-auto flex flex-col mt-8">
           
            <div className="offering flex my-10 flex-col lg:flex-row items-center justify-between md:w-[70%] w-[100%] gap-8 mx-auto">
              
                <Image
                  src="/images/Diagram.png"
                  width={1000}
                  height={800}
                  alt="Images"
                  className="md:w-[1000px] w-[400px] md:h-[450px] object-contain"
                  priority
                />
            </div>
          </div>
        </section>
  )
}

export default Scope