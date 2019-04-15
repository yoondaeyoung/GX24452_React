/**
 * LuckyNumber.js
 *
 * This container controls the props used to render the lucky number.
 * It fetches props from the Redux store.
 */

import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import { CONTAINER_KEY } from '../constants';
import { getLuckyNumber } from '../actions';
import { reducer } from '../reducer';

class LuckyNumber extends React.PureComponent {
  render() {
    //return <div>test</div>
    return (
      <article>
        <Helmet>
          <title>Lucky Number</title>
        </Helmet>

        <LuckyNumberDisplay {...this.props} />
      </article>
    );
  }
}

const mapStateToProps = () => ({
  // TODO: Get values from Redux store
  reducer: state.luckyNumber
});

export default connect(mapStateToProps)(LuckyNumber);
