import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { sleep } from '../utils/sleep';

const getComments = async () => {
  const { data } = await axios
    .get('https://jsonplaceholder.typicode.com/comments?_limit=3')
    .then(await sleep(1000));
  return data;
};

export const useQueryComments = () => {
  return useQuery({
    queryKey: ['comments'],
    queryFn: getComments,
  });
};
