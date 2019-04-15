/**
 * actions.js
 *
 * This file contains the various actions used by Redux.
 */

import { DISPATCH_ACTIONS } from './constants';

export function getLuckyNumber(username) {
  console.log("lucky number aciton payload =>",  username);
  return {
    type: DISPATCH_ACTIONS.GET_LUCKY_NUMBER,
    username
  };
}

// TODO: Add more actions if needed
export function getLuckyNumberSuccess(response) {
  console.log("lucky number success response =>", response);
  return {
    type: DISPATCH_ACTIONS.GET_LUCKY_NUMBER_SUCCESS,
    response
  };
}


