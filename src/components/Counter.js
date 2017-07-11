import React from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

const Counter = ({number, color, index, onIncrement, onDecrement, onSetColor}) => (
  <div 
    className="Counter" 
    style={{backgroundColor: color}}
    onClick={() => onIncrement(index)} 
    onDoubleClick={() => onSetColor(index)}
    onContextMenu={e => { 
      e.preventDefault(); 
      onDecrement(index);
    }}>
      {number}
  </div>
);

Counter.propTypes = {
  index: PropTypes.number,
  number: PropTypes.number,
  color: PropTypes.string,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onSetColor: PropTypes.func.isRequired
};

Counter.defaultProps = {
  index: 0,
  number: 0,
  color: 'black',
  onIncrement: () => console.warn('onIncrement not defined'),
  onDecrement: () => console.warn('onDecrement not defined'),
  onSetColor: () => console.warn('onSetColor not defined')
};

export default Counter;