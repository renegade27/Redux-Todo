import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import TodoList from './TodoList';
import Login from './Login';
import {login} from '../actions';
import './App.css';

class TodoApp extends Component {

    constructor() {
        super();
        this.state = {
            user : '',
            isLoggedIn : null
        }
    }

    render() {
        return (
            <>
                <Route exact path='/' render={(props) => <Login {...props} login={login}/>}/>
                <Route exact path='/todolist' render={(props) => <TodoList {...props} />} />
            </>
        );
    }

}

export default TodoApp;