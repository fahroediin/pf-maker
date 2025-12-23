import JSZip from 'jszip';
import { saveAs } from 'file-saver';

export const exportProject = (config) => {
  const zip = new JSZip();

  // --- Helper: Render Lists for Export ---
  const getExperienceHTML = () => config.experiences.map(exp => `
    <div class="exp-item">
        <div class="exp-header">
            <span class="company">${exp.company}</span>
            <span class="date">${exp.dates}</span>
        </div>
        <div class="role" style="color: var(--primary)">${exp.role}</div>
        <p class="desc">${exp.desc}</p>
    </div>`).join('');

  const getEducationHTML = () => config.education.map(edu => `
    <div class="edu-item">
        <div class="edu-header">
            <span class="school">${edu.school}</span>
            <span class="date">${edu.dates}</span>
        </div>
        <p class="degree">${edu.degree}</p>
    </div>`).join('');

  const getProjectsHTML = () => config.projects.map(proj => `
    <div class="proj-card">
        <div class="proj-header">
            <span class="proj-title">${proj.title}</span>
            ${proj.link ? `<a href="${proj.link}" class="proj-link">🔗</a>` : ''}
        </div>
        <p class="proj-desc">${proj.desc}</p>
    </div>`).join('');

  let templateBody = '';
  let templateCSS = '';

  // --- Logic Switcher Match with PortfolioTemplates.jsx ---
  switch (config.templateId) {
    case 'modern':
      templateCSS = `
        body { padding: 5vw; }
        header { border-bottom: 4px solid var(--primary); padding-bottom: 2em; margin-bottom: 4em; }
        .name { font-size: 4em; font-weight: 900; line-height: 1; color: var(--primary); text-transform: uppercase; margin:0; }
        .role { font-size: 1.2em; opacity: 0.6; letter-spacing: 0.2em; text-transform: uppercase; }
        .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4em; }
        .section-h { font-size: 0.7em; font-weight: 900; opacity: 0.3; letter-spacing: 0.3em; margin-bottom: 2em; border:none; }
      `;
      templateBody = `
        <header>
            <h1 class="name">${config.name}</h1>
            <p class="role">${config.role}</p>
        </header>
        <div class="grid">
            <section>
                <div class="section-h">EXPERIENCE</div>
                ${getExperienceHTML()}
                <div class="section-h" style="margin-top:3em">EDUCATION</div>
                ${getEducationHTML()}
            </section>
            <section>
                <div class="section-h">PROJECTS</div>
                <div class="proj-list">${getProjectsHTML()}</div>
            </section>
        </div>`;
      break;

    case 'creative':
      templateCSS = `
        body { margin: 0; padding: 0; display: flex; min-height: 100vh; flex-direction: row; background: #f5f5f4; }
        .dark body { background: #09090b; }
        .sidebar { width: 33.33%; background: var(--primary); color: white; padding: 3em; display: flex; flex-direction: column; justify-content: flex-end; position: relative; overflow: hidden; }
        .sidebar h1 { font-size: 4.5em; font-weight: 900; font-style: italic; line-height: 1; margin: 0 0 0.5em 0; }
        .sidebar p { font-size: 1em; font-weight: bold; text-transform: uppercase; letter-spacing: 0.3em; opacity: 0.8; }
        .main-content { width: 66.66%; padding: 4em; display: flex; flex-direction: column; gap: 2.5em; }
        .card { background: white; padding: 2.5em; border-radius: 2.5rem; box-shadow: 0 4px 20px rgba(0,0,0,0.05); }
        .dark .card { background: #18181b; }
        .proj-card { border: 2px dashed rgba(var(--primary-rgb), 0.2); padding: 1.5em; border-radius: 1.5em; margin-bottom: 1em; }
        @media (max-width: 768px) { body { flex-direction: column; } .sidebar, .main-content { width: 100%; } }
      `;
      templateBody = `
        <div class="sidebar">
            <h1>${config.name}</h1>
            <p>${config.role}</p>
        </div>
        <div class="main-content">
            <div class="card">
                <h2 style="font-size:1.2em; border-left:4px solid var(--primary); padding-left:1em; margin-bottom:2em">JOURNEY</h2>
                ${getExperienceHTML()}
            </div>
            <div class="card">
                <h2 style="font-size:1.2em; border-left:4px solid var(--primary); padding-left:1em; margin-bottom:2em">WORKS</h2>
                ${getProjectsHTML()}
            </div>
        </div>`;
      break;

    case 'classic':
      templateCSS = `
        body { background: #f3f4f6; padding: 3em; }
        .dark body { background: #020617; }
        .classic-page { background: white; max-width: 850px; margin: 0 auto; padding: 4em; border: 4px double var(--primary); }
        .dark .classic-page { background: #0f172a; border-color: var(--primary); color: white; }
        header { text-align: center; border-bottom: 1px solid #eee; padding-bottom: 2.5em; margin-bottom: 3em; }
        .dark header { border-color: #334155; }
        .name { font-size: 3em; font-weight: bold; text-transform: uppercase; margin: 0; color: inherit; }
        .role { font-style: italic; opacity: 0.6; font-size: 1.5em; margin-top: 0.5em; color: inherit; }
        .section-title { text-align: center; font-weight: bold; text-decoration: underline; margin: 2em 0; text-transform: uppercase; }
        .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2em; border-top: 1px solid #eee; padding-top: 2em; }
        .dark .grid { border-color: #334155; }
      `;
      templateBody = `
        <div class="classic-page">
            <header>
                <h1 class="name">${config.name}</h1>
                <p class="role">${config.role}</p>
            </header>
            <div class="section-title">PROFESSIONAL SUMMARY</div>
            ${getExperienceHTML()}
            <div class="grid">
                <div><strong>EDUCATION</strong><br>${getEducationHTML()}</div>
                <div><strong>PROJECTS</strong><br>${getProjectsHTML()}</div>
            </div>
        </div>`;
      break;

    case 'terminal':
      templateCSS = `
        body { background: #0d0d0d; color: #00ff41; padding: 4em; font-family: 'JetBrains Mono', monospace; }
        .terminal { border: 1px solid rgba(0,255,65,0.2); max-width: 800px; margin: 0 auto; padding: 2em; box-shadow: 0 0 30px rgba(0,255,65,0.05); }
        .name { font-size: 2.5em; font-weight: bold; margin: 0; }
        .log { opacity: 0.4; font-size: 0.8em; margin-bottom: 2em; }
        .exp-item { border-left: 2px solid rgba(0,255,65,0.2); padding-left: 1.5em; margin-bottom: 2em; }
        .role { font-weight: bold; color: white; }
      `;
      templateBody = `
        <div class="terminal">
            <p class="log"># Fahrudin_OS Portfolio Loaded...</p>
            <h1 class="name">> ${config.name.replace(/\s/g, '_')}</h1>
            <p>$ status --role "${config.role}"</p>
            <p style="color:#eab308; margin-top:2em">// experience.log</p>
            ${getExperienceHTML()}
            <p style="color:#60a5fa; margin-top:2em">// projects.sh</p>
            ${getProjectsHTML()}
        </div>`;
      break;
  }

  const htmlContent = `
<!DOCTYPE html>
<html lang="en" class="${config.darkMode ? 'dark' : ''}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${config.name} - Portfolio</title>
    <link href="https://fonts.googleapis.com/css2?family=${config.fontFamily.replace(' ', '+')}:wght@400;700;900&display=swap" rel="stylesheet">
    <style>
        :root { 
            --primary: ${config.primaryColor}; 
            --primary-rgb: ${hexToRgb(config.primaryColor)};
        }
        * { box-sizing: border-box; }
        body { 
            font-family: '${config.fontFamily}', sans-serif; 
            font-size: ${config.baseFontSize}px; 
            margin: 0; line-height: 1.5; 
        }
        .dark body { color: #e2e8f0; }
        .exp-header, .edu-header, .proj-header { display: flex; justify-content: space-between; align-items: baseline; font-weight: bold; }
        .date { font-size: 0.8em; opacity: 0.5; font-weight: normal; }
        .desc, .proj-desc { font-size: 0.9em; opacity: 0.7; margin-top: 5px; }
        ${templateCSS}
    </style>
</head>
<body>
    ${templateBody}
</body>
</html>`;

  zip.file("index.html", htmlContent);
  zip.generateAsync({ type: "blob" }).then(content => saveAs(content, `${config.name.replace(/\s+/g, '_')}_Portfolio.zip`));
};

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : '0,0,0';
}