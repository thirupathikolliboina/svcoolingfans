import React, { useState } from "react";
import SectionTitle from "../components/common/SectionTitle";
import { X } from "lucide-react";

const GalleryPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: "images/cfan/cfan1.jpg",

      category: "ceiling",
    },
    {
      src: "images/tfan/tfans.png",
      category: "table",
    },
    {
      src: "images/wfan/wfp1.jpeg",
      alt: "Wall Mounted Fan",
      category: "wall",
    },
    {
      src: "images/sfan/sfp2.jpeg",
      category: "stand",
    },
    {
      src: "images/efan/efp1.jpeg",
      category: "exhaust",
    },
    {
      src: "images/sfan/sfp1.jpeg",
      category: "stand",
    },
    {
      src: "images/facility3.png",
      category: "facility",
    },
    {
      src: "images/tfan/tfan1.png",
      category: "table",
    },
    {
      src: "images/cfan/cfan2.jpg",
      category: "ceiling",
    },
    {
      src: "images/sfan/sfp3.jpeg",
      category: "stand",
    },
    {
      src: "images/tfan/tfan3.png",
      category: "table",
    },
    {
      src: "images/cfan/cfan3.jpg",
      category: "ceiling",
    },
    {
      src: "images/facility1.png",
      category: "facility",
    },
    {
      src: "images/efan/efp4.jpeg",
      category: "exhaust",
    },
    {
      src: "images/wfan/wfp3.jpeg",
      category: "wall",
    },
    {
      src: "images/sfan/sfan1.png",
      category: "stand",
    },
    {
      src: "images/tfan/tfp1.jpg",
      category: "table",
    },
    {
      src: "images/cfan/cfan4.png",
      category: "ceiling",
    },
    {
      src: "images/facility.png",
      alt: "Manufacturing Facility",
      category: "facility",
    },
    {
      src: "images/wfan/wfp4.jpeg",
      category: "wall",
    },
    {
      src: "images/efan/efp2.jpeg",
      category: "exhaust",
    },
    {
      src: "images/facility2.png",
      category: "facility",
    },
    {
      src: "images/wfan/wfp2.jpeg",
      category: "wall",
    },
    {
      src: "images/efan/efp3.jpeg",
      category: "exhaust",
    },
  ];

  const [filter, setFilter] = useState<string>("all");

  const filteredImages =
    filter === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter);

  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      {/* Hero Section */}
      <section
        className="pt-32 pb-20 text-white mt-14 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/ghs.png')" }}
      >
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto bg-black bg-opacity-40 p-6 rounded-lg">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Product Gallery
            </h1>
            <p className="text-xl text-blue-100">
              See our fans in detail and get inspired for your space.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Product Showcase"
            subtitle="Browse through our collection of high-quality fans"
            centered
          />

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-full transition-all ${
                filter === "all"
                  ? "bg-primary text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}
            >
              All Products
            </button>
            <button
              onClick={() => setFilter("table")}
              className={`px-4 py-2 rounded-full transition-all ${
                filter === "table"
                  ? "bg-primary text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}
            >
              Table Fans
            </button>
            <button
              onClick={() => setFilter("ceiling")}
              className={`px-4 py-2 rounded-full transition-all ${
                filter === "ceiling"
                  ? "bg-primary text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}
            >
              Ceiling Fans
            </button>
            <button
              onClick={() => setFilter("wall")}
              className={`px-4 py-2 rounded-full transition-all ${
                filter === "wall"
                  ? "bg-primary text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}
            >
              Wall Fans
            </button>
            <button
              onClick={() => setFilter("stand")}
              className={`px-4 py-2 rounded-full transition-all ${
                filter === "stand"
                  ? "bg-primary text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}
            >
              Stand Fans
            </button>
            <button
              onClick={() => setFilter("exhaust")}
              className={`px-4 py-2 rounded-full transition-all ${
                filter === "exhaust"
                  ? "bg-primary text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}
            >
              Exhaust Fans
            </button>
            <button
              onClick={() => setFilter("facility")}
              className={`px-4 py-2 rounded-full transition-all ${
                filter === "facility"
                  ? "bg-primary text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}
            >
              Our Facility
            </button>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-md cursor-pointer group"
                onClick={() => openLightbox(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-4">
                    <p className="font-medium">{image.alt}</p>
                    <p className="text-sm mt-2">Click to enlarge</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox */}
          {selectedImage && (
            <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
              <button
                onClick={closeLightbox}
                className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors"
                aria-label="Close lightbox"
              >
                <X size={30} />
              </button>

              <div className="max-w-4xl max-h-[90vh]">
                <img
                  src={selectedImage}
                  alt="Enlarged view"
                  className="max-w-full max-h-[90vh] object-contain"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 360 Animation */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <SectionTitle
            title="Product Animations"
            subtitle="See our fans in action with interactive 360° views"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Table Fan Video Display */}
            <div>
              <video
                src="public/images/Ani.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto rounded-lg"
              />
              <h3 className="text-center mt-4 text-lg font-medium">
                Premium Table Fan
              </h3>
            </div>

            {/* Ceiling Fan Static Image */}
            <div>
              <video
                src="public/images/Ani1.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto rounded-lg"
              />
              <h3 className="text-center mt-4 text-lg font-medium">
                Royal Elegance Ceiling Fan
              </h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GalleryPage;
