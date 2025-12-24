export const generateTemplateHTML = (config) => {
  const { name, role, experiences, education, projects, templateId } = config;

  // --- Sub-Renderers ---
  const renderExp = () => experiences.map(exp => `
    <div class="mb-8">
      <div class="flex justify-between items-baseline mb-1">
        <h4 class="font-bold dark:text-white" style="font-size: 1.1em">${exp.company}</h4>
        <span class="opacity-50 font-mono" style="font-size: 0.7em">${exp.dates}</span>
      </div>
      <div class="text-primary font-semibold mb-2" style="font-size: 0.9em">${exp.role}</div>
      <p class="leading-relaxed opacity-70 dark:text-gray-300" style="font-size: 0.9em">${exp.desc}</p>
    </div>`).join('');

  const renderEdu = () => education.map(edu => `
    <div class="mb-4">
      <h4 class="font-bold dark:text-white" style="font-size: 1em">${edu.school}</h4>
      <p class="opacity-60 dark:text-gray-400" style="font-size: 0.85em">${edu.degree} • ${edu.dates}</p>
    </div>`).join('');

  const renderProj = () => projects.map(proj => `
    <div class="mb-6 p-5 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-transparent hover:border-primary transition-all">
      <h4 class="font-bold text-primary mb-2" style="font-size: 1.1em">${proj.title}</h4>
      <p class="opacity-70 dark:text-gray-300 mb-3" style="font-size: 0.85em">${proj.desc}</p>
      ${proj.link ? `<a href="${proj.link}" target="_blank" class="text-primary font-bold underline" style="font-size: 0.7em">VIEW PROJECT 🔗</a>` : ''}
    </div>`).join('');

  // --- Template Switcher ---
  switch (templateId) {
    case 'modern':
      return `
        <div class="p-8 md:p-20 bg-white dark:bg-gray-900 min-h-screen transition-colors duration-500">
          <header class="mb-16 border-b-4 pb-8 border-primary">
            <h1 class="font-black tracking-tighter mb-2 uppercase text-primary" style="font-size: 4em; line-height: 1">${name}</h1>
            <p class="font-light opacity-60 uppercase tracking-[0.2em] dark:text-white" style="font-size: 1.2em">${role}</p>
          </header>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
            <section>
              <h3 class="font-black opacity-30 uppercase mb-8 tracking-widest dark:text-white" style="font-size: 0.7em">Experience</h3>
              ${renderExp()}
              <h3 class="font-black opacity-30 uppercase mb-8 mt-12 tracking-widest dark:text-white" style="font-size: 0.7em">Education</h3>
              ${renderEdu()}
            </section>
            <section>
              <h3 class="font-black opacity-30 uppercase mb-8 tracking-widest dark:text-white" style="font-size: 0.7em">Projects</h3>
              ${renderProj()}
            </section>
          </div>
        </div>`;

    case 'creative':
      return `
        <div class="flex flex-col md:flex-row items-stretch min-h-screen bg-stone-100 dark:bg-zinc-950 transition-colors duration-500">
          <div class="w-full md:w-1/3 p-10 flex flex-col justify-end text-white relative overflow-hidden bg-primary min-h-[400px]">
            <div class="relative z-10">
              <h1 class="font-black leading-none mb-6 italic tracking-tighter" style="font-size: 4.5em">${name}</h1>
              <p class="font-bold uppercase tracking-[0.3em] opacity-80" style="font-size: 1em">${role}</p>
            </div>
            <div class="absolute top-[-10%] right-[-10%] w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          </div>
          <div class="w-full md:w-2/3 p-8 md:p-12 space-y-10 overflow-y-auto">
            <div class="bg-white dark:bg-zinc-900 p-10 rounded-[2.5rem] shadow-sm">
              <h2 class="font-black uppercase mb-8 dark:text-white" style="font-size: 1.2em"><span class="inline-block w-8 h-1 bg-primary mr-2"></span> JOURNEY</h2>
              ${renderExp()}
            </div>
            <div class="bg-white dark:bg-zinc-900 p-10 rounded-[2.5rem] shadow-sm">
              <h2 class="font-black uppercase mb-8 dark:text-white" style="font-size: 1.2em"><span class="inline-block w-8 h-1 bg-primary mr-2"></span> WORKS</h2>
              ${renderProj()}
            </div>
            <div class="bg-white dark:bg-zinc-900 p-10 rounded-[2.5rem] shadow-sm">
              <h2 class="font-black uppercase mb-8 dark:text-white" style="font-size: 1.2em"><span class="inline-block w-8 h-1 bg-primary mr-2"></span> EDUCATION</h2>
              ${renderEdu()}
            </div>
          </div>
        </div>`;

    case 'classic':
      return `
        <div class="p-6 md:p-10 bg-gray-100 dark:bg-slate-950 min-h-screen font-serif transition-colors duration-500 flex justify-center">
          <div class="max-w-4xl w-full bg-white dark:bg-slate-900 shadow-2xl p-8 md:p-16 border-double border-4 border-primary transition-colors duration-500">
            <header class="text-center mb-16 border-b pb-10 dark:border-slate-800">
              <h1 class="font-bold mb-4 uppercase tracking-tighter text-gray-900 dark:text-white" style="font-size: 3em">${name}</h1>
              <div class="h-1 w-20 bg-black dark:bg-white mx-auto mb-6"></div>
              <p class="italic text-gray-600 dark:text-slate-400" style="font-size: 1.5em">${role}</p>
            </header>
            <section class="mb-12">
              <h2 class="text-center font-bold mb-10 underline underline-offset-8 text-gray-900 dark:text-white" style="font-size: 1.2em">EXPERIENCE</h2>
              ${renderExp()}
            </section>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 pt-10 border-t dark:border-slate-800">
              <section><h3 class="font-bold mb-6 dark:text-white">EDUCATION</h3>${renderEdu()}</section>
              <section><h3 class="font-bold mb-6 dark:text-white">PROJECTS</h3>${renderProj()}</section>
            </div>
          </div>
        </div>`;

    case 'terminal':
      return `
        <div class="p-4 md:p-10 bg-[#0d0d0d] text-[#00ff41] font-mono min-h-screen">
          <div class="max-w-4xl mx-auto border border-[#00ff41]/30 rounded-lg p-6 md:p-10 shadow-[0_0_20px_rgba(0,255,65,0.1)] bg-black/90">
            <p class="mb-6 opacity-40" style="font-size: 0.7em"># Portfolio_OS v1.0.2 Loaded</p>
            <h1 class="font-bold uppercase mb-2" style="font-size: 3em">${`> ${name.replace(/\s/g, '_')}`}</h1>
            <p class="text-white opacity-80 mb-12" style="font-size: 1.2em">${`$ status --role "${role}"`}</p>
            <section class="mb-10">
              <p class="text-yellow-400 mb-4" style="font-size: 0.8em">// experience.log</p>
              ${renderExp()}
            </section>
            <section class="mb-10">
              <p class="text-blue-400 mb-4" style="font-size: 0.8em">// projects.sh</p>
              ${renderProj()}
            </section>
            <section>
              <p class="text-purple-400 mb-4" style="font-size: 0.8em">// education.json</p>
              ${renderEdu()}
            </section>
          </div>
        </div>`;
    
    default: return `<div>Template not found</div>`;
  }
};