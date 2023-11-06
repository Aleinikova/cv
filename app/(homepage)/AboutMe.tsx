import Headline from '@components/Headline';
import Image from 'next/image';

function AboutMe() {
  return (
    <section className='section flex w-full flex-col px-8'>
      <Headline className='mb-28' component='h2'>
        About me
      </Headline>
      <div className='flex w-full items-center justify-between'>
        <div className='relative flex flex-shrink-0'>
          <div className='absolute -left-6 -top-6 -z-10 h-[445px] w-[320px] border-2 border-solid border-secondary content-[""]' />
          <Image
            src='/author.png'
            alt='Picture of the author'
            width={320}
            height={445}
            quality={100}
          />
          <div className='absolute -bottom-6 -right-6 -z-10 h-[445px] w-[320px] border-2 border-solid border-primary content-[""]' />
        </div>
        <div>
          <h3 className='font-secondary text-2xl font-medium'>
            Valeria Mahilevich
          </h3>
          <p className='mb-6 text-sm font-light leading-6'>
            Frontend developer, 27 years old
          </p>

          <p className='max-w-[500px] text-base leading-6'>
            I’m an experienced Frontend developer with 6 years of expertise.
            <br />
            Have a strong background in both independent project work and
            collaborative work in a team. I always treat my projects with
            attention and try to bring maximum benefit by applying my experience
            and knowledge. In my opinion open and constant communication with
            designers and team members is a key to achieving the best results,
            so I prioritize it in my approach.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
