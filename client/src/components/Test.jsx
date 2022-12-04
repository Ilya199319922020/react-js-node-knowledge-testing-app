import React from 'react';
import { useReducer } from 'react';
import { reducer } from '../assets/reducer/reducer';
import { arrListProblem } from '../assets/textListProblem/text';
import styles from '../styles/Test.module.css';
import { TestRadio } from './TestRadio/TestRadio';

const Test = () => {
  const [stateProblem, dispatch] = useReducer(reducer, {
    data: arrListProblem,
    results: [...new Array(5)],
  });

  const handler = (e) => {
    const { target } = e;
    dispatch({
      type: 'setAnswer',
      obj: { id: target.id, answerCurrent: target.value },
    });

  };

  console.log(stateProblem.results)

  const onSetResults = (e) => {
    e.preventDefault();

  }
  return (
    <div
      className={styles.test}
    >
      <div
        className={styles.test__block}
      >
        <h3
          className={styles.test__header}
        >
          Ответьте на следущие вопросы:
        </h3>
        <div

          className={styles.test__main}
        >
          {
            stateProblem.data.map(a => <TestRadio
              key={a.id}
              id={a.id}
              problem={a.problem}
              options={a.options}
              onChange={handler}
              type={'radio'}
            />
            )
          }
        </div>
        <button
          className={styles.test__btn}
        >
          Oтправить
        </button>
      </div>
    </div>
  );
};

export default Test;






