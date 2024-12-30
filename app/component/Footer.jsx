import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#0E1424] py-10">
      <div className="container mx-auto px-4 flex flex-wrap justify-between gap-8">
        {/* Left Section */}
        <div className="w-full md:w-1/6 flex-wrap text-white opacity-80">
          <Image
            src="/images/logo.png"
            alt="Softograph Logo"
            width={150}
            height={50}
            className="mb-5"
          />
          <p className="text-sm leading-7">
            Address: House # 52 Road-04, Dhaka 1230
          </p>
          <p className="text-sm leading-7">Phone: +88 0191-032908</p>
          <p className="text-sm leading-7">
            Copyright © {new Date().getFullYear()} Softograph
          </p>
        </div>

        {/* Links Section */}
        <div className="w-full md:w-4/6 flex flex-wrap gap-10">
          {/* Offerings Column */}
          <div className="flex-1 min-w-[150px]">
            <h4 className="text-white text-lg font-semibold mb-5">Offerings</h4>
            <ul className="space-y-3">
              <li className="text-sm text-white opacity-80">Code that Knows You</li>
              <li className="text-sm text-white opacity-80">
                Unlocking Frontier Tech
              </li>
              <li className="text-sm text-white opacity-80">
                Strategies that do Wonders
              </li>
              <li className="text-sm text-white opacity-80">
                Decisions Made Easy
              </li>
            </ul>
          </div>

          {/* Solutions Column */}
          <div className="flex-1 min-w-[150px]">
            <h4 className="text-white text-lg font-semibold mb-5">Solutions</h4>
            <ul className="space-y-3">
              <li className="text-sm text-white opacity-80">Link Item Name</li>
              <li className="text-sm text-white opacity-80">Link Item Name</li>
              <li className="text-sm text-white opacity-80">Link Item Name</li>
              <li className="text-sm text-white opacity-80">Link Item Name</li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="flex-1 min-w-[150px]">
            <h4 className="text-white text-lg font-semibold mb-5">Company</h4>
            <ul className="space-y-3">
              <li className="text-sm text-white opacity-80">About Us</li>
              <li className="text-sm text-white opacity-80">Career</li>
              <li className="text-sm text-white opacity-80">Contact Us</li>
            </ul>
          </div>

          {/* Social Links Column */}
          <div className="flex-1 min-w-[150px]">
            <h4 className="text-white text-lg font-semibold mb-5">Follow Us</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 text-sm text-white hover:text-[#417FB4]"
                >
                  <Image
                    src="/images/Facebook.png"
                    alt="Facebook"
                    width={16}
                    height={16}
                  />
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 text-sm text-white hover:text-[#417FB4]"
                >
                  <Image
                    src="/images/LinkedIn.png"
                    alt="LinkedIn"
                    width={16}
                    height={16}
                  />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 text-sm text-white hover:text-[#417FB4]"
                >
                  <Image
                    src="/images/Twitter.png"
                    alt="Twitter"
                    width={16}
                    height={16}
                  />
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;