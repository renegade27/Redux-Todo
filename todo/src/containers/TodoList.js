import React, {Component} from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';
import { logout, post } from '../actions/actions';



class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            todo : ''
        }
    }

    render() {
        return (
            <div className="app-wrapper">
                {/* <TodoPanel /> */}
                <p> TodoPanel </p>
                <div className="todo-list">
                    {
                    this.props.todos.map(todo => {
                        return <Todo todo={todo} />
                    })};
                </div>
            </div>
         );
    };
};

const mapStateToProps = (state) => {
    return {
        todos : state.todos
    };
};

export default connect(mapStateToProps, { logout, post })(TodoList);