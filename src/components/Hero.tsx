
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 pb-0 md:py-0">
      <div className="container-custom grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-center">
        <div className="md:col-span-3 animate-slideInFromLeft" style={{ animationDelay: "0.2s" }}>
          <p className="text-highlight font-mono mb-3">Hi there, I'm</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-5">
            Rohan Patankar
          </h1>
          <h2 className="text-2xl md:text-3xl text-foreground/70 mb-8 font-light">
            Senior MLOps Engineer @ skima.ai && 
            <br className="hidden md:block" /> Lead MLOps Engineer @ tarang.ai(MLx)
          </h2>
          
          <div className="flex flex-wrap gap-3 mb-8">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noreferrer"
              className="bg-dark-accent/50 hover:bg-dark-accent text-foreground/80 hover:text-highlight p-3 rounded-full transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noreferrer"
              className="bg-dark-accent/50 hover:bg-dark-accent text-foreground/80 hover:text-highlight p-3 rounded-full transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noreferrer"
              className="bg-dark-accent/50 hover:bg-dark-accent text-foreground/80 hover:text-highlight p-3 rounded-full transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a 
              href="mailto:contact@example.com" 
              className="bg-dark-accent/50 hover:bg-dark-accent text-foreground/80 hover:text-highlight p-3 rounded-full transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
          
          <Button 
            className="bg-highlight hover:bg-highlight-alt text-primary-foreground px-8 py-6"
            asChild
          >
            <a href="#about">About me</a>
          </Button>
        </div>
        
        <div className="md:col-span-2 flex justify-center md:justify-end animate-slideInFromRight" style={{ animationDelay: "0.4s" }}>
          <div className="relative">
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-lg border-2 border-highlight p-2 overflow-hidden">
              <div className="w-full h-full bg-dark-accent rounded-md overflow-hidden">
                <img
                  src="/lovable-uploads/20ea36c5-d43e-4267-8e57-3f23c3213df0.png"
                  alt="Rohan Patankar"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
            <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-highlight-alt rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
