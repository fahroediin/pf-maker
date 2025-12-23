import React, { createContext, useState, useContext } from 'react';

const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [config, setConfig] = useState({
    name: 'Fahrudin',
    role: 'Fullstack Developer',
    primaryColor: '#3b82f6',
    darkMode: false,
    templateId: 'modern',
    fontFamily: 'Inter',
    baseFontSize: 16,
    experiences: [
      { id: 1, company: 'Tech Corp', role: 'Senior Dev', dates: '2022 - Now', desc: 'Membangun arsitektur microservices modern.' }
    ],
    education: [
      { id: 1, school: 'Universitas Indonesia', degree: 'S1 Teknik Informatika', dates: '2018 - 2022' }
    ],
    projects: [
      { id: 1, title: 'E-Commerce App', link: 'https://github.com', desc: 'Platform belanja online dengan fitur payment gateway.' }
    ]
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