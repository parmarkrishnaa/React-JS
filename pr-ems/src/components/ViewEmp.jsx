import React from "react";

const ViewEmp = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <table className="table table-dark table-bordered table-responsive table-hover table-striped caption-top text-center">
            <caption>
              <h3 className="mt-2 mb-2">Employee Details</h3>
            </caption>
            <thead>
              <tr>
                <th>#</th>
                <th>Employee ID</th>
                <th>Employee Name</th>
                <th>Action</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewEmp;
