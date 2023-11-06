import clsx from 'clsx';

interface ITechnology {
  className?: string;
  children: React.ReactNode;
}

function ListItem({ children, className }: ITechnology) {
  return (
    <li
      className={clsx(
        'relative before:absolute before:-left-7 before:top-1/2 before:h-4 before:w-4 before:-translate-y-1/2  before:rounded-lg before:bg-brand-yellow before:content-[""]',
        className
      )}
    >
      {children}
    </li>
  );
}

export default ListItem;
