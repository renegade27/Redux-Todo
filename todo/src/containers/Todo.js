import React from 'react';

const Todo = (props) => {
    return (
        <div className="todo">
            <h2>{props.todo.value}</h2>
            <p>{props.todo.var}</p>
            <p>{props.todo.key}</p>
            <button onClick={() => { props.removeHelper(props.todo.key) }}>Remove</button>
        </div>
    );
}

export default Todo;