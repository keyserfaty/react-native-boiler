import { handleActions } from 'redux-actions'

import * as actions from './actions'

const initialState = {
  status: 'init',
  error: '',
  list: {},
}

const reducer = handleActions({
  [actions.activateConnectorInit]: (state, action) => ({
    ...state,
    status: 'pending'
  }),

    [actions.activateConnectorSuccess]: (state, action) => ({
    ...state,
    status: 'success',
    list: {
      ...state.list,
      [action.payload.type]: {
        active: true,
        permissions: action.payload.permissions
      }
    }
  }),

  [actions.activateConnectorFailure]: (state, action) => ({
    ...state,
    status: 'failure',
    error: action.payload.error,
  })


}, initialState)

export default reducer
