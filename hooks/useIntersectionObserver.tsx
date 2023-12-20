import { RefObject, useEffect, useState } from 'react';

function useIntersectionObserver(
  elementRef: RefObject<Element>,
  { threshold = 0, root = null, rootMargin = '0%' }: IntersectionObserverInit
): boolean {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setInView(entry.isIntersecting);
        });
      },
      {
        threshold: 0,
      }
    );

    if (elementRef.current) {
      obs.observe(elementRef.current);
    }
  }, [elementRef, root, rootMargin, threshold]);

  return inView;
}

export default useIntersectionObserver;
