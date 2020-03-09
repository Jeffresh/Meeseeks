/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { ActionType, createAction, createReducer, getType } from 'deox'
import { all, call, put, takeLatest } from 'redux-saga/effects'
import { Character, get, ResultInfo } from '~Api'

export const allCharacter = {
  request: createAction('FETCH_ALL_CHARACTER_REQUEST'),
  success: createAction(
    'FETCH_ALL_CHARACTER_SUCCESS',
    resolve => (result: ResultInfo<Character>) => resolve(result),
  ),
  error: createAction('CHARACTER_SEARCH_ERROR', resolve => error =>
    resolve(error),
  ),
}

export const singleCharacter = {
  request: createAction(
    'FETCH_SINGLE_CHARACTER_REQUEST',
    resolve => (id: string | number) => resolve(id),
  ),
  success: createAction(
    'FETCH_SINGLE_CHARACTER_SUCCESS',
    resolve => (result: Character) => resolve(result),
  ),
  error: createAction('FETCH_SINGLE_CHARACTER_ERROR', resolve => error =>
    resolve(error),
  ),
}

type CharacterState = {
  loading: boolean
  error: boolean
  result?: ResultInfo<Character>
}
const characterState: CharacterState = {
  loading: false,
  error: false,
}

export const characterReducer = createReducer(characterState, handleAction => [
  handleAction(allCharacter.request, state => ({ ...state, loading: true })),
  handleAction(allCharacter.success, (state, { payload }) => ({
    ...state,
    result: payload,
    loading: false,
  })),
  handleAction(allCharacter.error, state => ({
    ...state,
    loading: false,
    error: true,
  })),
])

export function* fetchAllCharacterSaga(
  _action: ActionType<typeof allCharacter.request>,
) {
  try {
    const response: ResultInfo<Character> = yield call(
      get,
      'character',
      undefined,
    )
    yield put(allCharacter.success(response))
  } catch (error) {
    yield put(allCharacter.error(error))
  }
}

export function* singleCharacterSaga({
  payload,
}: ActionType<typeof singleCharacter.request>) {
  try {
    const response: Character = yield call(get, 'character', payload)
    yield put(singleCharacter.success(response))
  } catch (error) {
    yield put(singleCharacter.error(error))
  }
}

export function* characterSaga() {
  yield all([
    takeLatest(getType(allCharacter.request), fetchAllCharacterSaga),
    takeLatest(getType(singleCharacter.request), singleCharacterSaga),
  ])
}
