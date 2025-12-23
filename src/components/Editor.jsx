import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { exportProject } from '../utils/exporter';
import { Download, Plus, Trash2, Moon, Sun, Github } from 'lucide-react';

const Editor = () => {
  const { config, updateConfig, addItem, removeItem } = usePortfolio();

  // Helper untuk update item dalam array (Experience/Education)
  const updateItemInArray = (key, id, field, value) => {
    const updatedArray = config[key].map(item => 
      item.id === id ? { ...item, [field]: value } : item
    );
    updateConfig(key, updatedArray);
  };

  return (
    <div className="w-full md:w-96 h-screen bg-white border-r p-6 overflow-y-auto custom-scrollbar flex flex-col">
      <h1 className="text-2xl font-black mb-6 tracking-tighter">PORTFOLIO SETUP</h1>
      
      <div className="space-y-8 flex-1">
        {/* Template & Theme */}
        <section className="space-y-3">
          <label className  ="text-xs font-black uppercase text-gray-400">Tampilan & Warna</label>
          <select 
            className="w-full p-2 border rounded-md"
            value={config.templateId}
            onChange={(e) => updateConfig('templateId', e.target.value)}
          >
            <option value="modern">Modern Minimalist</option>
            <option value="classic">Classic Corporate</option>
            <option value="creative">Creative Playful</option>
            <option value="terminal">Developer Terminal</option>
          </select>
          
          <div className="flex gap-2">
            <input 
                type="color" 
                className="w-12 h-10 border rounded cursor-pointer" 
                value={config.primaryColor} 
                onChange={e => updateConfig('primaryColor', e.target.value)} 
            />
            <button 
                onClick={() => updateConfig('darkMode', !config.darkMode)}
                className="flex-1 flex justify-between items-center px-3 py-2 bg-gray-100 rounded-md hover:bg-gray-200 transition"
            >
                <span className="text-sm font-medium">Mode Gelap</span>
                {config.darkMode ? <Sun size={16} className="text-yellow-500"/> : <Moon size={16}/>}
            </button>
          </div>
        </section>

        {/* Informasi Dasar */}
        <section className="space-y-3">
          <label className="text-xs font-black uppercase text-gray-400">Informasi Dasar</label>
          <input className="w-full p-2 border rounded text-sm" placeholder="Nama Lengkap" value={config.name} onChange={e => updateConfig('name', e.target.value)} />
          <input className="w-full p-2 border rounded text-sm" placeholder="Jabatan (e.g. Web Developer)" value={config.role} onChange={e => updateConfig('role', e.target.value)} />
        </section>

        {/* Pengalaman Kerja */}
        <section>
          <div className="flex justify-between items-center mb-3">
            <label className="text-xs font-black uppercase text-gray-400">Pengalaman Kerja</label>
            <button 
                onClick={() => addItem('experiences', { id: Date.now(), company: '', role: '', dates: '', desc: '' })} 
                className="p-1 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
                <Plus size={16}/>
            </button>
          </div>
          
          {config.experiences.map((exp) => (
            <div key={exp.id} className="p-3 border rounded-lg mb-4 bg-gray-50 relative group shadow-sm">
              <button 
                onClick={() => removeItem('experiences', exp.id)} 
                className="absolute -top-2 -right-2 bg-white border text-red-500 p-1 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition"
              >
                <Trash2 size={12}/>
              </button>
              
              <div className="space-y-2">
                <input 
                    className="w-full text-sm font-bold bg-transparent border-b outline-none focus:border-blue-500" 
                    placeholder="Nama Perusahaan" 
                    value={exp.company} 
                    onChange={e => updateItemInArray('experiences', exp.id, 'company', e.target.value)} 
                />
                <div className="flex gap-2">
                    <input 
                        className="w-1/2 text-xs p-1 border rounded bg-white" 
                        placeholder="Jabatan" 
                        value={exp.role} 
                        onChange={e => updateItemInArray('experiences', exp.id, 'role', e.target.value)} 
                    />
                    <input 
                        className="w-1/2 text-xs p-1 border rounded bg-white" 
                        placeholder="Bulan/Tahun" 
                        value={exp.dates} 
                        onChange={e => updateItemInArray('experiences', exp.id, 'dates', e.target.value)} 
                    />
                </div>
                <textarea 
                    className="w-full text-xs p-1 border rounded bg-white h-16" 
                    placeholder="Deskripsi pekerjaan..." 
                    value={exp.desc} 
                    onChange={e => updateItemInArray('experiences', exp.id, 'desc', e.target.value)} 
                />
              </div>
            </div>
          ))}
        </section>

        {/* Pendidikan (Opsional: Ditambahkan agar sinkron dengan Preview) */}
        <section>
          <div className="flex justify-between items-center mb-3">
            <label className="text-xs font-black uppercase text-gray-400">Pendidikan</label>
            <button 
                onClick={() => addItem('education', { id: Date.now(), school: '', degree: '', dates: '' })} 
                className="p-1 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
                <Plus size={16}/>
            </button>
          </div>
          {config.education.map((edu) => (
            <div key={edu.id} className="p-3 border rounded-lg mb-3 bg-gray-50 relative group">
                <button onClick={() => removeItem('education', edu.id)} className="absolute -top-2 -right-2 bg-white border text-red-500 p-1 rounded-full opacity-0 group-hover:opacity-100 transition"><Trash2 size={12}/></button>
                <input className="w-full text-sm font-bold bg-transparent border-b mb-2" placeholder="Nama Sekolah/Univ" value={edu.school} onChange={e => updateItemInArray('education', edu.id, 'school', e.target.value)} />
                <div className="flex gap-2">
                    <input className="w-1/2 text-xs p-1 border rounded bg-white" placeholder="Gelar/Jurusan" value={edu.degree} onChange={e => updateItemInArray('education', edu.id, 'degree', e.target.value)} />
                    <input className="w-1/2 text-xs p-1 border rounded bg-white" placeholder="Tahun" value={edu.dates} onChange={e => updateItemInArray('education', edu.id, 'dates', e.target.value)} />
                </div>
            </div>
          ))}
        </section>
      </div>

      {/* Tombol Aksi di Bawah */}
      <div className="pt-6 border-t space-y-3 mt-6">
        <button 
            onClick={() => exportProject(config)} 
            className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition shadow-lg"
        >
          <Download size={18}/> Download ZIP
        </button>
        <button 
            onClick={() => window.open('https://github.com/new', '_blank')}
            className="w-full flex items-center justify-center gap-2 bg-gray-900 text-white py-3 rounded-xl font-bold hover:bg-black transition shadow-lg"
        >
          <Github size={18}/> Hubungkan GitHub
        </button>
      </div>
    </div>
  );
};

export default Editor;