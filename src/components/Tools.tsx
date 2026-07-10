import React, { useState } from 'react';

interface TechItem {
  name: string;
  logo: string;
  fallbackIcon: React.ReactNode;
  description: string;
}

interface TechCategory {
  id: string;
  title: string;
  subtitle: string;
  items: TechItem[];
}

// Sub-component for individual tech cards to manage image loading errors locally
function TechCard({ item }: { item: TechItem }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="group flex items-start gap-4 rounded-xl border border-border-light-gray bg-primary-gray/40 p-4 transition-all duration-300 hover:border-accent-green/30 hover:bg-card-white hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(34,197,94,0.05)]">
      {/* Icon Container */}
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-card-white border border-border-light-gray p-2.5 shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:border-accent-green/10 overflow-hidden">
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
      
      {/* Tech Info */}
      <div className="flex flex-col text-left">
        <h4 className="font-sans text-sm font-bold text-text-primary-navy tracking-tight group-hover:text-accent-green transition-colors duration-300">
          {item.name}
        </h4>
        <p className="mt-1 text-[11px] leading-relaxed text-text-secondary-gray font-medium">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default function Tools() {
  const [activeCategory, setActiveCategory] = useState<string | null>('frontend');

  const categories: TechCategory[] = [
    {
      id: 'frontend',
      title: 'Frontend Development',
      subtitle: 'React • Next.js • TypeScript • TanStack',
      items: [
        {
          name: 'React',
          logo: '/logos/react.svg',
          fallbackIcon: (
            <svg className="h-full w-full text-sky-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="2" />
              <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(30 12 12)" />
              <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(90 12 12)" />
              <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(150 12 12)" />
            </svg>
          ),
          description: 'Component-driven UI library for web building.'
        },
        {
          name: 'Next.js',
          logo: '/logos/nextjs.svg',
          fallbackIcon: (
            <svg className="h-full w-full text-slate-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          ),
          description: 'SSR App Router framework for optimal production web.'
        },
        {
          name: 'TypeScript',
          logo: '/logos/typeScript.svg',
          fallbackIcon: (
            <svg className="h-full w-full text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <line x1="9" y1="9" x2="15" y2="9" />
              <line x1="12" y1="9" x2="12" y2="15" />
            </svg>
          ),
          description: 'Strict type systems checking codebase scaling reliability.'
        },
        {
          name: 'TanStack',
          logo: '/logos/tanstack.svg',
          fallbackIcon: (
            <svg className="h-full w-full text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 2 22 22 22" />
            </svg>
          ),
          description: 'Type-safe asynchronous data querying & routing helpers.'
        }
      ]
    },
    {
      id: 'backend',
      title: 'Backend & Orchestration',
      subtitle: 'Express.js • tRPC • Inngest • Docker • GitHub • Turborepo',
      items: [
        {
          name: 'Express.js',
          logo: '/logos/expressjs.svg',
          fallbackIcon: (
            <span className="font-extrabold text-[10px] text-text-primary-navy">EXPRESS</span>
          ),
          description: 'Minimalist server framework for REST & tRPC API setups.'
        },
        {
          name: 'tRPC',
          logo: '/logos/trpc.svg',
          fallbackIcon: (
            <svg className="h-full w-full text-indigo-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>
          ),
          description: 'End-to-end type safety APIs without code generation.'
        },
        {
          name: 'Inngest',
          logo: '/logos/inngest.jpeg',
          fallbackIcon: (
            <svg className="h-full w-full text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
          ),
          description: 'Event-driven background queues & workflow steps.'
        },
        {
          name: 'Docker',
          logo: '/logos/docker.svg',
          fallbackIcon: (
            <svg className="h-full w-full text-cyan-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <line x1="6" y1="8" x2="6" y2="8" />
              <line x1="10" y1="8" x2="10" y2="8" />
              <line x1="14" y1="8" x2="14" y2="8" />
              <line x1="18" y1="8" x2="18" y2="8" />
            </svg>
          ),
          description: 'Containerized deployment infrastructure logic.'
        },
        {
          name: 'GitHub',
          logo: '/logos/github.svg',
          fallbackIcon: (
            <svg className="h-full w-full text-slate-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          ),
          description: 'Collaborative version control & GitHub Actions workflows.'
        },
        {
          name: 'Turborepo',
          logo: '/logos/turborepo.svg',
          fallbackIcon: (
            <svg className="h-full w-full text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 2 7 12 12 22 7 12 2" />
              <polyline points="2 17 12 22 22 17" />
              <polyline points="2 12 12 17 22 12" />
            </svg>
          ),
          description: 'High-performance caching monorepo build orchestrator.'
        }
      ]
    },
    {
      id: 'scaling',
      title: 'Realtime & Scaling',
      subtitle: 'Kafka • Redis • Socket.io',
      items: [
        {
          name: 'Kafka',
          logo: '/logos/kafka.svg',
          fallbackIcon: (
            <svg className="h-full w-full text-slate-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="8" />
              <path d="M12 2v20M2 12h20" />
            </svg>
          ),
          description: 'Distributed event streaming for asynchronous pipelines.'
        },
        {
          name: 'Redis',
          logo: '/logos/redis.svg',
          fallbackIcon: (
            <svg className="h-full w-full text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="12 2 2 7 12 12 22 7 12 2" />
              <polyline points="2 12 12 17 22 12" />
              <polyline points="2 17 12 22 22 17" />
            </svg>
          ),
          description: 'High-performance cache, session store, & pub/sub broker.'
        },
        {
          name: 'Socket.io',
          logo: '/logos/socket.svg',
          fallbackIcon: (
            <svg className="h-full w-full text-slate-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          ),
          description: 'Low-latency, bi-directional event WebSocket channels.'
        }
      ]
    },
    {
      id: 'database',
      title: 'Databases & ORMs',
      subtitle: 'PostgreSQL • MongoDB • Prisma • Drizzle ORM',
      items: [
        {
          name: 'PostgreSQL',
          logo: '/logos/postgresql.svg',
          fallbackIcon: (
            <svg className="h-full w-full text-sky-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <ellipse cx="12" cy="5" rx="9" ry="3" />
              <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
              <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
            </svg>
          ),
          description: 'Structured SQL relational database storage engine.'
        },
        {
          name: 'MongoDB',
          logo: '/logos/mongoDB.svg',
          fallbackIcon: (
            <svg className="h-full w-full text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" />
            </svg>
          ),
          description: 'Flexible NoSQL JSON document database store.'
        },
        {
          name: 'Prisma',
          logo: '/logos/prisma.svg',
          fallbackIcon: (
            <svg className="h-full w-full text-teal-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="12 2 22 22 2 22" />
              <line x1="12" y1="2" x2="12" y2="22" />
            </svg>
          ),
          description: 'Declarative schema mapping & type-safe query compiler.'
        },
        {
          name: 'Drizzle ORM',
          logo: '/logos/drizzle-orm.svg',
          fallbackIcon: (
            <svg className="h-full w-full text-lime-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25" />
              <line x1="8" y1="16" x2="8.01" y2="16" />
              <line x1="8" y1="20" x2="8.01" y2="20" />
            </svg>
          ),
          description: 'Lightweight SQL-like ORM for fast runtime querying.'
        }
      ]
    },
    {
      id: 'ai',
      title: 'AI & SaaS Integrations',
      subtitle: 'Pinecone DB • Vercel AI SDK',
      items: [
        {
          name: 'Pinecone DB',
          logo: '/logos/pinecone.svg',
          fallbackIcon: (
            <svg className="h-full w-full text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 2 22 22 22" />
            </svg>
          ),
          description: 'Vector database database for semantic similarity & RAG.'
        },
        {
          name: 'Vercel AI SDK',
          logo: '/logos/vercel.svg',
          fallbackIcon: (
            <svg className="h-full w-full text-slate-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="12 2 22 22 2 22" />
            </svg>
          ),
          description: 'Frontend hooks and libraries for streaming AI responses.'
        }
      ]
    }
  ];

  const handleToggle = (id: string) => {
    setActiveCategory(activeCategory === id ? null : id);
  };

  return (
    <section id="tech-stack" className="w-full border-b border-border-light-gray bg-card-white py-24 px-6">
      <div className="mx-auto max-w-5xl">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-accent-green">Tech Stack</span>
          <h2 className="mt-2 font-sans text-3xl font-extrabold text-text-primary-navy md:text-4xl">
            My Technical Ecosystem
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-text-secondary-gray font-medium">
            A specialized collection of frontends, backends, scaling services, databases, and AI technologies configured to compile robust, production-ready SaaS products.
          </p>
        </div>

        {/* Dropdown/Accordion Style Categories */}
        <div className="space-y-4">
          {categories.map((cat, index) => {
            const isOpen = activeCategory === cat.id;

            return (
              <div 
                key={cat.id}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 bg-primary-gray/20 ${
                  isOpen 
                    ? 'border-accent-green/30 shadow-[0_8px_30px_rgb(34,197,94,0.02)]' 
                    : 'border-border-light-gray hover:border-accent-green/20'
                }`}
              >
                {/* Category Bar Header */}
                <button
                  onClick={() => handleToggle(cat.id)}
                  className="flex w-full items-center justify-between p-6 text-left focus:outline-none transition-colors hover:bg-accent-green/[0.01]"
                >
                  <div className="flex items-center gap-4">
                    {/* Index Indicator */}
                    <span className="font-mono text-sm font-bold text-accent-green/50">
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="font-sans text-lg font-bold text-text-primary-navy">
                        {cat.title}
                      </h3>
                      <p className="mt-0.5 text-xs text-text-secondary-gray font-semibold">
                        {cat.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Expand Icon */}
                  <div className={`flex h-8 w-8 items-center justify-center rounded-full border border-border-light-gray bg-card-white shadow-sm transition-transform duration-300 ${
                    isOpen ? 'rotate-180 border-accent-green/20' : ''
                  }`}>
                    <svg className={`h-4 w-4 text-text-primary-navy transition-colors ${isOpen ? 'text-accent-green' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </button>

                {/* Animated Dropdown Content */}
                <div 
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen 
                      ? 'grid-rows-[1fr] opacity-100 border-t border-border-light-gray/60 p-6' 
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                      {cat.items.map((item, itemIdx) => (
                        <TechCard key={itemIdx} item={item} />
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

