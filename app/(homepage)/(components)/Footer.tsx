function FooterEl() {
  return (
    <footer className='flex flex-col items-center bg-text-primary px-28 pb-9 pt-40'>
      {/* TOP BUTTONS ROW */}
      <div className='flex w-3/4 items-center justify-between'>
        <div className='flex w-auto flex-col items-center'>
          <div className='h-24 w-24 rounded-full bg-brand-yellow' />
          <div className='mt-2 text-white'>ON/OFF</div>
        </div>
        <div className='flex w-auto flex-col items-center'>
          <div className='h-24 w-24 rounded-full bg-brand-yellow' />
          <div className='mt-2 text-white'>S/P</div>
        </div>
        <div className='flex w-auto flex-col items-center'>
          <div className='h-24 w-24 rounded-full bg-brand-yellow' />
          <div className='mt-2 text-white'>SOUND</div>
        </div>
        <div className='flex w-auto flex-col items-center'>
          <div className='h-24 w-24 rounded-full bg-brand-yellow' />
          <div className='mt-2 text-white'>SOUND</div>
        </div>
      </div>
      {/* SECOND BUTTONS ROW */}
      <div className='mt-20 flex w-full items-center justify-between'>
        {/* MAIN CONTROL */}
        <div>
          <div className='relative flex w-auto flex-col items-center'>
            <div className='h-40 w-40 rounded-full bg-brand-yellow' />
            <div className='absolute -bottom-[28px] text-white'>TOP</div>
          </div>
          <div className='flex'>
            <div className='relative mr-40 flex w-auto flex-col items-center'>
              <div className='h-40 w-40 rounded-full bg-brand-yellow' />
              <div className='absolute -bottom-[28px] text-white'>LEFT</div>
            </div>
            <div className='relative flex w-auto flex-col items-center'>
              <div className='h-40 w-40 rounded-full bg-brand-yellow' />
              <div className='absolute -bottom-[28px] text-white'>RIGHT</div>
            </div>
          </div>
          <div className='relative flex w-auto flex-col items-center'>
            <div className='h-40 w-40 rounded-full bg-brand-yellow' />
            <div className='absolute -bottom-[28px] text-white'>BOTTOM</div>
          </div>
        </div>
        {/* ROTATE BUTTON */}
        <div className='relative flex w-auto flex-col items-center'>
          <div className='h-52 w-52 rounded-full bg-brand-yellow' />
          <div className=' mt-2 text-white'>ROTATE</div>
        </div>
      </div>

      <div className='mt-40 font-secondary text-white'>
        designed by Valeria Mahilevich
      </div>
    </footer>
  );
}

export default FooterEl;
