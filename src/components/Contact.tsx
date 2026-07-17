import { profile, socialLinks } from "../data";
import { Mail, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-surface-elevated">
      <div className="section-container">
        <div className="flex items-center gap-3 mb-12">
          <Mail size={22} className="text-primary" />
          <h2 className="text-2xl md:text-3xl font-serif font-semibold tracking-tight">
            Contact
          </h2>
        </div>

        <div className="card p-8 md:p-10 max-w-2xl">
          <p className="text-[15px] text-foreground-secondary leading-relaxed mb-8">
            I'm always open to discussing new opportunities, collaborations, or just
            connecting with fellow engineers and technologists.
          </p>

          <div className="space-y-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-3 px-5 py-3 rounded-lg bg-primary text-primary-foreground text-[14px] font-medium hover:bg-primary-hover transition-colors duration-200 cursor-pointer"
            >
              <Mail size={16} />
              {profile.email}
            </a>
            <br />
            <a
              href="https://t.me/sfarshian"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-5 py-3 rounded-lg border border-border bg-white text-[14px] font-medium text-foreground-secondary hover:text-primary hover:border-primary/30 transition-all duration-200 cursor-pointer"
            >
              <Send size={16} />
              {profile.telegram}
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-border flex items-center gap-5">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="p-2.5 rounded-lg border border-border text-foreground-muted hover:text-primary hover:border-primary/30 hover:bg-primary/[0.03] transition-all duration-200 cursor-pointer"
                aria-label={link.label}
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <p className="mt-12 text-center text-[12px] text-foreground-muted">
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </section>
  );
}
