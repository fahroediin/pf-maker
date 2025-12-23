import React from 'react';
import { PortfolioProvider, usePortfolio } from './context/PortfolioContext';
import Editor from './components/Editor';
import { ModernTemplate, ClassicTemplate, TerminalTemplate } from './templates/PortfolioTemplates';

const Preview = () => {
  const { config } = usePortfolio();
  
  const renderTemplate = () => {
    switch(config.templateId) {
      case 'modern': return <ModernTemplate config={config} />;
      case 'classic': return <ClassicTemplate config={config} />;
      case 'terminal': return <TerminalTemplate config={config} />;
      default: return <ModernTemplate config={config} />;
    }
  };

  // Gaya Font Dinamis (Akar dari Scaling)
  const fontStyle = {
    fontFamily: `'${config.fontFamily}', sans-serif`,
    fontSize: `${config.baseFontSize}px`, // Semua 'em' merujuk ke sini
    lineHeight: '1.5'
  };

  return (
    <div className="flex-1 h-screen bg-gray-200 overflow-y-auto p-4 md:p-10 flex justify-center items-start">
      <link rel="stylesheet" href={`https://fonts.googleapis.com/css2?family=${config.fontFamily.replace(' ', '+')}:wght@300;400;700;900&display=swap`} />
      
      <div 
        className={`w-full max-w-4xl shadow-2xl rounded-2xl overflow-hidden transition-all duration-300 ${config.darkMode ? 'dark' : ''}`}
        style={fontStyle}
      >
        <div className="bg-white dark:bg-gray-900 min-h-[80vh]">
          {renderTemplate()}
        </div>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <PortfolioProvider>
      <div className="flex flex-col md:flex-row h-screen bg-white">
        <Editor />
        <Preview />
      </div>
    </PortfolioProvider>
  );
}