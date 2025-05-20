
import { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';
import Quote from '@/components/Quote';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    const animatedElements = document.querySelectorAll('.animated-element');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px',
      threshold: 0.15,
    });
    
    animatedElements.forEach((el) => {
      observer.observe(el);
    });
    
    return () => {
      animatedElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);
  
  return (
    <div className="bg-black text-foreground min-h-screen">
      <NavBar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Certifications />
        <Quote />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
