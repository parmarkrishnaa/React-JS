import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createUser,
  updateUser,
  getAllUsers,
} from "../features/users/userSlice";

const StdDetails = () => {
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const { editData } = useSelector((state) => state.users);

  useEffect(() => {
    setUser(editData);
  }, [editData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(user));
      
      setUser({});
   
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form method="post" onSubmit={handleSubmit}>
            <div className="mb-3">
              <h2>Student Details</h2>
            </div>
            <div className="mb-3">
              <label htmlFor="stdName" className="form-label">
                Name
              </label>
              <input
                type="text"
                name="stdName"
                id="stdName"
                className="form-control"
                value={user.stdName || ""}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="stdID" className="form-label text-capitalize">
                ID
              </label>
              <input
                type="number"
                name="stdID"
                id="stdID"
                className="form-control"
                value={user.stdID || ""}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="stdClass" className="form-label text-capitalize">
                Class
              </label>
              <input
                type="text"
                name="stdClass"
                id="stdClass"
                className="form-control"
                value={user.stdClass || ""}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="stdSchool" className="form-label text-capitalize">
                School
              </label>
              <input
                type="text"
                name="stdSchool"
                id="stdSchool"
                className="form-control"
                value={user.stdSchool || ""}
                onChange={handleChange}
              />
            </div>
            {editData.id ? (
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => dispatch(updateUser(user))}
              >
                Update
              </button>
            ) : (
              <>
                <button type="reset" className="btn btn-outline-secondary me-1">
                  Reset
                </button>
                <button type="submit" className="btn btn-outline-primary">
                  Submit
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default StdDetails;
