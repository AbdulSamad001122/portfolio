import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  text: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);

  const testimonials: Testimonial[] = [
    {
      text: "Exceptional service, intuitive, reliable, and exceeded my expectations. The team was incredibly helpful and ensured a seamless integration process.",
      author: "Tony Stark",
      role: "CEO & Co-founder",
      company: "Stark Industries",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&fit=crop&q=80"
    },
    {
      text: "His design thinking transformed our product experience. John possesses a rare combination of raw aesthetic talent and deep logical user-flow execution.",
      author: "Pepper Potts",
      role: "CEO",
      company: "Resilient Tech",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&fit=crop&q=80"
    },
    {
      text: "A pleasure to collaborate with. John took complete ownership of our brand redesign, delivering a modular system that scaled seamlessly with our dev cycles.",
      author: "Bruce Banner",
      role: "Lead Researcher",
      company: "BioLabs Corp",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&fit=crop&q=80"
    }
  ];

  // Auto-scroll testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="relative w-full border-b border-border-light-gray bg-card-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between mb-20 text-left">
          <div className="flex flex-col items-start max-w-md">
            <span className="text-xs font-bold uppercase tracking-wider text-accent-green">Testimonials</span>
            <h2 className="mt-2 font-sans text-3xl font-extrabold text-text-primary-navy md:text-4xl">
              Trusted by clients around the globe. 🌍
            </h2>
          </div>
          <p className="max-w-lg text-sm leading-relaxed text-text-secondary-gray lg:mt-6">
            I'm grateful to collaborate with forward-thinking brands and teams to create value that designs a real difference in user experiences and drives business success.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          
          {/* Left Column: Metrics & CTA */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <div className="grid grid-cols-3 gap-6 w-full mb-10">
              <div className="flex flex-col items-start">
                <span className="font-accent text-3xl font-extrabold text-text-primary-navy">100+</span>
                <span className="text-[10px] font-bold text-text-secondary-gray uppercase mt-1">Happy Client</span>
              </div>
              <div className="flex flex-col items-start">
                <span className="font-accent text-3xl font-extrabold text-text-primary-navy">$250m</span>
                <span className="text-[10px] font-bold text-text-secondary-gray uppercase mt-1">Revenue Added</span>
              </div>
              <div className="flex flex-col items-start">
                <span className="font-accent text-3xl font-extrabold text-text-primary-navy">4.8</span>
                <span className="text-[10px] font-bold text-text-secondary-gray uppercase mt-1">Average Rating</span>
              </div>
            </div>

            {/* Sub Stars Block */}
            <div className="flex items-center gap-1 text-yellow-500 mb-10">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="currentColor" />
              ))}
            </div>

            {/* Let's Talk CTA */}
            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="#contact"
                className="flex items-center gap-2 rounded-full border border-text-primary-navy px-6 py-3.5 text-xs font-bold text-text-primary-navy hover:bg-text-primary-navy hover:text-card-white transition-all shadow-sm"
              >
                Let's talk 💬
              </a>
              <a 
                href="#contact"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-text-primary-navy text-card-white hover:bg-accent-green transition-all shadow-sm"
              >
                Hire me
              </a>
            </div>
          </div>

          {/* Right Column: Carousel testimonial Card */}
          <div className="lg:col-span-7 relative h-72 md:h-64 flex items-center">
            {testimonials.map((t, idx) => {
              const isActive = idx === activeIdx;

              return (
                <div 
                  key={idx}
                  className={`absolute inset-0 flex flex-col justify-between rounded-2xl border border-border-light-gray bg-primary-gray p-8 text-left transition-all duration-500 ease-in-out ${isActive ? "opacity-100 scale-100 z-10" : "opacity-0 scale-95 pointer-events-none"}`}
                >
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>

                  {/* Testimonial Quote */}
                  <p className="mt-4 font-sans text-sm md:text-base leading-relaxed text-text-primary-navy font-semibold italic">
                    "{t.text}"
                  </p>

                  {/* Client Profiler */}
                  <div className="mt-6 flex items-center gap-4">
                    <img 
                      src={t.avatar} 
                      alt={t.author} 
                      className="h-12 w-12 rounded-full object-cover border border-border-light-gray shadow-sm"
                    />
                    <div>
                      <h4 className="font-sans text-sm font-bold text-text-primary-navy">{t.author}</h4>
                      <p className="text-[10px] font-semibold text-text-secondary-gray mt-0.5">{t.role}, {t.company}</p>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
