'use client';

import clsx from 'clsx';
import { useEffect, useRef, useMemo, useState, useCallback } from 'react';
import gsap from 'gsap';

import Tetris from '@components/TetrisPiece';

const initFallingPiecesAnimation = (
  tl: ReturnType<typeof gsap.timeline>,
  durationCof: number = 1
) => {
  tl.fromTo(
    '.tetris-1',
    {
      opacity: 1,
      transform: 'translateY(-20vh)',
      rotate: 180,
    },
    {
      opacity: 0,
      transform: 'translateY(110vh)',
      rotate: 180,
      duration: 8 * durationCof,
      repeat: -1,
    }
  );

  tl.fromTo(
    '.tetris-2',
    {
      opacity: 1,
      transform: 'translateY(-20vh)',
      rotate: -90,
    },
    {
      opacity: 0,
      transform: 'translateY(110vh)',
      rotate: -90,
      duration: 8 * durationCof,
      repeat: -1,
    },
    3
  );

  tl.fromTo(
    '.tetris-3',
    {
      opacity: 1,
      transform: 'translateY(-20vh)',
    },
    {
      opacity: 0,
      transform: 'translateY(110vh)',
      duration: 8 * durationCof,
      repeat: -1,
    },
    1.2
  );

  tl.fromTo(
    '.tetris-4',
    {
      opacity: 1,
      transform: 'translateY(-20vh)',
    },
    {
      opacity: 0,
      transform: 'translateY(110vh)',
      duration: 8 * durationCof,
      repeat: -1,
    },
    2
  );

  tl.fromTo(
    '.tetris-5',
    {
      opacity: 1,
      transform: 'translateY(-20vh)',
    },
    {
      opacity: 0,
      transform: 'translateY(110vh)',
      duration: 8 * durationCof,
      repeat: -1,
    },
    0.2
  );

  tl.fromTo(
    '.tetris-6',
    {
      opacity: 1,
      transform: 'translateY(-20vh)',
      rotate: 90,
    },
    {
      opacity: 0,
      transform: 'translateY(110vh)',
      rotate: 90,
      duration: 8 * durationCof,
      repeat: -1,
    },
    3.2
  );

  tl.fromTo(
    '.tetris-7',
    {
      opacity: 1,
      transform: 'translateY(-20vh)',
    },
    {
      opacity: 0,
      transform: 'translateY(110vh)',
      duration: 8 * durationCof,
      repeat: -1,
    },
    1.3
  );

  tl.fromTo(
    '.tetris-8',
    {
      opacity: 1,
      transform: 'translateY(-20vh)',
    },
    {
      opacity: 0,
      transform: 'translateY(110vh)',
      duration: 8 * durationCof,
      repeat: -1,
    },
    3.6
  );

  tl.fromTo(
    '.tetris-9',
    {
      opacity: 1,
      transform: 'translateY(-20vh)',
      rotate: 90,
    },
    {
      opacity: 0,
      transform: 'translateY(110vh)',
      rotate: 90,
      duration: 8 * durationCof,
      repeat: -1,
    },
    0.6
  );
};

const HEIGHT_FOR_ANIMATION_CALCULATION = 980;

function AnimatedBackground() {
  const animationContainerRef = useRef<HTMLDivElement>(null);

  const ctx = useMemo(() => gsap.context(() => {}, animationContainerRef), []);
  const animationTimeline = useRef<ReturnType<typeof gsap.timeline>>();

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const initAnimation = useCallback(() => {
    ctx.add(() => {
      animationTimeline.current = gsap.timeline({ repeat: -1 });

      initFallingPiecesAnimation(
        animationTimeline.current,
        window.innerHeight / HEIGHT_FOR_ANIMATION_CALCULATION
      );
    }, animationContainerRef);
  }, [ctx]);

  // // clear animation
  useEffect(() => {
    if (isClient) {
      initAnimation();
    }

    return () => {
      ctx.revert();
    };
  }, [ctx, initAnimation, isClient]);

  // reset animation on resize
  useEffect(() => {
    const handleResize = () => {
      ctx.revert();

      initAnimation();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [ctx, initAnimation]);

  if (!isClient) {
    return null;
  }

  return (
    <>
      <div className='absolute left-0 top-0 z-10 h-[15%] w-full  bg-gradient-to-b from-white to-transparent' />
      <div ref={animationContainerRef}>
        <Tetris
          variant='L'
          color='red'
          className={clsx(
            'tetris tetris-1',
            '!absolute left-[1%] top-[-20vh] rotate-90'
          )}
        />
        <Tetris
          variant='T'
          color='red'
          className={clsx(
            'tetris tetris-2',
            '!absolute left-[10%] top-[-20vh] -rotate-90'
          )}
        />
        <Tetris
          variant='O'
          color='yellow'
          className={clsx(
            'tetris tetris-3',
            '!absolute left-[12%] top-[-20vh]'
          )}
        />
        <Tetris
          variant='I'
          color='blue'
          className={clsx(
            'tetris tetris-4',
            '!absolute left-[30%] top-[-20vh]'
          )}
        />
        <Tetris
          variant='T'
          color='green'
          className={clsx(
            'tetris tetris-5',
            '!absolute left-[40%] top-[-20vh]'
          )}
        />
        <Tetris
          variant='L'
          color='green'
          className={clsx(
            'tetris tetris-6',
            '!absolute left-[55%] top-[-20vh] rotate-90'
          )}
        />
        <Tetris
          variant='O'
          color='red'
          className={clsx(
            'tetris tetris-7',
            '!absolute left-[65%] top-[-20vh]'
          )}
        />
        <Tetris
          variant='O'
          color='blue'
          className={clsx(
            'tetris tetris-8',
            '!absolute left-[84%] top-[-20vh] lg:left-[90%]'
          )}
        />
        <Tetris
          variant='I'
          color='yellow'
          className={clsx(
            'tetris tetris-9',
            '!absolute left-[80%] top-[-20vh] rotate-90 lg:left-[92%]'
          )}
        />
      </div>
      <div className='absolute bottom-0 left-0 h-[25%] w-full bg-gradient-to-b from-transparent to-white' />
    </>
  );
}

export default AnimatedBackground;
