import { projects } from "../data";
import { FolderGit2, ExternalLink, Lock } from "lucide-react";

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
          {projects.map((project, i) => {
            const cardContent = (
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <project.icon size={20} className="text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-serif font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      {project.isPrivate && (
                        <div className="relative inline-block">
                          <Lock size={12} className="text-foreground-muted mb-2" />
                          <span className="pointer-events-none absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-0.5 text-[11px] font-medium text-foreground-secondary bg-white border border-slate-200 rounded shadow-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-150 z-10">
                            Private project
                          </span>
                        </div>
                      )}
                    </div>
                    {!project.isPrivate && project.githubUrl && (
                      <ExternalLink size={14} className="shrink-0 mt-1 text-foreground-muted opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </div>
                  <p className="text-[14px] text-foreground-secondary leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            );

            const cardClasses =
              "card p-7 group block hover:-translate-y-0.5 hover:shadow-card-hover" +
              (project.isPrivate ? " cursor-default" : " card-hover cursor-pointer");

            if (project.isPrivate) {
              return (
                <div key={i} className={cardClasses}>
                  {cardContent}
                </div>
              );
            }

            return (
              <a
                key={i}
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cardClasses}
              >
                {cardContent}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
