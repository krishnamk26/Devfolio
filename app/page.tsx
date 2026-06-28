import Navbar from '@/src/components/layout/Navbar';
import Footer from '@/src/components/layout/Footer';
import Hero from '@/src/components/sections/Hero';
import About from '@/src/components/sections/About';
import Skills from '@/src/components/sections/Skills';
import Experience from '@/src/components/sections/Experience';
import Projects from '@/src/components/sections/Projects';
import Contact from '@/src/components/sections/Contact';

export default function Page() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] dark:bg-[#07071A] transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}