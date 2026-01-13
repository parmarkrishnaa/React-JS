import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { editUser, deleteUser } from '../features/userSlice';

const ViewUser = () => {

    const {users} = useSelector(state => state.users);
    const dispatch = useDispatch();

  return (
    <div className='container'>
        <div className="row justify-content-center">
            <div className="col-md-7">
                <div className="table table-responsive">
                    <table className='table-bordered table-hover table-striped caption-top text-center' cellPadding={10}>
                        <caption>
                            <h2>View Users</h2>
                        </caption>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.length > 0
                                ?
                                users.map((value, index) => {
                                    const {username, email, password, id} = value;

                                    return (
                                        <tr key={id}>
                                            <td>{index + 1}</td>
                                            <td>{username}</td>
                                            <td>{email}</td>
                                            <td>{password}</td>
                                            <td>
                                                <button type='button' className='btn btn-outline-warning me-1' onClick={() => dispatch(editUser(id))}>Edit</button>
                                                <button type='button' className='btn btn-outline-danger' onClick={() => dispatch(deleteUser(id))}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                                :
                                <tr>
                                    <td className='text-center' colSpan={5}>Data not found!</td>
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

export default ViewUser;