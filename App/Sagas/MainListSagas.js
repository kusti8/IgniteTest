/* ***********************************************************
* A short word on how to use this automagically generated file.
* We're often asked in the ignite gitter channel how to connect
* to a to a third party api, so we thought we'd demonstrate - but
* you should know you can use sagas for other flow control too.
*
* Other points:
*  - You'll need to add this saga to sagas/index.js
*  - This template uses the api declared in sagas/index.js, so
*    you'll need to define a constant in that file.
*************************************************************/

import { call, put } from 'redux-saga/effects'
import MainListActions from '../Redux/MainListRedux'
import {AsyncStorage} from 'react-native'

export function * getMainList (action) {
  const response = yield call(AsyncStorage.getItem, 'videos')
  const final = JSON.parse(response)
  
  yield put(MainListActions.updateFinished(final))
  yield put(MainListActions.endLoading())
}