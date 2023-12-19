import gsap from 'gsap';

const tetrisPieceAnimationDesktop = (tl: gsap.core.Timeline) => {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  const tetrisPieceHeight = +gsap.getProperty('#mainTetrisPiece', 'height');
  const tetrisPieceWidth = +gsap.getProperty('#mainTetrisPiece', 'width');

  const shadowTetrisPieceWidth = +gsap.getProperty(
    '#mainTetrisPieceShadow',
    'width'
  );

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

  const tetrisPieceRightPosition = 60;

  tl.to('#mainTetrisPiece', {
    scrollTrigger: {
      trigger: '#aboutMe',
      start: 'top',
      scrub: true,
      end: '+=10px',
      invalidateOnRefresh: true,
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
        invalidateOnRefresh: true,
      },
      opacity: 1,
      y: () => screenHeight * 0.5 + aboutMeSectionHeight,
    })
    .to('#mainTetrisPiece', {
      scrollTrigger: {
        trigger: '#aboutMe',
        start: (self) => self.previous().end,
        end: 'bottom',
        scrub: true,
        invalidateOnRefresh: true,
      },
      opacity: 1,
      y: () => screenHeight * 0.5 + aboutMeSectionHeight * 1.5,
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
        invalidateOnRefresh: true,
      },
      opacity: 1,
      y: () => {
        const offsetBecauseOfScale =
          (tetrisPieceHeight * tetrisPieceScale - tetrisPieceHeight) / 2;

        return (
          screenHeight * 0.5 +
          aboutMeSectionHeight * 1.5 +
          offsetBecauseOfScale +
          +gsap.getProperty('.projects-list', 'offsetTop') +
          projectsSectionHeight / 2
        );
      },
      scale: tetrisPieceScale,
      x: () => {
        const offsetBecauseOfScale =
          (tetrisPieceHeight * tetrisPieceScale - tetrisPieceHeight) / 2;

        return (
          -offsetBecauseOfScale +
          tetrisPieceRightPosition -
          +gsap.getProperty('#mainContent', 'padding-right')
        );
      },
    })
    .to('.project-animated', {
      scrollTrigger: {
        trigger: '#projects',
        start: 'top+=1px',
        end: `top+=30px`,
        scrub: true,
        invalidateOnRefresh: true,
      },
      opacity: 1,
    })
    .to('#mainTetrisPiece', {
      scrollTrigger: {
        trigger: '#projects',
        start: 'top+=150px',
        end: () => `bottom-=${projectsSectionHeight / 4}`,
        scrub: true,
        invalidateOnRefresh: true,
      },
      opacity: 1,
      y: () =>
        screenHeight * 0.5 +
        aboutMeSectionHeight * 1.5 +
        projectsSectionHeight * 1.5,
      scale: 1,
      x: -28,
    })
    .to('.project-animated', {
      scrollTrigger: {
        trigger: '#projects',
        start: 'top+=150px',
        end: `+=200px`,
        scrub: true,
        invalidateOnRefresh: true,
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
        invalidateOnRefresh: true,
      },
      opacity: 1,
      y: () => {
        const offsetBecauseOfScale =
          (tetrisPieceHeight * 1.2 - tetrisPieceHeight) / 2;

        return (
          screenHeight * 0.5 +
          aboutMeSectionHeight * 1.5 +
          projectsSectionHeight * 1.5 +
          technologiesSectionHeight +
          spacerHeight +
          contactsSectionHeight +
          offsetBecauseOfScale +
          tetrisWidthInBottomSection
        );
      },
      x: () => {
        const offsetBecauseOfScale =
          (tetrisPieceWidth * 1.2 - tetrisPieceWidth) / 2;

        return (
          tetrisPieceRightPosition -
          offsetBecauseOfScale -
          (screenWidth -
            +gsap.getProperty('#mainTetrisPieceShadow', 'offsetLeft') -
            shadowTetrisPieceWidth) +
          (screenWidth - +gsap.getProperty('#mainContent', 'width')) / 2
        );
      },
      rotation: 90,
      scale: 1.2,
    })
    .to('#mainTetrisPiece', {
      scrollTrigger: {
        trigger: '#bottom',
        start: 'bottom bottom',
        end: 'bottom+=1 bottom',
        scrub: true,
      },
      opacity: 0,
      invalidateOnRefresh: true,
    })
    .to('#mainTetrisPieceShadow', {
      scrollTrigger: {
        trigger: '#bottom',
        start: 'bottom bottom',
        end: 'bottom+=1 bottom',
        scrub: true,
      },
      opacity: 1,
      invalidateOnRefresh: true,
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
        invalidateOnRefresh: true,
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
        invalidateOnRefresh: true,
      },
      opacity: 0,
    })
    .to('#mainTetrisPieceMobile', {
      scrollTrigger: {
        trigger: '#technologies',
        start: () => `top-=${tetrisPieceHeight / 2}`,
        end: () => `bottom bottom-=${contactsSectionHeight * 0.9}`,
        scrub: true,
        invalidateOnRefresh: true,
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
        invalidateOnRefresh: true,
      },
      y: () =>
        aboutMeSectionHeight +
        projectsSectionHeight +
        (screenHeight - (projectElHeight * 3) / 2 - tetrisPieceHeight) +
        technologiesSectionHeight +
        contactsSectionHeight +
        spacerHeight +
        (tetrisPieceHeight - tetrisPieceHeight * 0.48) / 2 +
        // TODO: check below
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
        invalidateOnRefresh: true,
      },
      opacity: 0,
    })
    .to('#mainTetrisPieceShadowMobile', {
      scrollTrigger: {
        trigger: '#bottom',
        start: 'bottom bottom',
        end: 'bottom+=1 bottom',
        scrub: true,
        invalidateOnRefresh: true,
      },
      opacity: 1,
    });
};

const tetrisPieceAnimationTablet = (tl: gsap.core.Timeline) => {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  const tetrisPieceHeight = +gsap.getProperty(
    '#mainTetrisPieceTablet',
    'height'
  );

  const tetrisPieceWidth = +gsap.getProperty('#mainTetrisPieceTablet', 'width');

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

  const tetrisPieceScale = projectElHeight / (tetrisPieceWidth / 2);

  const tetrisPieceRightPosition = 120;

  const tetrisWidthInBottomSection = 100;

  tl.set('#mainTetrisPieceTablet', {
    y: () =>
      aboutMeSectionHeight +
      +gsap.getProperty('.projects-list', 'offsetTop') +
      projectElHeight * 2 +
      (tetrisPieceHeight * tetrisPieceScale - tetrisPieceHeight) / 2,
    x: () => {
      const offsetBecauseOfScale =
        (tetrisPieceWidth * tetrisPieceScale - tetrisPieceWidth) / 2;

      return (
        (-tetrisPieceWidth * tetrisPieceScale) / 2 -
        offsetBecauseOfScale -
        (+gsap.getProperty('#mainContent', 'padding-right') -
          tetrisPieceRightPosition)
      );
    },
    scale: tetrisPieceScale,
  })
    .to('#mainTetrisPieceTablet', {
      scrollTrigger: {
        trigger: '#projects',
        start: () => `bottom bottom-=${(projectElHeight * 3) / 2}`,
        end: `bottom`,
        scrub: true,
        pin: true,
        pinSpacing: true,
        invalidateOnRefresh: true,
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
        start: () => `bottom bottom-=${projectElHeight}`,
        end: `bottom+=100`,
        scrub: true,
        invalidateOnRefresh: true,
      },
      opacity: 0,
    })
    .to('#mainTetrisPieceTablet', {
      scrollTrigger: {
        trigger: '#technologies',
        start: () => `top-=${tetrisPieceHeight / 2}`,
        end: () =>
          `bottom bottom-=${
            contactsSectionHeight + spacerHeight + bottomSectionHeight * 0.8
          }`,
        scrub: true,
        invalidateOnRefresh: true,
      },
      y: () =>
        aboutMeSectionHeight +
        projectsSectionHeight +
        (screenHeight - (projectElHeight * 3) / 2 - tetrisPieceHeight) +
        technologiesSectionHeight +
        contactsSectionHeight +
        spacerHeight +
        tetrisWidthInBottomSection * 3,
      x: () =>
        tetrisPieceRightPosition -
        (screenWidth -
          +gsap.getProperty('#mainTetrisPieceShadowTablet', 'offsetLeft') -
          tetrisPieceWidth),
    })
    .to('#mainTetrisPieceTablet', {
      scrollTrigger: {
        trigger: '#bottom',
        start: 'bottom bottom',
        end: 'bottom+=1 bottom',
        scrub: true,
        invalidateOnRefresh: true,
      },
      opacity: 0,
    })
    .to('#mainTetrisPieceShadowTablet', {
      scrollTrigger: {
        trigger: '#bottom',
        start: 'bottom bottom',
        end: 'bottom+=1 bottom',
        scrub: true,
        invalidateOnRefresh: true,
      },
      opacity: 1,
    });
};

const tetrisAnimation = (tl: gsap.core.Timeline, context: gsap.Context) => {
  const { isMobile } = context.conditions;

  const screenHeight = window.innerHeight;

  const contentScreenHeight = +gsap.getProperty('#screen', 'height');
  const tetrisControls = +gsap.getProperty('#footer', 'height');

  const tetrisFinalHeightCoffDesktop = 0.94;
  const tetrisFinalHeightCoffMobile = 0.96;

  const tetrisScreenPaddings = 60;

  const scale =
    (contentScreenHeight * tetrisFinalHeightCoffDesktop -
      tetrisControls -
      tetrisScreenPaddings) /
    contentScreenHeight;

  tl.to('#screen', {
    scrollTrigger: {
      trigger: '#bottom',
      start: 'bottom bottom',
      end: `bottom+=800`,
      scrub: true,
      pin: true,
      invalidateOnRefresh: true,
    },
    scale: () => scale,
    y: () => {
      const tetrisScreenPlaceholder =
        contentScreenHeight *
          (isMobile
            ? tetrisFinalHeightCoffMobile
            : tetrisFinalHeightCoffDesktop) -
        tetrisControls;

      const mainContentScaled = contentScreenHeight * scale;

      const tetrisScreenPlaceholderVerticalMargin =
        (tetrisScreenPlaceholder - mainContentScaled) / 2;

      const tetrisVerticalMargin =
        (screenHeight -
          screenHeight *
            (isMobile
              ? tetrisFinalHeightCoffMobile
              : tetrisFinalHeightCoffDesktop)) /
        2;

      return -(
        screenHeight / 2 -
        mainContentScaled / 2 -
        tetrisScreenPlaceholderVerticalMargin -
        tetrisVerticalMargin
      );
    },
  })
    .to('#content', {
      scrollTrigger: {
        trigger: '#bottom',
        start: 'bottom bottom',
        end: `bottom+=800`,
        scrub: true,
        invalidateOnRefresh: true,
      },
      width: '700px',
      overflow: 'hidden',
    })
    .to('#tetris', {
      scrollTrigger: {
        trigger: '#bottom',
        start: 'bottom bottom',
        end: `bottom+=800`,
        scrub: true,
        invalidateOnRefresh: true,
      },
      width: () => {
        if (isMobile) {
          return '94vw';
        }

        return `${(screenHeight * tetrisFinalHeightCoffDesktop) / 2}px`;
      },
      height: () =>
        isMobile
          ? `${tetrisFinalHeightCoffMobile * 100}vh`
          : `${tetrisFinalHeightCoffDesktop * 100}vh`,
    })
    .to('#footer', {
      scrollTrigger: {
        trigger: '#bottom',
        start: 'bottom bottom+=500',
        end: `bottom+=800`,
        scrub: true,
        invalidateOnRefresh: true,
      },
      scale: 1,
    });
};

// eslint-disable-next-line import/prefer-default-export
export const mainAnimation = (
  context: gsap.Context,
  tl: gsap.core.Timeline
) => {
  const { isMobile, isTablet } = context.conditions;

  if (isMobile) {
    tetrisPieceAnimationMobile(tl);
  } else if (isTablet) {
    tetrisPieceAnimationTablet(tl);
  } else {
    tetrisPieceAnimationDesktop(tl);
  }
  tetrisAnimation(tl, context);
};
