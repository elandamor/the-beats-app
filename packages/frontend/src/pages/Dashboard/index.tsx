import React from 'react';
import { Helmet } from 'react-helmet';
import { RouteComponentProps } from 'react-router-dom';

import { Inner, Page } from '@app/components';
import { H4 } from '@app/typography';
import { GetAlbums } from '@app/containers';

// import { makeDebugger } from '@app/utils';
// const debug = makeDebugger('Dashboard');

interface IDashboardProps extends RouteComponentProps {}

/**
 * @render react
 * @name Dashboard page
 * @description Dashboard page.
 */

const Dashboard = (props: IDashboardProps) => {
  return (
    <Page>
      <Helmet>
        <title>Dashboard</title>
        <meta
          name="description"
          content="The page requires a user to be authenticated to view."
        />
      </Helmet>
      <Inner p={2}>
        <H4 mb="2">Albums</H4>
        <GetAlbums />
      </Inner>
    </Page>
  );
};

export default Dashboard;
