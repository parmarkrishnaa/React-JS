import React from 'react'

const ViewBook = ({handleEdit, deleteData, list}) => {
  return (
    <div className='container'>
      <div className="row justify-content-center">
        <div className="col-md-9">
            <div className="table-responive">
                <table className='table table-bordered table-light table-hover table-striped caption-top text-center'>
                    <caption>
                        <h3 className='text-center'>View Data</h3>
                    </caption>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                      {
                        list.length > 0
                        ?
                        list.map((value, index) => {
                          const {name, title, author, quantity, price, id} = value;

                          return (
                            <tr key={id}>
                              <td>{index + 1}</td>
                              <td>{name}</td>
                              <td>{title}</td>
                              <td>{author}</td>
                              <td>{Number(quantity)}</td>
                              <td>{Number(price)}</td>
                              <td>
                                <button type='button' className='btn btn-warning me-2' onClick={() => handleEdit(id)}>Edit</button>
                                <button type='button' className='btn btn-danger' onClick={() => deleteData(id)}>Delete</button>
                              </td>
                            </tr>
                          )
                        })
                        :
                        <tr>
                          <td className='text-center' colSpan={6}>Data not found!</td>
                        </tr>
                      }
                    </tbody>
                </table>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ViewBook
