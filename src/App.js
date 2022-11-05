import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Movies from './Components/Movies/Movies';
import People from './Components/People/People';
import Tvshows from './Components/Tvshows/Tvshows';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Notfound from './Components/Notfound/Notfound';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
    <Routes>
      <Route path='home' element={<Home />}></Route>
      <Route path='about' element={<About />}></Route>
      <Route path='movies' element={<Movies />}></Route>
      <Route path='people' element={<People />}></Route>
      <Route path='tvshows' element={<Tvshows />}></Route>
      <Route path='register' element={<Register />}></Route>
      <Route path='login' element={<Login />}></Route>
      <Route path='*' element={<Notfound />}></Route>
    </Routes>


      </>
  );
}

export default App;
