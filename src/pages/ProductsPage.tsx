import React from "react";
import SectionTitle from "../components/common/SectionTitle";
import ProductCard from "../components/common/ProductCard";

const ProductsPage: React.FC = () => {
  const tableFans = [
    {
      // title: "RK1005 Table Fan",
      // description:
      //   "Plastic body table fan with unique design and improved performance at low voltage",
      imageUrl: "public/images/tfan/tfan1.png",
      features: [
        "Plastic Body with Unique Design",
        "Improved Performance at Low Voltage",
        "Wide Speed Control Panel",
        "Excellent & Long Lasting Finish",
        "Noiseless Performance",
        "Oscillation Through Synchronize Motor",
      ],
      specs: {
        sweep: "400 mm",
        speed: "2000±5%",
        powerInput: "110W±10",
        airDelivery: "85",
      },
    },
    {
      // title: "RK1006 Table Fan",
      // description:
      //   "Premium blue table fan with enhanced air delivery and modern design",
      imageUrl: "images/tfan/tfan2.png",
      features: [
        "Modern Blue Design",
        "Wide Speed Control Panel",
        "Excellent & Long Lasting Finish",
        "Noiseless Performance",
        "Oscillation Through Synchronize Motor",
      ],
    },
    {
      // title: "RK1007 Table Fan",
      // description:
      //   "Sleek black table fan with premium finish and powerful performance",
      imageUrl: "images/tfan/tfan1.png",
      features: [
        "Premium Black Finish",
        "Enhanced Air Delivery",
        "Wide Speed Control Panel",
        "Noiseless Performance",
        "Durable Construction",
      ],
    },
  ];

  const ceilingFans = [
    {
      // title: "RK1013 Ceiling Fan",
      // description:
      //   "Premium ceiling fan available in Rose Pink, Gold, Brown, and Pearl White",
      imageUrl: "images/cfan/pcf1.jpg",
      features: [
        "Available in Rose Pink, Gold, Brown, Pearl White",
        "1200 mm Sweep",
        "400±10 Speed",
        "72W±10 Power Input",
        "220 Air Delivery",
        "Hi-Speed Technology",
      ],
    },
    {
      // title: "RK1014 Ceiling Fan",
      // description:
      //   "Elegant ceiling fan with Matt Black, Gold, and Pearl White options",
      imageUrl: "images/cfan/pcf2.webp",
      features: [
        "Available in Matt Black, Gold, Pearl White",
        "Premium Finish",
        "Energy Efficient Design",
        "Smooth Operation",
        "Enhanced Air Circulation",
      ],
    },
    {
      // title: "RK1016 Ceiling Fan",
      // description:
      //   "Modern ceiling fan with unique color options including Midnight Blue",
      imageUrl: "images/cfan/pcf3.avif",
      features: [
        "Available in Gold, Rainbow Ivory, Coffee Brown, Midnight Blue, Slate Grey",
        "Contemporary Design",
        "Superior Air Flow",
        "Silent Operation",
        "Durable Construction",
      ],
    },
  ];

  const wallFans = [
    {
      // title: "RK1010 Wall Fan",
      // description: "Classic wall mounted fan with adjustable settings",
      imageUrl: "images/wfan/wfp1.jpeg",
      features: [
        "Adjustable Tilt Angle",
        "Wide Oscillation Range",
        "Multiple Speed Settings",
        "Easy Installation",
        "Durable Construction",
      ],
    },
    {
      // title: "RK1011 Wall Fan",
      // description: "Premium blue wall fan with enhanced features",
      imageUrl: "images/wfan/wfp3.jpeg",
      features: [
        "Stylish Blue Design",
        "Powerful Air Flow",
        "Wide Coverage Area",
        "Silent Operation",
        "Quality Build",
      ],
    },
    {
      // title: "RK1012 Wall Fan",
      // description: "Modern red wall fan with advanced features",
      imageUrl: "images/wfan/wfp2.jpeg",
      features: [
        "Distinctive Red Color",
        "Enhanced Air Delivery",
        "Multiple Speed Options",
        "Easy Mount System",
        "Premium Finish",
      ],
    },
  ];

  const pedestalFans = [
    {
      // title: "RK1001 Pedestal Fan",
      // description:
      //   "Premium pedestal fan with red accents and advanced features",
      imageUrl: "/images/sfan/sfan1.png",
      features: [
        "Plastic Body with Unique Design",
        "Improved Performance at Low Voltage",
        "Wide Speed Control Panel",
        "Excellent & Long Lasting Finish",
        "Noiseless Performance",
        "Oscillation Through Synchronize Motor",
      ],
      specs: {
        sweep: "400 mm",
        speed: "2000±5%",
        powerInput: "110W±10",
        airDelivery: "85",
      },
    },
    {
      // title: "RK1002 Pedestal Fan",
      // description: "Elegant white pedestal fan with modern design",
      imageUrl: "/images/sfan/sfp1.jpeg",
      features: [
        "Sleek White Design",
        "Height Adjustable Stand",
        "Wide Speed Control Panel",
        "Premium Build Quality",
        "Enhanced Air Flow",
      ],
    },
    {
      // title: "RK1004 Pedestal Fan",
      // description: "Modern pedestal fan with green accents",
      imageUrl: "/images/sfan/sfp2.jpeg",
      features: [
        "Unique Green Accent Design",
        "Digital Control Panel",
        "Height Adjustable",
        "Superior Air Delivery",
        "Energy Efficient",
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className="bg-no-repeat bg-center bg-contain text-white mt-14"
        style={{
          backgroundImage: "url('/images/phs.png')",
          aspectRatio: "16 / 9",
          minHeight: "400px", // adjust as needed
        }}
      >
        <div className="container-custom h-full flex items-center justify-center">
          <div className="text-center max-w-3xl mx-auto bg-black bg-opacity-50 p-8 rounded">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Products
            </h1>
            <p className="text-xl text-blue-100">
              Discover our comprehensive range of fans designed for every need.
            </p>
          </div>
        </div>
      </section>

      {/* Table Fans */}
      <section id="table-fans" className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Table Fans"
            subtitle="Compact and versatile cooling solutions for your desk or table"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tableFans.map((fan, index) => (
              <ProductCard key={`table-${index}`} {...fan} />
            ))}
          </div>
        </div>
      </section>

      {/* Ceiling Fans */}
      <section id="ceiling-fans" className="section-padding bg-secondary">
        <div className="container-custom">
          <SectionTitle
            title="Ceiling Fans"
            subtitle="Elegant designs with powerful air circulation for homes and offices"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ceilingFans.map((fan, index) => (
              <ProductCard key={`ceiling-${index}`} {...fan} />
            ))}
          </div>
        </div>
      </section>

      {/* Wall Fans */}
      <section id="wall-fans" className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Wall Fans"
            subtitle="Space-saving solutions with powerful airflow performance"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wallFans.map((fan, index) => (
              <ProductCard key={`wall-${index}`} {...fan} />
            ))}
          </div>
        </div>
      </section>

      {/* Pedestal Fans */}
      <section id="pedestal-fans" className="section-padding bg-secondary">
        <div className="container-custom">
          <SectionTitle
            title="Pedestal Fans"
            subtitle="Adjustable height pedestal fans for flexible cooling solutions"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pedestalFans.map((fan, index) => (
              <ProductCard key={`pedestal-${index}`} {...fan} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsPage;
