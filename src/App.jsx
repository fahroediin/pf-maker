import React from 'react';
import { PortfolioProvider, usePortfolio } from './context/PortfolioContext';
import Editor from './components/Editor';
import { ModernTemplate, ClassicTemplate, CreativeTemplate, TerminalTemplate } from './templates/PortfolioTemplates';

const Preview = () => {
  const { config } = usePortfolio();
  
  const renderTemplate = () => {
    switch(config.templateId) {
      case 'modern': return <ModernTemplate config={config} />;
      case 'classic': return <ClassicTemplate config={config} />;
      case 'creative': return <CreativeTemplate config={config} />;
      case 'terminal': return <TerminalTemplate config={config} />;
      default: return <ModernTemplate config={config} />;
    }
  };

  return (
    <div className="flex-1 h-screen bg-gray-200 overflow-y-auto p-4 md:p-10 flex justify-center items-start">
      <div className={`w-full max-w-4xl shadow-2xl rounded-2xl overflow-hidden ${config.darkMode ? 'dark' : ''}`}>
        {renderTemplate()}
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