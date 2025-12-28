import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import ViewData from "./ViewData";

const App = () => {
  const [user, setUser] = useState({});
  const [list, setList] = useState([]);
  const [data, setData] = useState([]);
  const [edit, setEdit] = useState(null);
  const [error, setError] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 4;
  const navigator = useNavigate();
  const indexOflastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOflastItem - itemPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOflastItem);
  const totalPages = Math.ceil(data.length / itemPerPage);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("list")) || [];
    setList(storedData);

    const searchValue = localStorage.getItem("search") || "";

    const filteredData = searchValue
      ? storedData.filter((item) =>
          item.email?.toLowerCase().includes(searchValue.toLowerCase())
        )
      : storedData;

    setData(filteredData);
    setCurrentPage(1);
  }, []);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  useEffect(() => {
    localStorage.setItem("currentPage", currentPage.toString());
  }, [currentPage]);

  const validate = () => {
    const errors = {};
    if (!user.email) error.email = "Email is required";
    if (!user.password) error.password = "Password is required";
    setError(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let updateList;

    if (!edit) {
      updateList = [...list, { ...user, id: Date.now() }];
    } else {
      updateList = list.map((item) =>
        item.id === edit ? { ...item, ...user } : item
      );

      setEdit(null);
      navigator("/view-data");
    }

    setList(updateList);
    setData(updateList);
    setUser({});
    setCurrentPage(1);
  };

  const handlePage = (page) => setCurrentPage(page);
  const handlePrev = () => currentPage > 1 && setCurrentPage(currentPage - 1);
  const handleNext = () =>
    currentPage < totalPages && setCurrentPage(currentPage + 1);

  const handleEdit = (id) => {
    const editUser = list.find((item) => item.id === id);
    setUser(editUser);
    navigator("/");
  };

  const handleDelete = (id) => {
    const removeData = list.filter((item) => item.id !== id);
    setList(removeData);
    setData(removeData);
  };

  const handleSearch = (e) => {
    const { value } = e.target;
    const filterData = list.filter((item) =>
      item.email.toLowerCase().includes(value.toLowerCase())
    );
    setData(filterData);
    setCurrentPage(1);
    localStorage.setItem("search", value);
  };

  return (
    <>
      <Header handleSearch={handleSearch} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              user={user}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              validate={validate}
              error={error}
            />
          }
        />
        <Route
          path="/view-data"
          element={
            <ViewData
              list={list}
              currentItems={currentItems}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              currentPage={currentPage}
              itemPerPage={itemPerPage}
              handlePrev={handlePrev}
              handleNext={handleNext}
              totalPages={totalPages}
              handlePage={handlePage}
            />
          }
        />
      </Routes>
    </>
  );
};

export default App;