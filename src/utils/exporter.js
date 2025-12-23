import JSZip from 'jszip';
import { saveAs } from 'file-saver';

export const exportProject = (config) => {
  const zip = new JSZip();

  const expHTML = config.experiences.map(exp => `
    <div class="item">
        <div class="header"><strong>${exp.company}</strong><span>${exp.dates}</span></div>
        <div class="role" style="color: var(--primary)">${exp.role}</div>
        <p class="desc">${exp.desc}</p>
    </div>`).join('');

  const projectsHTML = config.projects.map(proj => `
    <div class="project-card">
        <div class="header"><strong>${proj.title}</strong></div>
        <p class="desc">${proj.desc}</p>
        ${proj.link ? `<a href="${proj.link}" style="color:var(--primary); font-size: 0.7em;">View Link</a>` : ''}
    </div>`).join('');

  const htmlContent = `
<!DOCTYPE html>
<html lang="en" class="${config.darkMode ? 'dark' : ''}">
<head>
    <meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${config.name} - Portfolio</title>
    <link href="https://fonts.googleapis.com/css2?family=${config.fontFamily.replace(' ', '+')}:wght@400;700;900&display=swap" rel="stylesheet">
    <style>
        :root { --primary: ${config.primaryColor}; }
        body { 
            font-family: '${config.fontFamily}', sans-serif; 
            font-size: ${config.baseFontSize}px; 
            margin: 0; padding: 5vw; line-height: 1.5; 
        }
        .dark body { background: #0f172a; color: white; }
        .name { font-size: 3.5em; font-weight: 900; margin: 0; color: var(--primary); }
        .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 3em; margin-top: 3em; }
        .section-h { font-size: 0.7em; font-weight: 900; letter-spacing: 2px; border-bottom: 2px solid var(--primary); padding-bottom: 10px; margin-bottom: 2em; opacity: 0.5; }
        .item, .project-card { margin-bottom: 2em; }
        .header { display: flex; justify-content: space-between; font-size: 1em; }
        .role { color: var(--primary); font-size: 0.9em; font-weight: bold; margin-bottom: 5px; }
        .desc { font-size: 0.85em; opacity: 0.7; }
        .project-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
    </style>
</head>
<body>
    <h1 class="name">${config.name}</h1>
    <div class="grid">
        <section>
            <div class="section-h">EXPERIENCE</div>
            ${expHTML}
        </section>
        <section>
            <div class="section-h">PROJECTS</div>
            <div class="project-grid">${projectsHTML}</div>
        </section>
    </div>
</body>
</html>`;

  zip.file("index.html", htmlContent);
  zip.generateAsync({ type: "blob" }).then(content => saveAs(content, `${config.name}_Portfolio.zip`));
};