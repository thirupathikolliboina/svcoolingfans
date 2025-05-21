import React from "react";
import HeroSection from "../components/home/HeroSection";
import FeaturedProducts from "../components/home/FeaturedProducts";
import TestimonialsSection from "../components/home/TestimonialsSection";
import { Link } from "react-router-dom";
import { Fan, Award, Zap, ThumbsUp } from "lucide-react";
import SectionTitle from "../components/common/SectionTitle";
import Scene from "../components/home/3DScene"; // Adjust path if needed

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />

      {/* Features Section */}
      <section className="section-padding bg-white mt-8">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-secondary p-6 rounded-lg text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 mx-auto bg-primary rounded-full flex items-center justify-center mb-4">
                <Award className="text-white" size={30} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Premium Quality</h3>
              <p className="text-gray-600">
                Built with the finest materials and rigorous quality control.
              </p>
            </div>

            <div className="bg-secondary p-6 rounded-lg text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 mx-auto bg-primary rounded-full flex items-center justify-center mb-4">
                <Zap className="text-white" size={30} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Energy Efficient</h3>
              <p className="text-gray-600">
                Designed to deliver maximum performance with minimal energy
                consumption.
              </p>
            </div>

            <div className="bg-secondary p-6 rounded-lg text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 mx-auto bg-primary rounded-full flex items-center justify-center mb-4">
                <Fan className="text-white" size={30} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Advanced Design</h3>
              <p className="text-gray-600">
                Innovative aerodynamic designs for optimal airflow and minimal
                noise.
              </p>
            </div>

            <div className="bg-secondary p-6 rounded-lg text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 mx-auto bg-primary rounded-full flex items-center justify-center mb-4">
                <ThumbsUp className="text-white" size={30} />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Customer Satisfaction
              </h3>
              <p className="text-gray-600">
                Trusted by homes and businesses across India for over two
                decades.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FeaturedProducts />

      {/* About Company Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                title="About SV Industries"
                subtitle="A legacy of innovation and quality since 2017"
              />

              <p className="text-gray-700 mb-6">
                SV Industries Pvt. Ltd. has been at the forefront of fan
                manufacturing in India, delivering quality products that blend
                innovation with reliability. Our state-of-the-art manufacturing
                facility and dedicated R&D team ensure that we stay ahead of
                industry standards.
              </p>

              <p className="text-gray-700 mb-6">
                With a nationwide distribution network and exports to over 2
                countries, we've built a reputation for excellence that makes us
                a preferred choice for residential, commercial, and industrial
                applications.
              </p>

              <Link to="/about" className="btn btn-primary">
                Learn More About Us
              </Link>
            </div>

            <div className="relative">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/images/h3.webp"
                  alt="SV Industries Manufacturing"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">10+ Years</h3>
                  <p>Of manufacturing excellence</p>
                </div>
              </div>

              <div className="absolute -bottom-8 -right-8 bg-primary text-white p-6 rounded-lg shadow-lg md:max-w-xs">
                <h4 className="text-xl font-bold mb-2">Our Mission</h4>
                <p>
                  To deliver innovative cooling solutions that enhance comfort
                  while minimizing environmental impact through energy-efficient
                  designs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />

      {/* Call to Action */}
      <section className="py-16 bg-primary-dark text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-6">
            Ready to Experience SV Industries Quality?
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
            Join thousands of satisfied customers who have made SV Industries
            their trusted provider of quality cooling solutions.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/products"
              className="btn bg-white text-primary hover:bg-gray-100"
            >
              Browse Our Products
            </Link>
            <Link
              to="/contact"
              className="btn border-2 border-white text-white hover:bg-white hover:text-primary"
            >
              Contact Sales Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
