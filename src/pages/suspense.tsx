import {
  Heading,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { FetchComments } from '../components/FetchComments';
import { FetchTasks } from '../components/FetchTasks';
import { FetchUsers } from '../components/FetchUsers';
import { Layout } from '../components/Layout';
import { Spinner } from '../components/Spinner';

const AutoBatch: NextPage = () => {
  return (
    <Layout>
      <Suspense fallback={<Spinner />}>
        <Heading as="h1">Suspense Demo</Heading>
        <Heading as="h2">Users</Heading>
        <ErrorBoundary
          fallback={
            <Alert status="error">
              <AlertIcon />
              <AlertTitle>ユーザー情報の取得が失敗しました。</AlertTitle>
              <AlertDescription>
                Your Chakra experience may be degraded.
              </AlertDescription>
            </Alert>
          }
        >
          <Suspense fallback={<Spinner />}>
            <FetchUsers />
          </Suspense>
        </ErrorBoundary>

        <Heading as="h2">Tasks</Heading>
        <ErrorBoundary
          fallback={
            <Alert status="error">
              <AlertIcon />
              <AlertTitle>タスク情報の取得が失敗しました</AlertTitle>
              <AlertDescription>
                Your Chakra experience may be degraded.
              </AlertDescription>
            </Alert>
          }
        >
          <Suspense fallback={<Spinner />}>
            <FetchTasks />
          </Suspense>
        </ErrorBoundary>

        <Heading as="h2">Comments</Heading>
        <ErrorBoundary
          fallback={
            <Alert status="error">
              <AlertIcon />
              <AlertTitle>コメント情報の取得が失敗しました</AlertTitle>
              <AlertDescription>
                Your Chakra experience may be degraded.
              </AlertDescription>
            </Alert>
          }
        >
          <Suspense fallback={<Spinner />}>
            <FetchComments />
          </Suspense>
        </ErrorBoundary>
      </Suspense>
    </Layout>
  );
};

export default AutoBatch;
