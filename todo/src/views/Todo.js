import React from 'react';
import { connect } from 'react-redux';
import { completetoggle } from '../actions'

const Todo = (props) => {
    return (
        <div className="todo">
            <h2 className="form-el">{props.todo.value}</h2>
            <p className="form-el">{props.todo.poster}</p>
            <p className="form-el">{props.todo.key}</p>
            <p className="form-el">{(props.todo.completed ? 'Done' : 'In Progress')}</p>
            <button onClick={() => { props.completetoggle(props.todo.key) }}>{props.todo.completed ? 'Undo' : 'Complete'}</button>
            <button className="form-el" onClick={() => { props.removeHelper(props.todo.key) }}>Remove</button>
        </div>
    );
}

export default connect(null, {completetoggle})(Todo);