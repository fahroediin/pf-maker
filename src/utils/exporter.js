import JSZip from 'jszip';
import { saveAs } from 'file-saver';

export const exportProject = (config) => {
  const zip = new JSZip();

  const expHTML = config.experiences.map(exp => `
    <div class="item">
        <div class="header">
            <span class="comp">${exp.company}</span>
            <span class="date">${exp.dates}</span>
        </div>
        <div class="role">${exp.role}</div>
        <p class="desc">${exp.desc}</p>
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
            font-size: ${config.baseFontSize}px; /* Root Scaling */
            margin: 0; padding: 5vw; line-height: 1.5; transition: 0.3s;
        }
        .dark body { background: #0f172a; color: white; }
        .name { font-size: 3.5em; font-weight: 900; margin: 0; color: var(--primary); line-height: 1; }
        .title { font-size: 1.2em; opacity: 0.5; margin-bottom: 3em; text-transform: uppercase; }
        .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 4em; }
        .section-h { font-size: 0.7em; font-weight: 900; letter-spacing: 3px; border-bottom: 2px solid var(--primary); padding-bottom: 10px; margin-bottom: 2em; opacity: 0.5; }
        .item { margin-bottom: 2em; }
        .header { display: flex; justify-content: space-between; align-items: baseline; font-size: 1.1em; font-weight: bold; }
        .date { font-size: 0.6em; opacity: 0.5; font-family: monospace; }
        .role { color: var(--primary); font-size: 0.9em; font-weight: 600; margin-bottom: 0.5em; }
        .desc { font-size: 0.85em; opacity: 0.7; }
    </style>
</head>
<body>
    <header>
        <h1 class="name">${config.name}</h1>
        <p class="title">${config.role}</p>
    </header>
    <div class="grid">
        <section>
            <div class="section-h">EXPERIENCE</div>
            ${expHTML}
        </section>
        <section>
            <div class="section-h">EDUCATION</div>
            ${config.education.map(edu => `
                <div class="item">
                    <div class="header"><span>${edu.school}</span><span class="date">${edu.dates}</span></div>
                    <div class="desc">${edu.degree}</div>
                </div>
            `).join('')}
        </section>
    </div>
</body>
</html>`;

  zip.file("index.html", htmlContent);
  zip.generateAsync({ type: "blob" }).then(content => saveAs(content, `${config.name}_Portfolio.zip`));
};