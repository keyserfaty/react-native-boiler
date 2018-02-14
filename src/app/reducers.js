import { combineReducers } from 'redux'

import AppNavigator from './AppRouter'

import connectors from '../modules/connectors'

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams())

const navReducer = (state = initialState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state)

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state
}

const rootReducer = combineReducers({
  nav: navReducer,
  [connectors.constants.NAMESPACE]: connectors.reducer,
})

export default rootReducer
