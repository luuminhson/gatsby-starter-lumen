// @flow
import React from 'react';
import Layout from '../components/Layout';
import Page from '../components/Page';
import { useSiteMetadata } from '../hooks';

const NotFoundTemplate = () => {
  const { title, subtitle, darkNavigation: dark } = useSiteMetadata();

  return (
    <Layout title={`Not Found - ${title}`} description={subtitle} dark={dark}>
      <Page title="NOT FOUND">
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Page>
    </Layout>
  );
};

export default NotFoundTemplate;
