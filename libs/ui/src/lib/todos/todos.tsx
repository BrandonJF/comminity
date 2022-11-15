import React, { useState } from 'react';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from '../../../../redux/store/src/counterSlice';
import { useAppSelector, useAppDispatch } from '../../../../redux/store/src/hooks';

import { Todo } from '@digitalmischief/data';
import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface TodosProps {
  todos: Todo[]
}

const StyledTodos = styled.div`
  color: pink;
`;

export function Todos(props: TodosProps) {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;
  console.log("blessed")
  console.log(props)
  return (
    <StyledTodos>
       <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      <h1>Welcome to Todos!</h1>
      <ul>{props.todos.map( t => (
        <li className={'todo'} key={t.title}>
          {t.title}
        </li>
      ))}</ul>
    </StyledTodos>
  );
}

export default Todos;
