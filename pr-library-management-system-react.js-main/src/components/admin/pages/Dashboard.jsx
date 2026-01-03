import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'
import { useBooks } from '../../../hooks/useBooks'
import './Dashboard.css'

function Dashboard({ list = [] }) {

  const {
    currentItem,
    currentPage,
    totalPage,
    setCurrentPage
  } = useBooks()

  const safeList = list.map(b => ({
    ...b,
    count: Math.max(0, Number(b.count) || 0),
    borrowed: Math.max(0, Number(b.borrowed) || 0)
  }))


  const itemsPerPage = 5
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedList = safeList.slice(startIndex, startIndex + itemsPerPage)

  const totalBooks = safeList.length
  const totalStock = safeList.reduce((s, b) => s + b.count, 0)
  const borrowedBooks = safeList.reduce((s, b) => s + b.borrowed, 0)
  const availableBooks = totalStock - borrowedBooks

  const members = JSON.parse(localStorage.getItem('users'))?.length || 0

  const chartData = [
    { name: 'Borrowed', value: borrowedBooks },
    { name: 'Available', value: availableBooks },
    { name: 'Total Stock', value: totalStock }
  ]

  return (
    <div className="dashboard-container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 g-4 mb-4">

        <div className="col">
          <div className="dashboard-card red">
            <div className="card-icon">📖</div>
            <p>Total Books</p>
            <h3>{totalBooks}</h3>
          </div>
        </div>

        <div className="col">
          <div className="dashboard-card blue">
            <div className="card-icon">📘</div>
            <p>Borrowed Stock</p>
            <h3>{borrowedBooks}</h3>
          </div>
        </div>

        <div className="col">
          <div className="dashboard-card green">
            <div className="card-icon">📗</div>
            <p>Available Stock</p>
            <h3>{availableBooks}</h3>
          </div>
        </div>

        <div className="col">
          <div className="dashboard-card purple">
            <div className="card-icon">📚</div>
            <p>Total Stock</p>
            <h3>{totalStock}</h3>
          </div>
        </div>

        <div className="col">
          <div className="dashboard-card orange">
            <div className="card-icon">👥</div>
            <p>Members</p>
            <h3>{members}</h3>
          </div>
        </div>

      </div>


      <div className="mb-5">
        <h4 className="text-center mb-3">Books Stock Chart</h4>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#0d6efd" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="table-responsive">
        <table className="table table-bordered table-hover text-center align-middle">
          <thead className="table-dark">
            <tr>
              <th>Sr.No</th>
              <th>Book</th>
              <th>Author</th>
              <th>Category</th>
              <th>Total</th>
              <th>Borrowed</th>
              <th>Available</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {paginatedList.map((book, index) => {
              const available = book.count - book.borrowed

              return (
                <tr key={book.id || index}>
                  <td>{startIndex + index + 1}</td>
                  <td>{book.bookName}</td>
                  <td>{book.author}</td>
                  <td>{book.category}</td>
                  <td>{book.count}</td>
                  <td>{book.borrowed}</td>
                  <td>{available}</td>
                  <td>
                    {book.borrowed == 0 ? (
                      <span className="badge bg-success">Available</span>
                    ) : book.borrowed < book.count ? (
                      <span className="badge bg-warning text-dark">
                        Partially Borrowed
                      </span>
                    ) : (
                      <span className="badge bg-danger">Fully Borrowed</span>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <div className="d-flex justify-content-center gap-2 mt-3">
          <button
            className="btn btn-secondary"
            disabled={currentPage == 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Prev
          </button>

          {[...Array(totalPage)].map((_, i) => (
            <button
              key={i}
              className={`btn ${currentPage === i + 1 ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}

          <button
            className="btn btn-secondary"
            disabled={currentPage === totalPage}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </button>
        </div>

        <div className="mt-5">
          <h4 className="text-center mb-3">Users</h4>
          <div className="table-responsive">
            <table className="table table-bordered table-hover text-center align-middle">
              <thead className="table-dark">
                <tr>
                  <th>Sr.No</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {JSON.parse(localStorage.getItem('users'))?.length > 0 ? (
                  JSON.parse(localStorage.getItem('users')).map((user, index) => (
                    <tr key={user.id || index}>
                      <td>{index + 1}</td>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            const oldUsers = JSON.parse(localStorage.getItem('users')) || []
                            const newUsers = oldUsers.filter(u => u.id !== user.id)
                            localStorage.setItem('users', JSON.stringify(newUsers))
                            window.location.reload() // simple way to refresh table
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4">No users available</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;