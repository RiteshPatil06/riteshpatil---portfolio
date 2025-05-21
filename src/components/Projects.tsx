
import { useState } from "react";
import { projects } from "@/lib/data";
import { ProjectFilter, ProjectItem } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("all");
  
  const filteredProjects = projects.filter(project => {
    if (activeFilter === "all") return true;
    return project.tags.some(tag => tag.includes(activeFilter));
  });
  
  const filters: { value: ProjectFilter; label: string }[] = [
    { value: "all", label: "All Projects" },
    { value: "web", label: "Web Dev" },
    { value: "machine-learning", label: "Machine Learning" },
    // { value: "devops", label: "DevOps" }
  ];
  
  return (
    <section id="projects">
      <div className="container-custom">
        <h2 className="section-heading">Projects</h2>
        
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((filter) => (
            <Button
              key={filter.value}
              variant={activeFilter === filter.value ? "default" : "outline"}
              className={activeFilter === filter.value ? "bg-highlight hover:bg-highlight-alt" : ""}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: ProjectItem }) => {
  return (
    <Card className="bg-dark-accent border-border/50 overflow-hidden hover:border-highlight/30 transition-all group">
      <div className="aspect-video overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-1"
        />
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-highlight transition-colors">{project.title}</h3>
        <p className="text-muted-foreground mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="bg-dark-accent/50 border-highlight/30">
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="flex justify-start gap-3">
          {project.codeUrl && (
            <Button size="sm" variant="outline" className="gap-2" asChild>
              <a href={project.codeUrl} target="_blank" rel="noreferrer">
                <Github className="h-4 w-4" />
                Code
              </a>
            </Button>
          )}
          
          {project.demoUrl && (
            <Button size="sm" className="gap-2 bg-highlight hover:bg-highlight-alt" asChild>
              <a href={project.demoUrl} target="_blank" rel="noreferrer">
                <ExternalLink className="h-4 w-4" />
                Demo
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default Projects;
