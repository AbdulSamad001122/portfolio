import { useLayoutEffect, useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PortfolioGrid from './components/PortfolioGrid';
import TweetsSection from './components/TweetsSection';
import AboutMe from './components/AboutMe';
import Tools from './components/Tools';
import ExperienceTimeline from './components/ExperienceTimeline';
import Footer from './components/Footer';
import LatestBlogs from './components/LatestBlogs';
import ProjectDetails from './components/ProjectDetails';
import AllProjects from './components/AllProjects';

gsap.registerPlugin(ScrollTrigger);

function App() {
const containerRef = useRef<HTMLDivElement>(null);

const [currentView, setCurrentView] = useState<'home' | 'projects' | 'project'>(() => {
const hash = window.location.hash;
if (hash.startsWith('#/project/')) return 'project';
if (hash === '#/projects') return 'projects';
return 'home';
});

const [currentProject, setCurrentProject] = useState<string | null>(() => {
const hash = window.location.hash;
return hash.startsWith('#/project/') ? hash.replace('#/project/', '') : null;
});

useEffect(() => {
const handleHashChange = () => {
const hash = window.location.hash;
if (hash.startsWith('#/project/')) {
setCurrentView('project');
setCurrentProject(hash.replace('#/project/', ''));
} else if (hash === '#/projects') {
setCurrentView('projects');
setCurrentProject(null);
} else {
setCurrentView('home');
setCurrentProject(null);
}
};
window.addEventListener('hashchange', handleHashChange);
return () => window.removeEventListener('hashchange', handleHashChange);
}, []);



const handleBackToHome = () => {
window.location.hash = '';
};

useLayoutEffect(() => {
let ctx = gsap.context(() => {
const initScrollAnimations = () => {
      // Signature draw animation
      gsap.fromTo("#canvas-strokes path", 
        { strokeDasharray: 300, strokeDashoffset: 300 },
        { 
          strokeDashoffset: 0, 
          ease: "power1.out",
          scrollTrigger: {
            trigger: "#about",
            start: "top 65%",
            end: "top 45%",
            scrub: 1
          }
        }
      );

// Global reveal-up animation for section contents
gsap.utils.toArray('.reveal-up').forEach((elem: any) => {
gsap.fromTo(elem, 
{ y: 30, opacity: 0 },
{ 
y: 0, 
opacity: 1, 
duration: 0.8,
ease: "power2.out",
scrollTrigger: {
trigger: elem,
start: "top 85%",
toggleActions: "play none none reverse"
}
}
);
});

// Global cascade (staggered) animation for lists and grids
gsap.utils.toArray('.reveal-cascade-container').forEach((containerItem: any) => {
const items = containerItem.querySelectorAll('.reveal-cascade-item');
if (items.length > 0) {
gsap.fromTo(items,
{ y: 25, opacity: 0 },
{
y: 0,
opacity: 1,
duration: 0.6,
stagger: 0.1,
ease: "power2.out",
scrollTrigger: {
trigger: containerItem,
start: "top 80%",
toggleActions: "play none none reverse"
}
}
);
}
});

// Portfolio items fade-only cascade to prevent layout coordinate shifts
gsap.utils.toArray('.reveal-portfolio-container').forEach((containerItem: any) => {
const items = containerItem.querySelectorAll('.reveal-portfolio-item');
if (items.length > 0) {
gsap.fromTo(items,
{ opacity: 0 },
{
opacity: 1,
duration: 0.6,
stagger: 0.1,
ease: "power2.out",
scrollTrigger: {
trigger: containerItem,
start: "top 80%",
toggleActions: "play none none reverse"
}
}
);
}
});
};

setTimeout(initScrollAnimations, 100);

const handleResize = () => {
ScrollTrigger.getAll().forEach(trigger => trigger.kill());
initScrollAnimations();
};
window.addEventListener('resize', handleResize);

return () => {
window.removeEventListener('resize', handleResize);
};
}, containerRef);

return () => ctx.revert();
}, []);

if (currentView === 'project' && currentProject) {
return <ProjectDetails projectId={currentProject} onBack={handleBackToHome} />;
}

if (currentView === 'projects') {
return <AllProjects />;
}

return (
<div ref={containerRef} className="relative min-h-screen bg-primary-gray font-sans text-text-primary-navy">
{/* Structural layout vertical border grid lines */}
<div className="absolute left-[3%] right-[3%] md:left-[5%] md:right-[5%] top-0 bottom-0 pointer-events-none border-x border-border-light-gray opacity-50 z-0">
<div className="absolute top-10 -left-1.5 h-3 w-3 rounded-full bg-border-light-gray" />
<div className="absolute top-10 -right-1.5 h-3 w-3 rounded-full bg-border-light-gray" />
</div>

<div className="relative z-10 flex flex-col min-h-screen">
<Navbar />
<Hero />
<AboutMe />
<PortfolioGrid />
<Tools />
<ExperienceTimeline />
<TweetsSection />
<LatestBlogs />
<Footer />
</div>

{/* Mockup cards overlay removed in favor of static stack in Hero */}
</div>
);
}

export default App;
