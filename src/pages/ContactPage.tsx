import React, { useState } from "react";
import SectionTitle from "../components/common/SectionTitle";
import emailjs from "emailjs-com";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<{
    status: "idle" | "submitting" | "success" | "error";
    message: string;
  }>({
    status: "idle",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setFormStatus({
      status: "submitting",
      message: "Submitting your message...",
    });

    const serviceID = "service_9h13u1u";
    const templateIDUser = "template_wio3orm"; // auto-reply to customer
    const templateIDOwner = "template_18n80aa"; // create this in EmailJS
    const publicKey = "FBs9qKd2ckei6LgTy";

    // 1. Send to customer
    emailjs
      .send(serviceID, templateIDUser, formData, publicKey)
      .then((response) => {
        // 2. Send to owner
        emailjs
          .send(serviceID, templateIDOwner, formData, publicKey)
          .then(() => {
            setFormStatus({
              status: "success",
              message: "Your message has been sent successfully!",
            });
            setFormData({
              name: "",
              email: "",
              phone: "",
              subject: "",
              message: "",
            });
          })
          .catch((error) => {
            console.error("Owner email failed:", error);
          });
      })
      .catch((error) => {
        console.error("Customer email failed:", error);
        setFormStatus({
          status: "error",
          message: "Oops! Something went wrong. Please try again later.",
        });
      });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative text-white mt-16 w-full h-[449px] overflow-hidden">
        {/* Background Image with slight zoom out */}
        <div className="absolute inset-0 w-full h-full z-0">
          <img
            src="/images/h2.png"
            alt="Contact Background"
            className="w-full h-full object-cover scale-97"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 flex flex-col items-center justify-top h-full text-center pb-10 px-4">
          <h1 className="text-3xl font-semibold mb-2 mt-2">Contact Us</h1>
          <p className="text-lg max-w-2xl">
            Get in touch with our team for inquiries, support, or feedback.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-secondary p-6 rounded-lg text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 mx-auto bg-primary rounded-full flex items-center justify-center mb-4">
                <MapPin className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Visit Us</h3>
              <p className="text-gray-700">
                H, SV Industries, 234/D, 11-5, nr.
                <br />
                Bhavani Nagar, Bhavani Nagar, Moosapet, Hyderabad, Telangana -
                500018
              </p>
            </div>

            <div className="bg-secondary p-6 rounded-lg text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 mx-auto bg-primary rounded-full flex items-center justify-center mb-4">
                <Phone className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Call Us</h3>
              <p className="text-gray-700">
                Sales: +91 90002 82834
                <br />
                Support: +91 90002 82834
              </p>
            </div>

            <div className="bg-secondary p-6 rounded-lg text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 mx-auto bg-primary rounded-full flex items-center justify-center mb-4">
                <Mail className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Email Us</h3>
              <p className="text-gray-700">
                infosvindu@gmail.com
                <br />
                support@svindustries.com
              </p>
            </div>

            <div className="bg-secondary p-6 rounded-lg text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 mx-auto bg-primary rounded-full flex items-center justify-center mb-4">
                <Clock className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Working Hours</h3>
              <p className="text-gray-700">
                Monday - Friday: 9am - 6pm
                <br />
                Saturday: 10am - 4pm
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 bg-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <SectionTitle
                title="Send Us a Message"
                subtitle="We'll get back to you as soon as possible"
              />

              <div className="bg-white p-8 rounded-lg shadow-md">
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="Sales Inquiry">Sales Inquiry</option>
                        <option value="Product Support">Product Support</option>
                        <option value="Warranty Claim">Warranty Claim</option>
                        <option value="Dealer Information">
                          Dealer Information
                        </option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary flex items-center justify-center w-full"
                    disabled={formStatus.status === "submitting"}
                  >
                    {formStatus.status === "submitting"
                      ? "Sending..."
                      : "Send Message"}
                    <Send size={18} className="ml-2" />
                  </button>

                  {formStatus.status !== "idle" && (
                    <div
                      className={`mt-4 p-3 rounded-md ${
                        formStatus.status === "success"
                          ? "bg-green-100 text-green-800"
                          : formStatus.status === "error"
                          ? "bg-red-100 text-red-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {formStatus.message}
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* Map */}
            <div>
              <SectionTitle
                title="Our Location"
                subtitle="Visit our office and manufacturing facility"
              />

              <div className="rounded-lg overflow-hidden shadow-md h-[500px]">
                <div className="rounded-lg overflow-hidden shadow-md h-[500px] w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d34195.011077078576!2d78.41000376584853!3d17.467478964969615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e9!4m0!4m5!1s0x3bcb91527ddfde15%3A0x8dcbcc37ada10c2a!2sH%2C%20SV%20Industries%2C%20234%2FD%2C%2011-5%2C%20nr.%20Bhavani%20Nagar%2C%20Bhavani%20Nagar%2C%20Moosapet%2C%20Hyderabad%2C%20Telangana%20500018!3m2!1d17.469835!2d78.4307625!5e0!3m2!1sen!2sin!4v1747485247928!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="SV Industries Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dealers Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Become a Dealer"
            subtitle="Join our network of authorized dealers across India"
            centered
          />

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-700 mb-8">
              SV Industries is expanding its dealer network across India. If
              you're interested in becoming an authorized dealer for our premium
              range of fans, please contact our business development team.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:dealers@svindustries.com"
                className="btn btn-primary"
              >
                Email Business Development
              </a>
              <a href="tel:+919000282834" className="btn btn-outline">
                Call: +91 90002 82834
              </a>
              <a
                href="https://wa.me/919000282834?text=Hi%20SV%20Industries%2C%20I%20am%20interested%20in%20becoming%20a%20dealer.%20Please%20share%20more%20details."
                className="btn btn-outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
