// config/i18n.ts

export type LanguageCode = "en" | "id";

export const languages: { code: LanguageCode; label: string; flag?: string }[] = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "id", label: "Bahasa Indonesia", flag: "🇮🇩" },
];

type Dictionary = Record<string, string>;

const en: Dictionary = {
  "app.title": "App Name",

  "header.search": "Search",
  "header.switchCompany": "Switch company",

  "tenant.activeCompany": "Active company",

  "dashboard.welcomeTitle": "Welcome",
  "dashboard.welcomeText":
    "This is your reusable Tabler + Next.js boilerplate with multi-tenant layout.",

  "login.title": "Sign in",
  "login.subtitle": "Use this page as boilerplate login for each project.",
  "login.email": "Email",
  "login.password": "Password",
  "login.forgot": "Forgot password?",
  "login.button": "Sign in",
  "login.noAccount": "Don't have account yet?",
  "login.signup": "Sign up",

  "footer.text": "Built with Tabler + Next.js boilerplate",
};

const id: Dictionary = {
  "app.title": "App Name",

  "header.search": "Cari",
  "header.switchCompany": "Ganti perusahaan",

  "tenant.activeCompany": "Perusahaan aktif",

  "dashboard.welcomeTitle": "Selamat datang",
  "dashboard.welcomeText":
    "Ini boilerplate Tabler + Next.js yang bisa kamu pakai ulang dengan layout multi-tenant.",

  "login.title": "Masuk",
  "login.subtitle":
    "Gunakan halaman ini sebagai template login untuk setiap project.",
  "login.email": "Email",
  "login.password": "Kata sandi",
  "login.forgot": "Lupa kata sandi?",
  "login.button": "Masuk",
  "login.noAccount": "Belum punya akun?",
  "login.signup": "Daftar",

  "footer.text": "Dibangun dengan Tabler + Next.js boilerplate",
};

export const dictionaries: Record<LanguageCode, Dictionary> = { en, id };

export function translate(lang: LanguageCode, key: string): string {
  const dict = dictionaries[lang] ?? dictionaries.en;
  return dict[key] ?? dictionaries.en[key] ?? key;
}
