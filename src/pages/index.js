import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

const IndexPage = () => {
  return (
    <Layout>
      <div>
        <h1>Hello World</h1>
        <Link to="/about">About</Link>
      </div>
    </Layout>
  );
};

export default IndexPage;
