import MenuPage from './Menu';
import SettingsPage from './Settings';

export const PATH = {
  MENU: '/menu',
  SETTINGS: '/settings',
}

export const pages = [
  {
    component: MenuPage,
    isIndex: true
  },
  {
    component: MenuPage,
    path: PATH.MENU
  },
  {
    component: SettingsPage,
    path: PATH.SETTINGS
  },
];
