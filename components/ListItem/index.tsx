import clsx from 'clsx';

interface ITechnology {
  className?: string;
  children: React.ReactNode;
}

function ListItem({ children, className }: ITechnology) {
  return (
    <li
      className={clsx(
        'relative ml-7 before:absolute before:-left-7 before:top-1/2 before:h-2 before:w-2 before:-translate-y-1/2 before:rounded-lg before:bg-brand-yellow  before:content-[""] sm:before:h-4 sm:before:w-4',
        className
      )}
    >
      {children}
    </li>
  );
}

export default ListItem;
