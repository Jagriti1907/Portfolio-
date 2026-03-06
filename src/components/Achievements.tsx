import { motion } from 'framer-motion';
import { Trophy, Star, Target, Award } from 'lucide-react';
import resumeData from '../data/resume.json';

const iconMap: Record<string, any> = {
  "2x National Hackathon Finalist": Trophy,
  "Diamond Performer": Star,
  "District Rank 1": Target,
  "Top 4 | HCL GUVI": Award,
  "Global Rank #395": Target,
  "10,018 Credits": Star,
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-32 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-xs uppercase tracking-[0.4em] text-white/40 font-mono mb-4 block"
          >
            Milestones
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter text-white"
          >
            Achievements<span className="text-white/20">.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resumeData.achievements.map((item, index) => {
            const Icon = iconMap[item.title] || Award;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative p-10 rounded-[2.5rem] bg-white/5 border border-white/10 overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/10 transition-colors" />
                
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform">
                  <Icon size={28} />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight leading-tight">
                  {item.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  {item.context}
                </p>

                <div className="mt-8 flex items-center gap-2">
                  <div className="h-[1px] flex-1 bg-white/10" />
                  <span className="text-[10px] uppercase tracking-[0.3em] text-white/20 font-mono">Verified</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Top 3 Impact Strip */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 p-12 rounded-[3rem] bg-white text-black flex flex-col md:flex-row items-center justify-around gap-12 text-center"
        >
          <div className="space-y-2">
            <span className="text-4xl font-black tracking-tighter">Top 1%</span>
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-60">IIT Delhi Performance</p>
          </div>
          <div className="w-[1px] h-12 bg-black/10 hidden md:block" />
          <div className="space-y-2">
            <span className="text-4xl font-black tracking-tighter">2,000+</span>
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-60">Developers Impacted</p>
          </div>
          <div className="w-[1px] h-12 bg-black/10 hidden md:block" />
          <div className="space-y-2">
            <span className="text-4xl font-black tracking-tighter">2×</span>
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-60">National Hackathon Finalist</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
