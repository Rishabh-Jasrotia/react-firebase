import React,{ useState } from 'react';
import './css/App.css';
import './css/index.css';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import img from './assets/pfp.jpg';


function App() {
  console.log(img);
  const [userName,setName]=useState("Rishabh Singh Jasrotia");
  const [selectedImg,setImg]=useState(null);
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Navigate replace to="/login" />}/>
          <Route path='/login' element={<Login userName={userName} setName={setName} selectedImg={selectedImg} setImg={setImg}/>}/>
          <Route path='/' element={<NavBar userName={userName} />}>
            <Route path='/home' element={<Home selectedImg={selectedImg} userName={userName} />}/>
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
