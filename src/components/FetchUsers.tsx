import { UnorderedList, ListItem } from '@chakra-ui/react';
import { useQueryUsers } from '../hooks/useQueryUsers';

export const FetchUsers = () => {
  const { data } = useQueryUsers();
  // SuspenseがなければuseQueryから取得したstatusに応じてハンドリングする
  //   if (status === 'loading') return <p>...loading</p>
  //   if (status === 'error') return <p>Error!!!</p>
  return (
    <UnorderedList>
      {data?.map((user: any) => (
        <ListItem key={user.id}>{user.name}</ListItem>
      ))}
    </UnorderedList>
  );
};
