/*import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home.jsx';
import AddItem from './component/AddItem/AddItem.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddItem />} />
      </Routes>
    </Router>
  );
}

export default App;*/


import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './component/Home/Home.jsx';
import AddItem from './component/AddItem/AddItem.jsx';
import DisplayItem from "./component/DisplayItem/DisplayItem.jsx";
import UpdateItem from './component/UpdateItem/UpdateItem.jsx';
import Register from './component/Register/Register.jsx';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddItem />} />
      <Route path="/allitems" element={<DisplayItem/>} />
      <Route path="/updateItem/:id" element={<UpdateItem/>} />
      <Route path="/register" element={<Register/>} />
    </Routes>
  );
}

export default App;



