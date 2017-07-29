import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import RNFetchBlob from 'react-native-fetch-blob'

remove_item = function(index, array) {
    return array.slice(0, index).concat(array.slice(index + 1));
};

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  updateList: null,
  updateFinished: ['data'],
  endLoading: null,
  deleteVideo: ['item'],
  addVideo: ['item'],
  watchVideo: ['uri']
})

export const MainListTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  list: [],
  loading: true,
  uri: ""
})

/* ------------- Reducers ------------- */

// request the data from an api
export const update = (state, { data }) =>
  Immutable.set(state, 'list', data)

export const loadEnd = (state) =>
  Immutable.set(state, 'loading', false)

export const del = (state, { item }) => {
  RNFetchBlob.fs.unlink(item.path)
  return Immutable.set(state, 'list', remove_item(state.list.indexOf(item), state.list))
}

export const addVid = (state, { item }) => {
  const out = Immutable.set(state, 'list', state.list.concat([item]))
  return out
}

export const setUri = (state, { uri }) =>
  Immutable.set(state, 'uri', uri)

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.UPDATE_FINISHED]: update,
  [Types.END_LOADING]: loadEnd,
  [Types.DELETE_VIDEO]: del,
  [Types.ADD_VIDEO]: addVid,
  [Types.WATCH_VIDEO]: setUri
})
