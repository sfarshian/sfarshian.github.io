import { education } from "../data";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="section-container">
        <div className="flex items-center gap-3 mb-12">
          <GraduationCap size={22} className="text-primary" />
          <h2 className="text-2xl md:text-3xl font-serif font-semibold tracking-tight">
            Education
          </h2>
        </div>

        <div className="card p-7 md:p-8 max-w-2xl">
          <h3 className="text-xl font-serif font-semibold text-foreground">
            {education.degree}
          </h3>
          <p className="mt-2 text-[15px] font-semibold text-foreground-secondary">
            {education.school}
          </p>
          <div className="mt-4 flex flex-wrap gap-5 text-[13px] text-foreground-muted">
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={14} />
              {education.location}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar size={14} />
              {education.period}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
