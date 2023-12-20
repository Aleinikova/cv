import React from 'react';

import TetrisBottomPiecesDesktop from './TetrisBottomPiecesDesktop';
import TetrisBottomPiecesMobile from './TetrisBottomPiecesMobile';
import TetrisBottomPiecesTablet from './TetrisBottomPiecesTablet';

const TetrisBottomPieces = React.forwardRef<HTMLDivElement>((_, ref) => (
  <div id='bottom' ref={ref} className=' min-w-full'>
    <TetrisBottomPiecesDesktop />
    <TetrisBottomPiecesTablet />
    <TetrisBottomPiecesMobile />
  </div>
));

export default TetrisBottomPieces;
