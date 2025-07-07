import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Calendar, CheckCircle } from 'lucide-react';

interface ContactModalProps {
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after success
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setIsSubmitted(false);
      }, 2000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sssharmakrishan9928@gmail.com',
      link: 'mailto:sssharmakrishan9928@gmail.com'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Banskho, Jaipur, Rajasthan, India',
      link: null
    },
    {
      icon: Phone,
      label: 'Availability',
      value: 'Available for internships & opportunities',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      username: '@krishanavtar',
      link: 'https://github.com/krishanavtar',
      color: 'from-gray-700 to-gray-900'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      username: 'Krishanavtar Sharma',
      link: 'https://linkedin.com/in/krishanavtar',
      color: 'from-blue-600 to-blue-800'
    },
    {
      icon: Mail,
      label: 'Email',
      username: 'sssharmakrishan9928@gmail.com',
      link: 'mailto:sssharmakrishan9928@gmail.com',
      color: 'from-red-500 to-red-700'
    }
  ];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-teal-500 to-blue-500 flex items-center justify-center mb-4">
          <Mail className="h-8 w-8 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Get in Touch
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Let's connect and discuss opportunities, collaborations, or just say hello!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            Contact Information
          </h3>
          
          {/* Contact Details */}
          <div className="space-y-4 mb-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl"
                >
                  <div className="p-2 bg-teal-500 rounded-lg">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {info.label}
                    </h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-teal-600 dark:text-teal-400 hover:underline"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-600 dark:text-gray-300">{info.value}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Connect on Social Media
            </h4>
            <div className="space-y-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-4 bg-gradient-to-r ${social.color} text-white rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
                  >
                    <Icon className="h-6 w-6" />
                    <div>
                      <div className="font-semibold">{social.label}</div>
                      <div className="text-sm opacity-90">{social.username}</div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            Send a Message
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors duration-200"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors duration-200"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors duration-200 resize-none"
                placeholder="Tell me about your project, opportunity, or just say hello..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className={`w-full py-3 px-6 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 ${
                isSubmitted
                  ? 'bg-green-500 cursor-not-allowed'
                  : isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 shadow-lg hover:shadow-xl'
              }`}
            >
              {isSubmitted ? (
                <>
                  <CheckCircle className="h-5 w-5" />
                  Message Sent!
                </>
              ) : isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Additional Information */}
      <div className="mt-8 bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 rounded-xl p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
          Let's Collaborate!
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mb-3">
              <Calendar className="h-6 w-6 text-white" />
            </div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              Open to Opportunities
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Always interested in exciting projects and learning opportunities
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mb-3">
              <Mail className="h-6 w-6 text-white" />
            </div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              Quick Response
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              I typically respond to messages within 24-48 hours
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-3">
              <CheckCircle className="h-6 w-6 text-white" />
            </div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              Professional & Friendly
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Looking forward to meaningful conversations and collaborations
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;