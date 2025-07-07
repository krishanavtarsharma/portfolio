import React from 'react';
import { Target, Rocket, Globe, Users, Brain, Star } from 'lucide-react';

interface GoalsModalProps {
  onClose: () => void;
}

const GoalsModal: React.FC<GoalsModalProps> = ({ onClose }) => {
  const goals = [
    {
      id: 1,
      title: 'Become an AI Developer',
      description: 'Build expertise in artificial intelligence and machine learning to create innovative solutions.',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      timeline: 'Short-term',
      progress: 75,
      milestones: [
        'Master advanced ML algorithms',
        'Build AI-powered applications',
        'Contribute to open-source AI projects',
        'Obtain AI/ML certifications'
      ]
    },
    {
      id: 2,
      title: 'Master Automation Technologies',
      description: 'Develop expertise in automation tools and frameworks to streamline processes.',
      icon: Rocket,
      color: 'from-blue-500 to-cyan-500',
      timeline: 'Medium-term',
      progress: 60,
      milestones: [
        'Learn advanced automation frameworks',
        'Build automation solutions',
        'Implement CI/CD pipelines',
        'Automate business processes'
      ]
    },
    {
      id: 3,
      title: 'Build AI-based Scalable Solutions',
      description: 'Create large-scale AI applications that can impact millions of users worldwide.',
      icon: Globe,
      color: 'from-green-500 to-emerald-500',
      timeline: 'Long-term',
      progress: 40,
      milestones: [
        'Design scalable architectures',
        'Learn cloud computing',
        'Master distributed systems',
        'Build enterprise-grade solutions'
      ]
    },
    {
      id: 4,
      title: 'Join Global AI Communities',
      description: 'Become an active contributor to the global AI and tech community.',
      icon: Users,
      color: 'from-orange-500 to-red-500',
      timeline: 'Ongoing',
      progress: 30,
      milestones: [
        'Contribute to open-source projects',
        'Speak at tech conferences',
        'Mentor upcoming developers',
        'Build professional network'
      ]
    }
  ];

  const visionPoints = [
    {
      icon: Star,
      title: 'Innovation Leader',
      description: 'Leading the development of cutting-edge AI solutions that solve real-world problems.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Creating technology that positively impacts communities and industries worldwide.'
    },
    {
      icon: Users,
      title: 'Knowledge Sharing',
      description: 'Contributing to the tech community through mentorship and open-source contributions.'
    },
    {
      icon: Rocket,
      title: 'Continuous Growth',
      description: 'Staying at the forefront of technology through continuous learning and adaptation.'
    }
  ];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center mb-4">
          <Target className="h-8 w-8 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Career Goals
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          My vision for the future and professional aspirations
        </p>
      </div>

      {/* Goals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {goals.map((goal) => {
          const Icon = goal.icon;
          return (
            <div
              key={goal.id}
              className="bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200 dark:border-gray-600"
            >
              {/* Goal Header */}
              <div className={`bg-gradient-to-r ${goal.color} p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Icon className="h-8 w-8" />
                    <div>
                      <h3 className="text-xl font-bold">{goal.title}</h3>
                      <span className="text-sm opacity-90">{goal.timeline}</span>
                    </div>
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="mb-2">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium">Progress</span>
                    <span className="text-sm">{goal.progress}%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div
                      className="bg-white h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${goal.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Goal Content */}
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {goal.description}
                </p>

                {/* Milestones */}
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Key Milestones:
                  </h4>
                  <ul className="space-y-2">
                    {goal.milestones.map((milestone, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300"
                      >
                        <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{milestone}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Vision Statement */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl p-6 mb-8">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
          My Vision
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {visionPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center mb-3">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {point.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Action Plan */}
      <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-600">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
          Action Plan
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mb-3">
              <span className="text-white font-bold text-lg">1</span>
            </div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              Continuous Learning
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Dedicate time daily to learning new technologies and improving existing skills
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mb-3">
              <span className="text-white font-bold text-lg">2</span>
            </div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              Practical Application
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Build real-world projects to apply theoretical knowledge and gain practical experience
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center mb-3">
              <span className="text-white font-bold text-lg">3</span>
            </div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              Community Engagement
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Actively participate in tech communities and contribute to open-source projects
            </p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My journey is driven by passion for innovation and a commitment to making a positive 
            impact through technology. Each goal represents a stepping stone towards becoming 
            a skilled AI developer who can contribute meaningfully to the tech industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GoalsModal;