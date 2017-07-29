import { takeLatest } from 'redux-saga/effects'
import API from '../Services/Api'
import DownloadAPI from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'

/* ------------- Types ------------- */

import { MainListTypes } from '../Redux/MainListRedux'
import { DownloadTypes } from '../Redux/DownloadRedux'

/* ------------- Sagas ------------- */

import { getMainList } from './MainListSagas'
import { getDownload } from './DownloadSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield [
    // some sagas only receive an action
    takeLatest(MainListTypes.UPDATE_LIST, getMainList),
    takeLatest(DownloadTypes.DOWNLOAD_REQUEST, getDownload)
  ]
}
