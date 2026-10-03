import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";

import { Globe, Mail } from "lucide-react";

import { siteConfig } from "@/config/site";

export const socialLinks = [
  {
    id: "linkedin",
    label: "LinkedIn",
    href: siteConfig.links.linkedin,
    icon: FaLinkedinIn,
    external: true,
  },
  {
    id: "github",
    label: "GitHub",
    href: siteConfig.links.github,
    icon: FaGithub,
    external: true,
  },
  {
    id: "facebook",
    label: "Facebook",
    href: siteConfig.links.facebook,
    icon: FaFacebookF,
    external: true,
  },
  {
    id: "twitter",
    label: "X",
    href: siteConfig.links.twitter,
    icon: FaXTwitter,
    external: true,
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    href: siteConfig.links.whatsapp,
    icon: FaWhatsapp,
    external: true,
  },
  {
    id: "portfolio",
    label: "Portfolio",
    href: siteConfig.url,
    icon: Globe,
    external: false,
  },
  {
    id: "email",
    label: "Email",
    href: `mailto:${siteConfig.contact.email}`,
    icon: Mail,
    external: false,
  },
] as const;