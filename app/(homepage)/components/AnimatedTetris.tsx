import { useState, useEffect, useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import TetrisControls from './TetrisControls';

import { tetrisAnimation, tetrisPieceAnimation } from '../utils';

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
          isLaptop: `(min-width: 1280px) and (prefers-reduced-motion: no-preference)`,
          isTablet:
            '(max-width: 1279px) and (prefers-reduced-motion: no-preference)',
          isMobile: `(max-width: 639px) and (prefers-reduced-motion: no-preference)`,
          reduceMotion: '(prefers-reduced-motion: reduce)',
        },
        (context) => {
          const tetrisPieceAnimationTL = tetrisPieceAnimation(context);
          const tetrisAnimationTL = tetrisAnimation(context);

          return () => {
            tetrisPieceAnimationTL.clear();
            tetrisAnimationTL.clear();
          };
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
      className='after:bg-red absolute inset-x-1/2 inset-y-1/2 h-[220vh] w-[100vw] -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-text-primary shadow-inner-md after:absolute after:-z-10 after:h-full after:w-full after:rounded-3xl after:border-6 after:border-black after:shadow-[inset_9px_9px_0px_4px_rgba(38,38,38,1)] xl:h-[350vh] '
    >
      {isClient && <TetrisControls />}
    </div>
  );
}

export default AnimatedTetris;
