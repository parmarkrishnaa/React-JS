import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [user, setUser] = useState({});
  const [hobby, setHobby] = useState([]);
  const [list, setList] = useState([]);
  const [editId, setEditId] = useState(null);
  const [error, setError] = useState({});
  const [search, setSearch] = useState("");

  useEffect(() => {
    const saveData = JSON.parse(localStorage.getItem("userData"));
    setList(saveData);
  }, []);

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(list));
  }, [list]);

  const handleSearch = (e) => {
    let newList = list.filter((value) =>
      Object.values(value)
        .join(" ")
        .toLocaleLowerCase()
        .includes(search.toLocaleLowerCase())
    );
    setList(newList);
  };

  const cities = ["New York", "London", "Tokyo", "Paris", "Sydney"];
  const handleChange = (e) => {
    let { name, value } = e.target;

    if (name == "hobby") {
      let newHobby = hobby;
      if (newHobby.includes(value)) {
        newHobby = newHobby.filter((val) => val != value);
      } else {
        newHobby.push(value);
      }
      value = newHobby;
      setHobby(newHobby);
    }

    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validation()) return;

    if (editId) {
      let newList = list;
      newList = newList.map((value) => {
        if (value.id == editId) {
          return { ...value, ...user };
        }
        return value;
      });

      setList(newList);
      setEditId(null);
    } else {
      setList([...list, { ...user, id: Date.now() }]);
    }
    setUser({});
    setHobby([]);
  };

  const handleDelete = (id) => {
    let newList = list.filter((value) => value.id != id);
    setList(newList);
  };

  const handleEdit = (id) => {
    let data = list.find((value) => value.id == id);
    setUser(data);
    setHobby(data.hobby);
    setEditId(id);
  };

  const validation = () => {
    let error = {};

    if (!user.name) error.name = "Name is required";
    if (!user.fname) error.fname = "Father's Name is required";
    if (!user.mname) error.mname = "Mother's Name is required";
    if (!user.gender) error.gender = "Gender is required";
    if (!user.hobby) error.hobby = "Hobby is required";
    if (!user.city) error.city = "City is required";
    if (!user.address) error.address = "Address is required";

    setError(error);

    return Object.keys(error).length != 0;
  };
};

return (
  <>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form action="" method="post" onSubmit={handleSubmit}>
            <h2>Admission Form</h2>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                {" "}
                Full Name{" "}
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                value={user.name || ""}
                onChange={handleChange}
              />
              {error.name ? (
                <span className="text-danger">{error.name}</span>
              ) : (
                ""
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="fname" className="form-label">
                {" "}
                Father's Name{" "}
              </label>
              <input
                type="text"
                className="form-control"
                name="fname"
                id="fname"
                value={user.fname || ""}
                onChange={handleChange}
              />
              {error.fname ? (
                <span className="text-danger">{error.fname}</span>
              ) : (
                ""
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="mname" className="form-label">
                {" "}
                Mother's Name{" "}
              </label>
              <input
                type="text"
                className="form-control"
                name="mname"
                id="mname"
                value={user.mname || ""}
                onChange={handleChange}
              />
              {error.mname ? (
                <span className="text-danger">{error.mname}</span>
              ) : (
                ""
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="gender" className="form-label me-3 d-block">
                {" "}
                Gender{" "}
              </label>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  className="form-check-input"
                  name="gender"
                  value="male"
                  id="male"
                  checked={user.gender == "male" ? true : false}
                  onChange={handleChange}
                />
                <label htmlFor="male" className="form-check-label">
                  {" "}
                  Male{" "}
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  className="form-check-input"
                  name="gender"
                  value="female"
                  id="female"
                  checked={user.gender == "female" ? true : false}
                  onChange={handleChange}
                />
                <label htmlFor="female" className="form-check-label">
                  {" "}
                  female{" "}
                </label>
              </div>
              <br />
              {error.gender ? (
                <span className="text-danger">{error.gender}</span>
              ) : (
                ""
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="hobby" className="form-label me-3 d-block">
                {" "}
                Hobby{" "}
              </label>
              <div className="form-check form-check-inline">
                <input
                  type="checkbox"
                  className="form-check-input"
                  name="hobby"
                  value="reading"
                  id="reading"
                  checked={hobby.includes("reading")}
                  onChange={handleChange}
                />
                <label htmlFor="reading" className="form-check-label">
                  {" "}
                  Reading{" "}
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="checkbox"
                  className="form-check-input"
                  name="hobby"
                  value="writing"
                  id="writing"
                  checked={hobby.includes("writing")}
                  onChange={handleChange}
                />
                <label htmlFor="writing" className="form-check-label">
                  {" "}
                  Writing{" "}
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="checkbox"
                  className="form-check-input"
                  name="hobby"
                  value="coding"
                  id="coding"
                  checked={hobby.includes("coding")}
                  onChange={handleChange}
                />
                <label htmlFor="coding" className="form-check-label">
                  {" "}
                  Coding{" "}
                </label>
              </div>
              <br />
              {error.hobby ? (
                <span className="text-danger">{error.hobby}</span>
              ) : (
                ""
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="city" className="form-label">
                {" "}
                City{" "}
              </label>
              <select
                class="form-select"
                name="city"
                aria-label="Default select example"
                onChange={handleChange}
              >
                <option selected disabled={user.city ? true : false}>
                  {" "}
                  --select-city--{" "}
                </option>
                {cities.map((city) => (
                  <option value={city} selected={user.city == city}>
                    {city}
                  </option>
                ))}
              </select>
              {error.city ? (
                <span className="text-danger">{error.city}</span>
              ) : (
                ""
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                {" "}
                Address{" "}
              </label>
              <textarea
                name="address"
                id="address"
                rows={3}
                className="form-control"
                onChange={handleChange}
                value={user.address || ""}
              ></textarea>
              {error.address ? (
                <span className="text-danger">{error.address}</span>
              ) : (
                ""
              )}
            </div>
            <button type="reset" className="btn btn-primary me-2">
              {" "}
              Reset{" "}
            </button>
            <button type="submit" className="btn btn-primary">
              {" "}
              Submit{" "}
            </button>
          </form>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="search">
            <input
              type="text"
              className="form-control w-25 me-2"
              placeholder="Search data..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="btn btn-primary" onClick={handleSearch}>
              Search
            </button>
          </div>
          <div className="table-responsive">
            <table className="table table-dark table-bordered table-striped table-hover caption-top text-center">
              <caption>
                <h2 className="text-black">User Data</h2>
              </caption>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Full Name</th>
                  <th>Father's Name</th>
                  <th>Mother's Name</th>
                  <th>Gender</th>
                  <th>Hobby</th>
                  <th>City</th>
                  <th>Address</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {list.length > 0 ? (
                  list.map((value, index) => {
                    const {
                      name,
                      fname,
                      mname,
                      gender,
                      hobby,
                      city,
                      address,
                      id,
                    } = value;
                    return (
                      <tr key={id}>
                        <td>{index + 1}</td>
                        <td>{name}</td>
                        <td>{fname}</td>
                        <td>{mname}</td>
                        <td>{gender}</td>
                        <td>{hobby.join(", ")}</td>
                        <td>{city}</td>
                        <td>{address}</td>
                        <td>
                          <button
                            onClick={() => handleEdit(id)}
                            className="btn btn-outline-warning me-1"
                          >
                            {" "}
                            Edit{" "}
                          </button>
                          <button
                            onClick={() => handleDelete(id)}
                            className="btn btn-outline-danger"
                          >
                            {" "}
                            Delete{" "}
                          </button>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={9} className="text-center">
                      {" "}
                      Data Not Found!{" "}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default App;