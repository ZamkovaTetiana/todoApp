import { getTodosRequest } from "../../api";
import { ADD_TODO, SET_TODOS, TOGGLE_TODO, SET_FILTER, GET_TODOS } from "../actionTypes";
import { v4 as uuidv4 } from 'uuid';

export const addTodo = content => ({
  type: ADD_TODO,
  payload: {
    id: uuidv4(),
    content
  }
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: { id }
});

export const setFilter = filter => ({ 
    type: SET_FILTER, 
    payload: { filter } 
});


export const getTodos = () => ({ 
    type: GET_TODOS,
});

// Async actions

// export const getTodos = () => getTodosRequest().then((todos) => ({ 
//     type: SET_TODOS, 
//     payload: { todos } 
// }));

// export const getTodos = async() => {
//     const todos = await getTodosRequest();
//     return ({ 
//         type: SET_TODOS, 
//         payload: { todos } 
//     })
// }
