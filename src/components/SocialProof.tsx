import { Sparkles } from 'lucide-react';
import { useState } from 'react';

interface TechHighlight {
  name: string;
  logo: string;
  fallbackIcon: React.ReactNode;
}

function TechLogo({ item }: { item: TechHighlight }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="flex items-center gap-2 opacity-70 hover:opacity-100 hover:scale-105 transition-all duration-300 cursor-pointer">
      <div className="h-5 w-5 flex items-center justify-center">
        {!imgError ? (
          <img 
            src={item.logo} 
            alt={`${item.name} logo`} 
            className="h-full w-full object-contain"
            onError={() => setImgError(true)}
          />
        ) : (
          item.fallbackIcon
        )}
      </div>
      <span className="font-sans text-sm font-bold text-text-primary-navy">{item.name}</span>
    </div>
  );
}

export default function SocialProof() {
  const highlights: TechHighlight[] = [
    {
      name: 'Next.js',
      logo: '/logos/nextjs.svg',
      fallbackIcon: (
        <span className="font-black text-xs">N</span>
      )
    },
    {
      name: 'PostgreSQL',
      logo: '/logos/postgresql.svg',
      fallbackIcon: (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse cx="12" cy="5" rx="9" ry="3"/>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
        </svg>
      )
    },
    {
      name: 'Docker',
      logo: '/logos/docker.svg',
      fallbackIcon: (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2"/>
        </svg>
      )
    },
    {
      name: 'tRPC',
      logo: '/logos/trpc.svg',
      fallbackIcon: (
        <span className="rounded bg-text-primary-navy px-1 py-0.5 text-[8px] font-black text-card-white tracking-widest uppercase">TRPC</span>
      )
    },
    {
      name: 'Inngest',
      logo: '/logos/Inngest.svg',
      fallbackIcon: (
        <svg className="h-4 w-4 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
        </svg>
      )
    },
    {
      name: 'Prisma',
      logo: '/logos/prisma.svg',
      fallbackIcon: (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="12 2 22 22 2 22"/>
        </svg>
      )
    },
    {
      name: 'React',
      logo: '/logos/react.svg',
      fallbackIcon: (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="2" />
        </svg>
      )
    }
  ];

  return (
    <section className="w-full border-b border-border-light-gray bg-card-white py-8 px-6 overflow-hidden">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
        
        {/* Core Tag */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-green-light text-accent-green">
            <Sparkles size={16} />
          </div>
          <span className="font-sans text-xs font-extrabold uppercase tracking-wider text-text-primary-navy">
            Core Tech Stack Highlights
          </span>
        </div>

        {/* Separator for desktop */}
        <div className="hidden h-8 w-px bg-border-light-gray md:block shrink-0" />

        {/* Tech Logos */}
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12 text-text-secondary-gray text-sm font-bold font-sans">
          {highlights.map((item, idx) => (
            <TechLogo key={idx} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
}

