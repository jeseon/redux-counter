import React from 'react';
import { INCREMENT } from './actions';

/*
 * Action
 */
const increase = num => ({
  type: INCREMENT,
  addBy: num
});

export default class App extends React.Component {
  onClick = () => {
    this.props.store.dispatch(increase(1));
  }

  render() {
    const centerStyle = {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      WebkitUserSelect: 'none',
      MozUserSelect: 'none',
      MsUserSelect:'none',
      userSelect: 'none',
      cursor: 'pointer'
    };

    return (
      <div onClick={this.onClick} style={centerStyle}>
        <h1>{this.props.store.getState().value}</h1>
      </div>
    );
  }
}