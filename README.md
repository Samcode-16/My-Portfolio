# Samudyatha K Bhat — Developer Portfolio 🚀

A modern, responsive personal portfolio website showcasing full-stack applications, AI/RAG systems, interactive project demos, and competition achievements.

Built with **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS v4**, and **Next Cloudinary**.

---

## ✨ Features

- **⚡ Blazing Fast Architecture**: Built on Next.js 16 with React 19 and Turbopack for optimal performance and rapid page loads.
- **🎨 Sleek Dark-Themed UI**: Custom spotlight cards that track cursor position, marquee tech ticker, fluid scroll-reveal animations, and accessible color hierarchy.
- **📽️ Cloudinary Video & Media Integration**: Integrated video walkthroughs and media showcases using `next-cloudinary`.
- **🛠️ Highlighted Projects & Case Studies**:
  - **Kali-RAG**: Grounded troubleshooting assistant for Kali Linux using hybrid retrieval (BM25 + Sentence Transformers + Reciprocal Rank Fusion) and Gemini API.
  - **Campus Placement Management System**: Full-stack portal replacing spreadsheets for campus placements with automated eligibility gating, DPDP Act consent tracking, and 87 automated tests (Django, PostgreSQL, Supabase).
  - **Dasara Mitra**: Trilingual digital navigation companion and kiosk for the Mysuru Dasara festival (*1st place at Inunity Design Thinking*).
  - **Multilayer File Encryption**: 3-stage cryptographic pipeline combining Playfair cipher, Columnar Transposition, and DES.
  - **Smart Receipt Analyzer**: Receipt scanner leveraging Google AI Studio and Firebase.
  - **Electoral Voter Info Extractor**: OCR pipeline extracting structured voter details from electoral rolls.
- **🏆 Achievements & Involvements**: Interactive timeline highlighting hackathons, design thinking podium finishes, and leadership roles.
- **📱 Responsive & Accessible**: Fully adaptable layout supporting reduced-motion preferences, mobile navigation drawer, and cross-browser responsiveness.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Library:** [React 19](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Media Hosting:** [Next Cloudinary](https://next.cloudinary.dev/)
- **Deployment:** [Vercel](https://vercel.com/) / [Render](https://render.com/)

---

## 📁 Project Structure

```text
my-portfolio/
├── app/
│   ├── globals.css              # Tailwind imports, custom animations & theme variables
│   ├── layout.tsx               # Root layout, metadata & Geist font configuration
│   ├── page.tsx                 # Home page entry point
│   └── portfolio-content.tsx    # Portfolio sections, project data & interactive components
├── public/                      # Static assets, icons, and favicon
├── next.config.ts               # Next.js configuration
├── package.json                 # Dependencies and npm scripts
├── tsconfig.json                # TypeScript compiler settings
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.18.0 or later recommended)
- `npm`, `pnpm`, or `yarn`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Samcode-16/My-Portfolio.git
   cd My-Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Environment Variables (optional / for Cloudinary):**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open the browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

---

## 📦 Scripts

- `npm run dev` — Starts the development server with Turbopack.
- `npm run build` — Generates an optimized production build.
- `npm run start` — Runs the compiled production build locally.
- `npm run lint` — Runs ESLint checks across the project.

---

## 📬 Contact & Connect

- **Portfolio:** [samudyathakbhat.com](mailto:samudyathakbhat@gmail.com)
- **Email:** [samudyathakbhat@gmail.com](mailto:samudyathakbhat@gmail.com)
- **GitHub:** [@Samcode-16](https://github.com/Samcode-16)
- **LinkedIn:** [Samudyatha K Bhat](https://www.linkedin.com/in/samudyatha-k-bhat-s2716432s/)
