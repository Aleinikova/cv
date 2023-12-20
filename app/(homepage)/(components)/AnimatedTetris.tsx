import { useState, useEffect, useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import TetrisControls from './TetrisControls';

import { mainAnimation } from '../utils';

function AnimatedTetris() {
  const mm = gsap.matchMedia();

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useLayoutEffect(() => {
    if (isClient) {
      mm.add(
        {
          isDesktop: `(min-width: ${1920}px) and (prefers-reduced-motion: no-preference)`,
          isLaptop: `(min-width: 1300px) and (prefers-reduced-motion: no-preference)`,
          isTablet:
            '(max-width: 1279px) and (prefers-reduced-motion: no-preference)',
          isMobile: `(max-width: 639px)`,
          reduceMotion: '(prefers-reduced-motion: reduce)',
        },
        (context) => {
          mainAnimation(context);

          // return () => {
          //   tl.clear();
          // };
        }
      );
    }

    return () => {
      mm.revert();
    };
  }, [mm, isClient]);

  useEffect(() => {
    const handleResize = () => {
      gsap.matchMediaRefresh();
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      id='tetris'
      className='absolute inset-x-1/2 inset-y-1/2 h-[220vh] w-[100vw] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl bg-text-primary xl:h-[350vh]'
    >
      <TetrisControls />
    </div>
  );
}

export default AnimatedTetris;
