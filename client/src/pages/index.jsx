import Jumbotron from 'components/Jumbotron';
import Layout from 'components/Layout';

const Home = () => (
  <Layout home>
    <Jumbotron />
    <style jsx global>
      {`
        body {
          background: linear-gradient(to bottom, #ffff 50%, var(--color-secondary) 50%);
        }
      `}
    </style>
  </Layout>
);

export default Home;
