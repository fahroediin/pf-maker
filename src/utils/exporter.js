import JSZip from 'jszip';
import { saveAs } from 'file-saver';

export const exportProject = (config) => {
  const zip = new JSZip();

  // Helper: Render Lists
  const getExperienceHTML = () => config.experiences.map(exp => `
    <div class="item">
        <div class="header"><strong>${exp.company}</strong><span>${exp.dates}</span></div>
        <div class="role" style="color: var(--primary)">${exp.role}</div>
        <p class="desc">${exp.desc}</p>
    </div>`).join('');

  const getEducationHTML = () => config.education.map(edu => `
    <div class="item">
        <div class="header"><strong>${edu.school}</strong><span>${edu.dates}</span></div>
        <p class="desc">${edu.degree}</p>
    </div>`).join('');

  const getProjectsHTML = () => config.projects.map(proj => `
    <div class="proj-card">
        <div class="proj-header">
            <strong>${proj.title}</strong>
            ${proj.link ? `<a href="${proj.link}" style="color:var(--primary); text-decoration:none; font-size:0.8em">🔗</a>` : ''}
        </div>
        <p class="desc">${proj.desc}</p>
    </div>`).join('');

  let templateBody = '';
  let templateCSS = '';

  switch (config.templateId) {
    case 'modern':
      templateCSS = `
        body { padding: 5vw; }
        header { border-bottom: 4px solid var(--primary); padding-bottom: 2em; margin-bottom: 4em; }
        .name { font-size: 3.5em; font-weight: 900; text-transform: uppercase; color: var(--primary); margin:0; }
        .role { font-size: 1.2em; opacity: 0.6; text-transform: uppercase; letter-spacing: 2px; }
        .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4em; }
        .section-h { font-size: 0.7em; font-weight: 900; opacity: 0.3; letter-spacing: 3px; margin-bottom: 2em; }
        @media (max-width: 768px) { .grid { grid-template-columns: 1fr; } }
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
                ${getProjectsHTML()}
            </section>
        </div>`;
      break;

    case 'creative':
      templateCSS = `
        body { margin: 0; display: flex; min-height: 100vh; background: #f5f5f4; }
        .dark body { background: #09090b; }
        .sidebar { width: 35%; background: var(--primary); color: white; padding: 3em; display: flex; flex-direction: column; justify-content: flex-end; }
        .sidebar h1 { font-size: 4em; font-weight: 900; font-style: italic; margin: 0; line-height: 1; }
        .sidebar p { font-size: 1em; font-weight: bold; text-transform: uppercase; letter-spacing: 3px; opacity: 0.8; margin-top: 1em; }
        .main { width: 65%; padding: 3em; display: flex; flex-direction: column; gap: 2em; overflow-y: auto; }
        .card { background: white; padding: 2.5em; border-radius: 2.5em; box-shadow: 0 4px 15px rgba(0,0,0,0.05); }
        .dark .card { background: #18181b; color: white; }
        .proj-card { border: 2px dashed rgba(var(--primary-rgb), 0.3); padding: 1.5em; border-radius: 1.5em; margin-bottom: 1em; }
        @media (max-width: 768px) { body { flex-direction: column; } .sidebar, .main { width: 100%; } }
      `;
      templateBody = `
        <div class="sidebar">
            <h1>${config.name}</h1>
            <p>${config.role}</p>
        </div>
        <div class="main">
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
        body { background: #f3f4f6; padding: 3em; display: flex; justify-content: center; }
        .dark body { background: #020617; }
        .page { background: white; max-width: 850px; padding: 4em; border: 4px double var(--primary); border-top: 12px solid var(--primary); }
        .dark .page { background: #0f172a; color: white; border-color: var(--primary); }
        header { text-align: center; border-bottom: 1px solid #eee; padding-bottom: 2em; margin-bottom: 3em; }
        .dark header { border-color: #334155; }
        .name { font-size: 3em; font-weight: bold; text-transform: uppercase; margin: 0; }
        .role { font-style: italic; opacity: 0.6; font-size: 1.3em; margin-top: 0.5em; }
        .section-title { text-align: center; font-weight: bold; text-decoration: underline; margin: 2em 0; }
        .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2em; border-top: 1px solid #eee; padding-top: 2em; }
        .dark .grid { border-color: #334155; }
      `;
      templateBody = `
        <div class="page">
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
        body { background: #0d0d0d; color: #00ff41; padding: 4em; font-family: monospace; }
        .box { border: 1px solid rgba(0,255,65,0.2); max-width: 800px; margin: 0 auto; padding: 2em; }
        .name { font-size: 2.5em; font-weight: bold; margin: 0; }
        .role { color: white; opacity: 0.8; margin-bottom: 2em; }
        .log-t { color: #eab308; margin-top: 2em; font-size: 0.8em; }
        .exp-item { border-left: 2px solid rgba(0,255,65,0.2); padding-left: 1.5em; margin-bottom: 2em; }
      `;
      templateBody = `
        <div class="box">
            <p style="opacity:0.4; font-size:0.7em"># Portfolio_OS v1.0.2 Loaded</p>
            <h1 class="name">> ${config.name.replace(/\s/g, '_')}</h1>
            <p class="role">$ status --role "${config.role}"</p>
            <p class="log-t">// experience.log</p>
            ${getExperienceHTML()}
            <p class="log-t" style="color:#60a5fa">// projects.sh</p>
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
        :root { --primary: ${config.primaryColor}; --primary-rgb: ${hexToRgb(config.primaryColor)}; }
        * { box-sizing: border-box; }
        body { font-family: '${config.fontFamily}', sans-serif; font-size: ${config.baseFontSize}px; line-height: 1.5; }
        .exp-header { display: flex; justify-content: space-between; align-items: baseline; font-weight: bold; }
        .date { font-size: 0.8em; opacity: 0.5; font-weight: normal; }
        .role { font-weight: bold; font-size: 0.9em; margin-bottom: 5px; }
        .desc { font-size: 0.85em; opacity: 0.7; margin-top: 5px; }
        ${templateCSS}
    </style>
</head>
<body>${templateBody}</body>
</html>`;

  zip.file("index.html", htmlContent);
  zip.generateAsync({ type: "blob" }).then(content => saveAs(content, `${config.name}_Portfolio.zip`));
};

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : '0,0,0';
}