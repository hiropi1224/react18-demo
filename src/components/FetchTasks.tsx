import { UnorderedList, ListItem } from '@chakra-ui/react';
import { useQueryTasks } from '../hooks/useQueryTasks';

export const FetchTasks = () => {
  const { data } = useQueryTasks();
  // SuspenseがなければuseQueryから取得したstatusに応じてハンドリングする
  //   if (status === 'loading') return <p>...loading</p>
  //   if (status === 'error') return <p>Error!!!</p>
  return (
    <UnorderedList>
      {data?.map((task: any) => (
        <ListItem key={task.id}>{task.title}</ListItem>
      ))}
    </UnorderedList>
  );
};
