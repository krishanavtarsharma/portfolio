import React from 'react';
import { Github, Linkedin, Mail, MapPin, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Krishanavtar
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              BCA Student specializing in AI & IoT, passionate about building innovative solutions 
              that make a difference.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#cards" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="#cards" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                  Projects
                </a>
              </li>
              <li>
                <a href="#cards" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Technologies
            </h4>
            <ul className="space-y-2">
              <li className="text-gray-600 dark:text-gray-300">Python</li>
              <li className="text-gray-600 dark:text-gray-300">React</li>
              <li className="text-gray-600 dark:text-gray-300">AI/ML</li>
              <li className="text-gray-600 dark:text-gray-300">IoT</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Get in Touch
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                <span className="text-gray-600 dark:text-gray-300 text-sm">
                  Banskho, Jaipur
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                <a 
                  href="mailto:sssharmakrishan9928@gmail.com"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-sm"
                >
                  sssharmakrishan9928@gmail.com
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-4">
              <a
                href="https://github.com/krishanavtar"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <Github className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              </a>
              <a
                href="https://linkedin.com/in/krishanavtar"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <Linkedin className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              </a>
              <a
                href="mailto:sssharmakrishan9928@gmail.com"
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <Mail className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-300 text-sm flex items-center gap-1">
            Built with <Heart className="h-4 w-4 text-red-500" /> by Krishanavtar Sharma
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-sm mt-2 md:mt-0">
            © 2024 Krishanavtar Sharma. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;