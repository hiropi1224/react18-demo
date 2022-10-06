import { Button, Spinner } from '@chakra-ui/react';
import { FC, SyntheticEvent, useState, useTransition } from 'react';

export const Transition: FC = () => {
  const [count, setCount] = useState(0);
  const [isPending, startTransition] = useTransition();

  const handleClick = (event: SyntheticEvent) => {
    event.stopPropagation();
    startTransition(() => {
      setCount((c) => c + 1);
    });
  };

  return (
    <div>
      {isPending && <Spinner />}
      <Button onClick={handleClick}>{count}</Button>
    </div>
  );
};
