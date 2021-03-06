import { createAction } from 'redux-actions'
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER'

export const increment = createAction(INCREMENT_COUNTER)
export const decrement = createAction(DECREMENT_COUNTER)

/*
// not use redux-actions
export const increment = {
  type: 'INCREMENT_COUNTER'
}
export const decrement = {
  type: 'DECREMENT_COUNTER'
}
*/