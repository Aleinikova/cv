import clsx from 'clsx';

interface INavItem {
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
}

function NavItem({ children, className, onClick }: INavItem) {
  return (
    <li
      className={clsx(
        'font-regular mr-2 cursor-pointer border-2 border-transparent px-3 py-2 font-secondary font-medium leading-4 transition-all last:mr-0 hover:border-primary',
        className
      )}
    >
      <button onClick={onClick} type='button'>
        {children}
      </button>
    </li>
  );
}

export default NavItem;
