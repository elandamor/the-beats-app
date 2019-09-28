import { IRouteProps } from './components/Routes';
import {
  AddAlbum,
  GetAlbum,
  GetAlbums,
  GetTracks,
  Login,
  Register,
} from './containers';
import { Auth, Dashboard, Home, NotFound } from './pages';

const routes: IRouteProps[] = [
  {
    exact: true,
    path: '/',
    component: Home,
    title: 'Home',
  },
  {
    exact: true,
    path: '/auth',
    component: Auth,
  },
  {
    exact: true,
    path: '/auth/login',
    component: Login,
    title: 'Login',
  },
  {
    exact: true,
    path: '/auth/register',
    component: Register,
    title: 'Register',
  },
  {
    exact: true,
    secure: true,
    path: '/dashboard',
    component: Dashboard,
    title: 'Dashboard',
  },
  {
    exact: true,
    secure: true,
    path: '/dashboard/albums',
    component: GetAlbums,
    title: 'Albums',
  },
  {
    exact: true,
    secure: true,
    path: '/dashboard/albums/:albumId',
    component: GetAlbum,
    title: 'Album',
  },
  {
    exact: true,
    secure: true,
    path: '/dashboard/albums/create',
    component: AddAlbum,
    title: 'New album',
  },
  {
    exact: true,
    secure: true,
    path: '/dashboard/tracks',
    component: GetTracks,
    title: 'Tracks',
  },
  {
    path: '*',
    component: NotFound,
    title: '404',
  },
];

export default routes;
