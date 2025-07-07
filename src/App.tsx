import React, { useState, useEffect } from 'react';
import { Moon, Sun, Github, Linkedin, Mail, MapPin, Download } from 'lucide-react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CardGrid from './components/CardGrid';
import Modal from './components/Modal';
import AboutModal from './components/modals/AboutModal';
import InternshipModal from './components/modals/InternshipModal';
import ProjectsModal from './components/modals/ProjectsModal';
import SkillsModal from './components/modals/SkillsModal';
import CertificationsModal from './components/modals/CertificationsModal';
import GoalsModal from './components/modals/GoalsModal';
import AchievementsModal from './components/modals/AchievementsModal';
import ContactModal from './components/modals/ContactModal';
import Footer from './components/Footer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);

  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    } else {
      // Default to system preference
      setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  useEffect(() => {
    // Update theme
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const openModal = (modalId: string) => {
    setActiveModal(modalId);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const renderModalContent = () => {
    switch (activeModal) {
      case 'about':
        return <AboutModal onClose={closeModal} />;
      case 'internship':
        return <InternshipModal onClose={closeModal} />;
      case 'projects':
        return <ProjectsModal onClose={closeModal} />;
      case 'skills':
        return <SkillsModal onClose={closeModal} />;
      case 'certifications':
        return <CertificationsModal onClose={closeModal} />;
      case 'goals':
        return <GoalsModal onClose={closeModal} />;
      case 'achievements':
        return <AchievementsModal onClose={closeModal} />;
      case 'contact':
        return <ContactModal onClose={closeModal} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 transition-all duration-300">
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      
      <main className="relative">
        <HeroSection />
        <CardGrid onOpenModal={openModal} />
      </main>

      <Footer />

      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 z-50 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Toggle theme"
      >
        {isDarkMode ? (
          <Sun className="h-5 w-5 text-yellow-500" />
        ) : (
          <Moon className="h-5 w-5 text-gray-700" />
        )}
      </button>

      {/* Modal */}
      {activeModal && (
        <Modal isOpen={!!activeModal} onClose={closeModal}>
          {renderModalContent()}
        </Modal>
      )}
    </div>
  );
}

export default App;