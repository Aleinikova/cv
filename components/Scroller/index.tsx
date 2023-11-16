'use client';

import React, { useImperativeHandle, useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Scrollbar from 'smooth-scrollbar';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { Scrollbar as ScrollbarType } from 'smooth-scrollbar/scrollbar';

// eslint-disable-next-line react/display-name
const Scroller = React.forwardRef<ScrollbarType, { children: React.ReactNode }>(
  ({ children }, scrollerRef) => {
    const [scrollbar, setScrollbar] = useState<ScrollbarType>();

    const scrollerContainerRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(scrollerRef, () => scrollbar, [scrollbar]);

    useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);

      Scrollbar.init(scrollerContainerRef.current);

      const scroller = scrollerContainerRef.current;

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

      setScrollbar(bodyScrollBar);

      ScrollTrigger.defaults({ scroller });
    }, [scrollerRef]);

    return (
      <div className='h-screen' ref={scrollerContainerRef}>
        {children}
      </div>
    );
  }
);

export default Scroller;
