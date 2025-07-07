import React from 'react';
import { MapPin, Calendar, Languages, Heart } from 'lucide-react';

interface AboutModalProps {
  onClose: () => void;
}

const AboutModal: React.FC<AboutModalProps> = ({ onClose }) => {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 mb-4">
          <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
            <span className="text-2xl font-bold text-gray-600 dark:text-gray-300">KS</span>
          </div>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          About Krishanavtar Sharma
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          19-year-old AI enthusiast and future developer
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Personal Info */}
        <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Personal Info</h3>
          <div className="space-y-3">
            <div className="flex items-center">
              <Calendar className="h-5 w-5 text-blue-600 mr-3" />
              <span className="text-gray-700 dark:text-gray-300">Age: 19 years</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-blue-600 mr-3" />
              <span className="text-gray-700 dark:text-gray-300">Location: Banskho, Jaipur</span>
            </div>
            <div className="flex items-center">
              <Languages className="h-5 w-5 text-blue-600 mr-3" />
              <span className="text-gray-700 dark:text-gray-300">Languages: Hindi, English</span>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Education</h3>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">
                Bachelor of Computer Applications
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Specialization: AI & IoT
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                ICFAI University, Jaipur
              </p>
            </div>
          </div>
        </div>

        {/* Family Background */}
        <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Family Background</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Coming from a supportive family that has encouraged my passion for technology 
            and innovation. My family has been instrumental in my journey towards becoming 
            an AI developer.
          </p>
        </div>

        {/* Strengths & Improvements */}
        <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Strengths & Growth</h3>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white flex items-center">
                <Heart className="h-4 w-4 text-red-500 mr-2" />
                Strengths
              </h4>
              <ul className="text-gray-700 dark:text-gray-300 ml-6 list-disc">
                <li>Problem-solving mindset</li>
                <li>Quick learner</li>
                <li>Team collaboration</li>
                <li>Technical innovation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">
                Currently Improving
              </h4>
              <p className="text-gray-700 dark:text-gray-300 ml-6">
                Communication skills & Public speaking
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Personal Statement */}
      <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">My Story</h3>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          As a 19-year-old BCA student specializing in AI & IoT, I'm passionate about building 
          innovative solutions that can make a real difference. My journey in technology started 
          with curiosity and has evolved into a dedicated pursuit of excellence in artificial 
          intelligence and automation. Currently interning at Linux World under the mentorship 
          of Vimal Daga Sir, I'm gaining invaluable experience in full-stack development and 
          working with cutting-edge technologies. I believe in continuous learning and am 
          committed to contributing to the future of AI development.
        </p>
      </div>
    </div>
  );
};

export default AboutModal;