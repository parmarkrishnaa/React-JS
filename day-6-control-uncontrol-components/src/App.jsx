import React, { useRef, useState } from "react";

const App = () => {

  const [user, setUser] = useState({});
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const {name, value} = inputRef.current;
    setUser({...user, [name]: value});
  }

  console.log(user);

  return (
    <>
      <form method="post" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label"> Username </label>
          <input type="text" name="username" ref={inputRef} className="form-control" id="username"/>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label"> Email </label>
          <input type="text" name="email" ref={inputRef} className="form-control" id="email" />
        </div>
        <button type="submit" className="btn btn-primary"> Submit </button>
      </form>
    </>
  );
};

export default App;