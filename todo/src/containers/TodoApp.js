import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import TodoList from './TodoList';
import Login from './Login';
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
                <Route exact path='/login' component={Login}/>
                <Route path='/' component={TodoList}/>
            </>
        );
    }

}

export default TodoApp;