import React, { useState } from 'react'

const App = () => {

  const [user, setUser] = useState({});
  const [list, setList] = useState([]);
  const [edit, setEdit] = useState(null);

  const handleChange = (e) => {
    const {name , value} = e.target;
    setUser({...user, [name]:value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(edit == null){
      setList([...list, {...user, id:Date.now()}]);
    }else{
      let data = list.map((val) => {
        if(val.id == edit){
          return {...val, ...user};
        }
        return val;
      })
      setList(data);
      setEdit(null);
    }
    setUser({});
  }

  const handleDelete = (id) => {
    let deleteData = list.filter((val) => val.id != id);

    setList(deleteData);
  }

  const handleEdit = (id) => {
    let editData = list.find((val) => val.id === id);
    setUser(editData);
    setEdit(id);
  }

  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h2>Contact Form</h2>
            <form method="post" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone Number</label>
                <input type="tel" value={user.phone || ''} name='phone' onChange={handleChange} className="form-control" id="phone" placeholder="+1 235 568 8741" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" value={user.email || ''} name='email' onChange={handleChange} className="form-control" id="email" placeholder="name@example.com" />
              </div>
              <button type='submit' className='btn btn-outline-primary'>Submit</button>
            </form>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h3 className='mt-4'>User Data:</h3>
            <table className='table table-bordered table-dark table-hover table-striped text-center table-responsive'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Phone Number</th>
                  <th>Email Address</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className='text-center'>
                {
                  list.length > 0 ? (
                    list.map((value, index) => (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{value.phone}</td>
                        <td>{value.email}</td>
                        <td>
                          <button className='btn btn-warning me-2' onClick={() => handleEdit(value.id)}>Edit</button>
                          <button className='btn btn-danger' onClick={() => handleDelete(value.id)}>Delete</button>
                        </td>
                      </tr>
                    ))
                  )
                  :
                  (
                    <tr>
                      <td colSpan={4}>Data not available!</td>
                    </tr>
                  )
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App