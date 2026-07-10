import { Github } from 'lucide-react';

export default function TechMarquee() {
  const marqueeTags = [
    "Next.js", "React 19", "TypeScript", "Node.js", "PostgreSQL", "Docker", "Prisma 7", "Drizzle ORM", 
    "tRPC", "Inngest", "Turborepo", "Tailwind CSS v4", "Zod", "Better Auth", "pnpm", "Vercel", "Octokit", "Pinecone", "MongoDB"
  ];

  return (
    <section className="relative w-full border-b border-border-light-gray bg-card-white py-16 overflow-hidden">
      
      {/* Background blueprint decorative lines */}
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[linear-gradient(to_right,hsl(220,10%,89%)_1px,transparent_1px),linear-gradient(to_bottom,hsl(220,10%,89%)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Double scrolling marquee container */}
        <div className="flex flex-col gap-4 overflow-hidden relative py-4">
          
          {/* Row 1: Left */}
          <div className="flex whitespace-nowrap">
            <div className="flex gap-4 animate-scroll-left">
              {[...marqueeTags, ...marqueeTags].map((tag, idx) => (
                <div key={idx} className="flex items-center gap-2 rounded-full border border-border-light-gray bg-primary-gray px-6 py-3 text-sm font-semibold text-text-primary-navy">
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
                <div key={idx} className="flex items-center gap-2 rounded-full border border-border-light-gray bg-primary-gray px-6 py-3 text-sm font-semibold text-text-primary-navy">
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
                Let's talk
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-card-white/20">➔</span>
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

      </div>
    </section>
  );
}
