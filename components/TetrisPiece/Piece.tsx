import clsx from 'clsx';
import { IGeneralPiece, Size, Opacity } from './types';

const colors = {
  blue: 'bg-brand-blue',
  red: 'bg-brand-red',
  green: 'bg-brand-green',
  yellow: 'bg-brand-yellow',
};

const opacities = {
  100: 'opacity-100',
  75: 'opacity-75',
  50: 'opacity-50',
  35: 'opacity-35',
};

interface IPiece extends IGeneralPiece {
  opacity?: Opacity;
  style?: React.CSSProperties;
}

function Piece({
  size = 'small',
  color = 'red',
  opacity = 100,
  className,
  style = {},
}: IPiece) {
  return (
    <div
      className={clsx('absolute', colors[color], opacities[opacity], className)}
      style={{
        width: Size[size],
        height: Size[size],
        ...style,
      }}
    />
  );
}

export default Piece;
