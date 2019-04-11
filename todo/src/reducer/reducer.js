import { POST, LOGIN, LOGOUT } from '../actions/actions';

const initState = {
    user : '',
    isLoggedIn : '',
    todos : [ ]
}

export default (state=initState, action) => {
    let prevState = state;
    switch(action.type) {
        case POST:
            return { 
                user : prevState.user,
                isLoggedIn : prevState.isLoggedIn,
                todos : [ ...state.todos, action.payload]
            };
        case LOGIN:
            return {
                user : action.payload,
                isLoggedIn : true,
                todos : prevState.todos
            };
        case LOGOUT:
            return {
                user : '',
                isLoggedIn : action.payload,
                todos : prevState.todos
            };
        default: 
            return prevState;
    }   
};