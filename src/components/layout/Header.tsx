import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Fan, Menu, X, Search } from "lucide-react";

// Simulated searchable content (replace with real data as needed)
const searchableData = [
  "Table Fans",
  "Ceiling Fans",
  "Wall Fans",
  "Stand Fans",
  "Exhaust Fans",
  "Brushless Motor Technology",
  "Energy Efficient Fans",
  "Gallery - Summer Collection",
  "SV Contact Information",
  "About SV Industries",
  "Our vision and mission",
  "Our manufacturing facility",
  "Our product range",
  "Customer Testimonials",
  "Fan Technology",
  "Fan Design Innovations",
  "Fan Performance",
  "Fan Energy Efficiency",
  "Fan Noise Levels",
  "Fan Durability",
  "Fan Safety Features",
  "Fan Maintenance Tips",
  "Fan Installation Guide",
  "Fan Troubleshooting",
  "Fan Accessories",
  "Fan Replacement Parts",
  "Fan Warranty Information",
  "Fan Customer Support",
  "Fan Product Reviews",
  "Fan Comparison",
  "Fan Buying Guide",
  "Fan FAQs",
  "Fan Industry Trends",
];

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Technology", path: "/technology" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<string[]>([]);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);

    const filtered = searchableData.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults(query.trim() === "" ? [] : filtered);
  };

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `relative font-medium text-gray-700 transition
     ${isActive ? "text-primary" : "hover:text-primary"}
     after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5
     after:bg-primary after:transition-all after:duration-300
     ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}
     hover:scale-105 transform-gpu`;

  const mobileNavLinkClasses = (isActive: boolean) =>
    `px-4 py-2 rounded ${
      isActive ? "bg-primary text-white" : "text-gray-700 hover:bg-gray-100"
    }`;

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom relative">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Fan
              size={30}
              className="text-primary fan-spin-hover animate-spin"
            />
            <span className="text-xl font-bold text-primary">
              SV Industries
            </span>
          </Link>

          {/* Centered Nav */}
          <div className="hidden md:flex flex-1 justify-center items-center space-x-8">
            {navLinks.map(({ name, path }) => (
              <NavLink key={path} to={path} className={navLinkClasses}>
                {name}
              </NavLink>
            ))}
          </div>

          {/* Search (Desktop) */}
          <div className="hidden md:flex items-center gap-2 relative -mt-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search..."
              className="px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              onClick={() => handleSearch(searchQuery)}
              className="text-white bg-primary px-3 py-1.5 rounded-md hover:bg-primary/90"
            >
              <Search size={16} />
            </button>

            {/* Results Dropdown */}
            {searchResults.length > 0 && (
              <div className="absolute top-12 right-0 w-64 bg-white border border-gray-200 rounded shadow-md z-50">
                {searchResults.map((result, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {result}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X
                size={24}
                className={scrolled ? "text-primary" : "text-white"}
              />
            ) : (
              <Menu
                size={24}
                className={scrolled ? "text-primary" : "text-white"}
              />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden ${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden transition-all duration-300 ease-in-out`}
        >
          <div className="flex flex-col pt-5 pb-5 space-y-4 bg-white mt-3 rounded-lg shadow-lg">
            {navLinks.map(({ name, path }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) => mobileNavLinkClasses(isActive)}
                onClick={() => setIsOpen(false)}
              >
                {name}
              </NavLink>
            ))}

            {/* Mobile Search */}
            <div className="flex items-center gap-2 px-4">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Search..."
                className="flex-1 px-3 py-1.5 border border-gray-300 rounded-md"
              />
              <button
                onClick={() => handleSearch(searchQuery)}
                className="bg-primary text-white px-3 py-1.5 rounded-md"
              >
                <Search size={16} />
              </button>
            </div>

            {searchResults.length > 0 && (
              <div className="px-4">
                <div className="mt-2 bg-white border border-gray-200 rounded shadow-md z-50">
                  {searchResults.map((result, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      {result}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
