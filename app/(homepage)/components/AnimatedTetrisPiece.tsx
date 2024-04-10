'use client';

import { useEffect } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';

import TetrisPiece from '@components/TetrisPiece';

export default function Home() {
  // const bottomRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // ScrollTrigger.saveStyles([bottomRef.current]);
  }, []);

  return (
    <>
      <TetrisPiece
        className='!absolute -top-[50vh] right-[60px] hidden rotate-90 opacity-0 xl:flex'
        size='md'
        variant='Z'
        color='red'
        id='mainTetrisPiece'
      />

      <TetrisPiece
        className='!absolute right-[20px] top-0 sm:hidden'
        size='md'
        variant='L'
        color='red'
        id='mainTetrisPieceMobile'
      />

      <TetrisPiece
        className='!absolute right-[120px] top-0 hidden rotate-180 sm:flex xl:hidden'
        size='md'
        variant='J'
        color='red'
        id='mainTetrisPieceTablet'
      />
    </>
  );
}
