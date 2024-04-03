import Headline from '@components/Headline';
import ScreenshotHolder from '../components/ScreenshotHolder';
import ProjectDescription from '../components/ProjectDescription';

function NewNewAdminPage() {
  return (
    <>
      <ProjectDescription
        title='NewNew Admin panel'
        subtitle='US startup for creators economy'
        description='Admin panel for managing user-facing app NewNew through the next key features: set the order of the posts on the homepage,
        managing posts and users, resolving reports, managing payout to content creators, human moderation'
        technologies=' React, TypeScript, Auth0, MUI, Stripe API, SWR, React-hook-form, YUP'
        myRole='Senior frontend developer'
        teamSize='2'
        imgUrl='/images/newnew-admin-1.png'
        imageHeight='h-2/5 lg:h-2/3'
      />

      <section className='mb-32'>
        <Headline component='h2'>Screens</Headline>
        <ul>
          <ScreenshotHolder src='/images/newnew-admin-1.png' alt='Homepage' />
          <ScreenshotHolder
            src='/images/newnew-admin-2.png'
            alt='Todays activities'
          />
          <ScreenshotHolder src='/images/newnew-admin-3.png' alt='Users page' />
          <ScreenshotHolder
            src='/images/newnew-admin-4.png'
            alt='Users filters'
          />
          <ScreenshotHolder src='/images/newnew-admin-5.png' alt='Posts page' />
          <ScreenshotHolder
            src='/images/newnew-admin-6.png'
            alt='Posts filters'
          />
          <ScreenshotHolder src='/images/newnew-admin-7.png' alt='Reports' />
          <ScreenshotHolder src='/images/newnew-admin-8.png' alt='Payouts' />
        </ul>
      </section>
    </>
  );
}

export default NewNewAdminPage;
