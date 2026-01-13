import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, editUser, getAllUsers } from "../features/users/userSlice";

const ViewDetails = () => {
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="table-responsive mt-5">
            <table className="table table-bordered table-striped caption-top text-center">
              <caption>
                <h3>User Data</h3>
              </caption>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Id</th>
                  <th>Class</th>
                  <th>School</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.length > 0 ? (
                  users?.map((user, index) => {
                    const { id, stdName, stdID, stdClass, stdSchool } = user;
                    return (
                      <tr key={id}>
                        <td>{index + 1}</td>
                        <td>{stdName}</td>
                        <td>{stdID}</td>
                        <td>{stdClass}</td>
                        <td>{stdSchool}</td>
                        <td>
                          <button
                            className="btn btn-warning me-2"
                            onClick={() => dispatch(editUser(id))}
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-danger"
                            onClick={() => dispatch(deleteUser(id))}
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

export default ViewDetails;