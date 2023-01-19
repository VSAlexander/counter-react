import { memo, PureComponent } from 'react';
import css from './Counter.module.css';

export const Controls = memo(({ onClick }) => {
  console.log('Controls');
  return (
    <div className={css.controls}>
      <button type="button" className={css.button} onClick={() => onClick(-1)}>
        -
      </button>
      <button type="button" className={css.button} onClick={() => onClick(1)}>
        +
      </button>
    </div>
  );
});

Controls.displayName = 'Controls';

// export class Controls extends PureComponent {
//   render() {
//     console.log('Controls');
//     const { onClick } = this.props;
//     return (
//       <div className={css.controls}>
//         <button type="button" className={css.button} onClick={onClick}>
//           -
//         </button>
//         <button type="button" className={css.button} onClick={onClick}>
//           +
//         </button>
//       </div>
//     );
//   }
// }

// () => onClick({ type: 'decrement', payload: 1 })
