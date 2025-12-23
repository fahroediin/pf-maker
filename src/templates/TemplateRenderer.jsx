import React from 'react';

const ModernTemplate = ({ config }) => (
  <div className={`h-full p-8 ${config.darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
    <nav className="flex justify-between items-center mb-10">
      <h1 className="text-2xl font-bold" style={{ color: config.primaryColor }}>{config.name}</h1>
    </nav>
    <header className="py-20 text-center">
      <h2 className="text-5xl font-extrabold mb-4">{config.role}</h2>
      <p className="text-xl opacity-80">{config.bio}</p>
      <button className="mt-8 px-6 py-2 rounded-full text-white" style={{ backgroundColor: config.primaryColor }}>
        Contact Me
      </button>
    </header>
  </div>
);

const MinimalTemplate = ({ config }) => (
  <div className={`h-full flex items-center justify-center ${config.darkMode ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'}`}>
    <div className="max-w-md text-left border-l-4 p-6" style={{ borderColor: config.primaryColor }}>
      <h1 className="text-4xl font-light mb-2">{config.name}</h1>
      <h3 className="text-lg font-medium mb-4 opacity-70">{config.role}</h3>
      <p className="italic">{config.bio}</p>
    </div>
  </div>
);

export const TemplateRenderer = ({ config }) => {
  switch (config.templateId) {
    case 'modern': return <ModernTemplate config={config} />;
    case 'minimal': return <MinimalTemplate config={config} />;
    default: return <ModernTemplate config={config} />;
  }
};