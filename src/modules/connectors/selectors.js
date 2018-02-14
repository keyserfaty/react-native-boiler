import { NAMESPACE } from './constants'

export const connectors = state => state[NAMESPACE].list
export const status = state => state[NAMESPACE].status
export const error = state => state[NAMESPACE].error
