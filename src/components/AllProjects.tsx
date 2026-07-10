import { useState, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowLeft, Search, ArrowUpRight, ExternalLink } from 'lucide-react';

interface ProjectItem {
  slug: string;
  title: string;
  category: string;
  tagline: string;
  image: string;
  techs: string[];
  type: string; // 'saas' | 'ai' | 'realtime' | 'tool'
  liveUrl: string;
}

export default function AllProjects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const projects: ProjectItem[] = [
    {
      slug: "theship",
      title: "TheShip.ai",
      category: "AI PR Reviewer & PRD Kanban Board",
      tagline: "Automated pull request audits that integrate with GitHub webhooks.",
      image: "/special-projects/theship.png",
      techs: ["Next.js", "tRPC", "Pinecone DB", "GitHub Webhooks"],
      type: "ai",
      liveUrl: "https://theship.vercel.app"
    },
    {
      slug: "formit",
      title: "Formit",
      category: "SaaS Form Builder & Logic Branching",
      tagline: "Drag-and-drop form creator with interactive logic paths.",
      image: "/special-projects/formit.png",
      techs: ["Next.js", "Drizzle ORM", "Stripe", "Inngest"],
      type: "saas",
      liveUrl: "https://formit-web.vercel.app"
    },
    {
      slug: "polra",
      title: "Polra",
      category: "Real-time Polling & Socket.io Dashboard",
      tagline: "Sub-5ms live polling utility with WebSocket sync.",
      image: "/special-projects/polra.png",
      techs: ["React", "Socket.io", "Redis", "Tailwind CSS"],
      type: "realtime",
      liveUrl: "https://my-polra.vercel.app"
    },
    {
      slug: "invocify",
      title: "Invocify",
      category: "Typesafe Invoice Creator & PDF Generator",
      tagline: "Typesafe invoice creator and PDF document builder.",
      image: "/special-projects/invocify.png",
      techs: ["React", "TypeScript", "Zod", "Express.js"],
      type: "tool",
      liveUrl: "https://invocify.vercel.app"
    }
  ];

  const handleBackToHome = () => {
    window.location.hash = '';
  };

  const handleProjectClick = (slug: string) => {
    window.location.hash = `#/project/${slug}`;
  };

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      project.techs.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase())) ||
      project.category.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilter = 
      activeFilter === 'all' || 
      project.type === activeFilter;

    return matchesSearch && matchesFilter;
  });

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });

    let ctx = gsap.context(() => {
      // Stagger fade-in animation for grid items
      gsap.fromTo(".project-list-card",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out"
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [activeFilter, searchQuery]);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-primary-gray font-sans text-text-primary-navy overflow-hidden pb-32">
      
      {/* Structural layout vertical border grid lines */}
      <div className="absolute left-[3%] right-[3%] md:left-[5%] md:right-[5%] top-0 bottom-0 pointer-events-none border-x border-border-light-gray opacity-50 z-0" />

      {/* Main Page Layout Container */}
      <div className="mx-auto max-w-7xl px-6 py-12 relative z-10">
        
        {/* Back Button & Header */}
        <header className="mb-12 flex flex-col items-start text-left border-b border-border-light-gray/60 pb-8">
          <button 
            onClick={handleBackToHome}
            className="group flex items-center gap-2 rounded-full border border-border-light-gray bg-card-white px-5 py-2 text-xs font-bold text-text-primary-navy transition-all hover:bg-accent-green hover:text-card-white hover:border-accent-green cursor-pointer mb-8"
          >
            <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-0.5" />
            Back to Home
          </button>

          <span className="text-xs font-bold uppercase tracking-wider text-accent-green">Project Archive</span>
          <h1 className="mt-2 font-sans text-4xl font-extrabold tracking-tight text-text-primary-navy md:text-5xl">
            All Projects
          </h1>
          <p className="mt-3 text-base font-semibold text-text-secondary-gray">
            A complete listing of SaaS products, real-time tools, and applications I have engineered.
          </p>
        </header>

        {/* Filter & Search Bar Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          {/* Tag Filters */}
          <div className="flex flex-wrap gap-2 text-xs font-bold">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'saas', label: 'SaaS Products' },
              { id: 'ai', label: 'AI & Vector' },
              { id: 'realtime', label: 'Real-time Systems' },
              { id: 'tool', label: 'Utility Tools' }
            ].map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-5 py-2.5 rounded-full border transition-all cursor-pointer ${
                  activeFilter === filter.id
                    ? 'bg-text-primary-navy text-card-white border-text-primary-navy'
                    : 'bg-card-white text-text-secondary-gray border-border-light-gray hover:border-text-primary-navy/40'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:max-w-xs">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-text-secondary-gray/60">
              <Search size={15} />
            </span>
            <input
              type="text"
              placeholder="Search by tech or name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-card-white border border-border-light-gray rounded-full py-2.5 pl-10 pr-4 text-xs font-semibold text-text-primary-navy focus:outline-none focus:border-accent-green"
            />
          </div>
        </div>

        {/* Filter Results Check */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20 bg-card-white/40 border border-dashed border-border-light-gray rounded-3xl">
            <p className="text-sm font-semibold text-text-secondary-gray">No projects match your search query.</p>
          </div>
        ) : (
          /* Projects Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.slug}
                onClick={() => handleProjectClick(project.slug)}
                className="project-list-card group border border-border-light-gray bg-card-white/60 hover:bg-card-white rounded-3xl overflow-hidden p-6 shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer text-left"
              >
                <div>
                  {/* Browser Mockup Image Container */}
                  <div className="w-full bg-card-white border border-border-light-gray rounded-xl overflow-hidden shadow-sm flex flex-col aspect-[16/10] select-none mb-6">
                    <div className="h-6.5 bg-primary-gray/60 border-b border-border-light-gray/60 px-3 flex items-center justify-between shrink-0">
                      <div className="flex gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-red-400/80" />
                        <span className="h-1.5 w-1.5 rounded-full bg-yellow-400/80" />
                        <span className="h-1.5 w-1.5 rounded-full bg-green-400/80" />
                      </div>
                      <span className="text-[7.5px] text-text-secondary-gray font-semibold truncate max-w-[60%]">
                        {project.title.toLowerCase()}.dev
                      </span>
                      <div className="w-4" />
                    </div>
                    <div className="flex-1 w-full bg-card-white overflow-hidden relative">
                      <img 
                        src={project.image} 
                        alt={`${project.title} screenshot`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-sans text-xl font-bold text-text-primary-navy group-hover:text-accent-green transition-colors leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs font-semibold text-text-secondary-gray mt-1 leading-normal">
                    {project.category}
                  </p>
                  <p className="mt-3.5 text-xs leading-relaxed text-text-secondary-gray">
                    {project.tagline}
                  </p>
                </div>

                {/* Techs & CTA Footer */}
                <div className="mt-6 border-t border-border-light-gray/60 pt-4 flex flex-col gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techs.map((tech) => (
                      <span key={tech} className="text-[9.5px] font-bold text-text-primary-navy bg-primary-gray px-2.5 py-1 rounded-lg border border-border-light-gray/40">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-xs font-bold gap-4">
                    {/* Live Link Button */}
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-border-light-gray bg-card-white text-text-primary-navy hover:bg-accent-green hover:text-card-white hover:border-accent-green transition-all shadow-sm cursor-pointer z-20"
                    >
                      <ExternalLink size={13} />
                      Live Demo
                    </a>

                    {/* Case Study Case CTA */}
                    <div className="flex items-center gap-1.5 text-text-primary-navy group-hover:text-accent-green transition-colors">
                      <span>View Case Study</span>
                      <span className="flex h-6.5 w-6.5 items-center justify-center rounded-full bg-slate-100 group-hover:bg-accent-green group-hover:text-card-white transition-all">
                        <ArrowUpRight size={13} />
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
