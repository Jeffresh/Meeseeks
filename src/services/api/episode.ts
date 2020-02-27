import { AxiosPromise } from 'axios'
import { client, Info } from './client'

export interface Episodes {
  info: Info
  results: Episode[]
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

export interface EpisodeFilter {
  name?: string
  episode?: string
}

export const getEpisodes = (
  filter: EpisodeFilter = {},
): AxiosPromise<Episodes> => client('episode', { params: filter })

export const getEpisode = (id: string | number): AxiosPromise<Episode> =>
  client(`episode/${id}`)
