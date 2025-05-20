
import { useEffect, useState } from "react";

const Quote = () => {
  const [opacity, setOpacity] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpacity(1);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section className="py-24 bg-black relative overflow-hidden animated-element">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-highlight/5"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-highlight/5"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-highlight/3"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div 
          className="max-w-5xl mx-auto text-center transition-opacity duration-1000"
          style={{ opacity }}
        >
          <div className="mb-10">
            <p className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight transition-opacity duration-500 italic">
              <span className="text-highlight">"</span>
              <span>Stay hungry. Stay foolish.</span>
              <span className="text-highlight">"</span>
            </p>
          </div>
          
          <div className="mt-12">
            <p className="text-xl md:text-2xl font-semibold text-highlight">Steve Jobs</p>
            <p className="text-muted-foreground">Co-founder of Apple Inc.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote;
