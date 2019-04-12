export const POST = 'POST';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const REMOVE = 'REMOVE';

export const post = newTodo => {
    return {
        type : POST,
        payload : newTodo
    }
}

export const login = user => {
    return {
        type : LOGIN,
        payload : user
    }
}

export const logout = () => {
    return {
        type : LOGOUT,
        payload : false
    }
}

export const remove = item => {
    return {
        type : REMOVE,
        payload : item.key
    }
}