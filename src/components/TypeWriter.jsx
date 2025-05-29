import React from "react";
import { Typewriter } from "react-simple-typewriter";

const TypewriterComponent = () => {
  return (
    <h1 className="text-3xl">
      <span className="text-violet-400 font-bold">
        <Typewriter
          words={[
            "Full Stack Developer",
            "Tech Enthuasist",
          ]}
          loop={0} // 0 = infinite loop
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </span>
    </h1>
  );
};

export default TypewriterComponent;

