import Headline from '@components/Headline';
import EmailSvg from '@components/Icons/Email';
import GitHubSvg from '@components/Icons/GitHub';
import LinkedinSvg from '@components/Icons/Linkedin';
import UpworkSvg from '@components/Icons/Upwork';

const CONTACTS = [
  {
    link: 'mailto:aleinikavalera@gmail.com',
    title: 'aleinikavalera@gmail.com',
    Icon: EmailSvg,
  },
  {
    link: 'https://github.com/Aleinikova',
    title: 'github.com',
    Icon: GitHubSvg,
  },
  {
    link: 'https://www.linkedin.com/in/valeria-mahilevich-149a98a1/',
    title: 'linkedin.com',
    Icon: LinkedinSvg,
  },
  {
    link: 'https://www.upwork.com/freelancers/~01dd1cfeca57b872e3',
    title: 'www.upwork.com',
    Icon: UpworkSvg,
  },
];

interface IContact {
  link: string;
  title: string;
  Icon: React.ElementType;
}

function Contacts() {
  return (
    <section className='section flex w-full flex-col'>
      <Headline className='mb-28' component='h2'>
        About me
      </Headline>
      <div className='flex w-full items-center justify-between'>
        <ul className='flex w-full flex-wrap'>
          {CONTACTS.map((contact: IContact) => (
            <li className='mb-4 w-2/4' key={contact.title}>
              <a
                className='flex w-fit items-center'
                href={contact.link}
                target='_blank'
                rel='noopener noreferrer'
              >
                <contact.Icon className='mr-3 text-brand-blue' />
                <span className='font-secondary text-2xl'>{contact.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Contacts;
