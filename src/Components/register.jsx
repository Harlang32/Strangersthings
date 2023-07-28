import React from 'react'
import { useState, useEffect } from "react";
import Root from "./routes/Root";

const Form = () => {
 const [username, setUsername] = useState('');
 const [password, setPassword] = useState('');

 const handleSubmit = (event) => {
  event.preventDefault();
  console.log(username)
        const username = event.target.username.value
          console.log(username);
 
      
      <form onSubmit ={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input type="text" name="username" value={username} onChange={handleChange}/>
        <button type="submit">Submit</button>
      </form>

      const handleChange =(event) => {
        setUsername(event.target.value)
      }
      
        
      }
      
    
  
}

export default register