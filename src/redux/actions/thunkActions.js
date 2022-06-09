import { getTodosRequest } from "../../api";
import { GET_TODOS, SET_TODOS } from "../actionTypes";

export const getTodos = () => async(dispatch) => {
    dispatch ({
        type: GET_TODOS,
    })
    const result = await getTodosRequest();
    dispatch ({
        type: SET_TODOS,
        payload: {todos: result}
    })
}