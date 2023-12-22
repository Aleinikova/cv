import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const tetrisPieceAnimationDesktop = () => {
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

  ScrollTrigger.create({
    trigger: '#aboutMe',
    pin: true,
    start: 'top top',
    end: 'center top',
    scrub: true,
    pinSpacing: true,
  });

  ScrollTrigger.create({
    trigger: '#projects',
    start: 'top',
    end: `center`,
    scrub: true,
    pin: true,
    pinSpacing: true,
  });

  const tl = gsap.timeline({
    defaults: {
      immediateRender: false,
    },
    scrollTrigger: {
      trigger: '#mainContent',
      endTrigger: '#bottom',
      start: 'top top',
      scrub: true,
      end: 'bottom bottom',
    },
  });

  // all durations are in pexels, when scrub: tru duration works like proportions

  // set initial tetris piece position
  gsap.set('#mainTetrisPiece', {
    y: '-50vh',
    rotate: 90,
  });

  // opacity 1 for piece
  tl.to('#mainTetrisPiece', {
    opacity: 1,
    duration: () => aboutMeSectionHeight * 0.1,
  })
    // move piece from top to viewport during about section pin
    .to('#mainTetrisPiece', {
      y: () => screenHeight * 0.5 + aboutMeSectionHeight,
      duration: () => aboutMeSectionHeight * 0.4,
    })
    // rotate piece and and move to bottom of about section
    .to('#mainTetrisPiece', {
      y: () => screenHeight * 0.5 + aboutMeSectionHeight * 1.5,
      rotation: 0,
      duration: () => aboutMeSectionHeight * 1,
    })
    // scale piece and move to other projects during projects section pin
    .to('#mainTetrisPiece', {
      y: () => {
        const offsetBecauseOfScale =
          (tetrisPieceHeight * tetrisPieceScale - tetrisPieceHeight) / 2;

        return (
          screenHeight * 0.5 +
          aboutMeSectionHeight * 1.5 +
          offsetBecauseOfScale +
          +gsap.getProperty('.projects-list', 'offsetTop') +
          projectsSectionHeight * 0.5
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
      duration: () => projectsSectionHeight * 0.5,
    })
    // show hided projects' description
    .to(
      '.project-animated',
      {
        opacity: 1,
        duration: projectsSectionHeight * 0.1,
      },
      `>-${projectsSectionHeight * 0.1}`
    )
    // move piece to the bottom of projects section
    .to(
      '#mainTetrisPiece',
      {
        y: () =>
          screenHeight * 0.5 +
          aboutMeSectionHeight * 1.5 +
          projectsSectionHeight * 1.5,
        scale: 1,
        x: -28,
        duration: () => projectsSectionHeight * 0.95 - 200,
      },
      `>+200`
    )
    // hide projects' description
    .to(
      '.project-animated',
      {
        opacity: 0,
        duration: () => `${projectsSectionHeight * 0.05}`,
      },
      `<`
    )
    // move piece to final position
    .to('#mainTetrisPiece', {
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
          offsetBecauseOfScale +
          (screenWidth - +gsap.getProperty('#mainContent', 'width')) / 2 -
          (screenWidth -
            +gsap.getProperty('#mainTetrisPieceShadow', 'offsetLeft') -
            shadowTetrisPieceWidth) +
          (screenWidth - +gsap.getProperty('#bottomDesktopPieces', 'width')) / 2
        );
      },
      rotation: 90,
      scale: 1.2,
      duration: () =>
        technologiesSectionHeight +
        contactsSectionHeight +
        spacerHeight +
        bottomSectionHeight -
        screenHeight,
    })
    // show shadow piece
    .to('#mainTetrisPieceShadow', {
      opacity: 1,
      duration: 0,
    })
    // hide main piece
    .to(
      '#mainTetrisPiece',
      {
        opacity: 0,
        duration: 0,
      },
      '<'
    );

  return tl;
};

// TODO: remove absolute numbers
const tetrisPieceAnimationMobile = () => {
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

  const tetrisBlockWidthInBottomSection = 48;

  const tl = gsap.timeline({
    defaults: {
      immediateRender: false,
    },
    scrollTrigger: {
      trigger: '#mainContent',
      endTrigger: '#bottom',
      start: () =>
        `start+=${
          aboutMeSectionHeight +
          +gsap.getProperty('.projects-list', 'offsetTop') +
          projectElHeight * 6
        } start`,
      scrub: true,
      end: () => `bottom bottom`,
    },
  });

  // set initial tetris piece position
  gsap.set('#mainTetrisPieceMobile', {
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
  });

  // hide project when piece gets smaller
  tl.to('.project-animated-mobile', {
    opacity: 0,
    duration: () => projectElHeight / 4,
  })
    // get piece smaller and move to technologies section
    .to(
      '#mainTetrisPieceMobile',
      {
        y: () => aboutMeSectionHeight + projectsSectionHeight,
        scale: 1,
        x: 0,
        duration: () => (tetrisPieceHeight * tetrisPieceScale) / 3,
      },
      '<'
    )
    // move piece through technologies section
    .to('#mainTetrisPieceMobile', {
      y: () => {
        const offsetBecauseOfScale =
          (tetrisPieceHeight - tetrisPieceHeight * 0.48) / 2;

        return (
          aboutMeSectionHeight +
          projectsSectionHeight +
          technologiesSectionHeight * 0.8 -
          offsetBecauseOfScale -
          tetrisPieceHeight * 0.48
        );
      },
      scale: 0.48,
      duration: () => technologiesSectionHeight * 0.8,
    })
    .to('#mainTetrisPieceMobile', {
      y: () => {
        const offsetBecauseOfScale =
          (tetrisPieceHeight - tetrisPieceHeight * 0.48) / 2;

        const offsetBecauseOfRotate = (tetrisPieceHeight * 0.48) / 3 / 2;

        const offsetFromBottomSectionTop = tetrisBlockWidthInBottomSection * 2;

        return (
          aboutMeSectionHeight +
          projectsSectionHeight +
          technologiesSectionHeight +
          contactsSectionHeight +
          spacerHeight -
          offsetBecauseOfScale -
          tetrisPieceHeight * 0.48 +
          offsetBecauseOfRotate +
          offsetFromBottomSectionTop
        );
      },
      rotate: 90,
      x: () =>
        tetrisPieceRightPosition +
        (tetrisPieceWidth - tetrisPieceWidth * 0.48) / 2 -
        (screenWidth -
          +gsap.getProperty('#mainTetrisPieceShadowMobile', 'offsetLeft') -
          tetrisPieceWidth * 0.48),
      duration: () =>
        technologiesSectionHeight * 0.2 +
        contactsSectionHeight +
        spacerHeight +
        bottomSectionHeight -
        screenHeight,
    })
    // show shadow piece
    .to('#mainTetrisPieceShadowMobile', {
      opacity: 1,
      duration: 0,
    })
    // hide main piece
    .to(
      '#mainTetrisPieceMobile',
      {
        opacity: 0,
        duration: 0,
      },
      '<'
    );

  return tl;
};

const tetrisPieceAnimationTablet = () => {
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

  ScrollTrigger.create({
    trigger: '#projects',
    start: () => `bottom bottom-=${(projectElHeight * 3) / 2}`,
    end: `bottom`,
    scrub: true,
    pin: true,
    pinSpacing: true,
  });

  const tl = gsap.timeline({
    defaults: {
      immediateRender: false,
    },
    scrollTrigger: {
      trigger: '#mainContent',
      endTrigger: '#bottom',
      start: () =>
        `start+=${
          aboutMeSectionHeight +
          +gsap.getProperty('.projects-list', 'offsetTop') +
          projectElHeight * 2
        } start`,
      scrub: true,
      end: () => `bottom bottom`,
    },
  });

  // set initial tetris position
  gsap.set('#mainTetrisPieceTablet', {
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
  });

  // hide projects description
  tl.to('.project-animated-mobile', {
    opacity: 0,
    duration: () => projectElHeight / 4,
  })
    // get piece smaller and move to the bottom of projects section
    .to(
      '#mainTetrisPieceTablet',
      {
        y: () =>
          aboutMeSectionHeight +
          projectsSectionHeight +
          (projectElHeight * 3) / 2 -
          tetrisPieceHeight,
        scale: 1,
        x: 0,
        duration: () =>
          projectsSectionHeight +
          (projectElHeight * 3) / 2 -
          (+gsap.getProperty('.projects-list', 'offsetTop') +
            projectElHeight * 2),
      },
      '<'
    )
    // move piece through the rest of the page
    .to('#mainTetrisPieceTablet', {
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
      duration: () =>
        technologiesSectionHeight +
        contactsSectionHeight +
        spacerHeight +
        bottomSectionHeight -
        screenHeight,
    })
    // show shadow piece
    .to('#mainTetrisPieceShadowTablet', {
      opacity: 1,
      duration: 0,
    })
    // hide main piece
    .to(
      '#mainTetrisPieceTablet',
      {
        opacity: 0,
        duration: 0,
      },
      '<'
    );

  return tl;
};

export const tetrisAnimation = (context: gsap.Context) => {
  const { isMobile, isTablet } = context.conditions;

  const screenHeight = window.innerHeight;

  const contentScreenHeight = +gsap.getProperty('#screen', 'height');
  const tetrisControls = +gsap.getProperty('#footer', 'height');

  const tetrisFinalHeightCoffDesktop = 0.94;
  const tetrisFinalHeightCoffMobile = 0.84;

  const tetrisScreenPaddings = isMobile ? 20 : 60;

  const scale =
    (contentScreenHeight *
      (isMobile ? tetrisFinalHeightCoffMobile : tetrisFinalHeightCoffDesktop) -
      tetrisControls -
      tetrisScreenPaddings -
      (isMobile ? 40 : 0)) /
    contentScreenHeight;

  const tl = gsap.timeline({
    defaults: {
      immediateRender: false,
    },
    scrollTrigger: {
      trigger: '#bottom',
      start: 'bottom bottom',
      end: `bottom+=800`,
      scrub: true,
      pin: true,
      pinSpacing: true,
    },
  });

  gsap.set('#footer', {
    scale: () => {
      if (isMobile) {
        return 1;
      }

      if (isTablet) {
        return 2;
      }

      return 4;
    },
  });

  gsap.set('#tetris', {
    height: () => {
      if (isMobile) {
        return '200vh';
      }

      return '350vh';
    },
    width: '100vw',
    right: '50%',
    top: '50%',
    xPercent: -50,
    yPercent: -50,
  });

  tl.to('#screen', {
    scale: () => scale,
    y: () => {
      const tetrisScreenPlaceholder =
        screenHeight *
          (isMobile
            ? tetrisFinalHeightCoffMobile
            : tetrisFinalHeightCoffDesktop) -
        tetrisControls;

      const mainContentScaled = screenHeight * scale;

      const tetrisScreenPlaceholderVerticalMargin =
        (tetrisScreenPlaceholder - mainContentScaled) / 2;

      const tetrisVerticalMargin =
        (screenHeight -
          screenHeight *
            (isMobile
              ? tetrisFinalHeightCoffMobile
              : tetrisFinalHeightCoffDesktop)) /
        2;

      return (
        -(contentScreenHeight - screenHeight) / 2 -
        (screenHeight / 2 -
          mainContentScaled / 2 -
          tetrisScreenPlaceholderVerticalMargin -
          tetrisVerticalMargin)
      );
    },
    duration: 800,
  })
    .to(
      '#content',
      {
        width: '700px',
        overflow: 'hidden',
        duration: 800,
      },
      '<'
    )
    .to(
      '#tetris',
      {
        width: () => {
          if (isMobile) {
            return `${(screenHeight * tetrisFinalHeightCoffMobile) / 2}px`;
          }

          return `${(screenHeight * tetrisFinalHeightCoffDesktop) / 2}px`;
        },
        height: () =>
          isMobile
            ? `${tetrisFinalHeightCoffMobile * 100}vh`
            : `${tetrisFinalHeightCoffDesktop * 100}vh`,
        duration: 800,
      },
      '<'
    )
    .to(
      '#footer',
      {
        scale: 1,
        duration: 800,
      },
      '<'
    )
    .fromTo(
      'body',
      {
        background: 'white',
      },
      {
        background: 'linear-gradient(to bottom,#16161d, #1f1f3a, #3b2f4a)',
        duration: 1,
      },
      '<'
    );

  return tl;
};

export const tetrisPieceAnimation = (context: gsap.Context) => {
  const { isMobile, isTablet } = context.conditions;

  if (isMobile) {
    return tetrisPieceAnimationMobile();
  }

  if (isTablet) {
    return tetrisPieceAnimationTablet();
  }

  return tetrisPieceAnimationDesktop();
};
