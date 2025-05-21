import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin as LinkedIn,
  Mail,
  Phone,
  MapPin,
  Fan,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-dark text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Fan size={24} className="text-white" />
              <h3 className="text-xl font-bold">SV Industries</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Keeping India Cool with Innovation – SV Industries Pvt. Ltd.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/svindustriesofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com/svindustries"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://www.instagram.com/svindustries"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/svindustries"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <LinkedIn size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-blue-400 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/technology"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Technology
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-blue-400 pb-2">
              Our Products
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/products#table-fans"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Table Fans
                </Link>
              </li>
              <li>
                <Link
                  to="/products#ceiling-fans"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Ceiling Fans
                </Link>
              </li>
              <li>
                <Link
                  to="/products#wall-fans"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Wall Fans
                </Link>
              </li>
              <li>
                <Link
                  to="/products#stand-fans"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Stand Fans
                </Link>
              </li>
              <li>
                <Link
                  to="/products#exhaust-fans"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Exhaust Fans
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-blue-400 pb-2">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <span>
                  H, SV Industries, 234/D, 11-5, nr. Bhavani Nagar, Bhavani
                  Nagar, Moosapet, Hyderabad, Telangana - 500018
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="flex-shrink-0" />
                <span>+91 90002 82834</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="flex-shrink-0" />
                <span>infosvindu@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-400 mt-12 pt-8 text-center text-gray-300">
          <p>
            &copy; {new Date().getFullYear()} SV Industries Pvt. Ltd. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
