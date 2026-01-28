import { useEffect, useState } from "react";
import Header from './components/Header'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import AddEmp from './components/AddEmp'
import ViewEmp from './components/ViewEmp'
import { Route, Routes } from "react-router-dom";
import { auth } from "./firebase/config";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = auth.currentUser;
    if(currentUser){
      setUser(currentUser);
    }
  }, []);

  return (
    <>
      <Header user={user} />
      <Routes>
        <Route index element={<Home user={user} />} />
        <Route path="login" element={<Login />} />
        <Route path="signUp" element={<Signup />} />
        {user && <Route path="add-employee" element={<AddEmp />} />}
        {user && <Route path="view-employees" element={<ViewEmp />} />}
      </Routes>
    </>
  );
};

export default App;