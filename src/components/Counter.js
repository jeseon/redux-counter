import React from 'react';
import { connect } from 'react-redux';

const Counter = ({ value }) => (
  <h1>VALUE: { value }</h1>
);

const mapStateToProps = state => ({
  value: state.counter.value
});

export default connect(mapStateToProps)(Counter);