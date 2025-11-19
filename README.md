# tiw-next-tabler-boilerplate  
**Reusable Next.js + Tabler Admin Boilerplate**  
Multi-Tenant • Multi-Language (i18n) • Theme (Dark/Light) • Clean Architecture

![Preview](./screenshot.png)

---

## 🚀 Introduction  
`tiw-next-tabler-boilerplate` adalah boilerplate profesional berbasis **Next.js App Router** dan **Tabler UI**, dirancang untuk:

- SaaS multi-tenant  
- Portal admin perusahaan  
- Dashboard analitik  
- ERP/HRM/Workflow  
- Frontend modern dengan Tabler sebagai base UI  

Boilerplate ini telah dipersonalisasi dengan:

- Multi-tenant switcher  
- Multi-language (EN/ID)  
- Theme system (dark/light)  
- Header 2 baris ala Tabler Official  
- Modular architecture (mudah dikembangkan ke proyek baru Tri)  

---

## ✨ Features

### 🎯 Core Features
- **Next.js 15 App Router**
- **TypeScript Ready**
- **Fully Responsive Tabler Admin UI**
- **Modular Components & Layouts**
- **No Sidebar — Top Navigation (2-row Header)**

### 🏢 Multi-Tenant Support
- Dynamic tenant switcher  
- Context-based shared state  
- Easy integration with API (tiw-coreauth or custom backend)

### 🌍 Multi-Language (EN/ID)
- LanguageSwitcher in header  
- i18n with dictionary + t() hook  
- Auto-persist via localStorage  

### 🌗 Theme System (Dark/Light)
- ThemeProvider  
- Auto-detect system preference  
- Persistent user theme (localStorage)  
- Toggle with Moon/Sun button  
- “Theme Settings” action in header  

### 🧩 Component Architecture
- Layouts (AppShell, HeaderTop, HeaderNav)  
- Reusable cards  
- TablerScripts loader  
- Clean folder structure (src/…)

### 🛠 Developer Friendly
- Absolute imports (`@/`)  
- Strict TypeScript  
- ESLint + Prettier (optional)  
- GitHub-ready structure  

---

## 📁 Folder Structure
src/
│
├─ app/
│ ├─ layout.tsx
│ └─ page.tsx
│
├─ components/
│ ├─ layout/
│ │ ├─ AppShell.tsx
│ │ ├─ Header.tsx
│ │ ├─ HeaderTop.tsx
│ │ ├─ HeaderNav.tsx
│ │ └─ TablerScripts.tsx
│ │
│ ├─ tenant/
│ │ ├─ TenantProvider.tsx
│ │ └─ TenantBanner.tsx
│ │
│ ├─ i18n/
│ │ ├─ LanguageProvider.tsx
│ │ └─ LanguageSwitcher.tsx
│ │
│ ├─ theme/
│ │ ├─ ThemeProvider.tsx
│ │ ├─ ThemeToggle.tsx
│ │ └─ ThemeSettingsButton.tsx
│ │
│ └─ pages/
│ └─ DashboardContent.tsx
│
├─ config/
│ ├─ menu.ts
│ └─ i18n.ts
│
└─ styles/
└─ globals.css


---

## ⚙️ Requirements

- Node.js 18+  
- pnpm / npm / yarn  
- Git  
- Browser modern  

---

## 🧑‍💻 Installation

- Clone project:
- git clone https://github.com/triismardiko/tiw-next-tabler-boilerplate.git
- cd tiw-next-tabler-boilerplate

- Install dependencies:
- npm install
- npm run dev
- http://localhost:3000