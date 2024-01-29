import AnimatedBackground from '@components/AnimatedBackground';
import clsx from 'clsx';
import Image from 'next/image';

interface ProjectDescription {
  title: string;
  subtitle: string;
  description: string;
  technologies: string;
  myRole: string;
  teamSize: string;
  imgUrl: string;
  projectLink?: string;
  imageHeight?: string;
}
function ProjectDescription({
  title,
  subtitle,
  description,
  technologies,
  myRole,
  teamSize,
  imgUrl,
  projectLink,
  imageHeight,
}: ProjectDescription) {
  return (
    <section className='mb-4 w-full lg:mb-12'>
      <AnimatedBackground className='blur-sm' />

      <div className='flex h-[calc(90vh_-_76px)] flex-col items-center lg:flex-row'>
        <div
          className={clsx(
            'relative mb-6  w-full lg:order-1 lg:mb-0 lg:ml-auto ',
            {
              'h-2/5 lg:h-1/3': !imageHeight,
              [imageHeight]: imageHeight,
            }
          )}
        >
          <Image
            className='ml-auto'
            src={imgUrl}
            alt={title}
            fill
            priority
            style={{
              objectFit: 'contain',
            }}
          />
        </div>

        <div className='min-h-1/3 w-full shrink-0 text-sm lg:w-5/12'>
          <h1 className='mb-1 font-secondary text-xl font-bold lg:text-4xl'>
            {title}
          </h1>
          <h2 className='mb-6 text-gray-500'>{subtitle}</h2>
          <p className='mb-6 lg:text-lg'>{description}</p>
          <ul>
            <li className='mb-1'>
              <span className='font-bold'>Technologies: </span>
              {technologies}
            </li>
            <li className='mb-1'>
              <span className='font-bold'>My role: </span>
              {myRole}
            </li>
            <li className='mb-1'>
              <span className='font-bold'>Team size: </span>
              {teamSize}
            </li>
            {projectLink && (
              <li className='mb-1'>
                <span className='font-bold'>Project link: </span>
                <a
                  href={projectLink}
                  className='text-secondary underline'
                  target='_blank'
                  rel='noreferrer'
                >
                  {title}
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ProjectDescription;
