import React from "react";

const Home = ({ user, handleChange, handleSubmit, validate, error }) => {

  const onSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    handleSubmit(e);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card shadow-lg p-4">
            <h3 className="text-center mb-3">Login Form</h3>

            <form onSubmit={onSubmit}>
              <div className="mb-3">
                <label>Email address</label>
                <input
                  type="email"
                  name="email"
                  value={user.email || ""}
                  onChange={handleChange}
                  className="form-control"
                />
                {error.email && (
                  <small className="text-danger">{error.email}</small>
                )}
              </div>

              <div className="mb-3">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={user.password || ""}
                  onChange={handleChange}
                  className="form-control"
                />
                {error.password && (
                  <small className="text-danger">{error.password}</small>
                )}
              </div>

              <button className="btn btn-primary w-100" type="submit">
                {user.id ? "Update" : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;