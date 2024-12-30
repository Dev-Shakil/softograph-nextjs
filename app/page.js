import BusinessMoto from "./component/BusinessMoto";
import CaseStudies from "./component/CaseStudies";
import Footer from "./component/Footer";
import HeroSection from "./component/HeroSection";
import HeroSlider from "./component/HeroSlider";
import OurOfferings from "./component/OurOfferings";
import Roadmap from "./component/Roadmap";
import Scope from "./component/Scope";

export default function Home() {
  
  const slidesforroadmap = [
    { id: 1, src: "/images/case1.png", alt: "Slide 1", title: "Title of Case Study 1", logo: "/images/logo-mini.png" },
    { id: 2, src: "/images/case2.png", alt: "Slide 2", title: "Title of Case Study 2", logo: "/images/logo-mini.png" },
    { id: 3, src: "/images/case3.png", alt: "Slide 3", title: "Title of Case Study 3", logo: "/images/logo-mini.png" },
    { id: 4, src: "/images/case1.png", alt: "Slide 2", title: "Title of Case Study 2", logo: "/images/logo-mini.png" },
    { id: 5, src: "/images/case2.png", alt: "Slide 3", title: "Title of Case Study 3", logo: "/images/logo-mini.png" },
    { id: 6, src: "/images/case3.png", alt: "Slide 2", title: "Title of Case Study 2", logo: "/images/logo-mini.png" },
    { id: 7, src: "/images/case1.png", alt: "Slide 3", title: "Title of Case Study 3", logo: "/images/logo-mini.png" },
  ];
  const slidesforinsights = [
    { id: 1, src: "/images/case1.png", alt: "Slide 1", title: "Title of Case Study 1", logo: "/images/logo-mini.png" },
    { id: 2, src: "/images/case2.png", alt: "Slide 2", title: "Title of Case Study 2", logo: "/images/logo-mini.png" },
    { id: 3, src: "/images/case3.png", alt: "Slide 3", title: "Title of Case Study 3", logo: "/images/logo-mini.png" },
    { id: 4, src: "/images/case1.png", alt: "Slide 2", title: "Title of Case Study 2", logo: "/images/logo-mini.png" },
    { id: 5, src: "/images/case2.png", alt: "Slide 3", title: "Title of Case Study 3", logo: "/images/logo-mini.png" },
    { id: 6, src: "/images/case3.png", alt: "Slide 2", title: "Title of Case Study 2", logo: "/images/logo-mini.png" },
    { id: 7, src: "/images/case1.png", alt: "Slide 3", title: "Title of Case Study 3", logo: "/images/logo-mini.png" },
  ];
  return (
    <>
      <HeroSection/>
      <BusinessMoto/>
      <CaseStudies/>

      {/* <HeroSlider/> */}
      <OurOfferings/>
      <Scope/>
      <Roadmap/>
      <Footer/>
    </>
  );
}
