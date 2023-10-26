import clsx from 'clsx';

interface INavItem {
  children: React.ReactNode;
  className?: string;
}

function NavItem({ children, className }: INavItem) {
  return (
    <li
      className={clsx(
        'font-regular mr-2 cursor-pointer border-2 border-transparent px-3 py-2 font-orbitron font-medium leading-4 transition-all last:mr-0 hover:border-primary',
        className
      )}
    >
      {children}
    </li>
  );
}

export default NavItem;
