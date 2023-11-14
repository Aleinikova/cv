'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Scrollbar from 'smooth-scrollbar';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Scroller({ children }: { children: React.ReactNode }) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    Scrollbar.init(scrollerRef.current);

    const scroller = scrollerRef.current;

    const bodyScrollBar = Scrollbar.init(scroller, {
      damping: 0.1,
      delegateTo: document,
      alwaysShowTracks: true,
    });

    ScrollTrigger.scrollerProxy(scroller, {
      scrollTop(value) {
        if (arguments.length) {
          bodyScrollBar.scrollTop = value;
        }
        return bodyScrollBar.scrollTop;
      },
    });

    bodyScrollBar.addListener(ScrollTrigger.update);

    ScrollTrigger.defaults({ scroller });
  }, []);

  return (
    <div className='h-screen' ref={scrollerRef}>
      {children}
    </div>
  );
}

export default Scroller;
