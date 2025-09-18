
  

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateProfile() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/user/${id}`);
        const itemData = response.data;
        setFormData({
          fullName: itemData.fullName || "",
          email: itemData.email || "",
          password: itemData.password || "",
          phone: itemData.phone || "",
        });
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, [id]);

  // ✅ fixed braces here
  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/user/${id}`, formData);
      alert("Profile updated successfully");
      navigate("/userprofile"); // ✅ better than window.location.href
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <div>
      <h2>Update Profile</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="fullName">Full Name:</label>
          <br />
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
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
            value={formData.email}
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
            value={formData.password}
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
            value={formData.phone}
            onChange={onInputChange}
            required
          />
        </div>

        <div>
          <button type="submit">Update Profile</button>
        </div>
      </form>
    </div>
  );
}

export default UpdateProfile;     


