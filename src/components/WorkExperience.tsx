import { workExperience } from "../data";
import { Briefcase } from "lucide-react";

export default function WorkExperience() {
  return (
    <section id="experience" className="section-padding bg-surface-elevated">
      <div className="section-container">
        <div className="flex items-center gap-3 mb-12">
          <Briefcase size={22} className="text-primary" />
          <h2 className="text-2xl md:text-3xl font-serif font-semibold tracking-tight">
            Work Experience
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-2 bottom-2 w-px bg-border hidden md:block" />

          <div className="space-y-10">
            {workExperience.map((exp, i) => (
              <div key={i} className="relative flex gap-6">
                {/* Timeline dot */}
                <div className="hidden md:flex shrink-0 w-10 justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary mt-1.5 ring-4 ring-primary/10" />
                </div>

                <div className="card card-hover p-6 md:p-7 flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                    <h3 className="text-lg font-serif font-semibold text-foreground">
                      {exp.title}
                    </h3>
                    <span className="text-[13px] font-medium text-primary font-sans whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-[14px] font-semibold text-foreground-secondary mb-3">
                    {exp.company}
                  </p>
                  <ul className="space-y-2">
                    {exp.points.map((point, j) => (
                      <li key={j} className="text-[14px] text-foreground-secondary leading-relaxed flex gap-2">
                        <span className="text-primary mt-1 shrink-0">▹</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
