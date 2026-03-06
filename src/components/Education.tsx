import { motion } from 'framer-motion';
import { GraduationCap, Award, ShieldCheck } from 'lucide-react';
import resumeData from '../data/resume.json';

export default function Education() {
  return (
    <section id="education" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Education */}
          <div>
            <div className="mb-12">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-xs uppercase tracking-[0.4em] text-white/40 font-mono mb-4 block"
              >
                Academic
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold tracking-tighter text-white"
              >
                Education<span className="text-white/20">.</span>
              </motion.h2>
            </div>

            <div className="space-y-12">
              {resumeData.education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-12 border-l border-white/10"
                >
                  <div className="absolute left-0 top-0 -translate-x-1/2 w-8 h-8 rounded-full bg-black border border-white/20 flex items-center justify-center text-white">
                    <GraduationCap size={14} />
                  </div>
                  <div className="space-y-2">
                    <span className="text-xs font-mono text-white/40 uppercase tracking-widest">{edu.dates}</span>
                    <h3 className="text-xl font-bold text-white tracking-tight">{edu.institution}</h3>
                    <p className="text-white/60 font-medium">{edu.degree}</p>
                    {edu.details && <p className="text-sm text-white/40">{edu.details}</p>}
                    {edu.courses && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {edu.courses.map((course, cIdx) => (
                          <span key={cIdx} className="text-[10px] uppercase tracking-widest text-white/30 px-2 py-1 rounded border border-white/5">
                            {course}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications & Awards */}
          <div className="space-y-20">
            {/* Certifications */}
            <div>
              <div className="mb-12">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-4xl md:text-5xl font-bold tracking-tighter text-white"
                >
                  Certifications<span className="text-white/20">.</span>
                </motion.h2>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {resumeData.certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-4 group hover:bg-white/10 transition-colors"
                  >
                    <ShieldCheck size={18} className="text-white/40 group-hover:text-white transition-colors" />
                    <span className="text-sm text-white/60 group-hover:text-white transition-colors">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Awards */}
            <div>
              <div className="mb-12">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-4xl md:text-5xl font-bold tracking-tighter text-white"
                >
                  Awards<span className="text-white/20">.</span>
                </motion.h2>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {resumeData.awards.map((award, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-4 group hover:bg-white/10 transition-colors"
                  >
                    <Award size={18} className="text-white/40 group-hover:text-white transition-colors" />
                    <span className="text-sm text-white/60 group-hover:text-white transition-colors">{award}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
