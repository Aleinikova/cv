import AnimatedBackground from '@components/AnimatedBackground';

function WelcomeBlock() {
  return (
    <section className='relative flex h-screen w-full items-center justify-center overflow-y-auto'>
      <div className='relative z-10 h-[150px] max-w-[90vw] md:max-w-3xl'>
        <h1 className='text-center  font-secondary text-2xl font-bold leading-normal text-text-primary lg:text-5xl'>
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
