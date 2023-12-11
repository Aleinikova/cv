export interface IGeneralPiece {
  size?: PieceSize;
  color?: PieceColor;
  className?: string;
}

// eslint-disable-next-line no-shadow
export enum Size {
  xs = 24,
  sm = 48,
  md = 100,
  lg = 120,
}

export type Opacity = 100 | 75 | 50 | 35;

export type PieceSize = 'xs' | 'sm' | 'md' | 'lg';

export type PieceType = 'T' | 'I' | 'O' | 'L' | 'J' | 'Z' | 'S';

export type PieceColor = 'red' | 'green' | 'blue' | 'yellow';
