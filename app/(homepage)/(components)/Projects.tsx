import clsx from 'clsx';
import React, { useRef } from 'react';

import Headline from '@components/Headline';

interface IProject {
  className?: string;
  title: string;
  startDate: string;
  endDate: string;
  stack: string[];
}

const PROJECT_LIST = [
  {
    title: 'NewNew',
    startDate: '2022-04-01',
    endDate: '2024-08-24',
    stack: ['Next.js', 'Typescript', 'Styled-components', 'Video.js'],
    className: 'bg-secondary order-0 bg-opacity-75',
  },
  {
    title: 'Enviago',
    startDate: '2022-04-01',
    endDate: '2022-04-01',
    stack: ['Next.js', 'Typescript', 'Styled-components', 'Video.js'],
    className: 'bg-secondary order-0 bg-opacity-60',
  },
  {
    title: 'AudioClub',
    startDate: '2022-01-01',
    endDate: '2022-02-01',
    stack: ['Nunjucks', 'GSAP animation'],
    className:
      'project-animated bg-secondary bg-opacity-50 order-0 xl:opacity-0 xl:order-none xl:bg-transparent',
  },
  {
    title: 'Sinomotors',
    startDate: '2021-07-01',
    endDate: '2022-02-01',
    stack: ['Next.js', 'React-hook-form', 'SWR', 'Tailwind css'],
    className:
      'project-animated bg-secondary bg-opacity-40 order-0 xl:opacity-0 xl:order-none xl:bg-transparent',
  },
  {
    title: 'Olimpic skydive',
    startDate: '2020-04-01',
    endDate: '2021-07-01',
    stack: ['React', 'Redux toolkit', 'React-hook-forms', 'MUI'],
    className: 'project-animated-mobile xl:bg-secondary xl:bg-opacity-50',
  },
  {
    title: 'PettyGigs',
    startDate: '2019-10-01',
    endDate: '2020-03-01',
    stack: ['React Native', 'Redux toolkit', 'React-hook-forms'],
    className: 'project-animated-mobile xl:bg-secondary xl:bg-opacity-40',
  },
  {
    title: 'Loreal',
    startDate: '2017-01-01',
    endDate: '2019-09-01',
    stack: ['React', 'Redux'],
    className: 'project-animated project-animated-mobile xl:opacity-0',
  },
];

const EMPTY_PIECES = [3, 5];

function Project({ className, title, startDate, endDate, stack }: IProject) {
  return (
    <div className={clsx('', className)}>
      <h4 className='font-xl mb-1 font-secondary font-bold'>{title}</h4>
      <p className='mb-5 text-sm text-neutral-900'>{`${new Date(
        startDate
      ).toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
      })} - ${new Date(endDate).toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
      })}`}</p>
      <ul>
        {stack.map((stackEl) => (
          <li key={stackEl}>{`- ${stackEl}`}</li>
        ))}
      </ul>
    </div>
  );
}

const Projects = React.forwardRef<HTMLElement>((_, forwardRef) => {
  const ref = useRef(null);

  return (
    <section
      className='section relative z-10 flex w-full flex-col'
      id='projects'
      ref={forwardRef}
    >
      <Headline component='h2'>Projects</Headline>
      <ul
        className='projects-list relative flex flex-col flex-wrap items-center justify-center sm:flex-row sm:justify-start'
        ref={ref}
      >
        {PROJECT_LIST.map(({ className, ...projectEl }, index) => (
          <React.Fragment key={projectEl.title}>
            <li
              className={clsx(
                'project flex h-[80vw] w-[80vw] p-6 sm:aspect-square sm:h-auto sm:w-1/2 xl:h-auto xl:w-1/5',
                className
              )}
            >
              <Project {...projectEl} />
            </li>
            {EMPTY_PIECES.includes(index) && (
              <div className='hidden aspect-square h-auto w-1/5 xl:flex' />
            )}
          </React.Fragment>
        ))}
      </ul>
    </section>
  );
});

export default Projects;
