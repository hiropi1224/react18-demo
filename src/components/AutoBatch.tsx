import {
  Button,
  Heading,
  ListItem,
  OrderedList,
  Stack,
  Text,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useState } from 'react';
import { flushSync } from 'react-dom';

export const AutoBatch = () => {
  // const [count, setCount] = useState(0);
  const [fetchCount, setFetchCount] = useState(0);
  const [users, setUsers] = useState<any[]>([]);

  const clickHandler = () => {
    // setCount((count) => count + 1);
    // setFetchCount((count) => count + 1);

    // Promiseの中でのデータ更新でもバッチが自動的に働く
    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
      setUsers(res.data);
      setFetchCount((count) => count + 1);
    });
  };

  const clickHandlerFlushSync = () => {
    // React v17までの挙動（AutoBatch無効）にするにはflushSyncで囲う
    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
      flushSync(() => {
        setUsers(res.data);
      });

      flushSync(() => {
        setFetchCount((count) => count + 1);
      });
    });
  };

  console.log('Rendered AutoBatch');

  return (
    <Stack
      mt="4"
      spacing={8}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Heading>AutoBatch</Heading>
      <Text>{fetchCount}</Text>
      <OrderedList>
        {users.map((user) => (
          <React.Fragment key={user.id}>
            <ListItem>{user.name}</ListItem>
          </React.Fragment>
        ))}
      </OrderedList>
      <Text>
        AutoBatchでは複数の状態更新を1つの再レンダリングにグループ化して、パフォーマンスを向上させる
      </Text>
      <Button onClick={clickHandler}>Auto Batch click</Button>
      <Text>FlushSyncを使うことでReactv17までと同様の挙動となる</Text>
      <Button onClick={clickHandlerFlushSync}>FlushSync click</Button>
    </Stack>
  );
};
