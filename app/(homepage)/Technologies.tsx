import Headline from '@components/Headline';
import ListItem from '@components/ListItem';

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

function Technologies() {
  return (
    <section className='section flex w-full flex-col'>
      <Headline className='mb-28' component='h2'>
        Technologies
      </Headline>
      <div className='flex'>
        <ul className='flex flex-1 flex-col pl-10'>
          {TECHNOLOGIES.map((tech) => (
            <ListItem key={tech} className='mb-2 flex text-2xl leading-8'>
              {tech}
            </ListItem>
          ))}
        </ul>
        <ul className='flex flex-1 flex-col pl-40'>
          {TOOLS.map((tech) => (
            <ListItem key={tech} className='mb-2 flex text-2xl leading-8'>
              {tech}
            </ListItem>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Technologies;