import { Layers, Database, Cpu, Brain, Sparkles, Github } from 'lucide-react';

export default function ServicesBento() {
  const marqueeTags = [
    "Next.js", "React 19", "TypeScript", "Node.js", "PostgreSQL", "Docker", "Prisma 7", "Drizzle ORM", 
    "tRPC", "Inngest", "Turborepo", "Tailwind CSS v4", "Zod", "Better Auth", "pnpm", "Vercel", "Octokit", "Pinecone", "MongoDB"
  ];

  return (
    <section id="services" className="relative w-full border-b border-border-light-gray bg-card-white px-6 py-20 overflow-hidden">
      
      <div className="mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between mb-16 text-left reveal-up">
          <div className="flex flex-col items-start max-w-md">
            <span className="text-xs font-bold uppercase tracking-wider text-accent-green">Specialties</span>
            <h2 className="mt-2 font-sans text-3xl font-extrabold text-text-primary-navy md:text-4xl">
              Engineering focus areas that deliver results.
            </h2>
          </div>
          <p className="max-w-lg text-sm leading-relaxed text-text-secondary-gray lg:mt-6">
            I build launch-ready digital products with highly robust architectures, scalable databases, durable event workflows, and intelligent AI features.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:grid-rows-2 reveal-cascade-container">
          
          {/* Card 1: Full-Fledged SaaS Products (Tall - md:col-span-7) */}
          <div className="reveal-cascade-item group relative flex flex-col justify-between rounded-2xl border border-border-light-gray bg-primary-gray p-8 transition-all hover:-translate-y-1 hover:shadow-md md:col-span-7 text-left overflow-hidden">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-green-light text-accent-green mb-6">
                <Layers size={22} />
              </div>
              <h3 className="font-sans text-xl font-bold text-text-primary-navy">Full-Fledged SaaS Products</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary-gray max-w-md">
                Engineering complete, launch-ready software applications from scratch. Integrating secure authentication, Stripe billing, transactional mailers, and highly responsive user interfaces built for high conversions and user engagement.
              </p>
            </div>
            
            {/* CSS-designed Billing/Auth API Mockup */}
            <div className="mt-8 relative w-full h-44 rounded-t-xl bg-slate-950 border border-slate-800 border-b-0 p-4 shadow-sm overflow-hidden transform translate-y-2 transition-transform group-hover:translate-y-0 text-white font-mono text-[9px]">
              {/* Header inside mockup */}
              <div className="flex items-center justify-between border-b border-slate-900 pb-2 mb-3">
                <div className="flex items-center gap-1.5">
                  <div className="h-2 w-2 rounded-full bg-red-400" />
                  <div className="h-2 w-2 rounded-full bg-yellow-400" />
                  <div className="h-2 w-2 rounded-full bg-green-400" />
                </div>
                <div className="text-[7.5px] text-slate-500 font-bold uppercase tracking-wider">POST /api/billing/checkout-session</div>
                <div className="h-3 w-3 rounded-full bg-accent-green-light/20 flex items-center justify-center text-accent-green text-[7px]">&lt;&gt;</div>
              </div>
              {/* Content inside mockup */}
              <div className="flex gap-4">
                <div className="w-1/2 flex flex-col gap-2">
                  <span className="text-purple-400 font-bold">const session =</span>
                  <span className="text-slate-300 pl-2">await stripe.checkout.sessions.create(&#123;</span>
                  <span className="text-slate-400 pl-4">payment_method_types: ['card'],</span>
                  <span className="text-slate-400 pl-4">line_items: [&#123; price: 'prod_98aF', quantity: 1 &#125;],</span>
                  <span className="text-slate-300 pl-2">&#125;);</span>
                </div>
                <div className="w-1/2 rounded-lg bg-slate-900/60 border border-slate-800 p-2 text-left flex flex-col gap-1">
                  <span className="text-slate-500">// stripe_verify.log</span>
                  <span className="text-green-400">➔ customer_created: ok</span>
                  <span className="text-green-400">➔ checkout_completed: ok</span>
                  <span className="text-green-400">➔ plan_status: active</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Production-Ready Schemas (Square/Rect - md:col-span-5) */}
          <div className="reveal-cascade-item group flex flex-col justify-between rounded-2xl border border-border-light-gray bg-primary-gray p-8 transition-all hover:-translate-y-1 hover:shadow-md md:col-span-5 text-left overflow-hidden">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-green-light text-accent-green mb-6">
                <Database size={22} />
              </div>
              <h3 className="font-sans text-xl font-bold text-text-primary-navy">Production-Ready Schemas</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary-gray">
                Designing highly optimized relational databases. Structuring efficient tables, custom SQL procedures, data constraints, indexing strategies, and zero-downtime database migration routines.
              </p>
            </div>
            
            {/* CSS-designed ERD Schema Mockup */}
            <div className="mt-6 w-full rounded-xl border border-border-light-gray bg-card-white p-4 shadow-sm relative overflow-hidden h-28 flex items-center justify-between gap-4 font-mono text-[8px] transform translate-y-1 transition-transform group-hover:translate-y-0 shrink-0 select-none">
              {/* Table 1: users */}
              <div className="w-[45%] border border-border-light-gray rounded bg-primary-gray/40 overflow-hidden shadow-[0_2px_4px_rgba(0,0,0,0.01)] z-10">
                <div className="bg-text-primary-navy text-card-white px-2 py-0.5 font-bold text-[7px] flex justify-between">
                  <span>users</span>
                  <span className="text-accent-green text-[6px]">PK</span>
                </div>
                <div className="p-1.5 space-y-1 text-text-primary-navy">
                  <div className="flex justify-between font-semibold">
                    <span>id</span>
                    <span className="text-slate-400">uuid</span>
                  </div>
                  <div className="flex justify-between">
                    <span>email</span>
                    <span className="text-slate-400">varchar</span>
                  </div>
                </div>
              </div>

              {/* SVG Connecting Line */}
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-0">
                <svg className="w-full h-full" viewBox="0 0 200 100" fill="none">
                  <path d="M 85 50 Q 100 50, 115 50" stroke="hsl(142, 76%, 36%)" strokeWidth="1.2" strokeDasharray="3 3" />
                  <circle cx="85" cy="50" r="2" fill="hsl(142, 76%, 36%)" />
                  <circle cx="115" cy="50" r="2" fill="hsl(142, 76%, 36%)" />
                </svg>
              </div>

              {/* Table 2: orders */}
              <div className="w-[45%] border border-border-light-gray rounded bg-primary-gray/40 overflow-hidden shadow-[0_2px_4px_rgba(0,0,0,0.01)] z-10">
                <div className="bg-text-primary-navy text-card-white px-2 py-0.5 font-bold text-[7px] flex justify-between">
                  <span>orders</span>
                  <span className="text-accent-green text-[6px]">FK</span>
                </div>
                <div className="p-1.5 space-y-1 text-text-primary-navy">
                  <div className="flex justify-between font-semibold text-accent-green">
                    <span>user_id</span>
                    <span className="text-slate-400">uuid</span>
                  </div>
                  <div className="flex justify-between">
                    <span>amount</span>
                    <span className="text-slate-400">int</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Robust Scaling Stack (Square/Rect - md:col-span-5) */}
          <div className="reveal-cascade-item group flex flex-col justify-between rounded-2xl border border-border-light-gray bg-primary-gray p-8 transition-all hover:-translate-y-1 hover:shadow-md md:col-span-5 text-left overflow-hidden">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-green-light text-accent-green mb-6">
                <Cpu size={22} />
              </div>
              <h3 className="font-sans text-xl font-bold text-text-primary-navy">Robust Scaling Stack</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary-gray">
                Architecting real-time systems and event-driven backends. Implementing reliable message brokers, key-value caches, persistent pub/sub streams, and bi-directional WebSocket socket tunnels for instant sync.
              </p>
            </div>
            
            {/* CSS-designed Realtime/Stream Log Mockup */}
            <div className="mt-6 w-full rounded-xl border border-slate-800 bg-slate-950 p-4 shadow-sm relative overflow-hidden h-28 text-left font-mono text-[8px] text-slate-300 flex flex-col justify-between transform translate-y-1 transition-transform group-hover:translate-y-0 shrink-0 select-none">
              {/* Window Header */}
              <div className="flex items-center gap-1 border-b border-slate-900 pb-1.5 mb-1.5 shrink-0">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                <div className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                <div className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                <span className="text-[6px] text-slate-500 ml-1">scaling_stream.sh</span>
              </div>
              {/* Logs Content */}
              <div className="flex-1 space-y-1 overflow-hidden leading-normal">
                <div className="flex items-center gap-1.5">
                  <span className="text-slate-500">[16:48:02]</span>
                  <span className="text-sky-400 font-bold">socket.io:</span>
                  <span>connect [usr_99]</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-slate-500">[16:48:03]</span>
                  <span className="text-red-400 font-bold">redis_cache:</span>
                  <span>usr_99_session <span className="text-accent-green font-semibold">(1.2ms)</span></span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-slate-500">[16:48:05]</span>
                  <span className="text-purple-400 font-bold">kafka_event:</span>
                  <span>pub: order_placed_events</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Intelligent AI Workflows (Tall - md:col-span-7) */}
          <div className="reveal-cascade-item group relative flex flex-col justify-between rounded-2xl border border-border-light-gray bg-primary-gray p-8 transition-all hover:-translate-y-1 hover:shadow-md md:col-span-7 text-left overflow-hidden">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-green-light text-accent-green mb-6">
                <Brain size={22} />
              </div>
              <h3 className="font-sans text-xl font-bold text-text-primary-navy">Intelligent AI Workflows</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary-gray max-w-md">
                Integrating modern artificial intelligence systems. Building retrieval-augmented generation (RAG) pipelines with high-speed vector storage, streaming responses, and autonomous agent-driven workflow systems.
              </p>
            </div>

            {/* CSS Vector Search Preview Cards */}
            <div className="mt-8 flex gap-4 transform translate-y-2 transition-transform group-hover:translate-y-0 text-[8.5px]">
              
              {/* Inner Card 1 */}
              <div className="w-1/2 rounded-xl border border-border-light-gray bg-card-white p-4 shadow-sm text-left font-mono">
                <div className="flex items-center justify-between mb-3">
                  <div className="h-5 px-2 rounded-full bg-accent-green-light flex items-center justify-center text-[7px] font-bold text-accent-green">PINECONE INDEX</div>
                  <Sparkles size={12} className="text-accent-green" />
                </div>
                <h4 className="font-bold text-text-primary-navy">Vectorize: app/page.tsx</h4>
                <div className="mt-2 text-slate-500">
                  dims: 1536 <br />
                  distance: cosine <br />
                  status: indexed
                </div>
              </div>

              {/* Inner Card 2 */}
              <div className="w-1/2 rounded-xl border border-slate-800 bg-slate-950 p-4 shadow-sm text-left text-card-white font-mono">
                <div className="flex items-center justify-between mb-3">
                  <div className="h-5 px-2 rounded-full bg-card-white/10 flex items-center justify-center text-[7px] font-bold text-card-white">LLM QUERY</div>
                  <Sparkles size={12} className="text-accent-green" />
                </div>
                <h4 className="font-bold">Prompt: Audit PR #47</h4>
                <div className="mt-2 text-slate-400">
                  model: deepseek-r1 <br />
                  temp: 0.1 <br />
                  tokens: 4.8k
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Double scrolling marquee */}
        <div className="mt-24 -mx-6 flex flex-col gap-4 overflow-hidden relative py-4">
          
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
                Hire me
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
