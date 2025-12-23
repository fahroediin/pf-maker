import React from 'react';

// --- SHARED COMPONENTS ---
const SectionTitle = ({ children, color }) => (
  <h2 className="font-black uppercase tracking-widest mb-6 flex items-center gap-2" style={{ fontSize: '1.2em' }}>
    <span className="w-8 h-1" style={{ backgroundColor: color }}></span>
    {children}
  </h2>
);

// --- 1. MODERN MINIMALIST ---
export const ModernTemplate = ({ config }) => (
  <div className="min-h-full bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-8 md:p-12 transition-colors">
    <header className="mb-16">
      <h1 className="font-black tracking-tighter mb-2" style={{ color: config.primaryColor, fontSize: '3.75em', lineHeight: '1' }}>
        {config.name}
      </h1>
      <p className="font-light opacity-60 uppercase" style={{ fontSize: '1.5em' }}>
        {config.role}
      </p>
    </header>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
      {/* Experience Section */}
      <section>
        <h3 className="font-black text-gray-400 uppercase mb-8 tracking-[0.3em]" style={{ fontSize: '0.75em' }}>
          Experience
        </h3>
        {config.experiences.map(exp => (
          <div key={exp.id} className="mb-10 group">
            <div className="flex justify-between items-baseline mb-1">
              <h4 className="font-bold" style={{ fontSize: '1.125em' }}>{exp.company}</h4>
              <span className="opacity-50 font-mono" style={{ fontSize: '0.75em' }}>{exp.dates}</span>
            </div>
            <div className="font-semibold mb-2" style={{ color: config.primaryColor, fontSize: '0.875em' }}>
              {exp.role}
            </div>
            <p className="leading-relaxed opacity-70" style={{ fontSize: '0.875em' }}>
              {exp.desc}
            </p>
          </div>
        ))}
      </section>

      {/* Education Section */}
      <section className="space-y-12">
        <div>
          <h3 className="font-black text-gray-400 uppercase mb-8 tracking-[0.3em]" style={{ fontSize: '0.75em' }}>
            Education
          </h3>
          {config.education.map(edu => (
            <div key={edu.id} className="mb-6">
              <h4 className="font-bold" style={{ fontSize: '1.125em' }}>{edu.school}</h4>
              <p className="opacity-60" style={{ fontSize: '0.875em' }}>
                {edu.degree} • {edu.dates}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>

    {/* Projects Section */}
    {config.projects && config.projects.length > 0 && (
      <section className="border-t pt-12 dark:border-gray-800">
        <h3 className="font-black text-gray-400 uppercase mb-8 tracking-[0.3em]" style={{ fontSize: '0.75em' }}>
          Featured Projects
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {config.projects.map(proj => (
            <div key={proj.id} className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-800/50 group transition-all">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold uppercase" style={{ fontSize: '1.1em', color: config.primaryColor }}>{proj.title}</h4>
                {proj.link && <a href={proj.link} target="_blank" rel="noreferrer" className="opacity-40 hover:opacity-100 transition" style={{ fontSize: '0.8em' }}>🔗</a>}
              </div>
              <p className="opacity-70 leading-relaxed" style={{ fontSize: '0.85em' }}>{proj.desc}</p>
            </div>
          ))}
        </div>
      </section>
    )}
  </div>
);

// --- 2. CLASSIC CORPORATE ---
export const ClassicTemplate = ({ config }) => (
  <div className="min-h-full bg-[#f4f4f4] dark:bg-slate-950 p-6 md:p-10 font-serif transition-colors">
    <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 shadow-2xl p-8 md:p-16 border-t-[12px]" style={{ borderColor: config.primaryColor }}>
      <div className="text-center border-b pb-10 mb-10 dark:border-slate-800">
        <h1 className="font-bold mb-2 uppercase tracking-tight" style={{ fontSize: '2.5em' }}>
          {config.name}
        </h1>
        <p className="text-gray-500 italic" style={{ fontSize: '1.2em' }}>
          {config.role}
        </p>
      </div>

      <div className="space-y-12 text-slate-700 dark:text-slate-300">
        <section>
          <h2 className="font-bold uppercase tracking-widest mb-6 border-l-4 pl-4" style={{ borderColor: config.primaryColor, fontSize: '0.875em' }}>
            Professional Experience
          </h2>
          {config.experiences.map(exp => (
            <div key={exp.id} className="mb-8">
              <div className="flex justify-between font-bold text-slate-900 dark:text-white" style={{ fontSize: '1em' }}>
                <span>{exp.company}</span>
                <span>{exp.dates}</span>
              </div>
              <div className="italic mb-2" style={{ color: config.primaryColor, fontSize: '0.875em' }}>
                {exp.role}
              </div>
              <p className="leading-relaxed" style={{ fontSize: '0.875em' }}>
                {exp.desc}
              </p>
            </div>
          ))}
        </section>

        {/* Projects in Classic Style */}
        {config.projects && config.projects.length > 0 && (
          <section>
            <h2 className="font-bold uppercase tracking-widest mb-6 border-l-4 pl-4" style={{ borderColor: config.primaryColor, fontSize: '0.875em' }}>
              Key Projects
            </h2>
            {config.projects.map(proj => (
              <div key={proj.id} className="mb-6">
                <div className="font-bold text-slate-900 dark:text-white" style={{ fontSize: '1em' }}>
                  {proj.title} {proj.link && <a href={proj.link} className="ml-2 font-normal text-xs opacity-50 underline italic">Link</a>}
                </div>
                <p className="leading-relaxed italic opacity-80" style={{ fontSize: '0.875em' }}>
                  {proj.desc}
                </p>
              </div>
            ))}
          </section>
        )}

        <section>
          <h2 className="font-bold uppercase tracking-widest mb-6 border-l-4 pl-4" style={{ borderColor: config.primaryColor, fontSize: '0.875em' }}>
            Education
          </h2>
          {config.education.map(edu => (
            <div key={edu.id} className="mb-4">
              <div className="flex justify-between font-bold text-slate-900 dark:text-white" style={{ fontSize: '0.875em' }}>
                <span>{edu.school}</span>
                <span>{edu.dates}</span>
              </div>
              <p style={{ fontSize: '0.875em' }}>{edu.degree}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  </div>
);

// --- 3. CREATIVE SIDE ---
export const CreativeTemplate = ({ config }) => (
  <div className="min-h-full bg-yellow-50 dark:bg-zinc-950 p-4 transition-colors">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full">
      <div className="md:col-span-1 p-8 rounded-3xl text-white flex flex-col justify-end shadow-lg" style={{ backgroundColor: config.primaryColor }}>
        <h1 className="font-black leading-none mb-4" style={{ fontSize: '2.5em' }}>{config.name}</h1>
        <p className="font-medium opacity-80 uppercase tracking-widest" style={{ fontSize: '1em' }}>{config.role}</p>
      </div>
      
      <div className="md:col-span-2 space-y-4">
        <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl shadow-sm">
          <SectionTitle color={config.primaryColor}>Experience</SectionTitle>
          <div className="space-y-6">
            {config.experiences.map(exp => (
              <div key={exp.id} className="relative pl-6 border-l-2 border-dashed border-gray-200 dark:border-zinc-700">
                <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-4" style={{ borderColor: config.primaryColor }}></span>
                <h4 className="font-bold" style={{ fontSize: '1.1em' }}>{exp.company}</h4>
                <p className="font-bold opacity-50 mb-2" style={{ fontSize: '0.75em' }}>{exp.role} | {exp.dates}</p>
                <p className="opacity-70" style={{ fontSize: '0.875em' }}>{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Projects in Creative Style */}
        {config.projects && config.projects.length > 0 && (
          <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl shadow-sm">
            <SectionTitle color={config.primaryColor}>Projects</SectionTitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {config.projects.map(proj => (
                <div key={proj.id} className="p-4 border rounded-2xl dark:border-zinc-800">
                  <h4 className="font-bold mb-1" style={{ fontSize: '1em' }}>{proj.title}</h4>
                  <p className="opacity-60 mb-2" style={{ fontSize: '0.8em' }}>{proj.desc}</p>
                  {proj.link && <a href={proj.link} className="text-[0.7em] font-bold underline" style={{ color: config.primaryColor }}>VIEW CASE STUDY</a>}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl shadow-sm">
          <SectionTitle color={config.primaryColor}>Education</SectionTitle>
          {config.education.map(edu => (
            <div key={edu.id} className="mb-4">
              <h4 className="font-bold" style={{ fontSize: '1.1em' }}>{edu.school}</h4>
              <p className="opacity-60" style={{ fontSize: '0.875em' }}>{edu.degree} ({edu.dates})</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// --- 4. TERMINAL DEV ---
export const TerminalTemplate = ({ config }) => (
  <div className="min-h-full bg-[#1a1a1a] text-[#00ff00] font-mono p-4 md:p-10 overflow-hidden">
    <div className="max-w-3xl mx-auto border border-[#333] rounded-lg overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)] bg-black/90">
      <div className="bg-[#333] p-2 flex gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <div className="p-6 md:p-10 space-y-10">
        <header>
          <p className="text-white opacity-50 mb-2" style={{ fontSize: '0.875em' }}>// Main Identity</p>
          <h1 className="font-bold uppercase" style={{ fontSize: '2em' }}>{`> ${config.name}`}</h1>
          <p className="text-white" style={{ fontSize: '1.1em' }}>{config.role}</p>
        </header>

        <section>
          <p className="text-white opacity-50 mb-4" style={{ fontSize: '0.875em' }}>/* Work_History */</p>
          {config.experiences.map(exp => (
            <div key={exp.id} className="mb-6 border-l border-[#00ff00]/30 pl-4">
              <h3 className="text-white font-bold" style={{ fontSize: '1.125em' }}>{exp.company}</h3>
              <p style={{ fontSize: '0.8em' }}>Role: {exp.role} [{exp.dates}]</p>
              <p className="opacity-70 leading-relaxed text-gray-400 mt-1" style={{ fontSize: '0.8em' }}>{`// ${exp.desc}`}</p>
            </div>
          ))}
        </section>

        {/* Projects in Terminal Style */}
        {config.projects && config.projects.length > 0 && (
          <section>
            <p className="text-white opacity-50 mb-4" style={{ fontSize: '0.875em' }}>/* Projects_List */</p>
            {config.projects.map(proj => (
              <div key={proj.id} className="mb-4">
                <p style={{ fontSize: '0.9em' }}><span className="text-yellow-400 font-bold">PROJ:</span> {proj.title}</p>
                <p style={{ fontSize: '0.8em' }} className="text-gray-400 pl-4">{`- ${proj.desc}`}</p>
                {proj.link && <p style={{ fontSize: '0.7em' }} className="pl-4 text-blue-400 underline">{proj.link}</p>}
              </div>
            ))}
          </section>
        )}

        <section>
          <p className="text-white opacity-50 mb-4" style={{ fontSize: '0.875em' }}>/* Education_Level */</p>
          {config.education.map(edu => (
            <p key={edu.id} style={{ fontSize: '0.875em' }} className="mb-2 text-white">{`>> ${edu.school} -- ${edu.degree}`}</p>
          ))}
        </section>
      </div>
    </div>
  </div>
);