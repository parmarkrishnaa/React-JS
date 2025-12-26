import React from "react";

const ViewData = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="table">
            <table className="table-bordered table-hover table-dark table-responsive table-striped caption-top">
              <caption>User Data</caption>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Action</th>
                </tr>
              </thead>
              {/* <tbody>
                {list.length > 0 ? (
                  list.map((value, index) => {
                    const { email, password, id } = value;
                    return (
                      <tr key={id}>
                        <td>{index + 1}</td>
                        <td>{email}</td>
                        <td>{password}</td>
                        <td>
                          <button className="btn btn-warning">Edit</button>
                          <button className="btn btn-danger">Delete</button>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td className="text-center" colspan={4}>
                      Data not found!
                    </td>
                  </tr>
                )}
              </tbody> */}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewData;
