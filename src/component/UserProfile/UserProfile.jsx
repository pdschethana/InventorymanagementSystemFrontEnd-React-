/*import React, { useEffect, useState } from 'react'

function UserProfile() {
    const [user,setUser]=useState(null);
    const[isloading,setIsLoading]=useState(true);
    const[error,setError]=useState(null);
    useEffect(()=>{
        // get userid from local storage
        const userId=localStorage.getItem("userId");
        //if there is no user id then you can redirect to show an error
        if(!userId){
            setError("No user logged in");
            setIsLoading(false);
            return;
        }
        // fetch user data from API
        axios.get('http://localhost:8080/user/${userId}')
         .then(response=>{
            setUser(response.data);
            setIsLoading(false);
         });
        },[]);
        if(loading) return <p>Loading...</p>;
        if(error) return <p>{error}</p>;


  return (
    <div>


    </div>
  )
}

export default UserProfile*/    

import React, { useEffect, useState } from "react";
import axios from "axios";

function UserProfile() {
  const [user, setUser] = useState(null);
  const [isloading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    if (!userId) {
      setError("No user logged in");
      setIsLoading(false);
      return;
    }

    axios
      .get(`http://localhost:8080/user/${userId}`)
      .then((response) => {
        setUser(response.data);
        setIsLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch user data");
        setIsLoading(false);
      });
  }, []);
  const updateNavigate=(id)=>{
    window.location.href=`/updateprofile/${id}`;
  }
  // delete profile
  const deleteAccount=async()=>{
    // display confirmation dialog
    const confirmation = window.confirm("Are you want to delete this account");
    if (confirmation) {
      try {
        await axios.delete(`http://localhost:8080/user/${user.id}`);
        alert("Account deleted successfully");
        // remove user data from local storage
        localStorage.removeItem("userId");
        // redirect to login page
        window.location.href = "/register";
      } catch (error) {
        alert("Failed to delete account");
      }
    }
  }



  if (isloading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;


  return (
    <div>
      <h2>User Profile</h2>
      {user ? (
        <div>
          <p><strong>ID:</strong> {user.id}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Full Name:</strong> {user.fullName}</p>
          <p><strong>Phone:</strong>{user.phone}</p>
          <button onClick={()=>updateNavigate(user.id)}>Update</button>
          <button onClick={()=>deleteAccount(user.id)}>Delete</button>
          
        </div>
      ) : (
        <p>No user data found</p>
      )}
    </div>
  );
}

export default UserProfile;
