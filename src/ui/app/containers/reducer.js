/**
 * reducer.js
 *
 * This file contains the reducer used to set values in the Redux store.
 * Note that the Redux store is immutable.
 */

import { fromJS } from 'immutable';

import { DISPATCH_ACTIONS } from './constants';

// TODO: Initialize more things in the Redux store if needed
const initialState = fromJS({
  luckyNumber: -1,
  userName: "",
  loading: true
});

function reducer(state = initialState, action) {
  switch (action.type) {
    case DISPATCH_ACTIONS.GET_LUCKY_NUMBER:
      // TODO: Set things in the Redux store
      console.log("reducer get username >> ",  action.userName);
      return { userName: action.UserName }
    
    case DISPATCH_ACTIONS.GET_LUCKY_NUMBER_SUCCESS:
      // TODO: Set things in the Redux store
      console.log("reducer get luckyNumber >> ",  action.luckyNumber);
      return {
              luckyNumber: action.luckyNumber,
              userName: action.userName
            }
    default:
      return state;
  }
}

export default reducer;
