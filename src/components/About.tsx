
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { skills } from "@/lib/data";

const About = () => {
  return (
    <section id="about" className="bg-dark-accent/30">
      <div className="container-custom">
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-6 max-w-2xl">
            <p className="text-lg">
              Hi there! I'm <span className="text-highlight font-medium">Rohan</span>, an MLOps specialist and ML/DL
              Engineer. Leveraging Advanced Technologies for Optimal Results.
            </p>
            
            <p>
              With a deep passion for Machine Learning (ML), Deep Learning (DL), and MLOps, 
              I am an accomplished engineer skilled in harnessing the power of modern web technologies 
              to build exceptional websites.
            </p>
            
            <p>
              My expertise extends beyond aesthetics and functionality; I have a comprehensive 
              understanding of ML and DL algorithms, frameworks, and techniques that enable me to 
              create intelligent systems capable of analyzing vast amounts of data and delivering 
              accurate predictions.
            </p>
            
            <p>
              I excel in designing and implementing robust ML infrastructure and automation pipelines. 
              I leverage state-of-the-art tools and frameworks such as Docker, Kubernetes, git actions, 
              Huggingface models, replicate models etc to optimize workflows, ensuring scalability and 
              reproducibility of ML processes.
            </p>
            
            <div className="pt-4">
              <Button className="bg-highlight hover:bg-highlight-alt text-foreground">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </div>
          
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-6">Skills</h3>
            <div className="space-y-5">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-highlight rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
