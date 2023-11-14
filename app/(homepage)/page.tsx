'use client';

import { useRef, useMemo } from 'react';
import gsap from 'gsap';

import AboutMe from './(components)/AboutMe';
import Bottom from './(components)/Bottom';
import Contacts from './(components)/Contacts';
import Projects from './(components)/Projects';
import Technologies from './(components)/Technologies';
import WelcomeBlock from './(components)/WelcomeBlock';
import AnimatedTetriesPiece from './(components)/AnimatedTetriesPiece';

export default function Home() {
  const animationContainerRef = useRef<HTMLDivElement>(null);

  const ctx = useMemo(() => gsap.context(() => {}, animationContainerRef), []);

  return (
    <main ref={animationContainerRef}>
      <WelcomeBlock />
      <div className='relative mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-between lg:px-20 xl:px-0'>
        <AboutMe />
        <Projects />
        <Technologies />
        <Contacts />
        <AnimatedTetriesPiece ctx={ctx} />
      </div>

      <Bottom />
    </main>
  );
}
