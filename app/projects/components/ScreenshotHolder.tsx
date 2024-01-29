'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';
import Skeleton from 'react-loading-skeleton';

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
  const [isLoading, setIsLoading] = useState(true);
  return (
    <li
      className={clsx(
        'relative mb-6 overflow-hidden rounded-xl last:mb-0 lg:mb-8',
        { 'h-[50vw] max-h-[600px]': !height },
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
        onLoad={() => setIsLoading(false)}
      />

      {isLoading && (
        <div className='h-full w-full leading-[1px]'>
          <Skeleton containerClassName='w-full h-full' height='100%' />
        </div>
      )}
    </li>
  );
}

export default ScreenshotHolder;
