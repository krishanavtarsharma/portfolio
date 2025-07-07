import React from 'react';
import { Building, User, Calendar, Code, Users, MapPin } from 'lucide-react';

interface InternshipModalProps {
  onClose: () => void;
}

const InternshipModal: React.FC<InternshipModalProps> = ({ onClose }) => {
  const tools = [
    'Python', 'Streamlit', 'Flask', 'Docker', 'MongoDB', 'GitHub',
    'OpenCV', 'Machine Learning', 'Web Development', 'API Development'
  ];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-4">
          <Building className="h-8 w-8 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Internship Experience
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Full-stack Developer @ Linux World Informatics
        </p>
      </div>

      {/* Company Info */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Company Details</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Building className="h-5 w-5 text-purple-600 mr-3" />
                <span className="text-gray-700 dark:text-gray-300">Linux World Informatics Pvt. Ltd.</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-purple-600 mr-3" />
                <span className="text-gray-700 dark:text-gray-300">Jaipur, Rajasthan</span>
              </div>
              <div className="flex items-center">
                <User className="h-5 w-5 text-purple-600 mr-3" />
                <span className="text-gray-700 dark:text-gray-300">Mentor: Vimal Daga Sir</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 text-purple-600 mr-3" />
                <span className="text-gray-700 dark:text-gray-300">Team: Striver (#2)</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Role & Duration</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Code className="h-5 w-5 text-purple-600 mr-3" />
                <span className="text-gray-700 dark:text-gray-300">Full-stack Developer</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-purple-600 mr-3" />
                <span className="text-gray-700 dark:text-gray-300">Current Internship</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tools & Technologies */}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Tools & Technologies</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-lg p-3 text-center shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200 dark:border-gray-600"
            >
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{tool}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Responsibilities */}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Key Responsibilities</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Frontend Development</h4>
            <ul className="text-gray-700 dark:text-gray-300 space-y-2">
              <li>• Building responsive web applications using modern frameworks</li>
              <li>• Creating intuitive user interfaces with Streamlit</li>
              <li>• Implementing interactive features and animations</li>
              <li>• Optimizing performance and user experience</li>
            </ul>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Backend Development</h4>
            <ul className="text-gray-700 dark:text-gray-300 space-y-2">
              <li>• Developing robust APIs using Flask and Python</li>
              <li>• Database design and management with MongoDB</li>
              <li>• Implementing security best practices</li>
              <li>• Containerization with Docker</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Learning & Growth */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Learning & Growth</h3>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Working at Linux World under Vimal Daga Sir's mentorship has been transformative. 
          I've gained hands-on experience in full-stack development, learned industry best practices, 
          and contributed to real-world projects that impact users.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">15+</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">10+</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Technologies Mastered</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">100%</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Commitment</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternshipModal;