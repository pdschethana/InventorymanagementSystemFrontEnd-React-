/*import React from 'react'

function Register() {
const navigate = useNavigate();
const [user, setUser] = useState({
  fullName: "",
    email: "",
    password: "",
    phone: ""
});
const {fullName, email, password, phone} = user;
const onInputChange=async (e)=>{
  setUser({...user, [e.target.name]: e.target.value});
}
const onSubmit=async (e)=>{
    e.preventDefault();
    await axios.post("http://localhost:8080/user",user);
    alert("Registered Successfully");
    window.location.reload();
}


  return (
    <div>
        <h2>Register</h2>
    <form onSubmit={(e)=>onSubmit(e)}>
      <div>
        <label for="fullName">Full Name:</label><br />
        <input type="text" id="fullname"  onChange= {(e)=> onInputChange(e)} value={fullname} name="fullname" required />
      </div>

      <div>
        <label for="email">Email:</label><br />
        <input type="email" id="email" name="email"  onChange= {(e)=> onInputChange(e)} value={email} required />
      </div>

      <div>
        <label for="password">Password:</label><br />
        <input type="password" id="password" name="password"  onChange= {(e)=> onInputChange(e)} value={password} required />
      </div>

      <div>
        <label for="phone">Phone:</label><br />
        <input type="text" id="phone" name="phone"   onChange= {(e)=> onInputChange(e)} value={phone} required />
      </div>

      <div>
        <button type="submit">Register</button>
      </div>
    </form>
  
    </div>
  )
}

export default Register*/



import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: ""
  });

  const { fullName, email, password, phone } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/user", user);
      alert("Registered Successfully");
      window.location.href("/login");// go back to login
    } catch (error) {
      console.error("Error registering:", error);
      alert("Registration failed");
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="fullName">Full Name:</label>
          <br />
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={fullName}
            onChange={onInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={onInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <br />
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={onInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="phone">Phone:</label>
          <br />
          <input
            type="text"
            id="phone"
            name="phone"
            value={phone}
            onChange={onInputChange}
            required
          />
        </div>

        <div>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}

export default Register;
