import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "./rtk/todoSlice";
import { Link } from "react-router-dom";

function Homepage() {
  const [value, setValue] = useState("");
  const [lists, setLists] = useState([]);
  const todos = useSelector((state) => state.todoState.todos);
  const dispatch = useDispatch();
  function handleAddTodo() {
    // setLists([...lists, value]);
    dispatch(addTodo(value));
    setValue("");
  }

  function handleDelete(id) {
    // setLists(lists.filter((item) => item !== id));
    dispatch(deleteTodo(id));
  }

  async function fetchTodos() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    const filteredData = data.filter((item) => item.userId < 2);
    console.log(data);
    setLists(filteredData);
  }
  return (
    <>
      <h1>To-Do-List</h1>
      <h3>Add something to the list:</h3>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add to list</button>
      <button onClick={fetchTodos}>Fetch a list</button>
      <Link to="/about">Go to About Page</Link>
      <div className="">
        {todos.map((list, index) => {
          return (
            <div className="" key={index}>
              <h3>{list}</h3>
              <button onClick={() => handleDelete(list)}>delete</button>
            </div>
          );
        })}
        {lists.map((list) => {
          {
            // list.userId && (
            return (
              <div className="" key={list.id}>
                <h3>{list.title}</h3>
                <button onClick={() => handleDelete(list.id)}>delete</button>
              </div>
            );
            // );
          }
        })}
      </div>
    </>
  );
}

export default Homepage;
