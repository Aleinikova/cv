import clsx from 'clsx';

interface INavItem {
  children: React.ReactNode;
  className?: string;
}

const NavItem = ({ children, className }: INavItem) => (
  <li
    className={clsx(
      'font-orbitron hover:border-primary font-regular mr-2 cursor-pointer border-2 border-transparent px-3 py-2 font-medium leading-4 transition-all last:mr-0',
      className
    )}
  >
    {children}
  </li>
);

export default NavItem;
