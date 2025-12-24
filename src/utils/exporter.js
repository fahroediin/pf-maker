import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { generateTemplateHTML } from '../templates/TemplateEngine';

export const exportProject = (config) => {
  const zip = new JSZip();
  const bodyContent = generateTemplateHTML(config);
  const fontUrl = `https://fonts.googleapis.com/css2?family=${config.fontFamily.replace(/\s+/g, '+')}:wght@400;700;900&display=swap`;

  const htmlContent = `
<!DOCTYPE html>
<html lang="en" class="${config.darkMode ? 'dark' : ''}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${config.name} | Portfolio</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="${fontUrl}" rel="stylesheet">
    <script>
      tailwind.config = {
        darkMode: 'class',
        theme: { extend: { colors: { primary: '${config.primaryColor}' } } }
      }
    </script>
    <style>
        body { margin: 0; padding: 0; }
    </style>
</head>
<body>${bodyContent}</body>
</html>`;

  zip.file("index.html", htmlContent);
  zip.generateAsync({ type: "blob" }).then(content => saveAs(content, `${config.name}_Portfolio.zip`));
};