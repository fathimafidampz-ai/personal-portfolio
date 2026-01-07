# 🎨 Premium Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 📁 Project Structure

```
portfolio-website/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx               # Root layout (wraps all pages)
│   └── page.tsx                 # Home page
│
├── components/                   # Reusable React components
│   ├── ui/                      # UI components (buttons, cards, etc.)
│   ├── sections/                # Page sections (hero, about, etc.)
│   └── layout/                  # Layout components (header, footer)
│
├── lib/                         # Utility functions and helpers
│   └── utils.ts                 # Class name merger utility
│
├── public/                      # Static assets
│   ├── images/                  # Image files
│   └── icons/                   # Icon files
│
├── styles/                      # Global styles
│   └── globals.css              # Global CSS with Tailwind
│
├── types/                       # TypeScript type definitions
│
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
├── next.config.js               # Next.js configuration
└── package.json                 # Project dependencies

```

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** (To be added)
- **Fonts:** Inter (Google Fonts)

## 📝 Development Phases

- ✅ **Phase 1:** Project Setup & Configuration
- 🔄 **Phase 2:** Theme System & Dark Mode
- ⏳ **Phase 3:** Navigation & Layout
- ⏳ **Phase 4:** Home Page
- ⏳ **Phase 5:** About Me Page
- ⏳ **Phase 6:** Skills Page
- ⏳ **Phase 7:** Projects Page
- ⏳ **Phase 8:** Contact Page
- ⏳ **Phase 9:** Final Polish

## 🎨 Customization Guide

### Colors
Edit `tailwind.config.ts` to change the color scheme:
- `primary`: Main brand colors
- `accent`: Highlight colors

### Fonts
Change the font in `app/layout.tsx`:
```typescript
import { YourFont } from "next/font/google";
```

### Content
All content is currently placeholder text. Look for comments marked with:
```typescript
// 📝 CUSTOMIZATION: Replace this with your content
```

## 📦 Build for Production

```bash
npm run build
npm start
```

## 📄 License

Private - All rights reserved

---

Built with ❤️ by Fathima Fida
