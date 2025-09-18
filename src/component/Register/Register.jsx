


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
      // ✅ Fix: use backticks for template string
      const response = await axios.get(
        `http://localhost:8080/checkEmail?email=${email}`
      );

      if (response.data.exists) {
        alert("Email already exists");
        return;
      }

      // ✅ Register user if email is free
      await axios.post("http://localhost:8080/user", user);
      alert("Registered Successfully");
      navigate("/login"); // ✅ better than window.location.href
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
            onChange={(e) => {
              const re = /^[A-Za-z\s]*$/;
              if (e.target.value === "" || re.test(e.target.value)) {
                onInputChange(e);
              }
            }}
            value={fullName}
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
            required
            type="text"
            id="phone"
            name="phone"
            value={phone}
            onChange={(e) => {
              const re = /^[0-9\b]{0,10}$/;
              if (re.test(e.target.value)) {
                onInputChange(e);
              }
            }}
            maxLength={10}
            pattern="[0-9]{10}"
            title="Please enter exactly 10 digits"
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

