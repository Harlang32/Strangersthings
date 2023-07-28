import React from 'react'
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const [token, setToken] = useState("");
  const nav = useNavigate();
  
  useEffect(() => {
    setToken("");
    localStorage.removeItem("authToken");
    
    nav("/login", { replace: true });
    
  })
  
}

export default Logout