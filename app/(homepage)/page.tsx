'use client';

import { useRef, useMemo, useEffect } from 'react';
import gsap from 'gsap';
import Scrollbar from 'smooth-scrollbar';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import AboutMe from './AboutMe';
import Bottom from './Bottom';
import Contacts from './Contacts';
import Projects from './Projects';
import Technologies from './Technologies';
import WelcomeBlock from './WelcomeBlock';
import AnimatedTetriesPiece from './AnimatedTetriesPiece';

export default function Home() {
  const animationContainerRef = useRef<HTMLDivElement>(null);

  const ctx = useMemo(() => gsap.context(() => {}, animationContainerRef), []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    Scrollbar.init(animationContainerRef.current);

    const scroller = animationContainerRef.current;

    const bodyScrollBar = Scrollbar.init(scroller, {
      damping: 0.1,
      delegateTo: document,
      alwaysShowTracks: true,
    });

    ScrollTrigger.scrollerProxy(scroller, {
      scrollTop(value) {
        if (arguments.length) {
          bodyScrollBar.scrollTop = value;
        }
        return bodyScrollBar.scrollTop;
      },
    });

    bodyScrollBar.addListener(ScrollTrigger.update);

    ScrollTrigger.defaults({ scroller });
  }, []);

  return (
    <main ref={animationContainerRef} className='h-screen'>
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
