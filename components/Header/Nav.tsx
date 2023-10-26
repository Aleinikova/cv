import clsx from 'clsx';

import NavItem from './NavItem';

interface INav {
  className: string;
}
function Nav({ className }: INav) {
  return (
    <ul className={clsx('flex list-none flex-row', className)}>
      <NavItem>about me</NavItem>
      <NavItem>projects</NavItem>
      <NavItem>technologies</NavItem>
      <NavItem>contacts</NavItem>
    </ul>
  );
}

export default Nav;
