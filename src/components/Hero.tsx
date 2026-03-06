import { motion } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';
import resumeData from '../data/resume.json';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/60 font-mono">
              Available for Opportunities
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white leading-[0.9]">
            {resumeData.basics.name.split(' ')[0]}<br />
            <span className="text-white/20">{resumeData.basics.name.split(' ')[1]}</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/60 max-w-2xl font-light leading-relaxed">
            {resumeData.basics.title}
          </p>

          <div className="flex flex-wrap gap-4 pt-8">
            <motion.a
              href="#experience"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-xs rounded-full flex items-center gap-2"
            >
              View Experience <ArrowDown size={14} />
            </motion.a>
            <motion.button
              onClick={() => window.print()}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest text-xs rounded-full flex items-center gap-2 hover:bg-white/5 transition-colors"
            >
              Download Resume <Download size={14} />
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/20 font-mono">Scroll</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent"
          />
        </motion.div>
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] -z-10" />
    </section>
  );
}
