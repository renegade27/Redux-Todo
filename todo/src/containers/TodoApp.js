import React, {Component} from 'react';
import {Route} from 'react-router-dom';
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
                <p>hi</p>
                {/* <Route exact path='/login' component={Login}/>
                <Route path='/' component={TodoList}/> */}
            </>
        );
    }

}

export default TodoApp;