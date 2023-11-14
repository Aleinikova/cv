import AnimatedBackground from '@components/AnimatedBackground';

function WelcomeBlock() {
  return (
    <section className='relative flex h-screen w-full items-center justify-center'>
      {/* 84px header height */}
      <div className='relative z-10 h-[150px] max-w-3xl'>
        <h1 className='font-secondary  text-5xl font-bold leading-normal text-text-primary'>
          Hello, my name is <span className='text-brand-pink'>Valeria</span>
          <br />
          I’m a <span className='text-primary'>Frontend</span> developer
        </h1>
      </div>
      <AnimatedBackground />
    </section>
  );
}

export default WelcomeBlock;
