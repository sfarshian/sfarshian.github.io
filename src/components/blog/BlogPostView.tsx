import { Calendar, ChevronLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";
import type { BlogPost } from "../../types/blog";

export default function BlogPostView({
  post,
  onBack,
}: {
  post: BlogPost;
  onBack: () => void;
}) {
  return (
    <article className="section-padding pt-24">
      <div className="section-container max-w-4xl">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-[13px] font-medium text-foreground-muted hover:text-primary transition-colors mb-10 cursor-pointer bg-transparent border-none p-0"
        >
          <ChevronLeft size={16} />
          Back to articles
        </button>

        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-primary font-sans">
              <Calendar size={14} />
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground leading-tight tracking-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap gap-1.5 mt-4">
            {post.tags.map((tag) => (
              <span key={tag} className="badge-primary">
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="card p-8 md:p-10">
          <ReactMarkdown
            components={{
              h2: ({ children, ...props }) => (
                <h2
                  className="text-xl font-serif font-semibold text-foreground mt-10 mb-3 first:mt-0"
                  {...props}
                >
                  {children}
                </h2>
              ),
              h3: ({ children, ...props }) => (
                <h3
                  className="text-lg font-serif font-semibold text-foreground mt-8 mb-2"
                  {...props}
                >
                  {children}
                </h3>
              ),
              p: ({ children, ...props }) => (
                <p
                  className="text-[15px] text-foreground-secondary leading-relaxed mb-4 font-sans"
                  {...props}
                >
                  {children}
                </p>
              ),
              ul: ({ children, ...props }) => (
                <ul
                  className="space-y-1.5 mb-4 pl-5 list-disc text-[15px] text-foreground-secondary leading-relaxed font-sans"
                  {...props}
                >
                  {children}
                </ul>
              ),
              ol: ({ children, ...props }) => (
                <ol
                  className="space-y-1.5 mb-4 pl-5 list-decimal text-[15px] text-foreground-secondary leading-relaxed font-sans"
                  {...props}
                >
                  {children}
                </ol>
              ),
              li: ({ children, ...props }) => (
                <li className="text-[15px] text-foreground-secondary leading-relaxed font-sans" {...props}>
                  {children}
                </li>
              ),
              strong: ({ children, ...props }) => (
                <strong className="font-semibold text-foreground" {...props}>
                  {children}
                </strong>
              ),
              pre: ({ children, ...props }) => (
                <pre
                  className="bg-[#0d1117] text-[#c9d1d9] rounded-lg p-4 my-5 overflow-x-auto text-[13px] leading-relaxed font-mono border border-border"
                  {...props}
                >
                  {children}
                </pre>
              ),
              code: ({ children, ...props }) => (
                <code
                  className="bg-secondary px-1.5 py-0.5 rounded text-[13px] font-mono text-accent"
                  {...props}
                >
                  {children}
                </code>
              ),
              a: ({ children, href, ...props }) => (
                <a
                  href={href}
                  className="text-primary hover:underline underline-offset-2 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  {...props}
                >
                  {children}
                </a>
              ),
              hr: (props) => (
                <hr className="border-border my-8" {...props} />
              ),
              blockquote: ({ children, ...props }) => (
                <blockquote
                  className="border-l-3 border-primary/30 pl-4 my-6 italic text-foreground-secondary font-sans"
                  {...props}
                >
                  {children}
                </blockquote>
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </div>
    </article>
  );
}
