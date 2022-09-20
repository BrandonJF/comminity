import { Express } from 'express';
import { Todo } from '@digitalmischief/data';

const todos: Todo[] = [{title: 'Todo 1'}, {title: 'Todo 2'}];

export function addTodoRoutes(app: Express){
    app.get('/api/todos', (req, response) => response.send(todos));
    app.post('/api/addTodo', (req, response) => {
        const newTodo : Todo = {
            title: `New Todo ${Math.floor(Math.random() * 1000)}`
        };
        todos.push(newTodo);
        response.send(newTodo)
    });
}