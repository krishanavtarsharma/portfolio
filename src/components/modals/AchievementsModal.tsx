import React from 'react';
import { Trophy, Star, Award, TrendingUp, Users, BookOpen } from 'lucide-react';

interface AchievementsModalProps {
  onClose: () => void;
}

const AchievementsModal: React.FC<AchievementsModalProps> = ({ onClose }) => {
  const achievements = [
    {
      id: 1,
      title: 'Top 10% University Merit',
      description: 'Achieved top 10% ranking in university academics with consistent high performance.',
      icon: Star,
      color: 'from-yellow-500 to-orange-500',
      date: '2024',
      category: 'Academic',
      metrics: {
        value: 'Top 10%',
        label: 'Academic Ranking'
      }
    },
    {
      id: 2,
      title: 'Internship Team Lead',
      description: 'Led frontend and backend development teams during internship at Linux World.',
      icon: Users,
      color: 'from-blue-500 to-purple-500',
      date: '2024',
      category: 'Leadership',
      metrics: {
        value: '5+',
        label: 'Team Members Led'
      }
    },
    {
      id: 3,
      title: 'Consistent Team Contributor',
      description: 'Recognized as a reliable team member with consistent contributions to projects.',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500',
      date: '2024',
      category: 'Teamwork',
      metrics: {
        value: '15+',
        label: 'Projects Contributed'
      }
    },
    {
      id: 4,
      title: 'Real-World Solutions Builder',
      description: 'Developed practical applications that solve real problems for actual users.',
      icon: BookOpen,
      color: 'from-purple-500 to-pink-500',
      date: '2024',
      category: 'Innovation',
      metrics: {
        value: '12+',
        label: 'Solutions Built'
      }
    }
  ];

  const milestones = [
    {
      year: '2023',
      title: 'Started BCA Journey',
      description: 'Began Bachelor of Computer Applications with AI & IoT specialization'
    },
    {
      year: '2024',
      title: 'Internship at Linux World',
      description: 'Joined Linux World as a full-stack developer intern under Vimal Daga Sir'
    },
    {
      year: '2024',
      title: 'Multiple Certifications',
      description: 'Earned certifications in Salesforce, MongoDB, and AI/ML technologies'
    },
    {
      year: '2024',
      title: 'Project Portfolio',
      description: 'Built comprehensive portfolio of 12+ projects across different domains'
    }
  ];

  const stats = [
    { label: 'Projects Completed', value: '12+', icon: BookOpen },
    { label: 'Technologies Mastered', value: '20+', icon: Star },
    { label: 'Certifications Earned', value: '4', icon: Award },
    { label: 'Team Projects', value: '8+', icon: Users }
  ];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 flex items-center justify-center mb-4">
          <Trophy className="h-8 w-8 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          My Achievements
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Notable accomplishments and milestones in my journey
        </p>
      </div>

      {/* Achievement Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-xl p-4 text-center shadow-lg border border-gray-200 dark:border-gray-600"
            >
              <Icon className="h-8 w-8 mx-auto mb-2 text-amber-500" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                {stat.label}
              </div>
            </div>
          );
        })}
      </div>

      {/* Major Achievements */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {achievements.map((achievement) => {
          const Icon = achievement.icon;
          return (
            <div
              key={achievement.id}
              className="bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200 dark:border-gray-600"
            >
              {/* Achievement Header */}
              <div className={`bg-gradient-to-r ${achievement.color} p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Icon className="h-8 w-8" />
                    <div>
                      <h3 className="text-xl font-bold">{achievement.title}</h3>
                      <span className="text-sm opacity-90">{achievement.date}</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">{achievement.metrics.value}</div>
                    <div className="text-xs opacity-90">{achievement.metrics.label}</div>
                  </div>
                </div>
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">
                  {achievement.category}
                </span>
              </div>

              {/* Achievement Content */}
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Timeline */}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Achievement Timeline
        </h3>
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-500 to-yellow-500 rounded-full"></div>
          
          {/* Timeline Items */}
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-white dark:bg-gray-700 rounded-xl p-4 shadow-lg border border-gray-200 dark:border-gray-600">
                    <div className="text-2xl font-bold text-amber-500 mb-2">
                      {milestone.year}
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {milestone.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {milestone.description}
                    </p>
                  </div>
                </div>
                
                {/* Timeline Dot */}
                <div className="w-2/12 flex justify-center">
                  <div className="w-6 h-6 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"></div>
                </div>
                
                <div className="w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recognition */}
      <div className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 rounded-xl p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
          Recognition & Impact
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mb-3">
              <Star className="h-8 w-8 text-white" />
            </div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              Academic Excellence
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Consistent top performance in university with focus on AI & IoT specialization
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mb-3">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              Team Leadership
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Successfully led development teams and contributed to collaborative projects
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center mb-3">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              Practical Innovation
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Built real-world solutions that address actual problems and user needs
            </p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            These achievements reflect my dedication to excellence, continuous learning, and 
            commitment to making a positive impact through technology. Each milestone represents 
            growth and progress toward my goal of becoming a skilled AI developer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AchievementsModal;