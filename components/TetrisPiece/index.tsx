import clsx from 'clsx';
import { v4 as uuid } from 'uuid';

import { IGeneralPiece, Size, PieceType, Opacity } from './types';
import Piece from './Piece';

const OPACITIES: Opacity[] = [100, 75, 50, 35];
const getPieceScheme = (variant: PieceType, size: 'small' | 'medium') => {
  switch (variant) {
    case 'T': {
      return {
        width: Size[size] * 3,
        height: Size[size] * 2,
        pieces: [
          {
            left: 0,
            bottom: 0,
          },
          {
            left: `${Size[size]}px`,
            bottom: 0,
          },
          {
            left: `${Size[size] * 2}px`,
            bottom: 0,
          },
          {
            left: `${Size[size]}px`,
          },
        ],
      };
    }
    case 'I': {
      return {
        width: Size[size],
        height: Size[size] * 4,
        pieces: [
          {
            top: `${Size[size] * 3}px`,
          },
          {
            top: `${Size[size] * 2}px`,
          },
          {
            top: `${Size[size]}px`,
          },
          {
            top: 0,
          },
        ],
      };
    }
    case 'L': {
      return {
        width: Size[size] * 2,
        height: Size[size] * 3,
        pieces: [
          {
            top: 0,
          },
          {
            top: `${Size[size]}px`,
          },
          {
            top: `${Size[size] * 2}px`,
          },
          {
            top: `${Size[size] * 2}px`,
            left: `${Size[size]}px`,
          },
        ],
      };
    }
    case 'J': {
      return {
        width: Size[size] * 2,
        height: Size[size] * 3,
        pieces: [
          {
            top: 0,
          },
          {
            top: `${Size[size]}px`,
          },
          {
            top: `${Size[size] * 2}px`,
          },
          {
            top: `${Size[size] * 2}px`,
            left: `-${Size[size]}px`,
          },
        ],
      };
    }
    case 'O': {
      return {
        width: Size[size] * 2,
        height: Size[size] * 2,
        pieces: [
          {
            top: `${Size[size]}px`,
          },
          {
            top: `${Size[size]}px`,
            left: `${Size[size]}px`,
          },
          {
            top: 0,
            left: `${Size[size]}px`,
          },
          {
            top: 0,
          },
        ],
      };
    }
    case 'S': {
      return {
        width: Size[size] * 2,
        height: Size[size] * 2,
        pieces: [
          {
            top: `${Size[size]}px`,
          },
          {
            top: `${Size[size]}px`,
            left: `${Size[size]}px`,
          },
          {
            top: 0,
            left: `${Size[size]}px`,
          },
          {
            top: 0,
            left: `${Size[size] * 2}px`,
          },
        ],
      };
    }
    case 'Z': {
      return {
        width: Size[size] * 2,
        height: Size[size] * 2,
        pieces: [
          {
            top: `${Size[size]}px`,
            left: `${Size[size]}px`,
          },
          {
            top: `${Size[size]}px`,
          },
          {
            top: 0,
            left: 0,
          },
          {
            top: 0,
            left: `-${Size[size]}px`,
          },
        ],
      };
    }
    default: {
      return {
        width: Size[size] * 3,
        height: Size[size] * 2,
        pieces: [
          {
            left: 0,
            bottom: 0,
          },
          {
            left: `${Size[size]}px`,
            bottom: 0,
          },
          {
            left: `${Size[size] * 2}px`,
            bottom: 0,
          },
          {
            left: `${Size[size]}px`,
          },
        ],
      };
    }
  }
};

interface ITetrisPiece extends IGeneralPiece {
  variant: PieceType;
  style?: React.CSSProperties;
  id?: string;
}
function TetrisPiece({
  variant,
  size = 'small',
  color,
  className,
  style = {},
  id,
}: ITetrisPiece) {
  const scheme = getPieceScheme(variant, size);

  return (
    <div
      className={clsx('relative', className)}
      style={{
        width: scheme.width,
        height: scheme.height,
        ...style,
      }}
      id={id}
    >
      {scheme.pieces.map((piece, i) => (
        <Piece
          size={size}
          color={color}
          opacity={OPACITIES[i]}
          style={piece}
          key={uuid()}
        />
      ))}
    </div>
  );
}

export default TetrisPiece;
