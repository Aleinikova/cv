import { useState, useEffect, useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import TetrisControls from './TetrisControls';

import { mainAnimation } from '../utils';

interface IAnimatedTetris {
  ctx: gsap.Context;
}

function AnimatedTetris({ ctx }: IAnimatedTetris) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useLayoutEffect(() => {
    if (isClient) {
      gsap.registerPlugin(ScrollTrigger);

      ctx.add(() => {
        mainAnimation();
      });
    }

    return () => {
      ctx.revert();
    };
  }, [ctx, isClient]);

  useEffect(() => {
    const handleResize = () => {
      ctx.revert();

      ctx.add(() => {
        mainAnimation();
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [ctx]);

  return (
    <div
      id='tetris'
      className='absolute inset-x-1/2 inset-y-1/2 h-[350vh] w-[100vw] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl bg-text-primary'
    >
      <TetrisControls />
    </div>
  );
}

export default AnimatedTetris;
