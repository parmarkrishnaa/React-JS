import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../features/userSlice";

const SignUp = () => {

    const [user, setUser] = useState({});
    const {editData, editID} = useSelector((state) => state.users)
    const dispatch = useDispatch();

    useEffect(() => {
      if(editID){
        setUser(() => editData);
      }
    }, [editData, editID])

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUser({...user,[name]:value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(addUser(user));
        setUser({})
    }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2>Sign Up</h2>
          <form method="post" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                value={user.username || ''}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={user.email || ''}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="text"
                name="password"
                id="password"
                value={user.password || ''}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-outline-success float-end">Submit</button>
            <button type="reset" className="btn btn-outline-secondary float-end me-2">Reset</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;