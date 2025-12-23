import JSZip from 'jszip';
import { saveAs } from 'file-saver';

export const exportProject = (config) => {
  const zip = new JSZip();

  const expHTML = config.experiences.map(exp => `
    <div class="item">
        <div class="header">
            <strong>${exp.company}</strong>
            <span>${exp.dates}</span>
        </div>
        <div class="role">${exp.role}</div>
        <p>${exp.desc}</p>
    </div>
  `).join('');

  const eduHTML = config.education.map(edu => `
    <div class="item">
        <div class="header">
            <strong>${edu.school}</strong>
            <span>${edu.dates}</span>
        </div>
        <div class="role">${edu.degree}</div>
    </div>
  `).join('');

  const htmlContent = `
<!DOCTYPE html>
<html lang="en" class="${config.darkMode ? 'dark' : ''}">
<head>
    <meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${config.name} - Portfolio</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        :root { --primary: ${config.primaryColor}; }
        body { font-family: sans-serif; }
        .dark body { background: #0f172a; color: white; }
        .item { margin-bottom: 20px; }
        .header { display: flex; justify-content: space-between; font-size: 1.1rem; }
        .role { color: var(--primary); font-weight: bold; font-size: 0.9rem; }
    </style>
</head>
<body class="p-10">
    <div class="max-w-3xl mx-auto">
        <header class="text-center mb-12">
            <h1 class="text-5xl font-black uppercase" style="color: var(--primary)">${config.name}</h1>
            <p class="text-xl opacity-60">${config.role}</p>
        </header>
        <div class="grid md:grid-cols-2 gap-10">
            <section>
                <h2 class="text-2xl font-bold border-b-2 mb-4" style="border-color: var(--primary)">Pengalaman</h2>
                ${expHTML}
            </section>
            <section>
                <h2 class="text-2xl font-bold border-b-2 mb-4" style="border-color: var(--primary)">Pendidikan</h2>
                ${eduHTML}
            </section>
        </div>
    </div>
</body>
</html>`;

  zip.file("index.html", htmlContent);
  zip.generateAsync({ type: "blob" }).then(content => saveAs(content, "Portfolio.zip"));
};