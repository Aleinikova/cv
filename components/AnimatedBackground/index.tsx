'use client';

import clsx from 'clsx';
import { useEffect, useRef, useMemo, useState, useLayoutEffect } from 'react';
import gsap from 'gsap';

import Tetris from '@components/TetrisPiece';

// TODO: turn off animation on window blue
function AnimatedBackground() {
  const animationContainerRef = useRef<HTMLDivElement>(null);

  const ctx = useMemo(() => gsap.context(() => {}, animationContainerRef), []);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useLayoutEffect(() => {
    if (isClient) {
      ctx.add(() => {
        gsap.fromTo(
          '.tetris-1',
          {
            opacity: 1,
            transform: 'translateY(-20vh)',
            rotate: 180,
          },
          {
            opacity: 0,
            transform: 'translateY(100vh)',
            rotate: 180,
            duration: 6,
            repeat: -1,
          }
        );

        gsap.fromTo(
          '.tetris-2',
          {
            opacity: 1,
            transform: 'translateY(-20vh)',
            rotate: -90,
          },
          {
            opacity: 0,
            transform: 'translateY(100vh)',
            rotate: -90,
            delay: 3,
            duration: 6,
            repeat: -1,
          }
        );

        gsap.fromTo(
          '.tetris-3',
          {
            opacity: 1,
            transform: 'translateY(-20vh)',
          },
          {
            opacity: 0,
            transform: 'translateY(100vh)',
            delay: 1.2,
            duration: 6,
            repeat: -1,
          }
        );

        gsap.fromTo(
          '.tetris-4',
          {
            opacity: 1,
            transform: 'translateY(-20vh)',
          },
          {
            opacity: 0,
            transform: 'translateY(100vh)',
            delay: 2,
            duration: 6,
            repeat: -1,
          }
        );

        gsap.fromTo(
          '.tetris-5',
          {
            opacity: 1,
            transform: 'translateY(-20vh)',
          },
          {
            opacity: 0,
            transform: 'translateY(100vh)',
            delay: 0.2,
            duration: 6,
            repeat: -1,
          }
        );

        gsap.fromTo(
          '.tetris-6',
          {
            opacity: 1,
            transform: 'translateY(-20vh)',
            rotate: 90,
          },
          {
            opacity: 0,
            transform: 'translateY(100vh)',
            rotate: 90,
            delay: 3.2,
            duration: 6,
            repeat: -1,
          }
        );

        gsap.fromTo(
          '.tetris-7',
          {
            opacity: 1,
            transform: 'translateY(-20vh)',
          },
          {
            opacity: 0,
            transform: 'translateY(100vh)',
            delay: 1.3,
            duration: 6,
            repeat: -1,
          }
        );

        gsap.fromTo(
          '.tetris-8',
          {
            opacity: 1,
            transform: 'translateY(-20vh)',
          },
          {
            opacity: 0,
            transform: 'translateY(100vh)',
            delay: 3.6,
            duration: 6,
            repeat: -1,
          }
        );

        gsap.fromTo(
          '.tetris-9',
          {
            opacity: 1,
            transform: 'translateY(-20vh)',
            rotate: 90,
          },
          {
            opacity: 0,
            transform: 'translateY(100vh)',
            delay: 0.6,
            rotate: 90,
            duration: 6,
            repeat: -1,
          }
        );
      }, animationContainerRef);
    }

    return () => ctx.revert();
  }, [ctx, isClient]);

  // clear animation
  useEffect(
    () => () => {
      ctx.revert();
    },
    [ctx]
  );

  if (!isClient) {
    return null;
  }

  return (
    <>
      <div className='absolute left-0 top-0 z-10 h-[15%] w-full bg-gradient-to-b from-white to-transparent' />
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
            '!absolute left-[90%] top-[-20vh]'
          )}
        />
        <Tetris
          variant='I'
          color='yellow'
          className={clsx(
            'tetris tetris-9',
            '!absolute left-[92%] top-[-20vh] rotate-90'
          )}
        />
      </div>
      <div className='absolute bottom-0 left-0 h-[25%] w-full bg-gradient-to-b from-transparent to-white' />
    </>
  );
}

export default AnimatedBackground;
