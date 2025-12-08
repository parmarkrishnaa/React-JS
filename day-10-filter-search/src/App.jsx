import React, { useState } from 'react'
import UserData from './components/UserData'
import ViewData from './components/ViewData'

const App = () => {

 const [user, setUser] = useState({
  username: "",
  password: "",
  id: ""
});
  const [list, setList] = useState([])
  const [edit, setEdit] = useState(null);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setUser({...user, [name]:value});
  }

  const handleSubmit = (e) => {
  e.preventDefault();

  if (!user.username || !user.password) {
    alert("Please fill all fields");
    return;
  }

  const newUser = { ...user, id: Date.now() };

  setList([...list, newUser]);
  setUser({ username: "", password: "", id: "" });
};


  const handleDelete = (id) => {
    let deleteData = list.filter((val) => val.id != id);
    setList(deleteData);
  }

  const handleEdit = (id) => {
    let editData = list.find((val) => val.id == id);
    setUser(editData);
    setEdit(id);
  }

  return (
    <>
      <div className="container">
        <UserData handleChange={handleChange} handleSubmit={handleSubmit} setList={setList} />
        <ViewData list={list} handleEdit={handleEdit} handleDelete={handleDelete} />
      </div>
    </>
  )
}

export default App