import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import resumeData from '../data/resume.json';

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-xs uppercase tracking-[0.4em] text-white/40 font-mono mb-4 block"
          >
            Featured Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter text-white"
          >
            Projects<span className="text-white/20">.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {resumeData.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group relative"
            >
              <div className="relative aspect-video rounded-[2.5rem] overflow-hidden bg-white/5 border border-white/10 mb-8">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <h3 className="text-4xl font-bold text-white mb-4 tracking-tighter">{project.title}</h3>
                    <div className="flex flex-wrap justify-center gap-2">
                      {project.stack.split(', ').map((tech, tIdx) => (
                        <span key={tIdx} className="px-3 py-1 rounded-full bg-white/10 text-[10px] uppercase tracking-widest text-white/60">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6 px-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-white/40 uppercase tracking-widest">{project.location}</span>
                  <div className="flex gap-4">
                    {project.links.map((link, lIdx) => (
                      <a
                        key={lIdx}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-full bg-white/5 text-white hover:bg-white hover:text-black transition-all"
                      >
                        {link.name === 'Github' ? <Github size={18} /> : <ExternalLink size={18} />}
                      </a>
                    ))}
                  </div>
                </div>

                <ul className="space-y-4">
                  {project.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex gap-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/20 mt-2 shrink-0" />
                      <p className="text-sm text-white/60 leading-relaxed">{bullet}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
