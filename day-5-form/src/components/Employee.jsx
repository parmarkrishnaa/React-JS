import React, { useState } from "react";

const Employee = () => {

    const [emp, setEmp] = useState({});
    const [list, setList] = useState([]);

    const handleInput = (e) => {
        const {name, value} = e.target;
        setEmp({...emp, [name]:value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setList([...list, ({...emp, id:Date.now()})]);
    }

    const handleDelete = (emp) => {
        const updatedList = list.filter((item) => item.id != emp.id);
        setList(updatedList);

        localStorage.setItem("empList", JSON.stringify(updatedList));
    }

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-6">
                <h2>Employee Form</h2>
                <form onSubmit={handleSubmit} className="border p-3 rounded mb-3" method="post">
                    <div className="mb-3">
                        <label htmlFor="e_name" className="form-label"> Employee Name </label>
                        <input type="text" name="ename" onChange={handleInput} className="form-control" id="e_name"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="e_id" className="form-label"> Employee ID </label>
                        <input type="number" name="eid" onChange={handleInput} className="form-control" id="e_id"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="e_dept" className="form-label"> Department </label>
                        <input type="text" name="edept" onChange={handleInput} className="form-control" id="e_dept"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="e_email" className="form-label"> Email </label>
                        <input type="email" name="eemail" onChange={handleInput} className="form-control" id="e_email"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="e_phone" className="form-label"> Phone </label>
                        <input type="number" name="ephone" onChange={handleInput} className="form-control" id="e_phone"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="e_address" className="form-label"> Address </label>
                        <textarea name="eaddress" id="e_address" onChange={handleInput} className="form-control"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary"> Submit </button>
                </form>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="table">
                    <table className="table- table- table-striped" cellPadding={10}>
                        <thead>
                            <tr>
                                <th>Sr. No.</th>
                                <th>Employee Name</th>
                                <th>Employee ID</th>
                                <th>Department</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                list.length != 0 ? 

                                list.map((item, index) => {
                                    const {ename, eid, edept, eemail, ephone, eaddress} = item;
                                    
                                    return(
                                        <tr className="text-center">
                                            <td>{index + 1}</td>
                                            <td>{ename}</td>
                                            <td>{eid}</td>
                                            <td>{edept}</td>
                                            <td>{eemail}</td>
                                            <td>{ephone}</td>
                                            <td>{eaddress}</td>
                                            <td>
                                                <button className="btn btn-danger" onClick={() => handleDelete(item)}> Delete </button>
                                            </td>
                                        </tr>
                                    )
                                })
                                :
                                <tr>
                                    <td colSpan={7} className="text-center"> No Data Found </td>
                                </tr>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Employee;