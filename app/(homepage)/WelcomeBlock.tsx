import WelcomeAnimation from './WelcomeAnimation';

function WelcomeBlock() {
  return (
    <section className='relative flex h-[calc(100vh_-_84px)] w-full items-center justify-center'>
      {/* 84px header height */}
      <div className='relative -top-[10%] z-10 h-[150px] max-w-3xl'>
        <h1 className='font-secondary  text-5xl font-bold leading-normal text-text-primary'>
          Hello, my name is <span className='text-brand-pink'>Valeria</span>
          <br />
          I’m a <span className='text-primary'>Frontend</span> developer
        </h1>
      </div>
      <WelcomeAnimation />
    </section>
  );
}

export default WelcomeBlock;
