import { socialLinks } from "@/config/social";

export function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-3">
      {socialLinks.map((social) => {
        const Icon = social.icon;

        return (
          <a
            key={social.id}
            href={social.href}
            target={social.external ? "_blank" : undefined}
            rel={
              social.external
                ? "noopener noreferrer"
                : undefined
            }
            aria-label={social.label}
            title={social.label}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface text-text-secondary transition-all duration-200 hover:border-primary hover:bg-primary hover:text-white"
          >
            <Icon
              size={19}
              aria-hidden="true"
            />
          </a>
        );
      })}
    </div>
  );
}