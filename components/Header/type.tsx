import { MutableRefObject } from 'react';

export interface INavItem {
  anchorRef: MutableRefObject<HTMLElement>;
  title: string;
}
