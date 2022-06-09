import { ADD_TODO, TOGGLE_TODO, SET_FILTER, SET_TODOS, GET_TODOS } from "../actionTypes";
import { v4 as uuidv4 } from 'uuid';
import { getTodosRequest } from "../../api";

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
    type: GET_TODOS
})

