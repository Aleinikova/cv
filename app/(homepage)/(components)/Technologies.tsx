import Headline from '@components/Headline';
import ListItem from '@components/ListItem';
import React from 'react';

const TECHNOLOGIES = [
  'ReactJS',
  'Next.js',
  'TypeScript',
  'JavaScript',
  'HTML / CSS',
  'Redux-toolkit / Redux',
  'Less / SASS',
  'TailwindCSS',
  'Material-UI',
  'CSS-modules',
  'Styled components',
  'Storybook',
  'Node.js / Express.js /  MongoDB',
];

const TOOLS = [
  'Git',
  'Notion / Jira / Trello',
  'Figma / Zeplin',
  'Sourcetree',
  'VSCode',
  'Eslint',
  'Prettier',
  'Webpack',
  'Vite',
];

const Technologies = React.forwardRef<HTMLElement>((_, ref) => (
  <section className='section flex w-full flex-col' id='technologies' ref={ref}>
    <Headline component='h2'>Technologies</Headline>
    <div className='flex flex-col sm:flex-row'>
      <ul className='mb-6 flex flex-1 flex-col'>
        {TECHNOLOGIES.map((tech) => (
          <ListItem
            key={tech}
            className='mb-2 flex leading-8 sm:text-lg md:text-xl lg:text-2xl'
          >
            {tech}
          </ListItem>
        ))}
      </ul>
      <ul className='flex flex-1 flex-col lg:pl-40'>
        {TOOLS.map((tech) => (
          <ListItem
            key={tech}
            className='mb-2 flex leading-8 sm:text-lg md:text-xl lg:text-2xl'
          >
            {tech}
          </ListItem>
        ))}
      </ul>
    </div>
  </section>
));

export default Technologies;
