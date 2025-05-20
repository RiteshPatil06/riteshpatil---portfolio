
import { educations } from "@/lib/data";
import { GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="bg-dark-accent/30">
      <div className="container-custom">
        <h2 className="section-heading">Education</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {educations.map((education, index) => (
            <div 
              key={index} 
              className="bg-dark p-6 rounded-lg border border-border/50 hover:border-highlight/30 transition-all duration-300 group"
            >
              <div className="flex justify-between items-start">
                <GraduationCap className="text-highlight mt-1" />
                <span className="text-muted-foreground text-sm">{education.date}</span>
              </div>
              
              <h3 className="text-xl font-bold mt-3 group-hover:text-highlight transition-colors">{education.degree}</h3>
              <p className="text-lg">{education.institution}</p>
              <p className="text-muted-foreground">{education.location}</p>
              
              <div className="mt-4">
                <p>{education.description}</p>
                {education.gpa && (
                  <p className="text-highlight mt-2 font-semibold">GPA: {education.gpa}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
