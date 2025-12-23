import React from 'react';

// --- SHARED COMPONENTS ---
const SectionTitle = ({ children, color }) => (
  <h2 className="text-xl font-black uppercase tracking-widest mb-6 flex items-center gap-2">
    <span className="w-8 h-1" style={{ backgroundColor: color }}></span>
    {children}
  </h2>
);

// --- 1. MODERN MINIMALIST (Updated) ---
export const ModernTemplate = ({ config }) => (
  <div className="min-h-full bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-8 md:p-12 transition-colors">
    <header className="mb-16">
      <h1 className="text-6xl font-black tracking-tighter mb-2" style={{ color: config.primaryColor }}>{config.name}</h1>
      <p className="text-2xl font-light opacity-60 uppercase">{config.role}</p>
    </header>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
      <section>
        <h3 className="text-xs font-black text-gray-400 uppercase mb-8 tracking-[0.3em]">Experience</h3>
        {config.experiences.map(exp => (
          <div key={exp.id} className="mb-10 group">
            <div className="flex justify-between items-baseline mb-1">
              <h4 className="text-lg font-bold">{exp.company}</h4>
              <span className="text-xs opacity-50 font-mono">{exp.dates}</span>
            </div>
            <div className="text-sm font-semibold mb-2" style={{ color: config.primaryColor }}>{exp.role}</div>
            <p className="text-sm leading-relaxed opacity-70">{exp.desc}</p>
          </div>
        ))}
      </section>

      <section className="space-y-12">
        <div>
          <h3 className="text-xs font-black text-gray-400 uppercase mb-8 tracking-[0.3em]">Education</h3>
          {config.education.map(edu => (
            <div key={edu.id} className="mb-6">
              <h4 className="font-bold">{edu.school}</h4>
              <p className="text-sm opacity-60">{edu.degree} • {edu.dates}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  </div>
);

// --- 2. CLASSIC CORPORATE (Fixed) ---
export const ClassicTemplate = ({ config }) => (
  <div className="min-h-full bg-[#f4f4f4] dark:bg-slate-950 p-6 md:p-10 font-serif">
    <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 shadow-2xl p-8 md:p-16 border-t-[12px]" style={{ borderColor: config.primaryColor }}>
      <div className="text-center border-b pb-10 mb-10 dark:border-slate-800">
        <h1 className="text-4xl font-bold mb-2 uppercase tracking-tight">{config.name}</h1>
        <p className="text-lg text-gray-500 italic">{config.role}</p>
      </div>

      <div className="space-y-12 text-slate-700 dark:text-slate-300">
        <section>
          <h2 className="text-sm font-bold uppercase tracking-widest mb-6 border-l-4 pl-4" style={{ borderColor: config.primaryColor }}>Professional Experience</h2>
          {config.experiences.map(exp => (
            <div key={exp.id} className="mb-8">
              <div className="flex justify-between font-bold text-slate-900 dark:text-white">
                <span>{exp.company}</span>
                <span>{exp.dates}</span>
              </div>
              <div className="italic mb-2" style={{ color: config.primaryColor }}>{exp.role}</div>
              <p className="text-sm leading-relaxed">{exp.desc}</p>
            </div>
          ))}
        </section>

        <section>
          <h2 className="text-sm font-bold uppercase tracking-widest mb-6 border-l-4 pl-4" style={{ borderColor: config.primaryColor }}>Education</h2>
          {config.education.map(edu => (
            <div key={edu.id} className="mb-4">
              <div className="flex justify-between font-bold text-slate-900 dark:text-white text-sm">
                <span>{edu.school}</span>
                <span>{edu.dates}</span>
              </div>
              <p className="text-sm">{edu.degree}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  </div>
);

// --- 3. CREATIVE SIDE (Grid Based) ---
export const CreativeTemplate = ({ config }) => (
  <div className="min-h-full bg-yellow-50 dark:bg-zinc-950 p-4">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full">
      <div className="md:col-span-1 p-8 rounded-3xl text-white flex flex-col justify-end" style={{ backgroundColor: config.primaryColor }}>
        <h1 className="text-4xl font-black leading-none mb-4">{config.name}</h1>
        <p className="text-lg font-medium opacity-80">{config.role}</p>
      </div>
      
      <div className="md:col-span-2 space-y-4">
        <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl shadow-sm">
          <SectionTitle color={config.primaryColor}>Experience</SectionTitle>
          <div className="space-y-6">
            {config.experiences.map(exp => (
              <div key={exp.id} className="relative pl-6 border-l-2 border-dashed border-gray-200 dark:border-zinc-700">
                <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-4" style={{ borderColor: config.primaryColor }}></span>
                <h4 className="font-bold">{exp.company}</h4>
                <p className="text-xs font-bold opacity-50 mb-2">{exp.role} | {exp.dates}</p>
                <p className="text-sm opacity-70">{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl shadow-sm">
          <SectionTitle color={config.primaryColor}>Education</SectionTitle>
          {config.education.map(edu => (
            <div key={edu.id} className="mb-4">
              <h4 className="font-bold">{edu.school}</h4>
              <p className="text-sm opacity-60">{edu.degree} ({edu.dates})</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// --- 4. TERMINAL DEV (Dark Mode Focused) ---
export const TerminalTemplate = ({ config }) => (
  <div className="min-h-full bg-[#1a1a1a] text-[#00ff00] font-mono p-4 md:p-10 overflow-hidden">
    <div className="max-w-3xl mx-auto border border-[#333] rounded-lg overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)]">
      <div className="bg-[#333] p-2 flex gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <div className="p-6 md:p-10 space-y-8 bg-black/90">
        <header>
          <p className="text-white opacity-50 mb-2">// Main Identity</p>
          <h1 className="text-3xl font-bold uppercase">{`> ${config.name}`}</h1>
          <p className="text-white">{config.role}</p>
        </header>

        <section>
          <p className="text-white opacity-50 mb-4">/* Work_History */</p>
          {config.experiences.map(exp => (
            <div key={exp.id} className="mb-6 border-l border-[#00ff00]/30 pl-4">
              <h3 className="text-white font-bold">{exp.company}</h3>
              <p className="text-xs mb-1">Role: {exp.role} [{exp.dates}]</p>
              <p className="text-xs opacity-70 leading-relaxed text-gray-400">{`// ${exp.desc}`}</p>
            </div>
          ))}
        </section>

        <section>
          <p className="text-white opacity-50 mb-4">/* Education_Level */</p>
          {config.education.map(edu => (
            <p key={edu.id} className="text-sm mb-2">{`>> ${edu.school} -- ${edu.degree}`}</p>
          ))}
        </section>
      </div>
    </div>
  </div>
);