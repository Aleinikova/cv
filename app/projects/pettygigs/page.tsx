import Headline from '@components/Headline';
import ScreenshotHolder from '../components/ScreenshotHolder';
import ProjectDescription from '../components/ProjectDescription';

function PettyGigsPage() {
  return (
    <>
      <ProjectDescription
        title='Petty gigs'
        subtitle='USstartup app for small work opportunities'
        description='The application where individuals can share small tasks for others to complete, enabling young people to earn some income.'
        technologies='React Native, Redux, Reselect, Stripe'
        myRole='Frontend developer'
        teamSize='2'
        imgUrl='/pettygigs-banner.png'
      />

      <section className='mb-32'>
        <Headline component='h2'>Screens</Headline>
        <ul className='flex flex-wrap'>
          <ScreenshotHolder src='/pettygigs-1.png' alt='sigin' noBorder />
          <ScreenshotHolder
            src='/pettygigs-2.png'
            alt='post gig'
            width='w-1/2'
            noBorder
          />
          <ScreenshotHolder
            src='/pettygigs-3.png'
            alt='post gigs select time'
            width='w-1/2'
            noBorder
          />
          <ScreenshotHolder
            src='/pettygigs-4.png'
            alt='chat'
            width='w-1/2'
            noBorder
          />
          <ScreenshotHolder
            src='/pettygigs-5.png'
            alt='gigs'
            width='w-1/2'
            noBorder
          />
          <ScreenshotHolder
            src='/pettygigs-6.png'
            alt='gig status'
            width='w-1/2'
            noBorder
          />
          <ScreenshotHolder
            src='/pettygigs-7.png'
            alt='gig status'
            width='w-1/2'
            noBorder
          />
        </ul>
      </section>
    </>
  );
}

export default PettyGigsPage;
