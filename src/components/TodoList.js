import React, {Fragment} from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
import { getTodosByVisibilityFilter } from "../redux/selectors";

const TodoList = ({ todos, loading }) => (
    <Fragment>
        {loading && <div>Loading...</div>}
        <ul className="todo-list">
            {todos && todos.length
            ? todos.map((todo) => {
                return <Todo key={`todo-${todo.id}`} todo={todo} />;
                })
            : "No todos, yay!"}
        </ul>
    </Fragment>
);

const mapStateToProps = state => {
  const { visibilityFilter, todos: todosState } = state;
  const todos = getTodosByVisibilityFilter(state, visibilityFilter);
  return { todos, loading: todosState.loading };
};

export default connect(mapStateToProps)(TodoList);
