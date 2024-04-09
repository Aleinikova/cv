import gsap from 'gsap';

// eslint-disable-next-line import/prefer-default-export
export const initFallingPiecesAnimation = (
  tl: ReturnType<typeof gsap.timeline>,
  durationCof: number = 1
) => {
  tl.fromTo(
    '.tetris-1',
    {
      opacity: 1,
      transform: 'translateY(-10px)',
      rotate: 180,
    },
    {
      opacity: 0,
      transform: 'translateY(110vh)',
      rotate: 180,
      duration: 8 * durationCof,
      repeat: -1,
    }
  );

  tl.fromTo(
    '.tetris-2',
    {
      opacity: 1,
      transform: 'translateY(-10px)',
      rotate: -90,
    },
    {
      opacity: 0,
      transform: 'translateY(110vh)',
      rotate: -90,
      duration: 8 * durationCof,
      repeat: -1,
    },
    3
  );

  tl.fromTo(
    '.tetris-3',
    {
      opacity: 1,
      transform: 'translateY(-10px)',
    },
    {
      opacity: 0,
      transform: 'translateY(110vh)',
      duration: 8 * durationCof,
      repeat: -1,
    },
    1.2
  );

  tl.fromTo(
    '.tetris-4',
    {
      opacity: 1,
      transform: 'translateY(-10px)',
    },
    {
      opacity: 0,
      transform: 'translateY(110vh)',
      duration: 8 * durationCof,
      repeat: -1,
    },
    2
  );

  tl.fromTo(
    '.tetris-5',
    {
      opacity: 1,
      transform: 'translateY(-10px)',
    },
    {
      opacity: 0,
      transform: 'translateY(110vh)',
      duration: 8 * durationCof,
      repeat: -1,
    },
    0.2
  );

  tl.fromTo(
    '.tetris-6',
    {
      opacity: 1,
      transform: 'translateY(-10px)',
      rotate: 90,
    },
    {
      opacity: 0,
      transform: 'translateY(110vh)',
      rotate: 90,
      duration: 8 * durationCof,
      repeat: -1,
    },
    3.2
  );

  tl.fromTo(
    '.tetris-7',
    {
      opacity: 1,
      transform: 'translateY(-10px)',
    },
    {
      opacity: 0,
      transform: 'translateY(110vh)',
      duration: 8 * durationCof,
      repeat: -1,
    },
    1.3
  );

  tl.fromTo(
    '.tetris-8',
    {
      opacity: 1,
      transform: 'translateY(-10px)',
    },
    {
      opacity: 0,
      transform: 'translateY(110vh)',
      duration: 8 * durationCof,
      repeat: -1,
    },
    3.6
  );

  tl.fromTo(
    '.tetris-9',
    {
      opacity: 1,
      transform: 'translateY(-10px)',
      rotate: 90,
    },
    {
      opacity: 0,
      transform: 'translateY(110vh)',
      rotate: 90,
      duration: 8 * durationCof,
      repeat: -1,
    },
    0.6
  );
};
