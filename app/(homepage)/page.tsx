import AboutMe from './AboutMe';
import Bottom from './Bottom';
import Contacts from './Contacts';
import Projects from './Projects';
import Technologies from './Technologies';
import WelcomeBlock from './WelcomeBlock';

export default function Home() {
  return (
    <>
      <main className='mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-between lg:px-20 xl:px-0'>
        <WelcomeBlock />
        <AboutMe />
        <Projects />
        <Technologies />
        <Contacts />
      </main>
      <Bottom />
    </>
  );
}
