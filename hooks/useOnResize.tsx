import { useEffect } from 'react';

const useOnResize = (handler: () => void) => {
  useEffect(() => {
    window.addEventListener('resize', handler);

    return () => {
      window.removeEventListener('resize', handler);
    };
  }, [handler]);
};

export default useOnResize;
