
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";
import { Github, Linkedin, Mail, Twitter , Instagram} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        "service_0tt1kpe", // Replace with your EmailJS Service ID
        "template_ky7gvtn", // Replace with your EmailJS Template ID
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "BQXwXudcyJXfH69l4" // Replace with your EmailJS Public Key
      );
  
      if (result.status === 200) {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
  
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact">
      <div className="container-custom">
        <h2 className="section-heading">Contact Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
              <p className="text-muted-foreground">
                Have a question or want to work together? Feel free to reach out to me. I'm always open to discussing new projects, opportunities or partnerships.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-dark-accent p-3 rounded-full">
                  <Mail className="h-5 w-5 text-highlight" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:patilritesh4016@gmail.com" className="text-muted-foreground hover:text-highlight">
                    patilritesh4016@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-dark-accent p-3 rounded-full">
                  <Linkedin className="h-5 w-5 text-highlight" />
                </div>
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <a href="https://linkedin.com/in/riteshpatil4016" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-highlight">
                    linkedin.com/in/riteshpatil4016
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-dark-accent p-3 rounded-full">
                  <Github className="h-5 w-5 text-highlight" />
                </div>
                <div>
                  <p className="font-medium">GitHub</p>
                  <a href="https://github.com/RiteshPatil06" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-highlight">
                    github.com/RiteshPatil06
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-dark-accent p-3 rounded-full">
                  <Instagram className="h-5 w-5 text-highlight" />
                </div>
                <div>
                  <p className="font-medium">Instagram</p>
                  <a href="https://www.instagram.com/dishkiiyaoonn" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-highlight">
                    @dishkiiyaoonn
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <Card className="bg-dark-accent/50 border-border/50">
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="bg-dark border-border/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="bg-dark border-border/50"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this regarding?"
                    required
                    className="bg-dark border-border/50"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    required
                    className="min-h-32 bg-dark border-border/50"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-highlight hover:bg-highlight-alt"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
