import React, {useRef} from "react";
import { connect } from "react-redux";
import { addTodo, getTodos } from "../redux/actions/actions";

const AddTodo = ({addTodo, getTodos}) => {
  const inputRef = useRef(null);

  const handleAddTodo = () => {
    addTodo(inputRef.current.value);
    inputRef.current.value = '';
  };

  return (
    <div>
      <input
        ref={inputRef}
      />
      <button className="add-todo" onClick={handleAddTodo}>
        Add Todo
      </button>
      <button className="add-todo" onClick={getTodos}>
        Get Todos
      </button>
    </div>
  );
}

export default connect(
  null,
  { addTodo, getTodos }
)(AddTodo);
