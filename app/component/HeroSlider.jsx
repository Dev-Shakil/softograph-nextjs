
'use client';

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

const HeroSlider = ({slides, name}) => {
  const [emblaRef] = useEmblaCarousel({ loop: false});

  

  return (
    <div className="embla overflow-hidden bg-bg_color " ref={emblaRef}>
      <div className="embla__container flex gap-3 w-[95%] md:w-[80%]  mx-auto ">
        {slides.map((slide) => (
          <div key={slide.id} className="embla__slide ">
            {name=="case"?<div className="case-card  ">
              <div
                className="bgimg bg-cover h-full bg-center w-full flex flex-col "
                style={{ backgroundImage: `url(${slide.src})`, height: '280px' }}
              >
                <Image className="logoimg p-2 " src={slide.logo} width={180} height={50} alt="Logo" />
                <p className="text-center w-fit  bg-white px-4 py-2 text-[#417FB4] font-semibold text-lg">{slide.title}</p>
              </div>
            </div>:""}
            {name=="roadmap"?
             <div className="roadmap-card bg-black text-white rounded-lg w-full sm:w-[380px] p-10">
             <div className="roadmap-icon flex justify-between items-center">
               <div className="flex w-full items-center justify-between">
                 <Image 
                   src={slide.src} 
                   alt="roadmap" 
                   width={80} 
                   height={80}
                 />
                 <span className="ml-2 text-[#ED6D51] text-lg font-normal">{slide.id}</span>
               </div>
             </div>
             <h2 className="font-normal text-2xl mt-4">{slide.title}</h2>
             <p className="font-normal text-sm opacity-70 mt-2 leading-7">
               {slide.desc}
             </p>
           </div>
            :""}
             
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
