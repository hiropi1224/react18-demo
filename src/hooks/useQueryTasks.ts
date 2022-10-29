import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { sleep } from '../utils/sleep';

const getTasks = async () => {
  const { data } = await axios
    .get('https://jsonplaceholder.typicode.com/todos?_limit=3')
    .then(await sleep(5000));
  return data;
};

export const useQueryTasks = () => {
  return useQuery({
    queryKey: ['tasks'],
    queryFn: getTasks,
  });
};
