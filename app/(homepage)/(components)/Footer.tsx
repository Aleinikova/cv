function FooterEl() {
  return (
    <footer
      className='absolute bottom-0 flex w-full scale-[4] flex-col items-center bg-text-primary pb-3 pt-2'
      id='footer'
    >
      <div className='flex w-full max-w-[366px] flex-col items-center'>
        <div className='h-8 w-[90%] rounded-full border-[6px] border-black' />
        {/* TOP BUTTONS ROW */}
        <div className='mt-4 flex w-3/4 items-center justify-between px-4'>
          <div className='flex w-auto flex-col items-center'>
            <div className='h-9 w-9 rounded-full border-[6px] border-black bg-brand-yellow' />
            <div className='mt-2 text-xs text-white'>ON/OFF</div>
          </div>
          <div className='flex w-auto flex-col items-center'>
            <div className='h-9 w-9 rounded-full border-[6px] border-black bg-brand-yellow' />
            <div className='mt-2 text-xs text-white'>S/P</div>
          </div>
          <div className='flex w-auto flex-col items-center'>
            <div className='h-9 w-9 rounded-full border-[6px] border-black bg-brand-yellow' />
            <div className='mt-2 text-xs text-white'>SOUND</div>
          </div>
          <div className='flex w-auto flex-col items-center'>
            <div className='h-9 w-9 rounded-full border-[6px] border-black bg-brand-yellow' />
            <div className='mt-2 text-xs text-white'>SOUND</div>
          </div>
        </div>
        {/* SECOND BUTTONS ROW */}
        <div className='mt-6 flex w-11/12 items-center justify-between px-9'>
          {/* MAIN CONTROL */}
          <div>
            <div className='relative flex w-auto flex-col items-center'>
              <div className='h-11 w-11 rounded-full border-[6px]  border-black bg-brand-yellow' />
              <div className='absolute -bottom-[20px] text-xs text-white'>
                TOP
              </div>
            </div>
            <div className='flex'>
              <div className='relative mr-10 flex w-auto flex-col items-center'>
                <div className='h-11 w-11 rounded-full border-[6px] border-black bg-brand-yellow' />
                <div className='absolute -bottom-[20px] text-xs text-white'>
                  LEFT
                </div>
              </div>
              <div className='relative flex w-auto flex-col items-center'>
                <div className='h-11 w-11 rounded-full border-[6px]  border-black bg-brand-yellow' />
                <div className='absolute -bottom-[20px] text-xs text-white'>
                  RIGHT
                </div>
              </div>
            </div>
            <div className='relative flex w-auto flex-col items-center'>
              <div className='h-11 w-11 rounded-full border-[6px]  border-black bg-brand-yellow' />
              <div className='absolute -bottom-[20px] text-xs text-white'>
                BOTTOM
              </div>
            </div>
          </div>
          {/* ROTATE BUTTON */}
          <div className='relative flex w-auto flex-col items-center'>
            <div className='h-16 w-16 rounded-full border-[6px]  border-black bg-brand-yellow' />
            <div className='mt-2 text-white'>ROTATE</div>
          </div>
        </div>

        <div className='mt-14 font-secondary text-sm text-white'>
          designed by Valeria Mahilevich
        </div>
      </div>
    </footer>
  );
}

export default FooterEl;
