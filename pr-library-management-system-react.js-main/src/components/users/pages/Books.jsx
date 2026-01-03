import React from 'react'
import { useBooks } from '../../../hooks/useBooks'
import './Books.css'

function Books() {
  const { list, handleBorrowBook } = useBooks()

  return (
    <>
      {/* ===== PAGE HEADER ===== */}
      <section className="books-hero">
        <div className="container">
          <h1>Library Book Collection</h1>
          <p>Browse and borrow books from our curated library catalog</p>
        </div>
      </section>

      {/* ===== BOOK LIST ===== */}
      <div className="container my-5">
        <div className="row g-4">
          {list.map((book) => (
            <div key={book.id} className="col-lg-3 col-md-4 col-sm-6">
              <div className="library-book-card h-100">

                {/* IMAGE */}
                <div className="library-book-img">
                  <img src={book.image} alt={book.bookName} />
                  <span
                    className={`availability-badge ${
                      book.count === 0 ? 'out' : 'in'
                    }`}
                  >
                    {book.count === 0 ? 'Out of Stock' : 'Available'}
                  </span>
                </div>

                {/* INFO */}
                <div className="library-book-body">
                  <h5>{book.bookName}</h5>
                  <p><strong>Author:</strong> {book.author}</p>
                  <p><strong>Category:</strong> {book.category}</p>

                  <button
                    className="btn btn-outline-primary w-100 mt-3"
                    onClick={() => handleBorrowBook(book.id)}
                    disabled={book.count === 0}
                  >
                    Borrow Book
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Books;