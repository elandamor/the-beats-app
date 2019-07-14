import { Auth, Home, NotFound, Private } from './pages';

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
    path: '/private',
    component: Private,
  },
  {
    path: '*',
    component: NotFound,
  },
];

export default routes;
