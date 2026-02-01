
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'framer-motion';
import { MessageCircle, Sparkles } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ArtClassesSection from './components/ArtClassesSection';
import Gallery from './components/Gallery';
import YouTubeSection from './components/YouTubeSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIArtAssistant from './components/AIArtAssistant';
import { PaintSplatterSVG } from './constants';

const LoadingScreen = () => (
  <motion.div 
    initial={{ opacity: 1 }}
    exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
    transition={{ duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }}
    className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center overflow-hidden"
  >
    <div className="relative mb-12">
      <motion.div 
        animate={{ 
          rotate: 360,
          scale: [1, 1.3, 1],
          borderRadius: ["30%", "50%", "30%"]
        }}
        transition={{ 
          rotate: { duration: 10, repeat: Infinity, ease: "linear" },
          scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
        }}
        className="w-40 h-40 border-8 border-gray-50 border-t-[#FF6B6B] border-r-[#4ECDC4] flex items-center justify-center shadow-inner"
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0, rotate: -45 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        className="absolute inset-0 flex items-center justify-center font-artistic text-7xl text-[#FF6B6B] drop-shadow-lg"
      >
        T
      </motion.div>
    </div>
    
    <div className="w-80 h-1.5 bg-gray-50 rounded-full overflow-hidden relative shadow-inner">
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 2.5, ease: "easeInOut" }}
        className="absolute h-full bg-gradient-to-r from-[#FF6B6B] via-[#FFE66D] to-[#4ECDC4]"
      />
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="mt-8 flex items-center space-x-3 text-[#2C3E50]/40 font-black uppercase tracking-[0.5em] text-[10px]"
    >
      <Sparkles size={16} className="text-[#FFE66D]" />
      <span>Designing Your Canvas</span>
    </motion.div>

    <motion.div 
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 0.03, scale: 3 }}
      className="absolute -z-10"
    >
      <PaintSplatterSVG color="#FF6B6B" className="w-[1000px] h-[1000px]" />
    </motion.div>
  </motion.div>
);

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FF6B6B] via-[#FFE66D] to-[#4ECDC4] z-[70] origin-left shadow-lg"
      style={{ scaleX }}
    />
  );
};

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  
  // Subtle 3D tilt of the entire body on scroll
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 5]);
  const perspectiveSpring = useSpring(1200);
  const perspective = useTransform(perspectiveSpring, (v) => `${v}px`);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#FDFBF7] selection:bg-[#FF6B6B]/30">
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          style={{ perspective }}
        >
          <ScrollProgress />
          <Navbar />
          
          <motion.main 
            style={{ rotateX, transformOrigin: "top" }}
            className="three-d-container"
          >
            <Hero />
            <About />
            <ArtClassesSection />
            <YouTubeSection />
            <Gallery />
            <Contact />
          </motion.main>

          <Footer />

          {/* Floating WhatsApp Button */}
          <motion.a
            href="https://wa.me/919123456789"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 15, y: -5 }}
            whileTap={{ scale: 0.9 }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 3 }}
            className="fixed bottom-10 right-10 w-20 h-20 bg-[#25D366] text-white rounded-full shadow-[0_20px_40px_rgba(37,211,102,0.4)] flex items-center justify-center z-40 hover:bg-[#20ba5a] transition-all clickable"
          >
            <MessageCircle size={40} />
          </motion.a>

          {/* AI Assistant */}
          <AIArtAssistant />
        </motion.div>
      )}
    </div>
  );
};

export default App;
