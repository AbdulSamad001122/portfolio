import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, Code, Lightbulb, Compass, AlertTriangle, HelpCircle, Layers, ExternalLink, Github } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface ProjectDetailsProps {
  projectId: string;
  onBack: () => void;
}

export default function ProjectDetails({ projectId, onBack }: ProjectDetailsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const projectsData: Record<string, {
    title: string;
    category: string;
    tagline: string;
    image: string;
    liveUrl: string;
    githubUrl: string;
    techs: string[];
    steps: {
      label: string;
      title: string;
      icon: React.ReactNode;
      points: string[];
    }[];
  }> = {
    theship: {
      title: "TheShip.ai",
      category: "Developer Tooling",
      tagline: "Automated pull request reviewer and Kanban planner.",
      image: "/special-projects/theship.png",
      liveUrl: "https://theship.vercel.app",
      githubUrl: "https://github.com/AbdulSamad001122",
      techs: ["Next.js", "tRPC", "Pinecone DB", "GitHub Webhooks"],
      steps: [
        {
          label: "01",
          title: "Main Idea",
          icon: <Compass size={16} />,
          points: [
            "Automatically reviews code changes in GitHub pull requests.",
            "Visualizes code review statuses on an interactive Kanban board.",
            "Speeds up the peer review loop for developer teams."
          ]
        },
        {
          label: "02",
          title: "Problem Solved",
          icon: <HelpCircle size={16} />,
          points: [
            "Peer reviews are slow. Developers wait hours for approvals.",
            "Manual code audits consume valuable engineering time.",
            "Tracking code changes across files is mentally exhausting."
          ]
        },
        {
          label: "03",
          title: "Main Tech Stack",
          icon: <Layers size={16} />,
          points: [
            "Next.js handles the user interface and dashboards.",
            "tRPC ensures type safety between backend and frontend.",
            "Pinecone DB stores vector embeddings of codebase files.",
            "GitHub Webhooks trigger instant audits upon code push."
          ]
        },
        {
          label: "04",
          title: "Main Learning",
          icon: <Lightbulb size={16} />,
          points: [
            "Handling burst webhook alerts from GitHub without losing data.",
            "Designing clean vector search queries for contextual code analysis."
          ]
        },
        {
          label: "05",
          title: "Main Problem Faced",
          icon: <AlertTriangle size={16} />,
          points: [
            "Processing large code bases was slow and expensive.",
            "Resolved by vector-indexing only modified files instead of the entire project."
          ]
        },
        {
          label: "06",
          title: "Future Ideas",
          icon: <Code size={16} />,
          points: [
            "Adding automatic test generation to verify code fixes instantly.",
            "Integrating security vulnerability alerts into PR reviews."
          ]
        }
      ]
    },
    formit: {
      title: "Formit",
      category: "SaaS Utilities",
      tagline: "Drag-and-drop form creator with interactive logic paths.",
      image: "/special-projects/formit.png",
      liveUrl: "https://formit-web.vercel.app",
      githubUrl: "https://github.com/AbdulSamad001122",
      techs: ["Next.js", "Drizzle ORM", "Stripe", "Inngest"],
      steps: [
        {
          label: "01",
          title: "Main Idea",
          icon: <Compass size={16} />,
          points: [
            "Build dynamic forms visually using a drag-and-drop editor.",
            "Define custom logic trees without writing code."
          ]
        },
        {
          label: "02",
          title: "Problem Solved",
          icon: <HelpCircle size={16} />,
          points: [
            "Creating multi-step forms with logic requires custom code.",
            "Ad-hoc forms are hard to edit once deployed.",
            "Standard form builders lack robust API integration pipelines."
          ]
        },
        {
          label: "03",
          title: "Main Tech Stack",
          icon: <Layers size={16} />,
          points: [
            "Next.js drives the builder workspace and customer views.",
            "Drizzle ORM connects to the relational SQL store.",
            "Stripe handles subscriptions and checkout sessions.",
            "Inngest triggers durable background email delivery."
          ]
        },
        {
          label: "04",
          title: "Main Learning",
          icon: <Lightbulb size={16} />,
          points: [
            "Representing flexible logical paths in a database schema.",
            "Enforcing schema validations on visual form layouts."
          ]
        },
        {
          label: "05",
          title: "Main Problem Faced",
          icon: <AlertTriangle size={16} />,
          points: [
            "Stripe webhooks could fail, leaving user plans unsynced.",
            "Resolved by writing a resilient webhook listener inside Inngest with auto-retries."
          ]
        },
        {
          label: "06",
          title: "Future Ideas",
          icon: <Code size={16} />,
          points: [
            "Adding question drop-off analytics charts.",
            "Adding direct CSV/Excel data sync integrations."
          ]
        }
      ]
    },
    polra: {
      title: "Polra",
      category: "Real-time Backends",
      tagline: "Sub-5ms live polling utility with WebSocket sync.",
      image: "/special-projects/polra.png",
      liveUrl: "https://my-polra.vercel.app",
      githubUrl: "https://github.com/AbdulSamad001122",
      techs: ["React", "Socket.io", "Redis", "Tailwind CSS"],
      steps: [
        {
          label: "01",
          title: "Main Idea",
          icon: <Compass size={16} />,
          points: [
            "A fast online voting tool for live presentations.",
            "Shows answers changing instantly on real-time charts."
          ]
        },
        {
          label: "02",
          title: "Problem Solved",
          icon: <HelpCircle size={16} />,
          points: [
            "Static polls require manual browser reloads to see votes.",
            "High-traffic live polls lag and crash under load.",
            "Setting up websocket connections is complex for basic polls."
          ]
        },
        {
          label: "03",
          title: "Main Tech Stack",
          icon: <Layers size={16} />,
          points: [
            "React handles the fast-updating polling interface.",
            "Socket.io opens low-latency bi-directional channels.",
            "Redis stores active vote counts in high-speed memory.",
            "Tailwind CSS maintains lightweight styling definitions."
          ]
        },
        {
          label: "04",
          title: "Main Learning",
          icon: <Lightbulb size={16} />,
          points: [
            "Managing socket connections reliably across tabs.",
            "Broadcasting state updates to thousands of users simultaneously."
          ]
        },
        {
          label: "05",
          title: "Main Problem Faced",
          icon: <AlertTriangle size={16} />,
          points: [
            "Server crashes during concurrent vote floods.",
            "Resolved by routing votes to a Redis cache adapter before saving to database in bulk."
          ]
        },
        {
          label: "06",
          title: "Future Ideas",
          icon: <Code size={16} />,
          points: [
            "Displaying location-based voting heatmaps.",
            "Adding timed quiz formats with scoreboards."
          ]
        }
      ]
    },
    invocify: {
      title: "Invocify",
      category: "Enterprise Tools",
      tagline: "Typesafe invoice creator and PDF document builder.",
      image: "/special-projects/invocify.png",
      liveUrl: "https://invocify.vercel.app",
      githubUrl: "https://github.com/AbdulSamad001122",
      techs: ["React", "TypeScript", "Zod", "Express.js"],
      steps: [
        {
          label: "01",
          title: "Main Idea",
          icon: <Compass size={16} />,
          points: [
            "Design, validate, and download clean PDF invoices.",
            "Maintain client and order sheets in local memory."
          ]
        },
        {
          label: "02",
          title: "Problem Solved",
          icon: <HelpCircle size={16} />,
          points: [
            "Manual PDF invoicing leads to layout bugs and bad formatting.",
            "Corrupt fields generate bad tax calculations.",
            "Billing files are easily misplaced or lost."
          ]
        },
        {
          label: "03",
          title: "Main Tech Stack",
          icon: <Layers size={16} />,
          points: [
            "React operates the invoice editor workspace.",
            "TypeScript ensures strict code validation types.",
            "Zod validates forms before submission to database.",
            "Express.js handles PDF export renders."
          ]
        },
        {
          label: "04",
          title: "Main Learning",
          icon: <Lightbulb size={16} />,
          points: [
            "Enforcing exact invoice data schemas with Zod models.",
            "Optimizing vector layout layouts for print page outputs."
          ]
        },
        {
          label: "05",
          title: "Main Problem Faced",
          icon: <AlertTriangle size={16} />,
          points: [
            "Concurrent PDF rendering crashed the server resource pool.",
            "Resolved by writing a sequential download queue scheduler."
          ]
        },
        {
          label: "06",
          title: "Future Ideas",
          icon: <Code size={16} />,
          points: [
            "Adding automated Stripe payment links on the PDF page.",
            "Supporting multi-currency exchange rates automatically."
          ]
        }
      ]
    }
  };

  const project = projectsData[projectId];

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });

    let ctx = gsap.context(() => {
      // 1. Vertical progress line fill animation - ends at "bottom 60%" to ensure the last dot is reached at bottom scroll
      gsap.to(".timeline-progress-fill", {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: ".timeline-steps-container",
          start: "top 60%",
          end: "bottom 60%",
          scrub: true
        }
      });

      // 2. Loop through each step item and trigger active state
      // toggleActions: "play none none reverse" keeps items highlighted when scrolling past them down,
      // and only dims them when scrolling back past their trigger point toward the top.
      gsap.utils.toArray('.timeline-step-item').forEach((step: any) => {
        const dot = step.querySelector('.timeline-dot');
        const content = step.querySelector('.timeline-content');
        
        gsap.fromTo(dot,
          { 
            scale: 0.85, 
            backgroundColor: "hsl(220, 10%, 89%)", 
            borderColor: "hsl(220, 10%, 89%)",
            color: "hsl(218, 15%, 45%)", // text-text-secondary-gray
            boxShadow: "0 0 0px rgba(22, 163, 74, 0)"
          },
          {
            scale: 1.15,
            backgroundColor: "hsl(160, 100%, 26%)",
            borderColor: "hsl(152, 90%, 94%)",
            color: "hsl(0, 0%, 100%)", // white icon color transition
            boxShadow: "0 0 12px rgba(22, 163, 74, 0.4)",
            duration: 0.3,
            scrollTrigger: {
              trigger: step,
              start: "top 60%",
              toggleActions: "play none none reverse",
              onEnter: () => {
                content.classList.add('opacity-100');
                content.classList.remove('opacity-40');
              },
              onLeaveBack: () => {
                content.classList.remove('opacity-100');
                content.classList.add('opacity-40');
              }
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, [projectId]);

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-primary-gray p-6">
        <h2 className="text-xl font-bold text-text-primary-navy">Project not found</h2>
        <button onClick={onBack} className="mt-4 flex items-center gap-2 text-sm font-bold text-accent-green">
          <ArrowLeft size={16} /> Return Home
        </button>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative min-h-screen bg-primary-gray font-sans text-text-primary-navy overflow-hidden">
      
      {/* Structural layout vertical border grid lines */}
      <div className="absolute left-[3%] right-[3%] md:left-[5%] md:right-[5%] top-0 bottom-0 pointer-events-none border-x border-border-light-gray opacity-50 z-0" />

      {/* Main Page Layout Container */}
      <div className="mx-auto max-w-7xl px-6 pt-12 pb-64 relative z-10">
        
        {/* Back Button & Header */}
        <header className="mb-12 flex flex-col items-start text-left border-b border-border-light-gray/60 pb-8">
          <button 
            onClick={onBack}
            className="group flex items-center gap-2 rounded-full border border-border-light-gray bg-card-white px-5 py-2 text-xs font-bold text-text-primary-navy transition-all hover:bg-accent-green hover:text-card-white hover:border-accent-green cursor-pointer mb-8"
          >
            <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-0.5" />
            Back to Home
          </button>

          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-accent-green bg-accent-green-light px-3 py-1 rounded-full">
              {project.category}
            </span>
          </div>

          <h1 className="mt-4 font-sans text-4xl font-extrabold tracking-tight text-text-primary-navy md:text-5xl">
            {project.title}
          </h1>
          <p className="mt-3 text-base font-semibold text-text-secondary-gray">
            {project.tagline}
          </p>
        </header>

        {/* Project Layout Body Split */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Left Column: Sticky card preview */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-24 space-y-6">
              
              {/* Browser frame screenshot preview */}
              <div className="w-full bg-card-white border border-border-light-gray rounded-2xl overflow-hidden shadow-md flex flex-col aspect-[16/10] select-none">
                <div className="h-8 bg-primary-gray/80 border-b border-border-light-gray/60 px-4 flex items-center justify-between shrink-0">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                  </div>
                  <span className="text-[10px] text-text-secondary-gray font-semibold truncate max-w-[60%]">
                    {project.liveUrl.replace("https://", "")}
                  </span>
                  <div className="w-4" />
                </div>
                <div className="flex-1 w-full bg-card-white overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={`${project.title} dashboard`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Technologies Card */}
              <div className="rounded-2xl border border-border-light-gray bg-card-white p-6 shadow-sm text-left">
                <h3 className="font-sans text-sm font-bold text-text-primary-navy mb-4">Core Technology Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techs.map((tech) => (
                    <span key={tech} className="text-xs font-semibold text-text-primary-navy bg-primary-gray px-3.5 py-2 rounded-xl border border-border-light-gray/40">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Navigation Action Buttons */}
              <div className="flex gap-4">
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 rounded-full bg-text-primary-navy py-4 text-xs font-bold text-card-white transition-all hover:bg-accent-green shadow-sm"
                >
                  Live Link
                  <ExternalLink size={14} />
                </a>
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 rounded-full border border-border-light-gray bg-card-white py-4 text-xs font-bold text-text-primary-navy transition-all hover:bg-slate-100"
                >
                  GitHub Repository
                  <Github size={14} />
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Scrolling Timeline */}
          <div className="lg:col-span-7 relative pl-12 timeline-steps-container">
            
            {/* Background connection line */}
            <div className="absolute left-[20px] top-6 bottom-6 w-0.5 bg-border-light-gray/70 z-0">
              {/* Highlighted filling bar */}
              <div className="timeline-progress-fill absolute top-0 left-0 w-full h-0 bg-accent-green" />
            </div>

            {/* Timeline Milestones */}
            <div className="space-y-16">
              {project.steps.map((step, idx) => (
                <div key={idx} className="timeline-step-item relative flex items-start text-left">
                  
                  {/* Glowing Node Dot marker */}
                  <div className="timeline-dot absolute -left-[45px] top-1.5 flex h-7.5 w-7.5 items-center justify-center rounded-full border-2 border-border-light-gray bg-card-white text-text-secondary-gray z-10 transition-all duration-300">
                    {step.icon}
                  </div>

                  {/* Step Content */}
                  <div className="timeline-content flex-1 pl-4 opacity-45 transition-opacity duration-300">
                    <span className="text-[10px] font-bold tracking-widest text-accent-green uppercase font-mono">
                      Milestone {step.label}
                    </span>
                    <h3 className="mt-1 font-sans text-xl font-bold text-text-primary-navy">
                      {step.title}
                    </h3>
                    
                    {/* List of short, jargon-free points */}
                    <ul className="mt-4 space-y-2.5">
                      {step.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5 text-sm leading-relaxed text-text-secondary-gray">
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-green mt-2" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
