import Headline from '@components/Headline';
import ScreenshotHolder from '../components/ScreenshotHolder';
import ProjectDescription from '../components/ProjectDescription';

function EnviagoPage() {
  return (
    <>
      <ProjectDescription
        title='Enviago'
        subtitle='US startup for creators economy'
        description='The platform for engaging with the creator’s audience. Content creators can get payment for personalized content like photos, videos, audio, message.'
        technologies='React.js, Typescript, Tailwind, React-query, Context API'
        myRole='Senior frontend developer'
        teamSize='3'
        imgUrl='/enviago-banner.png'
        projectLink='https://enviago.com/'
        imageHeight='h-4/5'
      />

      <section className='mb-32'>
        <Headline component='h2'>Homepage</Headline>
        <ul>
          <ScreenshotHolder src='/enviago-1.png' alt='enviago homepage 1' />
          <ScreenshotHolder src='/enviago-2.png' alt='enviago homepage 2' />
          <ScreenshotHolder src='/enviago-3.png' alt='enviago homepage 3' />
          <ScreenshotHolder src='/enviago-4.png' alt='enviago homepage 4' />
        </ul>
      </section>

      <section className='mb-32'>
        <Headline component='h2'>Sign in</Headline>
        <ul>
          <ScreenshotHolder src='/enviago-5.png' alt='enviago sign in' />
        </ul>
      </section>

      <section className='mb-32'>
        <Headline component='h2'>Panel</Headline>
        <ul>
          <ScreenshotHolder src='/enviago-6.png' alt='enviago home' />
          <ScreenshotHolder src='/enviago-7.png' alt='enviago settings' />
          <ScreenshotHolder
            src='/enviago-8.png'
            alt='enviago request payment'
          />
          <ScreenshotHolder src='/enviago-9.png' alt='enviago withdraw' />
          <ScreenshotHolder src='/enviago-10.jpg' alt='enviago home 2' />
          <ScreenshotHolder src='/enviago-11.jpg' alt='enviago transactions' />
        </ul>
      </section>
    </>
  );
}

export default EnviagoPage;
