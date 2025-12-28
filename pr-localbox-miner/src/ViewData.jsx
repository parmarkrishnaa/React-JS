import React from "react";

const ViewData = ({
  currentItems,
  currentPage,
  itemPerPage,
  totalPages,
  handleEdit,
  handleDelete,
  handlePage,
}) => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="table-responsive shadow-lg rounded">
            <table className="table table-dark table-striped table-hover text-center">
              <caption>User Data</caption>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.length > 0 ? (
                  currentItems.map((value, index) => {
                    const { email, password, id } = value;
                    const start = (currentPage - 1) * itemPerPage + (index + 1);

                    return (
                      <tr key={id}>
                        <td>{start}</td>
                        <td>{email}</td>
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
                ) : (
                  <tr>
                    <td className="text-center" colSpan={4}>
                      Data not found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="row justify-content-center mt-3">
        <div className="col-12 d-flex justify-content-center">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              className={`btn me-2 ${
                currentPage === index + 1 ? "btn-dark" : "btn-primary"
              }`}
              onClick={() => handlePage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewData;