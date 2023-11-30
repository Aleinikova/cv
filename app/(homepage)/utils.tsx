import gsap from 'gsap';

const tetrisPieceAnimation = (tl: gsap.core.Timeline) => {
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

      y: () =>
        window.innerHeight * 0.5 + +gsap.getProperty('#aboutMe', 'height'),
    })
    .to('#mainTetrisPiece', {
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
        +gsap.getProperty('#aboutMe', 'height') * 1.5 +
        (+gsap.getProperty('#mainTetrisPiece', 'height') * 2.56 -
          +gsap.getProperty('#mainTetrisPiece', 'height')) /
          2 +
        +gsap.getProperty('.projects-list', 'offsetTop') +
        +gsap.getProperty('#projects', 'height') / 2,
      scale: 2.56,
      x: -96,
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
    })
    .to('#mainTetrisPiece', {
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
    })
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

const tetrisAnimation = (tl: gsap.core.Timeline) => {
  tl.to('#screen', {
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

      const mainContentScaled = +gsap.getProperty('#screen', 'height') * 0.35;

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
    width: '400px',
    height: '94vh',
  });

  tl.to('#footer', {
    scrollTrigger: {
      trigger: '#bottom',
      start: 'bottom bottom',
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

  tetrisPieceAnimation(tl);
  tetrisAnimation(tl);
};
