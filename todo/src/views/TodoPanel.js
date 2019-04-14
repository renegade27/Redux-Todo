import React, {Component} from 'react';
import { post, logout} from '../actions';
import { connect } from 'react-redux';
import './TodoPanel.css';

class TodoPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formValue : ''
        }
    }

    inputHandler = e => {
        this.setState({ [e.target.name] : e.target.value});
    }

    formHandler = e => {
        e.preventDefault();
        this.props.post({
            value : this.state.formValue,
            poster : this.props.user,
            completed : false,
            key : '$'+('00000'+(Math.random()*(1<<24)|0).toString(16)).slice(-6) + '$'
        });
        this.setState({formValue : ''});
    }

    logoutHandler = e => {
        this.props.history.push('/');
        this.props.logout();
    }

    render() {
        return (
            <div className="todo-menu">
                <form onSubmit={this.formHandler}>
                    <input
                        name="formValue"
                        value={this.state.formValue}
                        onChange={this.inputHandler}
                        placeholder="Todo Text"
                    />
                    <button type="submit">Create</button>
                </form>
                <button className="logout" onClick={this.logoutHandler}> Logout </button>
                <p className="status">{`User: ${this.props.user} Todos: ${this.props.todos}`}</p>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        user : state.user,
        todos : state.todos.length
    }
}

export default connect(mapStateToProps, {post, logout})(TodoPanel);