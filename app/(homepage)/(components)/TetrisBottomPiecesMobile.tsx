import TetrisPiece from '@components/TetrisPiece';

function TetrisBottomPiecesMobile() {
  return (
    <div className='relative m-auto h-[260px] w-full max-w-[1440px] overflow-hidden md:hidden'>
      <TetrisPiece
        size='sm'
        variant='O'
        color='green'
        className='!absolute bottom-0 left-0'
      />
      <TetrisPiece
        size='sm'
        variant='T'
        color='blue'
        className='!absolute -left-[24px] bottom-[120px] rotate-90'
      />
      <TetrisPiece
        size='sm'
        variant='J'
        color='red'
        className='!absolute bottom-[72px] left-[72px] rotate-[270deg] '
      />
      <TetrisPiece
        size='sm'
        variant='J'
        color='yellow'
        className='!absolute -bottom-[72px] left-[120px] rotate-90'
      />
      <TetrisPiece
        size='sm'
        variant='I'
        color='blue'
        className='!absolute bottom-[48px] left-[192px]'
      />
      <TetrisPiece
        size='sm'
        variant='S'
        color='red'
        className='!absolute bottom-0 left-[240px]'
      />
      <TetrisPiece
        size='sm'
        variant='Z'
        color='green'
        className='!absolute bottom-[48px] left-[240px] rotate-90'
      />
      <TetrisPiece
        size='sm'
        variant='L'
        color='red'
        className='!absolute bottom-[120px] left-[264px] rotate-90 opacity-0'
        id='mainTetrisPieceShadowMobile'
      />
      <TetrisPiece
        size='sm'
        variant='I'
        color='blue'
        className='!absolute -bottom-[72px] left-[408px] rotate-90'
      />
      <TetrisPiece
        size='sm'
        variant='O'
        color='yellow'
        className='!absolute bottom-[96px] left-[336px]'
      />
      <TetrisPiece
        size='sm'
        variant='L'
        color='green'
        className='!absolute bottom-[24px] left-[408px] rotate-[270deg]'
      />
      <TetrisPiece
        size='sm'
        variant='I'
        color='blue'
        className='!absolute bottom-0 left-[528px]'
      />
    </div>
  );
}

export default TetrisBottomPiecesMobile;
