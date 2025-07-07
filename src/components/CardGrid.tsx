import React from 'react';
import { 
  User, 
  Briefcase, 
  Code2, 
  Lightbulb, 
  Award, 
  Target, 
  Trophy, 
  Mail 
} from 'lucide-react';

interface CardGridProps {
  onOpenModal: (modalId: string) => void;
}

const CardGrid: React.FC<CardGridProps> = ({ onOpenModal }) => {
  const cards = [
    {
      id: 'about',
      title: 'About Me',
      icon: User,
      gradient: 'from-blue-500 to-cyan-500',
      description: 'Learn about my background and journey'
    },
    {
      id: 'internship',
      title: 'Internship',
      icon: Briefcase,
      gradient: 'from-purple-500 to-pink-500',
      description: 'My experience at Linux World'
    },
    {
      id: 'projects',
      title: 'Projects',
      icon: Code2,
      gradient: 'from-green-500 to-emerald-500',
      description: 'Showcase of my development work'
    },
    {
      id: 'skills',
      title: 'Skills',
      icon: Lightbulb,
      gradient: 'from-yellow-500 to-orange-500',
      description: 'Technical and soft skills'
    },
    {
      id: 'certifications',
      title: 'Certifications',
      icon: Award,
      gradient: 'from-red-500 to-pink-500',
      description: 'Professional certifications'
    },
    {
      id: 'goals',
      title: 'Career Goals',
      icon: Target,
      gradient: 'from-indigo-500 to-purple-500',
      description: 'Vision for the future'
    },
    {
      id: 'achievements',
      title: 'Achievements',
      icon: Trophy,
      gradient: 'from-amber-500 to-yellow-500',
      description: 'Notable accomplishments'
    },
    {
      id: 'contact',
      title: 'Contact Me',
      icon: Mail,
      gradient: 'from-teal-500 to-blue-500',
      description: 'Get in touch with me'
    }
  ];

  return (
    <section id="cards" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Explore My Journey
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Click on any card to dive deeper into my story, skills, and aspirations
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => {
          const Icon = card.icon;
          return (
            <div
              key={card.id}
              className="group relative"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="animate-fade-in-up">
                <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer border border-gray-200 dark:border-gray-700 hover:border-transparent">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  {/* Card Content */}
                  <div className="relative p-8">
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${card.gradient} mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {card.description}
                    </p>

                    {/* Button */}
                    <button
                      onClick={() => onOpenModal(card.id)}
                      className={`w-full py-3 px-6 rounded-xl bg-gradient-to-r ${card.gradient} text-white font-semibold transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg`}
                    >
                      Explore
                    </button>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CardGrid;