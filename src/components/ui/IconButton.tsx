import { ComponentProps } from 'react';
import { cn } from '../../lib/utils';

const IconButton = ({
  children,
  className,
  ...rest
}: ComponentProps<'button'>) => {
  return (
    <button
      className={cn(
        'p-2 transition-colors rounded-md hover:bg-black/5',
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default IconButton;
