import { Auth, Home, NotFound, Dashboard } from './pages';
import {
  GetAlbums,
  GetPlaylists,
  Login,
  Register,
  AddAlbum,
} from './containers';

import { IRouteProps } from './components/Routes';

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
    routes: [
      {
        path: '/auth/login',
        component: Login,
        title: 'Login',
      },
      {
        path: '/auth/register',
        component: Register,
        title: 'Register',
      },
    ],
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
        routes: [
          {
            path: '/dashboard/albums/create',
            component: AddAlbum,
            title: 'New album',
          },
        ],
      },
      {
        path: '/dashboard/playlists',
        component: GetPlaylists,
        title: 'Playlists',
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
