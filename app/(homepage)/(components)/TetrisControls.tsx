const TOP_CONTROLS = ['S/P', 'SOUND', 'ON/OFF', 'RESET'];

function TetrisControls() {
  return (
    <div
      className='absolute bottom-0 flex w-full scale-[4] flex-col items-center pb-3 '
      id='footer'
    >
      <div className='flex w-full max-w-[366px] flex-col items-center'>
        <div className='h-[10vh] w-11/12 rounded-full border-6 border-black' />
        {/* TOP BUTTONS ROW */}
        <div className='mt-4 flex w-3/4 items-center justify-between px-4'>
          {TOP_CONTROLS.map((title) => (
            <div className='flex w-auto flex-col items-center' key={title}>
              <div className='h-[4.2vh] w-[4.2vh] rounded-full border-6 border-black bg-brand-yellow' />
              <div className='mt-2 text-2xs text-white'>{title}</div>
            </div>
          ))}
        </div>
        {/* SECOND BUTTONS ROW */}
        <div className='mt-6 flex w-11/12 items-center justify-between px-9'>
          {/* MAIN CONTROL */}
          <div>
            <div className='relative flex w-auto flex-col items-center'>
              <div className='h-[5.5vh] w-[5.5vh] rounded-full border-6  border-black bg-brand-yellow' />
              <div className='absolute -bottom-[20px] text-xs text-white'>
                TOP
              </div>
            </div>
            <div className='flex'>
              <div className='relative mr-10 flex w-auto flex-col items-center'>
                <div className='h-[5.5vh] w-[5.5vh] rounded-full border-6 border-black bg-brand-yellow' />
                <div className='absolute -bottom-[20px] text-2xs text-white'>
                  LEFT
                </div>
              </div>
              <div className='relative flex w-auto flex-col items-center'>
                <div className='h-[5.5vh] w-[5.5vh] rounded-full border-6  border-black bg-brand-yellow' />
                <div className='absolute -bottom-[20px] text-xs text-white'>
                  RIGHT
                </div>
              </div>
            </div>
            <div className='relative flex w-auto flex-col items-center'>
              <div className='h-[5.5vh] w-[5.5vh] rounded-full border-6  border-black bg-brand-yellow' />
              <div className='absolute -bottom-[20px] text-xs text-white'>
                BOTTOM
              </div>
            </div>
          </div>
          {/* ROTATE BUTTON */}
          <div className='relative flex w-auto flex-col items-center'>
            <div className='h-[8vh] w-[8vh] rounded-full border-6  border-black bg-brand-yellow' />
            <div className='mt-2 text-sm text-white'>ROTATE</div>
          </div>
        </div>

        <div className='mt-14 font-secondary text-xs text-white'>
          designed by Valeria Mahilevich
        </div>
      </div>
    </div>
  );
}

export default TetrisControls;
