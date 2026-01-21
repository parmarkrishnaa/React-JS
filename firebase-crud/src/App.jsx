import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTodo, deleteTodo, editTodo, getAllTodo } from "./features/todo/thunk.js";

const App = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState({});
  const { todos, loading, error } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(getAllTodo());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    todo.id ? dispatch(updateTodo(todo)) : dispatch(createTodo(todo));
    setTodo({});
  };

  if (loading)
    return (
      <div className="bg-gray-400 flex justify-center items-center h-screen">
        <h2>Loading....</h2>
      </div>
    );

  if (error)
    return (
      <div className="bg-red-400 flex justify-center items-center h-screen">
        <h2>{error}</h2>
      </div>
    );

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form method="post" onSubmit={handleSubmit}>
            <h3>Todo App</h3>
            <div className="mb-3">
              <label htmlFor="task" className="form-label">
                Task Name
              </label>
              <input
                type="text"
                name="task"
                value={todo.text || ""}
                onChange={(e) => setTodo({ ...todo, text: e.target.value })}
                id="task"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="taskDesc" className="form-label">
                Task Description
              </label>
              <input
                type="text"
                name="taskDesc"
                value={todo.taskDesc || ""}
                onChange={(e) => setTodo({ ...todo, text: e.target.value })}
                id="taskDesc"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="taskTime" className="form-label">
                Task Duration
              </label>
              <input
                type="date"
                name="taskTime"
                value={todo.taskTime || ""}
                onChange={(e) => setTodo({ ...todo, text: e.target.value })}
                id="taskTime"
                className="form-control"
              />
            </div>
            <div className="mb-2">
              <div className="float-end">
                <button type="reset" className="btn btn-secondary">
                  Reset
                </button>
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="table">
          <table className="table-responsive table-bordered table-dark table-hover table-striped caption-top text-center">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Description</th>
                <th>Duration</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {todos.length > 0 ? (
                todos.map((value, index) => {
                  return (
                    <tr key={id}>
                      <td>{index + 1}</td>
                      <td>{value.task}</td>
                      <td>{value.taskDesc}</td>
                      <td>{value.taskTime}</td>
                      <td>
                        <button className="btn btn-warning" onClick={() => dispatch(editTodo())}>Edit</button>
                        <button className="btn btn-danger" onClick={() => dispatch(deleteTodo())}>Delete</button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td className="text-center" colSpan={5}>
                    Data not found!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default App;
