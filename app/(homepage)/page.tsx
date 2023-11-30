'use client';

import {
  useRef,
  useMemo,
  useEffect,
  useCallback,
  MutableRefObject,
} from 'react';
import gsap from 'gsap';
import type { Scrollbar } from 'smooth-scrollbar/scrollbar';

import Scroller from '@components/Scroller';
import Header from '@components/Header';
import TetrisPiece from '@components/TetrisPiece';

import AboutMe from './(components)/AboutMe';
import Bottom from './(components)/Bottom';
import Contacts from './(components)/Contacts';
import Projects from './(components)/Projects';
import Technologies from './(components)/Technologies';
import WelcomeBlock from './(components)/WelcomeBlock';
import Tetris from './(components)/AnimatedTetris';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  const ctx = useMemo(() => gsap.context(() => {}, containerRef), []);

  const scrollbarRef = useRef<Scrollbar>();

  useEffect(() => {
    const containerEl = containerRef.current;

    const handleWheel = (e: WheelEvent) => {
      if (
        scrollbarRef.current &&
        !scrollbarRef.current.contentEl.contains(e.target as HTMLElement)
      ) {
        scrollbarRef.current.setPosition(
          scrollbarRef.current?.scrollLeft,
          (scrollbarRef.current?.scrollTop || 0) + e.deltaY
        );
      }
    };

    containerEl.addEventListener('mousewheel', handleWheel);

    return () => {
      containerEl.addEventListener('mousewheel', handleWheel);
    };
  }, []);

  const aboutRef = useRef();
  const projectsRef = useRef();
  const technologiesRef = useRef();
  const contactsRef = useRef();

  const navigation = useMemo(
    () => [
      {
        title: 'about me',
        anchorRef: aboutRef,
      },
      {
        title: 'projects',
        anchorRef: projectsRef,
      },
      {
        title: 'technologies',
        anchorRef: technologiesRef,
      },
      {
        title: 'contacts',
        anchorRef: contactsRef,
      },
    ],
    []
  );

  const handleClick = useCallback((el: MutableRefObject<HTMLElement>) => {
    scrollbarRef.current.scrollIntoView(el.current);
  }, []);

  return (
    <div ref={containerRef} className='h-screen overflow-hidden'>
      <Tetris ctx={ctx} />
      <div
        id='screen'
        className='relative flex h-screen w-screen justify-center overflow-hidden'
      >
        <div className='flex-column flex w-screen justify-center' id='content'>
          <div className='relative h-screen w-screen'>
            <Scroller ref={scrollbarRef}>
              <Header navigation={navigation} onClick={handleClick} />
              <main className='overflow-x-hidden bg-white'>
                <WelcomeBlock />
                <div className='relative mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-between lg:px-20 xl:px-0'>
                  <AboutMe ref={aboutRef} />
                  <Projects ref={projectsRef} />
                  <Technologies ref={technologiesRef} />
                  <Contacts ref={contactsRef} />
                  <TetrisPiece
                    className='!absolute -top-[50vh] right-[60px] rotate-90 opacity-0'
                    size='md'
                    variant='Z'
                    color='red'
                    id='mainTetrisPiece'
                  />
                </div>

                <Bottom />
              </main>
            </Scroller>
          </div>
        </div>
      </div>
    </div>
  );
}
