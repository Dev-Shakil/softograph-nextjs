//  'use client'
//  import Image from "next/image";
//  import { useState } from "react";
//  import { IoCloseSharp } from "react-icons/io5";

//  const HeroSection = () => {
//    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//    const toggleMobileMenu = () => {
//      setMobileMenuOpen(!mobileMenuOpen);
//    };

//    return (
//      <div className="relative w-full h-[90vh] bg-[#0E1424]">
//        {/* Blob Section */}
//        {/* <div className="absolute inset-0 z-0 filter blur-[100px]">
//          <div className="absolute inset-0 mx-auto w-full h-full bg-gradient-conic from-blue-500 via-red-500 to-green-400 animate-spin rounded-full" />
//        </div> */}

//        {/* Header Section */}
//        <header id="canvas" className="relative flex flex-col justify-between h-full z-10 bg-black/20 text-white shadow-lg">
//          <nav className="container px-5 md:px-0 md:mx-auto flex justify-between items-center py-4">
//            <div className="flex items-center gap-5">
//              <Image
//                src="/images/Logo.png"
//                alt="softograph_logo"
//                width={220}
//                height={200}
//                className="object-contain  mr-3"
//              />

//              <ul className="hidden md:flex gap-6 text-md opacity-80">
//                <li className="relative group cursor-pointer transition-transform duration-500 ease-in-out">
//                  Offerings
//                  <ul className="absolute left-0 transition-all hidden group-hover:block bg-gray-800 text-white shadow-lg rounded w-[220px]">
//                    <li className="px-4 py-2 hover:bg-blue-600">Code That Knows You</li>
//                    <li className="px-4 py-2 hover:bg-blue-600">Unlocking Frontier Tech</li>
//                    <li className="px-4 py-2 hover:bg-blue-600">Strategies That Do Wonders</li>
//                    <li className="px-4 py-2 hover:bg-blue-600">Decisions Made Easy</li>
//                  </ul>
//                </li>
//                <li>Solutions</li>
//                <li>Partners</li>
//                <li>Insights</li>
//                <li>Career</li>
//              </ul>
//            </div>

//            <div className="flex items-center gap-2">
//              <button className="px-4 py-2 md:px-4 md:py-2 md:text-sm text-xs text-white border border-white rounded hover:bg-white hover:text-black transition">
//                GET STARTED
//              </button>
//              <button
//                className="block md:hidden p-2 text-white"
//                onClick={toggleMobileMenu}
//              >
//                <svg
//                  xmlns="http:www.w3.org/2000/svg"
//                  height="24"
//                  width="24"
//                  fill="currentColor"
//                >
//                  <path d="M4 18h16v-2H4v2zm0-5h16v-2H4v2zm0-7v2h16V6H4z" />
//                </svg>
//              </button>
//            </div>
//          </nav>

//          {/* Mobile Menu */}
//          {mobileMenuOpen && (
//            <div className="fixed inset-0 md:hidden bg-black/60 backdrop-blur-md z-20">
//              <button
//                className="absolute top-4 right-4 p-2 text-white border-2 border-white"
//                onClick={toggleMobileMenu}
//              >
//                <IoCloseSharp />
//              </button>
//              <ul className="flex flex-col items-center justify-center h-full text-white text-lg gap-4">
//                <li className="relative group cursor-pointer">
//                  Offerings
//                  <ul className="absolute w-[220px] hidden group-hover:block bg-gray-800 text-white shadow-lg rounded">
//                    <li className="px-4 py-2 hover:bg-blue-600">Code That Knows You</li>
//                    <li className="px-4 py-2 hover:bg-blue-600">Unlocking Frontier Tech</li>
//                    <li className="px-4 py-2 hover:bg-blue-600">Strategies That Do Wonders</li>
//                    <li className="px-4 py-2 hover:bg-blue-600">Decisions Made Easy</li>
//                  </ul>
//                </li>
//                <li>Solutions</li>
//                <li>Partners</li>
//                <li>Insights</li>
//                <li>Career</li>
//              </ul>
//            </div>
//          )}

//          <div className="container px-5 md:px-0 md:mx-auto">
//            <h3 className="text-lg opacity-80 font-light">We Are Softograph</h3>
//            <h2 className="md:text-6xl text-4xl font-light mt-2">
//              Innovation through <br /> Intelligent Solutions
//            </h2>
//          </div>

//          <div className="container px-5 md:px-0 md:mx-auto">
//            <h2 className="text-lg mb-4">
//              Trusted by data teams at world-leading companies
//            </h2>
//            <div className="flex flex-wrap mb-5 gap-6">
//              <Image src="/images/msa.png" alt="ms-azure" width={80} height={25} className=" h-[25px]" />
//              <Image src="/images/aws.png" alt="aws" width={80} height={25} className=" h-[25px]"  />
//              <Image src="/images/google_cloud.png" alt="google cloud" width={80} height={25} className=" h-[25px]"  />
//              <Image src="/images/accenture.png" alt="accenture" width={80} height={25} className=" h-[25px]"  />
//            </div>
//          </div>
//        </header>
//      </div>
//    );
//  };

//  export default HeroSection;

'use client';
import Image from "next/image";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

const HeroSection = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="relative w-full h-screen bg-bg_color overflow-hidden">
      
      <div className="relative w-full h-[90vh] bg-bg_color">
       
       <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-white text-xl">
       <header id="canvas" className="relative z-10 flex flex-col justify-between h-[90vh] w-full bg-opacity-75 backdrop-blur-3xl">
         <nav className="container px-5 md:px-0 md:mx-auto flex justify-between items-center py-4">
           <div className="flex items-center gap-5">
             <Image
               src="/images/Logo.png"
               alt="softograph_logo"
               width={220}
               height={200}
               className="object-contain  mr-3"
             />

             <ul className="hidden md:flex gap-6 text-md opacity-80">
               <li className="relative group cursor-pointer transition-transform duration-500 ease-in-out">
                 Offerings
                 <ul className="absolute left-0 transition-all hidden group-hover:block bg-gray-800 text-white shadow-lg rounded w-[220px]">
                   <li className="px-4 py-2 hover:bg-blue-600">Code That Knows You</li>
                   <li className="px-4 py-2 hover:bg-blue-600">Unlocking Frontier Tech</li>
                   <li className="px-4 py-2 hover:bg-blue-600">Strategies That Do Wonders</li>
                   <li className="px-4 py-2 hover:bg-blue-600">Decisions Made Easy</li>
                 </ul>
               </li>
               <li>Solutions</li>
               <li>Partners</li>
               <li>Insights</li>
               <li>Career</li>
             </ul>
           </div>

           <div className="flex items-center gap-2">
             <button className="px-4 py-2 md:px-4 md:py-2 md:text-sm text-xs text-white border border-white rounded hover:bg-white hover:text-black transition">
               GET STARTED
             </button>
             <button
               className="block md:hidden p-2 text-white"
               onClick={toggleMobileMenu}
             >
               <svg
                 xmlns="http:www.w3.org/2000/svg"
                 height="24"
                 width="24"
                 fill="currentColor"
               >
                 <path d="M4 18h16v-2H4v2zm0-5h16v-2H4v2zm0-7v2h16V6H4z" />
               </svg>
             </button>
           </div>
         </nav>

         {/* Mobile Menu */}
         {mobileMenuOpen && (
           <div className="fixed inset-0 md:hidden bg-black/60 backdrop-blur-md z-20">
             <button
               className="absolute top-4 right-4 p-2 text-white border-2 border-white"
               onClick={toggleMobileMenu}
             >
               <IoCloseSharp />
             </button>
             <ul className="flex flex-col items-center justify-center h-full text-white text-lg gap-4">
               <li className="relative group cursor-pointer">
                 Offerings
                 <ul className="absolute w-[220px] hidden group-hover:block bg-gray-800 text-white shadow-lg rounded">
                   <li className="px-4 py-2 hover:bg-blue-600">Code That Knows You</li>
                   <li className="px-4 py-2 hover:bg-blue-600">Unlocking Frontier Tech</li>
                   <li className="px-4 py-2 hover:bg-blue-600">Strategies That Do Wonders</li>
                   <li className="px-4 py-2 hover:bg-blue-600">Decisions Made Easy</li>
                 </ul>
               </li>
               <li>Solutions</li>
               <li>Partners</li>
               <li>Insights</li>
               <li>Career</li>
             </ul>
           </div>
         )}

         <div className="container px-5 md:px-0 md:mx-auto">
           <h3 className="text-lg opacity-80 font-light">We Are Softograph</h3>
           <h2 className="md:text-6xl text-4xl font-light mt-2">
             Innovation through <br /> Intelligent Solutions
           </h2>
         </div>

         <div className="container px-5 md:px-0 md:mx-auto">
           <h2 className="text-lg mb-4">
             Trusted by data teams at world-leading companies
           </h2>
           <div className="flex flex-wrap mb-5 gap-6">
             <Image src="/images/msa.png" alt="ms-azure" width={80} height={25} className=" h-[25px]" />
             <Image src="/images/aws.png" alt="aws" width={80} height={25} className=" h-[25px]"  />
             <Image src="/images/google_cloud.png" alt="google cloud" width={80} height={25} className=" h-[25px]"  />
             <Image src="/images/accenture.png" alt="accenture" width={80} height={25} className=" h-[25px]"  />
           </div>
         </div>
       </header>
       </div>
     </div>
      {/* Blob Animation */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-[100vw] h-[90vh] rounded-full overflow-hidden bg-gray-800 scale-[0.6]">
          <div className="absolute inset-0 w-full h-full animate-spinBlob bg-[conic-gradient(from_0deg,_#08f,_#f60,_#bbffa1,_#4c00ff,_#ab2666)]"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
