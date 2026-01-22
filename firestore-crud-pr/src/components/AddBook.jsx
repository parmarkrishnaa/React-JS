import React from "react";

const AddBook = ({handleSubmit, handleChange, book}) => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form method="post" onSubmit={handleSubmit}>
            <h3 className="text-center mt-3 mb-3">Book Data</h3>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={book.name || ''}
                onChange={handleChange}
                id="name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                name="title"
                value={book.title || ''}
                onChange={handleChange}
                id="title"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="author" className="form-label">
                Author
              </label>
              <input
                type="text"
                className="form-control"
                name="author"
                value={book.author || ''}
                onChange={handleChange}
                id="author"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="quantity" className="form-label">
                Quantity
              </label>
              <input
                type="number"
                className="form-control"
                name="quantity"
                value={book.quantity || ''}
                onChange={handleChange}
                id="quantity"
                min={0}
                max={100}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="form-label">
                Price
              </label>
              <input
                type="number"
                className="form-control"
                name="price"
                value={book.price || ''}
                onChange={handleChange}
                id="price"
              />
            </div>
            <button type="submit" className="btn btn-success float-end">
              {book.id ? 'Update' : 'Add'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
