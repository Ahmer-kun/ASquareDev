import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ 
    name: '', 
    email: '', 
    service: 'Full-Stack', 
    message: '' 
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    // Basic validation
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setError('Please fill in all required fields');
      setIsSubmitting(false);
      return;
    }
    
    if (!formRef.current) {
      setError('Form error. Please try again.');
      setIsSubmitting(false);
      return;
    }
    
    try {
      // EmailJS configuration - Using environment variables
      const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      
      const result = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      );
      
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', service: 'Full-Stack', message: '' });
      
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
      
    } catch (error: any) {
      console.error('Email failed:', error);
      setIsSubmitting(false);
      setError(error.text || 'Failed to send message. Please email me directly at muhammadahmer1qw2@gmail.com');
      
      setTimeout(() => {
        setError(null);
      }, 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [id === 'full-name' ? 'name' : 
       id === 'email-address' ? 'email' :
       id === 'inquiry-type' ? 'service' : 'message']: value
    }));
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-24 flex flex-col lg:flex-row gap-24" aria-labelledby="contact-heading">
      <div className="flex-1 space-y-16">
        <header className="space-y-8">
          <h1 id="contact-heading" className="text-6xl md:text-9xl font-black tracking-tighter uppercase text-white leading-none">Connect</h1>
          <div className="h-2 w-32 bg-blue-600" aria-hidden="true"></div>
          <p className="text-slate-400 text-xl leading-relaxed max-w-md font-medium">
            Let's discuss how I, Ahmer Amir, can help bring your ideas to life. I personally review every message.
          </p>
        </header>

        {/* Trust Signals */}
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
              <i className="fas fa-bolt text-emerald-500"></i>
            </div>
            <div>
              <p className="font-black text-white uppercase text-sm">Response within 24 hours</p>
              <p className="text-slate-500 text-xs">Guaranteed reply to every message</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
              <i className="fas fa-check-circle text-blue-500"></i>
            </div>
            <div>
              <p className="font-black text-white uppercase text-sm">No spam. No pressure.</p>
              <p className="text-slate-500 text-xs">Just honest conversation about your project</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center">
              <i className="fas fa-code text-purple-500"></i>
            </div>
            <div>
              <p className="font-black text-white uppercase text-sm">10+ projects built</p>
              <p className="text-slate-500 text-xs">From HTML/CSS to full-stack and DApps</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 bg-white/[0.02] border border-white/10 p-12 md:p-16">
        {error && (
          <div className="mb-6 p-4 border border-red-500/30 bg-red-500/10 rounded animate-fade-in-up">
            <p className="text-red-400 text-sm font-bold uppercase tracking-wider flex items-center">
              <i className="fas fa-exclamation-circle mr-2"></i>
              {error}
            </p>
          </div>
        )}
        
        {submitted ? (
          <div className="text-center py-20 space-y-8 animate-fade-in-up" role="alert">
            <div className="w-20 h-20 border border-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-check text-emerald-500 text-3xl" aria-hidden="true"></i>
            </div>
            <h2 className="text-3xl font-black uppercase tracking-tighter text-white">Message Sent!</h2>
            <p className="text-slate-400 uppercase text-xs tracking-widest font-bold">
              I've received your message and will get back to you within 24 hours.
            </p>
            <p className="text-blue-500 text-[10px] font-bold uppercase tracking-widest">
              Check your email for confirmation.
            </p>
            <button 
              onClick={() => setSubmitted(false)} 
              className="text-blue-500 font-black uppercase text-xs tracking-widest border-b border-blue-500/30 hover:border-blue-500 pb-1 transition-all mt-8"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-2">
              <label htmlFor="full-name" className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">
                Full Name *
              </label>
              <input 
                id="full-name" 
                name="name"
                type="text" 
                required 
                value={formState.name} 
                onChange={handleChange}
                placeholder="Enter your name" 
                className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-blue-500 transition-all text-white placeholder:text-slate-700 font-bold uppercase tracking-widest text-sm"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email-address" className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">
                Email Address *
              </label>
              <input 
                id="email-address" 
                name="email"
                type="email" 
                required 
                value={formState.email} 
                onChange={handleChange}
                placeholder="your.email@example.com" 
                className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-blue-500 transition-all text-white placeholder:text-slate-700 font-bold uppercase tracking-widest text-sm"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="inquiry-type" className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">
                Inquiry Type
              </label>
              <select 
                id="inquiry-type" 
                name="service_type"
                value={formState.service} 
                onChange={handleChange}
                className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-blue-500 transition-all text-white font-bold uppercase tracking-widest text-sm appearance-none cursor-pointer"
              >
                <option value="Full-Stack" className="bg-[#0a0a0c]">Full-Stack Build</option>
                <option value="Junior-Role" className="bg-[#0a0a0c]">Junior Role / Hiring</option>
                <option value="Collaboration" className="bg-[#0a0a0c]">Collaboration</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">
                Message *
              </label>
              <textarea 
                id="message" 
                name="message"
                required 
                value={formState.message} 
                onChange={handleChange}
                placeholder="Tell me about your project, timeline, and budget..." 
                rows={5} 
                className="w-full bg-transparent border border-white/10 rounded p-4 focus:outline-none focus:border-blue-500 transition-all text-white resize-none placeholder:text-slate-700 font-bold uppercase tracking-widest text-sm"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full py-6 bg-white text-black font-black uppercase text-xs tracking-[0.4em] hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center gap-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <i className="fas fa-circle-notch fa-spin" aria-hidden="true"></i>
                  SENDING...
                </>
              ) : (
                <>
                  SEND MESSAGE 
                  <i className="fas fa-paper-plane ml-2" aria-hidden="true"></i>
                </>
              )}
            </button>
            
            <p className="text-slate-600 text-xs text-center font-bold uppercase tracking-widest pt-4 border-t border-white/10">
              * Required fields. Response time: 12-24 hours.
            </p>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;