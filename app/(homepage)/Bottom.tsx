import TetrisPiece from '@components/TetrisPiece';

function Bottom() {
  return (
    <div className='relative m-auto w-full max-w-[1440px]'>
      <TetrisPiece size='large' variant='I' color='yellow' className='left-0' />
      <TetrisPiece
        size='large'
        variant='O'
        color='green'
        className='!absolute bottom-0 left-[120px]'
      />
      <TetrisPiece
        size='large'
        variant='Z'
        color='red'
        className='!absolute bottom-[120px] left-[360px]'
      />
      <TetrisPiece
        size='large'
        variant='L'
        color='blue'
        className='!absolute -bottom-[60px] left-[420px] -rotate-90'
      />
      <TetrisPiece
        size='large'
        variant='L'
        color='red'
        className='!absolute -bottom-[60px] left-[780px] -rotate-90'
      />
      <TetrisPiece
        size='large'
        variant='O'
        color='yellow'
        className='!absolute bottom-[120px] left-[720px]'
      />
      <TetrisPiece
        size='large'
        variant='O'
        color='yellow'
        className='!absolute bottom-0 left-[1080px]'
      />
      <TetrisPiece
        size='large'
        variant='T'
        color='green'
        className='!absolute bottom-[240px] left-[960px]'
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
