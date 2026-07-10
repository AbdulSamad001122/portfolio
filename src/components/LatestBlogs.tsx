import { ArrowUpRight, BookOpen, Clock } from 'lucide-react';

export default function LatestBlogs() {
  const blogs = [
    {
      id: 1,
      title: "JWT Authentication in Node.js Explained Simply",
      category: "Backend & Auth",
      readTime: "6 min read",
      summary: "A comprehensive guide explaining the stateless nature of HTTP and how to securely verify user identities using JSON Web Tokens (JWT) in Express.js.",
      url: "https://abdulsamad30.hashnode.dev/jwt-authentication-in-node-js-explained-simply"
    },
    {
      id: 2,
      title: "Application Security: Passwords, Authentication, Authorization, OAuth, and OIDC",
      category: "Security",
      readTime: "12 min read",
      summary: "A deep dive into security fundamentals: secure password hashing, identity verification, authorization models, and the mechanics of OAuth 2.0 & OIDC.",
      url: "https://abdulsamad30.hashnode.dev/application-security-passwords-authentication-authorization-oauth-and-oidc-explained"
    },
    {
      id: 3,
      title: "Databases, ORMs, and the Tools That Bridge Them: Prisma vs Drizzle",
      category: "Database Design",
      readTime: "8 min read",
      summary: "An engineering comparison of modern node databases. Exploring schema definitions, migration flows, query performance, and when to choose Prisma vs Drizzle.",
      url: "https://abdulsamad30.hashnode.dev/databases-orms-and-the-tools-that-bridge-them-prisma-vs-drizzle"
    },
    {
      id: 4,
      title: "React Hooks Explained: useState, useEffect, and Custom Hooks",
      category: "Frontend Internals",
      readTime: "7 min read",
      summary: "Demystifying state persistence and side effects. A guide explaining how React maintains variable state across functional component re-renders.",
      url: "https://abdulsamad30.hashnode.dev/react-hooks-explained-usestate-useeffect-and-custom-hooks"
    },
    {
      id: 5,
      title: "React Fundamentals: Components, JSX, State, and Re-rendering",
      category: "Frontend Internals",
      readTime: "5 min read",
      summary: "Explaining the 'why' of React. A foundational overview comparing direct DOM manipulation with React's component tree and state re-rendering loops.",
      url: "https://abdulsamad30.hashnode.dev/react-fundamentals-components-jsx-state-and-re-rendering"
    }
  ];

  const handleBlogClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="blogs" className="relative w-full border-b border-border-light-gray bg-primary-gray px-6 py-20 overflow-hidden">
      
      {/* Background blueprint decorative lines */}
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[linear-gradient(to_right,hsl(220,10%,89%)_1px,transparent_1px),linear-gradient(to_bottom,hsl(220,10%,89%)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between mb-16 text-left reveal-up">
          <div className="flex flex-col items-start max-w-md">
            <span className="text-xs font-bold uppercase tracking-wider text-accent-green">Technical Writing</span>
            <h2 className="mt-2 font-sans text-3xl font-extrabold text-text-primary-navy md:text-4xl">
              Sharing my learnings.
            </h2>
          </div>
          <p className="max-w-lg text-sm leading-relaxed text-text-secondary-gray lg:mt-6">
            Deep dives into application security architecture, database designs, and React rendering flows. I write to simplify complex concepts and share my building process.
          </p>
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal-cascade-container">
          {blogs.map((blog) => (
            <div 
              key={blog.id}
              onClick={() => handleBlogClick(blog.url)}
              className="reveal-cascade-item group border border-border-light-gray bg-card-white/60 hover:bg-card-white p-6 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-left flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Meta details */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-accent-green bg-accent-green-light px-2.5 py-1 rounded-full">
                    {blog.category}
                  </span>
                  <div className="flex items-center gap-1 text-[10px] font-semibold text-text-secondary-gray">
                    <Clock size={11} />
                    <span>{blog.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-sans text-base font-bold text-text-primary-navy leading-snug group-hover:text-accent-green transition-colors line-clamp-2">
                  {blog.title}
                </h3>

                {/* Summary */}
                <p className="mt-3 text-xs leading-relaxed text-text-secondary-gray line-clamp-3">
                  {blog.summary}
                </p>
              </div>

              {/* Read Link */}
              <div className="mt-6 flex items-center justify-between border-t border-border-light-gray/60 pt-4 text-xs font-bold text-text-primary-navy group-hover:text-accent-green transition-colors">
                <span className="flex items-center gap-1">
                  <BookOpen size={13} />
                  Read Article
                </span>
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 group-hover:bg-accent-green group-hover:text-card-white transition-all">
                  <ArrowUpRight size={12} />
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* See More Blogs CTA */}
        <div className="mt-12 flex justify-center reveal-up">
          <a 
            href="https://abdulsamad30.hashnode.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-full border border-text-primary-navy/20 bg-card-white px-8 py-4 text-sm font-bold text-text-primary-navy shadow-sm transition-all hover:bg-accent-green hover:text-card-white hover:border-accent-green hover:shadow-md"
          >
            Visit my blogs
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 group-hover:bg-card-white/20 transition-colors">
              ➔
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}
