import { Auth, Home, NotFound, Dashboard } from './pages';

import { IRouteProps } from './components/Routes';
import { GetAlbums } from './containers';

const routes: IRouteProps[] = [
  {
    exact: true,
    path: '/',
    component: Home,
    title: 'Home',
  },
  {
    path: '/auth',
    component: Auth,
  },
  {
    secure: true,
    path: '/dashboard',
    component: Dashboard,
    title: 'Dashboard',
    routes: [
      {
        path: '/dashboard/albums',
        component: GetAlbums,
        title: 'Albums',
      },
    ],
  },
  {
    path: '*',
    component: NotFound,
    title: '404',
  },
];

export default routes;
