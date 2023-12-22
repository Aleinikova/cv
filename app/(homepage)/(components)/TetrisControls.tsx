import clsx from 'clsx';

const TOP_CONTROLS = ['S/P', 'SOUND', 'ON/OFF', 'RESET'];

interface TetrisButtonProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  isTextAbsolute?: boolean;
  className?: string;
}
function TetrisButton({
  children,
  size = 'sm',
  isTextAbsolute = false,
  className,
}: TetrisButtonProps) {
  const buttonStyles = {
    sm: 'h-[3.5vh] w-[3.5vh] sm:h-[4.2vh] sm:w-[4.2vh] shadow-[inset_-2px_-2px_0px_0px_rgba(168,141,2,0.8),_3px_3px_0px_0px_rgba(20,20,20,0.6)]',
    md: 'h-[4vh] w-[4vh] sm:h-[5.5vh]  sm:w-[5.5vh] shadow-[inset_-3px_-3px_0px_0px_rgba(168,141,2,0.8),_4px_4px_0px_0px_rgba(20,20,20,0.6)]',
    lg: 'shadow-[inset_-5px_-5px_0px_0px_rgba(168,141,2,0.8),_6px_6px_0px_0px_rgba(20,20,20,0.6)] h-[6.5vh] w-[6.5vh]  sm:h-[8vh]  sm:w-[8vh]',
  };

  const textStyles = {
    sm: 'mt-2 text-2xs text-white ',
    md: 'text-2xs text-white sm:text-xs',
    lg: 'mt-2 text-xs text-white sm:text-sm',
  };

  return (
    <div
      className={clsx(
        'relative  flex w-auto flex-col items-center ',
        className
      )}
    >
      <div
        className={clsx(
          'rounded-full border-4 border-black bg-brand-yellow md:border-6',
          buttonStyles[size]
        )}
      />
      <div
        className={clsx('text-white', textStyles[size], {
          'absolute -bottom-[20px]': isTextAbsolute,
        })}
      >
        {children}
      </div>
    </div>
  );
}

function TetrisControls() {
  return (
    <div
      className='absolute bottom-0 flex w-full flex-col items-center pb-8 xl:scale-[4] '
      id='footer'
    >
      <div className='flex w-full max-w-[90vh] flex-col items-center sm:max-w-[45vh] xl:max-w-[47vh]'>
        <div className='relative z-10 h-[7vh] w-[110%] rounded-full border-4 border-black bg-text-primary shadow-[inset_-2px_-2px_0px_6px_rgba(20,20,20,1)] after:absolute after:left-3/4 after:top-3 after:h-3.5 after:w-1/3 after:-translate-x-1/2 after:rounded-xl after:bg-[rgba(38,38,38,1)] sm:h-[10vh] md:border-6 md:shadow-[inset_-4px_-4px_0px_8px_rgba(20,20,20,1)] md:after:h-[3vh] xl:h-[10vh] 2xl:max-h-32' />
        {/* TOP BUTTONS ROW */}
        <div className='mt-4 flex w-3/4 items-center justify-between px-4'>
          {TOP_CONTROLS.map((title) => (
            <TetrisButton key={title}>{title}</TetrisButton>
          ))}
        </div>
        {/* SECOND BUTTONS ROW */}
        <div className='mt-6 flex w-11/12 items-center justify-between px-9'>
          {/* MAIN CONTROL */}
          <div>
            <TetrisButton size='md' className='mb-1 sm:mb-0' isTextAbsolute>
              TOP
            </TetrisButton>
            <div className='flex'>
              <TetrisButton size='md' className='mr-9 sm:mr-10' isTextAbsolute>
                LEFT
              </TetrisButton>

              <TetrisButton size='md' isTextAbsolute>
                RIGHT
              </TetrisButton>
            </div>
            <TetrisButton className='mt-1 sm:mb-0' size='md' isTextAbsolute>
              BOTTOM
            </TetrisButton>
          </div>
          {/* ROTATE BUTTON */}
          <TetrisButton size='lg'>ROTATE</TetrisButton>
        </div>

        {/* <div className='text-brand-black mt-9 font-secondary text-2xs sm:text-xs md:mt-14'>
          designed by Waleria Mogilewicz
        </div> */}
      </div>
    </div>
  );
}

export default TetrisControls;
