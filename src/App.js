import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Skills } from "./components/Skills";
import { Work } from "./components/Work";
import React, { useEffect, useRef, useState } from "react";

const RevealOnScroll = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
      const onWindScroll = () => {
          const element = ref.current;
          if (element) {
              const { top } = element.getBoundingClientRect();
              const isVisible = top < window.innerHeight;
              setIsVisible(isVisible);
          }
      };

      window.addEventListener("scroll", onWindScroll);
      return () => {
          window.removeEventListener("scroll", onWindScroll);
      };
  }, []);

  const classes = `transition-opacity duration-1000
      ${isVisible ? "opacity-100" : "opacity-0"
      }`;

  return (
      <div ref={ref} className={classes}>
          {children}
      </div>
  );
};

export const App = () => {
  return (
    <div className="bg-[#040F0F]">
      <Navbar />
      <Home />
      <RevealOnScroll>
        <About />
      </RevealOnScroll>
      <RevealOnScroll>
        <Skills />
      </RevealOnScroll>
      <RevealOnScroll>
        <Work />
      </RevealOnScroll>
      <RevealOnScroll>
        <Contact />
      </RevealOnScroll>
    </div>
  );
};