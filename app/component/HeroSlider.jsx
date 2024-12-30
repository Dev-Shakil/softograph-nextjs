
'use client';

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

const HeroSlider = ({slides, name}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  
  

  return (
    <div className="embla overflow-hidden bg-bg_color w-[80%] flex gap-4 mx-auto" ref={emblaRef}>
     
      <div className="embla__container flex gap-3 w-[95%] md:w-[80%]  mx-auto ">
        {slides.map((slide) => (
          <div key={slide.id} className="embla__slide">
            {name=="case"?<div className="case-card  mr-2">
              <div
                className="bgimg bg-cover h-full bg-center w-full flex flex-col "
                style={{ backgroundImage: `url(${slide.src})`, height: '280px' }}
              >
                <Image className="logoimg p-2 " src={slide.logo} width={180} height={50} alt="Logo" />
                <p className="text-center w-fit  bg-white px-4 py-2 text-[#417FB4] font-semibold text-lg">{slide.title}</p>
              </div>
            </div>:""}
            {name=="roadmap"?
             <div className="roadmap-card mr-2 bg-black text-white rounded-lg w-full sm:w-[500px] p-10">
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
            {name=="insights"?
             <div className="insights-card mr-2 bg-gray-300 text-white rounded-lg w-full sm:w-[380px] ">
             <div className="roadmap-icon flex ">
               <div className="flex w-full">
                 <Image 
                   src={slide.src} 
                   alt="roadmap" 
                   width={380} 
                   height={380}
                   className="rounded-t-md"
                 />
                 
               </div>
             </div>
             <div className="p-8 bg-[#D4EBFF] flex gap-3 flex-col rounded-lg">
              <p className="text-black">20 July</p>
             <h2 className="font-semibold text-black text-xl">{slide.title}</h2>
             </div>
           </div>
            :""}
             
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
