import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions';

const Buttons = ({ onIncrement, onDecrement }) => (
  <div>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
);

const mapDispatchToProps = dispatch => ({
  onIncrement: () => dispatch(increment()),
  onDecrement: () => dispatch(decrement())
});

export default connect(undefined, mapDispatchToProps)(Buttons);