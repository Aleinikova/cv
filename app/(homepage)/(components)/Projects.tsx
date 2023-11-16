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
    endDate: '2022-04-01',
    stack: ['Next.js', 'Typescript', 'Styled-components', 'Video.js'],
    className: 'bg-secondary bg-opacity-75',
  },
  {
    title: 'Enviago',
    startDate: '2022-04-01',
    endDate: '2022-04-01',
    stack: ['Next.js', 'Typescript', 'Styled-components', 'Video.js'],
    className: 'bg-secondary bg-opacity-60',
  },
  {
    title: 'AudioClub',
    startDate: '2022-01-01',
    endDate: '2022-02-01',
    stack: ['Nunjucks', 'SGAP'],
    className: 'project-animated opacity-0',
  },
  {
    title: 'Sinomotors',
    startDate: '2021-07-01',
    endDate: '2022-02-01',
    stack: ['Next.js', 'React-hook-form', 'SWR'],
    className: 'project-animated opacity-0',
  },
  {
    title: 'Olimpic skydive',
    startDate: '2020-04-01',
    endDate: '2021-07-01',
    stack: ['React', 'Redux toolkit', 'React-hook-forms', 'MUI'],
    className: 'bg-secondary bg-opacity-50',
  },
  {
    title: 'PettyGigs',
    startDate: '2019-10-01',
    endDate: '2020-03-01',
    stack: ['React Native', 'Redux toolkit', 'React-hook-forms'],
    className: 'bg-secondary bg-opacity-40',
  },
  {
    title: 'Loreal',
    startDate: '2017-01-01',
    endDate: '2019-09-01',
    stack: ['React', 'Redux'],
    className: 'project-animated opacity-0',
  },
];

const EMPTY_PIECES = [3, 5];

function Project({ className, title, startDate, endDate, stack }: IProject) {
  return (
    <div className={clsx('h-64 w-64 p-6', className)}>
      <h4 className='font-xl mb-2 font-secondary font-bold'>{title}</h4>
      <p className='mb-5'>{`${new Date(startDate).toLocaleString('en-US', {
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
      <Headline className='mb-28' component='h2'>
        Projects
      </Headline>
      <ul className='projects-list flex flex-wrap' ref={ref}>
        {PROJECT_LIST.map(({ className, ...projectEl }, index) => (
          <li key={projectEl.title} className='flex'>
            <Project className={className} {...projectEl} />
            {EMPTY_PIECES.includes(index) && <div className='h-64 w-64' />}
          </li>
        ))}
      </ul>
    </section>
  );
});

export default Projects;
