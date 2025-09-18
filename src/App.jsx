  


import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './component/Home/Home.jsx';
import AddItem from './component/AddItem/AddItem.jsx';
import DisplayItem from "./component/DisplayItem/DisplayItem.jsx";
import UpdateItem from './component/UpdateItem/UpdateItem.jsx';
import Register from './component/Register/Register.jsx';
import Login from './component/Login/Login.jsx';
import UserProfile from './component/UserProfile/UserProfile.jsx';
import UpdateProfile from './component/UpdateProfile/UpdateProfile.jsx';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddItem />} />
      <Route path="/allitems" element={<DisplayItem/>} />
      <Route path="/updateItem/:id" element={<UpdateItem/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
      <Route path='/userProfile' element={<UserProfile/>} />
      <Route path='/updateprofile/:id' element={<UpdateProfile/>} />
    </Routes>
  );
}

export default App; 


