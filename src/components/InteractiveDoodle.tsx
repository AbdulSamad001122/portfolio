import { useEffect, useRef, useState } from 'react';

export default function InteractiveDoodle() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    // Mouse state
    const mouse = { x: -1000, y: -1000, active: false };

    // Drawing trails
    interface LinePoint {
      x: number;
      y: number;
      life: number;
    }
    let drawPoints: LinePoint[] = [];

    // Particles
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      life: number;
      maxLife: number;
    }
    let particles: Particle[] = [];

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;

      // Spawn particles
      if (Math.random() < 0.45) {
        particles.push({
          x: mouse.x,
          y: mouse.y,
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5,
          size: Math.random() * 2 + 1.2,
          life: 65,
          maxLife: 65
        });
      }

      // If mouse is drawing
      if (isDrawing) {
        drawPoints.push({ x: mouse.x, y: mouse.y, life: 100 });
      }
    };

    const handleMouseEnter = () => { mouse.active = true; };
    const handleMouseLeave = () => { 
      mouse.active = false; 
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleMouseDown = () => { setIsDrawing(true); };
    const handleMouseUp = () => { setIsDrawing(false); };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseenter', handleMouseEnter);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mouseup', handleMouseUp);

    // Grid details
    const gridSize = 40;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw blueprint grid intersections (+)
      ctx.strokeStyle = 'rgba(15, 23, 42, 0.08)'; // Faded navy outline
      ctx.lineWidth = 1;
      
      const cols = Math.floor(width / gridSize);
      const rows = Math.floor(height / gridSize);

      for (let c = 1; c < cols; c++) {
        for (let r = 1; r < rows; r++) {
          const x = c * gridSize;
          const y = r * gridSize;

          const dx = mouse.x - x;
          const dy = mouse.y - y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          ctx.save();
          ctx.translate(x, y);

          // Interaction: Rotate and change color near mouse
          if (dist < 100 && mouse.active) {
            const angle = Math.atan2(dy, dx);
            ctx.rotate(angle + Math.PI / 2);
            
            // Fade to green based on distance
            const factor = 1 - dist / 100;
            ctx.strokeStyle = `rgba(0, 102, 61, ${0.1 + factor * 0.45})`; // Accent green shade
            ctx.lineWidth = 1.5;
            
            // Draw slightly larger crosshair
            const size = 4 + factor * 4;
            ctx.beginPath();
            ctx.moveTo(-size, 0);
            ctx.lineTo(size, 0);
            ctx.moveTo(0, -size);
            ctx.lineTo(0, size);
            ctx.stroke();
          } else {
            ctx.strokeStyle = 'rgba(15, 23, 42, 0.08)';
            // Standard small plus
            ctx.beginPath();
            ctx.moveTo(-3, 0);
            ctx.lineTo(3, 0);
            ctx.moveTo(0, -3);
            ctx.lineTo(0, 3);
            ctx.stroke();
          }

          ctx.restore();
        }
      }

      // 2. Draw user sketch trail
      if (drawPoints.length > 0) {
        ctx.beginPath();
        for (let i = 1; i < drawPoints.length; i++) {
          const pt1 = drawPoints[i - 1];
          const pt2 = drawPoints[i];
          const opacity = Math.min(pt1.life, pt2.life) / 100;
          
          ctx.strokeStyle = `rgba(0, 102, 61, ${opacity * 0.6})`;
          ctx.lineWidth = 2.5;
          ctx.lineCap = 'round';
          ctx.moveTo(pt1.x, pt1.y);
          ctx.lineTo(pt2.x, pt2.y);
          ctx.stroke();
        }

        // Decay points
        drawPoints.forEach(pt => pt.life -= 1.5);
        drawPoints = drawPoints.filter(pt => pt.life > 0);
      }

      // 3. Update & Draw particles
      particles.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life--;

        const opacity = p.life / p.maxLife;
        ctx.fillStyle = `rgba(0, 102, 61, ${opacity * 0.5})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Connect nearby particles with lines
        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 60) {
            ctx.strokeStyle = `rgba(0, 102, 61, ${(1 - dist/60) * opacity * 0.25})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      particles = particles.filter(p => p.life > 0);

      // Draw cursor pointer glow
      if (mouse.active) {
        const glow = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 45);
        glow.addColorStop(0, 'rgba(0, 102, 61, 0.08)');
        glow.addColorStop(1, 'rgba(0, 102, 61, 0)');
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 45, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (canvas) {
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseenter', handleMouseEnter);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
        canvas.removeEventListener('mousedown', handleMouseDown);
        canvas.removeEventListener('mouseup', handleMouseUp);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDrawing]);

  return (
    <div ref={containerRef} className="w-full max-w-5xl mt-10 relative">
      {/* Decorative Canvas container */}
      <div className="w-full h-32 md:h-36 rounded-2xl border border-dashed border-border-light-gray bg-card-white/30 backdrop-blur-[1px] relative overflow-hidden select-none">
        
        {/* Canvas for rendering doodle nodes */}
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 w-full h-full block cursor-crosshair z-20 pointer-events-auto"
        />

        {/* Text Guidelines overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10 text-center font-mono text-[9px] md:text-[10px] uppercase tracking-widest text-text-secondary-gray/50 gap-1.5">
          <div className="font-bold flex items-center gap-1.5 text-text-primary-navy/80">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-green animate-pulse" />
            SYSTEM DESIGN DOODLE BOARD ACTIVE
          </div>
          <div className="text-[8px] md:text-[9px] opacity-75">
            [ Draw architecture trails • Click & Drag to sketch nodes ]
          </div>
        </div>

      </div>
    </div>
  );
}
