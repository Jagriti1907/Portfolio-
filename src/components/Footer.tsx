import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Globe, Instagram } from 'lucide-react';
import resumeData from '../data/resume.json';

export default function Footer() {
  return (
    <footer className="py-32 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-8"
            >
              Let's build<br />
              <span className="text-white/20">something great.</span>
            </motion.h2>
            
            <div className="space-y-6">
              <a href={`mailto:${resumeData.basics.email}`} className="flex items-center gap-4 text-xl text-white/60 hover:text-white transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  <Mail size={20} />
                </div>
                {resumeData.basics.email}
              </a>
              <a href={`tel:${resumeData.basics.phone}`} className="flex items-center gap-4 text-xl text-white/60 hover:text-white transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  <Phone size={20} />
                </div>
                {resumeData.basics.phone}
              </a>
              <div className="flex items-center gap-4 text-xl text-white/60">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                {resumeData.basics.location}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-xs uppercase tracking-[0.4em] text-white/40 font-mono">Social</h3>
              <div className="flex flex-col gap-4">
                {resumeData.basics.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-lg text-white/60 hover:text-white transition-colors flex items-center gap-2"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-xs uppercase tracking-[0.4em] text-white/40 font-mono">Personal</h3>
              <div className="space-y-8">
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-white/20 mb-2">Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {resumeData.extra.languages.map((lang, index) => (
                      <span key={index} className="text-xs text-white/60">
                        {lang.name} <span className="text-[10px] opacity-40">({lang.level})</span>
                        {index < resumeData.extra.languages.length - 1 && ","}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-white/20 mb-2">Interests</h4>
                  <div className="flex flex-wrap gap-2">
                    {resumeData.extra.interests.map((interest, index) => (
                      <span key={index} className="text-xs text-white/60">
                        {interest}{index < resumeData.extra.interests.length - 1 && " • "}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-xs text-white/20 font-mono uppercase tracking-widest">
            © 2026 Jagriti Singh. Built with Engineering Precision.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-xs text-white/20 hover:text-white transition-colors uppercase tracking-widest font-mono">Privacy</a>
            <a href="#" className="text-xs text-white/20 hover:text-white transition-colors uppercase tracking-widest font-mono">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
