import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { sleep } from '../utils/sleep';

const getUsers = async () => {
  const { data } = await axios
    .get('https://jsonplaceholder.typicode.com/users?_limit=3')
    .then(await sleep(3000));
  return data;
};

export const useQueryUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
  });
};
