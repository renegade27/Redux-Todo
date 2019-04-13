import React from 'react';

const Todo = (props) => {
    return (
        <div className="todo">
            <h2 className="form-el">{props.todo.value}</h2>
            <p className="form-el">{props.todo.poster}</p>
            <p className="form-el">{props.todo.key}</p>
            <button className="form-el" onClick={() => { props.removeHelper(props.todo.key) }}>Remove</button>
        </div>
    );
}

export default Todo;