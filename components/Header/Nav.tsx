import clsx from 'clsx';
import { MutableRefObject } from 'react';

import NavItem from './NavItem';
import { INavItem } from './type';

interface INav {
  className: string;
  items: INavItem[];
  onClick: (value: MutableRefObject<HTMLElement>) => void;
}
function Nav({ className, items, onClick }: INav) {
  return (
    <ul className={clsx('flex list-none flex-row', className)}>
      {items.map((item) => (
        <NavItem onClick={() => onClick(item.anchorRef)} key={item.title}>
          {item.title}
        </NavItem>
      ))}

      {/* <NavItem onClick={() => onClick(anchors[1])}>projects</NavItem>
      <NavItem onClick={() => onClick(anchors[2])}>technologies</NavItem>
      <NavItem onClick={() => onClick(anchors[3])}>contacts</NavItem> */}
    </ul>
  );
}

export default Nav;
