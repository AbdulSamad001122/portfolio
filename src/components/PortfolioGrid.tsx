import { ArrowUpRight } from 'lucide-react';

export default function PortfolioGrid() {
  const projects = [
    { title: "TheShip.ai", category: "AI-Powered PR Reviewer & PRD Kanban Board", index: 0, slug: "theship", image: "/special-projects/theship.png", url: "theship.vercel.app" },
    { title: "Formit", category: "SaaS Form Builder & Interactive Logic Branching", index: 1, slug: "formit", image: "/special-projects/formit.png", url: "formit-web.vercel.app" },
    { title: "Polra", category: "Real-time Polling & Live Socket.io Dashboard", index: 2, slug: "polra", image: "/special-projects/polra.png", url: "my-polra.vercel.app" },
    { title: "Invocify", category: "Typesafe Invoice Creator & PDF Generator", index: 3, slug: "invocify", image: "/special-projects/invocify.png", url: "invocify.vercel.app" }
  ];

  const handleProjectClick = (slug: string) => {
    window.location.hash = `#/project/${slug}`;
  };

  return (
    <section id="portfolio" className="relative w-full border-b border-border-light-gray bg-primary-gray px-6 py-20">
      {/* Background blueprint decorative lines */}
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[linear-gradient(to_right,hsl(220,10%,89%)_1px,transparent_1px),linear-gradient(to_bottom,hsl(220,10%,89%)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between mb-16 reveal-up">
          <div className="flex flex-col items-start max-w-md text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-accent-green">Portfolio</span>
            <h2 className="mt-2 font-sans text-3xl font-extrabold text-text-primary-navy md:text-4xl">
              Software highlights collection
            </h2>
          </div>
          <p className="max-w-lg text-left text-sm leading-relaxed text-text-secondary-gray lg:mt-6">
            A curated showcase of production-ready web applications, monorepos, and typesafe systems designed for durability, clean schemas, and rapid event processing.
          </p>
        </div>

        {/* Grid of slots - wrapped in max-w-4xl to keep card sizes compact and visible in one viewport */}
        <div className="mx-auto max-w-4xl mt-12 reveal-portfolio-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
            {projects.map((project) => (
              <div 
                key={project.index} 
                onClick={() => handleProjectClick(project.slug)}
                className="reveal-portfolio-item flex flex-col items-start text-left group cursor-pointer"
              >
                
                {/* Widescreen 16:10 aspect ratio inlined browser frame */}
                <div 
                  className="portfolio-slot relative w-full rounded-2xl border border-border-light-gray bg-card-white overflow-hidden aspect-[16/10] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow duration-300 flex flex-col"
                >
                  {/* Browser Bar */}
                  <div className="h-7.5 bg-primary-gray/80 border-b border-border-light-gray/60 px-4 flex items-center justify-between shrink-0 select-none">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                    </div>
                    <div className="w-1/2 max-w-xs h-4.5 bg-card-white border border-border-light-gray/80 rounded flex items-center justify-center px-3 text-[8px] font-sans text-text-secondary-gray leading-none font-semibold">
                      <span className="text-accent-green mr-0.5">https://</span>
                      {project.url}
                    </div>
                    <div className="w-8" />
                  </div>
                  
                  {/* Screenshot Image */}
                  <div className="flex-1 w-full h-[calc(100%-1.875rem)] overflow-hidden bg-card-white relative">
                    <img 
                      src={project.image} 
                      alt={`${project.title} screenshot`}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
   
                {/* Project Info (below mockup slot) */}
                <div className="mt-4 flex w-full items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-sans text-base font-bold text-text-primary-navy truncate group-hover:text-accent-green transition-colors">{project.title}</h3>
                    <p className="text-xs font-semibold text-text-secondary-gray mt-1 leading-normal line-clamp-1">{project.category}</p>
                  </div>
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border-light-gray bg-card-white text-text-primary-navy transition-all duration-300 group-hover:bg-accent-green group-hover:text-card-white group-hover:border-accent-green">
                    <ArrowUpRight size={14} />
                  </div>
                </div>
   
              </div>
            ))}
          </div>
        </div>

        {/* See More Button - opens projects in a new tab */}
        <div className="mt-16 text-center reveal-up">
          <a 
            href="#/projects"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-text-primary-navy px-8 py-3.5 text-sm font-bold text-text-primary-navy transition-all hover:bg-accent-green hover:text-card-white hover:border-accent-green cursor-pointer shadow-sm hover:shadow-md"
          >
            See More →
          </a>
        </div>

      </div>
    </section>
  );
}
