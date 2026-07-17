import { profile, socialLinks } from "../data";
import { ExternalLink } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center section-padding pt-32"
    >
      <div className="section-container w-full">
        <div className="max-w-3xl">
          <p className="font-sans text-[13px] font-semibold uppercase tracking-[0.2em] text-primary mb-6">
            Portfolio
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground leading-tight tracking-tight">
            {profile.name}
          </h1>
          <h2 className="mt-4 text-lg md:text-xl text-foreground-secondary font-sans font-medium">
            {profile.title}
          </h2>
          <p className="mt-6 text-[15px] md:text-base text-foreground-secondary leading-relaxed max-w-2xl">
            {profile.bio}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-white text-[13px] font-medium text-foreground-secondary hover:text-primary hover:border-primary/30 hover:bg-primary/[0.03] transition-all duration-200 cursor-pointer"
              >
                <link.icon size={16} />
                <span className="hidden sm:inline">{link.label}</span>
                {link.href.startsWith("http") && (
                  <ExternalLink size={12} className="hidden sm:inline text-foreground-muted" />
                )}
              </a>
            ))}
          </div>

          <div className="mt-12 flex items-center gap-4 text-[13px] text-foreground-muted font-sans">
            <span>{profile.email}</span>
            <span className="text-border">|</span>
            <span>{profile.phone}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
