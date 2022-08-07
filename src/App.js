import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header.js';
import MainPage from './pages/MainPage.js';
import Login from './pages/Login.js';
import Profile from './pages/Profile.js';

function App() {
    
        const Authorized = () => {
            return localStorage.getItem('auth')==true;
        }
    
  return (
    <div className="App">
          <Header />
              <Routes>
                  <Route index element={<MainPage/>} />
              <Route path='/prof' element={Authorized() ? <Profile /> : <Login />} />
              <Route path='/login' element={Authorized() ? <Profile /> : <Login /> } />
          </Routes>
      </div>
  );
}

export default App;
