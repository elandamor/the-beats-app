import { IRouteProps } from './components/Routes';
import {
  AddAlbum,
  GetAlbum,
  GetAlbums,
  GetArtists,
  GetPlaylists,
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
    isSubRoute: true,
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
    exact: true,
    secure: true,
    path: '/dashboard/artists',
    component: GetArtists,
    title: 'Artists',
  },
  {
    exact: true,
    secure: true,
    path: '/dashboard/playlists',
    component: GetPlaylists,
    title: 'Playlists',
  },
  {
    path: '*',
    component: NotFound,
    title: '404',
  },
];

export default routes;
