'use client';

import clsx from 'clsx';
import { useEffect, useRef, useMemo, useState, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { v4 as uuidv4 } from 'uuid';

import Tetris from '@components/TetrisPiece';
import { PieceType, PieceColor } from '@components/TetrisPiece/types';

const MAX_DELAY_SEC = 10;
const MIN_DELAY_SEC = 0;

interface TetrisPiece {
  className: string;
  delay: number;
  left: number;
  type: PieceType;
  color: PieceColor;
}

const calculateLeftPosition = (
  pieces: TetrisPiece[],
  iteration: number
): number => {
  const left = Math.random() * 96;

  if (
    pieces.every((piece) => Math.abs(piece.left - left) > 5) ||
    iteration === 100
  ) {
    return left;
  }

  return calculateLeftPosition(pieces, iteration + 1);
};

const calculateDelay = (pieces: TetrisPiece[], iteration: number): number => {
  const delay = Math.floor(
    Math.random() * (MAX_DELAY_SEC - MIN_DELAY_SEC) + MIN_DELAY_SEC
  );

  if (
    pieces.every((piece) => Math.abs(piece.delay - delay) > 0.2) ||
    iteration === 100
  ) {
    return delay;
  }

  return calculateDelay(pieces, iteration + 1);
};

const generateTetris = (piecesNumber: number) => {
  const array: TetrisPiece[] = [];

  [...new Array(piecesNumber)].forEach(() => {
    array.push({
      className: `tetris-${uuidv4()}`,
      delay: calculateDelay(array, 0),
      left: calculateLeftPosition(array, 0),
      type: ['T', 'I', 'O', 'L', 'J', 'Z', 'S'][
        Math.floor(Math.random() * 7)
      ] as PieceType,
      color: ['red', 'green', 'blue', 'yellow'][
        Math.floor(Math.random() * 4)
      ] as PieceColor,
    });
  });

  return array;
};

const ANIMATION_FROM = {
  opacity: 1,
  transform: 'translateY(-20vh)',
};

const ANIMATION_TO = {
  opacity: 0,
  transform: 'translateY(95vh)',
  duration: 6,
};

// TODO: turn off animation on window blue
function WelcomeAnimation() {
  const animationContainerRef = useRef<HTMLDivElement>(null);

  const ctx = useMemo(() => gsap.context(() => {}, animationContainerRef), []);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const initialPieces = useMemo(() => generateTetris(20), []);

  // dynamic pieces
  const [pieces, setPieces] = useState<TetrisPiece[][]>([]);

  useLayoutEffect(() => {
    if (isClient) {
      ctx.add(() => {
        initialPieces.forEach((piece) => {
          gsap.fromTo(`.${piece.className}`, ANIMATION_FROM, {
            ...ANIMATION_TO,
            delay: piece.delay,
          });
        });
      }, animationContainerRef);
    }

    return () => ctx.revert();
  }, [ctx, initialPieces, isClient]);

  const iterationRef = useRef(0);

  // adding new pieces and removing old
  useEffect(() => {
    const interval = setInterval(() => {
      if (iterationRef.current < 8) {
        setPieces((prevState) => [...prevState, generateTetris(10)]);
        iterationRef.current += 1;
      } else if (iterationRef.current === 8) {
        // skip iteration and wait until animations end
        iterationRef.current += 1;
      } else if (iterationRef.current === 9) {
        iterationRef.current = 0;
        setPieces([generateTetris(20)]);
      }
    }, 12000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // animate new dynamic pieces
  useLayoutEffect(() => {
    if (pieces.length !== 0) {
      ctx.add(() => {
        pieces[pieces.length - 1].forEach((piece) => {
          gsap.fromTo(`.${piece.className}`, ANIMATION_FROM, {
            ...ANIMATION_TO,
            delay: piece.delay,
          });
        });
      }, animationContainerRef);
    }
  }, [pieces, ctx]);

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
      <div ref={animationContainerRef}>
        {initialPieces.map((piece) => (
          <Tetris
            variant={piece.type}
            color={piece.color}
            className={clsx(
              piece.className,
              '!absolute left-[2%] top-0 translate-y-[-20vh] rotate-180'
            )}
            style={{
              left: `${piece.left}%`,
            }}
            key={piece.className}
          />
        ))}
        {pieces.map((piecesSet) =>
          piecesSet.map((piece) => (
            <Tetris
              variant={piece.type}
              color={piece.color}
              className={clsx(
                piece.className,
                '!absolute left-[2%] top-0 translate-y-[-20vh] rotate-180'
              )}
              style={{
                left: `${piece.left}%`,
              }}
              key={piece.className}
            />
          ))
        )}
        {/* <Tetris
        variant='L'
        color='red'
        className={clsx(
          'tetris tetris-1',
          '!absolute left-[2%] top-[-20vh] rotate-180'
        )}
      />
      <Tetris
        variant='T'
        color='red'
        className={clsx('tetris tetris-2', '!absolute left-[10%] top-[-20vh]')}
      />
      <Tetris
        variant='O'
        color='yellow'
        className={clsx('tetris tetris-3', '!absolute left-[12%] top-[-20vh]')}
      />
      <Tetris
        variant='I'
        color='blue'
        className={clsx('tetris tetris-4', '!absolute left-[30%] top-[-20vh]')}
      />
      <Tetris
        variant='T'
        color='green'
        className={clsx('tetris tetris-5', '!absolute left-[40%] top-[-20vh]')}
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
        className={clsx('tetris tetris-7', '!absolute left-[65%] top-[-20vh]')}
      />
      <Tetris
        variant='O'
        color='blue'
        className={clsx('tetris tetris-8', '!absolute left-[90%] top-[-20vh]')}
      />
      <Tetris
        variant='I'
        color='yellow'
        className={clsx(
          'tetris tetris-9',
          '!absolute left-[92%] top-[-20vh] rotate-90'
        )}
      /> */}
      </div>
      <div className='absolute bottom-0 left-0 h-[25%] w-full bg-gradient-to-b from-transparent to-white' />
    </>
  );
}

export default WelcomeAnimation;
