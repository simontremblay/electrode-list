import { Map } from 'immutable';
/* eslint-disable func-style */

export function setState(state) {
  return {
    type: 'SET_STATE',
    state
  };
}

export function resetState() {
  return {
    type: 'RESET_STATE',
    state: new Map()
  };
}
