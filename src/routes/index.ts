import { RouteProps } from 'react-router-dom'
import { Home, Character, Planet, Episode } from '../pages'

export const routes: RouteProps[] = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/character',
    component: Character,
    exact: true,
  },
  {
    path: '/planet',
    component: Planet,
    exact: true,
  },
  {
    path: '/episode',
    component: Episode,
    exact: true,
  },
]
