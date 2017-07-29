import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../Sagas/'
import {AsyncStorage} from 'react-native'
import Immutable from 'seamless-immutable'

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    nav: require('./NavigationRedux').reducer,
    list: require('./MainListRedux').reducer,
    download: require('./DownloadRedux').reducer
  })

  s = configureStore(rootReducer, rootSaga)
  return s
}
