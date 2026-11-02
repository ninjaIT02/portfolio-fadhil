import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Menu,
  X,
  Award,
  Trophy,
  GraduationCap,
  Globe,
  Smartphone,
  Cpu,
  Network,
  Route,
  ArrowUpRight,
  Quote,
  CheckCircle2,
  Building2,
  Eye,
  FileText,
  Binary,
  BookOpen,
  Shirt,
} from "lucide-react";

/* ---------- CUSTOM BRAND ICONS ---------- */
function GithubIcon({
  size = 18,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({
  size = 18,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

/* ---------- DATA ---------- */
const NAV = [
  "About",
  "Tech Stack",
  "Process",
  "Projects",
  "Gallery",
  "Experience",
  "Certificates",
  "Contact",
];

const slug = (s: string) => s.toLowerCase().replace(/\s+/g, "-");

const LINKS = {
  email: "mailto:muhammadfadhilferdinan38@gmail.com",
  linkedin: "https://linkedin.com/in/muhammad-fadhil-ferdinan-a0323243b",
  github: "https://github.com/ninjaIT02",
};

// Tech Stack dengan Logo CDN Resmi
const STACK_WITH_LOGOS: Record<string, { name: string; logo: string }[]> = {
  "Web & Mobile Dev": [
    {
      name: "HTML5",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "PHP",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    },
    {
      name: "Laravel",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
    },
    {
      name: "Flutter",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    },
    {
      name: "Android Studio",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg",
    },
    {
      name: "Java",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
      name: "C++",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    },
    {
      name: "C",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    },
    {
      name: "MySQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
  ],
  "Network & Infra": [
    {
      name: "Linux",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    },
    { name: "Cisco", logo: "https://img.icons8.com/color/48/cisco.png" },
    {
      name: "Arduino",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg",
    },
    {
      name: "Apache",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg",
    },
    {
      name: "WireGuard VPN",
      logo: "https://img.icons8.com/color/48/shield.png",
    },
    {
      name: "Cloudflare",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg",
    },
    {
      name: "VirtualBox",
      logo: "https://img.icons8.com/color/48/virtualbox.png",
    },
  ],
  "Data, AI & Tools": [
    {
      name: "Git",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "GitHub",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      name: "VS Code",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
    {
      name: "Figma",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
    {
      name: "Canva",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
    },
    {
      name: "Claude AI",
      logo: "https://img.icons8.com/color/48/artificial-intelligence.png",
    },
  ],
};

const PROCESS = [
  {
    step: "01",
    title: "Discovery & Requirement Analysis",
    desc: "Melakukan analisis kebutuhan pengguna, pemetaan arsitektur basis data, serta studi kelayakan sebelum sebaris kode ditulis guna memastikan sistem relevan dan terstruktur.",
  },
  {
    step: "02",
    title: "Architecture & UI/UX Design",
    desc: "Merancang wireframe antarmuka yang responsif, menentukan skema alur pengguna (user journey), serta menyusun arsitektur sistem (API, ERD, dan skema jaringan).",
  },
  {
    step: "03",
    title: "Development & Integration",
    desc: "Proses koding modular menggunakan best-practices, pengintegrasian basis data (MySQL/Firebase), sensor IoT real-time, maupun pengkonfigurasian protokol VPN.",
  },
  {
    step: "04",
    title: "Testing, Optimization & Deployment",
    desc: "Pengujian fungsionalitas, uji ketahanan jaringan/routing, perbaikan bug, optimasi performa antarmuka, hingga sistem siap digunakan secara stabil di lingkungan produksi.",
  },
];

const DETAILED_PROJECTS = [
  {
    cat: "WEB",
    icon: Globe,
    year: "2026",
    title: "Sistem Pengaduan & Monitoring Kerusakan Jalan Berbasis Web",
    location: "Tanjungpinang",
    img: "/sigap.png",
    tags: ["PHP", "MySQL", "HTML", "CSS", "Web Dev"],
    shortDesc:
      "Platform pelaporan serta monitoring infrastruktur kerusakan jalan di Tanjungpinang secara transparan.",
    fullDesc:
      "Pengembangan proyek diawali dari permasalahan pengaduan kerusakan jalan publik yang kurang terstruktur. Sistem ini dibangun dari nol menggunakan PHP native & MySQL untuk arsitektur backend, serta HTML/CSS untuk antarmuka. Dilengkapi fitur ticketing workflow yang memungkinkan warga memantau status perbaikan secara berjenjang serta panel admin lengkap untuk pengelolaan direktori kerusakan jalan.",
    metrics: ["Ticketing Workflow Transparan", "Panel Administrasi Efisien"],
  },
  {
    cat: "IOT",
    icon: Cpu,
    year: "2026",
    title: "GASSGUARDPRO: Real-Time Safety & Monitoring System",
    location: "Bintan",
    img: "/GASS.png",
    tags: ["Arduino", "Firebase Realtime DB", "IoT", "Relay & Buzzer"],
    shortDesc:
      "Dashboard IoT interaktif pemantau kadar gas dan asap real-time dengan alarm peringatan bahaya.",
    fullDesc:
      "Sistem mitigasi bahaya kebakaran dan kebocoran gas ini mengintegrasikan mikrokontroler Arduino dengan sensor gas/asap. Data telemetri dikirimkan secara instan ke Firebase Realtime Database dan ditampilkan pada dashboard monitoring visual. Apabila kadar gas melampaui ambang batas aman, sistem secara otomatis memicu modul relay dan alarm buzzer untuk respons tanggap darurat.",
    metrics: ["Real-time Firebase Sync", "Relay Alarm Otomatis"],
  },
  {
    cat: "NETWORK",
    icon: Network,
    year: "2026",
    title: "Implementasi VPN Site-to-Site dengan WireGuard",
    location: "Simulasi GNS3",
    img: "/vpn.jpg",
    tags: ["GNS3", "WireGuard VPN", "Cisco Routing", "Network Security"],
    shortDesc:
      "Simulasi arsitektur jaringan terenkripsi dan aman menghubungkan komunikasi antardua kantor cabang.",
    fullDesc:
      "Proyek infrastruktur jaringan ini mensimulasikan konektivitas site-to-site antar kantor cabang yang terpisah geografis. Menggunakan protokol modern WireGuard di lingkungan simulasi GNS3 untuk memperoleh enkripsi data tinggi dengan latensi rendah. Proses pengerjaan mencakup konfigurasi routing tabel, pengujian enkapsulasi paket data, dan analisis keandalan jaringan dalam berbagai kondisi lalu lintas data.",
    metrics: ["Enkripsi WireGuard Tinggi", "Routing Site-to-Site Stabil"],
  },
  {
    cat: "MOBILE",
    icon: Smartphone,
    year: "2026",
    title: "Pengembangan Aplikasi Mobile KASMATE",
    location: "Android Platform",
    img: "/kas.jpeg",
    tags: ["Flutter", "Android Studio", "Dart", "Mobile Application"],
    shortDesc:
      "Aplikasi pengelolaan berbasis perangkat bergerak dengan UI/UX responsif dan modular.",
    fullDesc:
      "Dirancang dan dikembangkan sebagai solusi pengelolaan kas & aktivitas berbasis seluler. Menggunakan framework Flutter dan Android Studio untuk menghasilkan antarmuka native yang mulus di berbagai ukuran layar smartphone Android. Arsitektur koding disusun secara modular agar siap dikembangkan lebih lanjut serta dioptimalkan agar stabil tanpa lag.",
    metrics: ["UI/UX Responsif", "Build APK Android Stabil"],
  },
  {
    cat: "ALGORITHMS",
    icon: Route,
    year: "2026",
    title: "Peta Spasial Perkotaan 2D & Algoritma Citra Digital",
    location: "C++ Simulation",
    img: "/spa.png",
    tags: ["C++", "Algoritma A*", "Bezier Curves", "Citra Digital"],
    shortDesc:
      "Simulasi pencarian jalur terpendek (A-Star) dengan visualisasi grafis halus & perbaikan citra digital.",
    fullDesc:
      "Pengembangan perangkat lunak berbasis C++ performa tinggi untuk memecahkan masalah rute terpendek pada peta spasial perkotaan 2D menggunakan Algoritma A* (A-Star). Visualisasi pergerakan rute dihaluskan menggunakan formulasi matematika Bezier Curves, serta menerapkan teknik pemrosesan & restorasi citra digital untuk kualitas tampilan peta.",
    metrics: ["A* Route Optimization", "Bezier Curves Visuals"],
  },
  {
    cat: "ALGORITHMS",
    icon: Binary,
    year: "2025",
    title: "Simulasi Mesin Turing Bit Flipping (4-State)",
    location: "UMRAH",
    img: "/turing.png",
    tags: ["C", "Turing Machine", "Theory of Computation", "Algorithms"],
    shortDesc:
      "Perancangan dan simulasi Mesin Turing 4-state untuk pembalikan bit biner menggunakan C dan web simulator.",
    fullDesc:
      "Perancangan serta pemodelan komputasi Mesin Turing 4-state (q0, q1, q2, qf) yang mengintegrasikan fungsi pembalikan bit biner (0 ke 1 dan 1 ke 0). Diimplementasikan secara penuh menggunakan bahasa C dan dikomparasi pada simulator web strict mode untuk menguji ketepatan transisi pita komputasi serta kepastian algoritma.",
    metrics: ["Model Transisi 4-State", "Pengujian Strict Mode Valid"],
  },
  {
    cat: "WEB",
    icon: BookOpen,
    year: "2025",
    title: "Analisis & Perancangan Sistem Informasi Perpustakaan",
    location: "UMRAH",
    img: "/ap.jpg",
    tags: ["System Analysis", "Waterfall", "UML", "DFD", "ERD"],
    shortDesc:
      "Perancangan arsitektur sistem informasi perpustakaan berbasis web dengan metodologi Waterfall.",
    fullDesc:
      "Analisis mendalam dan perancangan sistem informasi perpustakaan berbasis web. Menyusun pemodelan sistem terstruktur meliputi Use Case Diagram, Activity Diagram, DFD Level 0 & 1, hingga skema ERD serta rancangan tabel basis data relasional untuk mendukung seluruh siklus manajemen CRUD perpustakaan.",
    metrics: ["Pemodelan Waterfall Lengkap", "Desain Basis Data Relasional"],
  },
  {
    cat: "WEB",
    icon: Shirt,
    year: "2025",
    title: "Platform Web Catalog Sewa Jas Tanjungpinang",
    location: "Tanjungpinang",
    img: "/jas.png",
    tags: ["HTML", "CSS", "JavaScript", "Frontend Dev", "UI/UX"],
    shortDesc:
      "Platform antarmuka penyewaan jas formal di Tanjungpinang dengan katalog produk interaktif.",
    fullDesc:
      "Pengembangan antarmuka frontend platform penyewaan jas formal skala lokal Tanjungpinang. Dibangun dengan kombinasi HTML, CSS, dan JavaScript interaktif yang menyajikan katalog busana formal, detail spesifikasi sewa, serta optimasi komponen UI agar intuitif bagi calon penyewa.",
    metrics: ["Katalog Produk Interaktif", "Antarmuka User-Friendly"],
  },
];

const FILTERS = ["ALL", "WEB", "MOBILE", "IOT", "NETWORK", "ALGORITHMS"];

const DETAILED_ORGS = [
  {
    role: "Koordinator Kominfo",
    org: "BEM Fakultas Teknik & Teknologi Kemaritiman UMRAH",
    period: "2025 – Sekarang",
    desc: "Memimpin strategi publikasi dan komunikasi publik melalui kanal media digital fakultas. Bertanggung jawab penuh mengelola dokumentasi seluruh kegiatan resmi, menyusun serta menyebarkan informasi publik secara akurat kepada mahasiswa, dosen, dan pihak eksternal.",
  },
  {
    role: "Sekretaris Inti",
    org: "Sempena Universitas Maritim Raja Ali Haji",
    period: "2024 – 2025",
    desc: "Mengelola seluruh administrasi kesekretariatan, persuratan resmi, proposal kegiatan, dan Laporan Pertanggungjawaban (LPJ) operasional untuk acara utama skala universitas. Mendukung koordinasi internal antar bidang serta memastikan arsip rapat tercatat tertib.",
  },
  {
    role: "Komisi Disiplin & Panitia Pelaksana",
    org: "PKKMB FTTK serta Event Olahraga & Lomba UMRAH",
    period: "2026",
    desc: "Bertanggung jawab menjaga ketertiban dan kedisiplinan peserta program. Berkoordinasi aktif dengan tim medis & operasional untuk kesiapan tanggap darurat selama acara, serta mengelola berkas pendaftaran dan administrasi perlombaan.",
  },
];

// DATA SERTIFIKAT + PATH PDF ASLI
const CERTIFICATES = [
  {
    title: "Frontend HTML Specialization",
    issuer: "MySkill",
    year: "2026",
    img: "/sertif frontend.jpg",
    pdfUrl: "/sertif frontend -html.pdf",
    desc: "Sertifikasi keahlian khusus dalam pengembangan struktur antarmuka web modern berbasis HTML5, aksesibilitas web, dan best practices penyusunan sintaks web terstandar.",
  },
  {
    title: "Data Science Fundamental",
    issuer: "MySkill",
    year: "2026",
    img: "/data_sains.jpg",
    pdfUrl: "/data_sains.pdf",
    desc: "Sertifikasi pemahaman dasar Data Science, mencakup analisis data, statistik dasar, pemrosesan himpunan data, dan dasar pemodelan data untuk pengambilan keputusan.",
  },
  {
    title: "Running Claude for Work",
    issuer: "MySkill",
    year: "2026",
    img: "/claude_page.jpg",
    pdfUrl: "/claude.pdf",
    desc: "Sertifikasi penerapan Prompt Engineering tingkat lanjut dan penggunaan kecerdasan buatan Claude AI untuk otomatisasi alur kerja serta efisiensi solusi IT profesional.",
  },
];

// DATA PROGRAM & PRESTASI + PATH FILE PDF
const WINS = [
  {
    title: "Juara 3 Lomba Videografi",
    event: "INDEX 1.0 - HMTI FTIK Universitas Maritim Raja Ali Haji",
    year: "2026",
    url: "/juara3.jpeg",
    label: "Lihat Foto ↗",
  },
  {
    title: "Participant - SMI Youth Exchange Chapter Malaysia",
    event: "Mahasiswa Muda Indonesia",
    year: "2024",
    url: "/SMI.pdf",
    label: "Buka PDF ↗",
  },
  {
    title: "Peserta - Sailing Camp TA 2026",
    event: "Pusat Teritorial Angkatan Laut & Maritim Muda Nusantara",
    year: "2026",
    url: "/Certificate angkatan laut.pdf",
    label: "Buka PDF ↗",
  },
];

/* ---------- HELPER COMPONENTS ---------- */
function Heading({
  children,
  light,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <h2
      className={`font-display text-4xl leading-[0.95] tracking-wide uppercase sm:text-6xl lg:text-7xl ${
        light ? "text-[#F4EFEA]" : "text-[#1E293B]"
      }`}
    >
      {children}
    </h2>
  );
}

function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 px-5 py-16 sm:px-8 sm:py-24 ${className}`}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

function Typewriter({ text }: { text: string }) {
  const reduce = useReducedMotion();
  const [n, setN] = useState(reduce ? text.length : 0);

  useEffect(() => {
    if (reduce || n >= text.length) return;
    const t = setTimeout(() => setN(n + 1), 55);
    return () => clearTimeout(t);
  }, [n, text, reduce]);

  return (
    <span aria-label={text}>
      {text.slice(0, n)}
      <span
        className="ml-1 inline-block w-[0.08em] animate-pulse bg-[#D97706]"
        style={{ height: "0.8em" }}
      />
    </span>
  );
}

/* ---------- SECTIONS ---------- */
function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-[#1E293B]/15 bg-[#F4EFEA]/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="#top"
          className="font-display text-2xl tracking-wide text-[#1E293B]"
        >
          FADHIL<span className="text-[#D97706]">.DEV</span>
        </a>
        <ul className="hidden gap-6 md:flex">
          {NAV.map((n) => (
            <li key={n}>
              <a
                href={`#${slug(n)}`}
                className="text-xs font-bold tracking-wider text-[#1E293B] uppercase transition-colors hover:text-[#D97706] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D97706]"
              >
                {n}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="text-[#1E293B] md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Tutup menu" : "Buka menu"}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <ul className="border-t border-[#1E293B]/15 bg-[#F4EFEA] px-5 pb-4 md:hidden">
          {NAV.map((n) => (
            <li key={n}>
              <a
                onClick={() => setOpen(false)}
                href={`#${slug(n)}`}
                className="block py-3 text-sm font-semibold text-[#1E293B]"
              >
                {n}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

function Hero() {
  const socials = [
    { Icon: LinkedinIcon, href: LINKS.linkedin, label: "LinkedIn" },
    { Icon: GithubIcon, href: LINKS.github, label: "GitHub" },
    { Icon: Mail, href: LINKS.email, label: "Email" },
  ];

  return (
    <section id="top" className="px-5 pt-10 pb-16 sm:px-8 sm:pt-16">
      <div className="mx-auto grid max-w-6xl items-end gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#1E293B]/20 bg-white/70 px-4 py-2 text-xs font-bold text-[#1E293B]">
            <Building2 size={14} className="text-[#D97706]" /> Universitas
            Maritim Raja Ali Haji (UMRAH)
          </span>
          <h1 className="font-display mt-6 min-h-[2.5em] text-5xl leading-[0.95] tracking-wide text-[#1E293B] uppercase sm:text-7xl lg:text-8xl">
            <Typewriter text="DEVELOPER & IT SOLUTIONS PORTFOLIO" />
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed font-medium text-[#1E293B]/80">
            Mahasiswa S1 Teknik Informatika UMRAH yang berfokus membangun Solusi
            Web, Mobile, IoT, dan Infrastruktur Jaringan secara handal dan
            terintegrasi.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl border border-[#F4EFEA]/10 bg-[#1E293B] p-7 text-[#F4EFEA] shadow-xl"
        >
          <p className="font-display text-3xl tracking-wide">
            Muhammad Fadhil Ferdinan
          </p>
          <p className="mt-2 text-sm font-medium text-[#F4EFEA]/75">
            Web, Mobile, IoT, Network & IT Solutions
          </p>
          <div className="mt-4 space-y-1.5 text-xs text-[#F4EFEA]/80">
            <p className="flex items-center gap-2">
              <Building2 size={14} className="text-[#D97706]" /> S1 Teknik
              Informatika - UMRAH
            </p>
            <p className="flex items-center gap-2">
              <MapPin size={14} className="text-[#D97706]" /> Bintan, Kepulauan
              Riau
            </p>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <a
              href={LINKS.email}
              className="rounded-full bg-[#D97706] px-5 py-2.5 text-xs font-bold tracking-wider text-white uppercase transition hover:bg-[#b45f05]"
            >
              Hubungi Saya
            </a>
            {socials.map((soc) => (
              <a
                key={soc.label}
                href={soc.href}
                aria-label={soc.label}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[#F4EFEA]/25 p-2.5 transition hover:border-[#D97706] hover:text-[#D97706]"
              >
                <soc.Icon size={16} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" className="bg-[#1E293B] text-[#F4EFEA]">
      <div className="grid items-center gap-10 lg:grid-cols-[auto_1fr]">
        {/* Wadah Foto Profil */}
        <div className="mx-auto h-64 w-56 shrink-0 overflow-hidden rounded-2xl border-2 border-[#D97706] bg-slate-900 shadow-xl sm:h-80 sm:w-64">
          <img
            src="/foto-fadhil.jpeg"
            alt="Muhammad Fadhil Ferdinan"
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <Heading light>Hi, I'm Fadhil</Heading>

          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-[#F4EFEA]/90 sm:text-base">
            Saya adalah mahasiswa S1 Teknik Informatika di{" "}
            <strong className="text-[#D97706]">
              Universitas Maritim Raja Ali Haji (UMRAH)
            </strong>{" "}
            dengan rekam jejak praktis yang kuat dalam merancang, menganalisis,
            dan memproduksi solusi teknologi terintegrasi. Berfokus pada
            keandalan arsitektur dan efisiensi sistem—mulai dari platform Web,
            aplikasi Mobile Flutter, integrasi IoT real-time, simulasi jaringan
            VPN, hingga optimasi algoritma komputasi.
          </p>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#F4EFEA]/80 sm:text-base">
            Hingga saat ini, saya telah mengeksekusi{" "}
            <strong className="text-white">8+ proyek IT utama</strong> yang
            mencakup perancangan arsitektur basis data, simulasi rute Algoritma
            A* (C++), pemodelan komputasi Mesin Turing (C), hingga analisis
            sistem informasi terstruktur (metode Waterfall & UML).
          </p>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#F4EFEA]/75 sm:text-base">
            Selain kapasitas teknis dan sertifikasi spesialisasi (Frontend, Data
            Science, & AI), saya dibekali kepemimpinan organisasi nyata sebagai{" "}
            <strong className="text-white">
              Koordinator Kominfo BEM FTTK UMRAH
            </strong>{" "}
            dan{" "}
            <strong className="text-white">
              Sekretaris Inti Sempena UMRAH
            </strong>
            . Pengalaman memimpin komunikasi publik, administrasi universitas,
            serta keikutsertaan dalam <em>SMI Youth Exchange Malaysia</em> &{" "}
            <em>Sailing Camp TNI AL</em> membentuk saya menjadi talenta IT yang
            adaptif, berjiwa kepemimpinan, dan berorientasi pada hasil.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <div className="flex h-24 w-44 flex-col items-center justify-center rounded-2xl border-2 border-[#D97706] bg-[#F4EFEA]/5 p-3 text-center">
              <span className="font-display text-xl text-[#D97706]">UMRAH</span>
              <span className="mt-1 text-[10px] font-bold text-[#F4EFEA]/80 uppercase">
                S1 Teknik Informatika
              </span>
            </div>
            <div className="flex h-24 w-44 flex-col items-center justify-center rounded-2xl border-2 border-[#D97706] bg-[#F4EFEA]/5 p-3 text-center">
              <span className="font-display text-2xl text-[#D97706]">8+</span>
              <span className="mt-1 text-[10px] font-bold text-[#F4EFEA]/80 uppercase">
                Proyek IT Selesai
              </span>
            </div>
            <div className="flex h-24 w-44 flex-col items-center justify-center rounded-2xl border-2 border-[#D97706] bg-[#F4EFEA]/5 p-3 text-center">
              <span className="font-display text-xl text-[#D97706]">
                LEADERSHIP
              </span>
              <span className="mt-1 text-[10px] font-bold text-[#F4EFEA]/80 uppercase">
                Kominfo BEM & Sekretaris
              </span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function TechStack() {
  const categories = Object.keys(STACK_WITH_LOGOS);
  const [activeTab, setActiveTab] = useState(categories[0]);

  return (
    <Section id="tech-stack">
      <Heading>Tech Stack & Specialization</Heading>
      <p className="mt-2 max-w-xl text-sm text-[#1E293B]/70">
        Daftar bahasa pemrograman, framework, perangkat jaringan, dan tools
        pendukung yang saya kuasai.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-[240px_1fr]">
        <div role="tablist" className="flex gap-2 overflow-x-auto md:flex-col">
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeTab === cat}
              onClick={() => setActiveTab(cat)}
              className={`rounded-xl border px-5 py-3 text-left text-xs font-bold tracking-wider whitespace-nowrap uppercase transition ${
                activeTab === cat
                  ? "border-[#1E293B] bg-[#1E293B] text-[#F4EFEA]"
                  : "border-[#1E293B]/20 text-[#1E293B] hover:border-[#D97706]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="min-h-[240px] rounded-2xl border border-[#F4EFEA]/10 bg-[#1E293B] p-6 shadow-md">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
            >
              {STACK_WITH_LOGOS[activeTab].map((item) => (
                <div
                  key={item.name}
                  className="flex items-center gap-3 rounded-xl border border-[#F4EFEA]/10 bg-[#0f172a]/60 p-3 transition-all hover:border-[#D97706]/60"
                >
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="h-7 w-7 shrink-0 object-contain"
                  />
                  <span className="text-xs font-bold text-[#F4EFEA]">
                    {item.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}

function Process() {
  return (
    <Section id="process" className="bg-[#1E293B]/[0.05]">
      <Heading>My Development Process</Heading>
      <p className="mt-2 max-w-xl text-sm text-[#1E293B]/70">
        Alur kerja terstruktur yang saya terapkan dalam setiap pengembangan
        sistem software maupun jaringan.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {PROCESS.map((p) => (
          <div
            key={p.step}
            className="flex flex-col justify-between rounded-2xl border border-[#F4EFEA]/10 bg-[#1E293B] p-6 text-[#F4EFEA] shadow-md"
          >
            <div>
              <span className="font-display text-5xl text-[#D97706]">
                {p.step}
              </span>
              <h3 className="font-display mt-3 text-xl leading-tight tracking-wide uppercase">
                {p.title}
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-[#F4EFEA]/75">
                {p.desc}
              </p>
            </div>
            <div className="mt-6 flex items-center gap-1.5 text-[10px] font-bold tracking-wider text-[#D97706] uppercase">
              <CheckCircle2 size={12} /> Standardized Step
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects">
      <Heading>Real Results, Built With Purpose</Heading>
      <p className="mt-2 max-w-2xl text-sm text-[#1E293B]/70">
        Penjelasan mendalam proyek IT yang telah dirancang dan dikembangkan dari
        awal hingga akhir.
      </p>

      <div className="mt-10 space-y-8">
        {DETAILED_PROJECTS.map((p) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="grid items-center gap-6 rounded-2xl border border-[#F4EFEA]/10 bg-[#1E293B] p-6 text-[#F4EFEA] shadow-xl sm:p-8 md:grid-cols-12"
          >
            <div className="relative h-56 w-full overflow-hidden rounded-xl border border-[#F4EFEA]/15 bg-slate-900 md:col-span-5">
              <img
                src={p.img}
                alt={p.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute top-3 left-3 rounded-md bg-[#D97706] px-2.5 py-1 text-[10px] font-bold tracking-wider text-white uppercase">
                {p.cat}
              </div>
            </div>

            <div className="space-y-3 md:col-span-7">
              <div className="flex items-center justify-between font-mono text-xs text-[#D97706]">
                <span className="flex items-center gap-1">
                  <p.icon size={14} /> {p.location}
                </span>
                <span>{p.year}</span>
              </div>
              <h3 className="font-display text-2xl tracking-wide uppercase">
                {p.title}
              </h3>
              <p className="text-xs leading-relaxed text-[#F4EFEA]/80">
                {p.fullDesc}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-[#F4EFEA]/10 px-2.5 py-1 text-[10px] font-semibold text-slate-300"
                  >
                    #{t}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-3 border-t border-[#F4EFEA]/10 pt-3">
                {p.metrics.map((m) => (
                  <div
                    key={m}
                    className="rounded-lg border border-[#D97706]/50 bg-[#D97706]/10 p-2 text-center text-[11px] font-bold text-[#D97706]"
                  >
                    ✓ {m}
                  </div>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

function Gallery() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [selectedProject, setSelectedProject] = useState<
    (typeof DETAILED_PROJECTS)[0] | null
  >(null);

  const filteredItems =
    activeFilter === "ALL"
      ? DETAILED_PROJECTS
      : DETAILED_PROJECTS.filter((p) => p.cat === activeFilter);

  return (
    <Section id="gallery" className="bg-[#1E293B] text-[#F4EFEA]">
      <Heading light>Portfolio Gallery</Heading>
      <p className="mt-2 max-w-xl text-sm text-[#F4EFEA]/70">
        Klik pada kartu proyek di bawah ini untuk melihat gambar pratinjau dan
        penjelasan detailnya.
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {FILTERS.map((x) => (
          <button
            key={x}
            onClick={() => setActiveFilter(x)}
            className={`rounded-full px-4 py-2 text-xs font-bold tracking-wider uppercase transition ${
              activeFilter === x
                ? "bg-[#D97706] text-white shadow-md"
                : "border border-[#F4EFEA]/30 text-[#F4EFEA] hover:border-[#D97706]"
            }`}
          >
            {x}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence>
          {filteredItems.map((p) => (
            <motion.div
              layout
              key={p.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={() => setSelectedProject(p)}
              className="group flex cursor-pointer flex-col justify-between overflow-hidden rounded-2xl border border-[#F4EFEA]/15 bg-slate-900 shadow-lg transition-all hover:border-[#D97706]"
            >
              <div className="relative h-48 w-full overflow-hidden bg-slate-800">
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 rounded bg-[#D97706] px-2.5 py-1 text-[9px] font-bold text-white uppercase">
                  {p.cat}
                </div>
              </div>
              <div className="space-y-2 p-5">
                <div className="flex items-center justify-between text-[11px] font-bold text-[#D97706]">
                  <span>{p.location}</span>
                  <span className="flex items-center gap-1">
                    Detail <Eye size={12} />
                  </span>
                </div>
                <h3 className="font-display text-lg leading-tight tracking-wide uppercase transition-colors group-hover:text-[#D97706]">
                  {p.title}
                </h3>
                <p className="line-clamp-2 text-xs text-[#F4EFEA]/70">
                  {p.shortDesc}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative max-h-[90vh] w-full max-w-2xl space-y-4 overflow-y-auto rounded-2xl border border-[#F4EFEA]/20 bg-[#1E293B] p-6 text-[#F4EFEA] shadow-2xl"
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 rounded-full bg-slate-800 p-2 text-slate-400 hover:text-white"
            >
              <X size={18} />
            </button>

            <img
              src={selectedProject.img}
              alt={selectedProject.title}
              className="h-60 w-full rounded-xl border border-slate-700 object-cover"
            />

            <div className="space-y-2">
              <span className="rounded bg-[#D97706] px-2.5 py-1 text-[10px] font-bold text-white uppercase">
                {selectedProject.cat}
              </span>
              <h3 className="font-display text-2xl tracking-wide uppercase">
                {selectedProject.title}
              </h3>
              <p className="font-mono text-xs text-[#D97706]">
                {selectedProject.location} • {selectedProject.year}
              </p>
              <p className="text-xs leading-relaxed text-[#F4EFEA]/85">
                {selectedProject.fullDesc}
              </p>
            </div>

            <div className="border-t border-slate-700 pt-2">
              <p className="mb-2 text-[10px] font-bold text-slate-400 uppercase">
                Teknologi Terlibat:
              </p>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded bg-slate-800 px-3 py-1 text-xs font-semibold text-amber-300"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience">
      <Heading>Experience & Leadership</Heading>
      <p className="mt-2 mb-10 max-w-xl text-sm text-[#1E293B]/70">
        Pengalaman kepemimpinan organisasi dan tanggung jawab nyata di
        lingkungan kampus.
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        {DETAILED_ORGS.map((org) => (
          <div
            key={org.role}
            className="flex flex-col justify-between space-y-3 rounded-2xl border border-[#1E293B]/20 bg-white/50 p-6 shadow-sm"
          >
            <div>
              <span className="rounded bg-[#D97706]/10 px-2.5 py-1 text-[10px] font-bold text-[#D97706] uppercase">
                {org.period}
              </span>
              <h3 className="font-display mt-3 text-xl tracking-wide text-[#1E293B] uppercase">
                {org.role}
              </h3>
              <p className="text-xs font-bold text-[#1E293B]/80">{org.org}</p>
              <p className="mt-3 text-xs leading-relaxed text-[#1E293B]/70">
                {org.desc}
              </p>
            </div>
            <div className="border-t border-stone-300 pt-3 text-[10px] font-bold text-slate-500 uppercase">
              Tanggung Jawab Organisasi
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Certificates() {
  const [selectedCert, setSelectedCert] = useState<
    (typeof CERTIFICATES)[0] | null
  >(null);

  return (
    <Section id="certificates" className="bg-[#1E293B] text-[#F4EFEA]">
      <Heading light>Certificates & Achievements</Heading>
      <p className="mt-2 mb-10 max-w-xl text-sm text-[#F4EFEA]/70">
        Sertifikasi resmi dan pencapaian yang pernah diraih.
      </p>

      <div className="mb-12 grid gap-6 sm:grid-cols-3">
        {CERTIFICATES.map((cert) => (
          <div
            key={cert.title}
            onClick={() => setSelectedCert(cert)}
            className="group cursor-pointer space-y-3 overflow-hidden rounded-xl border border-[#F4EFEA]/15 bg-slate-900 p-4 shadow-md transition-all hover:border-[#D97706]"
          >
            <div className="relative h-40 w-full overflow-hidden rounded-lg bg-slate-800">
              <img
                src={cert.img}
                alt={cert.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity group-hover:opacity-0">
                <FileText size={28} className="text-white/80" />
              </div>
            </div>
            <div>
              <span className="text-[9px] font-bold text-[#D97706] uppercase">
                {cert.issuer} • {cert.year}
              </span>
              <h4 className="text-sm font-bold text-[#F4EFEA] transition-colors group-hover:text-[#D97706]">
                {cert.title}
              </h4>
            </div>
          </div>
        ))}
      </div>

      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-lg space-y-4 rounded-2xl border border-[#F4EFEA]/20 bg-[#1E293B] p-6 text-[#F4EFEA] shadow-2xl">
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 rounded-full bg-slate-800 p-2 text-slate-400 hover:text-white"
            >
              <X size={18} />
            </button>
            <img
              src={selectedCert.img}
              alt={selectedCert.title}
              className="h-52 w-full rounded-xl border border-slate-700 object-cover"
            />
            <div>
              <span className="text-xs font-bold text-[#D97706]">
                {selectedCert.issuer} ({selectedCert.year})
              </span>
              <h3 className="font-display mt-1 text-xl uppercase">
                {selectedCert.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[#F4EFEA]/80">
                {selectedCert.desc}
              </p>
            </div>

            {selectedCert.pdfUrl && (
              <a
                href={selectedCert.pdfUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#D97706] px-5 py-3 text-xs font-bold tracking-wider text-white uppercase transition hover:bg-[#b45f05]"
              >
                Lihat Dokumen PDF Asli ↗
              </a>
            )}
          </div>
        </div>
      )}

      <div className="border-t border-slate-800 pt-8">
        <h3 className="font-display mb-4 text-xl tracking-wide text-[#D97706] uppercase">
          Program & Prestasi
        </h3>
        <div className="grid gap-4 sm:grid-cols-3">
          {WINS.map((w) => (
            <a
              key={w.title}
              href={w.url}
              target="_blank"
              rel="noreferrer"
              className="group block space-y-1 rounded-xl border border-slate-800 bg-slate-900 p-4 transition-all hover:border-[#D97706]"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-[#D97706]">
                  {w.year}
                </span>
                <span className="text-[10px] font-bold text-slate-400 group-hover:text-[#D97706]">
                  {w.label}
                </span>
              </div>
              <h4 className="text-xs font-bold text-white transition-colors group-hover:text-[#D97706]">
                {w.title}
              </h4>
              <p className="text-[10px] text-slate-400">{w.event}</p>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer
      id="contact"
      className="scroll-mt-20 border-t border-slate-800 bg-[#1E293B] px-5 py-20 text-[#F4EFEA] sm:px-8"
    >
      <div className="mx-auto max-w-6xl text-center">
        <Quote className="mx-auto text-[#D97706]" />
        <h2 className="font-display mt-4 text-5xl leading-[0.9] tracking-wide uppercase sm:text-7xl lg:text-8xl">
          Let's Build Something Great Together
        </h2>
        <a
          href={LINKS.email}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#D97706] px-8 py-3 font-bold text-white transition hover:bg-[#b45f05]"
        >
          Kirim Email <ArrowUpRight size={18} />
        </a>

        <ul className="mt-10 flex flex-col items-center justify-center gap-4 text-xs font-medium text-[#F4EFEA]/80 sm:flex-row sm:flex-wrap sm:gap-8">
          <li className="flex items-center gap-2">
            <Building2 size={15} className="text-[#D97706]" />
            Universitas Maritim Raja Ali Haji (UMRAH)
          </li>
          <li className="flex items-center gap-2">
            <MapPin size={15} className="text-[#D97706]" />
            Bintan, Kepulauan Riau
          </li>
          <li className="flex items-center gap-2">
            <Mail size={15} className="text-[#D97706]" />
            muhammadfadhilferdinan38@gmail.com
          </li>
          <li className="flex items-center gap-2">
            <Phone size={15} className="text-[#D97706]" />
            0819-9539-1292 / 0831-4694-4198
          </li>
        </ul>

        <p className="mt-12 text-xs text-[#F4EFEA]/40">
          © {new Date().getFullYear()} Muhammad Fadhil Ferdinan — S1 Teknik
          Informatika UMRAH
        </p>
      </div>
    </footer>
  );
}

/* ---------- MAIN APP COMPONENT ---------- */
export default function App() {
  return (
    <div className="font-body min-h-screen bg-[#F4EFEA] text-[#1E293B] antialiased">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Plus+Jakarta+Sans:wght@400;500;700&display=swap');
        html { scroll-behavior: smooth; }
        .font-display { font-family: 'Anton', 'Bebas Neue', Impact, sans-serif; font-weight: 400; }
        .font-body { font-family: 'Plus Jakarta Sans', system-ui, sans-serif; }
        @media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } * { animation: none !important; } }
      `}</style>
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Process />
        <Projects />
        <Gallery />
        <Experience />
        <Certificates />
      </main>
      <Footer />
    </div>
  );
}
