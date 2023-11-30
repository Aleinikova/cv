import TetrisPiece from '@components/TetrisPiece';

function Bottom() {
  return (
    <div
      className='relative m-auto h-[960px] w-full max-w-[1440px] overflow-hidden'
      id='bottom'
    >
      <TetrisPiece
        size='lg'
        variant='O'
        color='green'
        className='!absolute bottom-0 left-0'
      />
      <TetrisPiece
        size='lg'
        variant='T'
        color='red'
        className='!absolute -left-[60px] bottom-[300px] rotate-90'
      />
      <TetrisPiece
        size='lg'
        variant='J'
        color='yellow'
        className='!absolute bottom-[180px] left-[180px] rotate-[270deg] '
      />
      <TetrisPiece
        size='lg'
        variant='J'
        color='blue'
        className='!absolute -bottom-[180px] left-[300px] rotate-90'
      />
      <TetrisPiece
        size='lg'
        variant='I'
        color='green'
        className='!absolute bottom-[120px] left-[480px]'
      />
      <TetrisPiece
        size='lg'
        variant='S'
        color='yellow'
        className='!absolute bottom-0 left-[600px]'
      />
      <TetrisPiece
        size='lg'
        variant='Z'
        color='red'
        className='!absolute bottom-[120px] left-[600px] rotate-90'
      />
      <TetrisPiece
        size='lg'
        variant='I'
        color='blue'
        className='!absolute -bottom-[180px] left-[1020px] rotate-90'
      />
      <TetrisPiece
        size='lg'
        variant='O'
        color='blue'
        className='!absolute bottom-[240px] left-[840px]'
      />
      <TetrisPiece
        size='lg'
        variant='L'
        color='green'
        className='!absolute bottom-[60px] left-[1020px] rotate-[270deg]'
      />
      <TetrisPiece
        size='lg'
        variant='Z'
        color='red'
        className='!absolute bottom-[240px] left-[1080px] rotate-90 opacity-0'
        id='mainTetrisPieceShadow'
      />
      <TetrisPiece
        size='lg'
        variant='I'
        color='blue'
        className='!absolute bottom-0 left-[1320px]'
      />
    </div>
  );
}

export default Bottom;
