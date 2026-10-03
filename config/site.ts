export const siteConfig = {
  name: "Musab Alradi",

  fullName: "Musab Alradi Mohammed",

  url:
    process.env.NEXT_PUBLIC_SITE_URL ||
    "http://localhost:3000",

  description:
    "IT and Telecom Engineer specialized in software development, networking, telecom infrastructure, and technical support.",

  contact: {
    email: "musabalradi.info@gmail.com",
    phone: "0914179169",
    location: "Sudan",
  },

  images: {
    profile: "/images/hero/musab-alradi-hero.jpg.png",
    logo: "/logo/logo-m.png",
    og: "/images/og-image.jpg",
  },

  links: {
    linkedin:
      "https://www.linkedin.com/in/Eng.musabalradi",

    github:
      "https://github.com/Eng.musabalradi",

    facebook:
      "https://www.facebook.com/",

    twitter:
      "https://x.com/",

    whatsapp:
      "https://wa.me/",
  },

  cv: {
    url: "/cv/Musab-Alradi-CV.pdf",
  },
} as const;