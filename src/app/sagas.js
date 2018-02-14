import connectors from '../modules/connectors'

import { fork } from 'redux-saga/effects'

function startSagas (...sagas) {
  return function * rootSaga () {
    yield sagas.map(saga => fork(saga))
  }
}

export default startSagas(
  ...connectors.sagas,
)
