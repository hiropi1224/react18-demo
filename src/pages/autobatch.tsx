import { NextPage } from 'next';
import { Layout } from '../components/Layout';
import { AutoBatch as AutoBatchComponent } from '../components/AutoBatch';

const AutoBatch: NextPage = () => {
  return (
    <Layout>
      <AutoBatchComponent />
    </Layout>
  );
};

export default AutoBatch;
