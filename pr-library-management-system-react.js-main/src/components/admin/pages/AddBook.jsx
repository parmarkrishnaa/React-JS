import React from 'react'
import { useBooks } from '../../../hooks/useBooks'

function AddBook() {
  const { book, handleChange, handleSubmit } = useBooks()
  const categories = ['Novel', 'Science', 'History', 'Biography', 'Technology', 'Art', 'Music', 'Sports']

  return (
    <div className="container pt-4 addbook-form">
      <div className="row mt-3">
        <div className="col-md-6">

          <form onSubmit={handleSubmit} className="p-4 rounded bg-white addbook-box">
            <h2 className="mb-4 text-center form-title">
              {book?.id ? 'Edit Book Details' : 'Add Book Details'}
            </h2>

            <div className="mb-3">
              <label className="form-label">Book Image</label>
              <input
                type="url"
                name="image"
                className="form-control"
                value={book.image || ''}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Book Name</label>
              <input
                type="text"
                name="bookName"
                className="form-control"
                value={book.bookName || ''}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Book Author</label>
              <input
                type="text"
                name="author"
                className="form-control"
                value={book.author || ''}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Book Count</label>
              <input
                type="number"
                min={1}
                max={25}
                name="count"
                className="form-control"
                value={book.count || ''}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label className="form-label">Book Category</label>
              <select
                name="category"
                className="form-select"
                value={book.category || ''}
                onChange={handleChange}
              >
                <option value="" disabled>--- select-category ---</option>
                {categories.map((cat, index) => (
                  <option key={index} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <button type="submit" className="btn btn-primary w-100">
              {book?.id ? 'Update Book' : 'Add Book'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddBook;