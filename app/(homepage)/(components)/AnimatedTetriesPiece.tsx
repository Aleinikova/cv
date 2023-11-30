'use client';

import { useLayoutEffect, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import TetrisPiece from '@components/TetrisPiece';

const initAnimation = () => {
  const tl = gsap.timeline({
    defaults: {
      immediateRender: false,
    },
  });

  tl.to('#mainTetrisPiece', {
    scrollTrigger: {
      trigger: '#aboutMe',
      start: 'top',
      scrub: true,
      end: '+=10px',
    },
    opacity: 1,
  })
    .to('#mainTetrisPiece', {
      scrollTrigger: {
        trigger: '#aboutMe',
        pin: true,
        start: 'top',
        end: 'center',
        scrub: true,
        pinSpacing: true,
        // markers: true,
      },

      y: () =>
        window.innerHeight * 0.5 + +gsap.getProperty('#aboutMe', 'height'),
    })
    .to(
      '#mainTetrisPiece',
      {
        scrollTrigger: {
          trigger: '#aboutMe',
          start: (self) => self.previous().end,
          end: 'bottom',
          scrub: true,
        },
        y: () =>
          window.innerHeight * 0.5 +
          +gsap.getProperty('#aboutMe', 'height') * 1.5,
        rotation: 0,
      },
      '>'
    )
    .to(
      '#mainTetrisPiece',
      {
        scrollTrigger: {
          trigger: '#projects',
          start: 'top',
          end: `center`,
          scrub: true,
          pin: true,
          pinSpacing: true,
        },
        y: () =>
          window.innerHeight * 0.5 +
          +gsap.getProperty('#aboutMe', 'height') * 1.5 +
          (+gsap.getProperty('#mainTetrisPiece', 'height') * 2.56 -
            +gsap.getProperty('#mainTetrisPiece', 'height')) /
            2 +
          +gsap.getProperty('.projects-list', 'offsetTop') +
          +gsap.getProperty('#projects', 'height') / 2,
        scale: 2.56,
        x: -96,
      },
      '>'
    )
    .to(
      '.project-animated',
      {
        scrollTrigger: {
          trigger: '#projects',
          start: 'top+=1px',
          end: `top+=30px`,
          scrub: true,
        },
        opacity: 1,
      },
      '>'
    )
    .to(
      '#mainTetrisPiece',
      {
        scrollTrigger: {
          trigger: '#projects',
          start: 'top+=150px',
          end: () => `bottom-=${+gsap.getProperty('#projects', 'height') / 4}`,
          scrub: true,
        },
        y: () =>
          window.innerHeight * 0.5 +
          +gsap.getProperty('#aboutMe', 'height') * 1.5 +
          (+gsap.getProperty('#mainTetrisPiece', 'height') * 2.56 -
            +gsap.getProperty('#mainTetrisPiece', 'height')) /
            2 +
          +gsap.getProperty('.projects-list', 'offsetTop') +
          +gsap.getProperty('#projects', 'height'),
        scale: 1,
        x: -28,
      },
      '>'
    )
    .to(
      '.project-animated',
      {
        scrollTrigger: {
          trigger: '#projects',
          start: 'top+=150px',
          end: `+=200px`,
          scrub: true,
        },
        opacity: 0,
      },
      '>'
    )
    .to(
      '#mainTetrisPiece',
      {
        scrollTrigger: {
          trigger: '#technologies',
          // start: () =>
          //   `start-=${+gsap.getProperty('#technologies', 'height') / 2}`,
          start: () => `top-=${+gsap.getProperty('#projects', 'height') / 4}`,
          end: () => `bottom+=${+gsap.getProperty('#contacts', 'height')}`,
          scrub: true,
        },
        y: () =>
          window.innerHeight * 0.5 +
          +gsap.getProperty('#aboutMe', 'height') * 1.5 +
          (+gsap.getProperty('#mainTetrisPiece', 'height') * 2.56 -
            +gsap.getProperty('#mainTetrisPiece', 'height')) /
            2 +
          +gsap.getProperty('.projects-list', 'offsetTop') +
          +gsap.getProperty('#projects', 'height') +
          +gsap.getProperty('#technologies', 'height') +
          +gsap.getProperty('#contacts', 'height'),
        x: 0,
        rotation: 90,
      },
      '>'
    )
    .to(
      '#mainTetrisPiece',
      {
        scrollTrigger: {
          trigger: '#bottom',
          start: 'start-=200',
          end: 'bottom bottom',
          scrub: true,
        },
        y: () =>
          window.innerHeight * 0.5 +
          +gsap.getProperty('#aboutMe', 'height') * 1.5 +
          (+gsap.getProperty('#mainTetrisPiece', 'height') * 2.56 -
            +gsap.getProperty('#mainTetrisPiece', 'height')) /
            2 +
          +gsap.getProperty('.projects-list', 'offsetTop') +
          +gsap.getProperty('#projects', 'height') +
          +gsap.getProperty('#technologies', 'height') +
          +gsap.getProperty('#contacts', 'height') +
          524.5,
        scale: 1.2,
      },
      '>'
    )
    .to('#mainTetrisPiece', {
      scrollTrigger: {
        trigger: '#bottom',
        start: 'bottom bottom',
        end: 'bottom+=1 bottom',
        scrub: true,
      },
      opacity: 0,
    })
    .to('#mainTetrisPieceShadow', {
      scrollTrigger: {
        trigger: '#bottom',
        start: 'bottom bottom',
        end: 'bottom+=1 bottom',
        scrub: true,
      },
      opacity: 1,
    });

  // 400 footer final height
  gsap.to('#main', {
    scrollTrigger: {
      trigger: '#bottom',
      start: 'bottom bottom',
      end: `bottom+=800`,
      scrub: true,
      pin: true,
    },
    scale: 0.35,
    y: () => {
      const tetrisControls = +gsap.getProperty('#footer', 'height');
      const tetrisScreenPlaceholder =
        +window.innerHeight * 0.9 - tetrisControls;

      const mainContentScaled = +gsap.getProperty('#main', 'height') * 0.35;

      const tetrisScreenPlaceholderVerticalMargin =
        (tetrisScreenPlaceholder - mainContentScaled) / 2;

      return -(
        window.innerHeight / 2 -
        mainContentScaled / 2 -
        tetrisScreenPlaceholderVerticalMargin -
        window.innerHeight * 0.05
      );
    },
  });

  gsap.to('#content', {
    scrollTrigger: {
      trigger: '#bottom',
      start: 'bottom bottom',
      end: `bottom+=800`,
      scrub: true,
    },
    width: '700px',
    overflow: 'hidden',
  });

  gsap.to('#tetris', {
    scrollTrigger: {
      trigger: '#bottom',
      start: 'bottom bottom',
      end: `bottom+=800`,
      scrub: true,
    },
    width: '400px',
    height: '94vh',
  });

  gsap.to('#footer', {
    scrollTrigger: {
      trigger: '#bottom',
      start: 'bottom bottom',
      end: `bottom+=800`,
      scrub: true,
    },
    scale: 1,
  });
};

interface IAnimatedTetriesPiece {
  ctx: gsap.Context;
}

export default function AnimatedTetriesPiece({ ctx }: IAnimatedTetriesPiece) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useLayoutEffect(() => {
    if (isClient) {
      gsap.registerPlugin(ScrollTrigger);

      ctx.add(() => {
        initAnimation();
      });
    }

    return () => {
      ctx.revert();
    };
  }, [ctx, isClient]);

  useEffect(() => {
    const handleResize = () => {
      ctx.revert();

      ctx.add(() => {
        initAnimation();
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [ctx]);

  return (
    <TetrisPiece
      className='!absolute -top-[50vh] right-[60px] rotate-90 opacity-0'
      size='md'
      variant='Z'
      color='red'
      id='mainTetrisPiece'
    />
  );
}
