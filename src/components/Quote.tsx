
import { useEffect, useState } from "react";

const Quote = () => {
  const quotes = [
    {
      text: "Working with Rohan was an exceptional experience from start to finish.",
      author: "Alex Johnson",
      position: "CTO at TechVentures"
    },
    {
      text: "Rohan's expertise in ML and DevOps completely transformed our workflow efficiency.",
      author: "Sarah Chen",
      position: "Lead Data Scientist at DataFusion"
    },
    {
      text: "A brilliant engineer who delivers excellence in every project.",
      author: "Michael Rodriguez",
      position: "VP Engineering at AIScale"
    }
  ];
  
  const [currentQuote, setCurrentQuote] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, [quotes.length]);
  
  return (
    <section className="py-20 bg-gradient-to-r from-dark to-dark-accent relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-highlight/5"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-highlight/5"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-highlight/3"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12 flex justify-center">
            <div className="h-16 w-16 rounded-full overflow-hidden border-2 border-highlight">
              <img src="/lovable-uploads/c62d7dda-2569-4a81-a65a-c0d2b2a4070e.png" alt="Avatar" className="w-full h-full object-cover" />
            </div>
          </div>
          
          <div className="min-h-[180px] flex flex-col justify-center">
            <p className="text-2xl md:text-3xl font-light italic mb-8 transition-opacity duration-500">
              "{quotes[currentQuote].text}"
            </p>
            
            <div>
              <p className="text-xl font-semibold text-highlight">{quotes[currentQuote].author}</p>
              <p className="text-muted-foreground">{quotes[currentQuote].position}</p>
            </div>
          </div>
          
          <div className="flex justify-center gap-3 mt-10">
            {quotes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuote(index)}
                className={`h-2 rounded-full transition-all ${
                  currentQuote === index ? "w-8 bg-highlight" : "w-2 bg-muted"
                }`}
                aria-label={`View quote ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote;
