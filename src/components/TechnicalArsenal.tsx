import { skillCategories } from "../data";
import { Wrench } from "lucide-react";

export default function TechnicalArsenal() {
  return (
    <section id="arsenal" className="section-padding">
      <div className="section-container">
        <div className="flex items-center gap-3 mb-12">
          <Wrench size={22} className="text-primary" />
          <h2 className="text-2xl md:text-3xl font-serif font-semibold tracking-tight">
            Technical Arsenal
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillCategories.map((cat, i) => (
            <div key={i} className="card p-6">
              <div className="flex items-center gap-2.5 mb-4">
                <cat.icon size={18} className="text-primary" />
                <h3 className="text-[14px] font-semibold text-foreground font-sans uppercase tracking-wider">
                  {cat.name}
                </h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="badge-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
