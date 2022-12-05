import React from 'react';
import { useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { reducer } from '../assets/reducer/reducer';
import { arrListProblem } from '../assets/textListProblem/text';
import { saveTest } from '../storeRedux/reducer/userReducer';
import styles from '../styles/Test.module.css';
import { TestRadio } from './TestRadio/TestRadio';

const Test = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.user);
  const [userData] = user;
  const { isTable } = useSelector(state => state.isTable);

  const [stateProblem, dispatchRadio] = useReducer(reducer, {
    data: arrListProblem,
    results: [...new Array(5)],
  });

  const isArr = stateProblem.results.every(n => !!n);

  const handler = (e) => {
    const { target } = e;
    dispatchRadio({
      type: 'setAnswer',
      obj: { id: target.id, answerCurrent: target.value },
    });
  };

  const onSetResults = (e) => {
    e.preventDefault();
    if (isArr) {
      dispatch(saveTest(userData._id, stateProblem.results))
    }
  };

  if (isTable) {
    return <Navigate to='/report' />
  }

  if (!user.length) {
    return <Navigate to='/registration' />
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
          onClick={onSetResults}
        >
          Oтправить
        </button>
      </div>
    </div>
  );
};

export default Test;






