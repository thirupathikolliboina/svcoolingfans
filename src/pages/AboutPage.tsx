import React from "react";
import SectionTitle from "../components/common/SectionTitle";
import VideoWithToggle from "../components/VideoWithToggle";
import {
  Award,
  Users,
  BarChart,
  Factory,
  TrendingUp,
  CheckCircle,
} from "lucide-react";

const AboutPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="pt-32 pb-20 bg-cover bg-center text-white mt-14"
        style={{ backgroundImage: "url('/images/ahs.png')" }}
      >
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto bg-black bg-opacity-40 p-6 rounded-lg">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About SV Industries
            </h1>
            <p className="text-xl text-blue-100">
              A legacy of quality, innovation, and customer satisfaction since
              2017.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <SectionTitle
                title="Our Story"
                subtitle="How we became India's trusted fan manufacturer"
              />

              <div className="space-y-4 text-gray-700">
                <p>
                  <span className="font-bold text-xl text-primary">
                    SV Industries
                  </span>{" "}
                  was founded in 2017 by{" "}
                  <span className="font-bold text-xl text-primary">
                    Mr. Thirupathi Kolliboina
                  </span>{" "}
                  with a vision to provide high-quality cooling solutions to
                  Indian homes and businesses. What started as a small workshop
                  with just 20 employees has now grown into a state-of-the-art
                  manufacturing facility spanning over 20,000 square feet.
                </p>
                <p>
                  Our journey has been defined by continuous innovation,
                  adapting to changing market needs, and maintaining unwavering
                  commitment to quality. Today, SV Industries stands as a symbol
                  of reliability in the fan manufacturing industry across India
                  and beyond.
                </p>
                <p>
                  With distribution networks across all major Indian cities and
                  exports to over 2 countries, we've established ourselves as a
                  company that delivers on its promises - products that combine
                  efficiency, durability, and aesthetic appeal.
                </p>
              </div>
            </div>

            {/* Video Background Card */}
            <VideoWithToggle />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="text-white" size={28} />
              </div>

              <h3 className="heading-md mb-4">Our Mission</h3>

              <p className="text-gray-700">
                To deliver innovative cooling solutions that enhance comfort
                while minimizing environmental impact through energy-efficient
                designs. We strive to set new standards in product quality,
                customer service, and technological advancement.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="text-white" size={28} />
              </div>

              <h3 className="heading-md mb-4">Our Vision</h3>

              <p className="text-gray-700">
                To be the most trusted and innovative fan manufacturer in Asia,
                recognized for product excellence, satisfied customers, and
                positive contributions to energy conservation. We aim to be
                present in every Indian home with at least one SV Industries
                product.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Strengths */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Manufacturing Excellence"
            subtitle="State-of-the-art facilities and rigorous quality control"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-secondary p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
              <Factory className="text-primary mb-4" size={36} />
              <h3 className="text-xl font-semibold mb-3">Modern Facilities</h3>
              <p className="text-gray-700">
                Our 20,000 sq. ft. manufacturing facility houses the latest
                equipment and technology for precision manufacturing of all fan
                components.
              </p>
            </div>

            <div className="bg-secondary p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
              <Users className="text-primary mb-4" size={36} />
              <h3 className="text-xl font-semibold mb-3">Expert Team</h3>
              <p className="text-gray-700">
                Over 20 skilled professionals including engineers, designers,
                and quality specialists work together to create products of
                exceptional quality.
              </p>
            </div>

            <div className="bg-secondary p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
              <BarChart className="text-primary mb-4" size={36} />
              <h3 className="text-xl font-semibold mb-3">Quality Testing</h3>
              <p className="text-gray-700">
                Every product undergoes a rigorous 12-point quality check before
                packaging, ensuring only the finest products reach our
                customers.
              </p>
            </div>

            <div className="bg-secondary p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
              <Award className="text-primary mb-4" size={36} />
              <h3 className="text-xl font-semibold mb-3">Certifications</h3>
              <p className="text-gray-700">
                We maintain ISO 9001:2015, ISO 14001, and BIS certifications,
                adhering to international standards for quality and
                environmental management.
              </p>
            </div>

            <div className="bg-secondary p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
              <TrendingUp className="text-primary mb-4" size={36} />
              <h3 className="text-xl font-semibold mb-3">R&D Investment</h3>
              <p className="text-gray-700">
                Our dedicated R&D department continuously works on innovations
                to improve energy efficiency, airflow optimization, and noise
                reduction.
              </p>
            </div>

            <div className="bg-secondary p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
              <CheckCircle className="text-primary mb-4" size={36} />
              <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
              <p className="text-gray-700">
                We follow green manufacturing practices, minimize waste, and
                focus on developing energy-efficient products that reduce
                environmental impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 bg-primary text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">10+</div>
              <p className="text-blue-200 text-lg">Years of Experience</p>
            </div>

            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">20+</div>
              <p className="text-blue-200 text-lg">Team Members</p>
            </div>

            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">2+</div>
              <p className="text-blue-200 text-lg">Export Countries</p>
            </div>

            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">20K+</div>
              <p className="text-blue-200 text-lg">Sq. Ft. Factory</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
