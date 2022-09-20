import React, { useEffect, useState } from 'react';
import { Todo } from '@digitalmischief/data';
import { Todos } from '@digitalmischief/ui';

export const App = () => {
  const [todos, setTodos] = useState<Todo[]>([
    {title: 'Todo 1'},
    {title: 'Todo 2'}
  ]);

  useEffect(() => {
    fetch('/api/todos')
      .then((response) => response.json())
      .then(setTodos);
  }, []);

  function addTodo() {
    fetch('api/addTodo', {
      method: 'POST',
      body: ''
    })
    .then((_) => _.json())
    .then((newTodo) => {
      setTodos([...todos, newTodo])
    });
  }

  return (
    <>
      <h1>Todos</h1>
   <Todos todos={todos}></Todos>
      <button id={'add-todo'} onClick={addTodo}>
          Add Todo
      </button>
    </>
  );
};

export default App;
