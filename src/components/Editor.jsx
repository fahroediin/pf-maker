import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { exportProject } from '../utils/exporter';
import { Download, Plus, Trash2, Moon, Sun, Github, Type, Briefcase, GraduationCap, FolderKanban } from 'lucide-react';

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
    const updatedArray = config[key].map(item => 
      item.id === id ? { ...item, [field]: value } : item
    );
    updateConfig(key, updatedArray);
  };

  return (
    <div className="w-full md:w-96 h-screen bg-white border-r p-6 overflow-y-auto custom-scrollbar flex flex-col shadow-2xl">
      <h1 className="text-2xl font-black mb-6 tracking-tighter flex items-center gap-2">
        <Type className="text-blue-600" size={24} /> 
        PORTFOLIO SETUP
      </h1>
      
      <div className="space-y-8 flex-1">
        {/* SECTION 1: DESIGN */}
        <section className="space-y-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
          <label className="text-xs font-black uppercase text-gray-400">Tampilan & Font</label>
          <select className="w-full p-2 border rounded-md text-sm bg-white" value={config.templateId} onChange={(e) => updateConfig('templateId', e.target.value)}>
            <option value="modern">Modern Minimalist</option>
            <option value="classic">Classic Corporate</option>
            <option value="creative">Creative Side</option>
            <option value="terminal">Developer Terminal</option>
          </select>
          <div className="grid grid-cols-2 gap-2">
            <select className="w-full p-2 border rounded-md text-xs bg-white" value={config.fontFamily} onChange={(e) => updateConfig('fontFamily', e.target.value)}>
              {FONT_OPTIONS.map(f => <option key={f.value} value={f.value}>{f.name}</option>)}
            </select>
            <input type="range" min="12" max="24" className="w-full h-2 mt-3 accent-blue-600" value={config.baseFontSize} onChange={(e) => updateConfig('baseFontSize', e.target.value)} />
          </div>
          <div className="flex gap-2">
            <input type="color" className="w-12 h-10 border rounded cursor-pointer" value={config.primaryColor} onChange={e => updateConfig('primaryColor', e.target.value)} />
            <button onClick={() => updateConfig('darkMode', !config.darkMode)} className="flex-1 flex justify-between items-center px-3 py-2 bg-white border rounded-md hover:bg-gray-100 transition">
              <span className="text-xs font-bold uppercase opacity-60">Dark Mode</span>
              {config.darkMode ? <Sun size={16} className="text-yellow-500"/> : <Moon size={16}/>}
            </button>
          </div>
        </section>

        {/* SECTION 2: BASIC INFO */}
        <section className="space-y-3">
          <label className="text-xs font-black uppercase text-gray-400">Informasi Dasar</label>
          <input className="w-full p-2 border rounded text-sm" placeholder="Nama Lengkap" value={config.name} onChange={e => updateConfig('name', e.target.value)} />
          <input className="w-full p-2 border rounded text-sm" placeholder="Jabatan" value={config.role} onChange={e => updateConfig('role', e.target.value)} />
        </section>

        {/* SECTION 3: EXPERIENCE */}
        <section>
          <div className="flex justify-between items-center mb-3">
            <label className="text-xs font-black uppercase text-gray-400 flex items-center gap-2"><Briefcase size={14} /> Pengalaman</label>
            <button onClick={() => addItem('experiences', { id: Date.now(), company: '', role: '', dates: '', desc: '' })} className="p-1 bg-blue-600 text-white rounded"><Plus size={16}/></button>
          </div>
          {config.experiences.map((exp) => (
            <div key={exp.id} className="p-3 border rounded-lg mb-4 bg-white relative group shadow-sm">
              <button onClick={() => removeItem('experiences', exp.id)} className="absolute -top-2 -right-2 bg-white border text-red-500 p-1 rounded-full opacity-0 group-hover:opacity-100 transition"><Trash2 size={12}/></button>
              <input className="w-full text-sm font-bold border-b mb-2 outline-none" placeholder="Perusahaan" value={exp.company} onChange={e => updateItemInArray('experiences', exp.id, 'company', e.target.value)} />
              <div className="flex gap-2 mb-2">
                <input className="w-1/2 text-[10px] p-1 border rounded" placeholder="Role" value={exp.role} onChange={e => updateItemInArray('experiences', exp.id, 'role', e.target.value)} />
                <input className="w-1/2 text-[10px] p-1 border rounded" placeholder="Tahun" value={exp.dates} onChange={e => updateItemInArray('experiences', exp.id, 'dates', e.target.value)} />
              </div>
              <textarea className="w-full text-[10px] p-1 border rounded h-16" placeholder="Deskripsi..." value={exp.desc} onChange={e => updateItemInArray('experiences', exp.id, 'desc', e.target.value)} />
            </div>
          ))}
        </section>

        {/* SECTION 4: PROJECTS */}
        <section>
          <div className="flex justify-between items-center mb-3">
            <label className="text-xs font-black uppercase text-gray-400 flex items-center gap-2"><FolderKanban size={14} /> Projects</label>
            <button onClick={() => addItem('projects', { id: Date.now(), title: '', link: '', desc: '' })} className="p-1 bg-purple-600 text-white rounded"><Plus size={16}/></button>
          </div>
          {config.projects.map((proj) => (
            <div key={proj.id} className="p-3 border rounded-lg mb-4 bg-white relative group shadow-sm">
              <button onClick={() => removeItem('projects', proj.id)} className="absolute -top-2 -right-2 bg-white border text-red-500 p-1 rounded-full opacity-0 group-hover:opacity-100 transition"><Trash2 size={12}/></button>
              <input className="w-full text-sm font-bold border-b mb-2 outline-none" placeholder="Nama Project" value={proj.title} onChange={e => updateItemInArray('projects', proj.id, 'title', e.target.value)} />
              <input className="w-full text-[10px] p-1 border rounded mb-2" placeholder="Link" value={proj.link} onChange={e => updateItemInArray('projects', proj.id, 'link', e.target.value)} />
              <textarea className="w-full text-[10px] p-1 border rounded h-16" placeholder="Deskripsi..." value={proj.desc} onChange={e => updateItemInArray('projects', proj.id, 'desc', e.target.value)} />
            </div>
          ))}
        </section>

        {/* SECTION 5: EDUCATION */}
        <section>
          <div className="flex justify-between items-center mb-3">
            <label className="text-xs font-black uppercase text-gray-400 flex items-center gap-2"><GraduationCap size={14} /> Pendidikan</label>
            <button onClick={() => addItem('education', { id: Date.now(), school: '', degree: '', dates: '' })} className="p-1 bg-green-600 text-white rounded"><Plus size={16}/></button>
          </div>
          {config.education.map((edu) => (
            <div key={edu.id} className="p-3 border rounded-lg mb-3 bg-white relative group">
              <button onClick={() => removeItem('education', edu.id)} className="absolute -top-2 -right-2 bg-white border text-red-500 p-1 rounded-full opacity-0 group-hover:opacity-100 transition"><Trash2 size={12}/></button>
              <input className="w-full text-sm font-bold border-b mb-2 outline-none" placeholder="Sekolah" value={edu.school} onChange={e => updateItemInArray('education', edu.id, 'school', e.target.value)} />
              <div className="flex gap-2">
                <input className="w-1/2 text-[10px] p-1 border rounded" placeholder="Gelar" value={edu.degree} onChange={e => updateItemInArray('education', edu.id, 'degree', e.target.value)} />
                <input className="w-1/2 text-[10px] p-1 border rounded" placeholder="Tahun" value={edu.dates} onChange={e => updateItemInArray('education', edu.id, 'dates', e.target.value)} />
              </div>
            </div>
          ))}
        </section>
      </div>

      <div className="pt-6 border-t space-y-3 mt-6 bg-white sticky bottom-0">
        <button onClick={() => exportProject(config)} className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition shadow-lg">
          <Download size={18}/> Download ZIP
        </button>
        <button onClick={() => window.open('https://github.com/new', '_blank')} className="w-full flex items-center justify-center gap-2 bg-gray-900 text-white py-3 rounded-xl font-bold hover:bg-black transition">
          <Github size={18}/> Push ke GitHub
        </button>
      </div>
    </div>
  );
};

export default Editor;