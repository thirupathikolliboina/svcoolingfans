import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  quote: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Kumar",
    position: "Project Manager",
    company: "Horizon Buildings",
    quote: "SV Industries fans have been an excellent choice for our residential projects. Their energy efficiency and quiet operation have been greatly appreciated by our clients.",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    name: "Priya Sharma",
    position: "Restaurant Owner",
    company: "Spice Garden",
    quote: "We've installed SV ceiling fans throughout our restaurant, and they've been performing flawlessly for years. Great quality, stylish design, and excellent air circulation.",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    name: "Vikram Singh",
    position: "Facilities Director",
    company: "Tech Innovations Ltd",
    quote: "The industrial exhaust fans from SV Industries have significantly improved air quality in our manufacturing plant. Reliable products backed by excellent customer service.",
    image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 4,
    name: "Ananya Patel",
    position: "Interior Designer",
    company: "Creative Spaces",
    quote: "SV Industries offers a perfect blend of functionality and aesthetics. Their ceiling fans complement my interior designs while providing excellent performance.",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    let interval: number | undefined;
    
    if (autoplay) {
      interval = window.setInterval(() => {
        nextTestimonial();
      }, 5000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoplay, activeIndex]);

  return (
    <section className="section-padding bg-primary text-white">
      <div className="container-custom">
        <SectionTitle 
          title="What Our Clients Say" 
          subtitle="Hear from the businesses and individuals who trust our products"
          centered
          light
        />
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="transition-transform duration-500 ease-in-out flex"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 relative">
                    <Quote className="absolute top-4 left-4 text-white opacity-20" size={40} />
                    
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-2 border-blue-300">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <p className="text-lg mb-6 italic text-blue-100">"{testimonial.quote}"</p>
                      
                      <h4 className="font-semibold text-xl">{testimonial.name}</h4>
                      <p className="text-blue-200">{testimonial.position}, {testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeIndex === index ? 'bg-white scale-125' : 'bg-white bg-opacity-30'
                }`}
                onClick={() => {
                  setActiveIndex(index);
                  setAutoplay(false);
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <button
            className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center shadow-md focus:outline-none transition-transform hover:scale-110"
            onClick={() => {
              prevTestimonial();
              setAutoplay(false);
            }}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center shadow-md focus:outline-none transition-transform hover:scale-110"
            onClick={() => {
              nextTestimonial();
              setAutoplay(false);
            }}
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;