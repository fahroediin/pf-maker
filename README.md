# 🚀 pf-maker

**pf-maker** adalah aplikasi berbasis web modular yang memungkinkan pengguna untuk membuat, menyesuaikan, dan mengekspor website portfolio profesional dalam hitungan detik. Dengan fitur **1:1 Parity**, apa yang Anda lihat di layar editor akan sama persis dengan file yang Anda unduh.

## ✨ Fitur Utama

-   **4 Template Eksklusif**:
    -   **Modern Minimalist**: Desain bersih dengan layout dua kolom yang elegan.
    -   **Creative Side**: Layout asimetris dengan sidebar warna solid yang mencolok.
    -   **Classic Corporate**: Tampilan formal dengan bingkai ganda dan tipografi serif.
    -   **Developer Terminal**: Gaya konsol retro (hacker style) khusus untuk pengembang.
-   **Kustomisasi Real-Time**:
    -   **Warna Primer**: Ubah seluruh aksen warna website dengan color picker.
    -   **Dark Mode**: Dukungan penuh mode gelap di semua template.
    -   **Typography**: Pilih dari berbagai Google Fonts (Inter, Poppins, JetBrains Mono, dll).
    -   **Font Scaling**: Slider untuk mengubah ukuran font seluruh elemen secara proporsional (menggunakan satuan `em`).
-   **Manajemen Konten Dinamis**:
    -   Input Informasi Dasar (Nama & Jabatan).
    -   Sistem CRUD untuk **Pengalaman Kerja**, **Pendidikan**, dan **Proyek**.
-   **Ekspor & Integrasi**:
    -   **Download ZIP**: Ekstrak portfolio menjadi file `index.html` mandiri yang sudah menyertakan Tailwind CSS v3 via CDN.
    -   **GitHub Ready**: Tautan langsung untuk membuat repositori baru di GitHub guna menghosting hasil karya.

## 🛠️ Teknologi yang Digunakan

-   **Frontend**: React.js (Vite)
-   **Styling**: Tailwind CSS v3 (via CDN untuk sinkronisasi 1:1)
-   **Icons**: Lucide React
-   **State Management**: React Context API
-   **File Handling**: JSZip & File-saver

## 📂 Struktur Folder Modular

```text
Directory structure:
└── pf-maker/
    ├── README.md
    ├── eslint.config.js
    ├── index.html
    ├── package.json
    ├── postcss.config.js
    ├── tailwind.config.js
    ├── vite.config.js
    └── src/
        ├── App.css
        ├── App.jsx
        ├── index.css
        ├── main.jsx
        ├── components/
        │   └── Editor.jsx
        ├── context/
        │   └── PortfolioContext.jsx
        ├── templates/
        │   ├── PortfolioTemplates.jsx
        │   ├── TemplateEngine.jsx
        │   ├── TemplateList.jsx
        │   └── TemplateRenderer.jsx
        └── utils/
            └── exporter.js
