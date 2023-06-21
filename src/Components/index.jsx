import React from "react";
import { useState, useEffect} from "React"


export const COHORT_NAME = "2303-FTB-MT-WEB-PT";
export const BASE_URL = "https://strangers-things.herokuapp.com/api/";
const TOKEN = "Bearer eyJfaWQiOiI1ZTg5MDY2ZGQ0MzkxNjAwTc1NTNlMDUiLCJ1c2VybmFtZSI6Im1hdHQiLCJpYXQiOjE1ODYwMzgzODF9";

export const App = () => { 
 const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
      const response = await fetch(`${BASE_URL}/${COHORT_NAME}/posts`);

      const data = await resp.json();
      console.log(response);
      return data;
    } catch (err) {
      console.error(err);
     setPosts(data);
    }
    fetchPosts(data)
    };   
  }, [])

  return 
    <>
      <h4>Posts</h4>
      {posts.map(post => 
        <div key={post.id}>
          <h3>{post.title}</h3>
          <div>{post.body}</div>
        </div>
      )} 
      <Outlet/>
    </>; 
       
  }

  export default App