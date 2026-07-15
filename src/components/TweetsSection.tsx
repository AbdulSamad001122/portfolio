import { MessageSquare, Repeat, Heart, BarChart2, Github } from "lucide-react";

export default function TweetsSection() {
  const handleXClick = () => {
    window.open(
      "https://x.com/thesamadcodes",
      "_blank",
      "noopener,noreferrer",
    );
  };

  const tweets = [
    {
      id: 1,
      date: "Jun 28",
      text: "TheShip.ai is in private beta. Automated pull request audits that integrate with GitHub webhooks. Built the PR code analysis engine with Next.js, tRPC, and Pinecone for vector context indexing. The review cycles are down to under 60 seconds. #buildinpublic #SaaS",
      replies: 14,
      reposts: 8,
      likes: 124,
      views: "4.8K",
    },
    {
      id: 2,
      date: "Jul 2",
      text: "Formit is a drag-and-drop SaaS form builder with visual logic nodes. Offloaded all email notification queues to Inngest for durability under load, and integrated Stripe checkout for subscription lifecycles. Standardizing on pnpm and Next.js. #solodev #indiehackers",
      replies: 9,
      reposts: 6,
      likes: 87,
      views: "3.2K",
    },
    {
      id: 3,
      date: "Jul 5",
      text: "Testing the real-time sync limits on Polra, a live polling utility. Using Socket.io and Redis cache layers to scale concurrent connections and voting payloads. Client updates stream instantly with sub-5ms rendering latencies. #webdev #reactjs",
      replies: 11,
      reposts: 5,
      likes: 92,
      views: "2.9K",
    },
    {
      id: 4,
      date: "Jul 7",
      text: "Finished the schema design for Invocify. Clean invoices generated dynamically through headless browser render engines. Standardized on Zod validation rules to enforce client-server typesafety and data shapes. Open sourcing the components soon. #typescript #nextjs",
      replies: 16,
      reposts: 12,
      likes: 156,
      views: "5.4K",
    },
  ];

  const marqueeTags = [
    "Next.js",
    "React 19",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Docker",
    "Prisma 7",
    "Drizzle ORM",
    "tRPC",
    "Inngest",
    "Turborepo",
    "Tailwind CSS v4",
    "Zod",
    "Better Auth",
    "pnpm",
    "Vercel",
    "Octokit",
    "Pinecone",
    "MongoDB",
  ];

  return (
    <section
      id="tweets"
      className="relative w-full border-b border-border-light-gray bg-card-white px-6 pt-10 pb-20 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl">
        {/* Double scrolling marquee */}
        <div className="mt-6 -mx-6 flex flex-col gap-4 overflow-hidden relative py-4">
          {/* Row 1: Left */}
          <div className="flex whitespace-nowrap">
            <div className="flex gap-4 animate-scroll-left">
              {[...marqueeTags, ...marqueeTags].map((tag, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 rounded-full border border-border-light-gray bg-primary-gray px-6 py-3 text-sm font-semibold text-text-primary-navy"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-green" />
                  {tag}
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Right */}
          <div className="flex whitespace-nowrap">
            <div className="flex gap-4 animate-scroll-right">
              {[...marqueeTags, ...marqueeTags].map((tag, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 rounded-full border border-border-light-gray bg-primary-gray px-6 py-3 text-sm font-semibold text-text-primary-navy"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-green" />
                  {tag}
                </div>
              ))}
            </div>
          </div>

          {/* Floating Action Pill Container */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="flex items-center gap-6 rounded-full border border-text-primary-navy/10 bg-card-white/95 p-2.5 shadow-xl backdrop-blur-sm pointer-events-auto">
              <a
                href="#contact"
                className="flex items-center gap-2 rounded-full bg-text-primary-navy px-6 py-3.5 text-xs font-bold text-card-white transition-all hover:bg-accent-green shadow-sm"
              >
                Hire me
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-card-white/20">
                  ➔
                </span>
              </a>
              <a
                href="https://github.com/AbdulSamad001122"
                target="_blank"
                rel="noopener noreferrer"
                className="pr-6 pl-2 text-xs font-bold text-text-primary-navy hover:text-accent-green transition-colors flex items-center gap-1.5"
              >
                <span>View GitHub</span>
                <Github size={12} />
              </a>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between mt-20 mb-16 text-left reveal-up">
          <div className="flex flex-col items-start max-w-md">
            <span className="text-xs font-bold uppercase tracking-wider text-accent-green">
              Building in Public
            </span>
            <h2 className="mt-2 font-sans text-3xl font-extrabold text-text-primary-navy md:text-4xl">
              Latest updates from the dev lab.
            </h2>
          </div>
          <p className="max-w-lg text-sm leading-relaxed text-text-secondary-gray lg:mt-6">
            Following my coding journey as I design, build, and deploy
            production-grade software applications. Here are my latest updates
            from X/Twitter.
          </p>
        </div>

        {/* Tweets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 reveal-cascade-container">
          {tweets.map((tweet) => (
            <div
              key={tweet.id}
              onClick={handleXClick}
              className="reveal-cascade-item group border border-border-light-gray bg-primary-gray/50 hover:bg-card-white p-6 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-left flex flex-col justify-between cursor-pointer relative overflow-hidden"
            >
              <div>
                {/* Tweet Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <img
                      src="/branding/my-img.png"
                      alt="Abdul Samad"
                      className="h-10 w-10 rounded-full object-cover border border-border-light-gray"
                    />
                    <div className="flex flex-col">
                      <span className="font-sans text-sm font-bold text-text-primary-navy flex items-center gap-1">
                        Abdul Samad
                      </span>
                      <span className="text-[11px] font-semibold text-text-secondary-gray">
                        @thesamadcodes
                      </span>
                    </div>
                  </div>

                  {/* Custom SVG X (Twitter) Logo */}
                  <svg
                    className="h-4 w-4 text-text-primary-navy opacity-45 group-hover:opacity-100 group-hover:text-accent-green transition-all"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </div>

                {/* Tweet Body Content */}
                <p className="font-sans text-sm leading-relaxed text-text-primary-navy whitespace-pre-line">
                  {tweet.text.split(/(\s+)/).map((word, idx) => {
                    if (word.startsWith("#")) {
                      return (
                        <span
                          key={idx}
                          className="text-accent-green font-semibold"
                        >
                          {word}
                        </span>
                      );
                    }
                    if (word.startsWith("@")) {
                      return (
                        <span
                          key={idx}
                          className="text-accent-green font-semibold"
                        >
                          {word}
                        </span>
                      );
                    }
                    if (
                      word.includes(".ai") ||
                      word.includes("Formit") ||
                      word.includes("Polra") ||
                      word.includes("Invocify")
                    ) {
                      return (
                        <span
                          key={idx}
                          className="font-semibold text-text-primary-navy"
                        >
                          {word}
                        </span>
                      );
                    }
                    return word;
                  })}
                </p>
              </div>

              {/* Tweet Footer Metrics */}
              <div className="mt-6 flex items-center justify-between border-t border-border-light-gray/60 pt-4 text-xs font-semibold text-text-secondary-gray">
                <div className="flex items-center gap-1.5 hover:text-accent-green transition-colors">
                  <MessageSquare size={14} />
                  <span>{tweet.replies}</span>
                </div>
                <div className="flex items-center gap-1.5 hover:text-accent-green transition-colors">
                  <Repeat size={14} />
                  <span>{tweet.reposts}</span>
                </div>
                <div className="flex items-center gap-1.5 hover:text-accent-green transition-colors">
                  <Heart size={14} />
                  <span>{tweet.likes}</span>
                </div>
                <div className="flex items-center gap-1.5 hover:text-accent-green transition-colors">
                  <BarChart2 size={14} />
                  <span>{tweet.views}</span>
                </div>
                <span className="text-[10px] text-text-secondary-gray/60">
                  {tweet.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* See My Journey More CTA Button */}
        <div className="mt-12 flex justify-center reveal-up">
          <a
            href="https://x.com/thesamadcodes"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-full border border-text-primary-navy/20 bg-card-white px-8 py-4 text-sm font-bold text-text-primary-navy shadow-sm transition-all hover:bg-accent-green hover:text-card-white hover:border-accent-green hover:shadow-md"
          >
            See my journey more
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 group-hover:bg-card-white/20 transition-colors">
              ➔
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
