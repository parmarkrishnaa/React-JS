import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser } from "./features/dataSlice";

const App = () => {
  const { data } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  // 🔴 CHANGE 1: state name change
  const [formData, setFormData] = useState({
    taskName: "",
    taskDescription: "",
  });

  // 🔴 CHANGE 2: handleChange fix
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addUser(formData));

    // 🔴 reset form
    setFormData({
      taskName: "",
      taskDescription: "",
    });
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <h2>To-Do List</h2>

            <div className="mb-3">
              <label className="form-label">Task Name</label>
              <input
                type="text"
                name="taskName"
                value={formData.taskName || ''}
                onChange={handleChange}
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Task Description</label>
              <textarea
                className="form-control"
                name="taskDescription"
                value={formData.taskDescription || ''}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="row justify-content-center mt-4">
        <div className="col-md-6">
          <h2>Task List</h2>
          <table className="table table-dark table-bordered table-striped table-hover text-center">
            <thead>
              <tr>
                <th>#</th>
                <th>Task Name</th>
                <th>Task Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                data.map((value, index) => (
                  <tr key={value.id}>
                    <td>{index + 1}</td>
                    <td>{value.taskName}</td>
                    <td>{value.taskDescription}</td>
                    <td>
                      <button
                        className="btn btn-warning me-2"
                        onClick={() => dispatch(editUser(value.id))}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => dispatch(deleteUser(value.id))}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center">
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