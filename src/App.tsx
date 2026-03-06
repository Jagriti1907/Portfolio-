import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import AnimatedBackground from './components/AnimatedBackground';
import SplashScreen from './components/SplashScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <AnimatedBackground />
      
      <AnimatePresence mode="wait">
        {loading ? (
          <SplashScreen key="splash" onComplete={() => setLoading(false)} />
        ) : (
          <div key="content" className="relative">
            <Navbar />
            <main>
              <Hero />
              <Experience />
              <Achievements />
              <Projects />
              <Skills />
              <Education />
            </main>
            <Footer />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
