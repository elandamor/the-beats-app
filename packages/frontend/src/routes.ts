import { Auth, Home, NotFound, Dashboard } from './pages';

import { IRouteProps } from './components/Routes';

const routes: IRouteProps[] = [
  {
    exact: true,
    path: '/',
    component: Home,
  },
  {
    path: '/auth',
    component: Auth,
  },
  {
    secure: true,
    path: '/dashboard',
    component: Dashboard,
  },
  {
    path: '*',
    component: NotFound,
  },
];

export default routes;
