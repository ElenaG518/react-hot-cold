import React from 'react';
import {connect} from 'react-redux';
import {auralUpdate} from '../actions';


export function AuralStatus(props) {

  const guessCount = props.guesses.length;

  const pluralize = guessCount !== 1;
  let  auralStatus = `Here's the status of the game right now: ${props.feedback} You've made ${guessCount} ${pluralize ? 'guesses' : 'guess'}.`;

  if (guessCount > 0) {
    auralStatus += ` ${pluralize ? 'In order of most- to least-recent, they are' : 'It was'}: ${props.guesses.reverse().join(', ')}`;
  }

  props.dispatch(auralUpdate(auralStatus));

  return (
    <p
      id="status-readout"
      className="visuallyhidden"
      aria-live="assertive"
      aria-atomic="true"
    >
      {props.auralStatus}
    </p>
  );
}

const mapStateToProps = state => ({
  guesses: state.guesses,
  feedback: state.feedback,
  auralStatus: state.auralStatus

});

export default connect(mapStateToProps)(AuralStatus)


