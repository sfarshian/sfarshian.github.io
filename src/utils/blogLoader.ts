import type { BlogPost, BlogPostMeta } from "../types/blog";

interface Frontmatter {
  title: string;
  date: string;
  summary: string;
  tags: string;
}

function parseFrontmatter(raw: string): { meta: Frontmatter; body: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) {
    throw new Error("Invalid frontmatter format — expected YAML delimited by ---");
  }

  const yamlBlock = match[1];
  const body = match[2].trim();

  const meta: Record<string, string> = {};
  for (const line of yamlBlock.split("\n")) {
    const colonIndex = line.indexOf(":");
    if (colonIndex === -1) continue;
    const key = line.slice(0, colonIndex).trim();
    const value = line.slice(colonIndex + 1).trim().replace(/^"(.*)"$/, "$1");
    meta[key] = value;
  }

  return {
    meta: {
      title: meta.title ?? "",
      date: meta.date ?? "",
      summary: meta.summary ?? "",
      tags: meta.tags ?? "",
    },
    body,
  };
}

const rawModules = import.meta.glob<string>(
  "../content/blog/*.md",
  { eager: true, query: "?raw", import: "default" },
);

const posts: BlogPost[] = Object.entries(rawModules)
  .map(([filepath, raw]) => {
    const slug = filepath.split("/").pop()?.replace(/\.md$/, "") ?? "";
    const { meta, body } = parseFrontmatter(raw);

    return {
      id: slug,
      title: meta.title,
      slug,
      date: meta.date,
      summary: meta.summary,
      tags: meta.tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
      content: body,
    } satisfies BlogPost;
  })
  .sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

export function getAllPosts(): BlogPost[] {
  return posts;
}

export function getAllPostMeta(): BlogPostMeta[] {
  return posts.map(({ id, title, slug, date, summary, tags }) => ({
    id,
    title,
    slug,
    date,
    summary,
    tags,
  }));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
