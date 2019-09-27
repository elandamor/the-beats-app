import { Card, Inner, Routes, ScrollView, Totaliser } from '@app/components';
import { IRouteProps } from '@app/components/Routes';
import theme from '@app/theme';
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

  const series = [
    {
      amount: 4,
      color: theme.colors.intent.danger,
    },
    {
      amount: 10,
      color: theme.colors.intent.warning,
    },
    {
      amount: 12.5,
      color: theme.colors.intent.info,
    },
    {
      amount: 0,
      color: theme.colors.white,
    },
  ];

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
      <Totaliser series={series} size={400} />
    </ScrollView>
  );
};

export default Dashboard;
