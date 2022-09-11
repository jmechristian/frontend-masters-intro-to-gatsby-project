import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

const about = () => {
  return (
    <>
      <Layout title="About Page" description="This is the About Page.">
        <main>
          <h1>about</h1>
          <Link to="/">Home</Link>
        </main>
      </Layout>
    </>
  );
};

export default about;
