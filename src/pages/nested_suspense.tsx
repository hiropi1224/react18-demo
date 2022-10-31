import { Heading, Text } from '@chakra-ui/react';
import { NextPage } from 'next';
import { Suspense } from 'react';
import { FetchTasks } from '../components/FetchTasks';
import { FetchUsers } from '../components/FetchUsers';
import { Layout } from '../components/Layout';
import { Spinner } from '../components/Spinner';

const NestedSuspense: NextPage = () => {
  return (
    <Layout>
      <>
        <Heading as="h1">Nested Suspense Demo</Heading>
        <Suspense
          fallback={
            <>
              <Text color="blue.500">Showing outside skelton...</Text>
              <Spinner />
            </>
          }
        >
          <FetchUsers />
          <Suspense
            fallback={
              <>
                <Text color="pink.500">Showing inner skelton...</Text>
                <Spinner />
              </>
            }
          >
            <FetchTasks />
          </Suspense>
        </Suspense>
      </>
    </Layout>
  );
};

export default NestedSuspense;
