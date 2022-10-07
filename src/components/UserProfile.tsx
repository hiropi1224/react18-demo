import { Center, Text } from '@chakra-ui/react';
import { FC, Suspense } from 'react';
import useSWR from 'swr';

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

const getUser = async (userId: number | string): Promise<User> =>
  (await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)).json();

export const UserProfile: FC<{ userId: number }> = ({ userId }) => {
  const { data: user } = useSWR(`user/${userId}`, () => getUser(userId), {
    suspense: true,
  });

  return (
    <Suspense fallback={<h2>...loading</h2>}>
      <Center>
        <Text>{user?.name}</Text>
        <Text>{user?.id}</Text>
        <Text>{user?.email}</Text>
        <Text>{user?.phone}</Text>
      </Center>
    </Suspense>
  );
};
