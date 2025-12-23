import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { exportProject } from '../utils/exporter';
import { Download, Plus, Trash2, Moon, Sun, Github, Type } from 'lucide-react';

const FONT_OPTIONS = [
  { name: 'Inter (Sans)', value: 'Inter' },
  { name: 'Playfair Display (Serif)', value: 'Playfair Display' },
  { name: 'Poppins (Modern)', value: 'Poppins' },
  { name: 'JetBrains Mono (Code)', value: 'JetBrains Mono' },
  { name: 'Lora (Elegant)', value: 'Lora' },
];

const Editor = () => {
  const { config, updateConfig, addItem, removeItem } = usePortfolio();

  const updateItemInArray = (key, id, field, value) => {
    const updatedArray = config[key].map(item => item.id === id ? { ...item, [field]: value } : item);
    updateConfig(key, updatedArray);
  };

  return (
    <div className="w-full md:w-96 h-screen bg-white border-r p-6 overflow-y-auto custom-scrollbar flex flex-col shadow-2xl">
      <h1 className="text-2xl font-black mb-6 flex items-center gap-2 italic">
        <Type className="text-blue-600" /> BUILDER
      </h1>
      
      <div className="space-y-8 flex-1">
        {/* Appearance Section */}
        <section className="space-y-4 p-4 bg-gray-50 rounded-xl">
          <label className="text-xs font-black uppercase text-gray-400">Design & Typography</label>
          
          <select className="w-full p-2 border rounded-md text-sm" value={config.templateId} onChange={(e) => updateConfig('templateId', e.target.value)}>
            <option value="modern">Modern Minimalist</option>
            <option value="classic">Classic Corporate</option>
            <option value="creative">Creative Playful</option>
            <option value="terminal">Developer Terminal</option>
          </select>

          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-bold opacity-50">Font Family</label>
              <select className="w-full p-1 border rounded text-xs" value={config.fontFamily} onChange={(e) => updateConfig('fontFamily', e.target.value)}>
                {FONT_OPTIONS.map(f => <option key={f.value} value={f.value}>{f.name}</option>)}
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-bold opacity-50">Base Size: {config.baseFontSize}px</label>
              <input type="range" min="12" max="24" value={config.baseFontSize} onChange={(e) => updateConfig('baseFontSize', e.target.value)} className="w-full h-2 mt-2" />
            </div>
          </div>

          <div className="flex gap-2">
            <input type="color" className="w-10 h-10 border rounded cursor-pointer" value={config.primaryColor} onChange={e => updateConfig('primaryColor', e.target.value)} />
            <button onClick={() => updateConfig('darkMode', !config.darkMode)} className="flex-1 flex justify-between items-center px-3 py-2 bg-white border rounded-md">
              <span className="text-xs font-bold">Dark Mode</span>
              {config.darkMode ? <Sun size={14} className="text-yellow-500"/> : <Moon size={14}/>}
            </button>
          </div>
        </section>

        {/* Basic Info */}
        <section className="space-y-3">
           <label className="text-xs font-black uppercase text-gray-400">Basic Info</label>
           <input className="w-full p-2 border rounded text-sm" placeholder="Full Name" value={config.name} onChange={e => updateConfig('name', e.target.value)} />
           <input className="w-full p-2 border rounded text-sm" placeholder="Job Title" value={config.role} onChange={e => updateConfig('role', e.target.value)} />
        </section>

        {/* Work Experience */}
        <section>
          <div className="flex justify-between items-center mb-3">
            <label className="text-xs font-black uppercase text-gray-400">Experience</label>
            <button onClick={() => addItem('experiences', { id: Date.now(), company: '', role: '', dates: '', desc: '' })} className="p-1 bg-blue-600 text-white rounded"><Plus size={14}/></button>
          </div>
          {config.experiences.map(exp => (
            <div key={exp.id} className="p-3 border rounded-lg mb-3 bg-white relative group">
              <button onClick={() => removeItem('experiences', exp.id)} className="absolute top-1 right-1 text-red-500 opacity-0 group-hover:opacity-100"><Trash2 size={12}/></button>
              <input className="w-full text-xs font-bold mb-1 outline-none border-b" placeholder="Company" value={exp.company} onChange={e => updateItemInArray('experiences', exp.id, 'company', e.target.value)} />
              <div className="flex gap-1 mb-1">
                <input className="w-1/2 text-[10px] p-1 border rounded" placeholder="Role" value={exp.role} onChange={e => updateItemInArray('experiences', exp.id, 'role', e.target.value)} />
                <input className="w-1/2 text-[10px] p-1 border rounded" placeholder="Dates" value={exp.dates} onChange={e => updateItemInArray('experiences', exp.id, 'dates', e.target.value)} />
              </div>
              <textarea className="w-full text-[10px] p-1 border rounded h-12" placeholder="Description" value={exp.desc} onChange={e => updateItemInArray('experiences', exp.id, 'desc', e.target.value)} />
            </div>
          ))}
        </section>

        {/* Education */}
        <section>
          <div className="flex justify-between items-center mb-3">
            <label className="text-xs font-black uppercase text-gray-400">Education</label>
            <button onClick={() => addItem('education', { id: Date.now(), school: '', degree: '', dates: '' })} className="p-1 bg-green-600 text-white rounded"><Plus size={14}/></button>
          </div>
          {config.education.map(edu => (
            <div key={edu.id} className="p-3 border rounded-lg mb-2 bg-white group relative">
              <button onClick={() => removeItem('education', edu.id)} className="absolute top-1 right-1 text-red-500 opacity-0 group-hover:opacity-100"><Trash2 size={12}/></button>
              <input className="w-full text-xs font-bold outline-none border-b mb-1" placeholder="School Name" value={edu.school} onChange={e => updateItemInArray('education', edu.id, 'school', e.target.value)} />
              <input className="w-full text-[10px] border-none" placeholder="Degree / Dates" value={`${edu.degree} | ${edu.dates}`} onChange={e => {
                  const parts = e.target.value.split('|');
                  updateItemInArray('education', edu.id, 'degree', parts[0]?.trim());
                  updateItemInArray('education', edu.id, 'dates', parts[1]?.trim());
              }} />
            </div>
          ))}
        </section>
      </div>

      <div className="pt-6 border-t space-y-2">
        <button onClick={() => exportProject(config)} className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition">
          <Download size={18}/> Download ZIP
        </button>
        <button onClick={() => window.open('https://github.com/new', '_blank')} className="w-full flex items-center justify-center gap-2 bg-gray-900 text-white py-3 rounded-xl font-bold hover:bg-black transition">
          <Github size={18}/> Push to GitHub
        </button>
      </div>
    </div>
  );
};

export default Editor;