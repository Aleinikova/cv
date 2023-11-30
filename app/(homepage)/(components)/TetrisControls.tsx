function TetrisControls() {
  return (
    <div
      className='absolute bottom-0 flex w-full scale-[4] flex-col items-center pb-3 '
      id='footer'
    >
      <div className='flex w-full max-w-[366px] flex-col items-center'>
        <div className='h-[10vh] w-[90%] rounded-full border-[6px] border-black' />
        {/* TOP BUTTONS ROW */}
        <div className='mt-4 flex w-3/4 items-center justify-between px-4'>
          <div className='flex w-auto flex-col items-center'>
            <div className='h-[4.2vh] w-[4.2vh] rounded-full border-[6px] border-black bg-brand-yellow' />
            <div className='mt-2 text-[10px] text-white'>ON/OFF</div>
          </div>
          <div className='flex w-auto flex-col items-center'>
            <div className='h-[4.2vh] w-[4.2vh] rounded-full border-[6px] border-black bg-brand-yellow' />
            <div className='mt-2 text-[10px] text-white'>S/P</div>
          </div>
          <div className='flex w-auto flex-col items-center'>
            <div className='h-[4.2vh] w-[4.2vh] rounded-full border-[6px] border-black bg-brand-yellow' />
            <div className='mt-2 text-[10px] text-white'>SOUND</div>
          </div>
          <div className='flex w-auto flex-col items-center'>
            <div className='h-[4.2vh] w-[4.2vh] rounded-full border-[6px] border-black bg-brand-yellow' />
            <div className='mt-2 text-[10px] text-white'>SOUND</div>
          </div>
        </div>
        {/* SECOND BUTTONS ROW */}
        <div className='mt-6 flex w-11/12 items-center justify-between px-9'>
          {/* MAIN CONTROL */}
          <div>
            <div className='relative flex w-auto flex-col items-center'>
              <div className='h-[5.5vh] w-[5.5vh] rounded-full border-[6px]  border-black bg-brand-yellow' />
              <div className='absolute -bottom-[20px] text-xs text-white'>
                TOP
              </div>
            </div>
            <div className='flex'>
              <div className='relative mr-10 flex w-auto flex-col items-center'>
                <div className='h-[5.5vh] w-[5.5vh] rounded-full border-[6px] border-black bg-brand-yellow' />
                <div className='absolute -bottom-[20px] text-xs text-white'>
                  LEFT
                </div>
              </div>
              <div className='relative flex w-auto flex-col items-center'>
                <div className='h-[5.5vh] w-[5.5vh] rounded-full border-[6px]  border-black bg-brand-yellow' />
                <div className='absolute -bottom-[20px] text-xs text-white'>
                  RIGHT
                </div>
              </div>
            </div>
            <div className='relative flex w-auto flex-col items-center'>
              <div className='h-[5.5vh] w-[5.5vh] rounded-full border-[6px]  border-black bg-brand-yellow' />
              <div className='absolute -bottom-[20px] text-xs text-white'>
                BOTTOM
              </div>
            </div>
          </div>
          {/* ROTATE BUTTON */}
          <div className='relative flex w-auto flex-col items-center'>
            <div className='h-[8vh] w-[8vh] rounded-full border-[6px]  border-black bg-brand-yellow' />
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
