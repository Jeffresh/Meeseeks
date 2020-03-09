import { createStore } from 'redux'
import { root as reducer } from './root'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const configureStore = () => {
  const store = createStore(reducer)

  return store
}
