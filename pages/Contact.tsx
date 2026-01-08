
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', service: 'Full-Stack', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', service: 'Full-Stack', message: '' });
    }, 1500);
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

        <div className="space-y-12">
          <article className="flex items-center gap-8 group">
            <div className="w-12 h-12 border border-white/10 flex items-center justify-center text-blue-500 transition-colors group-hover:border-blue-500">
              <i className="fas fa-paper-plane" aria-hidden="true"></i>
            </div>
            <div>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black mb-1">Direct Email</p>
              <p className="text-xl font-bold text-white uppercase tracking-tighter">muhammadahmer1qw2@gmail.com</p>
            </div>
          </article>
          <article className="flex items-center gap-8 group">
            <div className="w-12 h-12 border border-white/10 flex items-center justify-center text-emerald-500 transition-colors group-hover:border-emerald-500">
              <i className="fab fa-github" aria-hidden="true"></i>
            </div>
            <div>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black mb-1">GitHub Profile</p>
              <p className="text-xl font-bold text-white uppercase tracking-tighter">github.com/Ahmer-kun</p>
            </div>
          </article>
        </div>
      </div>

      <div className="flex-1 bg-white/[0.02] border border-white/10 p-12 md:p-16">
        {submitted ? (
          <div className="text-center py-20 space-y-8 animate-fadeIn" role="alert">
            <div className="w-20 h-20 border border-emerald-500 flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-check text-emerald-500 text-3xl" aria-hidden="true"></i>
            </div>
            <h2 className="text-3xl font-black uppercase tracking-tighter text-white">Message Sent</h2>
            <p className="text-slate-400 uppercase text-xs tracking-widest font-bold">I will get back to you personally within 24 hours.</p>
            <button onClick={() => setSubmitted(false)} className="text-blue-500 font-black uppercase text-xs tracking-widest border-b border-blue-500/30 hover:border-blue-500 pb-1">Send Another</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-2">
              <label htmlFor="full-name" className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Full Name</label>
              <input id="full-name" type="text" required value={formState.name} onChange={(e) => setFormState({...formState, name: e.target.value})} placeholder="Enter your name" className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-blue-500 transition-all text-white placeholder:text-slate-700 font-bold uppercase tracking-widest text-sm" />
            </div>
            <div className="space-y-2">
              <label htmlFor="email-address" className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Email Address</label>
              <input id="email-address" type="email" required value={formState.email} onChange={(e) => setFormState({...formState, email: e.target.value})} placeholder="Email for reply" className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-blue-500 transition-all text-white placeholder:text-slate-700 font-bold uppercase tracking-widest text-sm" />
            </div>
            <div className="space-y-2">
              <label htmlFor="inquiry-type" className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Inquiry Type</label>
              <select id="inquiry-type" value={formState.service} onChange={(e) => setFormState({...formState, service: e.target.value})} className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-blue-500 transition-all text-white font-bold uppercase tracking-widest text-sm appearance-none">
                <option value="Full-Stack" className="bg-[#0a0a0c]">Full-Stack Build</option>
                <option value="Junior-Role" className="bg-[#0a0a0c]">Junior Role / Hiring</option>
                <option value="Collaboration" className="bg-[#0a0a0c]">Collaboration</option>
              </select>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Message</label>
              <textarea id="message" required value={formState.message} onChange={(e) => setFormState({...formState, message: e.target.value})} placeholder="Tell me about your project..." rows={4} className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-blue-500 transition-all text-white resize-none placeholder:text-slate-700 font-bold uppercase tracking-widest text-sm"></textarea>
            </div>
            <button type="submit" disabled={isSubmitting} className="w-full py-6 bg-white text-black font-black uppercase text-xs tracking-[0.4em] hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center gap-4">
              {isSubmitting ? <i className="fas fa-sync fa-spin" aria-hidden="true"></i> : <>Send Message <i className="fas fa-long-arrow-alt-right" aria-hidden="true"></i></>}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
