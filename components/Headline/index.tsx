import clsx from 'clsx';

interface IHeadline {
  component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
  className?: string;
}

function Headline({ children, className, component }: IHeadline) {
  const Tag = (`${component}` || 'h2') as keyof JSX.IntrinsicElements;

  return (
    <Tag
      className={clsx(
        'relative text-center font-secondary text-4xl font-bold before:absolute before:-bottom-3 before:left-1/2 before:h-[4px] before:w-[68%] before:max-w-[150px] before:-translate-x-1/2 before:bg-primary before:content-[""]',
        className
      )}
    >
      {children}
    </Tag>
  );
}

export default Headline;
