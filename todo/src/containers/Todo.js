import React from 'react';
import { remove } from '../actions/actions';


const Todo = ({todo}) => {
    return (
        <div class="todo">
            <h2>{todo.value}</h2>
            <p>{todo.var}</p>
            <p>{todo.key}</p> 
        </div>
    );
}

export default Todo;