import React from 'react';
import { connect } from 'react-redux';
import { getRandomColor } from './utils';
import { Buttons } from './components';
import { CounterListContainer } from './containers';
import * as actions from './modules';

const App = ({ onCreate, onRemove }) => (
  <div className="App">
    <Buttons onCreate={onCreate} onRemove={onRemove}/>
    <CounterListContainer/>
  </div>
);

const mapDispatchToProps = dispatch => ({
  onCreate: () => dispatch(actions.create(getRandomColor())),
  onRemove: index => dispatch(actions.remove(index))
});

export default connect(null, mapDispatchToProps)(App);