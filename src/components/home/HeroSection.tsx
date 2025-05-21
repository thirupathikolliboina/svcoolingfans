import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const HeroSection: React.FC = () => {
  const marqueeImages = ["h.png", "h1.png", "h2.png", "h3.webp"];

  return (
    <section className="relative min-h-screen text-white overflow-hidden mt-14">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/images/hbg.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Optional overlay for better text contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-30 z-0"></div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-screen">
          {/* Left content */}
          <div className="lg:col-span-7 space-y-6 fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Keeping India Cool with Innovation
            </h1>
            <p className="text-xl md:text-2xl text-white mt-6">
              Premium quality fans for home and industry with cutting-edge
              technology and elegant design.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to="/products"
                className="btn bg-white text-primary hover:bg-gray-100 shadow-md"
              >
                Explore Our Fans
                <ChevronRight className="ml-2 inline-block" size={18} />
              </Link>
              <Link
                to="/contact"
                className="btn border-2 border-white text-white hover:bg-white hover:text-primary"
              >
                Request a Quote
              </Link>
            </div>
          </div>

          {/* Right marquee animation */}
          {/* <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative h-[600px] overflow-hidden">
              <div className="animate-marquee-vertical space-y-12">
                {marqueeImages.map((img, index) => (
                  <img
                    key={index}
                    src={`/images/${img}`}
                    alt={`Fan ${index}`}
                    className="w-[400px] h-auto object-contain opacity-90"
                  />
                ))}
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
