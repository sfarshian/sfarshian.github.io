import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WorkExperience from "./components/WorkExperience";
import TechnicalArsenal from "./components/TechnicalArsenal";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import BlogList from "./components/blog/BlogList";
import BlogPostView from "./components/blog/BlogPostView";
import { getPostBySlug } from "./utils/blogLoader";

type AppView =
  | { view: "portfolio" }
  | { view: "blog" }
  | { view: "post"; slug: string };

function parseHash(): AppView {
  const hash = window.location.hash;
  if (hash.startsWith("#/blog/")) {
    return { view: "post", slug: hash.slice("#/blog/".length) };
  }
  if (hash === "#/blog") {
    return { view: "blog" };
  }
  return { view: "portfolio" };
}

export default function App() {
  const [currentView, setCurrentView] = useState<AppView>(parseHash);

  useEffect(() => {
    const handler = () => setCurrentView(parseHash());
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);

  if (currentView.view === "blog") {
    return (
      <div className="min-h-screen bg-background">
        <Navbar blogActive />
        <BlogList />
      </div>
    );
  }

  if (currentView.view === "post") {
    const post = getPostBySlug(currentView.slug);
    return (
      <div className="min-h-screen bg-background">
        <Navbar blogActive />
        {post ? (
          <BlogPostView
            post={post}
            onBack={() => {
              window.location.hash = "#/blog";
            }}
          />
        ) : (
          <div className="section-padding pt-32">
            <div className="section-container">
              <p className="text-foreground-muted text-[15px]">
                Post not found.
              </p>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <WorkExperience />
        <TechnicalArsenal />
        <Projects />
        <Education />
        <Contact />
      </main>
    </div>
  );
}
