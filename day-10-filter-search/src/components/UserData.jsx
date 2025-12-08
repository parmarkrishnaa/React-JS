import React, {useEffect, useState} from "react";

const UserData = ({ handleChange, handleSubmit, setList, list }) => {

  const [search, setSearch] = useState("");

useEffect(() => {
  let raw = localStorage.getItem("userData");
  let saveData = JSON.parse(raw) || [];
  setList(saveData);
}, []);

useEffect(() => {
  console.log(list);
  
  localStorage.setItem("userData", JSON.stringify(list || []));
}, [list]);
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form method="post" onSubmit={handleSubmit}>
            <h2>Login Form</h2>
            <div className="mb-3">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                className="form-control"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Login
            </button>
          </form>

          <div className="d-flex mb-3">
            <input
              type="text"
              className="form-control w-25 me-2"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserData;
