import { connect } from 'react-redux';
import { CounterList } from '../components';
import { getRandomColor } from '../utils';
import * as actions from '../modules';

const mapStateToProps = state => ({
  counters: state.get('counters').toJS()
});

const mapDispatchToProps = dispatch => ({
  onIncrement: index => dispatch(actions.increment(index)),
  onDecrement: index => dispatch(actions.decrement(index)),
  onSetColor: index => {
    const color = getRandomColor();
    dispatch(actions.setColor({ index, color}));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterList);