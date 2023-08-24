import React from 'react'
import PostForm from './PostForm';
import EditPost from './EditPost';
import { useState } from "react";
const Home = () => {
    return (
      <>
        <div className="text-2xl pl-7">Welcome to the Home page. Fill out the Post form to sell Something!</div>;
        <PostForm />
        
      </>
    );
}

export default Home;
