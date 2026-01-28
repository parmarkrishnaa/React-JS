import React from "react";
import { useNavigate } from "react-router";

const AddEmp = () => {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/view-employees');
    }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1>Add Employee</h1>
          <form method="post">
            <div className="mb-3">
              <label htmlFor="emp_id" className="form-label">
                Employee Id
              </label>
              <input type="text" className="form-control" id="emp_id" />
            </div>
            <div className="mb-3">
              <label htmlFor="emp_name" className="form-label">
                Employee Name
              </label>
              <input type="text" className="form-control" id="emp_name" />
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Add Employee</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEmp;
