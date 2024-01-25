import AnimatedBackground from '@components/AnimatedBackground';
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
}: ProjectDescription) {
  return (
    <section className='mb-12'>
      <AnimatedBackground className='blur-sm' />

      <div className='flex h-screen items-center'>
        <div className='h-1/3 w-1/2 shrink-0'>
          <h1 className='mb-1 font-secondary text-4xl font-bold'>{title}</h1>
          <h2 className='mb-6 text-gray-500'>{subtitle}</h2>
          <p className='mb-6 text-lg'>{description}</p>
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

        <Image
          className='ml-auto'
          src={imgUrl}
          alt={title}
          width={500}
          height={700}
          quality={100}
          priority
        />
      </div>
    </section>
  );
}

export default ProjectDescription;
