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
import DownloadActions from '../Redux/DownloadRedux'
import MainListActions from '../Redux/MainListRedux'
import {download} from '../Services/DownloadApi'

export function * getDownload (action) {
  try{
  const { url } = action
  // make the call to the api
  const response = yield call(download, url)
  // success?
  if (response.err == undefined) {
    // You might need to change the response here - do this with a 'transform',
    // located in ../Transforms/. Otherwise, just pass the data back from the api.
    yield put(DownloadActions.downloadSuccess(response))
    yield put(MainListActions.addVideo(response))
  } else {
    yield put(DownloadActions.downloadFailure())
  }
  } catch (e) {
    console.log(e)
  }
}
