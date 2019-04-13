import React, {Component} from 'react';
import { post, logout} from '../actions';
import { connect } from 'react-redux';

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
            key : '$'+Math.floor(Math.random()*16777215).toString(12)+'$'
        });
        this.setState({formValue : ''});
    }

    logoutHandler = e => {
        this.props.history.push('/');
        this.props.logout();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.formHandler} className="todo-menu">
                    <input
                        name="formValue"
                        value={this.state.formValue}
                        onChange={this.inputHandler}
                        placeholder="Todo Text"
                    />
                    <button type="submit">Create</button>
                </form>
                <button onClick={this.logoutHandler}> Logout </button>
            </div>
        );
    }

}

export default connect(null, {post, logout})(TodoPanel);