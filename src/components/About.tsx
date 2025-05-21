
import { Button } from "@/components/ui/button";
import { Download, View } from "lucide-react";
import { skills } from "@/lib/data";

const About = () => {
  return (
    <section id="about" className="bg-dark-accent/30">
      <div className="container-custom">
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-6 max-w-2xl">
            <p className="text-lg">
              Hi there! I'm <span className="text-highlight font-medium">Ritesh</span>, As an aspiring Machine Learning
               Engineer with a strong foundation in ML, Deep Learning, and AI technologies, I bring a builder’s
                mindset to every project I undertake.
            </p>
            
            <p>
            With hands-on experience in developing intelligent systems, I specialize in leveraging 
            modern ML/DL frameworks such as TensorFlow, Scikit-learn, and OpenAI APIs to build 
            models that solve real-world problems. My journey from electronics to machine learning 
            has been driven by curiosity, self-learning, and a deep commitment to building data-driven 
            solutions that matter.
            </p>
            
            <h2 className="section-heading">Real World Capabilities</h2>

            <p>
            I excel in designing and implementing robust ML infrastructure and automation pipelines. 
            I leverage state-of-the-art tools and frameworks such as Docker, Kubernetes,git actions,
            Huggingface models,replicate models etc to optimize workflows, ensuring scalability and 
            reproducibility of ML processes. My ability to seamlessly integrate ML solutions into 
            existing systems empowers organizations to embrace the full potential of their data, 
            gaining a competitive edge in today’s rapidly evolving market.If you are seeking a 
            skilled ML/DL engineer and MLOps expert who can deliver exceptional results, I am 
            confident in my ability to drive your organization’s success through innovative 
            technologies and data-driven solutions. Let’s collaborate and unlock the power of ML 
            and DL for your business
            You can find my works here
            </p>

            <a href="https://drive.google.com/file/d/1CJ7t7i60ysg5EclVqzd98y81Echc6Vwc/view?usp=sharing" target="_blank" rel="noreferrer">
              <div className="pt-4">
                <Button className="bg-highlight hover:bg-highlight-alt text-foreground">
                  <View className="mr-2 h-4 w-4" />
                  View Resume
                </Button>
              </div>
            </a>
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
