import gsap from 'gsap';

const breakPoint = 1440;

const tetrisPieceAnimationDesktop = (tl: gsap.core.Timeline) => {
  // gsap.to('.box', {
  //   rotation: isDesktop ? 360 : 180, // spin further if desktop
  //   duration: reduceMotion ? 0 : 2, // skip to the end if prefers-reduced-motion
  // });

  const tetrisPieceHeight = +gsap.getProperty('#mainTetrisPiece', 'height');

  const aboutMeSectionHeight = +gsap.getProperty('#aboutMe', 'height');
  const technologiesSectionHeight = +gsap.getProperty(
    '#technologies',
    'height'
  );
  const contactsSectionHeight = +gsap.getProperty('#contacts', 'height');
  const spacerHeight = +gsap.getProperty('#spacer', 'height');
  const bottomSectionHeight = +gsap.getProperty('#bottom', 'height');
  const projectsSectionHeight = +gsap.getProperty('#projects', 'height');
  const projectElHeight = +gsap.getProperty('.project', 'height');

  const tetrisPieceScale = projectElHeight / 100;

  const tetrisWidthInBottomSection = 120;

  const tetrisPieceRightPosition = 20;

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
      },

      y: () => window.innerHeight * 0.5 + aboutMeSectionHeight,
    })
    .to('#mainTetrisPiece', {
      scrollTrigger: {
        trigger: '#aboutMe',
        start: (self) => self.previous().end,
        end: 'bottom',
        scrub: true,
      },
      y: () => window.innerHeight * 0.5 + aboutMeSectionHeight * 1.5,
      rotation: 0,
    })
    .to('#mainTetrisPiece', {
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
        aboutMeSectionHeight * 1.5 +
        (tetrisPieceHeight * tetrisPieceScale - tetrisPieceHeight) / 2 +
        +gsap.getProperty('.projects-list', 'offsetTop') +
        projectsSectionHeight / 2,
      scale: tetrisPieceScale,
      x: () =>
        -(tetrisPieceHeight * tetrisPieceScale - tetrisPieceHeight) / 2 +
        tetrisPieceRightPosition,
    })
    .to('.project-animated', {
      scrollTrigger: {
        trigger: '#projects',
        start: 'top+=1px',
        end: `top+=30px`,
        scrub: true,
      },
      opacity: 1,
    })
    .to('#mainTetrisPiece', {
      scrollTrigger: {
        trigger: '#projects',
        start: 'top+=150px',
        end: () => `bottom-=${projectsSectionHeight / 4}`,
        scrub: true,
      },
      y: () =>
        window.innerHeight * 0.5 +
        aboutMeSectionHeight * 1.5 +
        (tetrisPieceHeight * tetrisPieceScale - tetrisPieceHeight) / 2 +
        projectsSectionHeight,
      scale: 1,
      x: -28,
    })
    .to('.project-animated', {
      scrollTrigger: {
        trigger: '#projects',
        start: 'top+=150px',
        end: `+=200px`,
        scrub: true,
      },
      opacity: 0,
    })
    .to('#mainTetrisPiece', {
      scrollTrigger: {
        trigger: '#technologies',
        start: () => `top-=${projectsSectionHeight / 4}`,
        end: () =>
          `bottom bottom-=${
            contactsSectionHeight + spacerHeight + bottomSectionHeight * 0.98
          }`,
        scrub: true,
      },
      y: () =>
        window.innerHeight * 0.5 +
        aboutMeSectionHeight * 1.5 +
        (tetrisPieceHeight * tetrisPieceScale - tetrisPieceHeight) / 2 +
        projectsSectionHeight +
        technologiesSectionHeight +
        spacerHeight +
        contactsSectionHeight +
        tetrisWidthInBottomSection * 3 -
        tetrisPieceHeight * 0.1,
      x: 0,
      rotation: 90,
      scale: 1.2,
    })
    // .to('#mainTetrisPiece', {
    //   scrollTrigger: {
    //     trigger: '#contacts',
    //     start: () => `top-=${projectsSectionHeight / 4}`,
    //     end: () => `bottom-=${contactsSectionHeight * 0.9}`,
    //     scrub: true,
    //   },
    //   y: () =>
    //     window.innerHeight * 0.5 +
    //     aboutMeSectionHeight * 1.5 +
    //     (tetrisPieceHeight * 2.56 - tetrisPieceHeight) / 2 +
    //     projectsSectionHeight +
    //     technologiesSectionHeight,
    //   x: 0,
    //   rotation: 90,
    // })
    // .to('#mainTetrisPiece', {
    //   scrollTrigger: {
    //     trigger: '#technologies',
    //     start: () => `top-=${projectsSectionHeight / 4}`,
    //     end: () => `bottom bottom-=${contactsSectionHeight}`,
    //     scrub: true,
    //   },
    //   y: () =>
    //     window.innerHeight * 0.5 +
    //     aboutMeSectionHeight * 1.5 +
    //     (tetrisPieceHeight * 2.56 - tetrisPieceHeight) / 2 +
    //     projectsSectionHeight +
    //     technologiesSectionHeight +
    //     spacerHeight +
    //     contactsSectionHeight,
    //   x: 0,
    //   rotation: 90,
    // })
    // .to('#mainTetrisPiece', {
    //   scrollTrigger: {
    //     trigger: '#bottom',
    //     start: 'start-=200',
    //     end: 'bottom bottom',
    //     scrub: true,
    //   },
    //   y: () =>
    //     window.innerHeight * 0.5 +
    //     aboutMeSectionHeight * 1.5 +
    //     (tetrisPieceHeight * 2.56 - tetrisPieceHeight) / 2 +
    //     projectsSectionHeight +
    //     technologiesSectionHeight +
    //     contactsSectionHeight +
    //     spacerHeight,
    //   scale: 1.2,
    // })
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
};

// TODO: remove absolute numbers
const tetrisPieceAnimationMobile = (tl: gsap.core.Timeline) => {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  const tetrisPieceScale = (screenWidth * 0.8) / 100;

  const tetrisPieceHeight = +gsap.getProperty(
    '#mainTetrisPieceMobile',
    'height'
  );

  const tetrisPieceWidth = +gsap.getProperty('#mainTetrisPieceMobile', 'width');

  const aboutMeSectionHeight = +gsap.getProperty('#aboutMe', 'height');
  const technologiesSectionHeight = +gsap.getProperty(
    '#technologies',
    'height'
  );
  const contactsSectionHeight = +gsap.getProperty('#contacts', 'height');
  const spacerHeight = +gsap.getProperty('#spacer', 'height');
  const bottomSectionHeight = +gsap.getProperty('#bottom', 'height');
  const projectsSectionHeight = +gsap.getProperty('#projects', 'height');
  const projectElHeight = +gsap.getProperty('.project', 'height');

  const tetrisPieceRightPosition = 20;

  const tetrisWidthInBottomSection = 48;

  tl.set('#mainTetrisPieceMobile', {
    y: () =>
      aboutMeSectionHeight +
      +gsap.getProperty('.projects-list', 'offsetTop') +
      projectElHeight * 4 +
      (tetrisPieceHeight * tetrisPieceScale - tetrisPieceHeight) / 2,
    x: () =>
      -screenWidth +
      (screenWidth - screenWidth * 0.8) / 2 +
      tetrisPieceWidth +
      tetrisPieceRightPosition +
      (tetrisPieceWidth * tetrisPieceScale - tetrisPieceWidth) / 2,
    scale: tetrisPieceScale,
  })
    .to('#mainTetrisPieceMobile', {
      scrollTrigger: {
        trigger: '#projects',
        start: () => `bottom bottom-=${(projectElHeight * 3) / 2}`,
        end: `bottom`,
        scrub: true,
        pin: true,
        pinSpacing: true,
      },
      y: () =>
        aboutMeSectionHeight +
        projectsSectionHeight +
        (screenHeight - (projectElHeight * 3) / 2 - tetrisPieceHeight),
      scale: 1,
      x: 0,
    })
    .to('.project-animated-mobile', {
      scrollTrigger: {
        trigger: '#projects',
        start: 'bottom bottom',
        end: `bottom+=100`,
        scrub: true,
      },
      opacity: 0,
    })
    .to('#mainTetrisPieceMobile', {
      scrollTrigger: {
        trigger: '#technologies',
        start: () => `top-=${tetrisPieceHeight / 2}`,
        end: () => `bottom bottom-=${contactsSectionHeight * 0.9}`,
        scrub: true,
      },
      y: () =>
        aboutMeSectionHeight +
        projectsSectionHeight +
        (screenHeight - (projectElHeight * 3) / 2 - tetrisPieceHeight) +
        technologiesSectionHeight +
        (tetrisPieceHeight - tetrisPieceHeight * 0.48) / 2,
      scale: 0.48,
    })
    .to('#mainTetrisPieceMobile', {
      scrollTrigger: {
        trigger: '#contacts',
        start: () => `bottom bottom`,
        end: () => `bottom bottom-=${spacerHeight + bottomSectionHeight * 0.8}`,
        scrub: true,
      },
      y: () =>
        aboutMeSectionHeight +
        projectsSectionHeight +
        (screenHeight - (projectElHeight * 3) / 2 - tetrisPieceHeight) +
        technologiesSectionHeight +
        contactsSectionHeight +
        spacerHeight +
        (tetrisPieceHeight - tetrisPieceHeight * 0.48) / 2 +
        tetrisWidthInBottomSection / 2 +
        tetrisWidthInBottomSection * 2 +
        tetrisPieceRightPosition,
      rotate: 90,
      x: () =>
        tetrisPieceRightPosition +
        (tetrisPieceWidth - tetrisPieceWidth * 0.48) / 2 -
        (screenWidth -
          +gsap.getProperty('#mainTetrisPieceShadowMobile', 'offsetLeft') -
          tetrisPieceWidth * 0.48),
    })
    .to('#mainTetrisPieceMobile', {
      scrollTrigger: {
        trigger: '#bottom',
        start: 'bottom bottom',
        end: 'bottom+=1 bottom',
        scrub: true,
      },
      opacity: 0,
    })
    .to('#mainTetrisPieceShadowMobile', {
      scrollTrigger: {
        trigger: '#bottom',
        start: 'bottom bottom',
        end: 'bottom+=1 bottom',
        scrub: true,
      },
      opacity: 1,
    });
};

const tetrisAnimation = (tl: gsap.core.Timeline, context: gsap.Context) => {
  const { isMobile } = context.conditions;

  tl.to('#screen', {
    scrollTrigger: {
      trigger: '#bottom',
      start: 'bottom bottom',
      end: `bottom+=800`,
      scrub: true,
      pin: true,
    },
    scale: () => (isMobile ? 0.45 : 0.35),
    y: () => {
      const tetrisControls = +gsap.getProperty('#footer', 'height');
      const tetrisScreenPlaceholder =
        +window.innerHeight * 0.9 - tetrisControls;

      const mainContentScaled =
        +gsap.getProperty('#screen', 'height') * (isMobile ? 0.45 : 0.35);

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

  tl.to('#content', {
    scrollTrigger: {
      trigger: '#bottom',
      start: 'bottom bottom',
      end: `bottom+=800`,
      scrub: true,
    },
    width: '700px',
    overflow: 'hidden',
  });

  tl.to('#tetris', {
    scrollTrigger: {
      trigger: '#bottom',
      start: 'bottom bottom',
      end: `bottom+=800`,
      scrub: true,
    },
    width: () => (isMobile ? '94vw' : '400px'),
    height: () => (isMobile ? '96vh' : '94vh'),
  });

  tl.to('#footer', {
    scrollTrigger: {
      trigger: '#bottom',
      start: 'bottom bottom+=500',
      end: `bottom+=800`,
      scrub: true,
    },
    scale: 1,
  });
};

// eslint-disable-next-line import/prefer-default-export
export const mainAnimation = () => {
  const tl = gsap.timeline({
    defaults: {
      immediateRender: false,
    },
  });

  const mm = gsap.matchMedia();

  mm.add(
    {
      // set up any number of arbitrarily-named conditions. The function below will be called when ANY of them match.
      isDesktop: `(min-width: ${breakPoint}px)`,
      isMobile: `(max-width: ${breakPoint - 1}px)`,
      reduceMotion: '(prefers-reduced-motion: reduce)',
    },
    (context) => {
      const { isMobile } = context.conditions;

      if (isMobile) {
        tetrisPieceAnimationMobile(tl);
      } else {
        tetrisPieceAnimationDesktop(tl);
      }
      tetrisAnimation(tl, context);
    }
  );
};
