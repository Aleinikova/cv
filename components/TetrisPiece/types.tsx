export interface IGeneralPiece {
  size?: PieceSize;
  color?: PieceColor;
  className?: string;
}

// eslint-disable-next-line no-shadow
export enum Size {
  small = 24,
  medium = 64,
  large = 120,
}

export type Opacity = 100 | 75 | 50 | 35;

export type PieceSize = 'small' | 'medium' | 'large';

export type PieceType = 'T' | 'I' | 'O' | 'L' | 'J' | 'Z' | 'S';

export type PieceColor = 'red' | 'green' | 'blue' | 'yellow';
