import { combineReducers } from 'redux'
import { characterReducer } from './character'

export const root = combineReducers({ characterReducer })

export type RootState = ReturnType<typeof root>
