import React from 'react';
import Headline from '@components/Headline';
import Image from 'next/image';

const AboutMe = React.forwardRef<HTMLElement>((_, ref) => (
  <section
    className='section z-10 flex min-h-screen w-full flex-col justify-center xl:px-8'
    id='aboutMe'
    ref={ref}
  >
    <Headline className='mb-16' component='h2'>
      About me
    </Headline>
    <div className='flex w-full flex-col items-center justify-between md:flex-row'>
      <div className='max-w-4/5 relative mb-10 flex flex-shrink-0 lg:w-auto'>
        {/* <div className='absolute -left-6 -top-6 -z-10 h-full w-full border-2 border-solid border-secondary content-[""]' /> */}
        <Image
          src='/images/author.png'
          alt='Picture of the author'
          width={320}
          height={445}
          quality={100}
          priority
        />
        {/* <div className='absolute -bottom-6 -right-6 -z-10 h-full w-full border-2 border-solid border-primary content-[""]' /> */}
      </div>
      <div className='ml-6'>
        <h3 className='font-secondary text-2xl font-medium'>
          Waleria Mogilewicz
        </h3>
        <p className='mb-6 text-sm font-light leading-6'>
          {`Frontend developer, ${new Date().getFullYear() - 1996} years old`}
        </p>

        <p className='max-w-lg text-base leading-6'>
          {`I’m an Frontend developer with ${
            new Date().getFullYear() - 2017
          } years of expertise.`}
          <br />
          <br />
          Have a strong background in both independent project work and
          collaborative work in a team. I always treat my projects with
          attention and try to bring maximum benefit by applying my experience
          and knowledge. In my opinion open and constant communication with
          designers and team members is a key to achieving the best results, so
          I prioritize it in my approach.
        </p>
      </div>
    </div>
  </section>
));

export default AboutMe;
