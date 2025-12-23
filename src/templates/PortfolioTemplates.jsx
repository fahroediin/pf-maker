import React from 'react';

// --- 1. MODERN MINIMALIST ---
export const ModernTemplate = ({ config }) => (
  <div className="p-8 md:p-12 bg-white dark:bg-gray-900 transition-colors duration-500 min-h-full">
    <header className="mb-16 border-b-4 pb-8" style={{ borderColor: config.primaryColor }}>
      <h1 className="font-black tracking-tighter mb-2 uppercase" style={{ color: config.primaryColor, fontSize: '4em', lineHeight: '1' }}>{config.name}</h1>
      <p className="font-light opacity-60 uppercase tracking-[0.2em]" style={{ fontSize: '1.2em' }}>{config.role}</p>
    </header>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
      <section>
        <h3 className="font-black opacity-30 uppercase mb-8 tracking-widest" style={{ fontSize: '0.7em' }}>Experience</h3>
        {config.experiences.map(exp => (
          <div key={exp.id} className="mb-10">
            <h4 className="font-bold dark:text-white" style={{ fontSize: '1.2em' }}>{exp.company}</h4>
            <div className="font-semibold mb-2 opacity-60" style={{ fontSize: '0.9em' }}>{exp.role} | {exp.dates}</div>
            <p className="opacity-70 dark:text-gray-300" style={{ fontSize: '0.9em' }}>{exp.desc}</p>
          </div>
        ))}
      </section>
      <section>
        <h3 className="font-black opacity-30 uppercase mb-8 tracking-widest" style={{ fontSize: '0.7em' }}>Projects</h3>
        {config.projects.map(proj => (
          <div key={proj.id} className="mb-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl">
            <h4 className="font-bold underline mb-2" style={{ fontSize: '1.1em', color: config.primaryColor }}>{proj.title}</h4>
            <p className="opacity-70 dark:text-gray-300" style={{ fontSize: '0.85em' }}>{proj.desc}</p>
          </div>
        ))}
      </section>
    </div>
  </div>
);

// --- 2. CREATIVE SIDE ---
export const CreativeTemplate = ({ config }) => (
  <div className="flex flex-col md:flex-row items-stretch min-h-full bg-stone-100 dark:bg-zinc-950 transition-colors duration-500">
    <div className="w-full md:w-1/3 p-10 flex flex-col justify-end text-white relative overflow-hidden min-h-[300px]" style={{ backgroundColor: config.primaryColor }}>
      <div className="relative z-10">
        <h1 className="font-black leading-none mb-6 italic tracking-tighter" style={{ fontSize: '4.5em' }}>{config.name}</h1>
        <p className="font-bold uppercase tracking-[0.3em] opacity-80" style={{ fontSize: '1em' }}>{config.role}</p>
      </div>
      <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
    </div>
    <div className="w-full md:w-2/3 p-8 md:p-12 space-y-10 overflow-y-auto">
      <div className="bg-white dark:bg-zinc-900 p-10 rounded-[2.5rem] shadow-sm">
        <h2 className="font-black uppercase mb-6 flex items-center gap-2 dark:text-white" style={{ fontSize: '1.2em' }}>
          <span className="w-8 h-1" style={{ backgroundColor: config.primaryColor }}></span> JOURNEY
        </h2>
        {config.experiences.map(exp => (
          <div key={exp.id} className="mb-8">
            <h4 className="font-black dark:text-white" style={{ fontSize: '1.1em' }}>{exp.company}</h4>
            <p className="font-bold opacity-50 mb-2" style={{ color: config.primaryColor, fontSize: '0.8em' }}>{exp.role} | {exp.dates}</p>
            <p className="opacity-70 dark:text-gray-300" style={{ fontSize: '0.9em' }}>{exp.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// --- 3. CLASSIC CORPORATE ---
export const ClassicTemplate = ({ config }) => (
  <div className="p-6 md:p-10 bg-gray-100 dark:bg-slate-950 min-h-full font-serif transition-colors duration-500">
    <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 shadow-2xl p-8 md:p-16 border-double border-4 transition-colors duration-500" style={{ borderColor: config.primaryColor }}>
      <header className="text-center mb-16 border-b pb-10 dark:border-slate-800">
        <h1 className="font-bold mb-4 uppercase tracking-tighter text-gray-900 dark:text-white" style={{ fontSize: '3em' }}>{config.name}</h1>
        <div className="h-1 w-20 bg-black dark:bg-white mx-auto mb-6"></div>
        <p className="italic text-gray-600 dark:text-slate-400" style={{ fontSize: '1.5em' }}>{config.role}</p>
      </header>
      <section>
        <h2 className="text-center font-bold mb-10 underline underline-offset-8 text-gray-900 dark:text-white" style={{ fontSize: '1.2em' }}>PROFESSIONAL SUMMARY</h2>
        {config.experiences.map(exp => (
          <div key={exp.id} className="mb-10">
            <div className="flex justify-between font-bold text-gray-900 dark:text-white" style={{ fontSize: '1.1em' }}>
              <span>{exp.company.toUpperCase()}</span>
              <span className="opacity-50 font-normal">{exp.dates}</span>
            </div>
            <p className="text-justify leading-relaxed text-gray-700 dark:text-slate-300 mt-4" style={{ fontSize: '0.95em' }}>{exp.desc}</p>
          </div>
        ))}
      </section>
    </div>
  </div>
);

// --- 4. TERMINAL DEV ---
export const TerminalTemplate = ({ config }) => (
  <div className="p-4 md:p-10 bg-[#0d0d0d] text-[#00ff41] font-mono min-h-full">
    <div className="max-w-4xl mx-auto border border-[#00ff41]/30 rounded-lg p-6 md:p-10 shadow-[0_0_20px_rgba(0,255,65,0.1)] bg-black/90">
      <p className="mb-6 opacity-40" style={{ fontSize: '0.7em' }}># Portfolio OS v1.0.2 [Loaded]</p>
      <h1 className="font-bold uppercase mb-2" style={{ fontSize: '3em' }}>{`> ${config.name.replace(/\s/g, '_')}`}</h1>
      <p className="text-white opacity-80 mb-12" style={{ fontSize: '1.2em' }}>{`$ status --role "${config.role}"`}</p>
      <section>
        <p className="text-yellow-400 mb-4" style={{ fontSize: '0.8em' }}>{`// experience.log`}</p>
        {config.experiences.map(exp => (
          <div key={exp.id} className="pl-4 border-l-2 border-[#00ff41]/20 mb-8">
            <p className="font-bold text-white" style={{ fontSize: '1.1em' }}>{exp.company}</p>
            <p className="opacity-60" style={{ fontSize: '0.8em' }}>{exp.dates} | {exp.role}</p>
            <p className="text-[#00ff41]/70 italic mt-2" style={{ fontSize: '0.85em' }}>{`# ${exp.desc}`}</p>
          </div>
        ))}
      </section>
    </div>
  </div>
);