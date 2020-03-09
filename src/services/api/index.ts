import axios, { AxiosPromise } from 'axios'

const api = axios.create({
  method: 'get',
  baseURL: 'https://rickandmortyapi.com/api/',
  timeout: 5000,
})

export interface Info {
  count: number
  pages: number
  next: string
  prev: string
}

export interface ResultInfo<T> {
  info: Info
  results: T[]
}

export interface Character {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: Origin
  location: {
    name: string
    url: string
  }
  image: string
  episode: string[]
  url: string
  created: string
}

export interface Origin {
  name: string
  url: string
}

export interface Episode {
  id: number
  name: string
  air_date: string
  episode: string
  characters: string[]
  url: string
  created: string
}

export interface Location {
  id: number
  name: string
  type: string
  dimension: string
  residents: string[]
  url: string
  created: string
}

export interface CharacterFilter {
  name?: string
  status?: 'alive' | 'dead' | 'unknown'
  species?: string
  type?: string
  gender?: 'female' | 'male' | 'genderless' | 'unknown'
}

export interface LocationFilter {
  name?: string
  type?: string
  dimension?: string
}

export interface EpisodeFilter {
  name?: string
  episode?: string
}

type Filter<E> = E extends Character
  ? CharacterFilter
  : E extends Location
  ? LocationFilter
  : EpisodeFilter

type EndPointReturn<E extends Character | Location | Episode> = {
  (params: string | number): AxiosPromise<E>
  (params: string[] | number[]): AxiosPromise<E[]>
  (params?: Filter<E>): AxiosPromise<ResultInfo<E>>
}

export type GetParams<T extends {} = {}> =
  | string
  | number
  | string[]
  | number[]
  | T
  | undefined

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const get = (
  endpoint: 'character' | 'location' | 'episode',
  args: GetParams,
) =>
  typeof args === 'number' || typeof args === 'string' || Array.isArray(args)
    ? api(`${endpoint}/${args}`)
    : api(endpoint, { params: args })

export const getCharacter: EndPointReturn<Character> = (args: GetParams) =>
  get('character', args)

export const getEpisode: EndPointReturn<Episode> = (args: GetParams) =>
  get('episode', args)

export const getLocation: EndPointReturn<Location> = (args: GetParams) =>
  get('location', args)
