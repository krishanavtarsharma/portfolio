import React, { useState } from 'react';
import { Code, ExternalLink, Github, Filter, Search } from 'lucide-react';

interface ProjectsModalProps {
  onClose: () => void;
}

const ProjectsModal: React.FC<ProjectsModalProps> = ({ onClose }) => {
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const projects = [
    {
      id: 1,
      title: 'AI Voice Analyzer & Age Detector',
      description: 'Advanced AI system that analyzes voice patterns to predict age and gender with high accuracy.',
      category: 'AI/ML',
      tools: ['Python', 'TensorFlow', 'OpenCV', 'Speech Recognition'],
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=400',
      github: '#',
      demo: '#'
    },
    {
      id: 2,
      title: 'Mood-Based Song Recommender',
      description: 'ML-powered music recommendation system that suggests songs based on user mood and preferences.',
      category: 'AI/ML',
      tools: ['Python', 'Scikit-learn', 'Spotify API', 'Flask'],
      image: 'https://images.pexels.com/photos/3693001/pexels-photo-3693001.jpeg?auto=compress&cs=tinysrgb&w=400',
      github: '#',
      demo: '#'
    },
    {
      id: 3,
      title: 'Hand Gesture Controlled Car',
      description: 'IoT project controlling a remote car using hand gestures detected through computer vision.',
      category: 'IoT',
      tools: ['Arduino', 'OpenCV', 'Python', 'Hardware'],
      image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=400',
      github: '#',
      demo: '#'
    },
    {
      id: 4,
      title: 'Hand-Controlled Calculator',
      description: 'Interactive calculator controlled by hand gestures using computer vision and gesture recognition.',
      category: 'Computer Vision',
      tools: ['OpenCV', 'Python', 'MediaPipe', 'Tkinter'],
      image: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=400',
      github: '#',
      demo: '#'
    },
    {
      id: 5,
      title: 'Disease Predictor',
      description: 'ML model that predicts potential diseases based on symptoms and medical history data.',
      category: 'AI/ML',
      tools: ['Python', 'Pandas', 'Scikit-learn', 'Streamlit'],
      image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=400',
      github: '#',
      demo: '#'
    },
    {
      id: 6,
      title: 'Student Marks Predictor',
      description: 'Educational ML tool that predicts student performance based on various academic factors.',
      category: 'AI/ML',
      tools: ['Python', 'Machine Learning', 'Data Analysis', 'Flask'],
      image: 'https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=400',
      github: '#',
      demo: '#'
    },
    {
      id: 7,
      title: 'Digital File Explorer',
      description: 'Enhanced file management system with advanced search and organization capabilities.',
      category: 'Web Development',
      tools: ['Python', 'Tkinter', 'OS Module', 'GUI'],
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400',
      github: '#',
      demo: '#'
    },
    {
      id: 8,
      title: 'WhatsApp Automation',
      description: 'Automated messaging and bulk operations for WhatsApp using Python automation.',
      category: 'Automation',
      tools: ['Python', 'Selenium', 'PyAutoGUI', 'Automation'],
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=400',
      github: '#',
      demo: '#'
    }
  ];

  const categories = ['All', 'AI/ML', 'IoT', 'Computer Vision', 'Web Development', 'Automation'];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = filter === 'All' || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="p-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mb-4">
          <Code className="h-8 w-8 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          My Projects
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Showcase of my development work and technical expertise
        </p>
      </div>

      {/* Filters and Search */}
      <div className="mb-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
        {/* Category Filter */}
        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200 ${
                  filter === category
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map(project => (
          <div
            key={project.id}
            className="bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200 dark:border-gray-600"
          >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-2 left-2">
                <span className="px-2 py-1 bg-green-500 text-white text-xs rounded-full">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* Tools */}
              <div className="flex flex-wrap gap-1 mb-4">
                {project.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-xs rounded"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <a
                  href={project.github}
                  className="flex items-center gap-1 px-3 py-2 bg-gray-800 dark:bg-gray-600 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-500 transition-colors duration-200 text-sm"
                >
                  <Github className="h-4 w-4" />
                  Code
                </a>
                <a
                  href={project.demo}
                  className="flex items-center gap-1 px-3 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200 text-sm"
                >
                  <ExternalLink className="h-4 w-4" />
                  Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Stats */}
      <div className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
          Project Statistics
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">12+</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Total Projects</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">5</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Categories</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">20+</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Technologies</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">100%</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Completion Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsModal;