import React from 'react';
import { connect } from 'react-redux';
import { setDiff } from '../actions';

class Options extends React.Component {
  state = {
    value: '1'
  };

  onChangeDiff = e => {  
    if (isNaN(e.target.value)) {
      return;
    } else if (e.target.value === '') {
      this.setState({ value: '0' });
    } else {
      this.setState({ value: e.target.value });
    }
    
    this.props.onUpdateDiff(parseInt(e.target.value, 10));
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.value} onChange={this.onChangeDiff}></input>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onUpdateDiff: value => dispatch(setDiff(value))
});

export default connect(undefined, mapDispatchToProps)(Options);