import Headline from '@components/Headline';
import ScreenshotHolder from '../components/ScreenshotHolder';
import ProjectDescription from '../components/ProjectDescription';

function PettyGigsPage() {
  return (
    <>
      <ProjectDescription
        title='PettyGigs'
        subtitle='USstartup app for small work opportunities'
        description='The application where individuals can share small tasks for others to complete, enabling young people to earn some income.'
        technologies='React Native, Redux, Reselect, Stripe'
        myRole='Frontend developer'
        teamSize='2'
        imgUrl='/pettygigs-banner.png'
      />

      <section>
        <Headline component='h2'>Screens</Headline>
        <ul className='flex flex-col md:flex-row md:flex-wrap'>
          <ScreenshotHolder
            src='/pettygigs-1.png'
            alt='sigin'
            noBorder
            width='md:w-1/2'
            height='h-[100vw] md:h-[50vw]'
          />
          <ScreenshotHolder
            src='/pettygigs-2.png'
            alt='post gig'
            width='md:w-1/2'
            height='h-[100vw] md:h-[50vw]'
            noBorder
          />
          <ScreenshotHolder
            src='/pettygigs-3.png'
            alt='post gigs select time'
            width='md:w-1/2'
            height='h-[100vw] md:h-[50vw]'
            noBorder
          />
          <ScreenshotHolder
            src='/pettygigs-4.png'
            alt='chat'
            width='md:w-1/2'
            height='h-[100vw] md:h-[50vw]'
            noBorder
          />
          <ScreenshotHolder
            src='/pettygigs-5.png'
            alt='gigs'
            width='md:w-1/2'
            height='h-[100vw] md:h-[50vw]'
            noBorder
          />
          <ScreenshotHolder
            src='/pettygigs-6.png'
            alt='gig status'
            width='md:w-1/2'
            height='h-[100vw] md:h-[50vw]'
            noBorder
          />
          <ScreenshotHolder
            src='/pettygigs-7.png'
            alt='gig status'
            width='md:w-1/2'
            height='h-[100vw] md:h-[50vw]'
            noBorder
          />
        </ul>
      </section>
    </>
  );
}

export default PettyGigsPage;
