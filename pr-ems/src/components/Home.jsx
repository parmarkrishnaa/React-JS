import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = ({ user }) => {

  const navigate = useNavigate();

  const handleAdd = () => {
    if (!user) {
      alert("Please login first");
      navigate("/login");
      return;
    }
    navigate("/add-employee");
  };


  return (
    <div className="container text-center">
      <h1 className="mt-4">Welcome to the Employee Management System</h1>
      <button className="btn btn-primary mt-2" onClick={handleAdd}>Add Employee</button>
    </div>
  )
}

export default Home;