import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router} from 'react-router-dom';
import reducer from './reducer';
import TodoApp from './views/TodoApp';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <TodoApp />
        </Router>
    </Provider>,
    document.getElementById('root')
);
