'use client';

import { useRef, useMemo, useEffect } from 'react';
import gsap from 'gsap';
import type { Scrollbar } from 'smooth-scrollbar/scrollbar';

import Scroller from '@components/Scroller';

import AboutMe from './(components)/AboutMe';
import Bottom from './(components)/Bottom';
import Contacts from './(components)/Contacts';
import Projects from './(components)/Projects';
import Technologies from './(components)/Technologies';
import WelcomeBlock from './(components)/WelcomeBlock';
import AnimatedTetriesPiece from './(components)/AnimatedTetriesPiece';
import Footer from './(components)/Footer';

// import TetrisPiece from '@components/TetrisPiece';

export default function Home() {
  const animationContainerRef = useRef<HTMLDivElement>(null);

  const test = useRef<HTMLDivElement>(null);

  const ctx = useMemo(() => gsap.context(() => {}, animationContainerRef), []);

  const scrollbarRef = useRef<Scrollbar>();

  useEffect(() => {
    test.current.addEventListener('mousewheel', (e: WheelEvent) => {
      if (!scrollbarRef.current.contentEl.contains(e.target as HTMLElement)) {
        scrollbarRef.current.setPosition(
          scrollbarRef.current?.scrollLeft,
          (scrollbarRef.current?.scrollTop || 0) + e.deltaY
        );
      }
    });
  }, []);

  return (
    <main ref={animationContainerRef} className=''>
      <div ref={test} className='h-screen  overflow-hidden' id='visible'>
        <div
          id='main'
          className='relative -left-[4vw] top-[-10vh] flex w-[108vw] justify-center overflow-hidden rounded-3xl bg-text-primary'
        >
          <div className='w-screen' id='content'>
            <div className='h-[10vh]' />
            <div
              className='absolute -left-[22vw] -top-[-5vh] z-10 h-[110vh] w-[22vw] bg-text-primary'
              id='left'
            >
              {/* <TetrisPiece
                variant='L'
                color='yellow'
                size='sm'
                className='relative left-1/3 top-[5%]'
              />
              <TetrisPiece
                variant='O'
                color='red'
                size='sm'
                className='relative left-1/3 top-[20%]'
              />
              <TetrisPiece
                variant='Z'
                color='blue'
                size='sm'
                className='relative left-1/3 top-[35%] translate-x-1/2'
              />
              <TetrisPiece
                variant='J'
                color='red'
                size='sm'
                className='relative left-1/3 top-[50%] translate-x-1/2'
              /> */}
            </div>
            <div
              className='absolute -right-[22vw] -top-[-5vh] z-10 h-[110vh] w-[22vw] bg-text-primary'
              id='right'
            />
            <div className='h-screen'>
              <Scroller ref={scrollbarRef}>
                <div id='scroll'>
                  <div id='srollnested' className='bg-white'>
                    <WelcomeBlock />
                    <div className='relative mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-between lg:px-20 xl:px-0'>
                      <AboutMe />
                      <Projects />
                      <Technologies />
                      <Contacts />
                      <AnimatedTetriesPiece ctx={ctx} />
                    </div>

                    <Bottom />
                  </div>
                </div>
              </Scroller>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
}
