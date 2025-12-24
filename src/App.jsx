import React, { useEffect } from 'react';
import { PortfolioProvider, usePortfolio } from './context/PortfolioContext';
import Editor from './components/Editor';
import { generateTemplateHTML } from './templates/TemplateEngine';

const Preview = () => {
  const { config } = usePortfolio();

  useEffect(() => {
    // Memuat Tailwind v3 CDN
    const script = document.createElement('script');
    script.src = "https://cdn.tailwindcss.com";
    document.head.appendChild(script);

    script.onload = () => {
      window.tailwind.config = {
        darkMode: 'class',
        theme: { extend: { colors: { primary: config.primaryColor } } }
      };
    };
  }, [config.primaryColor]);

  // Memuat Google Font secara dinamis
  const fontUrl = `https://fonts.googleapis.com/css2?family=${config.fontFamily.replace(/\s+/g, '+')}:wght@300;400;700;900&display=swap`;

  return (
    <div className="flex-1 h-screen bg-gray-200 overflow-y-auto p-4 md:p-10 flex justify-center items-start">
      {/* Link Font Dinamis */}
      <link rel="stylesheet" href={fontUrl} />
      
      <div className={`w-full max-w-5xl shadow-2xl rounded-3xl overflow-hidden transition-all duration-300 ${config.darkMode ? 'dark' : ''}`}>
        <div 
          dangerouslySetInnerHTML={{ __html: generateTemplateHTML(config) }} 
          className="min-h-[85vh]"
        />
      </div>
    </div>
  );
};

export default function App() {
  return (
    <PortfolioProvider>
      <div className="flex flex-col md:flex-row h-screen bg-white overflow-hidden">
        <Editor />
        <Preview />
      </div>
    </PortfolioProvider>
  );
}