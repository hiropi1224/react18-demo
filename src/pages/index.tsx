import { Center, Text, VStack } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { Transition } from '../components/Transition';

const Home: NextPage = () => {
  return (
    <Center>
      <VStack border="1px" borderColor="gray.200" borderRadius="lg" p="4">
        <Text>Transition</Text>
        <Transition />
      </VStack>
    </Center>
  );
};

export default Home;
