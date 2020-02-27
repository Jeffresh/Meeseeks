import axios from 'axios'

export const client = axios.create({
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
