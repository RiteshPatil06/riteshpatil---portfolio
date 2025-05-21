
import { Github, Linkedin, Mail, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-darker py-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Ritesh Patil</h3>
            <p className="text-muted-foreground">
              ML Engineer with specialization in Deep learning and Generative AI.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/RiteshPatil06" 
                target="_blank" 
                rel="noreferrer"
                className="text-foreground/60 hover:text-highlight transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a 
                href="https://linkedin.com/in/riteshpatil4016" 
                target="_blank" 
                rel="noreferrer"
                className="text-foreground/60 hover:text-highlight transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://instagram.com/dishkiiyaoonn" 
                target="_blank" 
                rel="noreferrer"
                className="text-foreground/60 hover:text-highlight transition-colors"
                aria-label="Twitter"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="mailto:patilritesh4016@gmail.com" 
                className="text-foreground/60 hover:text-highlight transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Links</h3>
            <nav className="flex flex-col space-y-2">
              <a href="#about" className="text-foreground/60 hover:text-highlight transition-colors">About</a>
              <a href="#experience" className="text-foreground/60 hover:text-highlight transition-colors">Experience</a>
              <a href="#projects" className="text-foreground/60 hover:text-highlight transition-colors">Projects</a>
              <a href="#contact" className="text-foreground/60 hover:text-highlight transition-colors">Contact</a>
            </nav>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Contact</h3>
            <p className="text-muted-foreground">
              Feel free to reach out for collaboration or any inquiries.
            </p>
            <p className="text-foreground/60">
              <a href="mailto:patilritesh4016@gmail.com.com" className="hover:text-highlight transition-colors">
                patilritesh4016@gmail.com
              </a>
            </p>
          </div>
        </div>
        
        <div className="divider my-8"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground/60 text-sm">
            © {currentYear} Ritesh Patil. All rights reserved.
          </p>
          <p className="text-foreground/60 text-xs">
            Designed & Built with <span className="text-highlight">♥</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
