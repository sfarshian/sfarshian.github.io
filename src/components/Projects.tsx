import { projects } from "../data";
import { FolderGit2, ExternalLink } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-surface-elevated">
      <div className="section-container">
        <div className="flex items-center gap-3 mb-12">
          <FolderGit2 size={22} className="text-primary" />
          <h2 className="text-2xl md:text-3xl font-serif font-semibold tracking-tight">
            Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <a
              key={i}
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="card card-hover p-7 group cursor-pointer block hover:-translate-y-0.5 hover:shadow-card-hover"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <project.icon size={20} className="text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg font-serif font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <ExternalLink size={14} className="shrink-0 mt-1 text-foreground-muted opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-[14px] text-foreground-secondary leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
