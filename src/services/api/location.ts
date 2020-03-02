import { AxiosPromise } from 'axios'
import { client, Info } from './client'

export interface Locations {
  info: Info
  results: Location[]
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

export interface LocationFilter {
  name?: string
  type?: string
  dimension?: string
}

export const getLocations = (
  filter: LocationFilter = {},
): AxiosPromise<Locations> => client('location', { params: filter })

export const getLocation = (id: string | number): AxiosPromise<Location> =>
  client(`location/${id}`)
