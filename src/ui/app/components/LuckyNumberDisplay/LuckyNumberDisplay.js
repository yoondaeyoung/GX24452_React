/**
 * LuckyNumberDisplay.js
 *
 * This component displays the user's full name and their lucky number!
 * Its props are passed down from the LuckyNumber container.
 */

import React from 'react';
import PropTypes from 'prop-types';

class LuckyNumberDisplay extends React.PureComponent {
  render() {
    // TODO: Receive props passed down from LuckyNumber container
    // ex) same as 
    // const luckyNumber = this.props.luckyNumber;
    const { luckyNumber, userName } = this.props;
	console.log("LuckyNumberDisplay luckyNumber=" + luckyNumber + ", userName=" + userName);
    return (
      <div className="mt5 pa4 center w-25 bg-light-gray">
        userName is {userName}
        <br />
        luckyNumber is {luckyNumber}
      </div>
    );
  }
}

// TODO: Add PropTypes
LuckyNumberDisplay.propTypes = {

};

export default LuckyNumberDisplay;
