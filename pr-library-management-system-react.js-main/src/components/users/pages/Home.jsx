import React from "react";
import { useBooks } from "../../../hooks/useBooks";
import './Home.css';

function Home() {
  const { list, handleBorrowBook } = useBooks();

  return (
    <>
      <div>
        <div
          id="carouselExampleRide"
          classname="carousel slide"
          data-bs-ride="true"
        ></div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://png.pngtree.com/background/20230527/original/pngtree-an-old-bookcase-in-a-library-picture-image_2760144.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://images.pexels.com/photos/2908984/pexels-photo-2908984.jpeg?cs=srgb&dl=pexels-technobulka-2908984.jpg&fm=jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://www.voicesofruralindia.org/wp-content/uploads/2020/11/ylswjsy7stw-scaled.jpg" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleRide"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleRide"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* ===== NEW BOOKS ===== */}
      <section className="home-section">
        <div className="container">
          <h2 className="section-title">📘 New Arrivals</h2>
          <NewBook list={list} handleBorrowBook={handleBorrowBook} />
        </div>
      </section>

      {/* ===== CATEGORIES ===== */}
      <section className="home-section bg-light">
        <div className="container">
          <h2 className="section-title">📚 Browse by Category</h2>
          <Category list={list} handleBorrowBook={handleBorrowBook} />
        </div>
      </section>
    </>
  );
}

export default Home;