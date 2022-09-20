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
  return (
    <StyledTodos>
      <h1>Welcome to Todos!</h1>
      <ul>{props.todos.map((t)=> (
        <li className={'todo'} key={t.title}>
          {t.title}
        </li>
      ))}</ul>
    </StyledTodos>
  );
}

export default Todos;
