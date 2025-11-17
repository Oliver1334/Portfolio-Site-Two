import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Ncgames } from "./components/NCgames";
import { FanFinder } from "./components/FanFinder";
import { Weather } from "./components/Weather";
import { VocabGame } from "./components/VocabGame";
import { TextBasedRPG } from "./components/TextBasedRPG";
import { Spacer } from "./components/Spacer";
import {FooterSpacer} from "./components/FooterSpacer";
import React, { useEffect, useRef, useState } from "react";

const RevealOnScroll = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false); // Initial visibility state
  const ref = useRef(null); // Reference to the DOM element

  useEffect(() => {
    const onWindScroll = () => {
      const element = ref.current; // Get the DOM element
      if (element) {
        const { top, bottom } = element.getBoundingClientRect(); // Get element's position
        const windowHeight = window.innerHeight; // Get viewport height
        const isVisible = top < windowHeight && bottom > 0; // Check if element is visible
        setIsVisible(isVisible); // Update visibility state
      }
    };

    window.addEventListener("scroll", onWindScroll); // Add scroll event listener
    onWindScroll(); // Check visibility on mount

    return () => {
      window.removeEventListener("scroll", onWindScroll); // Cleanup
    };
  }, []); // Empty dependency array means this effect runs once

  // Determine CSS classes based on visibility
  const classes = `transition-opacity duration-1000 ${
    isVisible ? "opacity-100" : "opacity-0"
  }`;

  return (
    <div ref={ref} className={classes}>
      {children} {/* Render children components */}
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

      <Projects />
      <Spacer/>
      <Ncgames />
      <Spacer/>
      <FanFinder />
      <Spacer/>
      <Weather />
      <Spacer/>
      <VocabGame />
      <Spacer/>
      <TextBasedRPG />
      <Spacer/>
      <RevealOnScroll>
        <Contact />
      </RevealOnScroll>
      <FooterSpacer/>
    </div>
  );
};
