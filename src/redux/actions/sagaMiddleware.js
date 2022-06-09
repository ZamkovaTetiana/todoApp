import { takeEvery, call, put } from 'redux-saga/effects';
import { getTodosRequest } from '../../api';
import { GET_TODOS, SET_TODOS } from '../actionTypes';

function* gettingTodos() {
    const result = yield call(getTodosRequest);
    yield put({
        type: SET_TODOS,
        payload: {todos: result}
    })
}


export function* todosSaga() {
    // yield takeLatest(GET_TODOS, gettingTodos)
    yield takeEvery(GET_TODOS, gettingTodos)
}