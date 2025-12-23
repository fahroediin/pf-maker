import React from 'react';

// --- SHARED COMPONENTS ---
const SectionTitle = ({ children, color }) => (
  <h2 className="font-black uppercase tracking-widest mb-6 flex items-center gap-2" style={{ fontSize: '1.2em' }}>
    <span className="w-8 h-1" style={{ backgroundColor: color }}></span>
    {children}
  </h2>
);

// --- 1. MODERN MINIMALIST (Layout: Clean, 2 Columns) ---
export const ModernTemplate = ({ config }) => (
  <div className="min-h-full bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-8 md:p-12 transition-colors">
    <header className="mb-16 border-b-4 pb-8" style={{ borderColor: config.primaryColor }}>
      <h1 className="font-black tracking-tighter mb-2 uppercase" style={{ color: config.primaryColor, fontSize: '4em', lineHeight: '1' }}>
        {config.name}
      </h1>
      <p className="font-light opacity-60 uppercase tracking-[0.2em]" style={{ fontSize: '1.2em' }}>{config.role}</p>
    </header>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
      <section>
        <h3 className="font-black opacity-30 uppercase mb-8 tracking-widest" style={{ fontSize: '0.7em' }}>Experience</h3>
        {config.experiences.map(exp => (
          <div key={exp.id} className="mb-10">
            <h4 className="font-bold" style={{ fontSize: '1.2em' }}>{exp.company}</h4>
            <div className="font-semibold mb-2 opacity-60" style={{ fontSize: '0.9em' }}>{exp.role} | {exp.dates}</div>
            <p className="opacity-70" style={{ fontSize: '0.9em' }}>{exp.desc}</p>
          </div>
        ))}
      </section>

      <section className="space-y-12">
        <div>
            <h3 className="font-black opacity-30 uppercase mb-8 tracking-widest" style={{ fontSize: '0.7em' }}>Projects</h3>
            {config.projects.map(proj => (
                <div key={proj.id} className="mb-6">
                    <h4 className="font-bold underline" style={{ fontSize: '1.1em', color: config.primaryColor }}>{proj.title}</h4>
                    <p className="opacity-70" style={{ fontSize: '0.85em' }}>{proj.desc}</p>
                </div>
            ))}
        </div>
      </section>
    </div>
  </div>
);

// --- 2. CREATIVE SIDE (Layout: Asymmetric Grid, Large Color Block) ---
export const CreativeTemplate = ({ config }) => (
  <div className="min-h-full bg-stone-100 dark:bg-zinc-950 p-4 md:p-8 flex items-stretch transition-colors">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full font-sans">
      
      {/* Sidebar Card */}
      <div className="md:col-span-4 p-10 rounded-[2.5rem] text-white flex flex-col justify-end shadow-2xl overflow-hidden relative" style={{ backgroundColor: config.primaryColor }}>
        <div className="relative z-10">
            <h1 className="font-black leading-none mb-6 italic" style={{ fontSize: '4.5em' }}>{config.name}</h1>
            <p className="font-bold uppercase tracking-[0.3em] opacity-80" style={{ fontSize: '1em' }}>{config.role}</p>
        </div>
        {/* Dekorasi Abstract */}
        <div className="absolute top-[-10%] right-[-10%] w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
      </div>
      
      {/* Main Content */}
      <div className="md:col-span-8 space-y-6">
        <div className="bg-white dark:bg-zinc-900 p-10 rounded-[2.5rem] shadow-sm">
          <SectionTitle color={config.primaryColor}>My Journey</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {config.experiences.map(exp => (
              <div key={exp.id} className="group">
                <div className="w-10 h-1 mb-4 opacity-20 group-hover:opacity-100 transition-all" style={{ backgroundColor: config.primaryColor }}></div>
                <h4 className="font-black" style={{ fontSize: '1.1em' }}>{exp.company}</h4>
                <p className="opacity-50 font-bold mb-2 uppercase" style={{ fontSize: '0.7em' }}>{exp.dates}</p>
                <p className="opacity-70 italic" style={{ fontSize: '0.85em' }}>"{exp.desc}"</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-zinc-900 p-10 rounded-[2.5rem] shadow-sm">
          <SectionTitle color={config.primaryColor}>Works</SectionTitle>
          <div className="flex flex-wrap gap-4">
            {config.projects.map(proj => (
                <div key={proj.id} className="p-4 border-2 rounded-2xl flex-1 min-w-[200px] border-dashed" style={{ borderColor: `${config.primaryColor}44` }}>
                    <h4 className="font-bold mb-2 uppercase" style={{ fontSize: '0.9em' }}>{proj.title}</h4>
                    <p className="opacity-60" style={{ fontSize: '0.8em' }}>{proj.desc}</p>
                </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

// --- 3. CLASSIC CORPORATE (Layout: Centered, Professional) ---
export const ClassicTemplate = ({ config }) => (
  <div className="min-h-full bg-white dark:bg-slate-950 p-10 font-serif">
    <div className="max-w-4xl mx-auto border-double border-4 p-12 dark:border-slate-800" style={{ borderColor: config.primaryColor }}>
        <header className="text-center mb-16">
            <h1 className="font-bold mb-4 uppercase tracking-tighter" style={{ fontSize: '3em' }}>{config.name}</h1>
            <div className="h-1 w-20 bg-black dark:bg-white mx-auto mb-4"></div>
            <p className="italic opacity-60" style={{ fontSize: '1.5em' }}>{config.role}</p>
        </header>

        <section className="mb-12">
            <h2 className="text-center font-bold mb-10 underline underline-offset-8" style={{ fontSize: '1.2em' }}>PROFESSIONAL SUMMARY</h2>
            {config.experiences.map(exp => (
                <div key={exp.id} className="mb-8">
                    <div className="flex justify-between font-bold mb-2">
                        <span>{exp.company.toUpperCase()}</span>
                        <span>{exp.dates}</span>
                    </div>
                    <p className="text-justify leading-relaxed" style={{ fontSize: '0.95em' }}>{exp.desc}</p>
                </div>
            ))}
        </section>
    </div>
  </div>
);

// --- 4. TERMINAL DEV (Layout: Code Editor Style) ---
export const TerminalTemplate = ({ config }) => (
  <div className="min-h-full bg-[#0d0d0d] text-[#00ff41] font-mono p-10">
    <div className="max-w-4xl mx-auto border border-[#00ff41]/30 rounded-lg p-8 shadow-[0_0_20px_rgba(0,255,65,0.1)]">
        <p className="mb-4 opacity-50"># Fahrudin Portfolio OS v1.0.0</p>
        <div className="space-y-8">
            <section>
                <h1 style={{ fontSize: '2.5em' }} className="font-bold leading-none">{`> ${config.name.replace(/\s/g, '_')}`}</h1>
                <p style={{ fontSize: '1.2em' }} className="text-white opacity-80">{`$ type --role "${config.role}"`}</p>
            </section>
            
            <section>
                <p className="text-yellow-400 mb-2">{`// root/experience/`}</p>
                {config.experiences.map(exp => (
                    <div key={exp.id} className="pl-4 border-l border-[#00ff41]/20 mb-4 text-sm">
                        <p className="font-bold underline">{exp.company}</p>
                        <p className="opacity-60">{exp.dates}</p>
                        <p className="text-white/70 italic mt-1">{`# ${exp.desc}`}</p>
                    </div>
                ))}
            </section>
        </div>
    </div>
  </div>
);