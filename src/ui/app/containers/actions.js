/**
 * actions.js
 *
 * This file contains the various actions used by Redux.
 */

import { DISPATCH_ACTIONS } from './constants';

export function getLuckyNumber(userName) {
  console.log("lucky number aciton payload =>",  userName);
  return {
    type: DISPATCH_ACTIONS.GET_LUCKY_NUMBER,
    userName
  };
}

// TODO: Add more actions if needed
export function getLuckyNumberSuccess(luckyNumber,userName) {
  console.log("lucky number success response for username =>" + userName + ", luckcyNumber=" +  luckyNumber);
  return {
    type: DISPATCH_ACTIONS.GET_LUCKY_NUMBER_SUCCESS,
    luckyNumber,
    userName
  };
}


