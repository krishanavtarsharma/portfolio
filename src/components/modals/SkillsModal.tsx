import React from 'react';
import { Code, Database, Cloud, Users, Lightbulb, Settings } from 'lucide-react';

interface SkillsModalProps {
  onClose: () => void;
}

const SkillsModal: React.FC<SkillsModalProps> = ({ onClose }) => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'C++', level: 85 },
        { name: 'C', level: 80 },
        { name: 'JavaScript', level: 75 },
        { name: 'HTML/CSS', level: 85 }
      ]
    },
    {
      title: 'Frameworks & Libraries',
      icon: Settings,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Streamlit', level: 90 },
        { name: 'Flask', level: 85 },
        { name: 'OpenCV', level: 80 },
        { name: 'TensorFlow', level: 75 },
        { name: 'Scikit-learn', level: 80 }
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: Cloud,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'Docker', level: 75 },
        { name: 'Git/GitHub', level: 90 },
        { name: 'VS Code', level: 95 },
        { name: 'Arduino', level: 80 }
      ]
    },
    {
      title: 'Soft Skills',
      icon: Users,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Teamwork', level: 90 },
        { name: 'Leadership', level: 85 },
        { name: 'Problem-solving', level: 95 },
        { name: 'Communication', level: 70 },
        { name: 'Project Management', level: 80 }
      ]
    }
  ];

  const additionalSkills = [
    'Machine Learning', 'Computer Vision', 'IoT Development', 'API Development',
    'Data Analysis', 'Automation', 'Database Design', 'System Architecture',
    'Agile Development', 'Technical Writing', 'Code Review', 'Testing'
  ];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center mb-4">
          <Lightbulb className="h-8 w-8 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          My Skills
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Technical expertise and soft skills I've developed
        </p>
      </div>

      {/* Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {skillCategories.map((category, index) => {
          const Icon = category.icon;
          return (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-600"
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Additional Skills */}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
          Additional Skills & Technologies
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {additionalSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-lg p-3 text-center hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 transition-all duration-300 cursor-pointer"
            >
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Skill Highlights */}
      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
          Skill Highlights
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mb-3">
              <Code className="h-8 w-8 text-white" />
            </div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              Full-Stack Development
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Proficient in both frontend and backend development with modern technologies
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mb-3">
              <Database className="h-8 w-8 text-white" />
            </div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              AI & Machine Learning
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Experience in building ML models and AI-powered applications
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center mb-3">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              Team Collaboration
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Strong teamwork and communication skills in collaborative environments
            </p>
          </div>
        </div>
      </div>

      {/* Learning Journey */}
      <div className="mt-8 text-center">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          Continuous Learning Journey
        </h3>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          I believe in continuous learning and staying updated with the latest technologies. 
          Currently focusing on advanced AI concepts, cloud technologies, and improving my 
          communication skills to become a well-rounded developer.
        </p>
      </div>
    </div>
  );
};

export default SkillsModal;