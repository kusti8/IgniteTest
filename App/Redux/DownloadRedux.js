import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  downloadRequest: ['url'],
  downloadSuccess: ['data'],
  downloadFailure: null,
  setUrl: ['text']
})

export const DownloadTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  url: null,
  fetching: false,
  data: null,
  error: false
})

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, {url}) =>
  state.merge({ fetching: true, error: false, data: null })

// successful api lookup
export const success = (state, action) => {
  const { data } = action
  return state.merge({ fetching: false, error: false, data })
}

// Something went wrong somewhere.
export const failure = state =>
  state.merge({ fetching: false, error: true, data: null })

export const setU = (state, {text}) =>
  Immutable.set(state, 'url', text)

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.DOWNLOAD_REQUEST]: request,
  [Types.DOWNLOAD_SUCCESS]: success,
  [Types.DOWNLOAD_FAILURE]: failure,
  [Types.SET_URL]: setU
})
