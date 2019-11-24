import { Card, Inner } from '@app/components';
import { IRouteProps } from '@app/components/Routes';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, RouteComponentProps } from 'react-router-dom';

// import { makeDebugger } from '@app/utils';
// const debug = makeDebugger('Dashboard');

interface IDashboardProps extends RouteComponentProps {
  routes?: IRouteProps[];
}

/**
 * @render react
 * @name Dashboard page
 * @description Dashboard page.
 */

const Dashboard = (props: IDashboardProps) => {
  const { match } = props;

  return (
    <Inner p={2}>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <Link to={`${match.url}/albums`}>
        <Card title="Albums" mb="2" />
      </Link>
      <Link to={`${match.url}/artists`}>
        <Card title="Artists" mb="2" />
      </Link>
      <Link to={`${match.url}/playlists`}>
        <Card title="Playlists" mb="2" />
      </Link>
      <Link to={`${match.url}/tracks`}>
        <Card title="Tracks" mb="2" />
      </Link>
    </Inner>
  );
};

export default Dashboard;
