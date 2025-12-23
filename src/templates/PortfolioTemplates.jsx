import React from 'react';

// --- SHARED COMPONENTS ---
const SectionTitle = ({ children, color }) => (
  <h2 className="font-black uppercase tracking-widest mb-6 flex items-center gap-2 dark:text-white" style={{ fontSize: '1.2em' }}>
    <span className="w-8 h-1" style={{ backgroundColor: color }}></span>
    {children}
  </h2>
);

// --- 1. MODERN MINIMALIST ---
export const ModernTemplate = ({ config }) => (
  <div className="min-h-full bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-8 md:p-12 transition-colors duration-500">
    <header className="mb-16 border-b-4 pb-8" style={{ borderColor: config.primaryColor }}>
      <h1 className="font-black tracking-tighter mb-2 uppercase" style={{ color: config.primaryColor, fontSize: '4em', lineHeight: '1' }}>
        {config.name}
      </h1>
      <p className="font-light opacity-60 uppercase tracking-[0.2em]" style={{ fontSize: '1.2em' }}>{config.role}</p>
    </header>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
      {/* Kolom Kiri: Experience & Education */}
      <section className="space-y-12">
        <div>
          <h3 className="font-black opacity-30 uppercase mb-8 tracking-widest" style={{ fontSize: '0.7em' }}>Experience</h3>
          {config.experiences.map(exp => (
            <div key={exp.id} className="mb-10">
              <h4 className="font-bold dark:text-white" style={{ fontSize: '1.2em' }}>{exp.company}</h4>
              <div className="font-semibold mb-2 opacity-60" style={{ fontSize: '0.9em' }}>{exp.role} | {exp.dates}</div>
              <p className="opacity-70" style={{ fontSize: '0.9em' }}>{exp.desc}</p>
            </div>
          ))}
        </div>

        {config.education.length > 0 && (
          <div>
            <h3 className="font-black opacity-30 uppercase mb-8 tracking-widest" style={{ fontSize: '0.7em' }}>Education</h3>
            {config.education.map(edu => (
              <div key={edu.id} className="mb-6">
                <h4 className="font-bold dark:text-white" style={{ fontSize: '1.1em' }}>{edu.school}</h4>
                <p className="opacity-60" style={{ fontSize: '0.9em' }}>{edu.degree} • {edu.dates}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Kolom Kanan: Projects */}
      <section>
        <h3 className="font-black opacity-30 uppercase mb-8 tracking-widest" style={{ fontSize: '0.7em' }}>Projects</h3>
        {config.projects.map(proj => (
          <div key={proj.id} className="mb-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl">
            <h4 className="font-bold underline mb-2" style={{ fontSize: '1.1em', color: config.primaryColor }}>{proj.title}</h4>
            <p className="opacity-70" style={{ fontSize: '0.85em' }}>{proj.desc}</p>
            {proj.link && <a href={proj.link} target="_blank" rel="noreferrer" className="inline-block mt-3 text-[0.7em] font-bold opacity-50 hover:opacity-100 italic">View Project 🔗</a>}
          </div>
        ))}
      </section>
    </div>
  </div>
);

// --- 2. CREATIVE SIDE ---
export const CreativeTemplate = ({ config }) => (
  <div className="min-h-full bg-stone-100 dark:bg-zinc-950 p-4 md:p-8 flex items-stretch transition-colors duration-500">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full font-sans">
      
      {/* Sidebar Card */}
      <div className="md:col-span-4 p-10 rounded-[2.5rem] text-white flex flex-col justify-end shadow-2xl overflow-hidden relative" style={{ backgroundColor: config.primaryColor }}>
        <div className="relative z-10">
            <h1 className="font-black leading-none mb-6 italic" style={{ fontSize: '4.5em' }}>{config.name}</h1>
            <p className="font-bold uppercase tracking-[0.3em] opacity-80" style={{ fontSize: '1em' }}>{config.role}</p>
        </div>
        <div className="absolute top-[-10%] right-[-10%] w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
      </div>
      
      {/* Main Content */}
      <div className="md:col-span-8 space-y-6">
        <div className="bg-white dark:bg-zinc-900 p-10 rounded-[2.5rem] shadow-sm transition-colors">
          <SectionTitle color={config.primaryColor}>My Journey</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {config.experiences.map(exp => (
              <div key={exp.id} className="group">
                <div className="w-10 h-1 mb-4 opacity-20 group-hover:opacity-100 transition-all" style={{ backgroundColor: config.primaryColor }}></div>
                <h4 className="font-black dark:text-white" style={{ fontSize: '1.1em' }}>{exp.company}</h4>
                <p className="opacity-50 font-bold mb-2 uppercase" style={{ fontSize: '0.7em' }}>{exp.dates}</p>
                <p className="opacity-70 italic dark:text-gray-300" style={{ fontSize: '0.85em' }}>"{exp.desc}"</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-zinc-900 p-10 rounded-[2.5rem] shadow-sm transition-colors">
          <SectionTitle color={config.primaryColor}>Selected Works</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {config.projects.map(proj => (
                <div key={proj.id} className="p-6 border-2 rounded-3xl border-dashed dark:border-zinc-700" style={{ borderColor: `${config.primaryColor}44` }}>
                    <h4 className="font-black mb-2 uppercase dark:text-white" style={{ fontSize: '0.9em' }}>{proj.title}</h4>
                    <p className="opacity-60 dark:text-gray-400" style={{ fontSize: '0.8em' }}>{proj.desc}</p>
                </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

// --- 3. CLASSIC CORPORATE (Fixed Dark Mode) ---
export const ClassicTemplate = ({ config }) => (
  <div className="min-h-full bg-gray-100 dark:bg-slate-950 p-6 md:p-10 font-serif transition-colors duration-500">
    <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 shadow-2xl p-8 md:p-16 border-double border-4 transition-colors duration-500" style={{ borderColor: config.primaryColor }}>
        <header className="text-center mb-16 border-b pb-10 dark:border-slate-800">
            <h1 className="font-bold mb-4 uppercase tracking-tighter text-gray-900 dark:text-white" style={{ fontSize: '3em' }}>
              {config.name}
            </h1>
            <div className="h-1 w-20 bg-black dark:bg-white mx-auto mb-6"></div>
            <p className="italic text-gray-600 dark:text-slate-400" style={{ fontSize: '1.5em' }}>{config.role}</p>
        </header>

        <div className="space-y-16">
            {/* Experience */}
            <section>
                <h2 className="text-center font-bold mb-10 underline underline-offset-8 text-gray-900 dark:text-white" style={{ fontSize: '1.2em' }}>PROFESSIONAL SUMMARY</h2>
                {config.experiences.map(exp => (
                    <div key={exp.id} className="mb-10">
                        <div className="flex justify-between font-bold mb-2 text-gray-900 dark:text-white" style={{ fontSize: '1.1em' }}>
                            <span>{exp.company.toUpperCase()}</span>
                            <span className="opacity-60 font-normal">{exp.dates}</span>
                        </div>
                        <div className="font-bold mb-3 italic" style={{ color: config.primaryColor, fontSize: '0.9em' }}>{exp.role}</div>
                        <p className="text-justify leading-relaxed text-gray-700 dark:text-slate-300" style={{ fontSize: '0.95em' }}>{exp.desc}</p>
                    </div>
                ))}
            </section>

            {/* Education & Projects (2 Columns) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-10 border-t dark:border-slate-800">
                <section>
                  <h3 className="font-bold mb-6 text-gray-900 dark:text-white" style={{ fontSize: '1em' }}>ACADEMIC BACKGROUND</h3>
                  {config.education.map(edu => (
                    <div key={edu.id} className="mb-4">
                      <p className="font-bold dark:text-white" style={{ fontSize: '0.9em' }}>{edu.school}</p>
                      <p className="text-gray-600 dark:text-slate-400" style={{ fontSize: '0.8em' }}>{edu.degree} | {edu.dates}</p>
                    </div>
                  ))}
                </section>

                <section>
                  <h3 className="font-bold mb-6 text-gray-900 dark:text-white" style={{ fontSize: '1em' }}>PROJECT PORTFOLIO</h3>
                  {config.projects.map(proj => (
                    <div key={proj.id} className="mb-4">
                      <p className="font-bold dark:text-white underline underline-offset-4" style={{ fontSize: '0.9em' }}>{proj.title}</p>
                      <p className="text-gray-600 dark:text-slate-400 mt-1" style={{ fontSize: '0.8em' }}>{proj.desc}</p>
                    </div>
                  ))}
                </section>
            </div>
        </div>
    </div>
  </div>
);

// --- 4. TERMINAL DEV ---
export const TerminalTemplate = ({ config }) => (
  <div className="min-h-full bg-[#0d0d0d] text-[#00ff41] font-mono p-4 md:p-10 transition-colors">
    <div className="max-w-4xl mx-auto border border-[#00ff41]/30 rounded-lg p-6 md:p-10 shadow-[0_0_20px_rgba(0,255,65,0.1)]">
        <p className="mb-6 opacity-40" style={{ fontSize: '0.7em' }}># Fahrudin Portfolio OS v1.0.2 [Loaded]</p>
        
        <div className="space-y-12">
            <header>
                <h1 style={{ fontSize: '3em' }} className="font-bold leading-none mb-2">{`> ${config.name.replace(/\s/g, '_')}`}</h1>
                <p style={{ fontSize: '1.2em' }} className="text-white opacity-80">{`$ status --role "${config.role}"`}</p>
            </header>
            
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <section>
                    <p className="text-blue-400 mb-4" style={{ fontSize: '0.8em' }}>{`// projects.sh`}</p>
                    {config.projects.map(proj => (
                        <div key={proj.id} className="mb-4 text-sm">
                            <p className="font-bold">{`* ${proj.title}`}</p>
                            <p className="opacity-50 text-xs">{proj.desc}</p>
                        </div>
                    ))}
                </section>
                
                <section>
                    <p className="text-purple-400 mb-4" style={{ fontSize: '0.8em' }}>{`// education.json`}</p>
                    {config.education.map(edu => (
                        <div key={edu.id} className="mb-4 text-sm opacity-80">
                            {`{ "${edu.school}": "${edu.degree}" }`}
                        </div>
                    ))}
                </section>
            </div>
        </div>
    </div>
  </div>
);