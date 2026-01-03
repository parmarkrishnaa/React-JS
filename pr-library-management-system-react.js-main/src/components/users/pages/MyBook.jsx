import React from 'react'
import { useBooks } from '../../../hooks/useBooks'
import './MyBook.css'

function MyBook() {
  const { list, handleReturnBook, handleRemoveAllBooks } = useBooks()

  const currentUser = JSON.parse(localStorage.getItem('user'))

  const borrow = list.filter(
    b => b.borrowedBy && b.borrowedBy.includes(currentUser?.id)
  )

  return (
    <>
      {/* ===== PAGE HEADER ===== */}
      <section className="mybooks-hero">
        <div className="container">
          <h1>My Borrowed Books</h1>
          <p>Manage the books you have currently borrowed</p>
        </div>
      </section>

      <div className="container my-5">

        {/* ===== SUMMARY BAR ===== */}
        <div className="summary-bar">
          <div>
            <strong>Total Borrowed:</strong> {borrow.length}
          </div>

          {borrow.length > 0 && (
            <button
              className="btn btn-outline-danger"
              onClick={handleRemoveAllBooks}
            >
              Remove All
            </button>
          )}
        </div>

        {/* ===== CONTENT ===== */}
        {borrow.length === 0 ? (
          <div className="empty-state">
            📖 You have not borrowed any books yet.
          </div>
        ) : (
          <div className="row g-4">
            {borrow.map((book, index) => (
              <div key={index} className="col-lg-3 col-md-4 col-sm-6">
                <div className="mybook-card h-100">

                  <img
                    src={book.image}
                    alt={book.bookName}
                    className="mybook-img"
                  />

                  <div className="mybook-body">
                    <h5>{book.bookName}</h5>
                    <p><strong>Author:</strong> {book.author}</p>
                    <p><strong>Category:</strong> {book.category}</p>

                    <button
                      className="btn btn-sm btn-danger w-100 mt-3"
                      onClick={() => handleReturnBook(book.id)}
                    >
                      Return Book
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default MyBook;