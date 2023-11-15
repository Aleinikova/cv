'use client';

import { useLayoutEffect, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import TetrisPiece from '@components/TetrisPiece';

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
        const tl = gsap.timeline({
          defaults: {
            immediateRender: false,
          },
        });

        // gsap.to('#mainTetrisPiece', {
        //   scrollTrigger: {
        //     trigger: '#aboutMe',
        //     start: 'top',
        //     scrub: true,
        //     end: () => `+=10px`,
        //     pin: true,
        //     pinSpacing: true,
        //   },
        //   opacity: 1,
        // });

        // const tl = gsap.timeline();

        // gsap.to('#mainTetrisPiece', {
        //   scrollTrigger: {
        //     trigger: '#aboutMe',
        //     start: 'top',
        //     end: 'top+=10px',
        //     scrub: true,
        //     // pin: true,
        //     // pinSpacing: true,
        //     markers: true,
        //   },
        //   immediateRender: false,
        //   opacity: 1,
        //   // +gsap.getProperty('#aboutMe', 'height') * 0.75 +
        //   // +gsap.getProperty('#aboutMe', 'height') * 0.85,
        // });

        // gsap.to('#mainTetrisPiece', {
        //   scrollTrigger: {
        //     trigger: '#aboutMe',
        //     start: 'top',
        //     end: () => `top+=${+gsap.getProperty('#aboutMe', 'height') * 0.3}`,
        //     scrub: true,
        //     // pin: true,
        //     // pinSpacing: true,
        //     markers: true,
        //   },
        //   immediateRender: false,
        //   y: () =>
        //     window.innerHeight * 0.3 +
        //     +gsap.getProperty('#aboutMe', 'height') / 2,
        // });

        // gsap.to('#mainTetrisPiece', {
        //   scrollTrigger: {
        //     trigger: '#aboutMe',
        //     start: () =>
        //       `top+=${+gsap.getProperty('#aboutMe', 'height') * 0.3}`,
        //     end: 'bottom',
        //     scrub: true,
        //     // pin: true,
        //     // pinSpacing: true,
        //     markers: true,
        //   },
        //   immediateRender: false,
        //   y: () =>
        //     window.innerHeight * 0.3 + +gsap.getProperty('#aboutMe', 'height'),
        //   rotation: 0,
        // });

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
              window.innerHeight * 0.5 +
              +gsap.getProperty('#aboutMe', 'height'),
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
                scrub: 1,
                markers: true,
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
                scrub: 1,
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
                end: () =>
                  `bottom-=${+gsap.getProperty('#projects', 'height') / 4}`,
                scrub: 1,
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
                scrub: 1,
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
                start: () =>
                  `top-=${+gsap.getProperty('#projects', 'height') / 4}`,
                end: () =>
                  `bottom+=${+gsap.getProperty('#contacts', 'height')}`,
                scrub: 1,
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
          );
        // .to(
        //   '#mainTetrisPiece',
        //   {
        //     scrollTrigger: {
        //       trigger: '#contacts',
        //       start: (self) => self.previous().end,
        //       end: `bottom`,
        //       scrub: 1,
        //       markers: true,
        //     },
        //     y: () =>
        //       window.innerHeight * 0.5 +
        //       +gsap.getProperty('#aboutMe', 'height') * 1.5 +
        //       (+gsap.getProperty('#mainTetrisPiece', 'height') * 2.56 -
        //         +gsap.getProperty('#mainTetrisPiece', 'height')) /
        //         2 +
        //       +gsap.getProperty('.projects-list', 'offsetTop') +
        //       +gsap.getProperty('#projects', 'height') +
        //       +gsap.getProperty('#technologies', 'height') +
        //       +gsap.getProperty('#contacts', 'height'),

        //     scale: 1.2056,
        //   },
        //   '<'
        // );
        // .to(
        //   '#mainTetrisPiece',
        //   {
        //     scrollTrigger: {
        //       trigger: '#bottom',
        //       start: 'top',
        //       end: `top+=200px`,
        //       scrub: 1,
        //       pin: true,
        //       markers: true,
        //     },
        //     y: () =>
        //       +gsap.getProperty('#aboutMe', 'height') +
        //       window.innerHeight * 0.5 +
        //       500 +
        //       +gsap.getProperty('#projects', 'height') -
        //       8 +
        //       +gsap.getProperty('#projects', 'height') +
        //       +gsap.getProperty('#technologies', 'height') +
        //       +gsap.getProperty('#contacts', 'height') +
        //       400 +
        //       +gsap.getProperty('#bottom', 'height'),
        //   },
        //   '>'
        // );

        gsap.to('#main', {
          scrollTrigger: {
            trigger: '#bottom',
            start: 'top',
            end: `bottom`,
            scrub: 1,
            pin: '#main',
            markers: true,
          },
          scale: 0.4,
          y: () => 2700,
        });
      });
    }

    return () => {
      ctx.revert();
    };
  }, [ctx, isClient]);

  return (
    <TetrisPiece
      className='!absolute -top-[50vh] right-[60px] rotate-90 opacity-0'
      size='medium'
      variant='Z'
      color='red'
      id='mainTetrisPiece'
    />
  );
}
