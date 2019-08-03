import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, RouteComponentProps } from 'react-router-dom';

import { Inner, ScrollView } from '@app/components';

import { H2, Text } from '@app/typography';

// import { makeDebugger } from '@app/utils';
// const debug = makeDebugger('NotFound');

interface INotFoundProps extends RouteComponentProps {}

/**
 * @render react
 * @name NotFound page
 * @description 404 page.
 */

const NotFound = (props: INotFoundProps) => {
  return (
    <ScrollView>
      <Helmet>
        <title>Oops! The page you're looking for doesn't exist.</title>
        <meta
          name="description"
          content="The page you're looking for doesn't exist."
        />
      </Helmet>
      <Inner p={2}>
        <Link to="/dashboard">
          <H2 mb={0}>Oops!</H2>
        </Link>
        <Text>The page you're looking for doesn't exist.</Text>
      </Inner>
    </ScrollView>
  );
};

export default NotFound;
