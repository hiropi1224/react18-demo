import { UnorderedList, ListItem } from '@chakra-ui/react';
import { useQueryComments } from '../hooks/useQueryComments';

export const FetchComments = () => {
  const { data } = useQueryComments();
  // SuspenseがなければuseQueryから取得したstatusに応じてハンドリングする
  //   if (status === 'loading') return <p>...loading</p>
  //   if (status === 'error') return <p>Error!!!</p>
  return (
    <UnorderedList>
      {data?.map((comment: any) => (
        <ListItem key={comment.id}>{comment.name}</ListItem>
      ))}
    </UnorderedList>
  );
};
