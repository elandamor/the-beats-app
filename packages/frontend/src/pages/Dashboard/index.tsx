import { Card, Inner, Routes, ScrollView } from '@app/components';
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
  const { location, match, routes } = props;
  const hasSubRoutes = routes && routes.length > 0;

  return (
    <ScrollView>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      {match.isExact && (
        <Inner p={2}>
          <Link to={`${match.url}/albums`}>
            <Card title="Albums" />
          </Link>
          <Link to={`${match.url}/playlists`}>
            <Card title="Playlists" />
          </Link>
        </Inner>
      )}
      {hasSubRoutes && (
        <Routes location={location} routes={routes} subRoutes={true} />
      )}
    </ScrollView>
  );
};

export default Dashboard;
