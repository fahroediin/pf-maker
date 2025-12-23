import JSZip from 'jszip';
import { saveAs } from 'file-saver';

export const exportProject = (config) => {
  const zip = new JSZip();

  const expHTML = config.experiences.map(exp => `
    <div class="item">
        <div class="header"><strong>${exp.company}</strong><span>${exp.dates}</span></div>
        <div class="role" style="color: var(--primary)">${exp.role}</div>
        <p>${exp.desc}</p>
    </div>`).join('');

  const eduHTML = config.education.map(edu => `
    <div class="item">
        <div class="header"><strong>${edu.school}</strong><span>${edu.dates}</span></div>
        <div class="role">${edu.degree}</div>
    </div>`).join('');

  const htmlContent = `
<!DOCTYPE html>
<html lang="en" class="${config.darkMode ? 'dark' : ''}">
<head>
    <meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${config.name} - Portfolio</title>
    <link href="https://fonts.googleapis.com/css2?family=${config.fontFamily.replace(' ', '+')}:wght@300;400;700;900&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        :root { --primary: ${config.primaryColor}; }
        body { font-family: '${config.fontFamily}', sans-serif; font-size: ${config.baseFontSize}px; }
        .dark body { background: #0f172a; color: white; }
        .item { margin-bottom: 2rem; }
        .header { display: flex; justify-content: space-between; font-weight: bold; }
        .role { font-weight: 600; font-size: 0.9em; margin-bottom: 5px; }
        p { opacity: 0.8; font-size: 0.95em; line-height: 1.6; }
    </style>
</head>
<body class="p-8 md:p-20">
    <div class="max-w-4xl mx-auto">
        <header style="margin-bottom: 60px">
            <h1 style="color:var(--primary); font-size: 3.5rem; font-weight: 900; margin:0">${config.name}</h1>
            <p style="font-size: 1.5rem; opacity: 0.5">${config.role}</p>
        </header>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 50px;">
            <section>
                <h2 style="border-bottom: 2px solid var(--primary); padding-bottom: 10px; margin-bottom: 30px">EXPERIENCE</h2>
                ${expHTML}
            </section>
            <section>
                <h2 style="border-bottom: 2px solid var(--primary); padding-bottom: 10px; margin-bottom: 30px">EDUCATION</h2>
                ${eduHTML}
            </section>
        </div>
    </div>
</body>
</html>`;

  zip.file("index.html", htmlContent);
  zip.generateAsync({ type: "blob" }).then(content => saveAs(content, `${config.name}_Portfolio.zip`));
};