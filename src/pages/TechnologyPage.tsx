import React from "react";
import SectionTitle from "../components/common/SectionTitle";
import { Zap, Volume2, Lightbulb, Wind, Clock, Cpu } from "lucide-react";

const TechnologyPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="pt-32 pb-20 text-white mt-14 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/ths.png')" }}
      >
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto bg-black bg-opacity-40 p-6 rounded-lg">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Technology & Innovation
            </h1>
            <p className="text-xl text-blue-100">
              Discover the cutting-edge technology behind our energy-efficient
              fans.
            </p>
          </div>
        </div>
      </section>

      {/* Innovation Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                title="Innovation is our Core"
                subtitle="How we stay ahead of the curve"
              />

              <div className="space-y-4 text-gray-700">
                <p>
                  At SV Industries, innovation is more than just a buzzword—it's
                  the foundation of everything we do. Our dedicated R&D team
                  constantly works on improving our products through
                  technological advancements that enhance performance while
                  reducing energy consumption.
                </p>

                <p>
                  We invest significantly in our state-of-the-art testing lab
                  where prototypes undergo rigorous testing for airflow
                  efficiency, noise levels, and durability. This meticulous
                  approach ensures that every fan that leaves our facility meets
                  our exacting standards.
                </p>

                <p>
                  From aerodynamic blade designs to energy-efficient motors, our
                  innovations focus on creating products that deliver
                  exceptional performance while minimizing environmental impact.
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3912981/pexels-photo-3912981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="SV Industries Technology"
                className="rounded-lg shadow-lg"
              />

              <div className="absolute -bottom-8 -left-8 bg-primary text-white p-6 rounded-lg shadow-lg max-w-xs">
                <h4 className="text-xl font-bold mb-2">12% of Revenue</h4>
                <p>
                  Invested annually in research and development of new
                  technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Technologies */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <SectionTitle
            title="Our Key Technologies"
            subtitle="Innovations that set our fans apart"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <Zap className="text-primary mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-3">
                Energy-Efficient Motors
              </h3>
              <p className="text-gray-700 mb-4">
                Our BLDC (Brushless DC) motors consume up to 65% less
                electricity compared to conventional motors while delivering
                superior performance and extended lifespan.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Power consumption as low as 28W</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Smooth start and operation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Extended motor life (15+ years)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <Volume2 className="text-primary mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-3">Quiet Technology</h3>
              <p className="text-gray-700 mb-4">
                Our proprietary QuietFlow™ technology reduces operational noise
                to as low as 38dB, creating a peaceful environment without
                compromising on cooling performance.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Aerodynamically optimized blades</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Vibration-absorbing mounts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Precision-balanced components</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <Lightbulb className="text-primary mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-3">Smart Integration</h3>
              <p className="text-gray-700 mb-4">
                Select models feature advanced smart capabilities including
                mobile app control, voice assistant compatibility, and
                integration with home automation systems.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Schedule-based operation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Voice control compatibility</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Power consumption monitoring</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <Wind className="text-primary mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-3">
                Aerodynamic Blade Design
              </h3>
              <p className="text-gray-700 mb-4">
                Our AeroFoil blade design, inspired by aircraft technology,
                maximizes air delivery while minimizing power consumption and
                operational noise.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>30% more air delivery</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Optimized blade angle and curvature</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Reduced air turbulence</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <Clock className="text-primary mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-3">
                Auto Climate Adjust
              </h3>
              <p className="text-gray-700 mb-4">
                Premium models feature built-in temperature and humidity sensors
                that automatically adjust fan speed to maintain optimal comfort
                levels.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Ambient temperature sensing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Automatic speed adjustment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Sleep mode optimization</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <Cpu className="text-primary mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-3">
                Precision Manufacturing
              </h3>
              <p className="text-gray-700 mb-4">
                Our automated production lines use computerized precision
                technology to ensure consistent quality and perfect balancing of
                every component.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Computer-controlled assembly</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Automated quality checks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>100% component testing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* R&D Process */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Our R&D Process"
            subtitle="From concept to production"
            centered
          />

          <div className="relative mt-16">
            {/* Timeline */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary"></div>

            {/* Timeline items */}
            <div className="grid grid-cols-1 gap-16">
              {/* Item 1 */}
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center z-10">
                  <span className="text-white font-bold">1</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right md:pr-16">
                    <h3 className="heading-sm mb-3">
                      Market Research & Concept Development
                    </h3>
                    <p className="text-gray-700">
                      Our product journey begins with extensive market research
                      to identify consumer needs and preferences. Our design
                      team then creates multiple concept designs, focusing on
                      both aesthetics and functionality.
                    </p>
                  </div>

                  <div className="md:pl-16">
                    <img
                      src="https://images.pexels.com/photos/8867482/pexels-photo-8867482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="Concept Development"
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center z-10">
                  <span className="text-white font-bold">2</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="md:order-2 md:text-left md:pl-16">
                    <h3 className="heading-sm mb-3">
                      Prototype Development & Testing
                    </h3>
                    <p className="text-gray-700">
                      Selected concepts progress to prototype development, where
                      our engineers create working models. These prototypes
                      undergo rigorous testing for performance, durability,
                      energy efficiency, and compliance with safety standards.
                    </p>
                  </div>

                  <div className="md:order-1 md:pr-16">
                    <img
                      src="https://images.pexels.com/photos/7775638/pexels-photo-7775638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="Prototype Testing"
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </div>

              {/* Item 3 */}
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center z-10">
                  <span className="text-white font-bold">3</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right md:pr-16">
                    <h3 className="heading-sm mb-3">
                      Design Refinement & Optimization
                    </h3>
                    <p className="text-gray-700">
                      Based on test results, our design team refines the product
                      for optimal performance. We use computational fluid
                      dynamics and other advanced tools to optimize airflow,
                      energy efficiency, and noise reduction.
                    </p>
                  </div>

                  <div className="md:pl-16">
                    <img
                      src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="Design Optimization"
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </div>

              {/* Item 4 */}
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center z-10">
                  <span className="text-white font-bold">4</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="md:order-2 md:text-left md:pl-16">
                    <h3 className="heading-sm mb-3">
                      Production & Quality Control
                    </h3>
                    <p className="text-gray-700">
                      The final design moves to production in our
                      state-of-the-art manufacturing facility. Every unit
                      undergoes a 12-point quality check before packaging to
                      ensure it meets our high standards for performance and
                      durability.
                    </p>
                  </div>

                  <div className="md:order-1 md:pr-16">
                    <img
                      src="https://images.pexels.com/photos/3913025/pexels-photo-3913025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="Production Line"
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TechnologyPage;
