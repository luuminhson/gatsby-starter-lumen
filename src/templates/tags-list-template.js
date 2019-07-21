// @flow
import React from 'react';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import Layout from '../components/Layout';
import Page from '../components/Page';
import { useSiteMetadata, useTagsList } from '../hooks';

const TagsListTemplate = () => {
  const { title, subtitle, darkNavigation: dark } = useSiteMetadata();
  const tags = useTagsList();

  return (
    <Layout title={`Tags - ${title}`} description={subtitle} dark={dark}>
      <Page title="Tags">
        <ul>
          {tags.map((tag) => (
            <li key={tag.fieldValue}>
              <Link to={`/tag/${kebabCase(tag.fieldValue)}/`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </Page>
    </Layout>
  );
};

export default TagsListTemplate;