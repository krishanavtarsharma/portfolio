import React from 'react';
import { Award, Calendar, ExternalLink, CheckCircle } from 'lucide-react';

interface CertificationsModalProps {
  onClose: () => void;
}

const CertificationsModal: React.FC<CertificationsModalProps> = ({ onClose }) => {
  const certifications = [
    {
      id: 1,
      title: 'Salesforce Workshop Certificate',
      issuer: 'Salesforce',
      date: '2024',
      type: 'Workshop',
      description: 'Comprehensive workshop on Salesforce CRM platform, covering administration, development, and best practices.',
      skills: ['Salesforce Administration', 'CRM Management', 'Workflow Automation', 'Data Management'],
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
      verified: true
    },
    {
      id: 2,
      title: 'MongoDB Developer Certificate',
      issuer: 'MongoDB University',
      date: '2024',
      type: 'Professional Certificate',
      description: 'Professional certification in MongoDB database development, including data modeling and query optimization.',
      skills: ['MongoDB', 'NoSQL Databases', 'Data Modeling', 'Query Optimization', 'Database Administration'],
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400',
      verified: true
    },
    {
      id: 3,
      title: 'Internship Completion Certificate',
      issuer: 'Linux World Informatics Pvt. Ltd.',
      date: '2024',
      type: 'Internship',
      description: 'Completed full-stack development internship under the mentorship of Vimal Daga Sir.',
      skills: ['Python', 'Streamlit', 'Flask', 'Docker', 'MongoDB', 'Full-Stack Development'],
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400',
      verified: true
    },
    {
      id: 4,
      title: 'Generative AI & Machine Learning',
      issuer: 'Online Learning Platform',
      date: '2024',
      type: 'Course Certificate',
      description: 'Advanced course covering generative AI techniques, machine learning algorithms, and practical applications.',
      skills: ['Generative AI', 'Machine Learning', 'Deep Learning', 'Neural Networks', 'AI Ethics'],
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=400',
      verified: true
    }
  ];

  const certificationTypes = [
    { type: 'Professional Certificate', count: 2, color: 'from-blue-500 to-cyan-500' },
    { type: 'Workshop', count: 1, color: 'from-purple-500 to-pink-500' },
    { type: 'Internship', count: 1, color: 'from-green-500 to-emerald-500' },
    { type: 'Course Certificate', count: 1, color: 'from-orange-500 to-red-500' }
  ];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center mb-4">
          <Award className="h-8 w-8 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          My Certifications
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Professional certifications and learning achievements
        </p>
      </div>

      {/* Certification Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {certificationTypes.map((type, index) => (
          <div
            key={index}
            className={`bg-gradient-to-r ${type.color} rounded-xl p-4 text-white text-center`}
          >
            <div className="text-2xl font-bold mb-1">{type.count}</div>
            <div className="text-sm opacity-90">{type.type}</div>
          </div>
        ))}
      </div>

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200 dark:border-gray-600"
          >
            {/* Certificate Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full">
                    {cert.type}
                  </span>
                  {cert.verified && (
                    <div className="flex items-center gap-1 text-white text-sm">
                      <CheckCircle className="h-4 w-4" />
                      <span>Verified</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Certificate Content */}
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {cert.title}
              </h3>
              
              <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300 mb-3">
                <div className="flex items-center gap-1">
                  <Award className="h-4 w-4" />
                  <span>{cert.issuer}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{cert.date}</span>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                {cert.description}
              </p>

              {/* Skills */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Skills Gained:
                </h4>
                <div className="flex flex-wrap gap-1">
                  {cert.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-xs rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg hover:from-red-600 hover:to-pink-600 transition-all duration-200">
                <ExternalLink className="h-4 w-4" />
                View Certificate
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Certification Journey */}
      <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 rounded-xl p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
          Certification Journey
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mb-3">
              <span className="text-white font-bold text-lg">4</span>
            </div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              Total Certifications
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Across various technology domains
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mb-3">
              <span className="text-white font-bold text-lg">2024</span>
            </div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              Year of Achievement
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              All certifications earned recently
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center mb-3">
              <CheckCircle className="h-6 w-6 text-white" />
            </div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              Verified Status
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              All certifications are verified
            </p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            These certifications represent my commitment to continuous learning and professional 
            development. Each certification has enhanced my skills and knowledge in specific areas 
            of technology and development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CertificationsModal;