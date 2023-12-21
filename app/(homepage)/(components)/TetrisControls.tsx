const TOP_CONTROLS = ['S/P', 'SOUND', 'ON/OFF', 'RESET'];

function TetrisControls() {
  return (
    <div
      className='absolute bottom-0 flex w-full flex-col items-center pb-3 xl:scale-[4] '
      id='footer'
    >
      <div className='flex w-full max-w-[90vh] flex-col items-center sm:max-w-[45vh] xl:max-w-[47vh]'>
        <div className='h-[6vh] w-11/12 rounded-full border-4 border-black sm:h-[8vh] md:border-6 xl:h-[10vh] 2xl:max-h-32' />
        {/* TOP BUTTONS ROW */}
        <div className='mt-4 flex w-3/4 items-center justify-between px-4'>
          {TOP_CONTROLS.map((title) => (
            <div className='flex w-auto flex-col items-center' key={title}>
              <div className='h-[3.5vh] w-[3.5vh] rounded-full border-4 border-black bg-brand-yellow sm:h-[4.2vh] sm:w-[4.2vh] md:border-6' />
              <div className='mt-2 text-2xs text-white'>{title}</div>
            </div>
          ))}
        </div>
        {/* SECOND BUTTONS ROW */}
        <div className='mt-6 flex w-11/12 items-center justify-between px-9'>
          {/* MAIN CONTROL */}
          <div>
            <div className='relative mb-1 flex w-auto flex-col items-center sm:mb-0'>
              <div className='h-[4vh] w-[4vh] rounded-full border-4 border-black bg-brand-yellow sm:h-[5.5vh]  sm:w-[5.5vh] md:border-6' />
              <div className='absolute -bottom-[20px] text-2xs text-white sm:text-xs'>
                TOP
              </div>
            </div>
            <div className='flex'>
              <div className='relative mr-9 flex w-auto flex-col items-center sm:mr-10'>
                <div className='h-[4vh] w-[4vh] rounded-full border-4 border-black bg-brand-yellow sm:h-[5.5vh] sm:w-[5.5vh] md:border-6' />
                <div className='absolute -bottom-[20px] text-2xs text-white'>
                  LEFT
                </div>
              </div>
              <div className='relative flex w-auto flex-col items-center'>
                <div className='h-[4vh] w-[4vh] rounded-full border-4 border-black bg-brand-yellow sm:h-[5.5vh]  sm:w-[5.5vh] md:border-6' />
                <div className='absolute -bottom-[20px] text-2xs text-white sm:text-xs'>
                  RIGHT
                </div>
              </div>
            </div>
            <div className='relative mt-1 flex w-auto flex-col items-center sm:mb-0'>
              <div className='h-[4vh] w-[4vh] rounded-full border-4 border-black bg-brand-yellow sm:h-[5.5vh]  sm:w-[5.5vh] md:border-6' />
              <div className='absolute -bottom-[20px] text-2xs text-white sm:text-xs'>
                BOTTOM
              </div>
            </div>
          </div>
          {/* ROTATE BUTTON */}
          <div className='relative flex w-auto flex-col items-center'>
            <div className='h-[6.5vh] w-[6.5vh] rounded-full border-4 border-black bg-brand-yellow sm:h-[8vh]  sm:w-[8vh] md:border-6' />
            <div className='mt-2 text-xs text-white sm:text-sm'>ROTATE</div>
          </div>
        </div>

        <div className='mt-9 font-secondary text-2xs text-white sm:text-xs md:mt-14'>
          designed by Waleria Mogilewicz
        </div>
      </div>
    </div>
  );
}

export default TetrisControls;
