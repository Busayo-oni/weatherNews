import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
        {/* Section 1: About */}
        <div>
          <h3 className="text-lg font-bold mb-4">About</h3>
          <p className="text-sm">
            Weather & News Dashboard is your go-to app for current weather updates and the latest news.
          </p>
        </div>

        {/* Section 2: Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-blue-400">Weather</Link>
            </li>
            <li>
              <Link to="/news" className="hover:text-blue-400">News</Link>
            </li>
            <li>
              <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                GitHub
              </a>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-400">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Section 3: Follow Us */}
        <div>
          <h3 className="text-lg font-bold mb-4">Follow Us</h3>
          <div className="flex justify-center sm:justify-start gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaFacebookF size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaTwitter size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaInstagram size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-6 border-t border-gray-700 pt-4 text-center text-sm">
        <p>© 2024 Weather & News Dashboard. All rights reserved.</p>
        <p>
          Designed with ❤️ by{' '}
          <a href="https://your-portfolio.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            DeOracleEdge
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
