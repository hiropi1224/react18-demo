import { NextPage } from 'next';
import React from 'react';
import { ChangeEvent, useEffect, useState, useTransition } from 'react';
import { Heading, Input, ListItem, OrderedList, Text } from '@chakra-ui/react';
import axios from 'axios';
import { Layout } from '../components/Layout';

const StartTransition: NextPage = () => {
  const [photos, setPhotos] = useState<any[]>([]);
  const [input, setInput] = useState('');
  const [searchKey, setSearchKey] = useState('');
  // isPending = trueのときはinputとsearchKeyの値が異なる
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const fetchData = async () => {
      // 5000個のphotos取得
      const res = await axios('https://jsonplaceholder.typicode.com/photos');
      setPhotos(res.data);
    };
    fetchData();
  }, []);

  const filteredPhotos = photos.filter((photo) => {
    return photo.title.includes(searchKey);
  });

  const updateHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value); // 緊急性の高い更新
    startTransition(() => setSearchKey(e.target.value)); // 緊急性の低い更新
  };

  return (
    <Layout>
      <>
        <Heading as="h1" color={isPending ? 'pink.500' : 'blue.500'}>
          start Transition(concurrent feature)
        </Heading>
        <Text>
          緊急性の高い更新と緊急性の低い更新を優先付けすることができる
        </Text>
        {/* searchKeyを変更するたびにフィルタリング、レンダリング処理が行われている */}
        {/* <Input type="text" value={searchKey} onChange={updateHandler} /> */}
        <Input type="text" value={input} onChange={updateHandler} />
        <OrderedList>
          {filteredPhotos.map((photo) => (
            <React.Fragment key={photo.id}>
              <ListItem>{photo.title}</ListItem>
            </React.Fragment>
          ))}
        </OrderedList>
      </>
    </Layout>
  );
};

export default StartTransition;
