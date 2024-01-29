import Headline from '@components/Headline';
import ScreenshotHolder from '../components/ScreenshotHolder';
import ProjectDescription from '../components/ProjectDescription';

function NewNewPage() {
  return (
    <>
      <ProjectDescription
        title='NewNew'
        subtitle='US startup for creators economy'
        description='The platform for engaging with the creator’s audience. Content
    creators can post with a video where propose audience to decide
    what they should do. The audience makes paid votes for some
    options and decides what the creator should do.'
        technologies=' Next.js,Typescript, React-query, Context API, Video.js,
    Mixpanel, Stripe API, i18next, Styled-components'
        myRole='Senior frontend developer'
        teamSize='6-8'
        imgUrl='/newnew-banner.png'
        imageHeight='h-2/5 lg:h-2/3'
      />

      <section className='mb-32'>
        <Headline component='h2'>Homepage</Headline>
        <ul>
          <ScreenshotHolder src='/newnew-1.png' alt='Newnew homepage' />
          <ScreenshotHolder src='/newnew-2.png' alt='Newnew homepage' />
          <ScreenshotHolder src='/newnew-3.png' alt='Newnew homepage' />
          <ScreenshotHolder src='/newnew-4.png' alt='Newnew homepage' />
          <ScreenshotHolder src='/newnew-5.png' alt='Newnew homepage' />
          <ScreenshotHolder src='/newnew-6.png' alt='Newnew homepage' />
        </ul>
      </section>

      <section className='mb-32'>
        <Headline component='h2'>Sign in</Headline>
        <ul>
          <ScreenshotHolder src='/newnew-8.png' alt='Newnew homepage' />
        </ul>
      </section>

      <section className='mb-32'>
        <Headline component='h2'>About page</Headline>
        <ul>
          <ScreenshotHolder src='/newnew-9.png' alt='Newnew about' />
          <ScreenshotHolder src='/newnew-10.png' alt='Newnew about' />
        </ul>
      </section>

      <section>
        <Headline component='h2'>Posts</Headline>
        <ul>
          <ScreenshotHolder
            src='/newnew-7.png'
            alt='Newnew homepage'
            height='h-[100vw]'
          />
        </ul>
      </section>
    </>
  );
}

export default NewNewPage;
