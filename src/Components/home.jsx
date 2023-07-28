import React from 'react'
import PostForm from './PostForm';
import EditPost from './EditPost';
import { useState } from "react";
const Home = () => {
    return (
      <>
        <div className="text-2xl pl-5">Create a Post</div>;
        <PostForm />
        
      </>
    );
}

export default Home;
