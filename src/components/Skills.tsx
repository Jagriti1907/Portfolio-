import { motion } from 'framer-motion';
import resumeData from '../data/resume.json';

export default function Skills() {
  const categories = [
    { title: "Design", items: resumeData.skills.design },
    { title: "Tools", items: resumeData.skills.tools },
    { title: "Tech", items: resumeData.skills.tech },
    { title: "Workflow", items: resumeData.skills.workflow },
    { title: "Management", items: resumeData.skills.management },
  ];

  return (
    <section id="skills" className="py-32 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-xs uppercase tracking-[0.4em] text-white/40 font-mono mb-4 block"
          >
            Capabilities
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter text-white"
          >
            Skill Set<span className="text-white/20">.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="space-y-8"
            >
              <h3 className="text-sm font-bold text-white uppercase tracking-[0.3em] border-b border-white/10 pb-4">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {cat.items.map((skill, sIdx) => (
                  <motion.span
                    key={sIdx}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                    className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-sm text-white/60 transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
