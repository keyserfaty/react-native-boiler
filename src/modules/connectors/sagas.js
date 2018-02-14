import { call, put, takeEvery } from 'redux-saga/effects'

import * as actions from './actions'

// Workers
export function * activateConnectorWorker (action) {
  yield put({ type: actions.activateConnectorInit })

  const { type } = action.payload
  const { res, error } = yield call(connectors[type].init)

  if (error) {
    return yield put({ type: actions.activateConnectorFailure, payload: { type, error } })
  }

  yield put({ type: actions.activateConnectorSuccess, payload: { type, permissions: res } })
}

// Watchers
export function * activateConnectorWatcher () {
  yield takeEvery(actions.activateConnector, activateConnectorWorker)
}

export default [
  //activateConnectorWatcher,
]
