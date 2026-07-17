import { projects } from "../data";
import { FolderGit2 } from "lucide-react";

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
            <div key={i} className="card card-hover p-7 group">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <project.icon size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[14px] text-foreground-secondary leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
