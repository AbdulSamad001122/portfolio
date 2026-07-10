import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { Sparkles, Zap } from 'lucide-react';

export default function Hero() {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const initHeroProfileAnimation = () => {
        const startSlot = document.getElementById('hero-image-slot');
        const endSlot = document.getElementById('aboutme-image-slot');
        const card = document.getElementById('hero-profile-card');

        if (!startSlot || !endSlot || !card) return;

        // Position the animating card statically over the starting slot
        const startRect = startSlot.getBoundingClientRect();
        const parentRect = startSlot.parentElement?.getBoundingClientRect() || { left: 0, top: 0 };
        
        gsap.set(card, {
          left: startRect.left - parentRect.left,
          top: startRect.top - parentRect.top,
          width: startRect.width,
          height: startRect.height,
          x: 0,
          y: 0,
          rotationY: 0,
          rotation: -2,
        });

        // Calculate delta transitions relative to viewport coordinates
        const endRect = endSlot.getBoundingClientRect();
        const dx = endRect.left - startRect.left;
        const dy = endRect.top - startRect.top;

        // ScrollTrigger animation timeline (3D swivel + fly-to-slot)
        gsap.fromTo(card,
          {
            x: 0,
            y: 0,
            width: startRect.width,
            height: startRect.height,
            rotationY: 0,
            rotation: -2,
            transformPerspective: 1200,
          },
          {
            x: dx,
            y: dy,
            width: endRect.width,
            height: endRect.height,
            rotationY: 360, // Full 3D turn/swivel
            rotation: 0,
            transformPerspective: 1200,
            ease: "none",
            scrollTrigger: {
              trigger: startSlot,
              start: "center center",
              endTrigger: endSlot,
              end: "center center",
              scrub: 1,
              invalidateOnRefresh: true,
            }
          }
        );
      };

      // Delay slightly to ensure layout rendering has settled
      setTimeout(initHeroProfileAnimation, 150);

      const handleResize = () => {
        initHeroProfileAnimation();
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative z-30 w-full border-b border-border-light-gray bg-primary-gray px-6 py-12 md:py-20 select-none overflow-visible">
      {/* Background blueprint decorative lines */}
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[linear-gradient(to_right,hsl(220,10%,89%)_1px,transparent_1px),linear-gradient(to_bottom,hsl(220,10%,89%)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Outer wrapper with perspective container */}
      <div className="mx-auto max-w-7xl relative z-10 flex flex-col items-center justify-center min-h-[80vh] md:min-h-[85vh]">
        
        {/* Brutalist Large Typography Frame container */}
        <div className="relative w-full max-w-5xl flex flex-col items-center justify-center py-6">
          
          {/* Top Left Sparkle Star */}
          <div className="absolute top-0 left-4 md:-left-8 text-text-primary-navy/80 hover:text-accent-green hover:scale-110 transition-transform duration-300 pointer-events-auto cursor-help">
            <Sparkles className="h-10 w-10 md:h-14 md:w-14 fill-current" />
          </div>

          {/* Heading Line 1 */}
          <h1 className="font-sans text-[11vw] md:text-[8vw] font-black uppercase tracking-tighter leading-none text-text-primary-navy/90 text-center">
            FULL STACK
          </h1>

          {/* Centered Starting Slot for the profile image card */}
          <div className="relative flex justify-center py-3 z-30">
            <div 
              id="hero-image-slot"
              className="w-56 h-72 md:w-72 md:h-96 rounded-3xl border-2 border-dashed border-border-light-gray bg-card-white/10 relative pointer-events-none flex items-center justify-center text-text-secondary-gray/10 text-xs font-mono font-semibold"
            >
              [profile_image]
            </div>

            {/* Animating profile image card positioned absolutely on top of the slot on load */}
            <div 
              id="hero-profile-card"
              className="absolute pointer-events-auto z-40 overflow-hidden rounded-3xl border border-border-light-gray/80 bg-card-white p-2 shadow-2xl transition-shadow duration-300 hover:shadow-emerald-950/20"
              style={{ transformStyle: "preserve-3d" }}
            >
              <img 
                src="/branding/my-img.png" 
                alt="Abdul Samad portrait" 
                className="w-full h-full object-cover rounded-2xl bg-primary-gray/20"
              />
            </div>
          </div>

          {/* Heading Line 2 */}
          <h1 className="font-sans text-[11vw] md:text-[8vw] font-black uppercase tracking-tighter leading-none text-text-primary-navy/90 text-center">
            DEVELOPER
          </h1>

          {/* Bottom Right Lightning Bolt */}
          <div className="absolute bottom-4 right-4 md:-right-8 text-text-primary-navy/80 hover:text-accent-green hover:scale-110 transition-transform duration-300 pointer-events-auto cursor-help">
            <Zap className="h-10 w-10 md:h-14 md:w-14 fill-current" />
          </div>

        </div>

      </div>
    </section>
  );
}
