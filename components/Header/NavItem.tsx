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
        'font-regular group mr-2 cursor-pointer font-secondary font-medium leading-4 last:mr-0 ',
        className
      )}
    >
      <button
        onClick={onClick}
        type='button'
        className='border-2 border-transparent px-3 py-2 transition-all group-hover:border-primary'
      >
        {children}
      </button>
    </li>
  );
}

export default NavItem;
