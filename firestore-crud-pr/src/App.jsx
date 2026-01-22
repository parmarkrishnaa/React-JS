import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import { Route, Routes, useNavigate } from "react-router-dom";
import AddBook from "./components/AddBook";
import ViewBook from "./components/ViewBook";
import { db } from "./firebase/config.js";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";

const App = () => {
  const [book, setBook] = useState({});
  const [list, setList] = useState([]);
  const navigate = useNavigate();

  const createData = async (book) => {
    try {
      await addDoc(collection(db, "books"), book);
    } catch (error) {
      alert(error);
    }
  };

  const getAllData = async () => {
    try {
      let newList = [];
      let querySnapshot = await getDocs(collection(db, "books"));
      querySnapshot.forEach((doc) => {
        newList.push({ ...doc.data(), id: doc.id });
      });
      setList(newList);
    } catch (error) {
      alert(error);
    }
  };

  const deleteData = async (id) => {
    try {
      await deleteDoc(doc(db, "books", id));
      alert("Book Deleted.");
      getAllData();
    } catch (error) {
      alert(error);
    }
  };

  const updateData = async (id, book) => {
    try {
      delete book.id;
      await updateDoc(doc(db, "books", id), book);
      alert("Book Updated.");
      getAllData();
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getAllData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: name === "quantity" || name === "price" ? Number(value) : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (book.id) {
      updateData(book.id, book);
    } else {
      createData(book);
    }

    getAllData();
    setBook({});
    navigate("/view-books");
  };

  const handleEdit = (id) => {
    const data = list.find((val) => val.id == id);
    setBook(data);
    navigate("/");
  };

  return (
    <>
      <Header />

      <Routes>
        <Route
          index
          element={
            <AddBook
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              book={book}
            />
          }
        />
        <Route
          path="/view-books"
          element={
            <ViewBook
              handleEdit={handleEdit}
              deleteData={deleteData}
              list={list}
            />
          }
        />
      </Routes>
    </>
  );
};

export default App;
