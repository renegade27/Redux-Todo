import { POST, LOGIN, LOGOUT, REMOVE } from '../actions';

const initState = {
    user : '',
    isLoggedIn : false,
    todos : [ 
        {
            value : "test",
            poster : 'Admin',
            key : '$'+Math.floor(Math.random()*16777215).toString(12)+'$'
        },
        {
            value : "test",
            poster : 'Admin',
            key : '$'+Math.floor(Math.random()*16777215).toString(12)+'$'
        }
    ]
}

export default (prevState=initState, action) => {
    switch(action.type) {
        case POST:
            return { 
                user : prevState.user,
                isLoggedIn : prevState.isLoggedIn,
                todos : [ ...prevState.todos, action.payload]
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
        case REMOVE:
            return {
                user : '',
                isLoggedIn : prevState.isLoggedIn,
                todos : action.payload
            };
        default:
            console.log('default');
            return prevState;
    }   
};