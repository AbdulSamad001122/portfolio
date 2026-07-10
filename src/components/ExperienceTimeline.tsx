import { useState } from 'react';
import { ChevronDown, Cpu, Database, Layers, ShieldCheck } from 'lucide-react';

interface SubTopic {
  title: string;
  desc: string;
}

interface EngineeringArea {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  subTopics: SubTopic[];
  bullets: string[];
  tags: string[];
}

export default function ExperienceTimeline() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const areas: EngineeringArea[] = [
    {
      title: "Rapid Iteration & Modularity",
      subtitle: "System Design & Speed",
      icon: <Layers size={18} />,
      subTopics: [
        { title: "Modular Architecture", desc: "Keeping code decoupled so adding features never introduces unexpected side effects." },
        { title: "Iterative Shipping", desc: "Moving from initial concept to live production in days through clean deployment loops." }
      ],
      bullets: [
        "Structuring applications to separate core business rules from external services and databases.",
        "Establishing clear dependency boundaries to keep code readable and easy to navigate.",
        "Automating build checks to catch inconsistencies early, keeping the deployment loop fast."
      ],
      tags: ["Modular Design", "System Structure", "Fast Iteration", "Clean Code"]
    },
    {
      title: "User-First Product Engineering",
      subtitle: "Solving Real-World Problems",
      icon: <ShieldCheck size={18} />,
      subTopics: [
        { title: "Pragmatic Solutions", desc: "Aligning technical implementations directly with user workflows." },
        { title: "Freelance Experience", desc: "Working directly with clients to solve business bottlenecks and fund my own builds." }
      ],
      bullets: [
        "Focusing on building features that address tangible user pain points rather than over-engineering code.",
        "Designing APIs and user flows that feel simple, direct, and easy to interact with.",
        "Bridging business requirements with technical logic to ship software that delivers actual value."
      ],
      tags: ["Product Focus", "Pragmatism", "Client Solutions", "Simplicity"]
    },
    {
      title: "Resilience & Fault Tolerance",
      subtitle: "Designing for Failure",
      icon: <Cpu size={18} />,
      subTopics: [
        { title: "Resilient Workflows", desc: "Structuring operations to automatically recover from dropped connections or failed API calls." },
        { title: "Data Consistency", desc: "Enforcing clean database relationships and validation constraints to protect application state." }
      ],
      bullets: [
        "Designing background jobs with retry strategies and exponential backoff to handle transient network drops.",
        "Optimizing heavy tasks (like parsing data or broadcasting notifications) to run efficiently without locking resources.",
        "Handling external webhooks and data feeds gracefully, ensuring systems remain in sync under all conditions."
      ],
      tags: ["Fault Tolerance", "Data Integrity", "Resource Efficiency", "Error Handling"]
    },
    {
      title: "Independent & Adaptive Growth",
      subtitle: "Learning by Shipping",
      icon: <Database size={18} />,
      subTopics: [
        { title: "Rapid Prototyping", desc: "Building functional proof-of-concepts immediately to test feasibility." },
        { title: "First-Principles Learning", desc: "Diving directly into unfamiliar codebases and documentation to solve hard problems." }
      ],
      bullets: [
        "Self-directing research and learning by shipping real software rather than relying solely on theory.",
        "Adapting quickly to changing specifications, refactoring systems smoothly when requirements shift.",
        "Exploring complex technical domains from realtime socket channels to semantic databases by building practical tools."
      ],
      tags: ["Self-Taught", "Adaptability", "Prototyping", "Continuous Improvement"]
    }
  ];

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="mindset" className="relative w-full border-b border-border-light-gray bg-primary-gray px-6 py-20">
      
      {/* Background blueprint decorative lines */}
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[linear-gradient(to_right,hsl(220,10%,89%)_1px,transparent_1px),linear-gradient(to_bottom,hsl(220,10%,89%)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between mb-16 text-left">
          <div className="flex flex-col items-start max-w-md">
            <span className="text-xs font-bold uppercase tracking-wider text-accent-green">Mindset</span>
            <h2 className="mt-2 font-sans text-3xl font-extrabold text-text-primary-navy md:text-4xl">
              How I think about systems.
            </h2>
          </div>
          <p className="max-w-lg text-sm leading-relaxed text-text-secondary-gray lg:mt-6">
            A deeper look into my engineering philosophy and problem-solving principles for building reliable software.
          </p>
        </div>

        {/* Timeline Accordions */}
        <div className="flex flex-col gap-4 max-w-4xl mx-auto">
          {areas.map((area, idx) => {
            const isExpanded = expandedIndex === idx;

            return (
              <div 
                key={idx}
                className={`rounded-2xl border border-border-light-gray bg-card-white overflow-hidden transition-all duration-300 ${isExpanded ? "shadow-md ring-1 ring-accent-green/10" : ""}`}
              >
                {/* Header Toggle */}
                <button
                  onClick={() => toggleExpand(idx)}
                  className="flex w-full items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                >
                  <div className="flex items-center gap-6">
                    {/* Topic Icon */}
                    <div className={`hidden sm:flex h-10 w-10 items-center justify-center rounded-xl border transition-colors ${isExpanded ? "border-accent-green bg-accent-green-light text-accent-green" : "border-border-light-gray bg-primary-gray text-text-secondary-gray"}`}>
                      {area.icon}
                    </div>
                    <div>
                      <h3 className="font-sans text-lg font-bold text-text-primary-navy">{area.title}</h3>
                      <p className="text-sm font-semibold text-text-secondary-gray mt-0.5">{area.subtitle}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="hidden sm:inline-block rounded-full bg-primary-gray px-3 py-1 text-[10px] font-bold text-text-secondary-gray">Active Focus</span>
                    <div className={`flex h-8 w-8 items-center justify-center rounded-full border border-border-light-gray transition-transform duration-300 ${isExpanded ? "rotate-180 border-accent-green text-accent-green" : "text-text-primary-navy"}`}>
                      <ChevronDown size={16} />
                    </div>
                  </div>
                </button>

                {/* Expanded Content Panel */}
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-8 pt-2 md:px-8 border-t border-border-light-gray/40">
                      
                      {/* Sub topics list */}
                      {area.subTopics.length > 0 && (
                        <div className="mb-6 flex flex-col gap-3 pl-0 sm:pl-16 text-left">
                          <h4 className="text-xs font-bold text-text-primary-navy uppercase tracking-wider">Sub-Core Capabilities</h4>
                          <div className="space-y-3 border-l border-border-light-gray pl-4 py-1">
                            {area.subTopics.map((sub, sIdx) => (
                              <div key={sIdx} className="flex flex-col text-sm text-left">
                                <span className="font-semibold text-text-primary-navy">{sub.title}</span>
                                <span className="text-xs text-text-secondary-gray mt-0.5">{sub.desc}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Bullet Description */}
                      <div className="pl-0 sm:pl-16 text-left">
                        <h4 className="text-xs font-bold text-text-primary-navy uppercase tracking-wider mb-3 font-sans">Key Implementation Details</h4>
                        <ul className="space-y-2 text-sm leading-relaxed text-text-secondary-gray list-disc pl-4">
                          {area.bullets.map((b, bIdx) => {
                            const isTarget = b.includes("Exploring complex");
                            return (
                              <li 
                                key={bIdx} 
                                className={isTarget ? "text-accent-green font-semibold" : ""}
                              >
                                {b}
                              </li>
                            );
                          })}
                        </ul>

                        {/* Skill Tags */}
                        <div className="mt-8 flex flex-wrap gap-2">
                          {area.tags.map((tag, tIdx) => (
                            <span 
                              key={tIdx} 
                              className="rounded-full bg-accent-green-light px-3 py-1 text-xs font-semibold text-accent-green hover:bg-accent-green hover:text-card-white transition-colors cursor-pointer"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

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
