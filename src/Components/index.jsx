import React from "react";
import { useState, useEffect } from "react";
import PostForm from "./PostForm";
import EditPost from "./EditPost";


export const COHORT_NAME = "2303-FTB-MT-WEB-PT";
export const BASE_URL = "https://strangers-things.herokuapp.com/api";
export const TOKEN =
  "Bearer eyJfaWQiOiI1ZTg5MDY2ZGQ0MzkxNjAwTc1NTNlMDUiLCJ1c2VybmFtZSI6Im1hdHQiLCJpYXQiOjE1ODYwMzgzODF9";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [postId, setPostId] = useState(null);
  
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${BASE_URL}/${COHORT_NAME}/posts`);

        const data = await response.json();
        console.log(data.data.posts);
        setPosts(data.data.posts);
      } catch (err) {
        console.error(err);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
    <EditPost/>
      <h1 className="text-3xl pl-5">Posts</h1>
      {posts &&
        posts.map((post, index) => {
          return (
            <div key={index}>
              <h2 className="text-xl text-gray-800 mb-2 pl-2 pt-5">
                {post.title}
              </h2>
              <h3 className="text-xl font-bold text-gray-800 mb-2 pl-2">
                {post.price}
              </h3>
              <h3 className="text-xl font-bold text-gray-800 mb-2 pl-2">
                {post.description}
              </h3>
              <h3 className="text-1xl font-bold text-gray-800 mb-2 pl-8">
                {post.author.username}
              </h3>
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={() => setPostId(postId)}
              >
                Edit
              </button>
            </div>
          );
        })}

    </>
  );
};

export default App;
