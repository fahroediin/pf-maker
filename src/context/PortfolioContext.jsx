import React, { createContext, useState, useContext } from 'react';

const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [config, setConfig] = useState({
    name: 'Fahrudin',
    role: 'Fullstack Developer',
    bio: 'Saya seorang pengembang yang berfokus pada solusi modern.',
    email: 'hello@fahrudin.dev',
    primaryColor: '#3b82f6',
    darkMode: false,
    templateId: 'modern',
    fontFamily: 'Inter',
    baseFontSize: 16,
    experiences: [
      { id: 1, company: 'Tech Corp', role: 'Senior Dev', dates: 'Jan 2022 - Now', desc: 'Membangun arsitektur microservices.' }
    ],
    education: [
      { id: 1, school: 'Universitas Indonesia', degree: 'S1 Teknik Informatika', dates: '2018 - 2022' }
    ],
    skills: ['React', 'Node.js', 'Tailwind CSS']
  });

  const updateConfig = (key, value) => setConfig(prev => ({ ...prev, [key]: value }));

  const addItem = (key, item) => setConfig(prev => ({ ...prev, [key]: [...prev[key], item] }));
  
  const removeItem = (key, id) => setConfig(prev => ({ ...prev, [key]: prev[key].filter(i => i.id !== id) }));

  return (
    <PortfolioContext.Provider value={{ config, updateConfig, addItem, removeItem }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => useContext(PortfolioContext);