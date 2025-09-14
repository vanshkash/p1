import React, { Suspense, useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const LazyLoadSection = ({
  children,
  // default placeholder height; override per-section if you need
  height = '100vh'
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      style={{
        minHeight: height,                         // placeholder height
        opacity: isVisible ? 1 : 0,                // fade-in
        transform: isVisible                       // slide up
          ? 'translateY(0)' 
          : 'translateY(40px)',
        transition: 'opacity 0.9s ease-out, transform 0.9s ease-out'
      }}
    >
      {isVisible && (
        <Suspense fallback={null}>
          {children}
        </Suspense>
      )}
    </div>
  );
};

export default LazyLoadSection;
