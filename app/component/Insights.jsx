"use client"

import HeroSlider from "./HeroSlider";

export default function Insights() {

  const slides = [
    { id: 1, src: "/images/insights/insights1.png", alt: "Slide 1", title: "Business Process Analysis",  },
    { id: 2, src: "/images/insights/insights2.png", alt: "Slide 2", title: "Requirement Analysis",  },
    { id: 3, src: "/images/insights/insights3.png", alt: "Slide 3", title: "User Experience Design", },
    { id: 4, src: "/images/insights/insights1.png", alt: "Slide 2", title: "Solution Design", },
    { id: 5, src: "/images/insights/insights2.png", alt: "Slide 2", title: "Solution Design", },
    
  ];

  return (
    <section className=" py-12 bg-bg_color relative">
      <div className="header mb-5 flex w-[100%] md:w-[90%] mx-auto mt-10">
        <span className=" writing-mode-vertical-rl h-[30px] text-orientation-mixed -rotate-90 text-[#a3b8cc] text-sm md:text-md border-b-2 border-white mt-10 leading-[1.5]">
          Insights
        </span>
        <h1 className="text-white text-3xl md:text-5xl font-light leading-[55px] p-0 m-0">
          Insights &<br /> Perspectives
        </h1>
      </div>

     
      <div className=""><HeroSlider slides={slides} name="insights"/></div>
      
    </section>
  );
}