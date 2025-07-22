import React from "react";

const Footer = () => {
  return (
    <footer className="bg-White text-gray-800 py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2">Gadget Heaven</h2>
          <p className="text-gray-600">
            Leading the way in cutting-edge technology and innovation.
          </p>
        </div>

        <hr className="my-4 md:my-8 text-slate-300" />

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Services Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-800 transition-colors">
                  Product Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800 transition-colors">
                  Order Tracking
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800 transition-colors">
                  Shipping & Delivery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800 transition-colors">
                  Returns
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-800 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-800 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800 transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
