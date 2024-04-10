'use client';

import {
  useRef,
  useMemo,
  useEffect,
  useCallback,
  MutableRefObject,
} from 'react';
import type { Scrollbar } from 'smooth-scrollbar/scrollbar';
import dynamic from 'next/dynamic';

import Scroller from '@components/Scroller';
import Header from '@components/Header';

import AboutMe from './components/AboutMe';
import Contacts from './components/Contacts';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import WelcomeBlock from './components/WelcomeBlock';

const DynamicAnimatedTetrisPiece = dynamic(
  () => import('./components/AnimatedTetrisPiece'),
  {
    loading: () => null,
  }
);

const TetrisBottomPieces = dynamic(
  () => import('./components/TetrisBottomPieces'),
  {
    loading: () => <div />,
  }
);

const Tetris = dynamic(() => import('./components/AnimatedTetris'), {
  loading: () => <div />,
});

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

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

  const touchStart = useRef(0);

  useEffect(() => {
    const containerEl = containerRef.current;

    const handleTouchStart = (e) => {
      touchStart.current = e.changedTouches[0].clientY;
    };

    containerEl.addEventListener('touchstart', handleTouchStart);

    return () => {
      containerEl.addEventListener('touchstart', handleTouchStart);
    };
  }, []);

  useEffect(() => {
    const containerEl = containerRef.current;

    const handleTouchMove = (e) => {
      if (
        scrollbarRef.current &&
        !scrollbarRef.current.contentEl.contains(e.target as HTMLElement)
      ) {
        scrollbarRef.current.setPosition(
          scrollbarRef.current?.scrollLeft,
          (scrollbarRef.current?.scrollTop || 0) +
            touchStart.current -
            e.changedTouches[0].clientY
        );
      }
    };

    containerEl.addEventListener('touchmove', handleTouchMove);

    return () => {
      containerEl.addEventListener('touchmove', handleTouchMove);
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

  const bottomRef = useRef();

  return (
    <div ref={containerRef} className='h-screen overflow-hidden'>
      <Tetris />
      <div
        id='screen'
        className='relative flex h-screen w-screen justify-center overflow-hidden'
      >
        <div className='flex-column flex w-screen justify-center' id='content'>
          <div className='relative h-screen w-screen'>
            <Scroller ref={scrollbarRef}>
              <Header navigation={navigation} onClick={handleClick} />
              <main className='w-[100vw] overflow-x-hidden bg-white'>
                <WelcomeBlock />
                <div
                  className='relative mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-between px-4 md:px-6 lg:px-20 xl:px-10 2xl:px-0'
                  id='mainContent'
                >
                  <AboutMe ref={aboutRef} />
                  <Projects ref={projectsRef} />
                  <Technologies ref={technologiesRef} />
                  <Contacts ref={contactsRef} />
                  <DynamicAnimatedTetrisPiece />
                  <div id='spacer' className='h-[300px]' />
                </div>

                <TetrisBottomPieces ref={bottomRef} />
              </main>
            </Scroller>
          </div>
        </div>
      </div>
    </div>
  );
}
