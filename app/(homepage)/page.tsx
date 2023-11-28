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

import AboutMe from './(components)/AboutMe';
import Bottom from './(components)/Bottom';
import Contacts from './(components)/Contacts';
import Projects from './(components)/Projects';
import Technologies from './(components)/Technologies';
import WelcomeBlock from './(components)/WelcomeBlock';
import AnimatedTetriesPiece from './(components)/AnimatedTetriesPiece';
import Footer from './(components)/Footer';

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
    <div ref={animationContainerRef}>
      <div ref={test} className='h-screen overflow-hidden' id='visible'>
        <div
          id='tetris'
          className='absolute inset-x-1/2 inset-y-1/2 h-[350vh] w-[100vw] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl bg-text-primary'
        >
          {/* <div className='height-[100vh]' /> */}
          <Footer />
        </div>
        <div id='cutter' className='relative w-screen overflow-hidden'>
          <div
            id='main'
            className='relative flex h-screen w-screen justify-center overflow-hidden'
          >
            <div
              className='flex-column flex w-screen justify-center'
              id='content'
            >
              <div className='h-[15vh]' />
              <div className='h-screen w-screen'>
                <Scroller ref={scrollbarRef}>
                  <div className='relative' id='scroll'>
                    <Header navigation={navigation} onClick={handleClick} />
                    <main
                      id='srollnested'
                      className='overflow-x-hidden bg-white'
                    >
                      <WelcomeBlock />
                      <div className='relative mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-between lg:px-20 xl:px-0'>
                        <AboutMe ref={aboutRef} />
                        <Projects ref={projectsRef} />
                        <Technologies ref={technologiesRef} />
                        <Contacts ref={contactsRef} />
                        <AnimatedTetriesPiece ctx={ctx} />
                      </div>

                      <Bottom />
                    </main>
                  </div>
                </Scroller>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
