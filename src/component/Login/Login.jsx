/*import axios from 'axios';
import React, { useState } from 'react'

function Login() {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const onSubmit=async (e)=>{
        e.PreventDefault();
        const loginDetails=(email,password)
        try{
            const response=await axios.post('http://localhost:8080/api/users/login',loginDetails);
            if (response.data.id){
                localStorage.setItem('userId',response.data.id);// save user id
                alert.apply("Login Successful")
                window.location.reload(); // redirect to home page

            }else{
                alert("Invalid credentials")
            }
    }catch(err){
        alert('Invalid Credentials'
            window.location.reload();
        )
    }
}
        
    
  return (
    <div>


<h2>Login</h2>
      <form onSubmit={onSubmit}>
        

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
          <button type="submit">Login</button>
        </div>
      </form>

    </div>
  )
}

export default Login*/


import axios from "axios";
import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    const loginDetails = { email, password };

    try {
      const response = await axios.post(
        "http://localhost:8080/login", // ✅ adjust to your backend URL
        loginDetails
      );

      if (response.data.id) {
        localStorage.setItem("userId", response.data.id); // save user id
        alert("Login Successful");
        window.location.reload(); // reload or redirect
      } else {
        alert("Invalid credentials");
      }
    } catch (err) {
      alert("Invalid Credentials");
      window.location.reload();
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
