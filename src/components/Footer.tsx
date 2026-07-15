import { useState } from 'react';
import { ArrowRight, Linkedin, Github, CheckCircle2, AlertCircle } from 'lucide-react';

// Paste your Discord Webhook URL here:
const DISCORD_WEBHOOK_URL = import.meta.env.VITE_DISCORD_WEBHOOK_URL || 'YOUR_DISCORD_WEBHOOK_URL';

export default function Footer() {
  const [formData, setFormData] = useState({ name: '', email: '', contactMethod: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('submitting');

    if (!DISCORD_WEBHOOK_URL || DISCORD_WEBHOOK_URL === 'YOUR_DISCORD_WEBHOOK_URL') {
      setStatus('error');
      setMessage('Discord Webhook URL is not configured. Please paste your webhook URL at the top of Footer.tsx or in a .env file.');
      return;
    }

    const payload = {
      username: "Portfolio Bot",
      avatar_url: "https://api.dicebear.com/7.x/bottts/png?seed=portfolio",
      embeds: [
        {
          title: "📩 New Portfolio Contact Submission",
          color: 34130, // HSL Accent Green: #008552 in decimal
          fields: [
            {
              name: "👤 Name",
              value: formData.name,
              inline: true
            },
            {
              name: "✉️ Email",
              value: formData.email,
              inline: true
            },
            {
              name: "📞 Preferred Contact Method",
              value: formData.contactMethod || "Not specified",
              inline: false
            },
            {
              name: "💬 Message",
              value: formData.message
            }
          ],
          timestamp: new Date().toISOString()
        }
      ]
    };

    try {
      const response = await fetch(DISCORD_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        setStatus('success');
        setMessage(`Thank you! I will contact you on your preferred contact method: ${formData.contactMethod}`);
        setFormData({ name: '', email: '', contactMethod: '', message: '' });
      } else {
        setStatus('error');
        setMessage('Failed to send message to Discord. Please verify your webhook URL.');
      }
    } catch (err) {
      setStatus('error');
      setMessage('Failed to send message. Please check your internet connection.');
    }
  };

  return (
    <footer id="contact" className="relative w-full bg-card-white border-t border-border-light-gray px-6 py-16 overflow-hidden">
      
      {/* Background blueprint decorative lines */}
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[linear-gradient(to_right,hsl(220,10%,89%)_1px,transparent_1px),linear-gradient(to_bottom,hsl(220,10%,89%)_1px,transparent_1px)] bg-size-[4rem_4rem]" />

      <div className="mx-auto max-w-7xl relative z-10 text-center flex flex-col items-center">
        
        {/* Heading CTA */}
        <h2 className="font-sans text-3xl font-extrabold text-text-primary-navy md:text-5xl max-w-xl leading-tight">
          Let's collaborate and craft your vision
        </h2>

        {/* Contact Form */}
        <form onSubmit={onSubmit} className="w-full max-w-xl mt-10 flex flex-col gap-5 text-left">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-text-primary-navy">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              className="w-full px-5 py-4 rounded-2xl border border-border-light-gray bg-primary-gray/50 focus:bg-card-white focus:border-accent-green outline-none text-sm font-medium transition-all duration-300"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-text-primary-navy">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              className="w-full px-5 py-4 rounded-2xl border border-border-light-gray bg-primary-gray/50 focus:bg-card-white focus:border-accent-green outline-none text-sm font-medium transition-all duration-300"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="contactMethod" className="text-xs font-bold uppercase tracking-wider text-text-primary-navy">
              How should I contact you?
            </label>
            <input
              type="text"
              id="contactMethod"
              name="contactMethod"
              value={formData.contactMethod}
              onChange={handleChange}
              placeholder="E.g., Discord handle, WhatsApp number, Twitter handle, or Email"
              required
              className="w-full px-5 py-4 rounded-2xl border border-border-light-gray bg-primary-gray/50 focus:bg-card-white focus:border-accent-green outline-none text-sm font-medium transition-all duration-300"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-text-primary-navy">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="What are we building?"
              required
              rows={4}
              className="w-full px-5 py-4 rounded-2xl border border-border-light-gray bg-primary-gray/50 focus:bg-card-white focus:border-accent-green outline-none text-sm font-medium transition-all duration-300 resize-none"
            />
          </div>

          {/* Feedback messages */}
          {status === 'success' && (
            <div className="flex items-center gap-2 rounded-2xl bg-accent-green-light/30 border border-accent-green/20 px-5 py-4 text-sm font-semibold text-accent-green">
              <CheckCircle2 size={18} className="shrink-0" />
              <span>{message}</span>
            </div>
          )}

          {status === 'error' && (
            <div className="flex items-center gap-2 rounded-2xl bg-red-50 border border-red-200 px-5 py-4 text-sm font-semibold text-red-600">
              <AlertCircle size={18} className="shrink-0" />
              <span>{message}</span>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="group flex items-center justify-center gap-3 rounded-full bg-text-primary-navy px-8 py-5 text-sm font-bold text-card-white shadow-md hover:bg-accent-green hover:shadow-lg disabled:bg-text-secondary-gray/50 transition-all duration-300 cursor-pointer"
          >
            {status === 'submitting' ? 'Sending message...' : "Submit this form"}
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-card-white/20 transition-transform group-hover:translate-x-1">
              <ArrowRight size={14} />
            </span>
          </button>
        </form>

        {/* Main Footer Links */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm font-semibold text-text-secondary-gray">
          <a href="#about" className="hover:text-accent-green transition-colors">About</a>
          <a href="#portfolio" className="hover:text-accent-green transition-colors">Portfolio</a>
          <a href="#tech-stack" className="hover:text-accent-green transition-colors">Tech Stack</a>
          <a href="#mindset" className="hover:text-accent-green transition-colors">Mindset</a>
          <a href="#tweets" className="hover:text-accent-green transition-colors">Tweets</a>
          <a href="#blogs" className="hover:text-accent-green transition-colors">Blogs</a>
        </div>

        {/* Separator line */}
        <div className="w-full max-w-5xl h-px bg-border-light-gray my-10" />

        {/* Bottom Bar: Socials & Copyright */}
        <div className="w-full max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-semibold text-text-secondary-gray">
          
          {/* Social icons */}
          <div className="flex items-center gap-5">
            <a href="https://x.com/thesamadcodes" target="_blank" rel="noopener noreferrer" className="hover:text-accent-green transition-colors flex items-center justify-center">
              <svg className="h-[15px] w-[15px] fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="https://github.com/AbdulSamad001122" target="_blank" rel="noopener noreferrer" className="hover:text-accent-green transition-colors">
              <Github size={16} />
            </a>
            <a href="https://www.linkedin.com/in/abdulsamadcodes/" target="_blank" rel="noopener noreferrer" className="hover:text-accent-green transition-colors">
              <Linkedin size={16} />
            </a>
          </div>

          {/* Copyright */}
          <p>© {new Date().getFullYear()} Abdul Samad. All rights reserved.</p>

        </div>

      </div>
    </footer>
  );
}
