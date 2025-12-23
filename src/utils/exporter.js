import JSZip from 'jszip';
import { saveAs } from 'file-saver';

export const exportProject = (config) => {
  const zip = new JSZip();

  // --- Helper: Generate Common HTML Lists ---
  const getExperienceHTML = () => config.experiences.map(exp => `
    <div class="exp-item">
        <div class="exp-header"><strong>${exp.company}</strong><span>${exp.dates}</span></div>
        <div class="exp-role">${exp.role}</div>
        <p class="exp-desc">${exp.desc}</p>
    </div>`).join('');

  const getEducationHTML = () => config.education.map(edu => `
    <div class="edu-item">
        <strong>${edu.school}</strong><br>
        <small>${edu.degree} | ${edu.dates}</small>
    </div>`).join('');

  const getProjectsHTML = () => config.projects.map(proj => `
    <div class="proj-card">
        <div class="proj-title"><strong>${proj.title}</strong></div>
        <p class="proj-desc">${proj.desc}</p>
        ${proj.link ? `<a href="${proj.link}" class="proj-link">View Project 🔗</a>` : ''}
    </div>`).join('');

  // --- Template Switcher: CSS & Body Content ---
  let templateBody = '';
  let templateCSS = '';

  switch (config.templateId) {
    case 'modern':
      templateCSS = `
        body { padding: 5vw; }
        header { border-bottom: 4px solid var(--primary); padding-bottom: 2rem; margin-bottom: 4rem; }
        .name { font-size: 4em; font-weight: 900; line-height: 1; color: var(--primary); text-transform: uppercase; }
        .role { font-size: 1.5em; opacity: 0.6; letter-spacing: 0.2em; }
        .main-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; }
        .section-title { font-size: 0.7em; font-weight: 900; opacity: 0.3; letter-spacing: 0.3em; margin-bottom: 2rem; }
        .exp-role { color: var(--primary); font-weight: 600; margin-bottom: 0.5rem; }
        .proj-card { background: rgba(0,0,0,0.03); padding: 1.5rem; border-radius: 1rem; margin-bottom: 1rem; }
        .dark .proj-card { background: rgba(255,255,255,0.05); }
      `;
      templateBody = `
        <header>
            <h1 class="name">${config.name}</h1>
            <p class="role">${config.role}</p>
        </header>
        <div class="main-grid">
            <section>
                <div class="section-title">EXPERIENCE</div>
                ${getExperienceHTML()}
            </section>
            <section>
                <div class="section-title">PROJECTS</div>
                ${getProjectsHTML()}
            </section>
        </div>
      `;
      break;

    case 'creative':
      templateCSS = `
        body { padding: 2rem; display: flex; min-height: 100vh; }
        .creative-container { display: grid; grid-template-columns: 1fr 2fr; gap: 2rem; width: 100%; }
        .sidebar { background: var(--primary); color: white; padding: 3rem; border-radius: 2.5rem; display: flex; flex-direction: column; justify-content: flex-end; }
        .sidebar h1 { font-size: 4.5em; font-weight: 900; font-style: italic; line-height: 1; margin-bottom: 1rem; }
        .main-content { display: flex; flex-direction: column; gap: 2rem; }
        .card { background: white; padding: 2.5rem; border-radius: 2.5rem; box-shadow: 0 10px 30px rgba(0,0,0,0.05); }
        .dark .card { background: #18181b; }
        .dark .sidebar { color: white; }
        .proj-card { border: 2px dashed rgba(var(--primary-rgb), 0.3); padding: 1.5rem; border-radius: 1.5rem; margin-bottom: 1rem; }
      `;
      templateBody = `
        <div class="creative-container">
            <div class="sidebar">
                <h1>${config.name}</h1>
                <p style="text-transform: uppercase; letter-spacing: 0.3em; opacity: 0.8;">${config.role}</p>
            </div>
            <div class="main-content">
                <div class="card">
                    <h2 style="font-size: 1.2em; border-left: 5px solid var(--primary); padding-left: 1rem; margin-bottom: 2rem;">JOURNEY</h2>
                    ${getExperienceHTML()}
                </div>
                <div class="card">
                    <h2 style="font-size: 1.2em; border-left: 5px solid var(--primary); padding-left: 1rem; margin-bottom: 2rem;">WORKS</h2>
                    ${getProjectsHTML()}
                </div>
            </div>
        </div>
      `;
      break;

    case 'classic':
      templateCSS = `
        body { padding: 4rem; background: #f4f4f5; }
        .dark body { background: #020617; }
        .classic-page { background: white; max-width: 900px; margin: 0 auto; padding: 4rem; border: 4px double var(--primary); border-top: 12px solid var(--primary); }
        .dark .classic-page { background: #0f172a; border-color: var(--primary); }
        header { text-align: center; border-bottom: 1px solid #eee; padding-bottom: 2rem; margin-bottom: 3rem; }
        .name { font-size: 3em; text-transform: uppercase; font-weight: bold; margin-bottom: 0.5rem; }
        .role { font-style: italic; color: #666; font-size: 1.2em; }
        .dark .role { color: #94a3b8; }
        .section-title { text-align: center; font-weight: bold; text-decoration: underline; margin: 3rem 0 2rem; }
        .exp-header { display: flex; justify-content: space-between; font-weight: bold; }
        .proj-link { font-size: 0.8em; text-decoration: underline; color: var(--primary); }
      `;
      templateBody = `
        <div class="classic-page">
            <header>
                <h1 class="name">${config.name}</h1>
                <p class="role">${config.role}</p>
            </header>
            <div class="section-title">PROFESSIONAL SUMMARY</div>
            ${getExperienceHTML()}
            <div class="section-title">EDUCATION & PROJECTS</div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
                <div>${getEducationHTML()}</div>
                <div>${getProjectsHTML()}</div>
            </div>
        </div>
      `;
      break;

    case 'terminal':
      templateCSS = `
        body { background: #0d0d0d; color: #00ff41; padding: 3rem; }
        .terminal-box { max-width: 900px; margin: 0 auto; border: 1px solid rgba(0,255,65,0.3); border-radius: 8px; padding: 2rem; box-shadow: 0 0 20px rgba(0,255,65,0.1); }
        .name { font-size: 2.5em; font-weight: bold; }
        .cmd { color: white; opacity: 0.8; }
        .log-title { color: #eab308; margin-top: 2rem; font-size: 0.8em; }
        .exp-item { border-left: 2px solid rgba(0,255,65,0.2); padding-left: 1.5rem; margin-bottom: 2rem; }
        .role { color: #00ff41; font-weight: bold; }
        .desc { color: #94a3b8; font-style: italic; }
      `;
      templateBody = `
        <div class="terminal-box">
            <p style="opacity: 0.4; font-size: 0.7em;"># Portfolio System v1.0.2 [Loaded]</p>
            <h1 class="name">> ${config.name.replace(/\s/g, '_')}</h1>
            <p class="cmd">$ status --role "${config.role}"</p>
            
            <p class="log-title">// experience.log</p>
            ${getExperienceHTML()}
            
            <p class="log-title">// projects.sh</p>
            ${getProjectsHTML()}
        </div>
      `;
      break;
  }

  // --- Final HTML Assembly ---
  const htmlContent = `
<!DOCTYPE html>
<html lang="en" class="${config.darkMode ? 'dark' : ''}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${config.name} | Portfolio</title>
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
            margin: 0; line-height: 1.6; transition: background 0.3s;
        }
        .dark body { background: #0f172a; color: #f1f5f9; }
        
        /* Shared Styles for scaling */
        .exp-header { display: flex; justify-content: space-between; align-items: baseline; }
        .exp-item { margin-bottom: 2em; }
        .exp-role { font-size: 0.9em; margin-bottom: 0.5em; }
        .exp-desc { font-size: 0.85em; opacity: 0.8; }
        
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

// Helper to convert hex to RGB for template transparency
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : '0,0,0';
}