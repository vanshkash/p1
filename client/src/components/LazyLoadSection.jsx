import React, { Suspense, useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const LazyLoadSection = ({ children, fallback = <div className="flex items-center justify-center py-96">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-purple-500"></div>
      <span className="ml-4 text-gray-600 text-lg font-semibold">
        Loading Page, please wait...
      </span>
    </div> }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [hasBeenInView, setHasBeenInView] = useState(false);

  useEffect(() => {
    if (inView) setHasBeenInView(true);
  }, [inView]);

  return (
    <div ref={ref}>
      {hasBeenInView ? <Suspense fallback={fallback}>{children}</Suspense> : fallback}
    </div>
  );
};

export default LazyLoadSection;