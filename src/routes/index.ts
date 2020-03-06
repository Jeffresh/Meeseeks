import { RouteProps } from 'react-router-dom'
import { Character, Episode, Home, Planet } from '../pages'

interface Route extends RouteProps {
  name: string
}

const createRoutes = <T>(
  routes: Record<keyof T, Route>,
): Record<keyof T, Route> => routes

export const routes = createRoutes({
  home: {
    name: 'Home',
    path: '/',
    component: Home,
    exact: true,
  },
  character: {
    name: 'Character',
    path: '/character',
    component: Character,
    exact: true,
  },
  planet: {
    name: 'Planet',
    path: '/planet',
    component: Planet,
    exact: true,
  },
  episode: {
    name: 'Episode',
    path: '/episode',
    component: Episode,
    exact: true,
  },
})
