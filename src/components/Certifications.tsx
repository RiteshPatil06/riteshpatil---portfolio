
import { certifications } from "@/lib/data";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Award, ExternalLink } from "lucide-react";

const Certifications = () => {
  return (
    <section id="certifications" className="bg-dark-accent/30">
      <div className="container-custom">
        <h2 className="section-heading">Certifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <Card key={cert.id} className="bg-dark border-border/50 hover:border-highlight/30 transition-all duration-300 group">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <Award className="text-highlight" />
                  <span className="text-muted-foreground text-sm">{cert.date}</span>
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="text-lg font-bold group-hover:text-highlight transition-colors">{cert.name}</h3>
                <p className="text-muted-foreground mb-4">{cert.organization}</p>
                
                {cert.url && (
                  <a 
                    href={cert.url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-highlight hover:text-highlight-alt transition-colors"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    View Certificate
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
