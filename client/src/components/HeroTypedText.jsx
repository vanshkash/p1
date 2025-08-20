import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const HeroTypedText = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Events","Wedding Baraat", "Parties",
        "Mobile DJ Setup", "LED Display Setup", "Unforgettable Sound"
      ],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1500,
      loop: true,
      showCursor: true,
      cursorChar: "|"
    });

    return () => typed.destroy();
  }, []);

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold text-blue-300">
        <span ref={typedRef} />
      </h1>
    </div>
  );
};

export default HeroTypedText;