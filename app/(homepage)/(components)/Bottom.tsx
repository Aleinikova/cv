import TetrisPiece from '@components/TetrisPiece';

function Bottom() {
  return (
    <div
      className='relative m-auto h-[480px] w-full max-w-[1440px] overflow-hidden'
      id='bottom'
    >
      <TetrisPiece
        size='large'
        variant='O'
        color='green'
        className='!absolute bottom-0 left-0'
      />
      <TetrisPiece
        size='large'
        variant='T'
        color='red'
        className='!absolute -left-[60px] bottom-[300px] rotate-90'
      />
      <TetrisPiece
        size='large'
        variant='J'
        color='yellow'
        className='!absolute bottom-[180px] left-[180px] rotate-[270deg] '
      />
      <TetrisPiece
        size='large'
        variant='J'
        color='blue'
        className='!absolute -bottom-[180px] left-[300px] rotate-90'
      />
      <TetrisPiece
        size='large'
        variant='I'
        color='green'
        className='!absolute bottom-[120px] left-[480px]'
      />
      <TetrisPiece
        size='large'
        variant='S'
        color='yellow'
        className='!absolute bottom-0 left-[600px]'
      />
      <TetrisPiece
        size='large'
        variant='Z'
        color='red'
        className='!absolute bottom-[120px] left-[600px] rotate-90'
      />
      <TetrisPiece
        size='large'
        variant='I'
        color='blue'
        className='!absolute -bottom-[180px] left-[1020px] rotate-90'
      />
      <TetrisPiece
        size='large'
        variant='O'
        color='blue'
        className='!absolute bottom-[240px] left-[840px]'
      />
      <TetrisPiece
        size='large'
        variant='L'
        color='green'
        className='!absolute bottom-[60px] left-[1020px] rotate-[270deg]'
      />
      <TetrisPiece
        size='large'
        variant='I'
        color='blue'
        className='!absolute bottom-0 left-[1320px]'
      />
    </div>
  );
}

export default Bottom;
