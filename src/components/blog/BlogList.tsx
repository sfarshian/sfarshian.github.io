import { Calendar, ArrowRight } from "lucide-react";
import { getAllPosts } from "../../utils/blogLoader";

const allPosts = getAllPosts();

export default function BlogList() {
  return (
    <section id="blog" className="section-padding bg-surface-elevated pt-32">
      <div className="section-container">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-6 h-6 flex items-center justify-center">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#047857"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
          </div>
          <h2 className="text-2xl md:text-3xl font-serif font-semibold tracking-tight">
            Blog
          </h2>
        </div>

        {allPosts.length === 0 ? (
          <p className="text-foreground-muted text-[15px]">
            No articles yet. Check back soon.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {allPosts.map((post) => (
              <article
                key={post.id}
                className="card card-hover p-7 flex flex-col"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Calendar size={14} className="text-primary" />
                  <time
                    dateTime={post.date}
                    className="text-[12px] font-medium text-primary font-sans uppercase tracking-wider"
                  >
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </time>
                </div>

                <h3 className="text-lg font-serif font-semibold text-foreground mb-2 leading-snug">
                  {post.title}
                </h3>

                <p className="text-[14px] text-foreground-secondary leading-relaxed mb-4 flex-1">
                  {post.summary}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {post.tags.map((tag) => (
                    <span key={tag} className="badge-primary">
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => {
                    window.location.hash = `#/blog/${post.slug}`;
                  }}
                  className="inline-flex items-center gap-1.5 text-[13px] font-medium text-primary hover:text-primary-hover transition-colors cursor-pointer bg-transparent border-none p-0 mt-auto self-start"
                >
                  Read Article
                  <ArrowRight size={14} />
                </button>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
