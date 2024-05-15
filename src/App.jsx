import { useRef } from "react";
import { useSelector } from "react-redux";
import { addTodo, removeTodo, changeStateTodo } from "./todoSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todosState);

  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Math.random(),
      text: inputRef.current.value,
      completed: false
    };
    dispatch(addTodo(newTodo));

    inputRef.current.value = "";
  };

  console.log(todos);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Text:</span>
          <input type="text" ref={inputRef} />
        </label>
        <button>Submit</button>
      </form>

      <ul>
        {todos.map((item) => {
          return (
            <li key={item.id} style={{ opacity: item.completed ? "0.5" : "1" }}>
              <h4>{item.text}</h4>
              <button onClick={() => dispatch(removeTodo(item.id))}>Delete</button>
              <button onClick={() => dispatch(changeStateTodo(item.id))}>
                Done
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
