import React, { useEffect, useState } from 'react';
import { Todo } from '@digitalmischief/data';
import { MainHero, Todos } from '@digitalmischief/ui';
import Button from '@mui/material/Button';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import Item from '@mui/material/Unstable_Grid2'; // Grid version 2

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import TopAppBar from 'libs/ui/src/lib/top-app-bar/top-app-bar';
import { CssBaseline } from '@mui/material';


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
  <CssBaseline/>
      <Grid2 container spacing={1}>

  <Grid2 xs={12}>
    <TopAppBar/>
  </Grid2>
  <Grid2 xs={12}>
    <MainHero/>
  </Grid2>
  <Grid2 xs={8}>
    <Item>   <Todos todos={todos}></Todos>
<Button  id={'add-todo'} onClick={addTodo} variant="contained">Add Todo</Button></Item>
  </Grid2>
</Grid2>
</>

    
  );
};

export default App;
