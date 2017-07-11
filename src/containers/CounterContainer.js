import { connect } from 'react-redux';
import { Counter } from '../components';
import { getRandomColor } from '../utils';
import * as actions from '../actions';

const mapStateToProps = state => ({
  color: state.colorData.color,
  number: state.numberData.number
});

const mapDispatchToProps = dispatch => ({
  onIncrement: () => dispatch(actions.increment()),
  onDecrement: () => dispatch(actions.decrement()),
  onSetColor: () => {
    const color = getRandomColor();
    dispatch(actions.setColor(color));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);