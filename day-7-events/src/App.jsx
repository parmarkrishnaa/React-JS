import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./App.css";

function App() {
  const [change, setChange] = useState(0);
  const [star, setStar] = useState(0);

  const handleChange = (val) => {
    setChange(val);
  };

  const handleMouseOver = (val) => {
    setChange(val);
  };

  const handleMouseLeave = (val) => {
    setChange(val);

    if (val < star) {
      setStar(star);
    }
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="form">
              <form method="post">
                <h2>Rate Us</h2>
                <div className="mb-3">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="name">Feedback</label>
                  <textarea
                    name="feedback"
                    rows="3"
                    cols="50"
                    className="form-control"
                  ></textarea>
                </div>
              </form>
            {[1, 2, 3, 4, 5].map((val, index) => (
              <FaStar
                key={index}
                fontSize={20}
                color={val <= change ? "gold" : "lightgray"}
                onClick={() => handleChange(val)}
                onMouseOver={() => handleMouseOver(val)}
                onMouseLeave={() => handleMouseLeave(val)}
              />
            ))}
            <br />
            <button type="submit" className="btn btn-primary mt-2 mb-2 w-100">
              Submit
            </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;