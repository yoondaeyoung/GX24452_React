/**
 * saga.js
 *
 * This file contains the Saga function used to get data from the
 * service layer. The Saga function injects data into the Redux
 * store via the put function, which takes an action as a parameter.
 *
 * @see https://redux-saga.js.org/
 * @see https://decembersoft.com/posts/changing-react-route-programmatically-with-redux-saga/
 */

import { all, call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import request from 'utils/request';

import { DISPATCH_ACTIONS } from './constants';
import { getLuckyNumberSuccess } from './actions';

export function* getLuckyNumber({ username }) {
  console.log('1. saga', username)

  // TODO: What port is the service layer running on again?
  const requestUrl = 'http://localhost:3000/lucky-number';

  console.log("2. request", request);

  const result = yield call(request, requestUrl);
  try {
  
    // TODO: Do stuff with the result
    console.log('3. result ', result);
    yield put(getLuckyNumberSuccess(result));
  } catch (err) {
    // TODO: Bonus points for some error handling
  }
}


export default function* sagaFunction() {
  yield all ([
    takeEvery(DISPATCH_ACTIONS.GET_LUCKY_NUMBER, getLuckyNumber)   
    ]);
}
