"use client"

import HeroSlider from "./HeroSlider";

export default function CaseStudies() {

  const slidesforcase = [
    { id: 1, src: "/images/case1.png", alt: "Slide 1", title: "Title of Case Study 1", logo: "/images/logo-mini.png" },
    { id: 2, src: "/images/case2.png", alt: "Slide 2", title: "Title of Case Study 2", logo: "/images/logo-mini.png" },
    { id: 3, src: "/images/case3.png", alt: "Slide 3", title: "Title of Case Study 3", logo: "/images/logo-mini.png" },
    { id: 4, src: "/images/case1.png", alt: "Slide 2", title: "Title of Case Study 2", logo: "/images/logo-mini.png" },
    { id: 5, src: "/images/case2.png", alt: "Slide 3", title: "Title of Case Study 3", logo: "/images/logo-mini.png" },
    { id: 6, src: "/images/case3.png", alt: "Slide 2", title: "Title of Case Study 2", logo: "/images/logo-mini.png" },
    { id: 7, src: "/images/case1.png", alt: "Slide 3", title: "Title of Case Study 3", logo: "/images/logo-mini.png" },
  ];

  return (
    <section className=" py-12 bg-bg_color relative">
      <div className="header mb-5 flex w-[100%] md:w-[90%] mx-auto mt-10">
        <span className=" writing-mode-vertical-rl h-[30px] text-orientation-mixed -rotate-90 text-[#a3b8cc] text-sm md:text-md border-b-2 border-white mt-10 leading-[1.5]">
          Case Studies
        </span>
        <h1 className="text-white text-3xl md:text-5xl font-light leading-[55px] p-0 m-0">
          Impact Driven<br /> Narratives
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
      <div className=""><HeroSlider slides={slidesforcase} name="case"/></div>
      
    </section>
  );
}