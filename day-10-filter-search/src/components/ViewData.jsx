import React from "react";

const ViewData = ({ list, handleEdit, handleDelete }) => {
  return (
    <>
      <div className="row justify-content-center mt-2">
        <div className="col-md-8">
          <table className="table table-bordered table-dark table-hover table-responsive table-striped caption-top text-center">
            <caption>
              <h2>User Data</h2>
            </caption>
            <thead>
              <tr>
                <th>#</th>
                <th>Username</th>
                <th>Password</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                list.map((value, index) => {
                  let { username, password, id } = value;
                  return (
                    <tr key={id}>
                      <td>{index + 1}</td>
                      <td>{username}</td>
                      <td>{password}</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-warning"
                          onClick={() => handleEdit(id)}
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => handleDelete(id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ViewData;