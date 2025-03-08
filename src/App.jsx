import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BiSave } from "react-icons/bi";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showFinised, setshowFinised] = useState(false);

  // Load todos from local storage
  useEffect(() => {
    let storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  // Save todos to local storage whenever `todos` changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Editing the Todo 
  const handleEdit = (e, id) => {
    let selectedTodo = todos.find((i) => i.id === id);
    if (!selectedTodo) return;

    setTodo(selectedTodo.todo);
    setTodos(todos.filter((item) => item.id !== id));
  };
  // Deleting the Todo 
  const handleDelete = (e, id) => {
    setTodos((prevTodos) => prevTodos.filter((item) => item.id !== id));
  };
  // To Add a new Todo
  const handleAdd = () => {
    if (todo.length > 3) {
      setTodos((prevTodos) => [
        ...prevTodos,
        { id: uuidv4(), todo, isCompleted: false },
      ]);
      setTodo("");
    }
  };
  // Update the input field value as user types
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  // Toggles the completion status of a todo
  const handleCheckbox = (e) => {
    let id = e.target.name;
    setTodos((prevTodos) =>
      prevTodos.map((item) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
      )
    );
  };
  // Toggles the display of completed todos
  const toggleFinished = () => {
    setshowFinised(!showFinised);
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col container mx-auto my-2 bg-[#ccd9e2] p-4 md:p-8 rounded-3xl min-h-[80vh] gap-4 items-center ">
        <div className="flex flex-col justify-center items-center w-full">
          <div className="addTodo w-full md:w-1/2">
            <h2 className="text-lg gap-3 my-1 md:my-2 font-extrabold">
              Add Todos
            </h2>
            <input
              onChange={handleChange}
              value={todo}
              type="text"
              placeholder="Add Todos..."
              className="w-full my-1 md:my-2 rounded-xl p-2 border border-gray-300"
            />
            <button
              onClick={handleAdd}
              disabled={todo.length <= 3}
              className="hover:bg-slate-800 p-3 py-1 text-sm font-bold text-white rounded-xl my-1 md:mx-3 bg-[#124967]"
            >
              <div className="flex justify-center items-center gap-2">
                <div>Save</div>
                <div>
                  <BiSave />
                </div>
              </div>
            </button>
          </div>

          <div className="flex gap-2 my-3">
            <input
              type="checkbox"
              onChange={toggleFinished}
              checked={showFinised}
              className="rounded-full"
            />
            <span>Show Finished</span>
          </div>

          <h2 className="text-lg font-extrabold">Your Todos</h2>
          <div className="todos w-full md:w-3/4">
            {todos.length === 0 && (
              <div className="m-5 text-center">No Todos to display</div>
            )}
            {todos.map(
              (item) =>
                (showFinised || !item.isCompleted) && (
                  <div
                    key={item.id}
                    className="todo flex flex-wrap justify-between w-full bg-white shadow-md rounded-lg p-3 my-3"
                  >
                    <input
                      type="checkbox"
                      onChange={handleCheckbox}
                      checked={item.isCompleted}
                      name={item.id}
                    />
                    <div
                      className={`flex-1 px-2 break-words overflow-wrap truncate max-w-full ${
                        item.isCompleted ? "line-through text-gray-500" : ""
                      }`}
                    >
                      {item.todo}
                    </div>
                    <div className="buttons flex gap-2">
                      <button
                        onClick={(e) => handleEdit(e, item.id)}
                        className="bg-[#124967] hover:bg-[#071d29] p-3 py-1 text-sm font-bold text-white rounded-xl"
                      >
                        <MdModeEdit />
                      </button>
                      <button
                        onClick={(e) => handleDelete(e, item.id)}
                        className="bg-[#124967] hover:bg-[#071d29] p-3 py-1 text-sm font-bold text-white rounded-xl"
                      >
                        <RiDeleteBin5Line />
                      </button>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
