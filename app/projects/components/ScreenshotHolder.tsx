import clsx from 'clsx';
import Image from 'next/image';

interface ScreenshotHolderProps {
  src: string;
  alt: string;
  className?: string;
  width?: string;
  height?: string;
  noBorder?: boolean;
}

function ScreenshotHolder({
  src,
  alt,
  className,
  width,
  height,
  noBorder,
}: ScreenshotHolderProps) {
  return (
    <li
      className={clsx(
        'relative mb-8 overflow-hidden rounded-xl last:mb-0',
        { 'h-[50vw]': !height },
        { 'w-full': !width },
        { [height]: height },
        { [width]: width },
        { 'border-2 border-gray-200': !noBorder },
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        style={{
          objectFit: 'contain',
        }}
      />

    </li>
  );
}

export default ScreenshotHolder;
