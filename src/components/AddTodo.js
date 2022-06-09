import React, {useRef} from "react";
import { connect } from "react-redux";

// Saga getTodos Action
import { addTodo, getTodos } from "../redux/actions";

// Thunk getTodos Action
// import { getTodos } from "../redux/actions/thunkActions";

const AddTodo = ({addTodo, getTodos}) => {
  const inputRef = useRef(null);

  const handleAddTodo = () => {
    addTodo(inputRef.current.value);
    inputRef.current.value = '';
  };

  return (
    <div>
      <input ref={inputRef} />
      <button className="add-todo" onClick={handleAddTodo}>
        Add Todo
      </button>
      <button className="add-todo" onClick={getTodos}>
        Get Todo
      </button>
    </div>
  );
}

export default connect(
  null,
  { addTodo, getTodos }
)(AddTodo);
