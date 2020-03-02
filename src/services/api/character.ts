import { AxiosPromise } from 'axios'
import { client, Info } from './client'

export interface Characters {
  info: Info
  results: Character[]
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

export interface CharacterFilter {
  name?: string
  status?: 'alive' | 'dead' | 'unknown'
  species?: string
  type?: string
  gender?: 'female' | 'male' | 'genderless' | 'unknown'
}

export const getCharacters = (
  filter: CharacterFilter = {},
): AxiosPromise<Characters> => client('character', { params: filter })

export const getCharacter = (id: string | number): AxiosPromise<Character> =>
  client(`character/${id}`)
