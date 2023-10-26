import clsx from 'clsx';
import TetrisPiece from '../../components/TetrisPiece';
import { useEffect, useRef } from 'react';

import WelcomeAnimation from './WelcomeAnimation';

const WelcomeBlock = () => {
  return (
    <section className='flex h-[calc(100vh_-_84px)]'>
      {/* 84px header height */}
      <div className='relative top-1/3 z-10 max-w-3xl'>
        <h1 className='font-orbitron  text-text-primary text-5xl font-bold leading-normal'>
          Hello, my name is <span className='text-brand-pink'>Valeria</span>
          <br />
          I’m a <span className='text-primary'>Frontend</span> developer
        </h1>
      </div>
      <WelcomeAnimation />
    </section>
  );
};

export default WelcomeBlock;
