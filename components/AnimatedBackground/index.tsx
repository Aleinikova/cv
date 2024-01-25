'use client';

import clsx from 'clsx';
import { useEffect, useRef, useMemo, useCallback } from 'react';
import gsap from 'gsap';

import useOnResize from 'hooks/useOnResize';
import useIsClient from 'hooks/useIsClient';

import Tetris from '@components/TetrisPiece';
import { initFallingPiecesAnimation } from './animation';

const HEIGHT_FOR_ANIMATION_CALCULATION = 980;

interface AnimatedBackgroundProps {
  className?: string;
  isPaused?: boolean;
}

function AnimatedBackground({ isPaused, className }: AnimatedBackgroundProps) {
  const animationContainerRef = useRef<HTMLDivElement>(null);

  const ctx = useMemo(() => gsap.context(() => {}, animationContainerRef), []);
  const animationTimeline = useRef<ReturnType<typeof gsap.timeline>>();

  const isClient = useIsClient();

  const initAnimation = useCallback(() => {
    ctx.add(() => {
      animationTimeline.current = gsap.timeline({ repeat: -1 });

      initFallingPiecesAnimation(
        animationTimeline.current,
        window.innerHeight / HEIGHT_FOR_ANIMATION_CALCULATION
      );
    }, animationContainerRef);
  }, [ctx]);

  // init animation
  useEffect(() => {
    if (isClient) {
      initAnimation();
    }

    return () => {
      ctx.revert();
    };
  }, [ctx, initAnimation, isClient]);

  // reset animation on resize
  const handleResize = useCallback(() => {
    ctx.revert();

    initAnimation();
  }, [ctx, initAnimation]);

  useOnResize(handleResize);

  useEffect(() => {
    if (isPaused) {
      animationTimeline.current?.pause();
    }
  }, [isPaused]);

  useEffect(() => {
    if (!isPaused && animationTimeline.current?.paused()) {
      animationTimeline.current?.play();
    }
  }, [isPaused]);

  if (!isClient) {
    return null;
  }

  return (
    <div className={className}>
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
    </div>
  );
}

export default AnimatedBackground;
