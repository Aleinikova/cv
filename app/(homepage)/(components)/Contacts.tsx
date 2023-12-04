import Headline from '@components/Headline';
import EmailSvg from '@components/Icons/Email';
import GitHubSvg from '@components/Icons/GitHub';
import LinkedinSvg from '@components/Icons/Linkedin';
import UpworkSvg from '@components/Icons/Upwork';
import React from 'react';

const CONTACTS = [
  {
    link: 'mailto:aleinikavalera@gmail.com',
    title: 'aleinikavalera@gmail.com',
    Icon: EmailSvg,
  },
  {
    link: 'https://github.com/Aleinikova',
    title: 'github/Aleinikova',
    Icon: GitHubSvg,
  },
  {
    link: 'https://www.linkedin.com/in/valeria-mahilevich-149a98a1/',
    title: 'linkedin/valeria-mahilevich',
    Icon: LinkedinSvg,
  },
  {
    link: 'https://www.upwork.com/freelancers/~01dd1cfeca57b872e3',
    title: 'upwork/~01dd1cfeca57b872e3',
    Icon: UpworkSvg,
  },
];

interface IContact {
  link: string;
  title: string;
  Icon: React.ElementType;
}

const Contacts = React.forwardRef<HTMLElement>((_, ref) => (
  <section
    className='section flex min-h-[500px] w-full flex-col'
    id='contacts'
    ref={ref}
  >
    <Headline component='h2'>Contacts</Headline>
    <div className='flex w-full items-center justify-between'>
      <ul className='flex w-full flex-col flex-wrap sm:flex-row'>
        {CONTACTS.map((contact: IContact) => (
          <li className='mb-4 w-2/4' key={contact.title}>
            <a
              className='flex w-fit items-center'
              href={contact.link}
              target='_blank'
              rel='noopener noreferrer'
            >
              <contact.Icon className='mr-2 h-4 w-4 flex-shrink-0 text-brand-blue lg:mr-3 lg:h-6 lg:w-6' />
              <span className='whitespace-nowrap text-base md:text-lg lg:text-2xl'>
                {contact.title}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  </section>
));

export default Contacts;
