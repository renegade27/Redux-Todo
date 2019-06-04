import React, {Component} from 'react';
import './TodoList.css';
import Todo from './Todo';
import TodoPanel from './TodoPanel';
import { connect } from 'react-redux';
import { logout, post, remove } from '../actions';



class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo : ''
        }
    }

    removeHandler = (key) => {
        let arr = this.props.todos.filter( todo => {
            return todo.key !== key
        });
        this.props.remove(arr);
    }

    render() {
        return (
            <div className="app-wrapper">
                <TodoPanel {...this.props}/>
                <div className="todo-list">
                    {
                    this.props.todos.map(todo => {
                        return <Todo todo={todo} removeHelper={this.removeHandler}/>
                    })}
                </div>
            </div>
         );
    };
};

const mapStateToProps = (state) => {
    return {
        user : state.user,
        todos : state.todos
    };
};

export default connect(mapStateToProps, { logout, post, remove })(TodoList);