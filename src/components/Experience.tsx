import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, Calendar, MapPin, Briefcase } from 'lucide-react';
import resumeData from '../data/resume.json';

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-xs uppercase tracking-[0.4em] text-white/40 font-mono mb-4 block"
            >
              Career Path
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold tracking-tighter text-white"
            >
              Experience<span className="text-white/20">.</span>
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm max-w-md"
          >
            <h3 className="text-sm font-bold text-white mb-2 uppercase tracking-widest">Impact Highlights</h3>
            <p className="text-sm text-white/60 leading-relaxed">
              Orchestrating workflows for 2,000+ participants and achieving Top 1% performance recognition at IIT Delhi.
            </p>
          </motion.div>
        </div>

        <div className="space-y-4">
          {resumeData.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className={`p-8 rounded-3xl border transition-all duration-500 cursor-pointer ${
                  expandedIndex === index
                    ? "bg-white/10 border-white/20 shadow-2xl shadow-white/5"
                    : "bg-white/5 border-white/5 hover:border-white/10"
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white shrink-0">
                      <Briefcase size={20} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white tracking-tight">{exp.role}</h3>
                      <p className="text-white/60 font-medium">{exp.company}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-white/40 uppercase tracking-widest">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      {exp.dates}
                    </div>
                    {exp.location && (
                      <div className="flex items-center gap-2">
                        <MapPin size={14} />
                        {exp.location}
                      </div>
                    )}
                    <motion.div
                      animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                      className="ml-4"
                    >
                      <ChevronDown size={20} />
                    </motion.div>
                  </div>
                </div>

                <AnimatePresence>
                  {expandedIndex === index && exp.bullets.length > 0 && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pt-8 border-t border-white/10 mt-8">
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {exp.bullets.map((bullet, bIdx) => (
                            <li key={bIdx} className="flex gap-4 group/item">
                              <span className="w-1.5 h-1.5 rounded-full bg-white/20 mt-2 shrink-0 group-hover/item:bg-white transition-colors" />
                              <p className="text-sm text-white/60 leading-relaxed group-hover/item:text-white transition-colors">
                                {bullet}
                              </p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
