import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEmp, editEmp, deleteEmp } from "./features/ems/employeeSlice";

const App = () => {
  const { employee } = useSelector((state) => state.employee);
  const [emp, setEmp] = useState({
    empID: "",
    empName: "",
    empDept: "",
    empSalary: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmp({ ...emp, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addEmp(emp));
    setEmp({});

  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1>Management System</h1>
          <form method="post" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="empId" className="form-label">
                Employee ID
              </label>
              <input
                type="number"
                className="form-control"
                id="empID"
                name="empID"
                value={employee.empID}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="empName" className="form-label">
                Employee Name
              </label>
              <input
                type="text"
                className="form-control"
                id="empName"
                name="empName"
                value={employee.empName}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="empDept" className="form-label">
                Employee Department
              </label>
              <input
                type="text"
                className="form-control"
                id="empDept"
                name="empDept"
                value={employee.empDept}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="empSalary" className="form-label">
                Employee Salary
              </label>
              <input
                type="number"
                className="form-control"
                id="empSalary"
                name="empSalary"
                value={employee.empSalary}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary" onSubmit={handleSubmit}>Submit</button>
          </form>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-9">
          <h2>Employee List</h2>
          <div className="table">
            <table
              className="table-dark table-striped table-bordered table-hover table-responsive text-center"
              cellPadding="10"
            >
              <thead>
                <tr>
                  <th>#</th>
                  <th>Employee ID</th>
                  <th>Employee Name</th>
                  <th>Employee Department</th>
                  <th>Employee Salary</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {employee.length > 0 ? (
                  employee.map((emp, index) => {
                    const { empID, empName, empDept, empSalary, id } = emp;

                    return (
                      <tr key={id}>
                        <td>{index + 1}</td>
                        <td>{empID}</td>
                        <td>{empName}</td>
                        <td>{empDept}</td>
                        <td>{empSalary}</td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-warning me-2"
                            onClick={() => dispatch(editEmp(id))}
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => dispatch(deleteEmp(id))}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td className="text-center" colSpan={6}>
                      Data not found!
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
