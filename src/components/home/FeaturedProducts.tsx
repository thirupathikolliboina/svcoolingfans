import React, { useState } from "react";
import { ArrowRight, Fan } from "lucide-react";
import SectionTitle from "../common/SectionTitle";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const FeaturedProducts: React.FC = () => {
  const [activeTab, setActiveTab] = useState("table");

  const productTypes = [
    { id: "table", label: "Table Fans" },
    { id: "ceiling", label: "Ceiling Fans" },
    { id: "wall", label: "Wall Fans" },
    { id: "pedestal", label: "Pedestal Fans" },
  ];

  const getProductImages = (type: string): string[] => {
    switch (type) {
      case "table":
        return [
          "/images/tfan/tfans.png",
          "/images/tfan/tfan1.png",
          "/images/tfan/tfan2.png",
        ];
      case "ceiling":
        return ["/images/cfan/cfp1.jpeg", "/images/cfan/cfp2.jpeg"];
      case "wall":
        return [
          "/images/wfan/wfp1.jpeg",
          "/images/wfan/wfp2.jpeg",
          "/images/wfan/wfp3.jpeg",
          "/images/wfan/wfp4.jpeg",
        ];
      case "pedestal":
        return [
          "images/sfan/sfp1.jpeg",
          "images/sfan/sfp2.jpeg",
          "images/sfan/sfp3.jpeg",
        ];
      default:
        return [];
    }
  };

  const getProductFeatures = (type: string) => {
    switch (type) {
      case "table":
        return [
          "Plastic Body with Unique Design",
          "Improved Performance at Low Voltage",
          "Wide Speed Control Panel",
          "Excellent & Long Lasting Finish",
          "Noiseless Performance",
        ];
      case "ceiling":
        return [
          "Available in Multiple Colors",
          "1200 mm Sweep",
          "400±10 Speed",
          "72W±10 Power Input",
          "220 Air Delivery",
        ];
      case "wall":
        return [
          "Adjustable Tilt Angle",
          "Wide Oscillation Range",
          "Multiple Speed Settings",
          "Easy Installation",
          "Durable Construction",
        ];
      case "pedestal":
        return [
          "Height Adjustable Stand",
          "Wide Speed Control Panel",
          "Oscillation Through Synchronize Motor",
          "Excellent & Long Lasting Finish",
          "Noiseless Performance",
        ];
      default:
        return [];
    }
  };

  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <SectionTitle
          title="Our Featured Products"
          subtitle="Discover our range of high-quality fans designed for comfort and efficiency"
          centered
        />

        {/* Tab Buttons */}
        <div className="mb-10">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {productTypes.map((type) => (
              <button
                key={type.id}
                className={`px-4 py-2 md:px-6 md:py-3 rounded-full transition-all ${
                  activeTab === type.id
                    ? "bg-primary text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => setActiveTab(type.id)}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="order-2 md:order-1">
            <h3 className="heading-md mb-4">
              {productTypes.find((p) => p.id === activeTab)?.label}
            </h3>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 mb-4">
                {
                  {
                    table:
                      "Our table fans combine sleek design with powerful performance. Perfect for desks, bedside tables, and compact spaces.",
                    ceiling:
                      "Elegant ceiling fans that enhance your decor while providing efficient air circulation throughout the room.",
                    wall: "Space-saving wall fans that deliver powerful airflow without taking up floor or table space.",
                    pedestal:
                      "Versatile pedestal fans with adjustable height and powerful motors for maximum comfort.",
                  }[activeTab]
                }
              </p>

              <h4 className="font-semibold text-gray-800 mb-3">
                Key Features:
              </h4>
              <ul className="space-y-2 mb-6">
                {getProductFeatures(activeTab).map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to={`/products#${activeTab}-fans`}
                className="flex items-center text-primary font-medium hover:underline"
              >
                View All {productTypes.find((p) => p.id === activeTab)?.label}
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>

          {/* Right Carousel */}
          <div className="order-1 md:order-2 relative">
            <div className="">
              <Carousel
                autoPlay
                infiniteLoop
                showThumbs={false}
                showStatus={false}
                showIndicators={false}
                interval={4000}
                className="rounded-md"
              >
                {getProductImages(activeTab).map((img, idx) => (
                  <div key={idx}>
                    <img
                      src={img}
                      alt={`${activeTab}-fan-${idx}`}
                      className="h-72 object-contain rounded-xl transition-transform duration-500 hover:scale-105 border-2 border-gray-200"
                    />
                  </div>
                ))}
              </Carousel>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {/* <div className="bg-primary bg-opacity-80 rounded-full p-6">
                  <Fan size={60} className="text-white animate-spin-slow" />
                </div> */}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link to="/products" className="btn btn-primary">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
