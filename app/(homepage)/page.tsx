import AboutMe from './AboutMe';
import WelcomeBlock from './WelcomeBlock';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between px-20'>
      <WelcomeBlock />
      <AboutMe />
    </main>
  );
}
