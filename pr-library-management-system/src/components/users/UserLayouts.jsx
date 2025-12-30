import useBooks from '../../hooks/useBook';
import Header from './Header';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './auth/LoginPage';
import Signup from './auth/SignUpPage';
import Books from './pages/Book';
import Contact from './pages/Contact';
import MyBook from './pages/MyBook';
import Footer from './Footer';
import Profile from './pages/Profile';

function Userlayouts() {
  const { list, handleBorrowBook } = useBooks();
  const location = useLocation();

  const hideHeader = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <>
      {!hideHeader && <Header />}

      <Routes>
        <Route index element={<Home books={list} handleBorrowBook={handleBorrowBook} />} />
        <Route path="about" element={<About  />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path='books' element={<Books list={list} handleBorrowBook={handleBorrowBook} />} /> 
        <Route path='contact' element={<Contact/>} />
        <Route path='my-books' element={<MyBook/>} />
        <Route path='profile' element={<Profile/>} />
      </Routes>
      <Footer/>
      
    </>
  );
}

export default Userlayouts;