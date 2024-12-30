"use client"

import HeroSlider from "./HeroSlider";

export default function Roadmap() {

  const slidesforroadmap = [
    { id: 1, src: "/images/blueprint/icon_business-process.png", alt: "Slide 1", title: "Business Process Analysis", desc: "Our process starts with an in-depth understanding of your business practices." },
    { id: 2, src: "/images/blueprint/icon_requirement.png", alt: "Slide 2", title: "Requirement Analysis", desc: "Based on business requirements, a thorough technical analysis is conducted." },
    { id: 3, src: "/images/blueprint/icon_ux.png", alt: "Slide 3", title: "User Experience Design", desc: "User behaviour is heavily considered for designing a winning user experience." },
    { id: 4, src: "/images/blueprint/icon_business-process.png", alt: "Slide 2", title: "Solution Design", desc: "The overall solution is designed by revolving around users and business process." },
    
  ];

  return (
    <section className=" py-12 bg-bg_color relative">
      <div className="header mb-5 flex w-[100%] md:w-[90%] mx-auto mt-10">
        <span className=" writing-mode-vertical-rl h-[30px] text-orientation-mixed -rotate-90 text-[#a3b8cc] text-sm md:text-md border-b-2 border-white mt-10 leading-[1.5]">
          Roadmap
        </span>
        <h1 className="text-white text-3xl md:text-5xl font-light leading-[55px] p-0 m-0">
          Blueprint To<br /> Success
        </h1>
      </div>

      <div className="slider-buttons absolute top-[80px] transform -translate-y-1/2 right-[180px] flex gap-4">
        <button
          className="slider-btn text-white text-4xl"
          onClick={() => scrollSlider("left")}
        >
          &#8249;
        </button>
        <button
          className="slider-btn text-white text-4xl"
          onClick={() => scrollSlider("right")}
        >
          &#8250;
        </button>
      </div>
      <div className=""><HeroSlider slides={slidesforroadmap} name="roadmap"/></div>
      
    </section>
  );
}