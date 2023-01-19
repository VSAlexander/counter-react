import { useCallback, useReducer, useState } from 'react';
import { Controls } from './Controls';
import css from './Counter.module.css';

const countReducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + action.payload };
    case 'decrement':
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

export function Counter() {
  const [counter, setCounter] = useState(0);

  // const [state, dispatch] = useReducer(countReducer, {
  //   count: 0,
  // });

  console.log('Counter');

  // const handleClick = () => {
  //   setCounter(prev => prev + 1);
  // };

  const handleClick = useCallback(value => {
    setCounter(prev => prev + value);
  }, []);

  return (
    <div className={css.counterWrapper}>
      <div className={css.display}>
        <h2 className={css.title}>Counter</h2>
        <p className={css.count}>{counter}</p>
      </div>
      {/* <div className={css.controls}>
        <button type="button" className={css.button} onClick={() => dispatch({ type: 'decrement', payload: 1 })}>
          -
        </button>
        <button type="button" className={css.button} onClick={() => dispatch({ type: 'increment', payload: 1 })}>
          +
        </button>
      </div> */}
      <Controls onClick={handleClick} />
    </div>
  );
}
