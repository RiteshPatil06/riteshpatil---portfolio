
import { experiences } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience">
      <div className="container-custom">
        <h2 className="section-heading">Experience</h2>
        
        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <div 
              key={index} 
              className="relative pl-8 pb-12 border-l border-border"
            >
              <div className="absolute left-[-9px] top-0 h-[18px] w-[18px] rounded-full border-2 border-highlight bg-dark"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-x-6 gap-y-3">
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold text-highlight">{experience.title}</h3>
                  <p className="text-lg font-medium">{experience.company}</p>
                  <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3 text-muted-foreground">
                    <span>{experience.location}</span>
                    <span className="hidden md:inline">•</span>
                    <span>{experience.date}</span>
                  </div>
                </div>
                
                <div className="md:col-span-3 space-y-3">
                  <ul className="list-disc pl-5 space-y-1">
                    {experience.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {experience.skills.map((skill, idx) => (
                      <Badge key={idx} variant="outline" className="border-highlight/40">{skill}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-10">
          <Button variant="outline" className="border-highlight/40 text-highlight hover:bg-highlight/10">
            <Briefcase className="mr-2 h-4 w-4" />
            View Full Resume
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Experience;

import { Button } from "@/components/ui/button";
