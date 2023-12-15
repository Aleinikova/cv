import TetrisPiece from '@components/TetrisPiece';

function TetrisBottomPiecesTablet() {
  return (
    <div className='relative m-auto hidden h-[600px] w-full max-w-[1440px] overflow-hidden sm:block xl:hidden'>
      <TetrisPiece
        size='md'
        variant='O'
        color='green'
        className='!absolute bottom-0 left-0'
      />
      <TetrisPiece
        size='md'
        variant='T'
        color='blue'
        className='!absolute -left-[50px] bottom-[250px] rotate-90'
      />
      <TetrisPiece
        size='md'
        variant='J'
        color='red'
        className='!absolute bottom-[150px] left-[150px] rotate-[270deg] '
      />
      <TetrisPiece
        size='md'
        variant='J'
        color='yellow'
        className='!absolute -bottom-[150px] left-[250px] rotate-90'
      />
      <TetrisPiece
        size='md'
        variant='J'
        color='red'
        className='!absolute bottom-[300px] left-[200px] rotate-180 opacity-0'
        id='mainTetrisPieceShadowTablet'
      />
      <TetrisPiece
        size='md'
        variant='I'
        color='blue'
        className='!absolute bottom-[100px] left-[400px]'
      />
      <TetrisPiece
        size='md'
        variant='S'
        color='red'
        className='!absolute bottom-0 left-[500px]'
      />
      <TetrisPiece
        size='md'
        variant='Z'
        color='green'
        className='!absolute bottom-[100px] left-[500px] rotate-90'
      />
      <TetrisPiece
        size='md'
        variant='I'
        color='blue'
        className='!absolute -bottom-[150px] left-[850px] rotate-90'
      />
      <TetrisPiece
        size='md'
        variant='O'
        color='yellow'
        className='!absolute bottom-[200px] left-[700px]'
      />
      <TetrisPiece
        size='md'
        variant='L'
        color='green'
        className='!absolute bottom-[50px] left-[805px] rotate-[270deg]'
      />
      <TetrisPiece
        size='md'
        variant='I'
        color='blue'
        className='!absolute bottom-0 left-[1100px]'
      />
    </div>
  );
}

export default TetrisBottomPiecesTablet;
