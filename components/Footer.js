import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer className="bg text-white py-10 o">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* About Us Section */}
          <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
            <h2 className="text-2xl font-bold mb-4">About Us</h2>
            <p className="text-gray-400">
              We&apos;re dedicated to providing the best service to our customers.
            </p>
          </div>
          {/* Quick Links Section */}
          <div className="w-full sm:w-1/3 mb-6 sm:mb-0 sm:px-6">
            <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
            <ul className="text-gray-400">
              <li className="mb-2"><a href="#">Home</a></li>
              <li className="mb-2"><a href="#">Services</a></li>
              <li className="mb-2"><a href="#">Contact</a></li>
              <li className="mb-2"><a href="#">About</a></li>
            </ul>
          </div>
          {/* Follow Us Section */}
          <div className="w-full sm:w-1/3 sm:px-6">
            <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <FontAwesomeIcon icon={['fab', 'facebook-f']} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <FontAwesomeIcon icon={['fab', 'twitter']} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <FontAwesomeIcon icon={['fab', 'instagram']} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <FontAwesomeIcon icon={['fab', 'linkedin']} />
              </a>
            </div>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-400">
          &copy; 2024 Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
