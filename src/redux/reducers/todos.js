import { ADD_TODO, GET_TODOS, SET_TODOS, TOGGLE_TODO } from "../actionTypes";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  allIds: [],
  byIds: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const { id, content } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
            completed: false
          }
        }
      };
    }
    case TOGGLE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            completed: !state.byIds[id].completed
          }
        }
      };
    }
    case GET_TODOS: {
        return {
            ...state,
            loading: true
          };
    }
    case SET_TODOS: {
        const { todos } = action.payload;
        let newTodos = {}
        todos.forEach(todo => newTodos = {...newTodos, [uuidv4()]: {
            content: todo,
            completed: false
        }})
        return {
            ...state,
            loading: false,
            allIds: [...state.allIds, ...Object.keys(newTodos)],
            byIds: {
              ...state.byIds,
              ...newTodos
            }
          };
    }
    default:
      return state;
  }
}
